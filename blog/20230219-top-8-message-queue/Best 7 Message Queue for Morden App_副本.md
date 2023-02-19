# 最适合云原生应用的7款消息队列

Message Queue is a common communication pattern used in software architecture to enable asynchronous communication between different components of a system. It allows one component of a system to send a message or task to another component, which may be running on a different server or in a different process or thread.

The message queue acts as a buffer between the sender and the receiver, holding messages until the receiver is ready to process them. This allows the sender to continue its work without having to wait for the receiver to process the message immediately. When the receiver is ready, it can pull messages from the queue and process them.

Message queues can be used for a variety of purposes, such as load balancing, task distribution, and decoupling components. They can be implemented in many different ways, such as using in-memory data structures or external message brokers like RabbitMQ or Apache Kafka.

以下博客文章将帮助您关注2023 年最适合云原生应用的**消息队列*，其中前三款是目前影响力最大消息队列，后面4款是近两年最新流行的下一代消息队列。

* Apache Kafka
* RabbitMQ
* Pulsar
* Nats
* Redpanda
* Vanus
* KubeMQ
* Memphis



### 



5 latest popular open-source event streaming systems suitable for k8s

[Top 5 Cloud-Native Message Queues (MQs) for Kubernetes appliaction]

Top 5 Cloud-Native Message Queues (MQs) best suitable for Kubernetes appliaction

Top5 Kubertenes Native Message queue

一提到事件流平台，可能您最先想到的是kafka或者rabbitmq。本想向介绍10个最新流行的新型的事件流系统。他们的共同特点是轻量、极好的弹性、k8s应用友好的。

Top5 Kubertenes Message Queue Platform for Cloud Native Apps

Top5 Kubertenes  Message Queue for Cloud Native Apps

​     一提到消息队列，可能大家最先想到的kafka、RabbitMQ  或者Pulsar。不过他们不是本文的主角，我今天想向大家介绍5款目前比较流行的开源k8s消息队列。

1 Nats

2 Vanus

3 Memphis

4 polar

5 kubeMQ



1 Nats



2 Vanus



3 Memphis



4 polar



5 TriggerMesh



6 Pulsar



7 redpanda



8 pulsar



9  kubeMQ



10 https://nsq.ixo/

Ref: https://dev.to/chegerose/top-5-cloud-native-message-queues-mqs-with-nodejs-support-ak5

ref2 ： 6 Top Message Brokers for Modern Applications



https://www.section.io/engineering-education/kubemq-scalable-messaging-platforms-kubernetes-operators/

https://www.doit.com/its-time-to-move-from-kafka-to-kubemq/

https://kubemq.io/kafka-vs-kubemq/

https://medium.com/geekculture/kubemq-a-modern-alternative-to-kafka-9b3257168845


https://medium.com/memphis-dev/memphis-dev-vs-apache-kafka-a6ef8a21e78c