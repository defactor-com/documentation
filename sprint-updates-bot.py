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
from openai import OpenAI
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# Clear all environment variables
for key in list(os.environ.keys()):
    os.environ.pop(key)

# Load environment variables
load_dotenv()

# Function to load and validate environment variables
def get_env_variable(var_name):
    value = os.getenv(var_name)
    if not value:
        logging.error(f"Environment variable {var_name} is not set or is empty.")
        return None
    return value

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Constants
GITHUB_API_URL = "https://api.github.com"
GH_TOKEN = get_env_variable("GH_TOKEN")
OPENAI_API_KEY = get_env_variable("OPENAI_API_KEY")
ASSISTANT_ID =  get_env_variable("ASSISTANT_ID")
SLACK_TOKEN = get_env_variable("SLACK_TOKEN")
SLACK_CHANNEL = "defactor-internal" 

# Initialize OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY)

# Initialize Slack client
slack_client = WebClient(token=SLACK_TOKEN, ssl=ssl.create_default_context(cafile=certifi.where()))

# List of repositories
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
def get_previous_week_dates():
    today = datetime.date.today()
    start_of_week = today - datetime.timedelta(days=today.weekday() + 7)
    end_of_week = start_of_week + datetime.timedelta(days=6)
    return start_of_week, end_of_week

def github_api_request(url, params=None):
    headers = {"Authorization": f"token {GH_TOKEN}"}
    response = requests.get(url, headers=headers, params=params)
    logging.debug(f"GitHub API request URL: {response.url}")
    response.raise_for_status()
    return response.json()

def get_pull_requests(owner, repo, start_date, end_date):
    pulls_url = f"{GITHUB_API_URL}/repos/{owner}/{repo}/pulls"
    params = {"state": "all", "sort": "updated", "direction": "desc", "per_page": 100}
    pulls = github_api_request(pulls_url, params)
    relevant_pulls = [pr for pr in pulls if start_date <= datetime.datetime.strptime(pr["updated_at"], "%Y-%m-%dT%H:%M:%SZ").date() <= end_date]
    return relevant_pulls

def get_issue_details(owner, repo, issue_number):
    issue_url = f"{GITHUB_API_URL}/repos/{owner}/{repo}/issues/{issue_number}"
    return github_api_request(issue_url)

def extract_issue_numbers(pr_body):
    if not pr_body:
        return []
    
    issue_numbers = []
    issue_references = re.findall(r'(?:fixes|closes|resolves|references|refs|fix|close|resolve)[^\n\r#]*(?:#|GH-)(\d+)', pr_body, re.IGNORECASE)
    logging.debug(f"Extracted issue references: {issue_references}")
    issue_numbers.extend(map(int, issue_references))
    return issue_numbers

def clean_pr_body(pr_body):
    if pr_body is None:
        return "No description provided."
    
    cleaned_body = re.sub(r'### Steps to test.*?(\n\n|$)', '', pr_body, flags=re.DOTALL)
    cleaned_body = re.sub(r'#### CheckList.*?(\n\n|$)', '', cleaned_body, flags=re.DOTALL)
    cleaned_body = re.sub(r'\d+\.\s.*\n', '', cleaned_body, flags=re.MULTILINE)
    cleaned_body = re.sub(r'- \[[ x]\].*\n', '', cleaned_body, flags=re.MULTILINE)
    return cleaned_body.strip()

def generate_summary(repos, start_date, end_date):
    summary = f"# Development Weekly Updates (Week of {start_date} to {end_date})\n\n"
    for repo in repos:
        owner = repo['owner']
        name = repo['name']
        logging.info(f"Processing repository: {owner}/{name}")
        summary += f"## Repository: {owner}/{name}\n\n"
        pulls = get_pull_requests(owner, name, start_date, end_date)
        if not pulls:
            summary += "No activity in this repository during this week.\n\n"
            logging.info(f"No pull requests found for {owner}/{name}")
            continue
        
        issues_seen = set()
        for pr in pulls:
            pr_body = pr.get('body', 'No description provided.')
            logging.debug(f"Processing PR #{pr['number']} with body:\n{pr_body}")
            cleaned_body = clean_pr_body(pr_body)
            summary += f"### Pull Request #{pr['number']}: {pr['title']}\n"
            summary += f"- **Description:** {cleaned_body}\n"
            issue_numbers = extract_issue_numbers(pr_body)
            logging.debug(f"Issue numbers for PR #{pr['number']}: {issue_numbers}")
            if issue_numbers:
                summary += "- **Referenced Issues:**\n"
                for issue_number in issue_numbers:
                    if issue_number not in issues_seen:
                        try:
                            logging.info(f"Fetching details for issue #{issue_number} in {owner}/{name}")
                            issue_details = get_issue_details(owner, name, issue_number)
                            summary += f"  - **Issue #{issue_number}:** {issue_details['title']}\n"
                            summary += f"    - {issue_details['body']}\n"
                            issues_seen.add(issue_number)
                        except requests.exceptions.HTTPError as e:
                            logging.error(f"Failed to fetch details for issue #{issue_number} in {owner}/{name}: {e}")
                            logging.error(f"HTTP Error: {e.response.status_code} - {e.response.text}")
            else:
                summary += "  - No issues referenced.\n"
            summary += "\n"
    return summary

