---
title: Amazon SNS Source
category: 6321d3a8dc727406c2977082
---

# Amazon SNS Source

This document provides a brief introduction of the Amazon SNS Source. It's also designed to guide you through the 
process of running an Amazon SNS Source Connector.

## Introduction

The Amazon SNS (Simple Notification Service) Source Connector **subscribes to the SNS topic** and SNS will **push** messages
published to the topic to the SNS connector. To enable SNS subscription, you should set your **endpoint, protocol and
the Amazon Resource Name (ARN) ** value of the SNS topic. After messages are published to the topic, SNS will push them 
to SNS connector using **HTTP/HTTPS** protocol. And then SNS connector transform event messages into CloudEvents and 
deliver them to the target URL.

### SNS Event Structure

The Simple Notification message pushed by SNS is in the [HTTP/HTTPS message format][sns http/https format].  

Here is an example of a Simple Notification message in the HTTP/HTTPS message format:

```http request
 POST / HTTP/1.1
x-amz-sns-message-type: Notification
x-amz-sns-message-id: 22b80b92-fdea-4c2c-8f9d-bdfb0c7bf324
x-amz-sns-topic-arn: arn:aws:sns:us-west-2:123456789012:MyTopic
x-amz-sns-subscription-arn: arn:aws:sns:us-west-2:123456789012:MyTopic:c9135db0-26c4-47ec-8998-413945fb5a96
Content-Length: 773
Content-Type: text/plain; charset=UTF-8
Host: myhost.example.com
Connection: Keep-Alive
User-Agent: Amazon Simple Notification Service Agent

{
  "Type" : "Notification",
  "MessageId" : "22b80b92-fdea-4c2c-8f9d-bdfb0c7bf324",
  "TopicArn" : "arn:aws:sns:us-west-2:123456789012:MyTopic",
  "Subject" : "My First Message",
  "Message" : "Hello world!",
  "Timestamp" : "2012-05-02T00:54:06.655Z",
  "SignatureVersion" : "1",
  "Signature" : "EXAMPLEw6JRN...",
  "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-f3ecfb7224c7233fe7bb5f59f96de52f.pem",
  "UnsubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:123456789012:MyTopic:c9135db0-26c4-47ec-8998-413945fb5a96"
}
```

### Transformed CloudEvent Structure

The Amazon SNS Source Connector will transform the SNS message above into a CloudEvent with the following structure:

```json
{
  "id" : "22b80b92-fdea-4c2c-8f9d-bdfb0c7bf324",
  "source" : "arn:aws:sns:us-west-2:123456789012:MyTopic:c9135db0-26c4-47ec-8998-413945fb5a96",
  "specversion" : "V1",
  "type" : "com.amazonaws.sns.Notification",
  "datacontenttype" : "application/json",
  "subject" : "My First Message",
  "time" : "2022-08-18T06:00:04.638Z",
  "data" : {
    "Type" : "Notification",
    "MessageId" : "22b80b92-fdea-4c2c-8f9d-bdfb0c7bf324",
    "TopicArn" : "arn:aws:sns:us-west-2:123456789012:MyTopic",
    "Subject" : "My First Message",
    "Message" : "Hello world!",
    "Timestamp" : "2012-05-02T00:54:06.655Z",
    "SignatureVersion" : "1",
    "Signature" : "EXAMPLEw6JRN...",
    "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-f3ecfb7224c7233fe7bb5f59f96de52f.pem",
    "UnsubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:123456789012:MyTopic:c9135db0-26c4-47ec-8998-413945fb5a96"
  }
}
```

The process to convert AWS SNS message into CloudEvents conforms to the [CloudEvents SNS Adapter specification][sns-adapter]. 

## Features

**Automatic retries**: If the target endpoint of SNS connector is not available, the connector will run a [delivery retry policy][sns-retry]
configured in SNS subscription.

## Limitations

- **Limited to one SNS topic**: Each SNS Source subscribes to message from one SNS topic.

- **Number of retries**: If you do not configure retry policy and dead-letter queue for your SNS subscription, Amazon SNS 
will only attempt up to three retries with a delay between failed attempts set at **20** seconds. Then the message will be
dropped.

## IAM Policy for Amazon SNS Source

- sns:List:ListTopics
- sns:List:ListSubscriptions
- sns:Write:Publish
- sns:Write:CreateTopic
- sns:Write:Subscribe
- sns:Write:ConfirmSubscription
- sns:Write:Unsubscribe

