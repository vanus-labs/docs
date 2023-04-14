# GitHub

This guide contains information to set up a GitHub Source in Vanus Cloud.

## Introduction

GitHub is the largest web-based platform that provides developers with a place to host and manage their software projects.

The GitHub Source enables you to get specific CloudEvents when particular events take place on your repositories.

## Prerequisites

- GitHub Account with proper permissions(`Admin` or `Owner`) to your repository
- GitHub Repositories

## Getting Started

1. Log into your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. From the list of sources, choose **GitHub**.
3. Click `sign in` to authorize to your GitHub account.
   ![img.png](images/github-setup-1.png)
4. Select a repository to connect.
5. Click **`Next`** to save the GitHub Source.

## Supported Events

GitHub Source supports all [GitHub Webhook events](https://docs.github.com/webhooks-and-events/webhooks/webhook-events-and-payloads).
Here is a list of event types you can obtain from the GitHub Source.
Click it to see output CloudEvents corresponding to each event type.

- [check_run](events.md#sample-event-of-check_run)
- check_suite
- code_scanning_alert
- commit_comment
- content_reference
- create
- delete
- deploy_key
- deployment
- deployment_status
- discussion
- discussion_comment
- fork
- github_app_authorization
- gollum
- installation
- installation_repositories
- issue_comment
- issues
- label
- marketplace_purchase
- member
- membership
- meta
- milestone
- organization
- org_block
- package
- page_build
- ping
- project_card
- project_column
- project
- public
- pull_request
- pull_request_review
- pull_request_review_comment
- push
- release
- repository
- repository_dispatch
- repository_import
- repository_vulnerability_alert
- secret_scanning_alert
- security_advisory
- sponsorship
- star
- status
- team
- team_add
- watch
- workflow_dispatch
- workflow_run

Here are templates for this connector:

- [GitHub star event triggers a Feishu message](https://cloud.vanustest.com/connections/wizard?source=github&sink=feishu&id=20230306_1)
- [GitHub issue event triggers a Feishu message](https://cloud.vanustest.com/connections/wizard?source=github&sink=feishu&id=20230307_2)
- [GitHub issue comment event triggers a Feishu message](https://cloud.vanustest.com/connections/wizard?source=github&sink=feishu&id=20230307_3)
  = [GitHub opened pull-request event triggers a Feishu message](https://cloud.vanustest.com/connections/wizard?source=github&sink=feishu&id=20230316_4)
- [GitHub merged pull-request event triggers a Feishu message](https://cloud.vanustest.com/connections/wizard?source=github&sink=feishu&id=20230323_2)
- [GitHub star event triggers a Slack message](https://cloud.vanustest.com/connections/wizard?source=github&sink=slack&id=20230308_5)
- [GitHub issue event triggers a Slack message](https://cloud.vanustest.com/connections/wizard?source=github&sink=slack&id=20230308_6)
- [GitHub issue comment event triggers a Slack message](https://cloud.vanustest.com/connections/wizard?source=github&sink=slack&id=20230307_4)
- [GitHub opened pull-request event triggers a Slack message](https://cloud.vanustest.com/connections/wizard?source=github&sink=slack&id=20230316_3)
- [GitHub merged pull-request event triggers a Slack message](https://cloud.vanustest.com/connections/wizard?source=github&sink=slack&id=20230323_1)
- [A New GitHub issue triggers a row in Google Sheet](https://cloud.vanustest.com/connections/wizard?source=github&sink=google-sheets&id=20230309_7)
- [Real-time GitHub Developer 360](https://cloud.vanustest.com/connections/wizard?source=github&sink=google-sheets&id=20230314_8)
- [GitHub star event triggers a Discord message](https://cloud.vanustest.com/connections/wizard?source=github&sink=discord&id=20230320_1)
- [GitHub issue event triggers a Discord message](https://cloud.vanustest.com/connections/wizard?source=github&sink=discord&id=20230320_2)
- [GitHub issue comment event triggers a Discord message](https://cloud.vanustest.com/connections/wizard?source=github&sink=discord&id=20230320_3)
- [GitHub opened pull-request event triggers a Discord message](https://cloud.vanustest.com/connections/wizard?source=github&sink=discord&id=20230321_1)
- [GitHub merged pull-request event triggers a Discord message](https://cloud.vanustest.com/connections/wizard?source=github&sink=discord&id=20230412_3)

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
