---
title: Subscription
---

# Subscription

The subscription in Vanus reflects the consumer's interest in receiving events and describes the method for delivering the events.

A subscription in Vanus has the following properties:

- **id** - The unique identifier of the subscription.
- **source** - Determine which events deliver to sink, its value match the CloudEvents `source`.
- **types** - Determine which events deliver to sink, its value match the CloudEvents `type`.
- **filters** - Determine which events deliver to sink, it's a set of filter expressions.
- **config** - The configuration that deliver events to sink.
- **sink** - The address to which events be sent.
- **sinkCredential** - The credential that deliver events to the sink for authentication.
- **protocol** - The protocol that deliver event to sink.
- **eventbus** - The eventbus name which the subscription to fetch events from.
- **transformer** - Customize event data before deliver to sink.
