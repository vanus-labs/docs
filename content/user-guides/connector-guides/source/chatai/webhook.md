# **How to Use the Webhook URL to Send Message to ChatAI**

- Click the **copy icon** to copy the webhook url.
   ![](images/getlink.png)

You can use your Webhook URL to send message to ChatAI using ChatGPT or Ernie Bot.

Here is a Example of a CURL Post Request of a CloudEvent.
```shell
curl \
-H "unique_identifier:value"  \
-H "Authorization: Basic base64(yourusername:yourpassword)"
-XPOST 'https://YourWebbookURL' \
-D'What is CloudEvents?'
```

Learn more about [CloudEvents](https://cloudevents.io).