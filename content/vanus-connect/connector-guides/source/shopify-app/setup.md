# Shopify App

This guide contains information to set up a Shopify App Source in Vanus Connect.

## Introduction

Shopify is a popular e-commerce platform that allows businesses to sell their products online.

With the Shopify App source connector in Vanus Connect, you can create a Shopify App to obtain real-time updates on all customer and order activity in your Shopify store.

## Prerequisites

Before obtaining Shopify events, you must have:

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- A Shopify shop with administrative privileges.

---

## Getting Started

### Step 1: Create an App

1. Go to [**Shopify**](https://shopify.com) and sign in to your account to access the shopify dashboard.

2. After signing in, navigate to **`Apps  >`①** in the side menu, where a list will appear at the top of the page. Click on **App and sales channel settings**②.

![shopify-app-source-1](images/shopify-app-source-1.webp)

3. Select **Develop apps**③ to create a new app.

![shopify-app-source-2](images/shopify-app-source-2.webp)

4. Click on **Allow custom app development**④.

![shopify-app-source-3](images/shopify-app-source-3.webp)

5. Click on **Allow custom app development**⑤ once more.

![shopify-app-source-4](images/shopify-app-source-4.webp)

6. Let's create a new app by clicking **Create an app**⑥ now.

![shopify-app-source-5](images/shopify-app-source-5.webp)

7. Provide an **App name**⑦ and then click **Create app**⑧.

![shopify-app-source-6](images/shopify-app-source-6.webp)

8. Now, we need to click on **Configure Admin API scopes**⑨.

![shopify-app-source-7](images/shopify-app-source-7.webp)

9. **Search**⑩ for the specific event type you wish to receive, such as `read_orders` and `read_products`. Once found, **select**⑪ them and then click on the **Save**⑫ button.

![shopify-app-source-8](images/shopify-app-source-8.webp)

10. Press **Install app**⑬.

![shopify-app-source-9](images/shopify-app-source-9.webp)

11. Click **Install**⑭ to proceed.

![shopify-app-source-10](images/shopify-app-source-10.webp)

12. Click on **Reveal token once**⑮ to display the Admin API access token.

![shopify-app-source-11](images/shopify-app-source-11.webp)

13. **Copy**⑯ your token, and take note of your **Shop Name**⑰.

![shopify-app-source-12](images/shopify-app-source-12.webp)

---

### Step 2: Finish the connection in Vanus Connect

1. Write a connection **Name**① without any spaces, input your **Shop Name**② and paste the **API Token**③ into Vanus Connect.

![shopify-app-source-13](images/shopify-app-source-13.webp)

2. Select your desired **`Sync Start Date`④** to indicate when you'd like to begin receiving events, choose your **`Sync Interval Hour`⑤** to specify how frequently you want to receive updates, and then click **Next**⑥.

![shopify-app-source-14](images/shopify-app-source-14.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
