**Configuring SAP BTP to Send Webhook Events** 

### Step 1: Configure webhook

1. Click the copy icon to copy the webhook url
![copy url](images/2.1.png)

2. Log in to your [SAP BTP account](https://accounts.sap.com/)

3. Navigate to the **Subaccount** page by clicking on it.
![Alt text](images/3.png)

4. Click on **Instances and Subscriptions**.
![Alt text](images/4.png)

5. Click on the **Create** button at the top right.
![Alt text](images/5.png)

6. Under the **Service** section select the **Alert Notifications** and choose an **Instance Name** of your choice and click on **Next**.
![Alt text](images/6.png)

7. Leave the **Parameters** as default and click **Next**.
![Alt text](images/7.png)

8. Click **Create**.
![Alt text](images/8.png)

9. Click on the name of the **Instance** that was just created.
![Alt text](images/9.png)

10. Click on **Actions**.
![Alt text](images/10.png)

11. Click on **Create**.
![Alt text](images/11.png)

12. Scroll down and select **Webhook** as the action type and click on **Next**.
![Alt text](images/12.png)

13. Insert a desired **Name** for your webhook and **Description** or **Labels** if any.
![Alt text](images/13.png)

14. Scroll down, paste the webhook URL you copied earlier in the **URL Address** section and tick the **Accept any SSL certificate** checkbox.
![Alt text](images/14.png)

15. Click on **Close**.
![Alt text](images/15.png)

16. A successful webhook integration would look like this.
![Alt text](images/16.png)

:::note
Do not select the **Webhook with Authorization Token** or **Webhook with Basic Authentication** as they would need extra level of authentication.
:::