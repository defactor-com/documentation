import os
import requests
import datetime
import logging
import re
from openai import OpenAI
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
import ssl
import certifi

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Constants
GITHUB_API_URL = "https://api.github.com"
TOKEN = os.getenv("GH_TOKEN")  # Get the token from environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")  # Get the OpenAI API key from environment variables
SLACK_TOKEN = os.getenv("SLACK_TOKEN")  # Get the Slack token from environment variables
SLACK_CHANNEL = os.getenv("SLACK_CHANNEL")  # Get the Slack channel from environment variables
ASSISTANT_ID = os.getenv("ASSISTANT_ID")  # Get the assistant ID from environment variables

# Initialize OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY)

# Initialize Slack client
slack_client = WebClient(token=SLACK_TOKEN, ssl=ssl.create_default_context(cafile=certifi.where()))

# List of repositories
REPOS = [
    {'owner': 'defactor-com', 'name': 'ui-kit'},
    {'owner': 'defactor-com', 'name': 'assets-webapp'},
    {'owner': 'defactor-com', 'name': 'pools-backend'},
    {'owner': 'defactor-com', 'name': 'pools-webapp'},
    {'owner': 'defactor-com', 'name': 'documentation'},
    {'owner': 'defactor-com', 'name': 'sdk'}
]

# Helper functions
def get_previous_week_dates():
    today = datetime.date.today()
    start_of_week = today - datetime.timedelta(days=today.weekday() + 7)
    end_of_week = start_of_week + datetime.timedelta(days=6)
    return start_of_week, end_of_week

def github_api_request(url, params=None):
    headers = {"Authorization": f"token {TOKEN}"}
    response = requests.get(url, headers=headers, params=params)
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
    issue_numbers = []
    # More flexible regex to capture variations in references
    issue_references = re.findall(r'(?:fixes|closes|resolves|references|refs|fix|close|resolve)[^\n\r#]*(?:#|GH-)(\d+)', pr_body, re.IGNORECASE)
    logging.debug(f"Extracted issue references: {issue_references}")
    issue_numbers.extend(map(int, issue_references))
    return issue_numbers

def clean_pr_body(pr_body):
    # Remove "Steps to test" and "CheckList" sections
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
            logging.debug(f"Processing PR #{pr['number']} with body:\n{pr['body']}")
            cleaned_body = clean_pr_body(pr['body'])
            summary += f"### Pull Request #{pr['number']}: {pr['title']}\n"
            summary += f"- **Description:** {cleaned_body}\n"
            issue_numbers = extract_issue_numbers(pr['body'])
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

def get_polished_summary(summary):
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"You are an assistant with the ID {ASSISTANT_ID}."},
            {"role": "user", "content": summary}
        ],
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5
    )
    return response.choices[0].message.content.strip()

def post_to_slack(channel, message):
    try:
        response = slack_client.chat_postMessage(channel=channel, text=message)
        logging.info(f"Message posted to {channel}: {response['ts']}")
    except SlackApiError as e:
        logging.error(f"Error posting message to Slack: {e.response['error']}")

def main(repos):
    start_date, end_date = get_previous_week_dates()
    summary = generate_summary(repos, start_date, end_date)
    raw_summary_filename = f"Development_Weekly_Updates_{start_date}_to_{end_date}_raw.txt"
    polished_summary_filename = f"Development_Weekly_Updates_{start_date}_to_{end_date}_polished.txt"
    save_summary_to_file(summary, raw_summary_filename)
    polished_summary = get_polished_summary(summary)
    save_summary_to_file(polished_summary, polished_summary_filename)

    # Generate Development Updates Article
    print(polished_summary)

    # Post summary to Slack (commented out for now)
    post_to_slack(SLACK_CHANNEL, polished_summary)

if __name__ == "__main__":
    main(REPOS)