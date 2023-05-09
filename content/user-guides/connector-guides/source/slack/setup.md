# Slack

This guide contains information to set up a Slack Source in Vanus Cloud.

## Introduction

Slack is a cloud-based team collaboration platform that allows users to communicate, share files, and integrate with other tools and services.

Our Slack Source connector, lets you receive events when users join, message, react etc... 

## Prerequisites

Before obtaining Slack events, you must have:
- Have a [Slack account](https://slack.com).
- A [Vanus Cloud account](https://cloud.vanus.ai).

## Getting Started

### Step 1: Create and Install an App in Slack

1. Go to [Slack API](https://api.slack.com/apps), and click **Create New App**.
   ![](images/img.png)
2. Select From Scratch.
![](images/img_1.png)
3. Set the app name and Workspace.
![](images/img_2.png)

### Step 2: Get App Credentials

1. Go to **Basic Information**.
![](images/img_3.png)
2. Scroll down to **App Credentials** and copy the two following credentials.
 - Verification Token
 - Signing Secret
![](images/img_4.png)
3. Don't close this page but continue in Vanus Cloud

### Step 3: Connection in Vanus Cloud

1. Write a name for your connection.
 ![](images/img_22.png)
2. Paste two credentials from Slack as configurations.
   ![](images/img_19.png)
3. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction.   ![img.png](images/webhook_setup.png)
4. Click **`Next`** to save the Slack Source.
   ![img.png](images/img_20.png)
