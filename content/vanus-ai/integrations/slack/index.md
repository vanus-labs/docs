# Slack
This documentation will teach you how to integrate your AI into Slack.
Integration is a paid user feature. Therefore, only users with professional subscriptions and above can use integrations.

## How to Setup a Slack Integration

**Prerequisites:**

- Have a [Slack Account](https://slack.com).
- Have a [Vanus AI account](https://ai.vanus.ai).

### Step 1: Create an AI Application
1. Navigate to [Vanus AI](https://ai.vanus.ai) and log in.
2. Initiate a new AI App by hitting the **Create App** button.
   ![Image](images/1.png)
3. Input a name, select the model, upload to the knowledge base, then click **Create**.
   ![Image](images/2.png)
4. Select the **Integrations** tab and select the Slack integration.
   ![Image](images/slack-integration.png)
   ![Image](images/slack-integration-2.png)

In the next steps, we will go to Slack API website to create our Slack App and get the required credentials to make the connection.

### Step 2: Create a Slack App
1. Go to [Slack API](https://api.slack.com/apps), and click **Create New App**.
![img.png](images/create%20app.png)
2. Select From scratch.
![img_1.png](images/from%20scratch.png)
3. Set the App name and Workspace, then click the *Create App* button.
![img_2.png](images/slack-app-create.png)

### Step 3: Configure your App
1. Add **Permissions** feature for your app.
![img_3.png](images/permissions.png)
2. Scroll down to `Scopes/Bot Token Scopes`, and click **Add an OAuth Scope**.
![img_4.png](images/add%20auth%20scope.png)
3. Add `chat:write`, `chat:write:public`, `app_mentions:read` & `im:history` permission to your app.
![img_5.png](images/chat-write-public.png)
4. Scroll up to the top of the page, and click **Install to Workspace** to install your app.
![img_7.png](images/install%20to%20workspace.png)
5. Click **Allow** to install the app.
![img_8.png](images/install-workspace.png)
6. Copy the Bot User OAuth Token.
 ![img_9.png](images/copy%20token.png)
7. Paste the Bot User OAuth Token in the `Bot Token` field in Vanus AI
 ![](images/bot-token-1.png)
8. Click on the **Basic Information** tab, scroll down to **App-Level Tokens** and click on *Generate Tokens and Scopes*
![](images/app-token.png)
9. Give the token a name and click on the `Add Scope` button
![](images/app-token-1.png)
10. Select `connections:write` and click on the **Generate** button.
![](images/connection.png)
11. Copy the App-Level Tokens and paste in the `App Token` field in Vanus AI and click on the **Create** button
![](images/app-token-4.png)
12. Scroll up to **Socket Mode** tab and enable Socket Mode
![](images/socket.png)
13. Scroll down to **Event Subscriptions** tab, enable Event Subscription
![](images/event-sub.png)
14. Click on Subscribe to bot events, click on the **Add Bot User Event** and add `app_mention` & `message.im`. Click on **Save Changes** button.
![](images/event-sub2.png)


### Communicate with the AI.

- To communicate with the AI in a channel, you need to mention the AI using the `@` and the AI name, then ask your question.
![](images/communicate.png)


