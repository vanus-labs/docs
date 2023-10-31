# Webhook

This guide contains information to set up a Webhook Source in Vanus Connect.

## Introduction

Webhooks are a method for web applications to automatically notify other systems about specific events or updates. They work by sending an HTTP POST request to a specified URL when a particular trigger occurs, enabling real-time data exchange and integration between applications.

The Webhook Source is a webhook server that enables you to establish an endpoint for receiving events HTTP requests or any application able to send HTTP request. 


## Prerequisites

- Have a HTTP client.

**Perform the following steps to configure your Webhook Source.**

## Webhook Connection Settings

1. Write a **connection name**① and Copy the **Webhook URL**②.

![](images/cloud-webhook_1.webp)

2. Click **Next**③ to continue.

```shell
curl --location --request POST 'YOUR_WEBHOOK_URL' \
--header 'Content-Type: text/plain' \
--data-raw '{
"test":"demo"
}'
```

### 3rd Party Services
A list of application that can send HTTP request to our webhook server.
- Zapier
- IFTTT (If This Then That)
- GitHub
- Bitbucket
- GitLab
- Stripe
- Mailchimp
- Shopify
- Salesforce
- Trello
- more

---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).