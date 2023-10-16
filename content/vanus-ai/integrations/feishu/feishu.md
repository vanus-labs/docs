# Feishu

This documentation will teach you how to integrate your AI into Feishu.

Integration is a paid user feature. Therefore, only users with professional subscriptions and above can use integrations.

## How to Integrate Vanus AI in Feishu

**Prerequisites:**

- Have a [**Feishu Account**](https://feishu.cn).

- Have a [**Vanus AI account**](https://ai.vanus.ai).


### Step 1: Create an AI Application

1. Navigate to [**Vanus AI**](https://ai.vanus.ai) and Sign up with your **Github, Google, Microsoft Account**① or click **Sign up**②.  

![](images/integration_vanus_1.webp)

2. Initiate a new AI App by hitting the **Create App**③ button.  

![](images/integration_vanus_2.webp)

3. Input an **App Name**④, select an **App Model**⑤, upload to the Knowledge Base⑥, then click **Create**⑦.

![](images/integration_vanus_3.webp)

If you find yourself uncertain about which app model to select, please refer to the [**Large Language Models (LLM) Documentation**](https://docs.vanus.ai/vanus-ai/beginning/large-language-models/) for clear guidance on choosing the most suitable LLM for your requirements.

4. Select the **Integrations Tab**⑧ and select the **Feishu Integration**⑨.

![](images/integration_vanus_4.webp)

### Step 2: Create a Feishu App

- Visit the following website [**Feishu App**](https://open.feishu.cn/app) 
1. Click on **Create Custom App**①.

![](images/integration_feishu_1.webp)

2. Give your app a **Name**②  & **Description**③ and click **Create**④.

![](images/integration_feushu_2.webp)

3. Under **Credentials & Basic Info**⑤, copy the **App ID**⑥ and **App Secret**⑦.

![](images/integration_feushu_3.webp)

4. Paste **App ID**⑧ and **App Secret**⑨ into each field.

![](images/integration_feushu_4.webp)

5. Go to **Add Features**⑩ and click **+ Add**⑪ bot.

![](images/integration_feushu_5.webp)

6. Now go to **Permissions & Scopes**⑫ and select **Messenger**⑬.

![](images/integration_feushu_6.webp)

7. Scroll down and select **Read and send messages in private and group chats**⑭ and click **Add in bulk**⑮.

![](images/integration_feushu_7.webp)
![](images/integration_feushu_8.webp)

8. Now go to **Event Subscriptions**⑯ and copy **Verification Token**⑰. Optionally reset **Encrypt Key**⑱ for added security and copy it also.

![](images/integration_feushu_9.webp)

9. Paste the **Verification Token**⑲. **Encrypt Key**⑳ into Vanus AI and press **Create**㉑.

![](images/integration_feushu_10.webp)

10. Copy the **Webhook Url**㉒ in Vanus AI.

![](images/integration_feushu_11.webp)

11. Click the icon of **Request URL configuration** 📝㉓, paste the **Webhook Url**㉔ and press Save㉕.

![](images/integration_feushu_12.webp)
![](images/integration_feushu_13.webp)

12. Now click **Add Events**㉖.

![](images/integration_feushu_14.webp)

13. Select **Messenger**㉗, **Message received**㉘ and press **Confirm**㉙.

![](images/integration_feushu_15.webp)

14. Now add **Read private messages sent to the bot**㉚ and **Read group chat messages mentioning the bot**㉛ by clicking on them both.

![](images/integration_feushu_16.webp)

15. Press **Add**㉜ for each of them.

![](images/integration_feushu_17.webp)

⚠ Verify that you have these 2 events.❗

![](images/integration_feushu_18.webp)

16. Now go to **Version Management & Release**㉝ and click **Create Version**㉞   to publish your app.

![](images/integration_feushu_19.webp)

17. Set **App version**㉟ to `1.0.0`, add **Update Notes**㊱  and click **Save**㊲.

![](images/integration_feushu_20.webp)

18. Your Feishu admin will need to approve the release request.

![](images/integration_feushu_21.webp)

### Step 3: Invite Feishu Bot

1.  Create a **New Group**① chat.

![](images/integration_feushu_22.webp)

2.  In the Feishu group click `...`②  and then **Settings**③.

![](images/integration_feushu_23.webp)

3.  Now click **Bots**④.

![](images/integration_feushu_24.webp)

4. Click **Add Bot**⑤.

![](images/integration_feushu_25.webp)

5.  Search for your app name `Vanus AI`⑥ and Click on **Vanus AI**⑦.

![](images/integration_feushu_26.webp)

6. Invite your bot by clicking **Add**⑧.

![](images/integration_feushu_27.webp)

7. Send a question to your bot by tagging him using `@`.

![](images/integration_feushu_28.webp)