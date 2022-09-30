---
title: Subscription
---

# Subscription

The following document will introduce the Subscription component of Vanus. A subscription will pull the events from a specific Eventbus and send them to the target.

## Subscription special features

### Filter

The Filter feature is a set of conditions we can set to a Subscription to filter the events we want to consume from an Eventbus. The Subscription will select all the events that meet the specification defined by the filter.

- **exact** :  match Cloudevents attributes; Cloudevents attributes must match exactly with the associated value String specified (case sensitive).
- **prefix** : match Cloudevents attributes; that value must all start with the associated value.
- **suffix** : match Cloudevents attributes; that value must all end with the associated value.
- **all** : all must include a nested array of filter expressions; all filter expressions evaluate to true.
- **any** : any include a nested array of filter expressions; any filter expressions evaluate to true.
- **not** : filter expressions evaluate to false.
- **sql** : [CloudEvents SQL Expression](https://github.com/cloudevents/spec/blob/main/cesql/spec.md)

### Transformer

The transformer can transform data into the desired format.

### Sink

The Sink is the target where the Subscription will send the event.  
This Sink can be a Vance Sink, Mainstream Serverless computing products such as AWS Lambda, Cloud Function, Knative Serving, etc.

### Config

Below is the list of the configurations for event delivery to a Sink.

- **rate limit** : The rate limit for delivering events to the Sink.
- **consume from** : Vanus supports three consumption types: latest, earliest, and timestamp.
- **retry atttemps** : The maximum number of retries for delivering an event to the Sink when the event did not successfully deliver
