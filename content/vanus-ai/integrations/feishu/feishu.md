# Feishu

This documentation will teach you how to integrate your AI into Feishu.

Integration is a paid user feature. Therefore, only users with professional subscriptions and above can use integrations.

## How to Integrate Vanus AI in Feishu

**Prerequisites:**

- Have a [**Feishu Account**](https://feishu.cn).

- Have a [**Vanus AI account**](https://ai.vanus.ai).


### Step 1: Create an AI Application

1. Navigate to [**Vanus AI**](https://ai.vanus.ai) and Sign up with your **Github, Google, Microsoft Account**① or click **Sign up**②.  

![](images/vanusai1-signup.webp)  

2. Initiate a new AI App by hitting the **Create App**③ button.  

![Image](images/vanusai2-create-app.webp)  

3. Input an **App Name**④, select an **App Model**⑤, upload to the Knowledge Base⑥, then click **Create**⑦.

![Image](images/vanusai3-app-config.webp)

4. Select the **Integrations Tab**⑧ and select the **Feishu Integration**⑨.

![](images/vnausai4-integration.webp)

### Step 2: Create a Feishu App

- Visit the following website [**Feishu App**](https://open.feishu.cn/app) 
1. Click on **Create Custom App**①.

![](images/feishu0-website.webp)

2. Give your app a **Name**②  & **Description**③ and click **Create**④.

![](images/feishu1-create-custom-app.webp)

3. Under **Credentials & Basic Info**⑤, copy the **App ID**⑥ and **App Secret**⑦.

![](images/feishu2-copy-app-id-secret.webp)

4. Paste **App ID**⑧ and **App Secret**⑨ into each field.

![](images/feishu3-paste-key-id.webp)

5. Go to **Add Features**⑩ and click **+ Add**⑪ bot.

![](images/feishu4-add-bot.webp)

6. Now go to **Permissions & Scopes**⑫ and select **Messenger**⑬.

![](images/feishu5-permission.webp)

7. Scroll down and select **Read and send messages in private and group chats**⑭ and click **Add in Bulk**⑮.

![](images/feishu6-add-read-write.webp)
![](images/feishu6.2-add-in-bulk.webp)

8. Now go to **Event Subscriptions**⑯ and copy **Verification Token**⑰.

![](images/feishu7-verification-token.webp)

9. Optionally reset **Encrypt Key**⑱ for added security and copy it also.

![](images/feishu7.2-optional-encryptkey.webp)

10. Paste the **Verification Token**⑲. **Encrypt Key**⑳ into Vanus AI and press **Create**㉑.

![](images/feishu8-paste-token.webp)

11. Copy the **Webhook Url**㉒ in Vanus AI.

![](images/feishu9-webhook-copy.webp)

12. Click the icon of **Request URL configuration** 📝㉓, paste the **Webhook Url**㉔ and press Save㉕.

![](images/feishu10-clickurl.webp)
![](images/feishu10.2-save.webp)

13. Now click **Add Events**㉖.

![](images/feishu12-add-events.webp)

14. Select **Messenger**㉗, **Message received**㉘ and press **Confirm**㉙.

![](images/feishu13-message-received.webp)

15. Now add **Read private messages sent to the bot**㉚ and **Read group chat messages mentioning the bot**㉛ by clicking on them both.

![](images/feishu14-add-permissions.webp)

16. Press **Add**㉜ for each of them.


![](images/feishu15-click-add.webp)

⚠ Verify that you have these 2 events.❗

![](images/feishu16-confirm.webp)

17. Now click **Create Version** ㉝  to publish your app.

![](images/feishu17-publish%20app.webp)

18. Set **App version**㉞ to `1.0.0`, add **Update note**㉟  and click **Save**㊱.

![](images/feishu18-finish-publish-app.webp)

19. Your Feishu admin will need to approve the release request.

![](images/feishu19-app-approved.webp)

### Step 3: Invite Feishu Bot

1.  Create a **New Group**①② chat.

![1.png](images/feishu-1.webp)

2.  In the Feishu group click `...`③  and then **Settings**④.

![2.png](images/feishu-2.webp)

3.  Now click **Bots**⑤.

![](images/feishu-3.webp)

4.  Search for your app name `Vanus AI`⑥ and Click on **Vanus AI**⑦.

![](images/feishu-4.webp)

5. Invite your bot by clicking **Add**⑧.

![](images/feishu-5.webp)

6. Send a question to your bot by tagging him using `@`.

![](images/feishu-6.webp)