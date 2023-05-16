# Send a custom greeting message when new members join the Slack channel

Slack is the one of the largest platform that provides developers and businesses to communicate with each other and collabratively work on projects

You can send greeting messages to every new member that joins your Slack community

This guide will increase the engagement on your Slack community

<iframe width="800" height="450" src="https://www.youtube.com/watch?v=DnO5ChQ44UA" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source

- Log in to [Vanus Cloud](https://cloud.vanus.ai/) and choose the **Send a custom greeting message when new members join the Slack channel** template.

![1.png](./imgs/slack-schedule-message-1.png)

### Step 2: Submit the Keys

- Open Slack API on your browser, and click on Your apps

![2.png](./imgs/slack-schedule-message-2.png)

- Click on Create new app and select the "From scratch" option

![3.png](./imgs/slack-schedule-message-3.png)

- App your desired app name and select the Slack workspace and click Create App

![4.png](./imgs/slack-schedule-message-4.png)

- App will created, now scroll down the page and you will see "Signing Secret" and "Verification Token" sections

![5.png](./imgs/slack-schedule-message-5.png)

- Copy these two keys and paste in the Source configuration part and click on Next

### Step 3: Configure the Sink

- Now create add a webhook into your Slack App

Tip: For detailed steps on how to obtain the Slack Webhook URL, refer to the blog [Get Your Slack Webhook URL - A Quick Integration Guide](https://www.vanus.ai/blog/get-your-slack-webhook-url/).

![6.png](./imgs/slack-schedule-message-6.png)

- Copy the created Webhook URL and paste it in the Webhook Url section in Sink Configuration

![7.png](./imgs/slack-schedule-message-7.png)

- Click Submit. Your connection has been succesfully created

### Step 4: Configure the Event Subscription

- Open the newly created connection and copy the webhook Url

![8.png](./imgs/slack-schedule-message-8.png)

- Go back the App on Slack API and open the Event Subscription from left sidebar

![9.png](./imgs/slack-schedule-message-9.png)

- Turn on the Enable Events feature and paste the copied URL in the Request URL section

- Scroll down and open the Subscribe to bot events feature

- Click on "Add Bot User Event" and select the "member_joined_channel" option and click on Save Changes

![10.png](./imgs/slack-schedule-message-10.png)

- You will recieve a notification to reinstall your app, click on it

![11.png](./imgs/slack-schedule-message-11.png)

- Select the Slack Channel and click on Allow

- You will recieve a notification of Success. Your connection is working now

![12.png](./imgs/slack-schedule-message-12.png)

- Now we need to add the bot to the Slack Channel

- For this, go to Slack Workspace andd tag the Bot in the chat

- Click on Add to channel and it's done

### Result Display

- When a new member will join the Slack community, he will get a greeting message

![6.png](./slack-schedule-message-3.png)
