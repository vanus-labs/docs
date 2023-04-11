# S3

This guide contains information to set up a S3 Source in Vanus Cloud.

## Introduction

Amazon S3 (Simple Storage Service) is a highly scalable and durable object storage service provided by Amazon Web Services (AWS). It is designed to store and retrieve any amount of data from anywhere on the internet, making it ideal for a wide range of use cases such as backup and restore, disaster recovery, data archiving, content delivery, and big data analytics.

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

### Create a new AWS user
Create a new user and set the proper IAM policy.
1. Log in to the AWS Management Console using your root account credentials.
2. Navigate to the IAM service by clicking on the Services menu and selecting IAM.
   ![](content/user-guides/connector-guides/source/s3/images/findIAM.png)
3. Click on the Users tab in the left navigation menu, and then click the Add user button.
   ![](content/user-guides/connector-guides/source/s3/images/AddUser.png)
4. Write the name for your user and click next.
5. select attach policy directly, and Create policy.
   ![](content/user-guides/connector-guides/source/s3/images/permissionoption.png)
6. select the Service 's3' and give it the following policy
   - "s3:PutObject",
   - "s3:GetObject",
   - "s3:GetObjectVersion",
   - "s3:DeleteObject",
   - "s3:DeleteObjectVersion"
7. press next and review.
8. Name your policy and click create policy.
9. search for your custom policy and add it to your account, and press next.
10. Review and press create user.
11. Now click on the user you just created.
12. Go to 'Access Key' Click Create access key.
    ![](content/user-guides/connector-guides/source/s3/images/createAccesskey.png)
13. Select Command line interface CLI, and press next.
14. Save your access key and secret key safely.
    ![](content/user-guides/connector-guides/source/s3/images/img.png)
### Config your connection
To obtain S3 Bucket events using the S3 source connector in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **S3**.
4. Provide the following credentials Access Key ID, Secret Access Key, Bucket ARN, and SQS ARN.
    - To get a new access and secret key, go to the IAM console, select your user name under Users, open the Security credentials tab, click Create access key, and then choose Show to view your new credentials.
     ![](content/user-guides/connector-guides/source/s3/images/s3.png)
5. Select the kind of event you want to receive from the list
6. Click next and finish the configurations.

## Supported Events

S3:ObjectCreated:

- S3:ObjectCreated:Put
- S3:ObjectCreated:Post
- S3:ObjectCreated:Copy
- S3:ObjectCreated:CompleteMultipartUpload

S3:ObjectRemoved:

- S3:ObjectRemoved:Delete
- S3:ObjectRemoved:DeleteMarkerCreated

S3:ObjectRestore:

- S3:ObjectRestore:Post
- S3:ObjectRestore:Complete
- S3:ObjectRestore:Delete
