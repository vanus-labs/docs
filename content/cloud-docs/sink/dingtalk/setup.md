#  
# Prerequisites

Before forwarding events to Ding Talk, you must have:

- A Ding Talk account with administrative privileges

---

**Perform the following steps to configure your dingtalk Sink:**


**To set up a bot for receiving events in your Ding Talk group chat:**
# Step 1: Create a Group

1. Log in to your Ding Talk account.
2. Create a **new group** go to the `+` and select **New Chat**.
   ![img.png](images/img.png)
3. Now click **发起群聊**.
   ![](images/img_1.png)
4. Click **外部群**.
   ![](images/img_2.png)
5. Select **minimum 2 members** of your team to create a group, set a group name and press **Ok**.
   ![](images/img_3.png)

---

# Step 2: Add Bot to Ding Talk Group

1. In the top navigation pane, click **Robot Management**.
![](images/img_4.png)
2. In the **Robot Management** page, click **Custom**.
![](images/img_5.png)
3. In the **Robot details** page, click **Add**.
![](images/img_6.png)
4. In the **Add Robot** dialog:
![](images/img_7.png)
   - In the **Chatbot name** field, provide a name for the robot.
   - In the **Add to Group** field, select the target group in which the Robot will create.
   - In the **Security Settings** field, selected the **Additional Signature**, copy the signature and paste it Vanus Cloud.
   - Accept the Terms of Service.
   - Click **Finished**.
5. Now click **Copy**, keep the Webhook URL safely and click **Finished**.
![](images/img_8.png)

---

# Step 3: Set up the Ding Talk Sink connector in Vanus Cloud

1. **Webhook URL**: The webhook address that message sent to, you can get it when you create Chat Bot. You retrieved above.
2. **Signature Verification**: The signature to sign request, you can get it when you create Chat Bot. You retrieved above.
![](images/img_9.png)

Click **Next** to continue.

---

# Required Data Format
The event data must be JSON format, here a simple message, example:

```json
{
    "id": "53d1c340-551a-11ed-96c7-8b504d95037c",
    "source": "sink-Dingtalk-quickstart",
    "specversion": "1.0",
    "type": "quickstart",
    "datacontenttype": "text/plain",
    "time": "2022-10-26T10:38:29.345Z",
    "xvchatgroup": "bot1",
    "xvmsgtype": "text",
    "data": "Hello dingtalk"
}
```
