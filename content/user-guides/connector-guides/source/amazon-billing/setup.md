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

### Create a new AWS user
Create a new user and set the proper IAM policy.
1. Log in to the AWS Management Console using your root account credentials.
2. Navigate to the IAM service by clicking on the Services menu and selecting IAM.
![](images/findIAM.png)
3. Click on the Users tab in the left navigation menu, and then click the Add user button.
![](images/AddUser.png)
4. Write the name for your user and click next.
5. select attach policy directly, and Create policy.
![](images/permissionoption.png)
6. select the Service 'Cost Explore Service' and give it the following policy.
   - "ce:GetCostAndUsage",
7. press next and review.
8. Name your policy and click create policy.
9. search for your custom policy and add it to your account, and press next.
10. Review and press create user.
11. Now click on the user you just created.
12. Go to 'Access Key' Click Create access key.
![](images/createAccesskey.png)
13. Select Command line interface CLI, and press next.
14. Save your access key and secret key safely.
![](images/img.png)
### Config your connection
To obtain all Billing events in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Amazon Billing**.
4. Fill in your Access Key ID and your Secret Key and click next
   - To get a new access and secret key, go to the IAM console, select your username under Users, open the Security credentials tab, click Create access key, and then choose Show to view your new credentials.
5. Click **`Next`** to save the Amazon Billing Source
   ![](images/aws-billing.png)

### Amazon Billing Source Output

```json
{
  "specversion": "1.0",
  "id": "026046e2-3cb0-4116-895e-c77877072dd2",
  "source": "cloud.amazon.billing",
  "type": "amazon.billing.daily",
  "datacontenttype": "application/json",
  "time": "2023-01-28T06:11:10.012579049Z",
  "data": {
    "date": "2023-01-27",
    "service": "Amazon Relational Database Service",
    "amortizedCost": {
      "amount": "0.2672917174",
      "unit": "USD"
    }
  }
}
```
