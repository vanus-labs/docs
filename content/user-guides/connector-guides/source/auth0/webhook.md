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
![](images/image.jpg)
7. Provide the payload URL of your Auth0 source connector in Vanus Cloud, and select the json line under **Content Format**.
![](images/image1.jpg)
8. Select the event you want to receive notifications for. 
![img.png](images/image2.png)
9. Save your settings.

:::caution
At this time you can only select one event.
:::
