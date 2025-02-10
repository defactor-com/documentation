import os
import requests
import datetime
import logging
import re
import argparse
import ssl
import certifi
import time

from dotenv import load_dotenv
from openai import OpenAI  # Assumed custom OpenAI client wrapper
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# Load environment variables (do not clear the entire os.environ)
load_dotenv()

def get_env_variable(var_name):
    """
    Load and validate an environment variable.
    """
    value = os.getenv(var_name)
    if not value:
        logging.error(f"Environment variable {var_name} is not set or is empty.")
        raise EnvironmentError(f"Missing required environment variable: {var_name}")
    return value

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Constants
GITHUB_API_URL = "https://api.github.com"
GH_TOKEN = get_env_variable("GH_TOKEN")
OPENAI_API_KEY = get_env_variable("OPENAI_API_KEY")
ASSISTANT_ID = get_env_variable("ASSISTANT_ID")
SLACK_TOKEN = get_env_variable("SLACK_TOKEN")
SLACK_CHANNEL = os.getenv("SLACK_CHANNEL", "defactor-internal")

# Initialize OpenAI and Slack clients
client = OpenAI(api_key=OPENAI_API_KEY)
slack_client = WebClient(token=SLACK_TOKEN, ssl=ssl.create_default_context(cafile=certifi.where()))

# List of repositories to scan
REPOS = [
    {'owner': 'defactor-com', 'name': 'assets-webapp'},
    {'owner': 'defactor-com', 'name': 'assets-backend'},
    {'owner': 'defactor-com', 'name': 'pools-webapp'},
    {'owner': 'defactor-com', 'name': 'pools-backend'},
    {'owner': 'defactor-com', 'name': 'engage-webapp'},
    {'owner': 'defactor-com', 'name': 'engage-backend'},
    {'owner': 'defactor-com', 'name': 'ui-kit'},
    {'owner': 'defactor-com', 'name': 'sdk'},
    {'owner': 'defactor-com', 'name': 'ipfs'},
    {'owner': 'defactor-com', 'name': 'documentation'}
]

# Helper functions
def get_sprint_info(target_date=None):
    """
    Calculate sprint information based on a target date.
    If no date is provided, uses today's date.
    Returns sprint start date, end date, and sprint number.
    """
    SPRINT_29_START = datetime.date(2025, 1, 27)  # Reference sprint start date
    SPRINT_29_NUMBER = 29  # Reference sprint number
    
    target_date = target_date or datetime.date.today()
    logging.info(f"Calculating sprint info for date: {target_date.strftime('%B %d, %Y')}")
    
    # Calculate days since the reference sprint
    days_since_ref = (target_date - SPRINT_29_START).days
    
    # Calculate which sprint this date belongs to
    current_sprint = days_since_ref // 14
    
    # Calculate sprint number and dates
    sprint_number = SPRINT_29_NUMBER + current_sprint
    sprint_start = SPRINT_29_START + datetime.timedelta(days=14 * current_sprint)
    sprint_end = sprint_start + datetime.timedelta(days=13)
    
    is_sprint_complete = target_date > sprint_end
    is_sprint_start_day = target_date.weekday() == 0 and target_date == sprint_start
    
    logging.info(f"Sprint {sprint_number}: {sprint_start.strftime('%B %d')} - {sprint_end.strftime('%B %d, %Y')}")
    logging.info(f"Sprint status: {'Complete' if is_sprint_complete else 'In Progress'}")
    
    return sprint_start, sprint_end, sprint_number, is_sprint_complete, is_sprint_start_day

def get_previous_sprint_dates():
    """
    Returns the start and end dates for the previous completed sprint,
    along with the sprint number.
    """
    today = datetime.date.today()
    current_sprint_start, current_sprint_end, current_sprint_number, is_complete, is_start_day = get_sprint_info(today)
    
    if is_start_day:
        # On sprint start day (Monday), return the previous sprint
        previous_sprint_start = current_sprint_start - datetime.timedelta(days=14)
        previous_sprint_end = current_sprint_start - datetime.timedelta(days=1)
        previous_sprint_number = current_sprint_number - 1
    else:
        # On any other day, return the current sprint
        previous_sprint_start = current_sprint_start
        previous_sprint_end = current_sprint_end
        previous_sprint_number = current_sprint_number
    
    logging.info(f"Selected Sprint {previous_sprint_number}")
    logging.info(f"Sprint start date: {previous_sprint_start.strftime('%B %d, %Y')}")
    logging.info(f"Sprint end date: {previous_sprint_end.strftime('%B %d, %Y')}")
    
    return previous_sprint_start, previous_sprint_end, previous_sprint_number

def github_api_request(url, params=None):
    """
    Make a GitHub API request and return JSON response.
    """
    headers = {"Authorization": f"token {GH_TOKEN}"}
    response = requests.get(url, headers=headers, params=params)
    logging.debug(f"GitHub API request URL: {response.url}")
    response.raise_for_status()
    return response.json()

