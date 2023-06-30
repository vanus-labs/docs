### Configuring Zoho CRM to Send Webhook Events 

### Step 1: Configure webhook

1. Click the copy icon to copy the webhook url
![copy url](images/copy-webhook.png)

2. Log in to your [Zoho CRM account](https://crm.zoho.com/crm/org813836165/tab/Home/begin)

3. Navigate to the **Setup** page by clicking on the gear icon.
![setup](images/settings.png)

4. Click on **Actions**.
![actions](images/actions.png)

5. Click on **Webhooks**.
![webhooks](images/webhooks.png)

6. Click on the **Configure Webhook** button.
![wh config](images/configure-webhook.png)

7. Name your Webhook.
![wh name](images/name-webhook.png)

8. Provide the payload URL copied from your Zoho CRM source connector in Vanus Cloud and select **General** authorization type.
![add url](images/add-url.png)

9. Select the event you want to receive notification for.
![module](images/choose-module.png)

10. Specify the necessary parameters.
![param](images/add-parameter.png)

11. Specify the body type.
![body type](images/body-type.png)

*You can choose to use **Form-Data** or **Raw** from the picklist, to configure the body session*

#### Raw

![raw data](images/raw-data-option.png)

If you choose the Raw Data option as the body type in the text editor, you have the flexibility to write your own data values. You can input data in various formats such as XML, JSON, HTML, or plain text. Additionally, you can utilize the # merge field feature to reference specific field values within the script.

#### Form Data

![form data](images/form-data-option.png)

This feature enables you to construct the body section of the URL by seamlessly appending the parameter name, parameter type, or parameter value. You can create Form-Data in three distinct ways: **Module Parameters**, **Custom Parameters**, and **User-Defined Parameters**.

12. Save your settings.
![save settings](images/save-settings.png)

---

### Step 2: Associate webhook to a workflow rule

1. Select **Workflow Rules**.
![workflow rules](images/workflow-rules-1.png)

2. Click on **Create Rule**.
![create rule](images/create-rule.png)

3. Select the appropriate event. Name your rule and click **Next**.
![next](images/create-rule-1.png)

4. Specify workflow rule parameters.
![sp](images/workflow-rule-parameter.png)

5. Click **Next**.
![wp](images/set-workflow-param.png)

6. Specify the conditions to be met for the event to be triggered.
![conditions](images/complete-workflow-setup.png)

7. Click on **Instant Actions** and select **Webhook**.
![IA](images/select-webhook.png)

8. Select the required webhook and click on **Associate**.
![associate](images/select-webhook-url.png)

9. Click **Save**.
![final setting](images/save-final-settings.png)

:::note
You can navigate to **Webhooks** to monitor webhooks that have been successfully sent.
:::

![monitor webhook](images/monitor-sent-webhook.png)
