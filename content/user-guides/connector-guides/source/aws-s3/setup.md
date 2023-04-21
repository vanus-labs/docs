# Amazon S3

This guide contains information to set up a S3 Source in Vanus Cloud.

## Introduction

S3 is Amazon's cloud storage service that offers scalable and durable storage for various data types. It provides easy management and retrieval of data from anywhere with high availability and low latency.

Vanus Cloud provides the Amazon S3 Source connector, which retrieves S3 events from a designated bucket and converts them into CloudEvents. With this connector, users can also set up an SQS queue to receive S3 event notifications. If a queue isn't specified, the connector will create one automatically.

## Prerequisites

Before obtaining S3 events, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)
- Have an AWS S3 bucket.
- AWS IAM Access Key.
- AWS permissions for the IAM user:
  - s3:PutBucketNotification
  - sqs:ListQueues
  - sqs:GetQueueUrl
  - sqs:ReceiveMessage
  - sqs:GetQueueAttributes
  - sqs:CreateQueue
  - sqs:SetQueueAttributes
  - sqs:DeleteMessage

## Getting Started

### Step 1: Create a new AWS user

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.
2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by clicking on the Services menu and selecting IAM.
   ![](images/findIAM.png)
3. Click on the **Users tab** in the left navigation menu, and then click the **Add user** button.
   ![](images/AddUser.png)
4. Write the name for your user and click **next**.
5. Select **attach policy directly**, and **Create policy**.
   ![](images/permissionoption.png)
6. Search and select the Service `s3`.
![img.png](images/s3search.png)
7. Search for the following policy.
   - "PutObject",
   - "GetObject",
   - "GetObjectVersion",
   - "DeleteObject",
   - "DeleteObjectVersion"
   ![img.png](images/search.png)
8. Press **next** and proceed to the next page.
![](images/user.png)
9. name your policy and click **create policy**.
![](images/setname.png)
10. Return back to your previous `TAB`.
![](images/tab.png)
10. Search for your custom policy and add it to your account, and press **next**.
   ![img.png](images/policy.png)
11. Review and press **create user**.

### Step 2: Create an Create Access Key
1. Now click on the user you just created.
   ![img.png](images/user.png)
2. Under **Security and credential** scroll down the page to `Access Key`, and Click **Create access key**.
   ![](images/createAccesskey.png)
3. Select Command line interface CLI, and press **next**.
   ![img.png](images/CLI.png)
4. Save your access key and secret key safely.
   ![](images/img.png)

### Step 3: Config your connection

To obtain S3 Bucket events using the S3 source connector in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Amazon S3**.
4. Enter your Access Key and Secret Key in Vanus Cloud.
   ![img.png](images/s33.png)
5. Now let go back to Amazon Web Services under the [Amazon S3 service](https://s3.console.aws.amazon.com/s3/buckets).
   ![img_1.png](images/img_1.png)
6. At this point you can either create a new bucket or select a existent bucket.
![](images/createbucket.png)
7. Once selected or created go to your bucket property and copy and paste the ARN to Vanus Cloud.
   ![img_2.png](images/img_2.png)
8. Specify the kind of event you want to receive from the list
   ![img_3.png](images/img_3.png)
9. Under SQS config you can choose to create a new SQS by selecting Region or if you already have a SQS provide the ARN.
10. Click next to continue.
    ![img_4.png](images/img_4.png)

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
