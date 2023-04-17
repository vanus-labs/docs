# Auth0

This guide contains information to set up a Auth0 Source in Vanus Cloud.

## Introduction

Auth0 is an authentication and authorization platform that provides security solutions for applications, websites, and APIs. It offers features such as single sign-on, multi-factor authentication, and social logins, among others.

The Auth0 Source is a webhook server that enables you to establish an endpoint for receiving events from your Auth0 application. To achieve this, it is necessary to establish a connection within Auth0.

## Prerequisites

Before obtaining Auth0 events, you must have:

- An Auth0 account with administrative privileges
- A [Vanus Cloud account](https://cloud.vanus.ai)

## Getting Started

To obtain all Auth0 events using the Streams menu and Webhook option in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Auth0**. 
4. Click **`Next`** to save the Auth0 Source.
5. After creating your connection, select your connection and get the payload from the Auth0 information.
![](images/payload.png)

### Configuring Auth0 to Send Webhook Events

1. Log in to your Auth0 account.
2. Navigate to the **Streams** menu under **Monitoring**.
3. ![img.png](images/img.png)
4. Click on the **Create Log Stream** button.
![img_1.png](images/img_1.png)
5. Name your stream and select the **Webhook** option.
![img_2.png](images/img_2.png)
6. Provide the payload URL of your Auth0 source connector in Vanus Cloud.
![img_3.png](images/img_3.png)
7. Select json line under **Content Format**.
8. Select the event you want to receive notifications for.
![img_4.png](images/img_4.png)
9. and Save your settings.

## Supported Events

This Vanus Cloud Source connector offers support for various events. Below is a list of the supported events:

### Authentication event filters

Login:
- [Login - Failure](events.md#login-failure)
- Login - Notification
- Login - Success

Logout:
- Logout - Failure
- Logout - Success

Signup:
- Signup - Failure
- Signup - Success

Silent Authentication:
- Silent Authentication - Failure
- Silent Authentication - Success

Token Exchange:
- Token Exchange - Failure
- Token Exchange - Success

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).


