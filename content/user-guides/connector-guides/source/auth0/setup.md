# Auth0

This guide contains information to set up a Auth0 Source in Vanus Cloud.

## Introduction

Auth0 provides a powerful platform for authentication and authorization. With the Streams menu and Auth0 source connector in Vanus Cloud, you can obtain real-time updates on all user activity in your application.

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
3. Click on the **Create Stream** button.
4. Name your stream and select the **Webhook** option.
![](images/webhook.png)
5. Provide the payload URL of your Auth0 source connector in Vanus Cloud.
6. Select json line under **Content Format**.
6. Select the event you want to receive notifications for.
7. and Save your settings.

## Supported Events

### Authentication event filters
Login:
- [Login - Failure](events.md#login_failure)
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

