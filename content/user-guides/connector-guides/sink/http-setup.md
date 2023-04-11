# HTTP

This guide contains information to set up a HTTP Sink in Vanus Cloud.

## Introduction

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

## Prerequisites

To set up HTTP Sink, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)
- A payload URL

## Getting Started

In Vanus Cloud,

1. Select HTTP Sink and
2. Get a Payload URL from your app
3. Paste the payload URL into the "URL" field and press Next

You can also select the URL Method (POST, GET, PATCH, DELETE, PUT)

![](content/user-guides/connector-guides/sink/images/http.png)

## Required Data Format

The event data must be JSON format, here a simple message, example:

```json
{
  "body": {
    "test": "Hello World!"
  }
}
```
