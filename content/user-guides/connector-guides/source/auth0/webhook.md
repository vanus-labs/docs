# **Configuring Auth0 to Send Webhook Events**

1. Click the copy icon to copy the webhook url.
   ![getLink](images/getlink.png)
2. Log in to your Auth0 account.
3. Navigate to the **Streams** menu under **Monitoring**.
![img.png](images/img.png)
4. Click on the **Create Log Stream** button.
   ![img_1.png](images/img_1.png)
5. Select the **Webhook** option.
   ![img_2.png](images/img_2.png)
6. Write a name for your webhook stream.
![](images/Feishu20230421-145230.jpg)
7. Provide the payload URL of your Auth0 source connector in Vanus Cloud.
   ![img_3.png](images/img_3.png)
8. Select json line under **Content Format**.
9. Select the event you want to receive notifications for.
   ![img_4.png](images/img_4.png)
0. and Save your settings.