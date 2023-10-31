--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A Dynatrace account with administrative privileges.
- A [**Vanus Cloud account**](https://cloud.vanus.ai).

---

**Perform the following steps to configure your Dynatrace Source**

### Step 1: Create your connection in Vanus Connect

- Write a **Name**① for your connection in Vanus Connect.

- Click on the **copy**② icon to copy the Webhook URL. Use the Webhook URL to receive events.

- Click **Next**③ and continue the configuration.

![dynatrace-source-1](images/dynatrace-source-1.webp)

---

**Configuring Dynatrace to Send Webhook Events** 

### Step 2: Configure webhook

1. Click the **copy icon**① to copy the webhook url.

![dynatrace-source-2](images/dynatrace-source-2.webp)

2. Log in to your [**Dynatrace account**](https://sso.dynatrace.com/).

3. Navigate to the Settings page by first clicking on the **gear icon**②.

![dynatrace-source-3](images/dynatrace-source-3.webp)

4. Scroll downwards and click on **Integration**③ then select **Problem notifications**④.

![dynatrace-source-4](images/dynatrace-source-4.webp)

5. Click on **Add notification**⑤.

![dynatrace-source-5](images/dynatrace-source-5.webp)

6. Select **Custom Integration**⑥ as the Notification type, choose your preferred **Display name**⑦, and paste the Webhook URL you copied previously into the **Webhook URL**⑧ field.

![dynatrace-source-6](images/dynatrace-source-6.webp)

7. Toggle the buttons as shown below to **Accept any SSL certificate (including self-signed and valid certificates)⑨**, **Call webhook if new events merge into existing problems**⑩ and **Call webhook if problem is closed**⑪.

![dynatrace-source-7](images/dynatrace-source-7.webp)

8. Leave the **Additional HTTP headers**⑫ section just the way it is.

![dynatrace-source-8](images/dynatrace-source-8.webp)

9. If the **`Custom Integration test successful`⑬** message appears after pressing the **Send test notification**⑭ button, continue by clicking the **Save changes**⑮ button to save the adjustments.

![dynatrace-source-9](images/dynatrace-source-9.webp)

8. If successful, you should see **this**⑯.

![dynatrace-source-10](images/dynatrace-source-10.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
