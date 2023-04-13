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

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).