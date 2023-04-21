# **Configuring Amazon Eventbridge**

1. Click the copy icon to copy the webhook url.
   ![](images/getlink.png)
2. Navigate to the [EventBridge console](https://console.aws.amazon.com/events/home).
3. In the side menu click **Event buses**.
   ![img_3.png](images/img_3.png)
4. Create a new event bus if you haven't already.
   ![img_4.png](images/img_4.png)
5. Write a name and press **create**.
   ![img_5.png](images/img_5.png)
6. Go to rule from the side menu and click **create rule**.
   ![img_6.png](images/img_6.png)
7. Name your rule, select your Event bus and press **Next**.
   ![img_7.png](images/img_7.png)
8. Select all events.
   ![img_8.png](images/img_8.png)
9. Press **Next** to continue.
10. Select EventBridge API connection.
    ![img_9.png](images/img_9.png)
11. Now select create new **Create a new API destination** under API destination.
12. Write a name,set the API destination endpoint to the URL from Vanus Cloud and set the HTTP method as `POST`.
    ![img_10.png](images/img_10.png)
13. Next, select create a connection.
    ![img_11.png](images/img_11.png)
14. Write a name for you connection and select **Basic (Username/Password)** under Authorization type.
    ![img_12.png](images/img_12.png)
15. Create a **Username** and a **Password** of your choice, this won't be needed in this scenario and press **Next**.
    ![img_13.png](images/img_13.png)
16. Under Configure tags - optional press **Next**.
17. Review and press **Create rule**.
    Now every event sent to your Event Bus will be send to your Vanus connection.
