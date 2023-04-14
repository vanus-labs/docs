# Amazon Eventbridge

This guide contains information to set up a Amazon Eventbridge Source in Vanus Cloud.

## Introduction

Amazon EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build scalable event-driven applications.

The Amazon EventBridge Source is a webhook server that enables you to establish an endpoint for receiving events from Amazon EventBridge. To achieve this, it is necessary to establish a connection within Amazon EventBridge.

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- An AWS Account with Administrative Privileges

## Getting Started

To obtain all Amazon Eventbridge events in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Amazon Eventbridge**.
4. Click **Next** and finish the configurations.
   ![](images/eventbridge.png)
5. After creating your connection, select Eventbridge connection and get the payload URl from the Amazon EventBridge information.
   ![](images/eventbridge-webhook.png)

### Configuring Amazon Eventbridge to Send Webhook Events

1. Navigate to the [EventBridge console](https://console.aws.amazon.com/events/home), select API destinations from the menu.
2. Select the Connections tab and choose **Create connection**
   ![](images/eventbridge-apidestinations.png)
3. Enter a connection name, then select API Key for Authorization Type. Enter the **API key name** and paste your **secret API key** as the value. Choose Create.
   ![](images/eventbridge-auth.png)
4. Enter the name of endpoint, the API destination endpoint, and HTTP method
   ![](images/eventbridge-connection.png)
5. Click on **Create** to Create an Webhook connection
   ![](images/eventbridge-apidestinations.png)

## Supported Events

This Vanus Cloud Source connector offers support for various events. Below is a list of the supported events:

- [Create Bucket](events.md#create-bucket)
- [Delete Bucket](events.md#delete-bucket)



Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).