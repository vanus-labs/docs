**Configuring Dynatrace to Send Webhook Events** 

### Step 1: Configure webhook

1. Click the copy icon to copy the webhook url
![](images/3.png)

2. Log in to your [Dynatrace account](https://sso.dynatrace.com/).

3. Navigate to the **Settings** page by first clicking on the **Manage** icon.
![](images/4.png)

4. Scroll downwards and click on **Integration** then select **Problen notifications**.
![](images/5.png)

5. Click on **Add notification**.
![](images/6.png)

6. Select **Custom Integration** as the **Notification Type**, choose your preferred **Display name**, and paste the webhook URL you copied previously into the **Webhook URL** field.
![](images/7.png)

7. Toggle the buttons as shown below to **Accept any SSL certificate, Call webhook if new events merge into existing problems** and **Call webhook if problem is closed**.
![Alt text](images/6.1.png)

8. Leave the **Additional HTTP Header** section just the way it is.
![Alt text](images/6.2.png)

9. If the "Custom Integration test was successful" message appears after pressing the **Send test notification** button, continue by clicking the **Save changes** button to save the adjustments.

![Alt text](images/6.3.png)

8. If succesful you should see this.
![](images/8.png)

:::note
At this time you can only Integrate three **Problem notifications**.
:::