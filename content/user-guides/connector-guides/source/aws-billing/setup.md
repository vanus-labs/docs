# Amazon Billing

This guide contains information to set up a Amazon Billing Source in Vanus Cloud.

## Introduction

AWS Billing is an AWS service for monitoring and managing your cloud usage and costs. It provides comprehensive usage and expense data to help you optimize resources and control spending.

Amazon Billing Source is a connector provided by Vanus that retrieves daily or hourly spending information from Amazon Cloud Services and converts it into CloudEvents. To use cloud billing, you need to provide a user access key and secret key, which are required to authenticate and authorize access to your AWS account. By providing these keys, the Amazon Billing Source connector can access your billing information and retrieve the spending data from your AWS account.

---
## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- AWS IAM Access Key.
- AWS permissions ce:GetCostAndUsage for the IAM user.

---
## Getting Started

### Step 1: Create a new AWS user

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.

2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by searching for IAM and click the IAM service.
![iam](images/1.png)

3. Click on the **Users tab** in the left navigation menu, and then click the **Add user** button.
![create user](images/create%20a%20user.png)

4. Write the name for your user and click **next**.
![img.png](images/3.png)

5. Select **Attach policy directly**, and **Create policy**.
![](images/4..png)

6. Select the Service `Cost Explore Service`.
![img.png](images/5..png)

7. Next search for the following policy.
   - "GetCostAndUsage", 
![img.png](images/6.png)

8. Press **Next** and proceed to the next page.

9. Name your policy and click **Create policy**.
![img_1.png](images/7..png)

10. Return back to your previous `TAB`.
![img.png](images/8.png)

11. Search for your custom policy and add it to your account, and press **Next**.
![img.png](images/9..png)

12. Review and press **Create user**.
![img.png](images/10..png)

---

### Step 2: Create an Access Key and Secret Key 

1. Now click on the user you just created.
![img.png](images/11.png)

2. Under **Security and credential** scroll down the page to `Access Key`, and Click **Create access key**.
![](images/12.png)

3. Select Command line interface CLI, and press **Next**.
![img.png](images/13.png)

4. Click **Create access key**.
![img.png](images/14.png)

5. Save your `Access key` and `Secret key` safely. Download the .csv file.
![](images/15.png) 

---

### Step 3: Config your connection

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Write a name for your connection and choose your source. 
![img.png](images/name%20and%20source.png) 

4. Provide your Access Key ID and Secret Key, set the desired hour for event fetching.
![](images/17.png) 

5. Click **Next** and continue the configuration.  

6. Choose your sink and click **Next** 
![3](images/choose%20sink.png) 

7. Click on submit to finish the configuration. 
![](images/submit.png)  

8. You've successfully created your Vanus aws-billing source connection.  
![](images/created.png) 

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai)