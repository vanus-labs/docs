# **Configuring Amazon Eventbridge**

1. Click the **copy icon** to copy the webhook url.
   ![](images/getlink.png)
2. Navigate to the [EventBridge console](https://console.aws.amazon.com/events/home).

## Step 1: Create an Event Bus

1. In the side menu click **Event buses**.
   ![img_3.png](images/img_3.png)
2. Create a **new event bus** if you haven't already.
   ![img_4.png](images/img_4.png)
3. Write a name and press **create**.
   ![img_5.png](images/img_5.png)

## Step 2: Create a Rule.
1. Go to **Rules** from the side menu and click **Create rule**.
   ![img_6.png](images/img_6.png)
2. Name your rule, select your **Event bus** and press **Next**.
   ![img_7.png](images/img_7.png)
3. Select **all events**.
   ![img_8.png](images/img_8.png)
4. Press **Next** to continue.
![img.png](images/img_14.png)

## Step 3: Create an API Destination and Connection
1. Select EventBridge API destination.
    ![img_9.png](images/img_9.png)
2. Now select create new **Create a new API destination** under API destination.
   - Write a connection **Name**.
   - Set the **API destination endpoint** to the URL from Vanus Connect from **[step 1](#configuring-amazon-eventbridge)**.
   - Set the **HTTP method** as `POST`.
       ![img_10.png](images/img_10.png)
3. Next, select **Create a new connection**.
![](images/img_15.png)
4. Write a name for you connection and select **Basic (Username/Password)** under Authorization type.
    ![img_12.png](images/img_12.png)
5. Create a **Username** and a **Password** of your choice, this won't be needed in this scenario but it is required and press **Next**.
    ![img_13.png](images/img_13.png)
6. Under Configure tags - optional press **Next**.
![](images/img_16.png)
7. Review and press **Create rule**.
![](images/img_17.png)

Now every event sent to your Event Bus will be send to your Vanus connection.
