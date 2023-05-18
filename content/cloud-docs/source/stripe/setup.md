# Prerequisites

- A Stripe Account

# Getting Started

Perform the following steps to configure your Stripe Source:

## Create a Connection

1. Write a name for your connection.
   ![img.png](images/1.png)
2. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction.
![](images/2.png)
3. Click **next** and finish the configurations.


## Configuring Stripe to Send Webhook Events

1. Click the copy icon to copy the webhook url.
   ![](images/getlink.png)
2. Log in to your Stripe account and navigate to the **Developer** section.
   ![img.png](images/img.png)
3. Click on **Webhooks** in the left-hand menu, and click on the **Add endpoint** button to create a new webhook.
   ![img_2.png](images/img_2.png)
4. Enter the URL you previously saved for your webhook endpoint from Vanus Cloud and select the events you want to receive notifications for. Stripe offers a wide range of events, such as `charge.succeeded`, `invoice.paid`, and `customer.subscription.updated`.
   ![img_3.png](images/img_3.png)
5. Click on the **Create endpoint** button to save your webhook.

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
