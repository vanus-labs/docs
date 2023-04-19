# Auth0

This guide contains information to set up a Auth0 Source in Vanus Cloud.

## Introduction

Auth0 is an authentication and authorization platform that provides security solutions for applications, websites, and APIs. It offers features such as single sign-on, multi-factor authentication, and social logins, among others.

The Auth0 Source is a webhook server that enables you to establish an endpoint for receiving events from your Auth0 application. To achieve this, it is necessary to establish a connection within Auth0.

## Prerequisites

Before obtaining Auth0 events, you must have:

- An Auth0 account with administrative privileges
- A [Vanus Cloud account](https://cloud.vanus.ai)

## Create your connection

To obtain all Auth0 events using the Streams menu and Webhook option in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Auth0**.
4. Click **`Next`** to save the Auth0 Source.

### How to use the webhook URL
**Configuring Auth0 to Send Webhook Events**

1. Click the copy icon to copy the webhook url.
![getLink](images/getlink.png)
2. Log in to your Auth0 account.
3. Navigate to the **Streams** menu under **Monitoring**.
4. ![img.png](images/img.png)
5. Click on the **Create Log Stream** button.
   ![img_1.png](images/img_1.png)
6. Name your stream and select the **Webhook** option.
   ![img_2.png](images/img_2.png)
7. Provide the payload URL of your Auth0 source connector in Vanus Cloud.
   ![img_3.png](images/img_3.png)
8. Select json line under **Content Format**.
9. Select the event you want to receive notifications for.
   ![img_4.png](images/img_4.png)
10. and Save your settings.

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
