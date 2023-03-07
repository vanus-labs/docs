---
title: Build a notification system that pushes any Github event to Slack in 5 minutes
authors: Lucas
tags: ['GitHub', 'Message Queue', 'slack', 'notification']
---

## Build a notification system that pushes any GitHub event to Slack in 5 minutes

If you have an open-source project on GitHub, you definitely need to know who is attracted to your project in real-time. For example, whether someone has starred the project or submitted an Issue or a PR. How can we get the status of open-source projects in real-time? It is obviously not a good way to keep checking the GitHub page.

This article will help open-source enthusiasts to deliver any Github events to Slack through Vanus in real-time. In this way, developers can know the status of open source projects in real-time without logging in to GitHub, so that developers can quickly respond to the following GitHub events.

This article will show how to do this in 5 minutes on playground with Vanus and Vanus Connect. The results are shown below:

![GitHub-to-Slack-Result](./img/GitHub-to-Slack-Result.gif)



## Table of Contents

- [What is GitHub](#what-is-github)
  - [About GitHub](#about-github)
  - [What are GitHub events](#what-are-github-events)
  - [Why need GitHub events](#why-need-github-events)
- [What is Slack](#what-is-slack)
- [How to Connect GitHub to Slack](#how-to-connect-github-to-slack)
  - [Prerequisites](#prerequisites)
  - [Step 1: Deploying Vanus in the playground](#step-1-deploying-vanus-in-the-playground)
  - [Step 2: Deploy the GitHub source connector](#step-2-deploy-the-github-source-connector)
  - [Step 3: Creating a Slack app](#step-3-creating-a-slack-app)
  - [Step 4: Deploy the Slack sink connector on Kubernetes](#step-4-deploy-the-slack-sink-connector-on-kubernetes)
- [Test result](#test-result)
- [Conclusion](#conclusion)
## What is GitHub
### About GitHub

GitHub is an online software development platform. It's used for storing, tracking, and collaborating on software projects. It makes it easy for developers to share code files and collaborate with fellow developers on open-source projects. GitHub also serves as a social networking site where developers can openly network, collaborate, and pitch their work.

Since its founding in 2008, GitHub has acquired millions of users and established itself as a go-to platform for collaborative software projects. This free service comes with several helpful features for sharing code and working with others in real-time.

### What are GitHub events

When developers operate on GitHub, events will be generated, such as submitting Issues, submitting PR, committing code, etc. Common GitHub event types are as follows:

- Issue event: create, delete, closed, as signed, unsigned, labeled, unlabeled, etc.
- PR event: create, delete, closed, merged, edited, review requested, commit, etc.
- Comments event: PR comments, Issue comments, commit comments.
- Stars event: a star is created or deleted from the repository.
- Version releases event: release created, edited, published, unpublished, or deleted.
- Wiki events: Wiki page updated.
- The team adds: team added or modified on a repository.
- Discussions event: created, edited, pinned, unpinned, locked, unlocked, transferred, answered, etc.
- Labels event: label created, edited, or deleted.
- Milestone event: milestone created, closed, opened, edited, or deleted.
- Code scanning alerts: code scanning alerts are created, fixed in a branch, or closed.

### Why need GitHub events

GitHub events provide an easy way to keep track of your GitHub repository without monitoring its status manually. They’re basically a notification system that offers a high level of customizability.

Through GitHub events, you can learn a lot in real time, such as who starred the project, who submitted the PR, and whether a new version was released. At the same time, GitHub events can also trigger some operations, such as compiling code, automatic deployment, security checks, and so on.

## What is Slack
Slack is an all-purpose communication platform and collaboration hub. It includes instant messaging, voice and video calls, and a suite of tools to help groups share information and work together.
 A Slack workspace is your team's home, similar to a dashboard .Slack Channels are shared group chat rooms for members of a workspace. Users can communicate with the entire team or certain team members in various channels.
## How to Connect GitHub to Slack

### Prerequisites

- [Playground](https://play.linkall.com/): an online k8s environment where Vanus can be deployed.
- GitHub: your open-source repository.
- Slack: a working Slack account.

### Step 1: Deploying Vanus in the playground

1 Enter the [login page](https://play.linkall.com/) and click the continue with Github button to log in with the GitHub account.

![playground-login](./img/playground-login.jpeg)

2  Wait for the automatic deployment of Kubernetes to complete, about 30 sec.

![playground](./img/playground.jpeg)

3 Deploy Vanus to the terminal on the right side of the web page.

```Shell
kubectl apply -f https://dl.vanus.ai/all-in-one/v0.6.0.yml
```

 Verify: 

```Plain
 $ watch -n2 kubectl get po -n vanus
vanus-controller-0               1/1     Running   0          96s
vanus-controller-1               1/1     Running   0          72s
vanus-controller-2               1/1     Running   0          69s
vanus-gateway-8677fc868f-rmjt9   1/1     Running   0          97s
vanus-store-0                    1/1     Running   0          96s
vanus-store-1                    1/1     Running   0          68s
vanus-store-2                    1/1     Running   0          68s
vanus-timer-5cd59c5bf-hmprp      1/1     Running   0          97s
vanus-timer-5cd59c5bf-pqkd5      1/1     Running   0          97s
vanus-trigger-7685d6cc69-8jgsl   1/1     Running   0          97s
```

4 Install vsctl (the command line tool).

```Plain
curl -O https://dl.vanus.ai/vsctl/latest/linux-amd64/vsctl
chmod ug+x vsctl
mv vsctl /usr/local/bin
```

5  Set the endpoint for vsctl to access Vanus.

```Plain
export VANUS_GATEWAY=192.168.49.2:30001
```

6 Create eventbus.

```Plain
$ vsctl eventbus create  github-slack
+----------------+-------------+
|     RESULT     |   EVENTBUS  |
+----------------+-------------+
| Create Success | github-slack|
+----------------+-------------+
```

### Step 2: Deploy the GitHub source connector

1 Create webhook in GitHub repo.

![create-webhook](./img/create-webhook.jpeg)

 **Payload URL** *

```
Get your payload URL in the GitHub to Twitter scenario under Payload URL.
Example: http://ip10-1-53-4-cfie9skinko0oisrvrq0-8082.direct.play.linkall.com
```

This is the address of the GitHub source connector that can be accessed by the public network provided by playground. GitHub can directly push events to the GitHub source connetor provided by Vanus through this address. If developers need to deploy in their own environment, they need to provide an address that can be accessed by the public network.

**Content type**

```
application/json
```

**Which events would you like to trigger this webhook?**

```
Send me everything.
```

2 Set config file

 Create config.yml in any directory, the content is as follows:

```Plain
"target": "http://192.168.49.2:30002/gateway/github-slack"
"port": 8082
```

3 Deploy the GitHub source connector and run the following command in the same directory.

```Plain
docker run -it --rm --network=host \
  -v ${PWD}:/vanus-connect/config \
  --name source-github public.ecr.aws/vanus/connector/source-github > a.log &
```

### Step 3: Creating a Slack app

1 Create a Slack app.

First, log in to Slack and click **Create New APP**, then select **From Scrath**, and fill in the **App Name**, select the corresponding **Workspace**.

![create-slack-app](./img/create-slack-app.jpeg)

2 Setting permissions.

Select  **OAuth & Permissions** **,**  click add an **OAuth Scope** in the **Bot Token Scopes** section of the **Scope tab**, and add chat:write and chat:write.public two types of permissions.

![setting-permissions](./img/setting-permissions.jpeg)

Reinstall to Workspace.

![reinstall](./img/reinstall.jpeg)

The Slack app is created.

### Step 4: Deploy the Slack sink connector on kubernetes

1 Create config.yml in any directory, the content is as follows:

```Plain
curl -O https://scenario-utils.s3.us-west-2.amazonaws.com/sink-slack.yaml 
```
2 Open sink-slack.yml, replace values of default , app_name, token, default_channel with yours.

![slink-slack](./img/sink-slack.jpeg)

3 Deploy the Slack sink connector.

```Plain
 kubectl apply -f sink-slack.yaml
```

##  Test Result

Through the deployment of the above four parts, the components required to push GitHub events to the notification system of Slack have been deployed. The system can push arbitrary GitHub events to Slack. And GitHub events can be filtered and processed through the filter and transformer capabilities of Vanus.

- Through a filter, developers can filter out other events and only post the GitHub events they are interested in.
- Developers can process GitHub events through a transformer, extract key information from GitHub events, and arrange them according to their own needs.

Create a Vanus subscription and set a filter or transformer in the subscription to achieve the above requirements. This article provides an example of event delivery for readers' reference: **Get the event of Github star and post it to Slack**.

Create a subscription in Vanus, and set up a transformer to extract and edit key information.

```Plain
vsctl subscription create  \
--eventbus github-slack  \
  --sink 'http://sink-slack:8080'   \
  --transformer '{
      "define": {
         "user":"$.data.sender.login",
         "time":"$.data.repository.updated_at",
         "homepage":"$.data.sender.html_url",
        "stargazers_count": "$.data.repository.stargazers_count",
        "repo": "$.data.repository.html_url"
      },
      "template": "{\"subject\": \"<repo>\",\"message\":\"Hi Team, GitHub user < <user> > just stared Vanus repository at  <time> . Check out his GitHub home page here: <homepage>. We have <stargazers_count> stars now !\"}"
    }'
```

Explain：

• Line 1: Create a subscription via vsctl.

• Line 2: Set which eventbus event the subscription handles.

• Line 3: The sink parameter is the destination address to deliver the GitHub event processed by Vanus.

• Line 4: Declare to create a transformer, which extracts the user name from the GitHub event, clicks on the star time, the current number of stars, the operation type, and other variables, edits it into a sentence, and delivers it to Slack.

• Line 6: Declare user, and get the username of the dot star from the GitHub event.

• Line 7: Declare time, and get the time of clicking star from the GitHub event.

• Line 8: Declare the homepage, and get the GitHub home page address of the developer who clicked star from the GitHub event.

• Line 12: Edit the specific content of the delivery: Hi Team, GitHub user < xxx > just stared the Vanus repository at 2023-0x-xxTxx:18:03Z . Check out his GitHub home page here: https://github.com/xxxx . We have xxx stars now!

 Result：

![result](./img/result.jpeg)



## Conclusion

This article describes how to build a notification system that pushes any GitHub event to Slack through Vanus. And an example is given: get the event of Github star, extract the key information of the event through Vanus, and re-edit the information and post it to Slack. Developers can also refer to examples to obtain and process any GitHub events, such as Issue events, comments events, WIKI update events, and so on. Through the construction of this system, developers can perceive real-time status changes in GitHub repo in real time.

