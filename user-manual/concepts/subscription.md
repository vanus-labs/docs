---
title: Subscription
---

# Subscription

The subscription is a relationship established between a consumer and a producer or a middleware. It describe the consumer receive events which it is interested and the method for how to deliver the events.

## Subscription Struct

A subscription struct has properties as below:

### id

The unique identifier of the subscription.

### source

Determine which events deliver to sink by the Cloudevents `source`.

### types

Determine which events deliver to sink by the Cloudevents `type`.

### config

The configuration for delivery events to sink.

### filters

Determine which events deliver to sink

### sink

The address which the events to send.

### sinkCredential

The credentail that delivery events to sink for authentication.

### protocol

Identifier of a delivery protocol.

### eventbus

The eventbus name which the subscription to fetch events from.

### transformer

Translate events to a different format.
