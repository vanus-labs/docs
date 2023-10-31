--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- An AWS Account with Administrative Privileges

---

**Perform the following steps to configure your Amazon EventBridge Source.**

### Amazon EventBridge Connection Settings

- Write a **Name**① for your connection in Vanus Connect.

- Click on the **copy**② icon to copy the Webhook URL. Use the Webhook URL to receive events.

- Click **Next**③ and continue the configuration.

![amazon-eventbridge-source-](images/amazon-eventbridge-source-1.webp)

---

### Configuring Amazon Eventbridge

1. Click the **copy icon**① to copy the webhook url.

![amazon-eventbridge-source-2](images/amazon-eventbridge-source-2.webp)

### Step 1: Create an Event Bus

1. Search for **Eventbridge**① and select **Amazon EventBridge**② from the results.

![amazon-eventbridge-source-3](images/amazon-eventbridge-source-3.webp)

2. In the side menu click **Event buses**③.

![amazon-eventbridge-source-4](images/amazon-eventbridge-source-4.webp)

3. Click on **Create event bus**④ to create a new event bus, if you haven't already.

![amazon-eventbridge-source-5](images/amazon-eventbridge-source-5.webp)

4. Write a **Name**⑤ and press **Create**⑥.

![amazon-eventbridge-source-6](images/amazon-eventbridge-source-6.webp)

### Step 2: Create a Rule

1. Go to **Rules**① from the side menu and click **Create rule**②.

![amazon-eventbridge-source-7](images/amazon-eventbridge-source-7.webp)

2. **Name**③ your rule, select your **Event bus**④ and press **Next**⑤.

![amazon-eventbridge-source-8](images/amazon-eventbridge-source-8.webp)

3. Select **all events**⑥.

![amazon-eventbridge-source-9](images/amazon-eventbridge-source-9.webp)

4. Press **Next**⑦ to continue.

![amazon-eventbridge-source-10](images/amazon-eventbridge-source-10.webp)

### Step 3: Create an API Destination and Connection

1. Set your API destination

![amazon-eventbridge-source-11](images/amazon-eventbridge-source-11.webp)

- Select **EventBridge API destination**①.
- Select **Create a new API destination**② under API destination.
- Write a connection **Name**③.
- Set the **API destination endpoint**④ to the URL from Vanus Connect from **[step 1](#configuring-amazon-eventbridge)**.
- Set the **HTTP method**⑤ as `POST`.

2. Create a connection

![amazon-eventbridge-source-12](images/amazon-eventbridge-source-12.webp)

- Select **Create a new connection**⑥.
- Write a **Connection name**⑦.
- Select **Basic (Username/Password)⑧** under Authorization type.

3. Authorization

![amazon-eventbridge-source-13](images/amazon-eventbridge-source-13.webp)

- Create a **Username**⑨ and a **Password**⑩ of your choice, this won't be needed in this scenario but it is required.
- Press **Next**⑪.

4. Under Configure tags - optional press **Next**⑫.

![amazon-eventbridge-source-14](images/amazon-eventbridge-source-14.webp)

5. Review and press **Create rule**⑬.

![amazon-eventbridge-source-15](images/amazon-eventbridge-source-15.webp)

Now every event sent to your Event Bus will be sent to your Vanus connection.

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
