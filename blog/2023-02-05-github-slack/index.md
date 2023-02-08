---
title: Build a notification system that pushes any Github event to Slack in 5 minutes
authors: Lucas
tags: ['GitHub', 'Message Queue', 'slack', 'notification']
---

## Build a notification system that pushes any Github event to Slack in 5 minutes

If you open source a project on GitHub you definitely need to know who is attracted to your project in real-time. For example, whether someone has starred the project, or whether someone has submitted an Issue or a PR. This way you can respond quickly, such as answering Issue questions or reviewing PRs. How can we get the status of open-source projects in real-time? It is obviously not a good way to keep checking the GitHub page.

 This article will help open-source enthusiasts deliver any Github events to Slack through Vanus in real-time. In this way, developers can know the status of open source projects in real-time without logging in to GitHub, so that developers can quickly respond to the following GitHub events:

- Issue event： Create, delete, closed, as signed, unsigned, labeled, unlabeled, etc.
- PR event， Create, delete, closed, merged, edited, review requested, commit, etc.
- Comments event, PR comments, issue comments, commit comments.
- Stars event: A star is created or deleted from the repository.
- Version releases event:  Release created, edited, published, unpublished, or deleted.
- Wiki events: Wiki page updated.
- The team adds: Team added or modified on a repository.
- Discussions event:  created, edited, pinned, unpinned, locked, unlocked, transferred, answered, etc.
- Labels event: Label created, edited, or deleted.
- Milestone event: Milestone created, closed, opened, edited, or deleted.
- Code scanning alerts: Code Scanning alerts are created, fixed in a branch, or closed.

​    This article will show how to do this in 5 minutes on Playground with Vanus and Vanus Connect， the results are shown below:

![GitHub-to-Slack-Result](./img/GitHub-to-Slack-Result.gif)

## Prerequisites：

- Playground： An online k8s environment where Vanus can be deployed.
- GitHub： Your open-source repository
- slack： A working slack account

## Part 1: Deploying Vanus in the playground

1 Enter the login page and click the Continue with Github button to log in with the GitHub account

![playground-login](./img/playground-login.jpeg)

2  Wait for the automatic deployment of Kubernetes to complete, about the 30s.

![playground](./img/playground.jpeg)

3 Deploy Vanus to the terminal on the right side of the web page

```Shell
kubectl apply -f https://vanus.s3.us-west-2.amazonaws.com/releases/v0.4.0/vanus.yaml
```

 Verify: watch -n2 kubectl get po -n Vanus，

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

4 Install vsctl (the command line tool)

```Plain
curl -O https://vsctl.s3.us-west-2.amazonaws.com/releases/v0.4.0/linux-amd64/vsctl
chmod ug+x vsctl
mv vsctl /usr/local/bin
```

5  Set the endpoint for vsctl to access vanus

```Plain
export VANUS_GATEWAY=192.168.49.2:30001
```

6 Create eventbus

```Plain
$ vsctl eventbus create  GitHub-slack
+----------------+-------------+
|     RESULT     |   EVENTBUS  |
+----------------+-------------+
| Create Success | github-slack|
+----------------+-------------+
```

## Part 2: Deploy the GitHub source connector

7 Set config file

 Create config.yml in any directory, the content is as follows

```Plain
{
  "v_target": "http://192.168.49.2:30001/gateway/github-slack",
  "v_port": "8082"
}
```

8 Deploy the GitHub source connector and run the following command in the same directory:

```Plain
docker run --network=host -v $(pwd)/config.json:/vance/config/config.json  --rm vancehub/source-github > a.log &
```

## Part 3: Creating a Slack app

9 Create a slack app

First, log in to slack, and click Create New APP,then select From Scrath, and fill in the App Name, select the corresponding Workspace

![create-slack-app](./img/create-slack-app.jpeg)

10 Setting permissions

