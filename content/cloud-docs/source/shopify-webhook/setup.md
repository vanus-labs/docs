## Prerequisites

- A Shopify Account

## Getting Started

### Create a Connection

1. Write a name for your connection.
   ![img.png](images/1.png)
2. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction.
   ![img.png](images/2.png)
3. Click **next** and finish the configurations.  

### **Configuring Shopify to Send Webhook Events**

1. Click the copy icon to copy the webhook url.
![](images/copywebhook.png)
2. go to the [Shopify](https://shopify.com) website, sign in to your shop dashboard, and click **settings**.
![](images/img.png)
3. From the side menu click on **Notifications**.
![](images/img_1.png)
4. Now scroll down to the very bottom of the page and click on **Create webhook**.
![](images/img_2.png)
5. Paste the Webhook URL from Vanus Cloud that we copied at the beginning. 
![](images/img_3.png)
6. Select the **event** you'd like to send to Vanus Cloud and set the format to `JSON`.
![](images/img_4.png)
7. Finally select the **Latest** version of the webhook API and press **Save**.

Note: If you'd like to receive multiple events you can create more webhooks using the same URL.



Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
