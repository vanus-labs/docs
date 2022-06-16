# Architecture

**Vanus** is mainly composed of Vanus core and Vance. Vanus core includes Segment Server, Trigger, and Controller, which are mainly used for event subscription/publishing, storage, computing, and triggering serverless workloads. Vance consists of Source Connector, Sink Connector, and Connector Serverless Engine, which are used to connect events from cloud services, databases, IoT, and other systems to the Vanus, and then deliver them to user workloads or SaaS systems after processing. The architecture of Vanus is illustrated as follows:


![Architecture](https://user-images.githubusercontent.com/4669944/174031662-58123692-e01c-43c4-931f-5e1ec9b9a2da.jpeg)


## Vanus core

**Segment Server:** With the stateless gateway service, events that adhere to the CloudEvents standard are received and stored on a disk.  Events can come from Source Connector or Microservices. Segment Server provides multiple copies capacity by implementing multi-raft. The Segment Server can automatically and elastically scale according to the event storage traffic. When there are more event storage requests, more Segment Servers are started to process them in a balanced manner.

**Controller:** It is the decision-making center of the entire system,  which is responsible for service discovery, metadata management, and resource scheduling. Regarding the metadata,  it mainly includes event storage metadata and event subscription metadata. The event storage metadata includes the distribution of the event topic Eventbus in the Segment Server, and the mapping relationship between Eventbus, Eventlog, and Segments. The event subscription metadata includes the event consumption topic, the event processing method, and the address to which the event needs to be routed. In addition, the Controller is also responsible for the resource scheduling of the entire system, including the scheduling of event storage traffic between Segment Servers and the scheduling of event distribution traffic between Trigger Workers.

**Trigger Worker:** It is used to process events and route them to user workload or Sink Connector. After a user creates the subscription, the Controller assigns the subscription task to the specific Trigger Worker. The Trigger Worker acquires the events of the corresponding Eventbus, completes the even filter and even transformation, and then delivers the events.

## Vance

**Source Connector:** Source Connector obtains events from event sources, converts events into CloudEvents standards, and sends them to any HTTP endpoint that supports the CloudEvents format. It supports both pull and push event acquisition methods. For SaaS software or cloud services such as Github, Amazon S3, etc.,  that provide a webhook mechanism, events are pushed to the Source Connector by the event source. For data systems such as message queues and databases, events are pulled from the event source by the Source Connector.

**Sink Connector:** It receives CloudEvents events sent by HTTP endpoints, and routes events to database systems, SaaS software, or cloud services after performing certain processing on the events.

**Connector Serverless Engine:** It is responsible for the autoscaling of Source Connector and Sink Connector, which supports automatically scaling up from 0 to n and scales down from n to 0 according to event traffic or other users' conditions.
