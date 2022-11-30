---
title: Kafka
---

# Kafka Source
This document provides a brief introduction to the Kafka Source. It's also
designed to guide you through the
process of running an Kafka Source Connector.

### Introduction
The Kafka Source is a [Vance Connector][vc] which aims to generate CloudEvents in a way that wraps the body of the
original message into the `data` field of a new CloudEvent.
## The ideal message
The ideal type of event for the Kafka source is a String in a JSON format. But it can handle any other type of data provided by Kafka.
> JSON Formatted String
> String = "{ "name": "Jason", "age": "30"}"
>

For example, if an original message looks like:
... json
> { "name": "Jason", "age": "30" }
```

A Kafka message transformed into a CloudEvent looks like:

``` JSON
{
  "id" : "4ad0b59fc-3e1f-484d-8925-bd78aab15123",
  "source" : "kafka.localhost.topic2",
  "type" : "kafka.message",
  "datacontenttype" : "application/json or Plain/text",
  "time" : "2022-09-07T10:21:49.668Z",
  "data" : {
	 "name": "Jason",
	 "age": "30"
	 }
}
```

## Quick Start
This quick start will guide you through the process of running an Kafka Source Connector.

### Prerequisites
- Have container runtime (i.e., docker).
- Have a [kafka server](https://kafka.apache.org/quickstart).
- have a or multiple topics. `bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092`

### Set Kafka Source Configurations
Users can specify their configs by either setting environments variables or mounting a config.json to
`/vance/config/config.json` when they run the connector. Find examples of setting configs [here][config].

Here is an example of the configuration file.
 ```shell
 $ vim config.json
 {
   "v_target": "http://host.docker.internal:8081",
   "KAFKA_SERVER_URL": "localhost",
   "KAFKA_SERVER_PORT": "8082",
   "CLIENT_ID": "KafkaSource",
   "TOPIC_LIST": "topic1"
 }
 ```

### Config Fields of the kafka Source

| Configs   | Description                                                                     | Example                               |
|:----------|:--------------------------------------------------------------------------------|:--------------------------------------|
| v_target  | v_target is used to specify the target URL HTTP Source will send CloudEvents to | "http://localhost:8081"               |
| KAFKA_SERVER_URL    | The URL of the Kafka Cluster the Kafka Source is listening on                  | "localhost"                           |
| KAFKA_SERVER_PORT    | v_port is used to specify the port Kafka Source is listening on                  | "8082"                                |
| CLIENT_ID    |  An optional identifier for multiple Kafka Sources that is passed to a Kafka broker with every request.                  | "kafkaSource"                         |
| TOPIC_LIST    | The source will listen to the topic or topics specified.                   | "topic1"  or "topic1, topic2, topic3" |

### Run the Kafka Source with Docker
Create your `config.json`, and mount it to specific paths to run the Kafka Source using the following command.

 > docker run -v $(pwd)/config.json:/vance/config/config.json --rm vancehub/source-kafka

### Verify the Kafka Source
You can verify if the Kafka Source works properly by running the Display Sink Connector and by sending a message directly to the kafka broker.

Start display Sink with the following command:
> docker run -v $(pwd)/config.json:/vance/config/config.json -p 8081:8081 --rm vancehub/source-kafka

Send a message in Kafka with the following command:
> bin/kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092

:::tip
Set the v_target as http://host.docker.internal:8081
:::