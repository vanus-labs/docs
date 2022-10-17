---
title: Architecture
---
# Architecture

This article introduces Vanus architecture to you from the business perspective, you can be learned how many components
Vanus have, and what role they're played.

![vanus-architecture](images/arch.png)

The goal of Vanus is automatically and transparently scale up or down in order to meet near-zero administration,
maintenance, or scaling burden. So, the principle of design Vanus follow `Service Oriented Architecture(SOA)`.
SOA helps us to resolve many challenges such that predictable behaviors, high available, scalability, etc.
Following are 3 main parts in Vanus.

## Vanus Core

The implementation of Message Queue functionalities. It separates storage and computing resources. Storage Service
supports [long-term persistence](../concepts/eventbus.md#retention-policy) and tier-storage(SSD->HDD->S3) for event
streaming. Computing Service is consisted by various services like Trigger and Timing, which implements different
features of Vanus like [Subscription](../concepts/subscription.md), [Delay/Schedule Event](../concepts/special-messages.md), etc.

Storage and Computing Service are combined by different services(not displayed in above diagram), following are introduction:

### Controller

It is the decision-making center of the entire system, which is responsible for service discovery, metadata management,
and resource scheduling. Regarding the metadata, it mainly includes event storage metadata and event subscription metadata.
The event storage metadata includes the distribution of the event topic Eventbus in the Segment Server, and the mapping
relationship between Eventbus, Eventlog, and Segments. The event subscription metadata includes the event consumption
topic, the event processing method, and the address to which the event needs to be routed. In addition,
the Controller is also responsible for the resource scheduling of the entire system, including the scheduling of event
storage traffic between Segment Servers and the scheduling of event distribution traffic between Trigger Workers.

### SegmentServer

Within the stateless gateway service, events that adhere to the CloudEvents standard are received and stored on a disk.
Events can come from Source Connector or Microservices. Segment Server provides multiple copies capacity by
implementing multi-raft. The Segment Server can automatically and elastically scale according to the event storage
traffic. When there are more event storage requests, more Segment Servers are started to process them in a balanced manner.

### TriggerWorker

It is used to process events and route them to user workload or Sink Connector. After a user creates the subscription,
the Controller assigns the subscription task to the specific Trigger Worker. The Trigger Worker captures the events of
the corresponding Eventbus, completes the even filter and even transformation, and then delivers the events.

### Timing

It has implemented the Delay and Schedule Event feature, with the help of the Hierarchical Timing Wheels, Vanus supports
precise second-grade and unlimited future time delivering. More about them, you can see[Special Event](../concepts/special-messages.md).

## Vanus Connect

To simple understanding, Vanus Connect is a set producer and consumer that out-of-box to provide interoperability
across services, platforms, and systems.

### Source Connector

Source Connector obtains events from event sources, converts events into CloudEvents format, and sends them to any
HTTP endpoint that supports the CloudEvents format. It supports both pull and push event acquisition methods.
For SaaS software or cloud services such as Github, Amazon S3, etc., that provides a webhook mechanism, events are
pushed to the Source Connector by the event source. For data systems such as message queues and databases, events are
pulled from the event source by the Source Connector.

### Sink Connector

It receives CloudEvents events sent by HTTP endpoints, and routes events to database systems, SaaS software, or cloud
services after performing certain processing on the events.

### SCE

:::info
Each connector is constructed with Docker, so it can work independently without SCE. SEC just provides extra
availability and scalability to connectors.
:::
**SCE(Serverless Connector Engine)** is the coordinator, which is responsible for the autoscaling of Source Connector and
Sink Connector, which supports automatically scaling up from 0 to n and scales down from n to 0 according to event
traffic or other users' conditions.

## Vanus Workflow

:::caution
Vanus Workflow is working in progress.
:::

Vanus provides full compatible with [ServerlessWorkflow](https://github.com/serverlessworkflow/specification).

Serverless Workflow focuses on defining a **vendor-neutral**, **platform-independent**, and **declarative** workflow language that
targets the serverless computing technology domain. It can be used to significantly bridge the gap between your unique
business domain and the target technology domain.