def get_pull_requests(owner: str, repo: str, start_date: datetime.date, end_date: datetime.date) -> list:
    pulls = []
    page = 1
    while True:
        pulls_url = f"{GITHUB_API_URL}/repos/{owner}/{repo}/pulls"
        params = {"state": "all", "sort": "updated", "direction": "desc", "per_page": 100, "page": page}
        page_data = github_api_request(pulls_url, params)
        if not page_data:
            break
        pulls.extend(page_data)
        # If fewer than 100 results, then it's the last page.
        if len(page_data) < 100:
            break
        page += 1
    relevant_pulls = [
        pr for pr in pulls 
        if start_date <= datetime.datetime.strptime(pr["updated_at"], "%Y-%m-%dT%H:%M:%SZ").date() <= end_date
    ]
    return relevant_pulls

def get_issue_details(owner, repo, issue_number):
    """
    Retrieve issue details by issue number.
    """
    issue_url = f"{GITHUB_API_URL}/repos/{owner}/{repo}/issues/{issue_number}"
    return github_api_request(issue_url)

def extract_issue_numbers(pr_body):
    """
    Extract issue numbers referenced in the PR body.
    """
    if not pr_body:
        return []
    issue_numbers = re.findall(
        r'(?:fixes|closes|resolves|references|refs|fix|close|resolve)[^\n\r#]*(?:#|GH-)(\d+)', 
        pr_body, re.IGNORECASE
    )
    logging.debug(f"Extracted issue references: {issue_numbers}")
    return list(map(int, issue_numbers))

def clean_pr_body(pr_body):
    """
    Remove unwanted sections from the PR description.
    """
    if not pr_body:
        return "No description provided."
    cleaned = re.sub(r'### Steps to test.*?(\n\n|$)', '', pr_body, flags=re.DOTALL)
    cleaned = re.sub(r'#### CheckList.*?(\n\n|$)', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'\d+\.\s.*\n', '', cleaned, flags=re.MULTILINE)
    cleaned = re.sub(r'- \[[ x]\].*\n', '', cleaned, flags=re.MULTILINE)
    return cleaned.strip()

def generate_summary(repos, start_date, end_date, sprint_number):
    """
    Generate a markdown summary of the sprint updates.
    """
    summary = f"# Development Sprint Updates (Sprint {sprint_number}: {start_date.strftime('%B %d')} - {end_date.strftime('%B %d, %Y')})\n\n"
    
    for repo in repos:
        owner = repo['owner']
        name = repo['name']
        logging.info(f"Processing repository: {owner}/{name}")
        summary += f"## Repository: {owner}/{name}\n\n"
        pulls = get_pull_requests(owner, name, start_date, end_date)
        if not pulls:
            summary += "• No activity in this repository during this week.\n\n"
            continue
        
        # Track which issues have been added to avoid duplicates
        issues_seen = set()
        for pr in pulls:
            pr_body = pr.get('body', 'No description provided.')
            cleaned_body = clean_pr_body(pr_body)
            # Instead of including PR numbers, we only show the title and description.
            summary += f"• *{pr['title']}*\n"
            summary += f"  - Description: {cleaned_body}\n"
            issue_numbers = extract_issue_numbers(pr_body)
            if issue_numbers:
                summary += "  - Referenced Issues:\n"
                for issue_number in issue_numbers:
                    if issue_number not in issues_seen:
                        try:
                            issue_details = get_issue_details(owner, name, issue_number)
                            summary += f"    • {issue_details['title']} – {issue_details.get('body', 'No details provided.')}\n"
                            issues_seen.add(issue_number)
                        except requests.exceptions.HTTPError as e:
                            logging.error(f"Failed to fetch details for issue #{issue_number} in {owner}/{name}: {e}")
            else:
                summary += "  - No issues referenced.\n"
            summary += "\n"
    return summary

def save_summary_to_file(summary, filename):
    """
    Save the summary text to a file.
    """
    with open(filename, "w") as file:
        file.write(summary)
    logging.info(f"Summary saved to {filename}")

def format_for_slack(text):
    """
    Convert markdown formatting to Slack-friendly formatting.
    - Headers become bold.
    - Bullet points remain single-level.
    """
    # Convert headers (remove extra bullets if any)
    text = re.sub(r'^# (.*?)$', r'*\1*', text, flags=re.MULTILINE)  # h1 becomes bold
    text = re.sub(r'^## (.*?)$', r'*\1*', text, flags=re.MULTILINE)  # h2 becomes bold
    text = re.sub(r'^• \*', '• *', text, flags=re.MULTILINE)  # ensure only one bullet level
    
    # Replace markdown bold with Slack bold
    text = re.sub(r'\*\*(.*?)\*\*', r'*\1*', text)
    # Normalize list spacing
    text = re.sub(r'\n\n+', '\n\n', text)
    return text.strip()

