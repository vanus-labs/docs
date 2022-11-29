---
title: HTTP
---

# HTTP Sink
This document provides a brief introduction
to the HTTP Sink. It's also designed to guide you through the
process of running an HTTP Sink Connector.

## Introduction
The HTTP Sink is a [Vance Connector][vc] which aims to handle incoming CloudEvents in a way that extracts the `data` part of the
original event and deliver these extracted `data` to the target URL.

## Handling incoming CloudEvent
For example, if the incoming CloudEvent looks like:

```http
{
  "id" : "42d5b039-daef-4071-8584-e61df8fc1354",
  "source" : "vance-http-source",
  "specversion" : "V1",
  "type" : "http",
  "datacontenttype" : "application/json",
  "time" : "2022-05-17T18:44:02.681+08:00",
  "data" : {
    "myData" : "simulation event data <1>"
  }
}
```

The HTTP Sink will POST an HTTP request looks like:

``` json
> POST /payload HTTP/2

> Host: localhost:8080
> User-Agent: VanceCDK-HttpClient/1.0.0
> Content-Type: application/json
> Content-Length: 39

> {
>    "myData" : "simulation event data <1>"
> }
```
## Quick Start
This quick start will guide you through the process of running an HTTP Sink connector.

### Prerequisites
- A container runtime (i.e., docker).


## HTTP Sink Configs

Users can specify their configs by either setting environments variables or mount a config.json to
`/vance/config/config.json` when they run the connector. Find examples of setting configs [here][config].

### Set HTTP Sink Configurations
You can specify your configs by either setting environments
variables or mounting a config.json to `/vance/config/config.json`
when running the connector.

Here is an example of a configuration file for the HTTP Sink.
 ```json 
 $ vim config.json
 {
   "v_target": "http://localhost:8081",
   "v_port": "8080",
 }
 ```

| Configs   | Description                                                            | Example                 |
|:----------|:-----------------------------------------------------------------------|:------------------------|
| v_target  | v_target is used to specify the target URL HTTP Sink will send data to | "http://localhost:8081" |
| v_port    | v_port is used to specify the port HTTP Sink is listening on           | "8080"                  |

### Run the HTTP Sink with Docker
Create your config.json, and mount it to the
specific paths to run the HTTP Sink using the following command.

>  docker run -v $(pwd)/config.json:/vance/config/config.json -p 8080:8080 --rm vancehub/sink-http

### Verify the HTTP Sink

To verify the HTTP Sink, you should send CloudEvents to the address of HTTP Sink. Try to use the  following `curl` command.

```shell 
 > curl -X POST 
 > -d '{"specversion":"0.3","id":"b25e2717-a470-45a0-8231-985a99aa9416","type":"com.github.pull.create","source":"https://github.com/cloudevents/spec/pull/123","time":"2019-07-04T17:31:00.000Z","datacontenttype":"application/json","data":{"Quick-Start":"This is a CloudEvent"}}' 
 > -H'Content-Type:application/cloudevents+json' 
 > http://localhost:8080 
 ``` 


[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md