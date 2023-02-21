---
title: What is Vanus
id: what-is-vanus
---
# What is Vanus

## Overview
**Vanus** is a Serverless Message Queue made for global developers with many new features beyond traditional message queues.
Vanus separates storage and computing resources and offers modern development features such as CloudEvents native,
FaaS Integration, built-in Connectors, Data Filtering and Transformation, and more.

Vanus can be used not only for building **Pub/Sub systems** but especially enables you to build an **EDA(Event-driven Architecture) 
application** with agility.

## Characteristics of Vanus

### Serverless

The principle of Vanus design is that make Vanus become **a fully serverless system**, so Vanus can automatically and transparently 
scale up or down, which lets you only pay for the actual resources needed and up to a 10x reduction in your cost. 
Moreover, Vanus provides high availability with near to zero administration, maintenance, or scaling burden, even on-premises.

### CloudEvents

The lack of a common way of describing events means developers must constantly re-learn how to consume events. 
The portability and productivity we can achieve from event data are hindered overall.

CloudEvents is a specification for describing event data in common formats to provide interoperability across services, 
platforms, and systems.

That's why **Vanus takes CloudEvents as its message envelope** instead of inventing another messaging wried protocol.

### FaaS Integration

We believe that one day, all businesses will be run in FaaS and communicate through Message Queue. Vanus has integrated
FaaS Runtimes such as **AWS Lambda**, **Knative**, and much more in the future.

### Event-driven Architecture

More and more organizations have chosen Event-driven Architecture to build their applications in the Cloud because of 
the benefit of EDA, such as being **highly scalable**, **extremely loosely coupled**, and **highly composable**. But it's still a 
challenge to build a large-scale EDA application, and Vanus provides **plenty of connectors**, **data filtering**, and
**transformation mechanisms** to make the process of building an EDA Application easier.

### Open Source

Vanus is an entirely Open Source project, which is public under the Apache 2.0 License. You can find Vanus on [GitHub](https://github.com/vanus-labs/vanus).

For more details about Vanus, you can find it in our [Concepts](concepts) section.