def get_polished_summary(summary: str, sprint_number: int) -> str:
    """
    Use the assistant to reformat the summary for Slack.
    If the assistant fails, return the formatted summary.
    """
    thread = client.beta.threads.create()
    assistant_prompt = f"""
    Please reformat the following development update for Sprint {sprint_number} into a concise, well-structured Slack message for our marketing team.
    Organize the updates by repository (each repository under its own header).
    Use bullet points for key updates but do not nest them (avoid double bullet points).
    Remove any references to PR numbers and issue numbers.
    Rewrite each bullet point's title to be more human-friendly based on our commit message guidelines.
    This update will be published on the defactor Technology & Innovation section of our internal site: https://inside.defactor.com.
    
    {summary}
    """
    client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=assistant_prompt
    )
    run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=ASSISTANT_ID)

    timeout = 60  # maximum seconds to wait (tweak as needed)
    start_time = time.time()
    while True:
        if time.time() - start_time > timeout:
            logging.error("Assistant run timed out!")
            return format_for_slack(summary)
        run_status = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
        if run_status.status == 'completed':
            break
        elif run_status.status in ['failed', 'cancelled', 'expired']:
            logging.error(f"Assistant run failed with status: {run_status.status}")
            return format_for_slack(summary)
        time.sleep(1)

    messages = client.beta.threads.messages.list(thread_id=thread.id)
    for message in messages:
        if message.role == "assistant":
            return format_for_slack(message.content[0].text.value)
    return format_for_slack(summary)

def post_to_slack(channel, message):
    """
    Post the provided message to Slack, splitting it if necessary.
    """
    try:
        max_length = 40000  # Slack's maximum message length
        parts = [message[i:i+max_length] for i in range(0, len(message), max_length)]
        for part in parts:
            response = slack_client.chat_postMessage(channel=channel, text=part, parse='full')
            logging.info(f"Message posted to {channel}: {response['ts']}")
    except SlackApiError as e:
        logging.error(f"Error posting message to Slack: {e.response['error']}")

def main(repos, start_date=None, end_date=None, sprint_number=None):
    """
    Main workflow:
      1. Generate a summary of updates.
      2. Save the raw summary.
      3. Use the assistant to polish the summary.
      4. Save the polished summary.
      5. Post the polished summary to Slack.
    """
    if start_date and end_date:
        # Manual date range provided
        if not sprint_number:
            # Calculate sprint number based on the start date
            _, _, sprint_number, _, _ = get_sprint_info(start_date)
        logging.info(f"Using provided dates: {start_date.strftime('%B %d, %Y')} to {end_date.strftime('%B %d, %Y')}")
        logging.info(f"Using sprint number: {sprint_number}")
    else:
        # Automatic date calculation
        start_date, end_date, sprint_number = get_previous_sprint_dates()
    
    logging.info(f"Generating summary for Sprint {sprint_number}")
    if datetime.date.today() <= end_date:
        logging.warning(f"Generating report for incomplete Sprint {sprint_number}")
    
    summary = generate_summary(repos, start_date, end_date, sprint_number)
    
    raw_filename = f"Development_Sprint_{sprint_number}_Updates_{start_date}_to_{end_date}_raw.txt"
    polished_filename = f"Development_Sprint_{sprint_number}_Updates_{start_date}_to_{end_date}_polished.txt"
    
    logging.info(f"Saving raw summary to: {raw_filename}")
    save_summary_to_file(summary, raw_filename)
    
    logging.info(f"Getting polished summary from assistant for Sprint {sprint_number}")
    polished_summary = get_polished_summary(summary, sprint_number)
    
    logging.info(f"Saving polished summary to: {polished_filename}")
    save_summary_to_file(polished_summary, polished_filename)
    
    logging.info(f"Posting Sprint {sprint_number} update to Slack channel: {SLACK_CHANNEL}")
    post_to_slack(SLACK_CHANNEL, polished_summary)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Generate sprint update report from GitHub.')
    parser.add_argument('--start_date', type=str, help='Start date in YYYY-MM-DD format')
    parser.add_argument('--end_date', type=str, help='End date in YYYY-MM-DD format')
    parser.add_argument('--sprint_number', type=int, help='Optional: Override sprint number')
    args = parser.parse_args()

    try:
        if (args.start_date and not args.end_date) or (args.end_date and not args.start_date):
            raise ValueError("Both start_date and end_date must be provided together.")
        
        start_date = datetime.datetime.strptime(args.start_date, '%Y-%m-%d').date() if args.start_date else None
        end_date = datetime.datetime.strptime(args.end_date, '%Y-%m-%d').date() if args.end_date else None
        sprint_number = args.sprint_number
        
        main(REPOS, start_date, end_date, sprint_number)
    except Exception as e:
        logging.error(f"Error running script: {str(e)}")
        raise
