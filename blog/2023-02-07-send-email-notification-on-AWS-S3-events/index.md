---
title: Send email notification on AWS S3 events
authors: Jay
tags: ['S3', 'Email', 'events']
---

# Send email notification on AWS S3 events

One of the most common scenarios when working with Amazon S3 is to perform specific actions whenever changes (e.g., file uploaded or file deleted) happen in the S3 buckets.

This article introduces an **open-source solution** to set email notifications on any S3 events with an **open-source event streaming platform** [Vanus](https://github.com/vanus-labs/vanus).

<!--truncate-->

## Table of Contents
- [About AWS S3](#about-aws-s3)
    - [What is AWS S3](#what-is-aws-s3)
    - [What is AWS events](#what-is-aws-events)
    - [Why we need AWS events](#why-we-need-aws-events)
- [Pre-requisite](#pre-requisite)
- [How to Send email notification on AWS S3 events](#how-to-send-email-notification-on-aws-s3-events)
    - [Step 1: Deploy Vanus on the Playground](#step-1-deploy-vanus-on-the-playground)
    - [Step 2: Deploy the S3 Source connector](#step-2-deploy-the-s3-source-connector)
    - [Step 3: Deploy the Email Sink connector](#step-3-deploy-the-email-sink-connector)
- [Check out the result](#check-out-the-result)  
- [Conclusion](#conclusion)

## About AWS S3

### What is AWS S3

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.

With Amazon S3, you can store your data in a highly durable manner, as it automatically stores multiple copies of data across multiple devices in multiple facilities, as well as automatically detecting and repairing any lost redundancy. Additionally, it integrates with other AWS services, making it easy to use as the foundation of your application's data architecture.

### What is AWS events

Amazon S3 events refer to changes or updates to objects stored in an Amazon S3 bucket. S3 events can trigger a variety of actions, such as sending a notification, starting an AWS Lambda function, or triggering an Amazon SNS message.

Currently, Amazon S3 can publish notifications for the following events:

- New object created events
- Object removal events
- Restore object events
- Reduced Redundancy Storage (RRS) object lost events
- Replication events
- S3 Lifecycle expiration events
- S3 Lifecycle transition events
- S3 Intelligent-Tiering automatic archival events
- Object tagging events
- Object ACL PUT events

### Why we need AWS events

With S3 events, you can create event-driven workflows, where changes to objects in your S3 bucket trigger specific actions, such as automatically processing images, sending alerts, or triggering workflows in other AWS services.

## Pre-requisite

- [A sandbox environment](https://play.linkall.com) where you can try everything for free.
- [An Amazon Web Service account](https://www.vanus.ai/connectors/source/source-aws-s3/#prerequisites) with permissions for specific services.
- [An open-source event streaming platform - Vanus](https://github.com/vanus-labs/vanus)
- An Email account

## How to Send email notification on AWS S3 events

Here are the steps you can follow to send email notifications on any AWS S3 events.

- [Step 1: Deploy Vanus on the Playground](#step-1-deploy-vanus-on-the-playground)
- [Step 2: Deploy the S3 Source connector](#step-2-deploy-the-s3-source-connector)
- [Step 3: Deploy the Email Sink connector](#step-3-deploy-the-email-sink-connector)

### Step 1: Deploy Vanus on the Playground

- Go to [Vanus Playground](https://play.linkall.com), and click “Continue with GitHub”.
  
![img.png](img/img.png)

- Wait for preparing the K8s environment (usually less than 1 min). The terminal is ready when you see something like:

![img_1.png](img/img_1.png)

- Install Vanus by typing following command:

```shell
kubectl apply -f https://dl.vanus.ai/all-in-one/v0.6.0.yml
```

- Verify if Vanus is deployed successfully:

```shell
 $ watch -n2 kubectl get po -n vanus
vanus-controller-0               1/1     Running   0          96s
vanus-controller-1               1/1     Running   0          72s
vanus-controller-2               1/1     Running   0          69s
vanus-gateway-8677fc868f-rmjt9   1/1     Running   0          97s
vanus-store-0                    1/1     Running   0          96s
vanus-store-1                    1/1     Running   0          68s
vanus-store-2                    1/1     Running   0          68s
vanus-timer-5cd59c5bf-hmprp      1/1     Running   0          97s
vanus-timer-5cd59c5bf-pqkd5      1/1     Running   0          97s
vanus-trigger-7685d6cc69-8jgsl   1/1     Running   0          97s
```

- Install vsctl (the command line tool).

```shell
curl -O https://dl.vanus.ai/vsctl/latest/linux-amd64/vsctl
chmod ug+x vsctl
mv vsctl /usr/local/bin
```

- Set the endpoint for vsctl.

```shell
export VANUS_GATEWAY=192.168.49.2:30001
```

- Create an Eventbus to store your events.

```shell
$ vsctl eventbus create --name s3-email-scenario
+----------------+------------------+
|     RESULT     |      EVENTBUS    |
+----------------+------------------+
| Create Success | s3-email-scenario|
+----------------+------------------+
```

### Step 2: Deploy the S3 Source connector

- Set the config file for the S3 Source.

```shell
mkdir s3-email-scenario;
cd s3-email-scenario;

cat << EOF > config.yml
target: http://192.168.49.2:30002/gateway/s3-email-scenario
aws:
  access_key_id: AKIAIOSFODNN7EXAMPLE
  secret_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
s3_bucket_arn: "arn:aws:s3:::<buckeName>"
s3_events: ["s3:ObjectCreated:*","s3:ObjectRemoved:*"]
region: "us-west-2"
EOF
```

**NOTE**: Remember to replace values of `access_key_id`, `secret_access_key`, `s3_bucket_arn` and `region` with yours.
Check out configuration description [here](https://www.vanus.ai/connectors/source/source-aws-s3/#create-the-config-file).

You also need to ensure the IAM user behind the `access_key_id` and `secret_access_key` have [certain permissions](https://vanus.ai/connectors/source/source-aws-s3/#prerequisites) to allow S3 Source work properly.

Currently, the source will only receive `ObjectCreated` events and `ObjectRemoved` events from S3. You can change the configuration to receive events you need.

- Run the S3 Source.

```shell
nohup docker run --rm --network=host \
  -v ${PWD}:/vanus-connect/config \
  --name source-aws-s3 public.ecr.aws/vanus/connector/source-aws-s3 > s3.log &
```

### Step 3: Deploy the Email Sink connector

You can choose any mail provider to send an email by the Email Sink. In this tutorial, I will
go with **Gmail**.

- Enable 2-Step Verification in your Google Account.

Go to the [Google Account](https://myaccount.google.com/). At the left, click **Security** and enable 2-Step Verification
for your account. You may have to sign in again.

![img.png](img/img_2.png)

- Create an app password.

Click App passwords and sign in. Under “App passwords,” click Select app and then Mail.
Click Select device and then Other. Enter the name of your domain and click Generate.
From the app password box, copy the 16 character password generated. 

**NOTE**: Please save the password carefully,
it will be used as in the sink configuration. And it won't show again once you close the window.

![img.png](img/img_3.png)

- Get the email-sink yaml file and edit the configuration in it.

```shell
curl -O https://scenario-utils.s3.us-west-2.amazonaws.com/sink-email.yaml

vi sink-email.yaml
```
**NOTE**: Remember to replace values of `default`, `account`, and `password` with yours. The password should be a 16 character password generated
in previous step.

![img.png](img/img_4.png)

- Run the Email Sink.

```shell
kubectl apply -f sink-email.yaml
```

## Check out the result

Before checking out the result, let's recap what we've done in previous steps.

Step 1: We created a basic store component of Vanus - `EventBus` called `s3-email-scenario`.

Step 2: We deployed a S3 Source Connector to receive S3 events.

Step 3: We deployed an Email Sink Connector waiting to send emails to some contacts.

You may notice that we didn't specify the contact email address in Email Sink, so how will the Sink Connector know the recipient's email address?
The Email Sink also doesn't know what content it should send.

The missing **key-point** here is a `subscription`. It can be used to grab data from specific `EventBus` and send data to the sink targets (in our case the sink is the Email Sink Connector).

Also, in a `subscription`, you can create `filters` to select data which meet your requirements, and create `transformers` to
convert original CloudEvents into any format you need, before before sending them to the target.

Now let's create a subscription for this tutorial.

- Create a subscription

```shell
vsctl subscription create --name s3-email-subscription \
  --eventbus s3-email-scenario \
  --sink 'http://sink-email:8080' \
  --transformer '{
      "define": {
        "subject" : "$.subject",
        "bucket": "$.data.bucket.name"
      },
      "pipeline":[
        {"command":["create","$.xvemailrecipients","contact@linkall.com"]},
        {"command":["create","$.xvemailsubject","Greetings from Vanus-S3-Email-Scenario"]}
      ],
      "template": "Hello, a new file <subject> has been uploaded to your bucket <bucket>."
    }'
```

We created a `subscription` called `s3-email-subscription`, and specified that it will send data to our Email Sink connector.

We also created a transformer which did two things:

1. Added two [CloudEvents attributes](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#context-attributes) `xvemailrecipients` to specify the email recipient and `xvemailsubject` to specify the email subject.
2. Assigned values from the original event to two defined variables `subject` and `bucket`.And use them to generate the content which will be sent to our email recipient.

Now, we can upload a file to see if an email notification will be sent correctly.

- Upload a file to your bucket.

![img_11.png](img/img_9.png)

- Finally, the recipient `contact@linkall.com` will receive an email.

![img_11.png](img/img_5.png)

You’ve successfully sent email notification on AWS S3 events.

## Conclusion

This blog talks about an open-source solution to set email notifications on any S3 events. It introduces an open-source, cloud-native 
event streaming platform - [**Vanus**](https://github.com/linkall-labs/vanus), and two of Vanus connectors (S3 Source and Email Sink). It also covers the usage of advanced features like
`filters` and `transformers` to process streaming events.

Indeed, besides S3 and email, Vanus has also provided other **[out-of-the-box Connectors](https://www.vanus.ai/connectors)** that enable you to integrate with popular services or applications without writing any codes.

[Try it](https://play.linkall.com) and have fun with Vanus, guys.