--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- An [**Amazon Web Services**](https://aws.amazon.com) account.
- A [**Vanus Cloud Account**](https://cloud.vanus.ai).

---

**Perform the following steps to configure your Amazon S3 Source.**

### Step 1: Create a new AWS user

1. Log in to the AWS [**Management Console**](https://aws.amazon.com) using your root account credentials.

2. Navigate to the [**IAM**](https://console.aws.amazon.com/iam/) service by searching for **IAM**① and click the **IAM**② service.

![aws-s3-source-1](images/aws-s3-source-1.webp)

3. Click on the **Users**③ tab in the left navigation menu, and then click the **Create user**④ button.

![aws-s3-source-2](images/aws-s3-source-2.webp)

4. Write your **User name**⑤ and click **Next**⑥.

![aws-s3-source-3](images/aws-s3-source-3.webp)

5. Select **Attach policies directly**⑦, and click on **Create policy**⑧.

![aws-s3-source-4](images/aws-s3-source-4.webp)

6. Click on **Choose a service**⑨ to open the dropdown menu.

![aws-s3-source-5](images/aws-s3-source-5.webp)

7. **Search**⑩ for s3 and **click on it**⑪.

![aws-s3-source-6](images/aws-s3-source-6.webp)

8. Search for the following policy: **PutBucketNotification**⑫, and **tick the box**⑬ to select it.

![aws-s3-source-7](images/aws-s3-source-7.webp)

9. Click **Add more permissions**⑭.

![aws-s3-source-8](images/aws-s3-source-8.webp)

10. Now **search for SQS**⑮ and **click on it**⑯.

![aws-s3-source-9](images/aws-s3-source-9.webp)

11. **Search**⑰ for the following policies.

![aws-s3-source-10](images/aws-s3-source-10.webp)

- ListQueues
- GetQueueUrl
- ReceiveMessage
- GetQueueAttributes
- CreateQueue
- SetQueueAttributes
- DeleteMessage

12. Press **Next**⑱ and proceed to the next page.

![aws-s3-source-11](images/aws-s3-source-11.webp)

13. **Name**⑲ your policy.

![aws-s3-source-12](images/aws-s3-source-12.webp)

14. Click **Create policy**⑳.

![aws-s3-source-13](images/aws-s3-source-13.webp)

15. Return back to your **previous `TAB`㉑**.

![aws-s3-source-14](images/aws-s3-source-14.webp)

16. **Refresh**㉒ the policy list, **search**㉓ for your custom policy, **check the box**㉔ next to it to add it to your account, and then click on **Next**㉕.

![aws-s3-source-15](images/aws-s3-source-15.webp)

17. Review and press **Create user**㉖.

![aws-s3-source-16](images/aws-s3-source-16.webp)

---

### Step 2: Create an Access key and Secret access Key

1. Now click on the **user**① you just created.

![aws-s3-source-17](images/aws-s3-source-17.webp)

2. Under **Security credentials**② scroll down the page to `Access Keys`, and Click **Create access key**③.

![aws-s3-source-18](images/aws-s3-source-18.webp)

3. Select **Command Line Interface (CLI)④**, tick the **Confirmation box**⑤ and click **Next**⑥.

![aws-s3-source-19](images/aws-s3-source-19.webp)

4. Click **Create access key**⑦.

![aws-s3-source-20](images/aws-s3-source-20.webp)

5. Download your **`Access key`** and **`Secret access key`** by clicking the **Download .csv file**⑧ button, and then click **Done**⑨.

![aws-s3-source-21](images/aws-s3-source-21.webp)

---

### Step 3: Amazon S3 Connection Settings

1. Write a **Name**① for your connection in Vanus Connect.

![aws-s3-source-22](images/aws-s3-source-22.webp)

2. Enter your **`Access Key`②** and **`Secret access Key`③** in Vanus Connect.

![aws-s3-source-23](images/aws-s3-source-23.webp)

3. Navigate to the [**Amazon S3 service**](https://s3.console.aws.amazon.com/s3/buckets).

:::note
At this point, you can either Create a new bucket or select an existing bucket.
:::

4. Create a new bucket by clicking the **Create bucket**④ button.

![aws-s3-source-24](images/aws-s3-source-24.webp)

5. Specify a **Bucket name**⑤ and select your desired **AWS Region**⑥.

![aws-s3-source-25](images/aws-s3-source-25.webp)

6. Click on **Create bucket**⑦ to finish creating your bucket.

![aws-s3-source-26](images/aws-s3-source-26.webp)

7. Once selected or created, click on the **bucket name**⑧.

![aws-s3-source-27](images/aws-s3-source-27.webp)

8. Go to your bucket **Properties**⑨ and copy the **ARN**⑩.

![aws-s3-source-28](images/aws-s3-source-28.webp)

9. Paste your **Bucket ARN**⑪ into vanus connect, Specify the kind of **Events**⑫ you want to receive from the list.

![aws-s3-source-29](images/aws-s3-source-29.webp)

:::note
Under **SQS config**⑬, you can choose to create a new SQS by selecting region, or if you already have an SQS, provide the ARN.
:::

10. Set your desired **SQS Region**⑭ and click **Next**⑮ to continue the configuration.

![aws-s3-source-30](images/aws-s3-source-30.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
