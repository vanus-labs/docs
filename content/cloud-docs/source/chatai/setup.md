#  
# Prerequisites
- Have the ability to send HTTP request.

---

**Perform the following steps to configure your ChatAI Source:**

# Set up your connection in Vanus Cloud

1. Write a name for your connection.  
   ![img.png](images/connection.png)

2. Fill in the various required configurations
    - **Chat Mode:** Select Chat Mode (ChatGPT or Ernie Bot), Default is ChatGPT
    - **Context (optional):** Select Context as on if you want the AI to remember previous conversations
    - **Unique Identifier (optional):** The unique identifier differentiates among multiple conversations using the same Connection. Example identifier: convo1 identifier: convo2...
    - **Basic Auth Username (optional):** A method for an HTTP user agent to provide a username when making a request.
    - **Basic Auth Password (optional):** A method for an HTTP user agent to provide a password when making a request.  
      ![img.png](images/chatai-config.png)

3. Save the Webhook URL, after finish the connection you will be able to send HTTP request to it.
   
### Here is an example

```shell
curl -i https://example.com \  # The Webhook URL 
 -H "identifier:tag" \  # Optional needed if you added a Identifier.
 -u johndoe:12345 \  # Optional needed if you added a username and password
 -X POST -d "When was the internet invented"  # The question you want to ask the AI
```

4. Click **Next** and continue the configuration.

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
