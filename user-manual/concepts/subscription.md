---
title: Subscription
---

# Subscription

The subscription in Vanus reflects the consumer's interest in receiving events and describes the method for delivering the events.

A subscription in Vanus has the following features:

## Filter

A set of filter expressions, where each expression evaluates to either true or false for each event generated. Only all filter expression evaluate to true, the event will be delivered to sink.

Vanus support filter as follow:

- **exact** :  For match Cloudevents attributes that value must all exactly match with the associated value.
- **prefix** : For match Cloudevents attributes that value must all start with the associated value.
- **suffix** : For match Cloudevents attributes that value must all end with the associated value.
- **all** : All is nested filter expressions, all filter expressions evaluate to true.
- **any** : Not is nested filter expressions, any filter expressions evaluate to true.
- **not** : filter expressions evaluate to false.
- **sql** : [CloudEvents SQL Expression](https://github.com/cloudevents/spec/blob/main/cesql/spec.md)

## Transformer

Translate event data and deliver it to sink with a different format.

## Sink

The target to the event be sent. It may be Vance Sink, Mainstream Serverless computing products such as AWS Lambda, Cloud Functions，Knative serving, etc.

## Config

The confi of event delivery to Sink.

- **rate limit** : The rate limit for delivery event to sink.
- **consumeFrom** : Vanus support three consume type: latest, earliest, timestamp.
- **retryAtttemps** : The maximum number of retries for deliver event to sink when the event did not successfully delivery at the first.
