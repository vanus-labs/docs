# **How to setup ChatGPT in Feishu**

1.  Click the copy icon to copy the **Webhook URL**❶.
    ![11.png](images/11.png)
2.  Return into Feishu and search for **Feishu Flow**❷❸ or **飞书捷径** and click on it.
    ![12.png](images/12.png)
3.  Press **Create** **Bot Command**❹.
    ![13.png](images/13.png)
4.  **Select a Trigger**❺.
    ![14.png](images/14.png)
5.  **Select** `When a New message that mentioned BOT in the group chat`❻.
    ![15.png](images/15.png)
6.  In group select **Specific groups**❼ Search for the group you've previously created, select your ChatGPT bot under **Bot**❽ , select **All of my contacts**❾ and click the **Done**❿.
    ![16.png](images/16.png)
7.  **Select an action**⓫ and choose `Webhook(Send HTTP request)`⓬ as the action.
    ![17.png](images/17.png)
    ![18.png](images/18.png)
8.  Select the **Method** `POST`⓭. Set the URL⓮ using the URL from step 1❶. Select the **Data type** `plain`⓯, Select the **Body** `When a new message mentions BOT in group chat/Source content(mention @ part remove)`⓰, and press **Done**⓱.&#x20;
    ![19.png](images/19.png)
9.  Press **Enable**⓲, And name your flow and **Confirm**⓳.
    ![20.png](images/20.png)
10. Press **My commands**⓴, and make sure your bot is open.
    ![21.png](images/21.png)
11. Now send a message in the group tagging the bot.
    ![22.png](images/22.png)
