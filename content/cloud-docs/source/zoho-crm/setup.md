--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- A [Zoho CRM account](https://crm.zoho.com/crm/org813836165/tab/Home/begin)

---

**Perform the following steps to configure your Zoho CRM Source**

### Zoho CRM Connection Settings

To obtain Zoho CRM events in Vanus Connect, follow these steps:

- Write a **Name**① for your connection in Vanus Connect.

- Copy the Webhook URL by clicking on the **copy icon**②.

![zohocrm-source-1](images/zohocrm-source-1.webp)


### Configure Zoho CRM to Send Webhook Events 

#### Step 1: Configure webhook

1. Log in to your [**Zoho CRM account**](https://crm.zoho.com/crm/org813836165/tab/Home/begin)

2. Navigate to the Setup page by clicking on the **gear icon**①.

![zohocrm-source-2](images/zohocrm-source-2.webp)

3. Click on **Actions**②.

![zohocrm-source-3](images/zohocrm-source-3.webp)

4. Click on **Webhooks**③.

![zohocrm-source-4](images/zohocrm-source-4.webp)

5. Click on the **Configure Webhook**④ button.

![zohocrm-source-5](images/zohocrm-source-5.webp)

6. **Name**⑤ your Webhook, paste the payload URL retrieved from Vanus Connect into the **URL to Notify**⑥ field, and make your **Module**⑦.

![zohocrm-source-6](images/zohocrm-source-6.webp)

7. Click on **Add parameter**⑧ to specify the necessary parameters.

![zohocrm-source-7](images/zohocrm-source-7.webp)

8. Specify the **Body Type**⑨.

![zohocrm-source-8](images/zohocrm-source-8.webp)

:::note
You can choose to use **Form-Data** or **Raw** from the picklist, to configure the body session.
:::

- **Raw:** If you choose the Raw Data option as the body type in the text editor, you have the flexibility to write your own data values. You can input data in various **Format**⑩ such as XML, JSON, HTML, or plain text. Additionally, you can utilize the # merge field feature to reference specific field values within the script.

![zohocrm-source-9](images/zohocrm-source-9.webp)

- **Form Data:** This feature enables you to construct the body section of the URL by seamlessly appending the parameter name, parameter type, or parameter value. You can create Form-Data in three distinct ways: **Module Parameters**⑪, **Custom Parameters**⑫, and **User defined Format**⑬.

![zohocrm-source-10](images/zohocrm-source-10.webp)

9. Once you have configured your settings, remember to **Save**⑭ them.

![zohocrm-source-11](images/zohocrm-source-11.webp)

---

#### Step 2: Associate webhook to a workflow rule

1. Select **Workflow Rules**①.

![zohocrm-source-12](images/zohocrm-source-12.webp)

2. Click on **Create Rule**②.

![zohocrm-source-13](images/zohocrm-source-13.webp)

3. Choose your **Module**③, provide a **Rule Name**④, and proceed by selecting **Next**⑤.

![zohocrm-source-14](images/zohocrm-source-14.webp)

4. Select **Record action**⑥.

![zohocrm-source-15](images/zohocrm-source-15.webp)

5. Select the **action**⑦ to record and click **Next**⑧.

![zohocrm-source-16](images/zohocrm-source-16.webp)

6. Specify the **CONDITION**⑨ to be met for the event to be triggered, and then click **Next**⑩.

![zohocrm-source-17](images/zohocrm-source-17.webp)

7. Select **Webhook**⑪.

![zohocrm-source-18](images/zohocrm-source-18.webp)

8. **Select**⑫ the created webhook and click on **Associate**⑬.

![zohocrm-source-19](images/zohocrm-source-19.webp)

9. Click **Save**⑭.

![zohocrm-source-20](images/zohocrm-source-20.webp)

10. Click **Next**⑮ and continue the configuration.

![zohocrm-source-21](images/zohocrm-source-21.webp)

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
