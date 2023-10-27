# Slack

This guide contains information to set up a Slack Source in Vanus Connect.

## Introduction

Slack is a cloud-based team collaboration platform that allows users to communicate, share files, and integrate with other tools and services.

Our Slack Source connector, lets you receive events when users join, message, react etc.

## Prerequisites

Before obtaining Slack events, you must have:
- Have a [Slack account](https://slack.com).
- A [Vanus Cloud account](https://cloud.vanus.ai).

## Getting Started

### Step 1: Create an app in Slack

1. Go to [Slack API](https://api.slack.com/apps), and click **Create New App**①.

![slack_source_1.webp](./images/slack_source_1.webp) 

2. Select **From Scratch**②.

![slack_source_2.webp](./images/slack_source_2.webp) 

3. Set the **App Name**③, **Workspace**④, and click the **Create App**⑤ button.

![slack_source_3.webp](./images/slack_source_3.webp) 

### Step 2: Get App Credentials

1. Go to **Basic Information**①.

![slack_source_4.webp](./images/slack_source_4.webp) 

2. Scroll down to **App Credentials** and copy the **Verification Token**②, and **Signing Secret**③.

![slack_source_5.webp](./images/slack_source_5.webp) 

3. Go to your Vanus Connection, Give the connection a **Name**④, paste the **Verification Token**⑤ and **Signing Secret**⑥ from Slack as configurations, select the **Events**⑦, and click **Next**⑧.

![slack_source_6.webp](./images/slack_source_6.webp) 

---

### Step 3: Configure Event Subscription

1. Click on the **Connection Name**①.

![slack_sheets_12.webp](./images/slack_sheets_12.webp)

2. Click the **copy icon**② to copy the webhook URL.

![slack_sheets_13.webp](./images/slack_sheets_13.webp)

3. Go back to your Slack App, and click on **Event Subscriptions**③ in the side menu.

![slack_sheets_14.webp](./images/slack_sheets_14.webp)

4. **Enable Events**④ by turning on the switch, and use the URL we've previously copied and paste it into **Request URL**⑤. You should see a green `Verified`, indicating our Source is verified by Slack.

![slack_sheets_15.webp](./images/slack_sheets_15.webp)

5. Scroll down, click **Subscribe to bot events**⑥ and after, you will be able to click **Add Bot User Event**⑦.

![slack_sheets_16.webp](./images/slack_sheets_16.webp)

6. Select the event **message.channels**⑧.

![slack_sheets_17.webp](./images/slack_sheets_17.webp)

7. Click on **Save Changes**⑨ to complete your configuration.

![slack_sheets_18.webp](./images/slack_sheets_18.webp)

8. Go to **Install App**⑩ from the side menu and click **Install to Workspace**⑪.

![slack_sheets_19.webp](./images/slack_sheets_19.webp)

9. Click on **Allow**⑫.

![slack_sheets_20.webp](./images/slack_sheets_20.webp)

10. Go to your Slack workspace, invite the bot to the channel by clicking **Add to Channel**⑬ button.

![slack_sheets_22.webp](./images/slack_sheets_22.webp)


