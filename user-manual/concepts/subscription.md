---
title: Subscription
---

# Subscription

The subscription reflects the consumer's interest in receiving events and describes the method for delivering the events.

## Subscription Struct

A subscription in Vanus has the following properties:

- **id** - The unique identifier of the subscription.
- **source** - Determine which events deliver to sink, its value match the CloudEvents `source`.
- **types** - Determine which events deliver to sink, its value match the CloudEvents `type`.
- **filters** - Determine which events deliver to sink, it's a set of filter expressions.
- **config** - The configuration that deliver events to sink.
- **sink** - The address to which events be sent.
- **sinkCredential** - The credential that deliver events to the sink for authentication.
- **protocol** - Identifier of a delivery protocol.
- **eventbus** - The eventbus name which the subscription to fetch events from.
- **transformer** - Translate events to a different format.
