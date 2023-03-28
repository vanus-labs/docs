# Output Events of GitHub Source

GitHub Source supports all **[GitHub Webhook events](https://docs.github.com/webhooks##and##events/webhooks/webhook##events##and##payloads)**.

GitHub Source generates **[CloudEvents](https://docs.vanus.ai/reference/cloudevents)** corresponding to each type of GitHub events.

## Sample Event of check_run

### Action: `completed`

```json
{
  "id": "72d3162e-cc78-11e3-81ab-4c9367dc0958",
  "source": "https://api.github.com/users/octocat",
  "specversion": "1.0",
  "type": "com.github.check_run.completed",
  "datacontenttype": "application/json",
  "subject": "123456789",
  "time": "2022-03-27T19:28:38Z",
  "data": {
    "action": "completed",
    "check_run": {
      "id": 123456789,
      "name": "Lint",
      "status": "completed",
      "conclusion": "success",
      "head_sha": "abcdef123456",
      "started_at": "2022-03-27T01:23:45Z",
      "completed_at": "2022-03-27T01:24:10Z",
      "output": {
        "title": "Lint check passed",
        "summary": "All files passed lint checks.",
        "text": "### Lint check results\n\n- File1.js: No issues found\n- File2.js: No issues found\n- File3.js: No issues found"
      },
      "check_suite": {
        "id": 987654321
      },
      "app": {
        "id": 123,
        "name": "My Linter",
        "slug": "my-linter"
      }
    },
    "repository": {
      "id": 123456,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjM0NTY=",
      "name": "my-repo",
      "full_name": "my-username/my-repo",
      "private": false,
      "owner": {
        "login": "my-username",
        "id": 1234,
        "node_id": "MDQ6VXNlcjEyMzQ=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1234?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/my-username",
        "html_url": "https://github.com/my-username",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/my-username/my-repo",
      "url": "https://api.github.com/repos/my-username/my-repo"
    },
    "sender": {
      "login": "my-username",
      "id": 1234,
      "node_id": "MDQ6VXNlcjEyMzQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1234?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/my-username",
      "html_url": "https://github.com/my-username",
      "type": "User",
      "site_admin": false
    }
  }
}
```
## Sample Event of check_suite
## Sample Event of code_scanning_alert
## Sample Event of commit_comment
## Sample Event of content_reference
## Sample Event of create
## Sample Event of delete
## Sample Event of deploy_key
## Sample Event of deployment
## Sample Event of deployment_status
## Sample Event of discussion
## Sample Event of discussion_comment
## Sample Event of fork
## Sample Event of github_app_authorization
## Sample Event of gollum
## Sample Event of installation
## Sample Event of installation_repositories
## Sample Event of issue_comment
## Sample Event of issues


## Sample Event of label
## Sample Event of marketplace_purchase
## Sample Event of member
## Sample Event of membership
## Sample Event of meta
## Sample Event of milestone
## Sample Event of organization
## Sample Event of org_block
## Sample Event of package
## Sample Event of page_build
## Sample Event of ping
## Sample Event of project_card
## Sample Event of project_column
## Sample Event of project
## Sample Event of public
## Sample Event of pull_request
## Sample Event of pull_request_review
## Sample Event of pull_request_review_comment
## Sample Event of push
## Sample Event of release
## Sample Event of repository
## Sample Event of repository_dispatch
## Sample Event of repository_import
## Sample Event of repository_vulnerability_alert
## Sample Event of secret_scanning_alert
## Sample Event of security_advisory
## Sample Event of sponsorship
## Sample Event of star
## Sample Event of status
## Sample Event of team
## Sample Event of team_add
## Sample Event of watch
## Sample Event of workflow_dispatch
## Sample Event of workflow_run
