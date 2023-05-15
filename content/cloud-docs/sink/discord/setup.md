## Prerequisites

Before forwarding events to Slack, you must have:

- A Discord Account

## Getting Started

**To set up an app for receiving events in your Discord server:**

### Step 1: Create a Server
1. Go to the Discord application.
2. Create a new server by clicking the `+`.

    ![img.png](images/1.png)
3. Choose a template or create your own.

    ![img.png](images/2.png)

    ![img.png](images/2.1.png)

4. Finish setting up your server.

    ![img.png](images/2.2.png)

### Step 2: Get a webhook url
1. Go to **Server Settings**.
    ![img_2.png](images/3.png)
2. Click **integration** in the sidebar under APPS.
    ![img_3.png](images/4.png)
3. Click **create Webhook**.
    ![img_3.png](images/4.1.png)
4. Click on the webhook you just created.
    ![img_5.png](images/5.png)
5. Copy and save your payload URL
    ![img_6.png](images/6.png)

### Connection Setup
1. Go back to Vanus Cloud.
2. Paste your webhook URL in the `URL` field.

    ![img_7.png](images/7.png)
3. Click "Next" to continue.

## Required Data Format

The event data must be JSON format, here a simple message, example:

```json
{
  "data": {
    "username": "Test",
    "content": "Hello, This is a Discord Message!"
  }
}
```

## Template Scenario

Here are some easy to use scenarios for this connector.

- [Amazon EventBridge CreateBucket | DeleteBucket event triggers a Discord message Receive](https://cloud.vanus.ai/connections/wizard?source=aws-eventbridge&sink=http&id=20230406_2)
- [AWS Billing event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=aws-billing&sink=http&id=20230410_1)
- [Auth0 login event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=auth0&sink=http&id=20230329_1)
- [GitHub star event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=github&sink=http&id=20230320_1)
- [GitHub issue event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=github&sink=http&id=20230320_2)
- [GitHub issue comment event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=github&sink=http&id=20230320_3)
- [GitHub opened pull-request event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=github&sink=http&id=20230321_1)
- [Grafana resource utilization threshold event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=grafana&sink=http&id=20230330_1)
- [Stripe Invoice Payment event triggers a Discord message](https://cloud.vanus.ai/connections/wizard?source=stripe&sink=http&id=20230407_1)
