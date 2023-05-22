# Slack

This guide contains information to set up a Slack Source in Vanus Cloud.

## Introduction

Slack is a cloud-based team collaboration platform that allows users to communicate, share files, and integrate with other tools and services.

Our Slack Source connector, lets you receive events when users join, message, react etc... 

---
## Prerequisites

Before obtaining Slack events, you must have:
- Have a [Slack account](https://slack.com).
- A [Vanus Cloud account](https://cloud.vanus.ai).

---

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

---

### Step 3: Create your connection in Vanus Cloud

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Write a name for your connection and choose your source. 
![](images/choose%20source.png)

4. Paste two credentials from Slack as configurations.
![](images/source%20config.png)

5. Click the **copy icon** to copy the webhook url 

---

### Step4: How to use the webhook URL of a Slack Source 

##### Configure Event Subscription  

1. Go back to **Slack API**.
![](images/img_5.png)

2. Now click on **Event Subscriptions** in the side menu.
![](images/img_6.png)

3. **Enable Events** by turning on the switch.
![](images/img_7.png)

4. Use the URL we've previously copied, and paste it in **Request URL**. You should see a green `Verified` indicating our Source is verified by Slack.
![](images/img_8.png)
   

##### Subscribe to bot events 

Generally speaking, Slack Source can subscribe any events you need from Slack.

But, if you're using some **Vanus Templates** like `Send a custom greeting message when new members join the Slack channel`, then you've to subscribe to some specific events.

| Templates                                                              | Events need to subscribe |
|------------------------------------------------------------------------|:------------------------:|
| Send a custom greeting message when new members join the Slack channel | `member_joined_channel`  |

###### How to subscribe

1. Scroll down, click **Subscribe to bot events** and after you will be able to click **Add Bot User Event**.
![](images/img_9.png)

2. Select the events you would like to receive, for example you can select `member_joined_channel` to receive events whenever a new member joins your Slack Channel.
![](images/member_joined.png)

3. Finally you can **Save Changes** to complete your configuration.
![](images/save%20changes.png)

---

##### Install the Slack App to your Slack workspace

1. Go to **Install Apps** from the side menu and click **Install to Workspace**.
![](images/img_13.png)

2. Allow it to be installed into your workspace.
![](images/img_14.png)

3. Mention your bot in slack and invite it to the channel.
![](images/img_15.png)

---

### Step5: Continue your configuration in Vanus cloud 

1. Choose your sink and click **Next** 
![3](images/choose%20sink.png) 

2. Click on submit to finish the configuration. 
![](images/submit.png)  

3. You've successfully created your Vanus source connection.  
![](images/created.png) 

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
