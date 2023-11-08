# HTTP

This guide contains information to set up a HTTP Sink in Vanus Connect.

## Introduction

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

Using HTTP Sink you can send an HTTP request to any application or webhook server.

## Prerequisites

To set up HTTP Sink, you must have:

- A [**Vanus Cloud account**](https://cloud.vanus.ai).
- A payload URL.

## Getting Started

### Step 1: HTTP Connection Settings

- Obtain a Payload URL from your application. This should be the EndPoint URL where you want to receive the HTTP requests.
- Paste the obtained payload URL into the **URL**① field.
- Choose the desired **HTTP Method**② (`POST`, `GET`, `PATCH`, `DELETE`, `PUT`).
- If needed, click on the **+Add More**③ button in the Request Headers section to add key-value pairs for custom headers.

![http-sink-1](images/http-sink-1.webp)

---

### Step 2: Personalize Event Structure

:::note
This is a general instruction on how to personalize your event structure. You can structure your events to suit your specific requirements and create connections for different scenarios.
:::

1. Click on **Display sample events**① for reference, compose your preferred message, then type **`$` followed by the desired event**② to access a **list of associated event values**③, and choose the one you prefer.

![http-sink-2](images/http-sink-2.webp)

2. You can structure the content as you prefer and fill in as many **values**④ as you wish to receive.

![http-sink-3](images/http-sink-3.webp)

3. Click **Submit**⑤ to finish the configuration process.

![http-sink-4](images/http-sink-4.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