## Quick Start

This quick start will guide you through the process of running an Amazon SNS Source connector.

### Prerequisites

You should prepare these prerequisites first for running SNS Source. 

- A container runtime (i.e., docker).
- An Amazon [SNS topic][sns-topic].
- A Properly settled [IAM] policy for your AWS user account.
- An AWS account configured with [Access Keys][access-keys].
- A configuration of subscription to SNS topic

### Get the docker images

You can get the SNS Source by using the following command.

```shell 
docker pull vancehub/source-aws-sns:latest
```

Before launching an Amazon SNS Source, we create a Display Connector to receive and **print CloudEvents** sent from the SNS Source.

You can use following command to get the Display sink image.

```shell 
docker pull vancehub/sink-display:latest
```

The following command run the Display container and expose its local 8081 port to the 8081 port of your host.

```shell
docker run -p 8081:8081 --rm vancehub/sink-display
```

### Create config file for SNS Source

You can specify your configs by either setting environments variables or **mounting a config.json to 
`/vance/config/config.json`** when running the connector.

Here is an example of a configuration file for the Amazon SNS Source.

```shell
$ vim config.json
{
  "topic_arn": "arn:aws:sns:us-west-2:123456789012:MyTopic",
  "endpoint": "https://x.xxx.xxx:8082",
  "protocol": "https",
  "v_target": "http://host.docker.internal:8081",
  "v_port": "8082"
}
```

It should be noted that `endpoint` refers to the host address and port where your connector run, and it must be accessible 
through the public network. Therefore, `localhost` can not be used as `endpoint`, unless you transform it into a public
network address. 

In order to send events to Display Connector, set the `v_target` value as `http://host.docker.internal:8081` in your `config.json` file.
The `host.docker.internal` indicates docker's host IP. You can also use the IP address of **container** where Display Connector runs. Try following 
command to get the IP address of container.

Use `docker ps` to get the Container ID of Display Connector.
```shell 
docker ps
```

Use `docker inspect` to get the container's IP Address.
```shell 
docker inspect [CONTAINER ID]
```

In conclusion, use `http://host.docker.internal:8081` or `http://[Container IP Address]:8081` as `v_target` in your config file.

| Configs  |  Description    																  |  Example    			  |  Required    |
|:--------:|  :----:         																  |  :----:     			  |  :----:      |
| v_target |  v_target is used to specify the target URL HTTP Source will send CloudEvents to  |  "http://host.docker.internal:8081"  |  YES  		 |
|  v_port  |  the port of http/http endpoints to receive SNS messages					  |  "8080"	                  |  YES         |
| endpoint |  the url of http/https endpoints				  |  "http://xxx.xxx.xxx:8082"	                  |  YES         |
| TopicArn |  the arn of the SNS topic					  |  "arn:aws:sns:us-west-2:843378899134:Testxxxx"	                  |  YES         |
| protocol |  the protocol used to subscribe SNS topic					  |  "http"	                  |  YES         |

### Create secret file for SNS Source

Users should set their sensitive data **Base64 encoded** in a secret file. And **mount that secret file to 
`/vance/secret/secret.json`** when running the connector.

Replace `MY_SECRET` with your sensitive data to get the Base64-based string.

```shell
$ echo -n MY_SECRET | base64
TVlfU0VDUkVU
```

Create a local secret file with the Base64-based string you just got from your secrets.

```shell
$ vim secret.json
{
  "awsAccessKeyID": "TVlfU0VDUkVU",
  "awsSecretAccessKey": "U2VjcmV0QWNjZXNzS2V5"
}
```
| Secrets            | Description                                                          | Example                       |Required|
|:-------------------|:---------------------------------------------------------------------|:------------------------------|:-------|
| awsAccessKeyID     | `awsAccessKeyID` is the Access key ID of your aws credential.        | "BASE64VALUEOFYOURACCESSKEY=" |**YES** |
| awsSecretAccessKey | `awsSecretAccessKey` is the Secret access key of youraws credential. | "BASE64VALUEOFYOURSECRETKEY=" |**YES** |

### Expose your local port to the public network

You can use [ngrok] to **expose** your local port to the **public network**. After you register, login and install ngrok, 
you can use the following command to get a address with specified port accessible to the public network.

```shell 
[user@localhost]$ ngrok http 8082
``` 

