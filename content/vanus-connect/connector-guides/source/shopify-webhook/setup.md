# Shopify Webhook

This guide contains information to set up a Shopify Webhook Source in Vanus Connect.

## Introduction

Shopify is a popular e-commerce platform that allows businesses to sell their products online.

The Shopify webhook Source is a webhook server that enables you to establish an endpoint for receiving events from Shopify. To achieve this, it is necessary to establish a connection within Shopify.

## Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- A Shopify Account

## Getting Started

### Create a Connection

To obtain all Shopify Webhook events in Vanus Connect, follow these steps:

- Write a **Name**① for your connection in Vanus Connect, select the Event or **Events**② you wish to forward and click on the **copy icon**③ to copy the Webhook URL.

![shopify-webhook-source-1](images/shopify-webhook-source-1.webp)

---

### Configuring Shopify to Send Webhook Events

1. Go to the [**Shopify**](https://shopify.com) website, sign in to your shop dashboard, and click **Settings**①.

![shopify-webhook-source-2](images/shopify-webhook-source-2.webp)

2. From the side menu click on **Notifications**②.

![shopify-webhook-source-3](images/shopify-webhook-source-3.webp)

3. Now scroll down to the very bottom of the page and click on **Create webhook**③.

![shopify-webhook-source-4](images/shopify-webhook-source-4.webp)

4. Click on the **Event field**④ and select the **Event**⑤ you'd like to send to Vanus Connect.

![shopify-webhook-source-5](images/shopify-webhook-source-5.webp)

5. Confirm that the Format is configured as **`JSON`⑥**, paste the Webhook **URL**⑦ that was initially copied from Vanus Connect, choose the **Latest Webhook API version**⑧, and then press **Save**⑨.

![shopify-webhook-source-6](images/shopify-webhook-source-6.webp)

:::note
If you'd like to receive multiple events you can create more webhooks using the same URL.
:::

6. Return to vanus connect and click **Next**⑩ to complete the configuration.

![shopify-webhook-source-7](images/shopify-webhook-source-7.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
