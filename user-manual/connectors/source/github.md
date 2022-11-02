---
title: GitHub
---

# GitHub Source
This document provides a brief introduction to GitHub Source.
It is also designed to guide you through the process of running a
GitHub Source Connector.

## Introduction
The GitHub Source is a [Vance Connector](https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md) designed to retrieve
GitHub webhooks events in various format,
transform them into CloudEvents based on 
[CloudEvents Adapter Specification](https://github.com/cloudevents/spec/blob/main/cloudevents/adapters/github.md), and wrap the body of the original request into the data of CloudEvents.

## GitHub Event Structure

The original GitHub webhooks events look like:
 ```JSON
 {
   "action": "created",
   "starred_at": "2022-07-21T06:28:23Z",
   "repository": {
     "id": 513353059,
     "node_id": "R_kgDOHpklYw",
     "name": "test-repo",
     "full_name": "XXXX/test-repo",
     "private": false,
     "owner": {
       "login": "XXXX",
       "type": "User",
       "site_admin": false
     },
     "visibility": "public",
     "forks": 0,
     "open_issues": 2,
     "watchers": 1,
     "default_branch": "main"
   },
   "sender": {
     "login": "XXXX",
     "id": 75800782,
     "node_id": "MDQ6VXNlcjc1ODAwNzgy",
     "avatar_url": "https://avatars.githubusercontent.com/u/75800782?v=4",
     "gravatar_id": "",
     "url": "https://api.github.com/users/XXXX",
     "html_url": "https://github.com/XXXX",
     "followers_url": "https://api.github.com/users/XXXX/followers",
     "following_url": "https://api.github.com/users/XXXX/following{/other_user}",
     "gists_url": "https://api.github.com/users/XXXX/gists{/gist_id}",
     "starred_url": "https://api.github.com/users/XXXX/starred{/owner}{/repo}",
     "subscriptions_url": "https://api.github.com/users/XXXX/subscriptions",
     "organizations_url": "https://api.github.com/users/XXXX/orgs",
     "repos_url": "https://api.github.com/users/XXXX/repos",
     "events_url": "https://api.github.com/users/XXXX/events{/privacy}",
     "received_events_url": "https://api.github.com/users/XXXX/received_events",
     "type": "User",
     "site_admin": false
   }
 }
 ```
###
This GitHub event will be transformed into a CloudEvent like:
 ```JSON
 CloudEvent:{
 	id:"4ef226c0-08c7-11ed-998d-93772adf8abb", 
 	source:"https://api.github.com/repos/XXXX/test-repo", 
 	type:"com.github.watch.started", 
 	datacontenttype:"application/json", 
 	time:"2022-07-21T07:32:44.190Z", 
 	data:JsonCloudEventData{
 		"http request body"
 	}
 }
 ```
---
## Quick Start
This quick start will guide you through the process of running
a GitHub Source Connector.

### Prerequisites
- Have container runtime (i.e., docker).
- Have public IP address.
- Have a GitHub [WebHook][webhook].

### Set GitHub Source Configurations
when running the Connector, you can specify your configs by either setting 
environments variables or mounting a config.json to `/vance/config/config.json`.

Here is an example of a configuration file for the GitHub Source.
 ```shell
 $ vim config.json
 {
   "v_target": "http://host.docker.internal:8081",
   "port": "8082"
 }
 ```

|  Configs    |  Description    																  |  Example    			  |  Required    |
 |  :----:     |  :----:         																  |  :----:     			  |  :----:      |
|  v_target   |  v_target is used to specify the target URL HTTP Source will send CloudEvents to  |  "http://localhost:8081"  |  YES  		 |
|  v_port     |  v_port is used to specify the port HTTP Source is listening on					  |  "8080"	                  |  YES         |

### Set GitHub Source Secrets
Users should set their sensitive data Base64 encoded in a secret 
file. And mount that secret file to
`/vance/secret/secret.json` when running the GitHub Source Connector.

Replace `MY_SECRET` with your sensitive data to get the Base64-based string.

 ```shell
 $ echo -n MY_SECRET | base64
 TVlfU0VDUkVU
 ```

Create a local secret file with the Base64-based string you just got from your secrets.

 ```Bash
 $ cat secret.json
 {
   "githubWebHookSecret": "${githubWebHookSecret}"
 }
 ```
|  Secrets         		 |  Description    																  |  Example    			  |  Required    |
 |  :----:     			 |  :----:         																  |  :----:     			  |  :----:      |
|  githubWebHookSecret   |  The githubWebHookSecret is used to verify your webhook secret key		      |  "YWJjZGU="				  |  YES  		 |

### Run the GitHub Source with Docker
Create your `config.json` and `secret.json`, and mount them to specific 
paths to run the GitHub Source using the following command.

 ```shell
 docker run -v $(pwd)/secret.json:/vance/secret/secret.json -v $(pwd)/config.json:/vance/config/config.json -p 8082:8082 --rm vancehub/source-github
 ```

You can verify if the GitHub Source works properly by running the Display Sink Connector 
and by triggering a event.
> docker run -p 8081:8081 --rm vancehub/sink-display

:::tip
Set the v_target as http://host.docker.internal:8081
:::

[webhook]: https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks