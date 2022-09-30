# Eventbus

Eventbus represents a group of pipelines that receive and dispatch events.

When an event is published to an Eventbus, the event will be stored permanently. You can send as many events to an
Eventbus as your storage space allows, and you can consume these events by creating a [Subscription](subscription.md)
later. Every Sink in a Subscription attached to the specific Eventbus can receive all the events.

## Retention policy

You can configure a retention policy on an Eventbus. All events that do not meet the retention policy will be marked as
expired and automatically deleted. This is necessary for Vanus to offer 24/7 service when storage capacity is
limited.

Each Eventbus has its own retention policy. The default event retention policy is to expire after 3 days.
