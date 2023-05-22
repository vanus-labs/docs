# Stripe

This guide contains information to set up a Stripe Source in Vanus Cloud.

## Introduction

Shopify is a popular e-commerce platform that allows businesses to sell their products online.

The Shopify webhook Source is a webhook server that enables you to establish an endpoint for receiving events from Shopify. To achieve this, it is necessary to establish a connection within Shopify.

---
## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- A Stripe Account

---

## Getting Started

### Step1: Create a Connection

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Give your connection a name and choose your source. 
![3](images/choose%20source.png) 

4.  Click the copy icon to copy the webhook url.

---

### Step2: Configuring Shopify to Send Webhook Events 

1. go to the [Shopify](https://shopify.com) website, sign in to your shop dashboard, and click **settings**. 
![](images/img.png)

2. From the side menu click on **Notifications**.
![](images/img_1.png)

3. Now scroll down to the very bottom of the page and click on **Create webhook**.
![](images/img_2.png)

4. Paste the Webhook URL from Vanus Cloud that we copied at the beginning. 
![](images/img_3.png)

5. Select the **event** you'd like to send to Vanus Cloud and set the format to `JSON`.
![](images/img_4.png)

6. Finally select the **Latest** version of the webhook API and press **Save**.

Note: If you'd like to receive multiple events you can create more webhooks using the same URL.

---

### Step3: Continue your configuration in Vanus cloud 

1. Choose your sink and click **Next** 
![3](images/choose%20sink.png) 

2. Click on submit to finish the configuration. 
![](images/submit.png)  

3. You've successfully created your Vanus shopify-webhook source connection.  
![](images/created.png) 

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
