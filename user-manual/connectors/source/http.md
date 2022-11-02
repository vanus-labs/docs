---
title: HTTP
---

# HTTP Source
This document provides a brief introduction to the HTTP Source. It's also 
designed to guide you through the
process of running an HTTP Source Connector.

### Introduction

The HTTP Source is a [Vance Connector][vc] which aims to generate CloudEvents
in a way that wraps all headers and body of the
original request into the `data` field of a new CloudEvent.

## HTTP Event Structure
For example, if an original request looks like:
 ```http
 > POST /payload HTTP/2

 > Host: localhost:8080
 > User-Agent: VanceCDK-HttpClient/1.0.0
 > Content-Type: application/json
 > Content-Length: 39

 > {
 >    "myData" : "simulation event data <1>"
 > }
 ```
###

This POST HTTP request will be transformed into a CloudEvent looks like this:
 ``` json
 {
   "id" : "42d5b039-daef-4071-8584-e61df8fc1354",
   "source" : "vance-http-source",
   "specversion" : "V1",
   "type" : "http",
   "datacontenttype" : "application/json",
   "time" : "2022-05-17T18:44:02.681+08:00",
   "data" : {
     "headers" : {
       "user-agent" : "VanceCDK-HttpClient/1.0.0",
       "content-type" : "application/json",
       "content-length" : "39",
       "host" : "localhost:8080"
     },
     "body" : {
       "myData" : "simulation event data <1>"
     }
   }
 }
 ```
---
## Quick Start
This quick start will guide you through the process of running an HTTP Source Connector.

### Prerequisites
- Have container runtime (i.e., docker).
- Have a public IP

### HTTP Source Configurations
You can specify your configs by either setting environments variables or mounting a config.json to
`/vance/config/config.json` when running the Connector.

Here is an example of a configuration file for the HTTP Source.
 ```shell
 $ vim config.json
 {
   "v_target": "http://host.docker.internal:8081",
   "v_port": "8080"
 }
 ```

| Configs   | Description                                                                     | Example                 |
 |:----------|:--------------------------------------------------------------------------------|:------------------------|
| v_target  | v_target is used to specify the target URL HTTP Source will send CloudEvents to | "http://localhost:8081" |
| v_port    | v_port is used to specify the port HTTP Source is listening on                  | "8080"                  |

### Run the HTTP Source with Docker
Create your `config.json`, and mount it to specific paths to run the HTTP Source using following command.

 ```shell
 docker run -v $(pwd)/config.json:/vance/config/config.json -p 8080:8080 --rm vancehub/source-http
 ```

### Verify the HTTP Source
You can verify if the HTTP Source works properly by running the Display Sink connector and by sending a HTTP request.

:::tip
Set the v_target as http://host.docker.internal:8081
:::

With the following HTTP request:
 ```shell
 curl -X POST -d 
 "{
   "id" : "vance.vance_test:binlog.000010:2515",
   "source" : "vance.debezium.mysql",
   "specversion" : "1.0",
   "type" : "debezium.mysql.vance.vance_test",
   "time" : "2022-07-08T03:17:03.139Z",
   "datacontenttype" : "application/json",
   "vancedebeziumop" : "r",
   "vancedebeziumversion" : "1.9.4.Final",
   "vancedebeziumconnector" : "mysql",
   "vancedebeziumname" : "vance",
   "vancedebeziumtsms" : "1657250223138",
   "vancedebeziumsnapshot" : "true",
   "vancedebeziumdb" : "vance",
   "vancedebeziumtable" : "vance_test",
   "vancedebeziumpos" : "2515",
   "vancedebeziumfile": "binlog.000010",
   "vancedebeziumrow": "0",
   "data" : {
     "id":18,
     "name":"xdl",
     "description":"Development Manager",
     "date": "2022-07-06"
   }
 }"
 http://localhost:8081 
 ```

The result in Display sink.
 ``` json
 {
   "id" : "42d5b039-daef-4071-8584-e61df8fc1354",
   "source" : "vance-http-source",
   "specversion" : "V1",
   "type" : "http",
   "datacontenttype" : "application/json",
   "time" : "2022-05-17T18:44:02.681+08:00",
   "data" : {
     "headers" : {
       "user-agent" : "VanceCDK-HttpClient/1.0.0",
       "content-type" : "application/json",
       "content-length" : "39",
       "host" : "localhost:8080"
     },
     "data" : {
       "id":18,
     "name":"xdl",
     "description":"Development Manager",
     "date": "2022-07-06"
     }
   }
 }
 ```

[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md