### Run the Amazon SNS Source with Docker

You can run SNS Source using docker by execute following command. The secret file and config file should be mounted to 
`/vance/secret/` and `/vance/config`.

```shell
docker run -v $(pwd)/secret.json:/vance/secret/secret.json -v $(pwd)/config.json:/vance/config/config.json -p 8082:8082 --rm vancehub/source-aws-sns
```

### Verify the Amazon SNS Source

You can verify if the Amazon SNS Source works properly by publishing a message to the SNS topic. To publish a message, 
you should log in to the [AWS Management Console][aws-console] at first.Then visit the Simple Notification Service.
Choose the SNS Topics, and then you can create topics or publish messages to topics.

Here is an example output of the Display Connector when I publish a "Hello, world!" message to the 
"arn:aws:sns:us-west-2:123456789012:MyTopic".

```shell 
[08:11:35:719] [INFO] - com.linkall.sink.display.DisplaySink.lambda$start$0(DisplaySink.java:21) - receive a new event, in total: 1
[08:11:35:770] [INFO] - com.linkall.sink.display.DisplaySink.lambda$start$0(DisplaySink.java:23) - {
  "id" : "31619fa7-4976-4906-b1e1-de2138566932",
  "source" : "arn:aws:sns:us-west-2:843378899134:TestTopic",
  "specversion" : "V1",
  "type" : "com.amazonaws.sns.SubscriptionConfirmation",
  "datacontenttype" : "application/json",
  "time" : "2022-09-28T08:11:12.042Z",
  "data" : {
    "Type" : "SubscriptionConfirmation",
    "MessageId" : "31619fa7-4976-4906-b1e1-de2138566932",
    "Token" : "2336412f37fb687f5d51e6e2425dacbba6354b493e39a58d8ed2df56e3d0d557a5fa34023a57f329eddd662e26c2f4f500587a981a95771f745b3c4ab09cbe4d88ddd6b8261fd1cd4ea7572f603fc5033ad7516700aabfd68e49ef0bae5c1a233a1d1ce3e264bda150ae9905d1046bfb",
    "TopicArn" : "arn:aws:sns:us-west-2:843378899134:TestTopic",
    "Message" : "You have chosen to subscribe to the topic arn:aws:sns:us-west-2:843378899134:TestTopic.\nTo confirm the subscription, visit the SubscribeURL included in this message.",
    "SubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=ConfirmSubscription&TopicArn=arn:aws:sns:us-west-2:843378899134:TestTopic&Token=2336412f37fb687f5d51e6e2425dacbba6354b493e39a58d8ed2df56e3d0d557a5fa34023a57f329eddd662e26c2f4f500587a981a95771f745b3c4ab09cbe4d88ddd6b8261fd1cd4ea7572f603fc5033ad7516700aabfd68e49ef0bae5c1a233a1d1ce3e264bda150ae9905d1046bfb",
    "Timestamp" : "2022-09-28T08:11:12.042Z",
    "SignatureVersion" : "1",
    "Signature" : "SR9TtHIOCC17phrjh+91SQibD/7U1+bAOTFdzKDEHFzDNwgRk+U41xgnk9IxUQfNYS5+X9P8Rwdq/tem1lo8/yhxiG03B1YnIkHyqd+TPyERNjQP/09Tid89MFizOPadm/cij571A8cvbeDujQux90bBYgrgihGclG7WqJYF+G1TuNxynzDV8WsKb4bWwAQnlTao1SGjJd5kOx/4dxNBFfKyM9DiDRPzJH6AdsiCtAg8vouIhjy/GR63+JZHptOvPZBzsX3F420yNH5PuR3BnW5RirF3hHz9V0glSRsiPprT9S8JM2Sugb6CvPJMu4Fj6kmjfvXuBbceBXzD53kw0A==",
    "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-56e67fcb41f6fec09b0196692625d385.pem"
  }
}

```

[sns http/https format]:https://docs.aws.amazon.com/sns/latest/dg/sns-message-and-json-formats.html
[sns-adapter]:https://github.com/cloudevents/spec/blob/main/cloudevents/adapters/aws-sns.md
[sns-retry]:https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html
[sns-topic]:https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html
[iam]: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html?icmpid=docs_iam_console
[access-keys]: https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys
[ngrok]:https://ngrok.com/
[aws-console]:https://us-west-2.console.aws.amazon.com/console