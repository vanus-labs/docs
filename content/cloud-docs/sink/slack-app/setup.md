--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Slack Account**](https://slack.com)
- A [**Slack Workspace**](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)

---

**Perform the following steps to configure your Slack Sink.**

### Step 1: Create a Slack App

1. Go to [**Slack API**](https://api.slack.com/apps), and click **Create New App**①.

![slack-app-sink-1](images/slack-app-sink-1.webp)

2. Select **From scratch**②.

![slack-app-sink-2](images/slack-app-sink-2.webp)

3. Set the **App name**③ and **Workspace**④, then click **Create App**⑤.

![slack-app-sink-3](images/slack-app-sink-3.webp)

---

### Step 2: Configure your App

1. Add the **Permissions**① feature for your app.

![slack-app-sink-4](images/slack-app-sink-4.webp)

2. Scroll down to `Scopes/Bot Token Scopes`, and click **Add an OAuth Scope**②.

![slack-app-sink-5](images/slack-app-sink-5.webp)

3. Add **chat:write**③ and **chat:write:public**④ permission to your app.

![slack-app-sink-6](images/slack-app-sink-6.webp)

4. Scroll up to the top of the page, and click **Install to Workspace**⑤.

![slack-app-sink-7](images/slack-app-sink-7.webp)

5. Click **Allow**⑥ to install the app.

![slack-app-sink-8](images/slack-app-sink-8.webp)

6. **Copy**⑦ the Bot User OAuth Token.

![slack-app-sink-9](images/slack-app-sink-9.webp)

7. Return to the Vanus Connect page and paste your Bot User OAuth Token in the **Token**⑧ field.

![slack-app-sink-10](images/slack-app-sink-10.webp)

---

### Step 3: Personalize Event Structure

:::note
This is a general instruction on how to personalize your event structure. You can structure your events to suit your specific requirements and create connections for different scenarios.
:::

1. Click on **Display sample events**① for reference, compose your preferred message, then type **`$` followed by the desired event**② to access a **list of associated event values**③, and choose the one you prefer.

![slack-app-sink-11](images/slack-app-sink-11.webp)

2. You can structure the content as you prefer and fill in as many **values**④ as you wish to receive.

![slack-app-sink-12](images/slack-app-sink-12.webp)

3. Click **Submit**⑤ to finish the configuration process.

![slack-app-sink-13](images/slack-app-sink-13.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
