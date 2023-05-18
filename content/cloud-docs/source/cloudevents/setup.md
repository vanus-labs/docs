# Getting Started

Perform the following steps to configure your CloudEvents Source:

## Create your connection in Vanus Cloud

To set up CloudEvents in Vanus Cloud, follow these steps:

1.  Write a name for your connection.
![](images/1.png) 
2. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction.
![img.png](images/2.png)
3. Click **`Next`** to save the Grafana Source. 

## **Send CloudEvents**
- Click the **copy icon** to copy the webhook url.
   ![](images/getlink.png)
You can use your Webhook URL to send CloudEvents.

Here is a Example of a Curl Post Request of a CloudEvent.
```shell
curl --location --request POST 'https://YourWebHookURL.com' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
"id": "53d1c340-551a-11ed-96c7-8b504d95037c",
"source": "quickstart",
"specversion": "1.0",
"type": "quickstart",
"datacontenttype": "application/json",
"time": "2022-10-26T10:38:29.345Z",
"data": {
"myData": "simulation event data"
}
}'
```

Learn more about [CloudEvents](https://cloudevents.io).

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
