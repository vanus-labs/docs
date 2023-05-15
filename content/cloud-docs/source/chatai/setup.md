## Getting Started

### Set up your connection in Vanus Cloud

1. Write a name for your connection.  
    ![img.png](images/connection.png)  

2. Fill in the various required configurations
    - **Chat Mode:** Select Chat Mode (ChatGPT or Ernie Bot), Default is ChatGPT
    - **Context (optional):** Select Context as on if you want the AI to remember previous conversations
    - **Unique Identifier (optional):** The unique identifier differentiates among multiple conversations using the same Connection. Example identifier: convo1 identifier: convo2...
    - **Basic Auth Username (optional):** A method for an HTTP user agent to provide a username when making a request.
    - **Basic Auth Password (optional):** A method for an HTTP user agent to provide a password when making a request.  
    ![img.png](images/chatai-config.png)  

3. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction. 
   ![img.png](images/webhook_setup.png)  

4. Click **`Next`** to save the ChatAI Source. 

### **How to Use the Webhook URL to Send Message to ChatAI**

- Click the **copy icon** to copy the webhook url.  
   ![](images/getlink.png)  

Ask a question to ChatAI by sending a POST Request to the Webhook URL. Below I will share with you how to send a simple curl Post Request to the address.

Here is a Example of a curl Post Request of a CloudEvent.
```shell
curl \
-H "unique_identifier:value"  \
-H "Authorization: Basic base64(yourusername:yourpassword)"
-XPOST 'https://YourWebbookURL' \
-D'What is CloudEvents?'
```

Learn more about [CloudEvents](https://cloudevents.io).

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
