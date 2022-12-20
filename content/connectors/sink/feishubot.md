---
title: Feishu
---

# Feishu Sink
This document provides a brief introduction to the Feishu Sink. It's also
designed to guide you through the
process of running an Feishu Sink Connector.

## Introduction
The Feishu Sink is a [Vance Connector](https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md) which aims to handle incoming CloudEvents in a way that extracts the `data` part of the
original event and deliver these extracted `data` to  Feishu APIs.

## Handling incoming CloudEvents

For example, if the incoming CloudEvent looks like:
```http
{
  "id" : "42d5b039-daef-4071-8584-e61df8fc1354",
  "source" : "vance-http-source",
  "specversion" : "V1",
  "type" : "http",
  "datacontenttype" : "application/json",
  "time" : "2022-05-17T18:44:02.681+08:00",
  "vancefeishusinkservice": "bot",
  "data" : {
    Hello world!
  }
}
```

# Quick Start
This quick start will guide you through the process of running an HTTP Sink connector.

### Prerequisites
- A container runtime (i.e., docker).
- Have a Feishu account.

### Step 1: Create a bot
Go to your targeted group, click Chat Settings > Group Bots > Add Bot, and select Custom Bot to add the bot to the group chat.

### Step 2
Enter a name and description for your bot, or set up an avatar for the bot, and then click "Add".

![add-a-bot](https://github.com/linkall-labs/vance-docs/raw/main/resources/connectors/sink-feishu-bot/add-a-bot.gif)

:::tip
You will receive a webhook address save it.
Please keep this webhook address properly. Do not publish it on GitHub, blogs, and other publicly accessible sites to avoid it being maliciously called to send spam messages.
:::

### Step 3: Set a Signature
Lastly You need to set a signature like the picture bellow.
![bot-config](https://github.com/linkall-labs/vance-docs/raw/main/resources/connectors/sink-feishu-bot/feishu-config.png)

### Step 4: Create a Config.yaml file by running the following

```shell
cat << EOF > config.yml
enable: ["bot"]
bot:
  webhooks:
    - chat_group: "bot1"
      signature: "xxxxxxx"
      address: "https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxx"
EOF
```

###  Step 5: Run the docker image

```shell
docker run -d -p 31080:8080 --rm \
  -v ${PWD}:/vance/config \
  --name sink-feishu public.ecr.aws/vanus/connector/sink-feishu:latest
```

### Test

```shell
curl --location --request POST '127.0.0.1:31080' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
  "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
  "source": "sink-feishu-quickstart",
  "specversion": "1.0",
  "type": "hello",
  "datacontenttype": "application/json",
  "time": "2022-10-26T10:38:29.345Z",
  "vancefeishusinkservice": "bot",
  "data": "Hello Feishu!"
}'
```

now, you should see a notice in your chat group.
![received-notification](received-message.png)

### Clean

```shell
docker stop sink-feishu
```