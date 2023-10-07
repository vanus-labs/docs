# S3

This guide contains the required information to set up S3 Sink in Vanus Connect.

## Introduction

Amazon S3 (Simple Storage Service) is a highly scalable and durable object storage service provided by Amazon Web Services (AWS). It is designed to store and retrieve any amount of data from anywhere on the internet, making it ideal for a wide range of use cases such as backup and restore, disaster recovery, data archiving, content delivery, and big data analytics.

With Amazon S3 Sink in Vanus Connect, you can easily forward data or events to your S3 bucket automatically. The S3 Sink connector lets you save the events you need to any bucket of your choosing.


## Prerequisites

Before forwarding events to an S3 bucket, you must have:

- A [**Vanus Cloud account**](https://cloud.vanus.ai).
- An [**Amazon Web Services**](https://aws.amazon.com) account.

## Getting Started

### Step 1: Create an AWS User

1. Log in to the AWS [**Management Console**](https://aws.amazon.com) using your root account credentials.

2. Navigate to the [**IAM**](https://console.aws.amazon.com/iam/) service by searching for **IAM**① and clicking the **IAM**② service.

![aws-s3-sink-1](images/aws-s3-sink-1.webp)

3. Click on the **Users tab**③ in the left navigation menu, and then click the **Create user**④ button.

![aws-s3-sink-2](images/aws-s3-sink-2.webp)

4. Write your **User name**⑤ and click **Next**⑥.

![aws-s3-sink-3](images/aws-s3-sink-3.webp)

5. Select **Attach policies directly**⑦, and click on **Create policy**⑧.

![aws-s3-sink-4](images/aws-s3-sink-4.webp)

6. **Search for s3**⑨ and **select s3**⑩.

![aws-s3-sink-5](images/aws-s3-sink-5.webp)

7. **Search**⑪ and select the required Actions.

![aws-s3-sink-6](images/aws-s3-sink-6.webp)

- **`PutObject`⑫**
- **`GetObject`**
- **`GetObjectVersion`**
- **`DeleteObject`**
- **`DeleteObjectVersion`**

![aws-s3-sink-7](images/aws-s3-sink-7.webp)

8. Select **Any**⑬ and click **Next**⑭ to proceed to the next page.

![aws-s3-sink-8](images/aws-s3-sink-8.webp)

9. Specify a **Policy name**⑮.

![aws-s3-sink-9](images/aws-s3-sink-9.webp)

10. Click **Create policy**⑯.

![aws-s3-sink-10](images/aws-s3-sink-10.webp)

11. Return to your previous **`TAB`**.

12. **Refresh**⑰ the policy list, **search**⑱ for your custom policy, **select your created policy**⑲, and click **Next**⑳.

![aws-s3-sink-11](images/aws-s3-sink-11.webp)

13. Review and click **Create user**㉑.

![aws-s3-sink-12](images/aws-s3-sink-12.webp)

---

### Step 2: Get your Access key and Secret access key

1. Now click on the **User**① you just created.

![aws-s3-sink-13](images/aws-s3-sink-13.webp)

2. Under **Security credentials**②, scroll down the page to **`Access Keys`**, and Click **Create access key**③.

![aws-s3-sink-14](images/aws-s3-sink-14.webp)

3. Select **Command line interface (CLI)④**, tick the **confirmation box**⑤ and click **Next**⑥.

![aws-s3-sink-15](images/aws-s3-sink-15.webp)

4. Click **Create access key**⑦.

![aws-s3-sink-16](images/aws-s3-sink-16.webp)

5. Download your **`Access key`** and **`Secret access key`** by clicking the **Download .csv file**⑧ button, and then click **Done**⑨.

![aws-s3-sink-17](images/aws-s3-sink-17.webp)

---

### Step 3: Amazon S3 Connection Settings

**To set up S3 Sink in Vanus Connect:**

1. Enter your **Access Key**① and **Secret access Key**② in Vanus Connect from the previous steps.

![aws-s3-sink-18](images/aws-s3-sink-18.webp)

2. Now let's go back to Amazon Web Services under the [**Amazon S3 service**](https://s3.console.aws.amazon.com).

3. At this point, you can either **create a new bucket** or **select an existing** bucket.

4. Create a new bucket by clicking the **Create bucket**③ button.

![aws-s3-sink-19](images/aws-s3-sink-19.webp)

5. Specify a **Bucket name**④ and select your desired **AWS Region**⑤.

![aws-s3-sink-20](images/aws-s3-sink-20.webp)

6. Click on **Create bucket**⑥ to finish creating your bucket.

![aws-s3-sink-21](images/aws-s3-sink-21.webp)

7. After selecting or creating a bucket, remember to take note of your **bucket name**⑦ and the **AWS Region**⑧.

![aws-s3-sink-22](images/aws-s3-sink-22.webp)

8. In Vanus Connect, choose your **Region**⑨ and enter your **Bucket**⑩ name, select the upload interval time (**HOURLY**⑪ or **DAILY**⑫), and then click **Next**⑬ to proceed.

![aws-s3-sink-23](images/aws-s3-sink-23.webp)

---

## Required Data Format

The event data must be in JSON format with the following way:

```json
{
  "data": {
    "myData": "simulation event data"
  }
}
```
