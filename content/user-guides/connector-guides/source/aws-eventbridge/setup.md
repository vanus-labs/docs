# Amazon Eventbridge

This guide contains information to set up a Amazon Eventbridge Source in Vanus Cloud.

## Introduction

Amazon EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build scalable event-driven applications.

The Amazon EventBridge Source is a webhook server that enables you to establish an endpoint for receiving events from Amazon EventBridge. To achieve this, it is necessary to establish a connection within Amazon EventBridge.

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- An AWS Account with Administrative Privileges

## Getting Started

### Step 1: Create your connection in Vanus Cloud

To obtain all Amazon Eventbridge events in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Amazon Eventbridge**.
4. Click **Next** and finish the configurations.
We will retrieve the URL after the connection is finish.
   ![](images/eventbridge.png)


### Step 2: Get your payload URL
1. First go to Connection and select you newly created connection.
   ![img.png](images/img.png)
2. Copy the URL using the copy button.
   ![img_1.png](images/img_1.png)
3. save the URL for later.

### Step 3: Configuring Amazon Eventbridge

1. Navigate to the [EventBridge console](https://console.aws.amazon.com/events/home).
2. In the side menu click **Event buses**.
![img_3.png](images/img_3.png)
3. Create a new event bus if you haven't already. 
![img_4.png](images/img_4.png)
4. Write a name and press **create**.
![img_5.png](images/img_5.png)
5. Go to rule from the side menu and click **create rule**.
![img_6.png](images/img_6.png)
6. Name your rule, select your Event bus and press **Next**.
![img_7.png](images/img_7.png)
7. Select all events.
![img_8.png](images/img_8.png)
8. Press **Next** to continue.
9. Select EventBridge API connection.
![img_9.png](images/img_9.png)
10. Now select create new **Create a new API destination** under API destination.
11. Write a name,set the API destination endpoint to the URL from Vanus Cloud and set the HTTP method as `POST`.
![img_10.png](images/img_10.png)
12. Next, select create a connection.
![img_11.png](images/img_11.png)
13. Write a name for you connection and select **Basic (Username/Password)** under Authorization type.
![img_12.png](images/img_12.png)
14. Create a **Username** and a **Password** of your choice, this won't be needed in this scenario and press **Next**.
![img_13.png](images/img_13.png)
15. Under Configure tags - optional press **Next**.
16. Review and press **Create rule**.
Now every event sent to your Event Bus will be send to your Vanus connection.

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
