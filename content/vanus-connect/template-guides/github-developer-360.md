# Real-time GitHub Developer 360

GitHub is the largest web-based platform that provides developers with a place to host and manage their software projects.

You can receive data on Google Sheets when specific events occur in a repository by adding a GitHub Source on Vanus Cloud.

This guide will help you create a connection between Google Sheets and Github to recieve notification whenever someone does an action in your repository.

<iframe
  width="800"
  height="450"
  src="https://www.youtube.com/embed/FygBdoL3ld0"
  title="YouTube video player"
  frameBorder="0"
  allowFullScreen={true}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>

## Get Started

### Step 1: Configure the Source - Authorize GitHub and select a GitHub repo

- Log in to [Vanus Cloud](https://cloud.vanus.ai/) and choose the **Real-time GitHub Developer 360** template.

- Find the **Sign in with GitHub** button and authorize GitHub. Then, select the repo you want to configure.

![1.png](imgs/github-issue-discord-1.PNG)

### Step 2: Configure Sink

- Authorize your Google account

- Now go to Google Spread, create a new spreadsheet and copy the spreadsheet ID from the URL

- Paste the ID in the Spreadsheet ID in the connection setup

- Add your sheet name in the Default Sheet Name

- Click Submit. Your connection is now succesfully setup
