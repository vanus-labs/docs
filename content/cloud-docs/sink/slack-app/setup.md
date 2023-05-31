--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [slack account](https://slack.com)
- A slack[ Workspace](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)

---

**Perform the following steps to configure your Slack Sink.**

### Step 1: Create a Slack App
1. Go to [Slack API](https://api.slack.com/apps), and click **Create New App**.
![img.png](images/create%20app.png)
2. Select From scratch.
![img_1.png](images/from%20scratch.png)
3. Set the app name and Workspace.
![img_2.png](images/create%20app2.png)


---

### Step 2: Configure your App
1. Add **Permissions** feature for your app.
![img_3.png](images/permissions.png)
2. Scroll down to `Scopes/Bot` Token Scopes, and click **Add an OAuth Scope**.
![img_4.png](images/add%20auth%20scope.png)
3. Add `chat:write` permission to your app.
![img_5.png](images/img_5.png)
4. Notice: we only need a `chat:write` permission in Bot Token Scopes.
![img_6.png](images/img_6.png)
5. Scroll up to the top of the page, and click **Install to Workspace** to install your app.
![img_7.png](images/install%20to%20workspace.png)
6. Click **Allow** to install the app.
![img_8.png](images/allow.png)
7. Copy the Bot User OAuth Token.
 ![img_9.png](images/copy%20token.png)

---

### Step 3: Slack App Connection Settings
1. Paste the Bot User OAuth Token.
![img_10.png](images/input%20token.png)
2. Click **Next** to continue.

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
