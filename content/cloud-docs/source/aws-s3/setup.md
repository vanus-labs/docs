# Pr#
# Prerequisites

Before obtaining S3 events, you must have:
- An AWS Account

---

**Perform the following steps to configure your Amazon S3 Source:**

# Step 1: Create a new AWS user

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.
2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by searching for IAM and click the IAM service.
   ![](images/1.png)
3. Click on the **Users tab** in the left navigation menu, and then click the **Add user** button.
   ![](images/2.png)
4. Write the name for your user and click **next**.
   ![img.png](images/3.png)
5. Select **Attach policy directly**, and **Create policy**.
   ![](images/4.png)
6. Search for s3 and select it.
![](images/5.png)   
7. Next search for the following policy. 
   - PutBucketNotification
   ![](images/6.png)
8. Click **Add more permissions**.
![](images/7.png)
9. Now search for SQS.
![](images/8.png)
10. Next search for the following policies.
![](images/9.png)
    - ListQueues
    - GetQueueUrl
    - ReceiveMessage
    - GetQueueAttributes
    - CreateQueue
    - SetQueueAttributes
    - DeleteMessage
11. Press **Next** and proceed to the next page.

12. Name your policy and click **Create policy**. 
   ![img_1.png](images/10.png)
13. Return back to your previous `TAB`.
    ![img.png](images/11.png)
14. Search for your custom policy and add it to your account, and press **Next**.
    ![img.png](images/12.png)
15. Review and press **Create user**.
    ![img.png](images/13.png)

---

# Step 2: Create an Create Access Key
1. Now click on the user you just created.
   ![img.png](images/14.png)
2. Under **Security and credential** scroll down the page to `Access Key`, and Click **Create access key**.
   ![](images/15.png)
3. Select Command line interface CLI, and press **Next**.
   ![img.png](images/16.png)
4. Click **Create access key**.
   ![img.png](images/17.png)
5. Save your `Access key` and `Secret key` safely.
   ![](images/18.png)

---

## Step 3: Config your connection

To obtain S3 Bucket events using the S3 source connector in Vanus Cloud, follow these steps:


1. Write a connection name without any spaces.
   ![img.png](images/19.png)
2. Enter your `Access Key` and `Secret Key` in Vanus Cloud.
   ![img.png](images/20.png)
3. Now let go back to AWS under the [Amazon S3 service](https://s3.console.aws.amazon.com/s3/buckets).
   ![img_1.png](images/21.png)
4. At this point you can either **Create a new bucket** or **select a existent bucket**.
![](images/22.png)
5. Once selected or created go to your bucket property and copy and paste the **ARN** to Vanus Cloud.
   ![img_2.png](images/23.png)
6. Specify the kind of event you want to receive from the list
   ![img_3.png](images/24.png)
7. Under SQS config you can choose to create a new SQS by selecting Region or if you already have a SQS provide the ARN.
   ![img_4.png](images/25.png)
8. Click **Next** and continue the configuration.

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
