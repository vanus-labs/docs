# Subscription

The Subscription is a relationship established between a Sink and an Eventbus. The Subscription reflects the Sink's interest in receiving events and describes the method for how to deliver those events.

## Subscription special features

### Filter

The filter feature is a set of conditions we can set to a Subscription to filter the events we want to consume from an Eventbus. The Subscription will select all the events that meet the specification defined by the filter.

- **exact** : Match CloudEvents attributes; that value must match exactly with the associated value.
- **prefix** : Match CloudEvents attributes; that value must all start with the associated value.
- **suffix** : Match CloudEvents attributes; that value must all end with the associated value.
- **all** : A nested array of filter expressions; all filter expressions evaluate to true
- **any** : A nested array of filter expressions; any filter expressions evaluate to true.
- **not** : One nested filter expressions; inverse of filter expressions.
- **sql** : A [CloudEvents SQL Expression](https://github.com/cloudevents/spec/blob/main/cesql/spec.md)

### Transformer

The transformer can transform data into the desired format.

### Sink

The Sink is the target which receives events. It may be a [Sink Connector](connector.md), Mainstream Serverless computing products such as AWS Lambda, Cloud Function, Knative Serving, etc.

### Config

Below is the list of the configurations for event delivery to a Sink.

- **rate limit** : The rate limit for delivering events to the Sink.
- **consume from** : Vanus supports three consumption types: latest, earliest, and timestamp.
- **retry atttemps** : The maximum number of retries for delivering an event to the Sink when the event did not successfully deliver
