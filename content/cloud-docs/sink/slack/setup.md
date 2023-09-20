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
If you have created a Slack App already, you can skip Step 1 and directly go to [**Step 2**](#step-2-create-an-incoming-webhook).
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

---

### Step 3: Slack Connection Settings

1. Paste the Webhook URL into the **Webhook URL**① field, and click on **Next**② to finish the configuration.

![slack-sink-9](images/slack-sink-9.webp)

---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).
