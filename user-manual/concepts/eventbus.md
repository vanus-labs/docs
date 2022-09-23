# Eventbus

Eventbus represents a group of pipelines that receive and dispatch events.

When an event is published to an Eventbus, it will be stored permanently. You can publish more events to an Eventbus
until filling up storage space. And you can consume it by creating a [Subscription](subscription.md) later. Every Target
in Subscription attached to the same Eventbus can receive all events.

## Retention policy

You can configure a retention policy on an Eventbus. All events that do not meet the retention policy will be marked as
expired and automatically deleted. This is necessary for Vanus to offer 24/7 service when storage capacity is
limited.

Each Eventbus has its own retention policy. The default event retention policy is to expire after 3 days.
