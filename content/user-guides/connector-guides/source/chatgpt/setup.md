# ChatGPT

This guide contains information to set up a ChatGPT Source in Vanus Cloud.

## Introduction

ChatGPT is a large language model developed by OpenAI, based on the GPT-3.5 architecture.

ChatGPT Source is a Vanus-hosted ChatGPT service which works as an HTTP server to generates human-like responses to textual content from incoming HTTP requests,
and delivers responses to endpoints in the CloudEvents HTTP format.

## Prerequisites

Before obtaining Webhook events, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)

## Getting Started

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **ChatGPT**.
4. Click **`Next`** to save the ChatGPT Source.

## How to get the webhook url for ChatGPT Source

ChatGPT Source works as an HTTP server. You can obtain its webhook url after creating your connection.

1. Click the connection you just created.

![img.png](images/img.png)

2. Click the copy icon to copy the webhook url to use.

![img.png](images/img_1.png)

## Supported Events

The ChatGPT requires a text/plain payload from the incoming HTTP request.

### HTTP request sample

A simple CURL from an HTTP request to send requests to ChatGPT Source

```bash
curl --location --request POST 'https://hu7xxxxxxxxx.connector.vanustest.com' \
--header 'Content-Type: text/plain' \
--data-raw 'what is vanus'
```

### ChatGPT Source Output

```json
{
   "specversion": "1.0",
   "id": "0effe4cc-06c7-4fe9-9180-aa7c3b30777e",
   "source": "vanus-chatGPT-source",
   "type": "vanus-chatGPT-type",
   "datacontenttype": "application/json",
   "time": "2023-03-28T09:15:10.70413Z",
   "data": {
      "content": "vanus is a message queue"
   }
}
```