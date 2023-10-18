---
title: Architecture
---
# Architecture

This article introduces Vanus architecture from the business perspective and will teach you about the components of Vanus.

![vanus-architecture](images/arch.webp)

Vanus aims to automatically and transparently scale up or down and meet near-zero administration, maintenance, 
or scaling burden. Its principle of design follows the Service Oriented Architecture(SOA). SOA helps us to resolve many
challenges, such as predictable behaviors, high availability, scalability, etc.

## Vanus Core

Vanus Core implements Message Queue functionalities and separates storage and computing. Its storage services support

[long-term retention](understand-vanus-connect-os/concepts#retention-policy) and tier storage (SSD->HDD->S3) for event streaming. 
Computing consists of services like Trigger and Timing, which implement different features of Vanus like 
[Subscription](understand-vanus-connect-os/concepts#subscription), [Delay/Schedule Event](understand-vanus-connect-os/concepts#special-events), etc.

:::tip
In the above diagram, Storage and Computing are portrayed at a high level.
:::

### Controller

It is the decision-making center of the entire system, which is responsible for service discovery, metadata management,
and resource scheduling. Regarding the metadata, it primarily includes event storage and event subscription metadata.

### Segment Server

Within the stateless gateway service, events that adhere to the CloudEvents standard sent by Source Connector or Microservices are received and sent to Segment Server.

Segment Server provides multiple copies capacity by implementing multi-raft. It can automatically and elastically scale according to the event storage traffic. When there are more event storage requests, the Controller will start more Segment Servers to process them in a balanced manner.

### Trigger

A trigger fetches, processes, and dispatches events to the user workload or Sink Connector. After a user creates a subscription, the Controller assigns the subscription with a trigger to a specific Trigger Worker, container that runs Triggers. The Trigger fetches the events in the specified Eventbus, completes the events filter and transformation, and then delivers the events.

### Timer

The Timing service implements the Delay and Schedule Event feature with the help of the Hierarchical Timing Wheels.
Vanus supports seconds-precision and unlimited future-time delivery. For more information, visit our [Special Events](understand-vanus-connect-os/concepts#special-events).

## Vanus Connect

Vanus Connect is a set of producers and consumers out-of-box to provide interoperability across services, platforms, and systems.

### Source Connector

A source connector obtains data from an underlying data producer and delivers it to targets, after the original data has been transformed into CloudEvents. It doesn't limit the way a source retrieves data. (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data to be sent to it).

### Sink Connector

It receives events with CloudEvents format, processes the events, and routes them downstream, like database systems, SaaS, or cloud services.

### SCE

:::info
Each connector is constructed with Docker and can work independently without SCE. SCE provides extra availability and scalability to connectors.
:::

SCE(Serverless Connector Engine) is the coordinator responsible for the auto-scaling of the Source Connector and Sink Connector, which supports automatically scaling up from 0 to n and scales down from n to 0 according to event traffic or other user conditions.

## Vanus Workflow

:::caution
Vanus Workflow is a work in progress.
:::

Vanus provides full compatibility with [ServerlessWorkflow](https://github.com/serverlessworkflow/specification).

Serverless Workflow focuses on defining a **vendor-neutral**, **platform-independent**, and **declarative** workflow language that
targets the serverless computing technology domain. It can be used to significantly bridge the gap between your unique
business domain and the target technology domain.
