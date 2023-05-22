# ChatGPT

This guide contains information to set up a ChatGPT Source in Vanus Cloud.

## Introduction

ChatGPT is a large language model developed by OpenAI, based on the GPT-3.5 architecture.

ChatGPT Source is a Vanus-hosted ChatGPT service which works as an HTTP server to generate human-like responses to textual content from incoming HTTP requests,
and deliver responses to endpoints in the CloudEvents HTTP format.

---
## Prerequisites

Before obtaining ChatGPT events, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)

---

## Getting Started

### Create a Connection

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Write a name for your connection and choose your source. 
![img.png](images/choose%20source.png) 

4. Click the copy icon to copy the webhook url. 

5. Choose your sink and click **Next** 
![img.png](images/choose%20sink.png) 

6. Click on submit to finish the configuration. 
![](images/submit.png)  

7. You've successfully created your Vanus chatgpt source connection.  
![](images/created.png) 

---

### How to setup ChatGPT in Feishu 

1. Return into Feishu and search for `flow` or `飞书捷径` and click on it.
![img.png](images/chatimg.png)

2. Press **create**.
![img_1.png](images/chatimg_1.png)

3. Select the Trigger and choose **Message**.
![img_2.png](images/img_2.png)

4. Select `New message that mentioned BOT in the group chat`.
![img_3.png](images/img_3.png)

5. In group select **specific groups** Search for the group you've previously created, select your ChatGPT bot under bot and press **confirm**.
![img_5.png](images/img_5.png)

6. Select the action and choose webhook as the action.
![img_6.png](images/img_6.png)

7. Select Custom Request.
![img_7.png](images/img_7.png)

8. Select the method `POST`, set the URL using the URL from step 1, Select the Data `Message: Message content without the @ part`, and press **Confirm**.
![img_8.png](images/img_8.png)

9. press **Create**.
![img_9.png](images/img_9.png)

10. Name your flow and Confirm.
![img_10.png](images/img_10.png)

11. Now send a message in the group tagging the bot.
![img_11.png](images/img_11.png)


Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
