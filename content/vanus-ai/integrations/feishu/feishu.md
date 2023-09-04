# Feishu
This documentation will teach you how to integrate your AI into Feishu.
Integration is a paid user feature. Therefore, only users with professional subscriptions and above can use integrations.

## How to Setup a Feishu Integration

**Prerequisites:**

- Have a [Feishu Account](https://feishu.cn).
- Have a [Vanus AI account](https://ai.vanus.ai).


### Step 1: Create an AI Application
1. Navigate to [Vanus AI](https://ai.vanus.ai) and log in.
2. Initiate a new AI App by hitting the **Create App** button.
   ![Image](images/1.png)
3. Input a name, select the model, upload to the knowledge base, then click **Create**.
   ![Image](images/2.png)
4. Select the **Integrations** tab and select the Feishu integration.
![](images/vanus-ai.png)

# step 2: Create a Feishu App
1. Visit the following website [Feishu App](https://open.feishu.cn/app).
2. Click the **Create Custom App** button.

3. Give your app a name & description and click **Create**.
![](images/feishu1-create-custom-app.png)
4. Under **Credentials & Basic Info**, copy the **App ID** and **App Secret**.
![](images/feishu2-copy-app-id-secret.png)
5. Paste the two keys into Vanus AI.
![](images/feishu3-paste-key-id.png)
6. Go to **Add Features** and click **+Add** bot.
![](images/feishu4-add-bot.png)
7. Now go to **Permissions & Scopes** and select **Messenger**.
![](images/feishu5-permission.png)
8. Scroll down and select `Read and send messages in private and group chats`and click **Add in Bulk**.
![](images/feishu6-add-read-write.png)
9. Now go to **Event Subscriptions** and copy Verification Token.
![](images/feishu7-verification-token.png)
10. Optionally reset **Encrypt Key** for added security and copy it also.
![](images/feishu7.2-optional-encryptkey.png)
11. Paste the **Verification Token**, **Encrypt Key** into Vanus AI and press **Create**.
![](images/feishu8-paste-token.png)
12. Copy the **Webhook Url** in Vanus AI.
![](images/feishu9-webhook-copy.png)
13. Click the icon of **Request URL configuration** 📝, paste the Webhook Url and press Save.
![](images/feishu10-clickurl.png)
14. Now click Add Events.
![](images/feishu11-paste-webhookurl.png)
15. Select **Messenger**, **Message received** and press **Confirm**.
![](images/feishu12-add-events.png)
16. Now add **Read private messages sent to the bot** and **Read group chat messages mentioning the bot** by clicking on them.
![](images/feishu13-message-received.png)
17. Press **Add** for each of them.
![](images/feishu14-add-permissions.png) 
![](images/feishu15-click-add.png)
18. Verify that you have these 2 events.
![](images/feishu16-confirm.png)
19. Now click **Create Version** to publish your app.
![](images/feishu17-publish app.png)
20. Set **App version** to `1.0.0`, add **Update note** and click save.
![](images/feishu18-finish-publish-app.png)
21. Your admin will need to approve the release request.
![](images/feishu19-app-approved.png)

# step 3: Invite Feishu Bot
1.  Create a **New Group**❶❷ chat.
    ![1.png](images/feishu-1.png)
2.  In the Feishu group click `...`❸  and then **Settings**❹.
    ![2.png](images/feishu-2.png)
3.  Now click **Bots**❺.
    ![3.png](images/3.png)
4.  Click on **Add Bot** and search for your bot name.
![](images/feishu24-invitebot-search-app.png)
5. Invite your bot by clicking add.
![](images/feishu25-invitebot-add.png)
6. Send a question to your bot by tagging him in your question.
7. ![](images/feishu26-final-result.png)