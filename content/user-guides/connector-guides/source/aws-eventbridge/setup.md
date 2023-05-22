# Amazon Eventbridge

This guide contains information to set up a Amazon Eventbridge Source in Vanus Cloud.

## Introduction

Amazon EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build scalable event-driven applications.

The Amazon EventBridge Source is a webhook server that enables you to establish an endpoint for receiving events from Amazon EventBridge. To achieve this, it is necessary to establish a connection within Amazon EventBridge.

---

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- An AWS Account with Administrative Privileges

---
## Getting Started

### Step1: Create your connection in Vanus Cloud

To obtain all Amazon Eventbridge events in Vanus Cloud, follow these steps:

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Write a name for your connection.
![img.png](images/1.png)  

4. Click on source and select **aws-eventbridge** 
![img.png](images/choose%20source.png)  

5. Click the copy icon to copy the webhook url. 

6. Click next to continue configuration. 

---

### Step2: **Configuring Amazon Eventbridge** 

1. Navigate to the [EventBridge console](https://console.aws.amazon.com/events/home).

#### Create an Event Bus

1. In the side menu click **Event buses**.
![img_3.png](images/no2.png)

2. Create a **new event bus** if you haven't already.
![img_4.png](images/3.png)

3. Write a name and press **create**.
![img_5.png](images/4.png)

---
#### Create a Rule. 

1. Go to **Rules** from the side menu and click **Create rule**.
![img_6.png](images/5.png)

2. Name your rule, select your **Event bus** and press **Next**.
![img_7.png](images/6.png)

3. Select **all events**.
![img_8.png](images/7.png)

4. Press **Next** to continue.
![img.png](images/8.png)

---

#### Create an API Destination and Connection

1. Select EventBridge API destination.
![img_9.png](images/9.png)

2. Now select create new **Create a new API destination** under API destination. 

- Write a connection Name. 

- Set the **API destination endpoint** to the URL from Vanus Cloud from **[step 1](#configuring-amazon-eventbridge)**. 

- Set the **HTTP method** as `POST`.
![img_10.png](images/10.png)

3. Next, select **Create a new connection**.
![](images/11.png)

4. Write a name for you connection and select **Basic (Username/Password)** under Authorization type.
![img_12.png](images/12.png)

5. Create a **Username** and a **Password** of your choice, this won't be needed in this scenario but it is required and press **Next**.
![img_13.png](images/13.png)

6. Under Configure tags - optional press **Next**.
![](images/14.png)

7. Review and press **Create rule**.
![](images/15.png) 

---

### Step3: Complete your connection set up in Vanus cloud 

1. Choose your sink and click **Next** 
![3](images/choose%20sink.png) 

2. Click on submit to finish the configuration. 
![](images/submit.png)  

3. You've successfully created your Vanus aws-eventbridge source connection.  
![](images/created.png)  


Now every event sent to your Event Bus will be send to your Vanus connection.

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
