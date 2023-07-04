# Auth0 login event triggers a Discord message

Auth0 is one of the largest authorization service provider which helps you add authorization page in your projects

You can receive notifications when specific events occur in a your Auth0 account.

This guide will help you get a Discord notification message whenever someone login in your Auth0 setup.

<iframe width="800" height="450" src="https://www.youtube.com/embed/2sW2pmJlQfI" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source

- Log in to [Vanus Connect](https://cloud.vanus.ai/) and choose the **Auth0 login event triggers a Discord message** template.

### Step 2: Configure Sink - Get the Discord Webhook URL

- Open Discord in your browser and go to your desired Discord Server

- Go to the Server settings and click on Integrations

- Click on New Webhook. Open the newly created Webhook and Copy the Webhook URL

![2.png](imgs/github-issue-discord-2.PNG)

![3.png](imgs/github-issue-discord-3.PNG)

- Paste the copied URL in the "Webhook URL" in Sink Configuration and click Submit

- Your connection has been successfully setup

### Step 3: Create a Custom Webhook in Auth0

- Open the newly created connection and copy the webhook URL

![3.png](imgs/auth0-login-slack-3.PNG)

- Go to Auth0 and login with your account

![4.png](imgs/auth0-login-slack-4.PNG)

- Go to Montioring on the left sidebar and click on Streams

![5.png](imgs/auth0-login-slack-5.PNG)

- Click on Create Log Stream and Select the Custom Webhook option

![6.png](imgs/auth0-login-slack-6.PNG)

- Give a name to your custom webhook and click Create

- Paste the copied URL in the Payload URL

![8.png](imgs/auth0-login-slack-8.PNG)

- Make sure the Content Format is selected as JSON Lines

![9.png](imgs/auth0-login-slack-9.PNG)

- In the Filter by Event Category, select your desired filter and click apply

![10.png](imgs/auth0-login-slack-10.PNG)

- Finally, scroll down and click on Save

- Your connection will now work perfectly.
