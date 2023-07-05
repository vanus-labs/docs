# GitHub star event triggers a Discord message

GitHub is the largest web-based platform that provides developers with a place to host and manage their software projects.

You can receive notifications when specific events occur in a repository by adding a GitHub Source on Vanus Connect.

This guide will help you get a Discord notification whenever someone star your repository.

<iframe width="800" height="450" src="https://www.youtube.com/embed/RFSzJmkPa8Y" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source - Authorize GitHub and select a GitHub repo

- Log in to [Vanus Connect](https://cloud.vanus.ai/) and choose the **GitHub star event triggers a Discord message** template.

- Find the **Sign in with GitHub** button and authorize GitHub. Then, select the repo you want to configure.

![1.png](imgs/github-issue-discord-1.PNG)

### Step 2: Configure Sink - Get the Discord Webhook URL

- Open Discord in your browser and go to your desired Discord Server

- Go to the Server settings and click on Integrations

- Click on New Webhook. Open the newly created Webhook and Copy the Webhook URL

![2.png](imgs/github-issue-discord-2.PNG)

![3.png](imgs/github-issue-discord-3.PNG)

### Step 3: Configure Subscription

- Go back to Vanus Connect website and scroll down to Sink Configuration

- Paste the copied URL in the Webhook URL section and click Submit

- Your connection has been succesfully created

Note: You can customize the display format and content of the notifications by configuring the **Subscription**.

- After submission, the status will show as **running**

### Result Display

- When a user will star your repository, you will receive a real-time GitHub Issue Notification on Discord.
