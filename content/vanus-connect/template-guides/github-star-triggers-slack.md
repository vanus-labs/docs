# GitHub Star event triggers a Slack message

GitHub is the largest web-based platform that provides developers with a place to host and manage their software projects.

You can receive notifications when specific events occur in a repository by adding a GitHub Source on Vanus Cloud.

This guide will help you get a Discord notification whenever a user Star your Github repository.

<iframe width="800" height="450" src="https://www.youtube.com/watch?v=rdVSI0yRrUo" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source - Authorize GitHub and select a GitHub repo

- Log in to [Vanus Cloud](https://cloud.vanus.ai/) and choose the **GitHub Star event triggers a Slack message** template.

- Find the **Sign in with GitHub** button and authorize GitHub. Then, select the repo you want to configure.

![1.png](imgs/github-issue-discord-1.PNG)

### Step 2: Configure Sink - Get the Slack Webhook URL

- Open Slack API in your browser, create a Webhook URL and copy it

Tip: For detailed steps on how to obtain the Slack Webhook URL, refer to the blog [Get Your Slack Webhook URL - A Quick Integration Guide](https://www.vanus.ai/blog/get-your-slack-webhook-url/).

![2.png](imgs/github-star-slack-2.PNG)

### Step 3: Configure Subscription

- Go back to Vanus Cloud webiste and scroll down to Sink Configuration

- Paste the copied URL in the Webhook URL section and click Submit

- Your connection has been succesfully created

![3.png](imgs/github-star-slack-3.PNG)

Note: You can customize the display format and content of the notifications by configuring the **Subscription**.

- After submission, the status will show as **running**. Now everytime users Star your repository, you will instantly recieve a customized notification message

### Result Display

![4.png](imgs/github-star-slack-4.PNG)
