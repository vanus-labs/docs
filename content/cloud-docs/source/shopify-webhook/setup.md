--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- A Shopify Account

---

**Perform the following steps to configure your Shopify Webhook Source.**

### Shopify Webhook Connection Settings

To obtain all Shopify Webhook events in Vanus Connect, follow these steps:

![shopify-webhook-source-1](images/shopify-webhook-source-1.webp)

- Write a **Name**① for your connection in Vanus Connect.

- After creating the connection, there are a few more steps. Simply click the **document**② link to open a new page with all the details on how to complete the connection.

![shopify-webhook-source-2](images/shopify-webhook-source-2.webp)

- Select the Event or **Events**③ you wish to forward.

- Click **Next**④ and continue the configuration.

---

### Configuring Shopify to Send Webhook Events

1. Click the **copy icon**① to copy the webhook url.

![shopify-webhook-source-3](images/shopify-webhook-source-3.webp)

2. go to the [**Shopify**](https://shopify.com) website, sign in to your shop dashboard, and click **Settings**②.

![shopify-webhook-source-4](images/shopify-webhook-source-4.webp)

3. From the side menu click on **Notifications**③.

![shopify-webhook-source-5](images/shopify-webhook-source-5.webp)

4. Now scroll down to the very bottom of the page and click on **Create webhook**④.

![shopify-webhook-source-6](images/shopify-webhook-source-6.webp)

5. Click on the **Event field**⑤ and select the **Event**⑥ you'd like to send to Vanus Connect.

![shopify-webhook-source-7](images/shopify-webhook-source-7.webp)

6. Confirm that the Format is configured as **`JSON`⑦**, paste the Webhook **URL**⑧ that was initially copied from Vanus Connect, choose the **Latest Webhook API version**⑨, and then press **Save**⑩.

![shopify-webhook-source-8](images/shopify-webhook-source-8.webp)

:::note
If you'd like to receive multiple events you can create more webhooks using the same URL.
:::

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
