#  
# Prerequisites

Before forwarding events to Slack, you must have:

- A Slack Account

---

**Perform the following steps to configure your slack Sink:**


**To set up an app for receiving events in your Slack channel:**
# Step 1: Create a Slack App
1. Create an [App on Slack](https://api.slack.com/apps).
   ![](images/1.png)
2. Select From Scratch.
   ![](images/2.png)
3. Set the app name and Workspace.
![](images/3.png)

---

# Step 2: Create a Incoming Webhook
1. select **Incoming Webhooks** in the sidebar menu.
![img.png](images/4.png)
2. Turn on Webhooks and scroll down and click **Add New Webhook to Workspace** to add new webhook.
![](images/5.png)
3. Select the channel to receive messages.
![img.png](images/6.png)
4. Now copy the webhook URL.
![](images/7.png)

Check out this detail [**Article**](https://www.vanus.ai/blog/get-your-slack-webhook-url/) on how to get a Slack Webhook URL.

---

# Step 3: Finish the Connection
1. In Vanus Cloud, paste the Webhook URL into the `URL` field. 
![img_2.png](images/8.png)
2. Click **Next** to continue.

---

# Required Data Format

The event data must be JSON format, here a simple message, example:

```json
{
  "data": {
    "subject": "Test",
    "message": "Hello Slack!:wave: This is Sink Slack!"
  }
}
```
