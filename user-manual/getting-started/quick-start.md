---
title: Quick Start
---
# Quick Start

This page shows you how to start Vanus in minutes.

## Prerequisites

:::caution
There is network issue to the China mainland users when install these prerequisites, please submit a PR if you met any problems.
:::

You can skip the step if you already have .

### Docker

[how to install](https://docs.docker.com/engine/install/ubuntu/), If you use another OS, please find the right way to
install docker by Google.

### minikube

[how to install](https://minikube.sigs.k8s.io/docs/start)

Maybe you need run `sudo usermod -aG docker $USER && newgrp docker` before `minikube start`.

### kubectl

[how to install](https://kubernetes.io/docs/tasks/tools/)

## Installation

### vanus

```shell
curl -O http://44.242.140.28:9080/all-in-one/v0.3.0.yml
kubectl apply -f v0.3.0.yml
```

when all resources creating done, the result will be liking below:

```shell
kubectl get po -n vanus
```

waiting a minute, the expected output is like below,

```shell
vanus-controller-0                  1/1     Running   0             30s
vanus-controller-1                  1/1     Running   0             30s
vanus-controller-2                  1/1     Running   0             30s
vanus-gateway-5fd85c7c-vnzcw        1/1     Running   0             30s
vanus-store-0                       1/1     Running   0             30s
vanus-store-1                       1/1     Running   0             30s
vanus-store-2                       1/1     Running   0             30s
vanus-trigger-75cb74dbbf-k8jsm      1/1     Running   0             30s
```

### vsctl

:::tip
choose a right version based your arch and os: linux-amd64, macos-arm64
:::

First, download vsctl

```shell
curl -O http://44.242.140.28:9080/vsctl/v0.3.0/linux-amd64/vsctl
chmod ug+x vsctl
sudo mv vsctl /usr/local/bin
```

Second, use `vsctl version` check the installation

```shell
+-----------+---------------------------------+
|  Version  | v0.3.0                          |
|  Platform | darwin/arm64                    |
| GitCommit | 28ffea0                         |
| BuildDate | 2022-09-16_02:13:36+0000        |
| GoVersion | go version go1.17.5 linux/amd64 |
+-----------+---------------------------------+
```

### Set Vanus Endpoint

use `minikube service list -n vanus` to get Vanus Gateway endpoint

```shell
|-----------|------------------|-----------------|---------------------------|
| NAMESPACE |       NAME       |   TARGET PORT   |            URL            |
|-----------|------------------|-----------------|---------------------------|
| vanus     | vanus-controller | No node port    |
| vanus     | vanus-gateway    | put/8080        | http://192.168.49.2:30001 |
|           |                  | get/8081        | http://192.168.49.2:30002 |
|           |                  | ctrl-proxy/8082 | http://192.168.49.2:30003 |
|-----------|------------------|-----------------|---------------------------|
```

:::tip
if you are using a normal k8s cluster, just use `kubectl get svc -n vanus` to find endpoint
:::

use evn variable to tell endpoint to vsctl

```shell
export VANUS_GATEWAY=192.168.49.2:30001
```

Last, valid if connected to Vanus

```shell
vsctl cluster controller topology
```

output should like be

```shell
+-------------------+--------+----------------------------------------------------+
|        NAME       | LEADER |                      ENDPOINT                      |
+-------------------+--------+----------------------------------------------------+
| Leader-controller |  TRUE  | vanus-controller-1.vanus-controller.vanus.svc:2048 |
+-------------------+--------+----------------------------------------------------+
|      Gateway      |    -   |                                                    |
+-------------------+--------+----------------------------------------------------+
```

## Uses

There are some examples below that demonstrate vanus can do.

### Put/Get Event 

1. create an [eventbus](../concepts/eventbus)

```shell
vsctl eventbus create --name quick-start
```

2. send an event to the eventbus

```shell
vsctl event put quick-start \
  --data-format plain \
  --body "Hello Vanus" \
  --id "1" \
  --source "quick-start" \
  --type "examples"
```

3. get an event from eventbus

```shell
~ > vsctl event get quick-start --offset 0 --number 1
```

the result should like be

```shell
+-----+----------------------------------------+
| NO. |                  EVENT                 |
+-----+----------------------------------------+
|     | Context Attributes,                    |
|     |   specversion: 1.0                     |
|     |   type: examples                       |
|     |   source: quick-start                  |
|     |   id: 1                                |
|  0  |   time: 2022-06-27T10:50:15.265787384Z |
|     |   datacontenttype: text/plain          |
|     | Extensions,                            |
|     |   xvanuseventbus: quick-start          |
|     | Data,                                  |
|     |   Hello Vanus                          |
|     |                                        |
+-----+----------------------------------------+
```

### filter

1. start a display server to verify filter

```shell
curl -O http://44.242.140.28:9080/utils/display.yml
kubectl apply -f display.yml
```

use `kubectl get po` to validate

```shell
NAME                             READY   STATUS    RESTARTS   AGE
vanus-display-74b65fcff4-pk9rm   1/1     Running   0          12s
```

2. create a subscription

```shell
vsctl subscription create \
  --eventbus quick-start \
  --sink 'http://quick-display:80' \
  --filters '[
    {
      "exact": {
          "source":"quick-start-filter-section"
      }
    }
  ]'  
```

output should like be below

```shell
+---------------------+-------------+-----------------------------------+----------------------------------------------+-------------+
|          ID         |   EVENTBUS  |                SINK               |                    FILTER                    | TRANSFORMER |
+---------------------+-------------+-----------------------------------+----------------------------------------------+-------------+
| 1656331986533051044 | quick-start | http://vanus-display.default:80 | [                                            | ""          |
|                     |             |                                   |   {                                          |             |
|                     |             |                                   |     "exact": {                               |             |
|                     |             |                                   |       "source": "quick-start-filter-section" |             |
|                     |             |                                   |     }                                        |             |
|                     |             |                                   |   }                                          |             |
|                     |             |                                   | ]                                            |             |
+---------------------+-------------+-----------------------------------+----------------------------------------------+-------------+
```

the subscription will subscribe all events from `--source` in `--eventbus`. and only events matched with `--filter`
can be emitted to `--sink`.

3. send events to `quick-start` just created

the first event,

```shell
vsctl event put quick-start \
  --body '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
```

the second event,

```shell
vsctl event put quick-start \
  --body '{"msg":"2nd event, DISPLAY: NO"}' \
  --id "2nd" \
  --source "quick-start"
```

and the last event

```shell
vsctl event put quick-start \
  --body '{"msg":"3rd event, DISPLAY: YES"}' \
  --id "3rd" \
  --source "quick-start-filter-section"
```

4. back to display server for validation, the first and third event we just sent should be outputed here.

:::tip
NOTE: use the **POD_NAME** you got from step 1.
```

```shell
kubectl logs vanus-display-74b65fcff4-pk9rm
```
the output should like be below, the 2 events whose source are matched are displayed.
```shell
Vance Event Display
Server listening on port: 8080 
receive a new event, in total: 1
{
  "id" : "1st",
  "source" : "quick-start-filter-section",
  "specversion" : "V1",
  "type" : "cmd",
  "datacontenttype" : "application/json",
  "time" : "2022-05-17T10:14:05.463206062Z",
  "data" : {
    "msg" : "1st event, DISPLAY: YES"
  }
}
receive a new event, in total: 2
{
  "id" : "3rd",
  "source" : "quick-start-filter-section",
  "specversion" : "V1",
  "type" : "cmd",
  "datacontenttype" : "application/json",
  "time" : "2022-05-17T10:16:33.561553545Z",
  "data" : {
    "msg" : "3rd event, DISPLAY: YES"
  }
}
```

for more about `filter`, you can find in [how to manage subscription](../how-to/managing-subscription)

### transformation

1. create a subscription with transformation

```shell
vsctl subscription create \
  --eventbus quick-start \
  --sink 'http://quick-display:80' \
  --input-transformer '{
      "define": {
        "dataMsg": "$.data.msg",
        "dataSource": "$.source"
      },
      "template": "{\"transKey\": \"${dataMsg}\",\"transSource\":\"${dataSource}\"}"
    }'  
```

output
```shell
+---------------------+-------------+-------------------------+--------+---------------
|          ID         |   EVENTBUS  |           SINK          | FILTER |  TRANSFORMER |
+---------------------+-------------+-------------------------+--------+---------------
| 1656334253024543243 | quick-start | http://quick-display:80 | null   |   "{ ... }"   |
+---------------------+-------------+-------------------------+--------+---------------  
```

2. send events to `quick-start`

```shell
vsctl event put quick-start \
  --body '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
```

3. back to display server for validation

```shell
~ > kubectl logs vanus-display-74b65fcff4-pk9rm
```
the transformed event is displayed
```shell
...                                                                                                                                                   │
{                                                                                                                                                                                          │
  "id" : "1st",                                                                                                                                                                            │
  "source" : "quick-start-filter-section",                                                                                                                                                 │
  "specversion" : "V1",                                                                                                                                                                    │
  "type" : "cmd",                                                                                                                                                                          │
  "datacontenttype" : "application/json",                                                                                                                                                  │
  "time" : "2022-05-17T11:30:35.246070388Z",                                                                                                                                               │
  "data" : {                                                                                                                                                                               │
    "transKey" : "1st event, DISPLAY: YES",                                                                                                                                                │
    "transSource" : "quick-start-filter-section"                                                                                                                                           │
  }                                                                                                                                                                                        │
}

```