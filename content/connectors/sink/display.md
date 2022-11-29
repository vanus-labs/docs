---
title: Display
---

# Display Sink
This document provides a brief introduction to the Display Sink.
It is also designed to guide you through the process of running a
Display Sink Connector.

## Introduction
A [Vance Connector][vc] which prints received CloudEvents. This is commonly used as a logger to check incoming data. 
The Display Sink is a single function [Connector][vc] which aims to print incoming CloudEvents in JSON format.

## Display Event Structure
For example, it will print the incoming CloudEvent looks like:
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

# Quick Start
This quick start will guide you through the process of running an Display Sink Connector.

### Prerequisites
- Have container runtime (i.e., docker).
- Have an open port.

### Set Display Sink Configurations 

Users can specify their configs by either setting environments variables or mount a config.json to
`/vance/config/config.json` when they run the connector. Find examples of setting configs [here][config].

Here is an example of a configuration file for the Display Sink.
```json
{
  "v_port": "8080",
  
}
```


### Config Fields of the Display Sink

| Configs   | Required | Description                                                            | Example                 |
|:----------|:----|:-----------------------------------------------------------------------|:------------------------|
| v_port    |   false   | v_port is used to specify the port Display Sink is listening on           | "8080"                  |


### Run the Display Sink with Docker
Create your config.json, and mount it to the
specific path to run the Display Sink using the following command.

> docker run -p 8080:8080 -v $(pwd)/config.json:/vance/config/config.json --rm vancehub/sink-display


[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md