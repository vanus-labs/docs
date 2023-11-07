--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A SAP BTP account with administrative privileges
- A [**Vanus Cloud account**](https://cloud.vanus.ai)

---

**Perform the following steps to configure your SAP BTP Source**

### SAP BTP Connection Settings

- Write a **Name**① for your connection in Vanus Connect.

![sap-btp-source-1](images/sap-btp-source-1.webp)

### Configuring SAP BTP to Send Webhook Events

#### Step 1: Configure webhook

1. Click the **copy**① icon to copy the webhook url.

![sap-btp-source-2](images/sap-btp-source-2.webp)

2. Log in to your [**SAP BTP account**](https://accounts.sap.com/).

3. Navigate to the **Subaccounts**② page by clicking on it.

![sap-btp-source-3](images/sap-btp-source-3.webp)

4. Click on **Services**③ and select **Instances and Subscriptions**④.

![sap-btp-source-4](images/sap-btp-source-4.webp)

5. Click on the **Create**⑤ button at the top right.

![sap-btp-source-5](images/sap-btp-source-5.webp)

6. Click on **Select Service**⑥ to reveal the dropdown menu.

![sap-btp-source-6](images/sap-btp-source-6.webp)

7. Select **Alert Notification**⑦, choose an **Instance Name**⑧ of your choice and click on **Next**⑨.

![sap-btp-source-7](images/sap-btp-source-7.webp)

8. Leave the Instance parameters as default and click **Next**⑩.

![sap-btp-source-8](images/sap-btp-source-8.webp)

9. Click **Create**⑪.

![sap-btp-source-9](images/sap-btp-source-9.webp)

10. Click on the **name of the Instance**⑫ that was just created.

![sap-btp-source-10](images/sap-btp-source-10.webp)

11. Click on **Actions**⑬.

![sap-btp-source-11](images/sap-btp-source-11.webp)

12. Click on **Create**⑭.

![sap-btp-source-12](images/sap-btp-source-12.webp)

13. Scroll down and select **Webhook**⑮ as the action type and click on **Next**⑯.

![sap-btp-source-13](images/sap-btp-source-13.webp)

:::note
Do not select the **Webhook with Authorization Token** or **Webhook with Basic Authentication** as they would need extra level of authentication.
:::

14. Insert a desired **Name**⑰ for your webhook and **Description**⑱ or **Labels**⑲ if any.

![sap-btp-source-14](images/sap-btp-source-14.webp)

15. Scroll down, paste the webhook URL you copied earlier in the **URL Address**⑳ section, tick the **Accept any SSL certificate**㉑ checkbox and click **Create**㉒.

![sap-btp-source-15](images/sap-btp-source-15.webp)

16. Click on **Close**㉓.

![sap-btp-source-16](images/sap-btp-source-16.webp)

17. A successful webhook integration would look like **this**㉔.

![sap-btp-source-17](images/sap-btp-source-17.webp)

18. Click **Next**㉕ and continue the configuration.

![sap-btp-source-18](images/sap-btp-source-18.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
