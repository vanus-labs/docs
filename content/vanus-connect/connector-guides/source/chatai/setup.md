# ChatAI

This guide contains information to set up a ChatAI Source in Vanus Connect.

## Introduction

ChatAI uses OpenAI's language model, ChatGPT, to generate responses to your messages in real-time

ChatAI Source is a Vanus-hosted ChatAI service which works as an HTTP server to generate human-like responses to textual content from incoming HTTP requests, and deliver responses to endpoints in the CloudEvents HTTP format.

## Prerequisites

Before obtaining ChatAI events, you must have:

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- Have the ability to send HTTP requests.

## Getting Started

### Set up your connection in Vanus Connect

1. Write a **Name**① for your connection in Vanus Connect.

    Click on the **copy**② icon to copy the Webhook URL.

![chatai-source-1](images/chatai-source-1.webp)

2. Fill in the various required configurations.

- **Chat Mode③:** Select Chat Mode (ChatGPT, Ernie Bot or Vanus AI); the default is ChatGPT.

- **Context④ (optional):** Set Context to `on` if you would like for ChatGPT to remember previous messages.

- **Unique Identifier⑤ (optional):** The unique identifier differentiates among multiple conversations using the same Connection. Example identifier: conv1 identifier: conv2, etc.

- **Basic Auth Username⑥ (optional):** A method for an HTTP user agent to provide a username when making a request.

- **Basic Auth Password⑦ (optional):** A method for an HTTP user agent to provide a password when making a request.

![chatai-source-2](images/chatai-source-2.webp)

:::Note
By choosing "Vanus AI," you can harness the power of your custom AI application within the Vanus AI platform, utilizing its extensive knowledge to enhance your chat experience.
:::

- Head to the Vanus AI's platform **Dashboard**⑧ and **copy your App ID**⑨.

![chatai-source-3](images/chatai-source-3.webp)

- Select **Vanus AI**⑩, paste your **Vanus AI Application ID**⑪ in the provided field, fill in the remaining **configuration details⑫ (optional)**, and then proceed by clicking **Next**⑬.

![chatai-source-4](images/chatai-source-4.webp)

### How to Use the Webhook URL to Send Message to ChatAI

Ask a question to ChatAI by sending a POST Request to the Webhook URL. Below I will share with you how to send a simple curl Post Request to the address.

Here is an Example of a curl Post Request of a CloudEvent.
```shell
curl \
-H "unique_identifier:value"  \
-H "Authorization: Basic base64(yourusername:yourpassword)"
-XPOST 'https://YourWebbookURL' \
-D'What is CloudEvents?'
```

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
