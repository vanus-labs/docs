# HTTP

This guide contains information to set up a HTTP Sink in Vanus Cloud.

## Introduction

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

Using HTTP Sink you can send an HTTP request to any application or webhook server.

## Prerequisites

To set up HTTP Sink, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai).
- A payload URL.

## Getting Started

In Vanus Cloud,

1. Select the **HTTP** Sink connector.
2. Get a Payload URL from your application. (The EndPoint URL to send the HTTP requests)
3. Paste the payload URL into the `URL` field and press **Next**
![](images/http.png)

You can also select the URL Method (`POST`, `GET`, `PATCH`, `DELETE`, `PUT`)

4. Click `Next` and finish the configurations.

## Required Data Format

The event data must be JSON form4at, here a simple message, example:

```json
{
  "body": "Message must go here!"
}
```
