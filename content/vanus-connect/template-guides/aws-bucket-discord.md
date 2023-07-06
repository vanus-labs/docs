# Amazon EventBridge CreateBucket | DeleteBucket event triggers a Discord message

GitHub is the largest web-based platform that provides developers with a place to host and manage their software projects.

You can receive notifications when specific events occur in a repository by adding a GitHub Source on Vanus Connect.

This guide will help you get a Discord notification whenever someone opens a new pull request in your repository.

<iframe width="800" height="450" src="https://www.youtube.com/embed/JE9kcxfN9EQ" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source

- Log in to [Vanus Connect](https://cloud.vanus.ai/) and choose the **Amazon EventBridge CreateBucket | DeleteBucket event triggers a Discord message** template.

### Step 2: Configure Sink - Get the Discord Webhook URL

- Open Discord in your browser and go to your desired Discord Server.

- Go to the Server settings and click on **Integrations**.

- Click on **New Webhook**.

![2.png](imgs/github-issue-discord-2.PNG)

![3.png](imgs/github-issue-discord-3.PNG)

- Open the newly created Webhook and Copy the Webhook URL.

- Paste the URL you copied into the **"Webhook URL"** field within the Sink Configuration and click Submit.

- Your connection has been successfully set up.

### Step 3: Create an Event in AWS

- Open the newly created connection and copy the webhook URL.

![3.png](imgs/amazon-bucket-discord-3.PNG)

- Go to [AWS Console](https://console.aws.amazon.com/events/home) and log in with your root account.

- Search for the EventBridge service and open it.

![4.png](imgs/amazon-bucket-discord-4.PNG)

- Click on **Event Buses** on the left sidebar and click on **Create event bus**.

![5.png](imgs/amazon-bucket-discord-5.PNG)

- Give a name to the event bus and click **Create**.

![6.png](imgs/amazon-bucket-discord-6.PNG)

- Now, click on **Rules** on the left sidebar and click on **Create Rule**.

![7.png](imgs/amazon-bucket-discord-7.PNG)

- Give a name to the rule, select the event bus we have created in the Event bus option and click on **Next**.

![8.png](imgs/amazon-bucket-discord-8.PNG)

- Select All events and click Next.

![9.png](imgs/amazon-bucket-discord-9.PNG)

- Select **EventBridge API destination** in Target 1

- Select **Create a new API destination**.

![10.png](imgs/amazon-bucket-discord-10.PNG)

- Provide a name for the connection, then paste the copied URL into the **API destination endpoint** field, and finally, select **"POST"** from the HTTP Method option.

![11.png](imgs/amazon-bucket-discord-11.PNG)

- In Connection, select **Create a new connection** and give a name to the connection.

![12.png](imgs/amazon-bucket-discord-12.PNG)

- Select **Basic (Username/Password)** from the Authorization type option.

- Add your desired username and password and click Next.

![13.png](imgs/amazon-bucket-discord-13.PNG)

- Again, click Next in the **Configure Tags** section.

- Review the whole rule and click **Create rule**.

- Your connection will now work perfectly.
