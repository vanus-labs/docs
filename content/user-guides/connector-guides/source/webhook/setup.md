# Webhook

This guide contains information to set up a Webhook Source in Vanus Cloud.

## Introduction

Webhooks are the ways of communicating between two apps by sending notifications or alerts when something happens. With Webhook connector, you can obtain real-time events on all user activity.

## Prerequisites

Before obtaining Webhook events, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)

## Getting Started

To obtain a unique Webhook URL in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Webhook**.
4. Click next and complete sink connection and subscription to finish the configurations.
5. After creating your connection, select your connection and get the payload from the Webhook information.
   ![](images/payload.png)

## Supported Events

The Webhook source supports different kind of requests that does not require a response.

### Event Type

A simple CURL from an HTTP request can produce Cloud Events

```bash
curl --location --request POST 'https://webhook.site/4ccfb03d-0015-4533-aa70-ac181ebe98b5' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "test":"Hello World!"
}'

```

### Cloud Events Output

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "test": "Hello World"
    },
    "headers": {
      "Accept": "*/*",
      "Connection": "close",
      "Content-Length": "29",
      "Content-Type": "text/plain",
      "Host": "webhook.site",
      "User-Agent": "curl/7.78.0"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

The body of the request is extracted from `data.body` in the cloud event and the headers are extracted from `data.headers` in the cloud event.
