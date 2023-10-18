# Amazon Billing

This guide contains information to set up a Amazon Billing Source in Vanus Connect.

## Introduction

AWS Billing is an AWS service for monitoring and managing your cloud usage and costs. It provides comprehensive usage and expense data to help you optimize resources and control spending.

Amazon Billing Source is a connector provided by Vanus that retrieves daily or hourly spending information from Amazon Cloud Services and converts it into CloudEvents. To use cloud billing, you need to provide a user access key and secret key, which are required to authenticate and authorize access to your AWS account. By providing these keys, the Amazon Billing Source connector can access your billing information and retrieve the spending data from your AWS account.

## Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai).
- AWS IAM Access Key.
- AWS permissions ce:GetCostAndUsage for the IAM user.

## Getting Started

### Step 1: Create a new AWS user

1. Log in to the AWS [**Management Console**](https://aws.amazon.com) using your root account credentials.

2. Navigate to the [**IAM**](https://console.aws.amazon.com/iam/) service by searching for **IAM**① and click the **IAM**② service.

![aws-billing-source-1](images/aws-billing-source-1.webp)

3. Click on the **Users**③ tab in the left navigation menu, and then click the **Create user**④ button.

![aws-billing-source-2](images/aws-billing-source-2.webp)

4. Write your **User name**⑤ and click **Next**⑥.

![aws-billing-source-3](images/aws-billing-source-3.webp)

5. Select **Attach policies directly**⑦, and click on **Create policy**⑧.

![aws-billing-source-4](images/aws-billing-source-4.webp)

6. Click on **Choose a service**⑨ to open the dropdown menu.

![aws-billing-source-5](images/aws-billing-source-5.webp)

7. Select **Cost Explorer Service**⑩.

![aws-billing-source-6](images/aws-billing-source-6.webp)

8. Search for the following policy: **GetCostAndUsage**⑪, **tick the box**⑫ to select it, and then press **Next**⑬ to proceed to the next page.

![aws-billing-source-7](images/aws-billing-source-7.webp)

9. **Name**⑭ your policy.

![aws-billing-source-8](images/aws-billing-source-8.webp)

10. Click **Create policy**⑮.

![aws-billing-source-9](images/aws-billing-source-9.webp)

11. Return back to your **previous `TAB`⑯**.

![aws-billing-source-10](images/aws-billing-source-10.webp)

12. **Refresh**⑰ the policy list, **search**⑱ for your custom policy, **check the box**⑲  next to it to add it to your account, and then click on **Next**⑳.

![aws-billing-source-11](images/aws-billing-source-11.webp)

13. Review and press **Create user**㉑.

![aws-billing-source-12](images/aws-billing-source-12.webp)

### Step 2: Create an Access Key and Secret Access Key

1. Now click on the **user**① you just created.

![aws-billing-source-13](images/aws-billing-source-13.webp)

2. Under **Security credentials**② scroll down the page to `Access Keys`, and Click **Create access key**③.

![aws-billing-source-14](images/aws-billing-source-14.webp)

3. Select **Command Line Interface (CLI)④**, tick the **Confirmation box**⑤ and click **Next**⑥.

![aws-billing-source-15](images/aws-billing-source-15.webp)

4. Click **Create access key**⑦.

![aws-billing-source-16](images/aws-billing-source-16.webp)

5. Download your **`Access key`** and **`Secret access key`** by clicking the **Download .csv file**⑧ button, and then click **Done**⑨.

![aws-billing-source-17](images/aws-billing-source-17.webp)

### Step 3: Config your connection

1. Write a **Name**① for your connection.

![aws-billing-source-18](images/aws-billing-source-18.webp)

2. Enter your **Access Key ID**② and **Secret Access Key**③, specify the preferred event **Fetching Time**④, and then proceed by clicking on **Next**⑤.

![aws-billing-source-19](images/aws-billing-source-19.webp)

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai)
