---
title: Slack
---

# Slack Sink

## Introduction

The Slack Sink is a [Vance Connector](../README.md) which aims to handle incoming CloudEvents in a way that extracts the `data` part of the
original event and deliver these extracted `data` to Slack channels.

For example, if the incoming CloudEvent looks like:

```json
{
  "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
  "source": "quick-start",
  "specversion": "1.0",
  "type": "quick-start",
  "datacontenttype": "application/json",
  "time": "2022-10-26T10:38:29.345Z",
  "data": {
    "subject": "Test",
    "message": "Hello Slack!:wave: This is Sink Slack!"
  }
}
```

then channels will receive a message like:
![message](https://github.com/linkall-labs/vance/blob/main/connectors/sink-slack/message.png)


## Quick Start
This quick start will guide you through the process of running an HTTP Sink connector.

### Prerequisites
- A container runtime (i.e., docker).
- A slack Workspace.

### Step 1: Create a slack app
If you don't have a Slack app, go to the following link to create one [Create your Slack app](https://api.slack.com/apps/new).
permission required:
- chat:write
- chat:write.public

### Step 2: Create a Config file
Replace `<app_id>`, `<custom app name>`, and `<oauth token>` to yours.

```shell
cat << EOF > config.yml
target: "<url of cloud event receiver>"
name: "quick-start"
hosts: [<your_mongodb_hosts >]
EOF
```
For full configuration, you can see [config](#configuration) section.

### Step 3: Run Docker
We need to map 8080 to 31080 in order to avoid port conflict.

```shell
docker run -d -p 31080:8080 --rm \
  -v ${PWD}:/vance/config \
  --name sink-slack public.ecr.aws/vanus/connector/sink-slack:latest
```
### (Optional) Verify the Source connector

Send a HTTP request to the sink with the following command.
Replace `<from_slack_address>`, `<from_slack_address>`, and `<smtp server address>` to yours.

```shell
curl --location --request POST 'localhost:31080' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
    "source": "quick-start",
    "specversion": "1.0",
    "type": "quick-start",
    "datacontenttype": "application/json",
    "time": "2022-10-26T10:38:29.345Z",
    "data": {
        "subject": "Test",
        "message": "Hello Slack!:wave: This is Sink Slack!"        
    }
}'
```

now, you should see a new message in Slack.
![message.png](https://github.com/linkall-labs/vance/blob/main/connectors/sink-slack/message.png)

### Clean

```shell
docker stop sink-slack
```


### Configuration

The default path is `/vance/config/config.yml`. if you want to change the default path, you can set env `CONNECTOR_CONFIG` to
tell Slack Sink.

| Name                     | Required | Default | Description                                                                                         |
|:-------------------------|:--------:|:-------:|-----------------------------------------------------------------------------------------------------|
| default                  | **YES**  |    -    | Slack Sink supports multiple slack apps as target, you could set the default app by this field      |
| slack.[].app_name        | **YES**  |    -    | custom slack app name as identifier                                                                 |
| slack.[].token           | **YES**  |    -    | OAuth Token of this app, more visit: https://api.slack.com/legacy/oauth                             |
| slack.[].default_channel |    NO    |    -    | set default channel the messages send to if attribute was not be set, use `,` to separate multiples |

### Extension Attributes

Slack Sink has defined a few [CloudEvents Extension Attribute](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#extension-context-attributes)
to determine how to process event.

| Attribute       | Required | Examples         | Description                                |
|:----------------|:--------:|------------------|--------------------------------------------|
| xvslackapp      |    NO    | test_app         | Which slack app this event want to send to |
| xvslackchannels |    NO    | #general,#random | use `,` to separate multiples              |

### Data
The event data must be `JSON` format, and only two key `subject` and `message` is valid for using, example:
```json
{
  "subject": "Test",
  "message": "Hello Slack!:wave: This is Sink Slack!"
}
```

## Examples

### Sending messages to the default app and default channel
```shell
curl --location --request POST 'localhost:31080' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
    "source": "quick-start",
    "specversion": "1.0",
    "type": "quick-start",
    "datacontenttype": "application/json",
    "time": "2022-10-26T10:38:29.345Z",
    "data": {
        "subject": "Test",
        "message": "Hello Slack!:wave: This is Sink Slack!"        
    }
}'
```

### Sending message to the specified app and specified channel
```shell
curl --location --request POST 'localhost:31080' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
    "source": "quick-start",
    "specversion": "1.0",
    "type": "quick-start",
    "datacontenttype": "application/json",
    "time": "2022-10-26T10:38:29.345Z",
    "xvslackapp": "test",
    "xvslackchannels": "#team-a",
    "data": {
        "subject": "Test",
        "message": "Hello Slack!:wave: This is Sink Slack!"        
    }
}'
```

### Sending message to the specified app and multiple channels
```shell
curl --location --request POST 'localhost:31080' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
    "source": "quick-start",
    "specversion": "1.0",
    "type": "quick-start",
    "datacontenttype": "application/json",
    "time": "2022-10-26T10:38:29.345Z",
    "xvslackapp": "test",
    "xvslackchannels": "#team-a,#team-b,#team-c",
    "data": {
        "subject": "Test",
        "message": "Hello Slack!:wave: This is Sink Slack!"        
    }
}'
```
