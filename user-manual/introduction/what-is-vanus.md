---
title: What is Vanus
id: what-is-vanus
---
# What is Vanus

** Vanus ** is a Serverless Message Queue made for global developers with many new features beyond traditional message queues.
Vanus separates storage and computing resources and offers modern developer features such as **CloudEvents supporting**,
**FaaS Integration**, **built-in Connectors**, **Data Filtering and Transformation**, and more.

Vanus is not only used for building Pub/Sub systems, but also let the developing of EDA(Event-driven Architecture)
application more agile.

## Serverless

The principle of designing Vanus is make it become a **fully serverless** system, so Vanus automatically and transparently
scales up or down, which let you only pay for using and up to 10x reduction in cost. Moreover, Vanus provides high
availability with near to zero administration, maintenance, or scaling burden even on-premises.

## CloudEvents

> The lack of a common way of describing events means developers must constantly re-learn how to consume events. ... The portability and productivity we can achieve from event data is hindered overall.
>
> CloudEvents is a specification for describing event data in common formats to provide interoperability across services, platforms and systems.

That's why Vanus takes **CloudEvents** as its message envelope instead of inventing another messaging protocol.

## FaaS Integration

We believe there's one day of the future when all businesses will be run in FaaS and communicate through Message Queue.
Vanus has integrated FaaS Runtime such as **AWS Lambda**, **Knative**, and mores work in progress.

## Event-driven Architecture

More and more organization have chosen Event-driven Architecture to build their applications in the Cloud because of
beneficial of EDA such as high scalable, extremely loosen couple, high composable. But it's still a challenge to building
a large-scale EDA application still, Vanus provides plentiful connectors and data filtering and transformation mechanism
to make EAD Application building easier.

## Open Source

Vanus is a completely Open Source project, which public under the Apache 2.0 License, you can find [Vanus](https://github.com/linkall-labs/vanus) on GitHub.

For more details about Vanus you can find in [Concepts](../concepts.md) section.
