--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- Have a HTTP client.

**Perform the following steps to configure your Webhook Source.**

### Webhook Connection Settings

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

## 3rd Party Services
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

Vanus Connect webhook can receive any kind of HTTP request.

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).