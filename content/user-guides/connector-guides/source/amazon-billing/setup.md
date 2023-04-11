# Amazon Billing

This guide contains information to set up a Amazon Billing Source in Vanus Cloud.

## Introduction

AWS Billing is a service provided by Amazon Web Services (AWS) that allows you to track and manage your usage and costs within the AWS cloud environment. It provides detailed information about your usage and expenses, allowing you to optimize your resources and control your costs.

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- AWS IAM Access Key.
- AWS permissions ce:GetCostAndUsage for the IAM user.

## Getting Started

### Create a new AWS user
Create a new user and set the proper IAM policy.
1. Log in to the AWS Management Console using your root account credentials.
2. Navigate to the IAM service by clicking on the Services menu and selecting IAM.
![](content/user-guides/connector-guides/source/amazon-billing/images/findIAM.png)
3. Click on the Users tab in the left navigation menu, and then click the Add user button.
![](content/user-guides/connector-guides/source/amazon-billing/images/AddUser.png)
4. Write the name for your user and click next.
5. select attach policy directly, and Create policy.
![](content/user-guides/connector-guides/source/amazon-billing/images/permissionoption.png)
6. select the Service 'Cost Explore Service' and give it the following policy.
   - "ce:GetCostAndUsage",
7. press next and review.
8. Name your policy and click create policy.
9. search for your custom policy and add it to your account, and press next.
10. Review and press create user.
11. Now click on the user you just created.
12. Go to 'Access Key' Click Create access key.
![](content/user-guides/connector-guides/source/amazon-billing/images/createAccesskey.png)
13. Select Command line interface CLI, and press next.
14. Save your access key and secret key safely.
![](content/user-guides/connector-guides/source/amazon-billing/images/img.png)
### Config your connection
To obtain all Billing events in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Amazon Billing**.
4. Fill in your Access Key ID and your Secret Key and click next
   - To get a new access and secret key, go to the IAM console, select your username under Users, open the Security credentials tab, click Create access key, and then choose Show to view your new credentials.
5. Click **`Next`** to save the Amazon Billing Source
   ![](content/user-guides/connector-guides/source/amazon-billing/images/aws-billing.png)

## Supported Events


- CreateBudget

- CreateBudgetAction

- CreateNotification

- CreateSubscriber

- DeleteBudget

- DeleteBudgetAction

- DeleteNotification

- DeleteSubscriber

- DescribeBudget

- DescribeBudgetAction

- DescribeBudgetActionHistories

- DescribeBudgetActionsForAccount

- DescribeBudgetActionsForBudget

- DescribeBudgetNotificationsForAccount

- DescribeBudgetPerformanceHistory

- DescribeBudgets

- DescribeNotificationsForBudget

- DescribeSubscribersForNotification

- ExecuteBudgetAction

- UpdateBudget

- UpdateBudgetAction

- UpdateNotification

- UpdateSubscriber

- Billing alerts

- Budget notifications

- Cost and usage reports

- Payment and refund events

