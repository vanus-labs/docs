# HTTP

This guide contains information to set up a HTTP Sink in Vanus Cloud.

## Introduction

The HTTP Sink can send real-time Cloud Events to the expected targets using Webhook. It extracts the data part of the original event and deliver to the target URL.

## Prerequisites

Before sending HTTP events to its target URL, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)
- A target URL

## Getting Started

Cloud Events in json format are sent to an HTTP server which extracts the `data` part of the event and send the `data` to it's target URL in Vanus Cloud. An example of an incoming Cloud Event looks like:

```json
{
  "id": "42d5b039-daef-4071-8584-e61df8fc1354",
  "source": "quickstart",
  "specversion": "1.0",
  "type": "quickstart",
  "datacontenttype": "application/json",
  "time": "2023-01-26T10:38:29.345Z",
  "data": {
    "headers": {
      "connect-name": "sink-http"
    },
    "query": "debug=true&type=curl",
    "body": "simulation event data 1"
  }
}
```

The HTTP Sink will send an HTTP in the following way:

```
POST /test?debug=true&type=curl

> Host: localhost:8081
> User-Agent:   Go-http-client/1.1
> Content-Length: 23
> connect-name: sink-http
> simulation event data 1

```
