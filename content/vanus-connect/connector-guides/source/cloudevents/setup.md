# CloudEvents

This guide contains information to set up a CloudEvents Source in Vanus Connect.

## Introduction

CloudEvents is a vendor-neutral specification for describing event data in a common way, allowing for interoperability between different cloud platforms and event-driven systems.

The CloudEvent Source allows receiving CloudEvents via a payload URL.

## Prerequisites

Before obtaining Payload URL to receive events, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)

## Getting Started

### Create your connection in Vanus Connect

To set up CloudEvents in Vanus Connect, follow these steps:

1. Write a **Name**① for your connection in Vanus Connect. 

![cloudevents_1.webp](images/cloudevents_1.webp)

2. Click on the **copy**② icon to copy the Webhook URL. Use the Webhook URL to receive events. Click **Next**③ and continue the configuration.

![cloudevents_2.webp](images/cloudevents_2.webp)

### Send CloudEvents

You can use your Webhook URL to send CloudEvents.

Here is a Example of a Curl Post Request of a CloudEvent.

```shell
curl --location --request POST 'https://YourWebHookURL.com' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
"id": "53d1c340-551a-11ed-96c7-8b504d95037c",
"source": "quickstart",
"specversion": "1.0",
"type": "quickstart",
"datacontenttype": "application/json",
"time": "2022-10-26T10:38:29.345Z",
"data": {
"myData": "simulation event data"
}
}'
```
---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).
