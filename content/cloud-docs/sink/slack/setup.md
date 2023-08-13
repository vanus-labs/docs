--- 
hide_table_of_contents: true
hide_title: true
---

## Prerequisites

- A [slack account](https://slack.com)
- A slack[ Workspace](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)

---

Perform the following steps to configure your Slack Sink.

**Note: If you already have created a Slack App, you can skip Step 1 and directly go to [Step 2](#step-2-create-an-incoming-webhook).**

### Step 1: Create a Slack App
1. Create an [App on Slack](https://api.slack.com/apps).
   ![](images/1.png)
2. Select From Scratch.
   ![](images/2.png)
3. Set the app name and Workspace.
![](images/3.png)

---

### Step 2: Create an Incoming Webhook
1. Select **Incoming Webhooks** in the sidebar menu.
![img.png](images/4.png)
2. Turn on Webhooks, scroll down, and click **Add New Webhook to Workspace** to add a new one.
![](images/5.png)
3. Select the channel to receive messages and click **Allow**.
![img.png](images/6.png)
4. Now copy the webhook URL.
![](images/7.png)

---

### Step 3: Slack Connection Settings

1. Paste the Webhook URL into the `URL` field, and Click on submit to finish the configuration.
   ![img_2.png](images/submit-slack.png)
   
---

