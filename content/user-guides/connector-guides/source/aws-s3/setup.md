# Amazon S3

This guide contains information to set up a S3 Source in Vanus Cloud.

## Introduction

S3 is Amazon's cloud storage service that offers scalable and durable storage for various data types. It provides easy management and retrieval of data from anywhere with high availability and low latency.

Vanus Cloud provides the Amazon S3 Source connector, which retrieves S3 events from a designated bucket and converts them into CloudEvents. With this connector, users can also set up an SQS queue to receive S3 event notifications. If a queue isn't specified, the connector will create one automatically.

## Prerequisites

Before obtaining S3 events, you must have:
- A [Vanus Cloud account](https://cloud.vanus.ai)


## Getting Started

### Step 1: Create a new AWS user

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.
2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by searching for IAM and click the IAM service.
   ![](images/findIAM.png)
3. Click on the **Users tab** in the left navigation menu, and then click the **Add user** button.
   ![](images/AddUser.png)
4. Write the name for your user and click **next**.
   ![img.png](images/setname.png)
5. Select **Attach policy directly**, and **Create policy**.
   ![](images/permissionoption.png)
6. Search for s3 and select it.
![](images/img_5.png)   
7. Next search for the following policy. 
   - PutBucketNotification
   ![](images/img_6.png)
8. Click **Add additional permissions**.
![](images/img_8.png)
9. Now search for SQS.
![](images/img_7.png)
10. Next search for the following policies.
![](images/img_9.png)
    - ListQueues
    - GetQueueUrl
    - ReceiveMessage
    - GetQueueAttributes
    - CreateQueue
    - SetQueueAttributes
    - DeleteMessage
11. Press **Next** and proceed to the next page.
   ![img_1.png](images/tag.png)
12. Name your policy and click **Create policy**.
13. Return back to your previous `TAB`.
    ![img.png](images/tab.png)
14. Search for your custom policy and add it to your account, and press **Next**.
    ![img.png](images/policy.png)
15. Review and press **Create user**.
    ![img.png](images/createuser.png)


### Step 2: Create an Create Access Key
1. Now click on the user you just created.
   ![img.png](images/user.png)
2. Under **Security and credential** scroll down the page to `Access Key`, and Click **Create access key**.
   ![](images/createAccesskey.png)
3. Select Command line interface CLI, and press **Next**.
   ![img.png](images/CLI.png)
4. Click **Create sccess key**.
   ![img.png](images/createacess.png)
5. Save your `Access key` and `Secret key` safely.
   ![](images/img.png)

### Step 3: Config your connection

To obtain S3 Bucket events using the S3 source connector in Vanus Cloud, follow these steps:


1. Write a connection name without any spaces.
   ![img.png](images/name.png)
2. Enter your `Access Key` and `Secret Key` in Vanus Cloud.
   ![img.png](images/s33.png)
3. Now let go back to AWS under the [Amazon S3 service](https://s3.console.aws.amazon.com/s3/buckets).
   ![img_1.png](images/img_1.png)
4. At this point you can either **Create a new bucket** or **select a existent bucket**.
![](images/createbucket.png)
5. Once selected or created go to your bucket property and copy and paste the **ARN** to Vanus Cloud.
   ![img_2.png](images/img_2.png)
6. Specify the kind of event you want to receive from the list
   ![img_3.png](images/img_3.png)
7. Under SQS config you can choose to create a new SQS by selecting Region or if you already have a SQS provide the ARN.
   ![img_4.png](images/sqs.png)
8. Click **Next** to continue.


Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
