# Amazon Billing

This guide contains information to set up a Amazon Billing Source in Vanus Cloud.

## Introduction

AWS Billing is an AWS service for monitoring and managing your cloud usage and costs. It provides comprehensive usage and expense data to help you optimize resources and control spending.

Amazon Billing Source is a connector provided by Vanus that retrieves daily or hourly spending information from Amazon Cloud Services and converts it into CloudEvents. To use cloud billing, you need to provide a user access key and secret key, which are required to authenticate and authorize access to your AWS account. By providing these keys, the Amazon Billing Source connector can access your billing information and retrieve the spending data from your AWS account.

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- AWS IAM Access Key.
- AWS permissions ce:GetCostAndUsage for the IAM user.

## Getting Started

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections

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
6. Select the Service `Cost Explore Service`.
![img.png](images/searchcost.png)
7. Next search for the following policy.
   - "GetCostAndUsage", 
![img.png](images/search.png)
8. Press **Next** and proceed to the next page.
![img_1.png](images/tag.png)
9. Name your policy and click **Create policy**.
10. Return back to your previous `TAB`.
![img.png](images/tab.png)
11. Search for your custom policy and add it to your account, and press **Next**.
![img.png](images/policy.png)
12. Review and press **Create user**.
![img.png](images/createuser.png)


### Step 2: Create an Access Key and Secret Key
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

1. Write a name for your connection.
      ![img.png](images/name.png)
2. From the list of sources, choose **Amazon Billing**.
3. Provide your Access Key ID and Secret Key, set the desired hour for event fetching, and then save the Amazon Billing Source by clicking "Next".
![](images/aws-billing.png)

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai)