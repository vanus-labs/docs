---
title: AWS Billing
---

# AWS Billing Source
This document provides a brief introduction of the AWS Billing Source.
It's also designed to guide you through the
process of running an AWS Billing Source Connector.

## Introduction
The AWS Billing Source is a [Vance Connector][vc] which use [AWS Cost Explorer][awsbill]
api and pulls the billing data from the previous day by fix time.

## AWS billing CloudEvent structure
Here is an example output from the AWS billing source connector.
```json
{
  "specversion": "1.0",
  "id": "4395ffa3-f6de-443c-bf0e-bb9798d26a1d",
  "source": "cloud.aws.billing",
  "type": "aws.service.daily",
  "datacontenttype": "application/json",
  "time": "2022-06-14T07:05:55.777689Z",
  "data": {
    "vanceSource": "cloud.aws.billing",
    "vanceType": "aws.service.daily",
    "date": "2022-06-13",
    "service": "Amazon Elastic Compute Cloud - Compute",
    "amount": "12.294",
    "unit": "USD"
  }
}
```
## Quick Start
This quick start will guide you through the process of running an AWS billing Source connector.

### Prerequisites
You should prepare these prerequisites first for running AWS billing Source.

- A container runtime (i.e., docker).
- A Properly settled [IAM] policy for your AWS user account.
- An AWS account configured with [Access Keys][access-keys].

### Step 1: Create a Config.json file
Create a new file name config.json with the following command.
> vim config.json
or
> vi config.json

### Step 2: Insert the configurations.
Press `I` to modify the file and add the following configurations. Use the chart bellow to modify the configs.
 ```json
 {
  "v_target": "http://host.docker.internal:8081",
  "access_key_id": "AKIAIOSFODNN7EXAMPLE",
  "secret_access_Key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}
 ```
### Config Fields of the Source Connector

| name              | requirement | description                                                                     |
|-------------------|-------------|---------------------------------------------------------------------------------|
| v_target          | required    | target URL will send CloudEvents to                                             |
| access_key_id     | required    | the aws account [accessKeyID][accessKey]                                        |
| secret_access_Key | required    | the aws account [secretAccessKey][accessKey]                                    |
| endpoint          | optional    | the aws cost explorer api endpoint,default <https://ce.us-east-1.amazonaws.com> |
| pull_hour         | optional    | aws billing source pull billing data time(unit hour),default 2                  |

:::tip
Exit `vim` and `vi` press `ESC` and `shift` + `:` afterwards `wq` and `ENTER`.
:::

### Step 3: Create a Config.json file
Create a new file name secret.json with the following command.
> vim config.json
or
> vi config.json

### Step 4: Insert the secret configurations.
Press `I` to modify the file and add the following configurations. Use the chart bellow to modify the configs.
 ```json
 {
  "access_key_id": "AKIAIOSFODNN7EXAMPLE",
  "secret_access_Key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}
 ```

:::tip
Exit `vim` and `vi` press `ESC` and `shift` + `:` afterwards `wq` and `ENTER`.
:::

### Secret Config Fields of the Source Connector
| name              | requirement | default  | description                                  |
|-------------------|-------------|----------|----------------------------------------------|
| access_key_id     | required    |          | the aws account [accessKeyID][accessKey]     |
| secret_access_Key | required    |          | the aws account [secretAccessKey][accessKey] |


### Step 5: Run the docker image
Run The connector with the following command.
> docker run -v $(pwd)/config.json:/vance/config/config.json --rm vancehub/source-aws-billing

### (Optional) Verify the Source connector
**step 1**

Start display Sink with the following command:
> docker run -p 8081:8081 --rm vancehub/sink-display

### Result

 ```shell
 $ vim config.json
 [08:11:35:719] [INFO] - com.linkall.sink.display.DisplaySink.lambda$start$0(DisplaySink.java:21) - receive a new event, in total: 1
 [08:11:35:770] [INFO] - com.linkall.sink.display.DisplaySink.lambda$start$0(DisplaySink.java:23) - {
   "id": "4395ffa3-f6de-443c-bf0e-bb9798d26a1d",
   "source": "cloud.aws.billing",
   "specversion": "1.0",
   "type" : "aws.service.daily",
   "datacontenttype" : "application/json",
   "time" : "2022-09-28T08:11:12.042Z",
   "data": {
   "vanceSource": "cloud.aws.billing",
   "vanceType": "aws.service.daily",
   "date": "2022-06-13",
   "service": "Amazon Elastic Compute Cloud - Compute",
   "amount": "12.294",
   "unit": "USD"
  }
 }
 ```

[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md
[awsbill]: https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html
[accessKey]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html