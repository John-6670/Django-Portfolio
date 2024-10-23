import requests, re
from datetime import datetime


def get_commit_dates(github_url):
    # Extract the owner and repo name from the GitHub URL
    match = re.match(r"https://github\.com/([^/]+)/([^/]+)", github_url)
    if not match:
        return None  # Invalid URL format

    owner, repo_name = match.groups()

    # Now make the GitHub API request
    url = f"https://api.github.com/repos/{owner}/{repo_name}/commits"
    response = requests.get(url)

    # Handle errors
    if response.status_code != 200:
        return None, None  # Handle error appropriately

    commits = response.json()
    if commits:
        # Extract the date from the first and last commits
        last_commit_date_str = commits[0]['commit']['author']['date']

        # Parse the date strings and convert to "YYYY-MM-DD" format
        last_commit_date = datetime.strptime(last_commit_date_str, "%Y-%m-%dT%H:%M:%SZ").date()

        # Convert the date object to a string in "YYYY-MM-DD" format
        last_commit_date = last_commit_date.strftime("%Y-%m-%d")

        return last_commit_date

    return None
