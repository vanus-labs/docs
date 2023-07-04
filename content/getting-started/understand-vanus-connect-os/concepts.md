---
title: Concepts
id: concepts
slug: /understand-vanus-connect-os/concepts
---

# Concepts

The following lists the different concepts of Vanus. We believe it is beneficial to learn about these concepts to build your critical business application.

## Eventbus

Eventbus represents a group of pipelines that receive and dispatch events.

When an event is published to an Eventbus, the event will be stored permanently. You can send as many events to an
Eventbus as your storage space allows, and you can consume these events by creating a [Subscription](#subscription)
later. Every Sink in a Subscription attached to the specific Eventbus can receive all the events.

### Retention policy

You can configure a retention policy on an Eventbus. All events that do not meet the retention policy will be marked as
expired and automatically deleted. This is necessary for Vanus to offer 24/7 service when storage capacity is
limited.

Each Eventbus has its own retention policy. The default event retention policy is to expire after 3 days.

## Subscription

The Subscription is a relationship established between a Sink and an Eventbus. The Subscription reflects the Sink's interest in receiving events and describes the method for how to deliver those events.

### Filter

The filter feature is a set of conditions we can set to a Subscription to filter the events we want to consume from an Eventbus.
The Subscription will select all the events that meet the specification defined by the filter.

- **exact** : Match CloudEvents attributes; that value must match exactly with the associated value.
- **prefix** : Match CloudEvents attributes; that value must all start with the associated value.
- **suffix** : Match CloudEvents attributes; that value must all end with the associated value.
- **all** : A nested array of filter expressions; all filter expressions evaluate to true
- **any** : A nested array of filter expressions; any filter expressions evaluate to true.
- **not** : One nested filter expressions; inverse of filter expressions.
- **sql** : A [CloudEvents SQL Expression](https://github.com/cloudevents/spec/blob/main/cesql/spec.md)

### Transformer

The transformer is a feature that allows for the modification of data from a CloudEvent before it is sent to the Sink.

- **Function** : Functions are pre-built methods that perform certain actions in Vanus Transformer and are grouped into categories(strings, mathematical, etc). Actions that can be performed include concatenation of strings, capitalization of sentences, etc.
- **Define** : Define is a parameter used to create a variable. Variables such as the source of the event, date, etc.
- **Template** : Template refers to a predefined format user can set for data that is being sent to the Sink. It's created using variables derived from the attributes and data of a CloudEvent.

### Sink

The Sink is the target which receives events. It may be a [Sink Connector](#vance-connect), Mainstream Serverless computing products such as AWS Lambda, Cloud Function, Knative Serving, etc.

## Special Events

### Timing Event

Vanus provides a timing feature to allow users to set a precise moment in time. This feature enables you to attach a time point (e.g. 2022-01-01T08:00:00Z). Once it arrives in the Eventbus, the event will wait for the specific time point before being available for consumption.

### Delay Event
Vanus provides a delay feature to allow users to schedule an event. This feature enables you to attach a timer (e.g. 60 seconds).
Once it arrives in the Eventbus, the event will wait for the timer to finish before being available for consumption.

## Vanus Connect

Vanus Connect allows you to skip the complex integration with external services by offering out-of-the-box connectors.
Each connector acts as a proxy between outside services and your system, enabling you to have faster integrations with
no codes.
All data produced or processed by our connectors conform to the CloudEvents specification, which helps enterprises
leverage event-driven architecture to do business in the age of events.

Vanus Connect consists of the following terms:

- **Connector** - A connector is an image that interacts with a specific external service or underlying data source
  (e.g., Databases) on behalf of user applications.
  In Vanus Connect, a connector is either a Source or a Sink.
- **Source** - A source connector obtains data from an underlying data producer and delivers it to targets after
  the original data has been transformed into CloudEvents. It doesn't limit the way how a source retrieves data.
  (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data sent to it).
- **Sink** - A sink connector receives CloudEvents and does some specific business logic.
  (e.g., A MySQL Sink extracts useful data from CloudEvents and writes them to a MySQL database).
- **CloudEvents** - A specification for describing event data in common formats to provide interoperability across
  services, platforms and systems.
