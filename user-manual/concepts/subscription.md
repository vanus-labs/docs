---
title: Subscription
---

# Subscription

The subscription reflects the consumer's interest in receiving events and describes the method for how to deliver the events.

## Subscription Struct

A subscription struct has the following properties:

### id

The unique identifier of the subscription.

### source

Determine which events deliver to sink,it's value match the Cloudevents `source`.

### types

Determine which events deliver to sink, it's value match the Cloudevents `type`.

### filters

Determine which events deliver to sink, it's a set of filter expressions

### config

The configuration that delivery events to sink.

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
