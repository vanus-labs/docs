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
This quick start will guide you through the process of running a Display Sink Connector.

### Prerequisites
- Have container runtime (i.e., docker).
- Have an open port.

### Step 1: Create a Config.json file
Create a new file name config.json with the following command.
> vim config.json
or
> vi config.json

### Step 2: Insert the configurations.
Press `I` to modify the file and add the following configurations. Use the chart bellow to modify the configs.
 ```json
{
  "v_port": "8081"
}
 ```
### Config Fields of the kafka Source

| Configs   | Required | Description                                                            | Example |
|:----------|:----|:-----------------------------------------------------------------------|:--------|
| v_port    |   false   | v_port is used to specify the port Display Sink is listening on           | "8081"  |

:::tip
Exit `vim` and `vi` press `ESC` and `shift` + `:` afterwards `wq` and `ENTER`.
:::

### Step 3: Run the docker image
Run The connector with the following command.
> docker run -v $(pwd)/config.json:/vance/config/config.json -p 8081:8081 --rm vancehub/sink-display


### (Optional) Verify the Source connector
**step 1**

To verify the HTTP Sink, you should send a CloudEvents to the HTTP Sink with the following `curl` command.
> curl -X POST -d '{"specversion":"0.3","id":"b25e2717-a470-45a0-8231-985a99aa9416","type":"com.github.pull.create","source":"https://github.com/cloudevents/spec/pull/123","time":"2019-07-04T17:31:00.000Z","datacontenttype":"application/json","data":{"Quick-Start":"This is a CloudEvent"}}' -H'Content-Type:application/cloudevents+json' http://localhost:8081

### Result
 ```shell
{
  "id" : "b25e2717-a470-45a0-8231-985a99aa9416",
  "source" : "https://github.com/cloudevents/spec/pull/123",
  "specversion" : "V03",
  "type" : "com.github.pull.create",
  "datacontenttype" : "application/json",
  "time" : "2019-07-04T17:31Z",
  "data" : {
    "Quick-Start" : "This is a CloudEvent"
  }
}
 ```

[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md