def save_summary_to_file(summary, filename):
    with open(filename, "w") as file:
        file.write(summary)
    logging.info(f"Summary saved to {filename}")

def format_for_slack(text):
    """Convert markdown formatting to Slack formatting"""
    # Replace markdown headers with Slack bold
    text = re.sub(r'^# (.*?)$', r'*\1*\n', text, flags=re.MULTILINE)  # h1
    text = re.sub(r'^## (.*?)$', r'*\1*\n', text, flags=re.MULTILINE)  # h2
    text = re.sub(r'^### (.*?)$', r'• *\1*\n', text, flags=re.MULTILINE)  # h3 with bullet
    
    # Replace markdown bold with Slack bold
    text = re.sub(r'\*\*(.*?)\*\*', r'*\1*', text)
    
    # Replace markdown lists with Slack lists
    text = re.sub(r'^\s*- ', '• ', text, flags=re.MULTILINE)
    
    # Add spacing for readability
    text = re.sub(r'\n\n+', '\n\n', text)  # Normalize multiple newlines
    text = re.sub(r'(\*[^*]+\*)\n', r'\1\n\n', text)  # Add space after headers
    
    # Clean up any remaining markdown artifacts
    text = re.sub(r'`|_', '', text)
    
    return text.strip()

def get_polished_summary(summary):
    # Create a thread
    thread = client.beta.threads.create()

    # Add the summary message to the thread
    client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=f"""Please format this sprint development update in a clear, concise way for Slack. 
        Use bullet points for clarity and organize the information hierarchically.
        Focus on the most important changes and achievements.
        
        {summary}"""
    )

    # Run the assistant
    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=ASSISTANT_ID
    )

    # Wait for the run to complete
    while True:
        run_status = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id
        )
        if run_status.status == 'completed':
            break
        elif run_status.status in ['failed', 'cancelled', 'expired']:
            logging.error(f"Assistant run failed with status: {run_status.status}")
            return format_for_slack(summary)
        time.sleep(1)

    # Get the assistant's response
    messages = client.beta.threads.messages.list(thread_id=thread.id)
    # Get the last assistant message
    for message in messages:
        if message.role == "assistant":
            return format_for_slack(message.content[0].text.value)

    return format_for_slack(summary)  # Return formatted original summary if no assistant response

def post_to_slack(channel, message):
    try:
        # Split message if it exceeds Slack's length limit
        max_length = 40000  # Slack's message length limit
        messages = [message[i:i+max_length] for i in range(0, len(message), max_length)]
        
        for msg in messages:
            response = slack_client.chat_postMessage(
                channel=channel,
                text=msg,
                parse='full'  # This tells Slack to parse all formatting
            )
            logging.info(f"Message posted to {channel}: {response['ts']}")
    except SlackApiError as e:
        logging.error(f"Error posting message to Slack: {e.response['error']}")

def main(repos, start_date=None, end_date=None):
    if not start_date or not end_date:
        start_date, end_date = get_previous_week_dates()
    summary = generate_summary(repos, start_date, end_date)
    raw_summary_filename = f"Development_Sprint_Updates_{start_date}_to_{end_date}_raw.txt"
    polished_summary_filename = f"Development_Sprint_Updates_{start_date}_to_{end_date}_polished.txt"
    save_summary_to_file(summary, raw_summary_filename)
    polished_summary = get_polished_summary(summary)
    save_summary_to_file(polished_summary, polished_summary_filename)
    post_to_slack(SLACK_CHANNEL, polished_summary)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Generate sprint update report from GitHub.')
    parser.add_argument('--start_date', type=str, help='Start date in YYYY-MM-DD format')
    parser.add_argument('--end_date', type=str, help='End date in YYYY-MM-DD format')
    args = parser.parse_args()

    start_date = datetime.datetime.strptime(args.start_date, '%Y-%m-%d').date() if args.start_date else None
    end_date = datetime.datetime.strptime(args.end_date, '%Y-%m-%d').date() if args.end_date else None

    main(REPOS, start_date, end_date)