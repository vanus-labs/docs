# Stripe

This guide contains information to set up a Stripe Source in Vanus Cloud.

## Introduction

Stripe is a technology company that provides a suite of APIs (Application Programming Interfaces) and tools that enable businesses to process online payments and manage their financial transactions.

The Stripe Source is a webhook server that enables you to establish an endpoint for receiving events from Stripe. To achieve this, it is necessary to establish a connection within Stripe.

---

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- A Stripe Account

---

## Getting Started

### Create a Connection on Vanus cloud 

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Write a name for your connection and choose your source. 
![img.png](images/choose%20source.png)

4. Click the copy icon to copy the webhook url. 

---

### **Configuring Stripe to Send Webhook Events**

1. Log in to your Stripe account and navigate to the **Developer** section.
![img.png](images/img.png)

2. Click on **Webhooks** in the left-hand menu, and click on the **Add endpoint** button to create a new webhook.
![img_2.png](images/img_2.png)

3. Enter the URL you previously saved for your webhook endpoint from Vanus Cloud and select the events you want to receive notifications for. Stripe offers a wide range of events, such as `charge.succeeded`, `invoice.paid`, and `customer.subscription.updated`.
![img_3.png](images/img_3.png)

4. Click on the **Create endpoint** button to save your webhook. 

---

### Step3: Continue your connection on Vanus cloud  

1. Choose your sink and click **Next** 
![3](images/choose%20sink.png) 

2. Click on submit to finish the configuration. 
![](images/submit.png)  

3. You've successfully created your Vanus source connection.  
![](images/created.png) 

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
