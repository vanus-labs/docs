# Amazon Billing

This guide contains information to set up a Amazon Billing Source in Vanus Cloud.

## Introduction

AWS Billing is a service provided by Amazon Web Services (AWS) that allows you to track and manage your usage and costs within the AWS cloud environment. It provides detailed information about your usage and expenses, allowing you to optimize your resources and control your costs.

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- AWS IAM Access Key.
- AWS permissions ce:GetCostAndUsage for the IAM user.

## Getting Started

To obtain all Billing events using the Streams menu and Webhook option in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Amazon Billing**.
4. Fill in your Acess Key ID and your Secret Key and click next
5. Select Sink and Configure Subscription, and click Submit button
   ![](images/aws-billing.png)

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

