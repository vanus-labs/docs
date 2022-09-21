# Kafka Source 

## Overview

A [Vance Connector][vc] which transforms Kafka messages from topics to CloudEvents and deliver them to the target URL.

### Features
The Kafka Source connector provides the following features:

- At least once delivery: The connector guarantees that records are delivered at least once.
- Supports multiple Topics: The connector supports Listening to one or more topics.

## User Guidelines

### Connector Introduction

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

### Prerequisites
Before installing Kafka source, you must meet the following prerequisites:

- You have installed [docker](https://www.docker.com).

- You have a kafka server installed and running. 

### Installing Kafka source

Install Kafka source by running this command:

```shell
 docker pull vancehub/source-kafka:latest
 ```
### Create Configs

Users can specify their configs by either setting environments variables or mounting a config.json to
`/vance/config/config.json` when they run the connector. Find examples of setting configs [here][config].

Create a Json file named `config.json`.

Inside the file configs.json insert:

```json
 {
  "v_target": "http://localhost:8081",
  "KAFKA_SERVER_URL": "localhost",
  "KAFKA_SERVER_PORT": "9092",
  "CLIENT_ID": "Source",
  "TOPIC_LIST": "topic1, topic2"
}

 ```
 
#### Config Fields of the kafka Source

| Configs   | Description                                                                     | Example                 |
|:----------|:--------------------------------------------------------------------------------|:------------------------|
| v_target  | v_target is used to specify the target URL HTTP Source will send CloudEvents to | "http://localhost:8081" |
| KAFKA_SERVER_URL    | The URL of the Kafka Cluster the Kafka Source is listening on                  | "localhost"                  |
| KAFKA_SERVER_PORT    | v_port is used to specify the port Kafka Source is listening on                  | "8080"                  |
| CLIENT_ID    |  An optional identifier for multiple Kafka Sources that is passed to a Kafka broker with every request.                  | "kafkaSource"                  |
| TOPIC_LIST    | The source will listen to the topic or topics specified.                   | "topic1"  or "topic1, topic2, topic3"                 |


### Start Kafka source
Start the kafka connector by attaching the configs and running the docker image with this command:

```shell
 docker run -v $(pwd)/config.json:/vance/config/config.json vancehub/source-kafka:latest
 ```

and your done!

## Kafka Source Image

> vancehub/source-kafka
