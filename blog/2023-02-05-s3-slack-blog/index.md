---
title: How to Receive S3 notifications in a Slack Channel
authors: Jay
tags: ['S3', 'Slack', 'events']
---

# How to Receive S3 notifications in a Slack Channel

One of the most common scenarios when working with Amazon S3 is to perform specific actions whenever changes (e.g., file uploaded or file deleted) happen in the S3 buckets.

This article shows how to automatically get notified in a Slack channel whenever changes happen in your S3 buckets.

<!--truncate-->

To achieve that, we need one program to receive S3 events and transform them into custom notifications and we also need another program to receive transformed notifications and send them to our Slack channel.

Luckily, Vanus has already provided many **[out-of-the-box Connectors](https://www.vanus.ai/connectors)** that enable you to integrate with popular services or applications without writing any codes.

**Here is how we can do this within 5 mins.**

1. Go to [Vanus Playground](https://play.linkall.com) (an online K8s playground).

2. Click “Continue with GitHub” to prepare an interactive K8s environment(Use your GitHub account to sign in).

![img.png](img/img.png)

3. Wait for preparing the K8s environment (usually less than 1 min). The terminal is ready when you see something like this:

![img_1.png](img/img_1.png)

4. Install Vanus.

```shell
kubectl apply -f https://download.linkall.com/all-in-one/v0.6.0.yml
```

5. Install vsctl (the command line tool).

```shell
curl -O https://download.linkall.com/vsctl/latest/linux-amd64/vsctl
chmod ug+x vsctl
mv vsctl /usr/local/bin
```

6. Set the endpoint for vsctl.

```shell
export VANUS_GATEWAY=192.168.49.2:30001
```

7. Create an Eventbus to store your events.

```shell
vsctl eventbus create --name s3-slack-scenario
```

8. Set the config file for the S3 Source.

```shell
mkdir -p s3-slack-scenario/s3-source;
mkdir -p s3-slack-scenario/slack-sink;
cd s3-slack-scenario/s3-source;

cat << EOF > config.yml
target: http://192.168.49.2:30002/gateway/s3-slack-scenario
aws:
  access_key_id: AKIAIOSFODNN7EXAMPLE
  secret_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
s3_bucket_arn: "arn:aws:s3:::<buckeName>"
s3_events: ["s3:ObjectCreated:*","s3:ObjectRemoved:*"]
region: "us-west-2"
EOF
```

**NOTE**: Remember to replace values of `access_key_id`, `secret_access_key`, `s3_bucket_arn` and `region` with yours.
You also need to ensure the IAM user behind the `access_key_id` and `secret_access_key` have [certain permissions](https://www.vanus.ai/connectors/source/source-aws-s3/#prerequisites) to allow S3 Source work properly.

9. Run the S3 Source.

```shell
nohup docker run --rm --network=host \
  -v ${PWD}:/vanus-connect/config \
  --name source-aws-s3 public.ecr.aws/vanus/connector/source-aws-s3 > s3.log &
```

10. Create a Slack app.

Create a new app on [Slack](https://api.slack.com/apps).

![img.png](img/img_2.png)

11. Select `from scratch` to create an app .

![img.png](img/img_3.png)

12. Pick a workspace to develop your app in.

![img_1.png](img/img_4.png)

13. Click on permissions in the central menu.

![img.png](img/img_5.png)

14. Click `Add an Oauth Scope` and add `chat:write` and `chat:write.public` to the scope.

![img_9.png](img/img_6.png)

15. Install this oauth token to your workspace:

![img_10.png](img/img_7.png)

16. Copy the Bot User OAuth for later usage.

![img_11.png](img/img_8.png)

17. Get the slack-sink yaml file and edit the configuration in it.

```shell
cd ../slack-sink;
curl -O https://scenario-utils.s3.us-west-2.amazonaws.com/slack-sink.yaml

vi slack-sink.yaml
```
**NOTE**: Remember to replace values of `default`, `app_name`, **`token`** and `default_channel` with yours.

The **`token`** value should be the Bot User OAuth in previous step.

**The default and app name MUST be the same.**

18. Run the Slack Sink.

```shell
kubectl apply -f slack-sink.yaml
```

19. Create a subscription

```shell
vsctl subscription create --name s3-slack-subscription \
  --eventbus s3-slack-scenario \
  --sink 'http://sink-slack:8080' \
  --filters '[
    {
      "exact": {
          "type":"com.amazonaws.s3.ObjectCreated:Put"
      }
    }
  ]' \
  --transformer '{
      "define": {
        "subject" : "$.subject",
        "bucket": "$.data.bucket.name"
      },
      "template": "{\"subject\": \"AWS S3 Notifications\",\"message\":\"Hello, a new file <subject> has been uploaded to your bucket <bucket>.\"}"
    }'
```

20. Upload a file to your bucket.

![img_11.png](img/img_9.png)

21. Finally, you can see a notification in your Slack channel.

![img_11.png](img/img_10.png)

Now, you’ve successfully received S3 notifications in your Slack channel. Actually, you can integrate with any external services with Vanus and its’ filter and transformer. Learn more about Vanus [here](https://github.com/vanus-labs/vanus).

**Vanus is an open-source, cloud-native, Serverless message queue for building EDA applications with Ease.**

Try it and have fun with Vanus, guys.