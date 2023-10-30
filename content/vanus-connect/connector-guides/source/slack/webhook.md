
# How to use the webhook URL of a slack source

## Configure Event Subscription

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


---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).
