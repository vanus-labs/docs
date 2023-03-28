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
4. Click next and finish the configurations.
5. Select your connection and get the payload from the Webhook information.
   ![](images/payload.png)

### How to use Webhook Source

To test the Webhook source, we can use [Auth0](https://auth0.com/) Cloud Events streams. To do this,

1. Log in to Auth0 account if you already have one or create one if you do not have an Auth0 account.
2. Navigate to the **Streams** menu under **Monitoring**.
3. Click on the **Create Stream** button.
4. Name your stream and select the **Webhook** option.
   ![](images/webhook.png)
5. Provide the payload URL of your Webhook source connector in Vanus Cloud.
6. Select json line under **Content Format**.
7. Select the event you want to receive notifications for.
8. and Save your settings.

## Supported Events

The Webhook source supports different kind of Cloud Events from different sources such as GitHub, Auth0, HTTP requests using a Webhook URL.

A simple CURL from an HTTP request can produce Cloud Events

### HTTP Request

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
  "id": "35dfb46d-a9a5-48d3-89d2-de0135c09031",
  "source": "102.89.34.215",
  "type": "http-request",
  "subject": "test",
  "datacontenttype": "application/json",
  "time": "2023-01-29T03:25:26.229114Z",
  "data": {
    "body": {
      "test": "Hello World"
    },
    "headers": {
      "Accept": "*/*",
	  "Connection": "close"
      "Content-Length": "29",
      "Content-Type": "text/plain",
      "Host": "webhook.site",
      "User-Agent": "curl/7.78.0"
    },
    "method": "POST",
    "path": "/webhook",
    "query_args": {
      "id": "35dfb46d-a9a5-48d3-89d2-de0135c09031",
      "source": "102.89.34.215",
      "subject": "test",
      "test": "Hello World",
      "type": "http-request"
    }
  }
}

```
