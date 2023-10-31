--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- An Auth0 account with administrative privileges
- A [**Vanus Cloud account**](https://cloud.vanus.ai).
---

**Perform the following steps to configure your Auth0 Source**

### Auth0 Connection Settings

- Write a **Name**① for your connection.

- Select the **Events**② you want to receive.

![auth0_webhook_0.webp](images/auth0_webhook_0.webp)

### **Configuring Auth0 to Send Webhook Events**

1. Click the **copy**① icon to copy the webhook url.

![auth0_webhook_1a.webp](images/auth0_webhook_1a.webp)

2. Log in to your Auth0 account.

3. Navigate to the **Streams**② menu under **Monitoring**③.

![auth0_webhook_1.webp](images/auth0_webhook_1.webp)

4. Click on the **Create Log Stream**④ button.

![auth0_webhook_2.webp](images/auth0_webhook_2.webp)

5. Select the **Custom Webhook**⑤ option.

![auth0_webhook_3.webp](images/auth0_webhook_3.webp)

6. Write a **Name**⑥ for your webhook stream and click on the **Create**⑦ button.

![auth0_webhook_4.webp](images/auth0_webhook_4.webp)

7. Provide the **Payload URL**⑧ of your Auth0 source connector in Vanus Connect, and select **Json Lines**⑨ under **Content Format**.

![auth0_webhook_5.webp](images/auth0_webhook_5.webp)

8. **Select**⑩ the event you want to receive notifications for and click the **Apply**⑪ button. Save your settings.

![auth0_webhook_6.webp](images/auth0_webhook_6.webp)

**Caution**

At this time you can only select one event. 

9. Go back to Vanus Connect and click **Next**⑫ to continue the configuration.

![auth0_webhook_7.webp](images/auth0_webhook_7.webp)

---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).
