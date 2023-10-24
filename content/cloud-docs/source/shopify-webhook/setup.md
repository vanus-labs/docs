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

- Open the **How to use this URL**② document in a new tab to see all the details on how to complete the connection.

- Copy the Webhook URL by clicking on the **copy icon**③

![shopify-webhook-source-2](images/shopify-webhook-source-2.webp)

- Select the Event or **Events**④ you wish to forward.

- Click **Next**⑤ and continue the configuration.

---

### Configuring Shopify to Send Webhook Events

1. go to the [**Shopify**](https://shopify.com) website, sign in to your shop dashboard, and click **Settings**①.

![shopify-webhook-source-3](images/shopify-webhook-source-3.webp)

2. From the side menu click on **Notifications**②.

![shopify-webhook-source-4](images/shopify-webhook-source-4.webp)

3. Now scroll down to the very bottom of the page and click on **Create webhook**③.

![shopify-webhook-source-5](images/shopify-webhook-source-5.webp)

4. Click on the **Event field**④ and select the **Event**⑤ you'd like to send to Vanus Connect.

![shopify-webhook-source-6](images/shopify-webhook-source-6.webp)

5. Confirm that the Format is configured as **`JSON`⑥**, paste the Webhook **URL**⑦ that was initially copied from Vanus Connect, choose the **Latest Webhook API version**⑧, and then press **Save**⑨.

![shopify-webhook-source-7](images/shopify-webhook-source-7.webp)

:::note
If you'd like to receive multiple events you can create more webhooks using the same URL.
:::

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
