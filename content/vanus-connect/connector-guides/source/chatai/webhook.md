# How to Use the Webhook URL to Send Message to ChatAI

- Click the **copy icon**① to copy the webhook URL.

![chatai-source-5](images/chatai-source-5.webp)

Ask a question to ChatAI by sending a POST Request to the Webhook URL. Below I will share with you how to send a simple curl Post Request to the address.

Here is an Example of a curl Post Request of a CloudEvent.
```shell
curl \
-H "unique_identifier:value"  \
-H "Authorization: Basic base64(yourusername:yourpassword)"
-XPOST 'https://YourWebbookURL' \
-D'What is CloudEvents?'
```

Learn more about [**CloudEvents**](https://cloudevents.io).
