--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Slack Account**](https://slack.com)

- A [**Slack Workspace**](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)

---

Perform the following steps to configure your Slack Sink.

:::note
If you have created a Slack App already, you can skip Step 1 and directly go to [**Step 2**](#step-2-create-an-incoming-webhook). But ensure that you avoid using the same Slack app for both your Slack source and Slack webhook connections.
:::

### Step 1: Create a Slack App

1. **Create an App**① on [**Slack**](https://api.slack.com/apps).

![slack-sink-1](images/slack-sink-1.webp)

2. Select **From scratch**②.

![slack-sink-2](images/slack-sink-2.webp)

3. Set the **App Name**③ and **Workspace**④, then click **Create App**⑤.

![slack-sink-3](images/slack-sink-3.webp)

---

### Step 2: Create an Incoming Webhook

1. Select **Incoming Webhooks**① in the sidebar menu.

![slack-sink-4](images/slack-sink-4.webp)

2. Turn on **Activate Incoming Webhooks**②.

![slack-sink-5](images/slack-sink-5.webp)

3. Scroll down, and click **Add New Webhook to Workspace**③ to add a new one.

![slack-sink-6](images/slack-sink-6.webp)

4. Select the **channel**④ to receive messages and click **Allow**⑤.

![slack-sink-7](images/slack-sink-7.webp)

5. Now **Copy**⑥ the webhook URL.

![slack-sink-8](images/slack-sink-8.webp)

6. Return to the Vanus Connect page and paste your webhook URL in the **Webhook URL**⑦ field.

![slack-sink-9](images/slack-sink-9.webp)

---

### Step 3: Personalize Event Structure

:::note
This is a general instruction on how to personalize your event structure. You can structure your events to suit your specific requirements and create connections for different scenarios.
:::

1. Click on **Display sample events**① for reference, compose your preferred message, then type **`$` followed by the desired event**② to access a **list of associated event values**③, and choose the one you prefer.

![slack-sink-10](images/slack-sink-10.webp)

2. You can structure the content as you prefer and fill in as many **values**④ as you wish to receive.

![slack-sink-11](images/slack-sink-11.webp)

3. Click **Submit**⑤ to finish the configuration process.

![slack-sink-12](images/slack-sink-12.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
