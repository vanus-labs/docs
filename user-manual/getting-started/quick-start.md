---
title: Quick Start
---
# Quick Start

This page shows you how to start Vanus in minutes.

## Prerequisites

:::caution
There is network issue to the China mainland users when install these prerequisites, please submit a PR if you met any problems.

Or you can try this Quick Start on our online environment: https://play.linkall.com
:::

You can skip the step if you already have those.

1. Have Docker, [how to install](https://docs.docker.com/engine/install/)
2. Have minikube, [how to install](https://minikube.sigs.k8s.io/docs/start)
3. Have kubectl, [how to install](https://kubernetes.io/docs/tasks/tools/)

## Installation

### Vanus

```shell
curl -O https://download.linkall.com/all-in-one/v0.3.0.yml
kubectl apply -f v0.3.0.yml
```

waiting a minute, run `kubectl get po -n vanus` to check the deployment, the expected output looks like below,

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

### Command Line Tool

:::tip
choose a right version based your arch and os: **linux-amd64**, **macos-arm64**
:::

**Firstly**, download **vsctl**, the command line tool of Vanus.

```shell
curl -O https://download.linkall.com/vsctl/v0.3.0/linux-amd64/vsctl
chmod ug+x vsctl
sudo mv vsctl /usr/local/bin
```

**Secondly**, use `vsctl version` to check the installation

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

use `minikube service list -n vanus` to get **Vanus Gateway**'s endpoint

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
if you are using a normal k8s cluster, just use `kubectl get svc -n vanus` to find the endpoint
:::

use evn variable to tell the endpoint to vsctl

```shell
export VANUS_GATEWAY=192.168.49.2:30001
```

**Finally**, validating if it has connected to Vanus

```shell
vsctl cluster controller topology
```

output should look like

```shell
+-------------------+--------+----------------------------------------------------+
|        NAME       | LEADER |                      ENDPOINT                      |
+-------------------+--------+----------------------------------------------------+
| Leader-controller |  TRUE  | vanus-controller-1.vanus-controller.vanus.svc:2048 |
+-------------------+--------+----------------------------------------------------+
|      Gateway      |    -   |                                                    |
+-------------------+--------+----------------------------------------------------+
```

## Use-cases

There are some examples below that demonstrate vanus can do.

### Put/Get Event

1. **create an [eventbus](../introduction/concepts.md#eventbus)**

```shell
vsctl eventbus create --name quick-start
```

2. **send an event to the eventbus**

```shell
vsctl event put quick-start \
  --data-format plain \
  --data "Hello Vanus" \
  --id "1" \
  --source "quick-start" \
  --type "examples"
```

3. **get an event from eventbus**

```shell
vsctl event get quick-start --offset 0 --number 1
```

the result should look like

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

### Filter

1. **start a display server to verify filter**

```shell
curl -O https://download.linkall.com/utils/display.yml
kubectl apply -f display.yml
```

use `kubectl get po` to validate

```shell
NAME                             READY   STATUS    RESTARTS   AGE
vanus-display-74b65fcff4-pk9rm   1/1     Running   0          12s
```

2. **create a subscription**

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

output should like below

```shell
+---------------------+-------------+-----------------------------------+----------------------------------------------+-------------+
|          ID         |   EVENTBUS  |                SINK               |                    FILTER                    | TRANSFORMER |
+---------------------+-------------+-----------------------------------+----------------------------------------------+-------------+
| 1656331986533051044 | quick-start | http://vanus-display.default:80   | [                                            | ""          |
|                     |             |                                   |   {                                          |             |
|                     |             |                                   |     "exact": {                               |             |
|                     |             |                                   |       "source": "quick-start-filter-section"  |             |
|                     |             |                                   |     }                                        |             |
|                     |             |                                   |   }                                          |             |
|                     |             |                                   | ]                                            |             |
+---------------------+-------------+-----------------------------------+----------------------------------------------+-------------+
```

the subscription will subscribe all events from `--source` in `--eventbus`. and only events matched with `--filter`
can be emitted to `--sink`.

3. **send events to `quick-start` just created**

sending **3** events in here

```shell
vsctl event put quick-start \
  --data '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
  
vsctl event put quick-start \
  --data '{"msg":"2nd event, DISPLAY: NO"}' \
  --id "2nd" \
  --source "quick-start"
  
vsctl event put quick-start \
  --data '{"msg":"3rd event, DISPLAY: YES"}' \
  --id "3rd" \
  --source "quick-start-filter-section"
```

4. **back to display server for validation**, the first and third event we just sent should be displayed.

:::tip
NOTE: use the **POD_NAME** you got from step 1.
:::

```shell
kubectl logs vanus-display-74b65fcff4-pk9rm
```

the output should look like below, the two events whose source are matched are displayed.

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

for more about `filter`, you can find in [how to manage subscription](../how-to/manage-subscription.md)

### Transformer

1. **create a subscription with transformer**

```shell
vsctl subscription create \
  --eventbus quick-start \
  --sink 'http://quick-display:80' \
  --transformer '{
      "define": {
        "dataMsg": "$.data.msg",
        "dataSource": "$.source"
      },
      "template": "{\"transKey\": \"${dataMsg}\",\"transSource\":\"${dataSource}\"}"
    }'  
```

output looks like:

```shell
+---------------------+-------------+-------------------------+--------+---------------
|          ID         |   EVENTBUS  |           SINK          | FILTER |  TRANSFORMER |
+---------------------+-------------+-------------------------+--------+---------------
| 1656334253024543243 | quick-start | http://quick-display:80 | null   |   "{ ... }"   |
+---------------------+-------------+-------------------------+--------+---------------  
```

2. **send events to `quick-start`**

```shell
vsctl event put quick-start \
  --data '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
```

3. **back to display server for validation**

```shell
kubectl logs vanus-display-74b65fcff4-pk9rm
```

the transformed event has been displayed.

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

## Next

You can go forward to [How to use Vanus](../how-to) for learning more about Vans.