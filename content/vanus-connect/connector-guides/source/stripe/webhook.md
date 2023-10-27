
# **Configuring Stripe to Send Webhook Events**

After creating the connection in Vanus Connect, we have to configure our connection to receives events from our Stripe.

1. Click on the **connection name**①.

![stripe_slack_14.webp](./images/stripe_slack_14.webp) 

2. **Copy**② the Webhook URL.

![stripe_slack_15.webp](./images/stripe_slack_15.webp) 

3. Go to your Stripe Developers Dashboard and select **Webhooks**③ tab.

![stripe_slack_16.webp](./images/stripe_slack_16.webp) 

4. Scroll down and click on **Add an endpoint**④.

![stripe_slack_17.webp](./images/stripe_slack_17.webp) 

5. Paste the **Endpoint URL**⑤ you copied previously, click on **Select events**⑥.

![stripe_slack_18.webp](./images/stripe_slack_18.webp)

6. Select **charge.succeeded**⑦ event and click on **Add events**⑧ button.

![stripe_slack_19.webp](./images/stripe_slack_19.webp) 