Select  **[OAuth & Permissions](https://api.slack.com/apps/A04L5D8QJ0Y/oauth?)** **,**  click Add an OAuth Scope in the Bot Token Scopes section of the Scope tab, and add chat:write and chat:write.public two types of permissions

![setting-permissions](./img/setting-permissions.jpeg)

Reinstall to Workspace

![reinstall](./img/reinstall.jpeg)

The slack app is created

## Part 4: Deploy the slack link connector

11 Create config.yml in any directory, the content is as follows

```Plain
default: "$app-name"
slack:
  - app_name: "$app-name"
    token: "$Bot User OAuth Token"
    default_channel: "$slack-channel"
```

A sample config.yml:

```Plain
default: "test"
slack:
  - app_name: "test"
    token: "xoxb-46xxxx7765-4685xxxx471152-DC5xxxxxyI1sj75rRUP"
    default_channel: "#vanus-channel"
```

12 Deploy the slack sink connector

```Plain
 docker run  -p 31080:8080 --rm -v ${PWD}:/vance/config --name sink-slack public.ecr.aws/vanus/connector/sink-slack:latest > a.log & 
```

## Part V: Test Results

Through the deployment of the above four parts, the components required to push github events to the notification system of slack have been deployed. The system can push arbitrary GitHub events to slack. And GitHub events can be filtered and processed through the filter and transformer capabilities of vanus.

- Through a filter, developers can filter out other events and only post the GitHub events they are interested in.
- Developers can process GitHub events through a transformer, extract key information from GitHub events, and arrange them according to their own needs.

​    Create a vanus subscription and set a filter or transformer in the subscription to achieve the above requirements. This article provides an example of event delivery for readers' reference.

   Get the event of Github star and post it to slack

   Create a subscription in vanus, and set up a transformer to extract and edit key information.

```Plain
vsctl subscription create  \
--eventbus github-slack  \
  --sink 'http://10.0.157.4:31080'  \
  --transformer '{
      "define": {
         "user":"$.data.sender.login",
         "time":"$.data.repository.updated_at",
         "homepage":"$.data.sender.html_url",
        "stargazers_count": "$.data.repository.stargazers_count",
        "repo": "$.data.repository.html_url"
      },
      "template": "{\"subject\": \"${repo}\",\"message\":\"Hi Team, GitHub user < ${user} > just stared Vanus repository at  ${time} . Check out his GitHub home page here:${homepage}. We have ${stargazers_count} stars now !\"}"
    }'
```

Explain：

Line 1: Create a subscription via vsctl.

Line 2: Set which eventbus event the subscription handles.

Line 3: The sink parameter is the destination address to deliver the GitHub event processed by vanus. The address of the server where the slack sink is located should be configured here. You can run ifconfig on the server to obtain the IP address of the eth0 network card.

Line 4: Declare to create a transformer, which extracts the user name from the GitHub event, clicks on the star time, the current number of stars, the operation type, and other variables, edits it into a sentence, and delivers it to slack.

Line 6: Declare user, and get the username of the dot star from the GitHub event.

Line 7: Declare time, and get the time of clicking star from the GitHub event.

Line 8:Declare the homepage, and get the GitHub home page address of the developer who clicked star from the GitHub event.

Line 12: Edit the specific content of the delivery: Hi Team, GitHub user < xxx > just stared the Vanus repository at 2023-0x-xxTxx:18:03Z . Check out his GitHub home page here: [https://github.com/x](https://github.com/Valbonne)xxx . We have xxx stars now!

 Result：

![result](./img/result.jpeg)

## Summarize:

This article describes how to build a notification system that pushes any GitHub event to slack through Vanus. And an example is given: get the event of Github star, extract the key information of the event through vanus, and re-edit the information and post it to slack. Developers can also refer to examples to obtain and process any github events, such as issue events, comments events, wiki update events, and so on. Through the construction of this system, developers can perceive real-time status changes in GitHub repo in real time.

