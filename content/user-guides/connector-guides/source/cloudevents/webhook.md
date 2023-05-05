# **Send CloudEvents**
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