---
title: MongoDB
---

# MongoDB Sink Connector
This document provides a brief introduction to the MongoDB Sink.
It is also designed to guide you through the process of running a
MongoDB Sink Connector.

## Introduction
The MongoDB Sink is a [Vance Connector](https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md),
which now supports insert/update/delete operations.



## Quickstart

### Prerequisites
- A container runtime (i.e., docker).
- A MongoDB database

### Step 1: Create a Config.yaml with the following command
```shell
cat << EOF > config.yml
# change this hosts to your mongodb's address
db_hosts:
  - 44.242.140.28:27017
port: 8080
EOF
```

| Name     | Required | Default | Description                                     |
|:---------|:--------:|:-------:|-------------------------------------------------|
| db_hosts | **YES**  |    -    | the mongodb cluster hosts                       |
| port     | **YES**  |    -    | the port the mongodb-sink for listening request |


### Step 2: Create a secret.yaml file
The `user` and `password` are required only when MongoDB is configured to use authentication. `authSource` is only required
 when MongoDB is configured with another authentication database than admin.

Create a new file name secret.yaml with the following command.
> vim secret.ya
or
> vi config.json

### Step 2: Insert the configurations.
Press `I` to modify the file and add the following configurations. Use the chart bellow to modify the configs.


```yaml
username: "test"
password: "123456"
authSource: "admin"
```



| Name       | Required | Default | Description                      |
|:-----------|:--------:|:-------:|----------------------------------|
| username   | **YES**  |    -    | the username to connect mongodb  |
| password   | **YES**  |    -    | the password to connect mongodb  |
| authSource |    NO    |  admin  | the authSource to authentication |


:::tip
Exit `vim` and `vi` press `ESC` and `shift` + `:` afterwards `wq` and `ENTER`.
:::


### Step 3: run mongodb-sink with docker

```shell
docker run -d --rm \
  --network host \
  -p 8080:8080 \
  -v ${PWD}:/vance/config \
  --name mongodb-sink public.ecr.aws/vanus/connector/mongodb-sink:dev
```

### insert document to mongodb
For more details on how to understand, please see [Structure](#structure) and [Examples](#examples) section.

```shell
curl --location --request POST 'http://127.0.0.1:8080' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "specversion": "1.0",
    "id": "62ff305f779a73966deb3877",
    "source": "mongodb.replicaset-01.test.source",
    "type": "test.source",
    "datacontenttype": "application/json",
    "time": "2022-08-26T18:42:16Z",
    "data": {
        "op": "INSERT",
        "insert": {
            "document": {
                "a": 1234
            }
        }
    },
    "vancemongosinkdatabase":"test",
    "vancemongosinkcollection": "sink",  
}'
```

### clean resource

```shell
docker stop mongodb-sink  
```

## Configuration

the configuration of mongodb-sink based on [Connection String URI Format](https://www.mongodb.com/docs/v6.0/reference/connection-string/)



```shell
docker run -d \
  -p 8080:8080 \
  -v ${PWD}:/vance/config \
  --name mongodb-sink \
  --rm public.ecr.aws/vanus/connector/mongodb-sink:v0.2.0-alpha
```


## Structure

The input events' structure is a [CloudEvent](https://github.com/cloudevents/spec) format, and each field are explained
follows.

the original `ChangeEvent` can be found in [official document](https://www.mongodb.com/docs/manual/reference/change-events/)

| Field                    | Required | Description                                                                                                                                 |
|--------------------------|:--------:|---------------------------------------------------------------------------------------------------------------------------------------------|
| id                       | **YES**  | the bson`_id` will be set as the id                                                                                                         |
| source                   | **YES**  | where the event come from                                                                                                                   |
| type                     | **YES**  | what's the event's type                                                                                                                     |
| time                     |    NO    | the time of this event generated with RFC3339 encoding                                                                                      |
| data                     | **YES**  | the body of`ChangeEvent`, it's defined as `Event` in [mongodb.proto](../../proto/database/mongodb.proto)                                    |
| data.metadata            |    NO    | the metadata of this event, it's defined as`Metadata` in [base.proto](../../proto/base/base.proto) , in the most cases users can be ignored |
| data.op                  | **YES**  | the event operation of this event, it's defined as`Operation` in [database.proto](../../proto/database/database.proto)                      |
| data.raw                 |    NO    | the raw data of this event, it's defined as "Raw" in [database.proto](../../proto/database/database.proto)                                  |
| data.insert              |    NO    | it's defined as`InsertEvent` in [mongodb.proto](../../proto/database/mongodb.proto)                                                         |
| data.update              |    NO    | it's defined as`UpdateEvent` in [mongodb.proto](../../proto/database/mongodb.proto)                                                         |
| vancemongosinkdatabase   | **YES**  | which `database` the event into                                                                                                             |
| vancemongosinkcollection | **YES**  | which `collection` the event into                                                                                                           |



