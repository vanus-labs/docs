# Quick Start

## Prerequisites

### OS requirements
Linux kernel version greater than or equals 5.1 (March 2019) for io_uring

### Machine
This QuickStart run on AWS EC2, The OS version is `Canonical, Ubuntu, 22.04 LTS`, we suggest you use the same instance for getting the best experience.
```shell
ubuntu@ip-172-31-34-13:~$ uname -a
Linux ip-172-31-34-13 5.15.0-1011-aws #14-Ubuntu SMP Wed Jun 1 20:54:22 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
```

### Components
NOTE: It has network issue to the China mainland users when install these prerequisites, please submit a PR if you met any problems.
#### Docker
[how to install](https://docs.docker.com/engine/install/ubuntu/), If you use another OS, please find the right way to 
install docker by Google.

#### minikube
[how to install]( https://minikube.sigs.k8s.io/docs/start)

Maybe you need run `sudo usermod -aG docker $USER && newgrp docker` before `minikube start`.

#### kubectl
[how to install](https://kubernetes.io/docs/tasks/tools/)
docker: please right version based your system 



## Installation

### vanus

```shell
~ > curl -O http://44.242.140.28:9080/all-in-one/v0.1.1.yml
~ > kubectl apply -f v0.1.1.yml
```
when all resources creating done, the result will be liking below:
```shell
~ > kubectl get po -n vanus
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
```shell
# NOTE: choose a right version based your arch and os: linux-amd64, macos-arm64
~ > curl -O http://44.242.140.28:9080/vsctl/v0.1.1/linux-amd64/vsctl
~ > chmod ug+x vsctl
~ > sudo mv vsctl /usr/local/bin
~ > vsctl 
the command-line application for vanus

Usage:
  vsctl [command]

Available Commands:
  event        convenient operations for pub/sub
  eventbus     sub-commands for eventbus operations
  subscription sub-commands for subscription operations
  cluster      vanus cluster operations
  help         Help about any command

Flags:
  -C, --config string          the config file of vsctl (default "~/.vanus/vanus.yml")
  -D, --debug                  is debug mode enable
      --endpoint string        the endpoints of vanus controller (default "127.0.0.1:30001")
  -h, --help                   help for vsctl
      --output-format string   json or table (default "table")

Use "vsctl [command] --help" for more information about a command.
```
and set endpoints
```shell
~ > minikube service list -n vanus
|-----------|------------------|-----------------|---------------------------|
| NAMESPACE |       NAME       |   TARGET PORT   |            URL            |
|-----------|------------------|-----------------|---------------------------|
| vanus     | vanus-controller | No node port    |
| vanus     | vanus-gateway    | put/8080        | http://192.168.49.2:30001 |
|           |                  | get/8081        | http://192.168.49.2:30002 |
|           |                  | ctrl-proxy/8082 | http://192.168.49.2:30003 |
|-----------|------------------|-----------------|---------------------------|

~ > export VANUS_GATEWAY=192.168.49.2:30001
~ > vsctl cluster controller topology
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
### put/get
1. create an [eventbus](#)
```shell
~ > vsctl eventbus create --name quick-start
+----------------+-------------+
|     RESULT     |   EVENTBUS  |
+----------------+-------------+
| Create Success | quick-start |
+----------------+-------------+
```
2. send an event to the eventbus
```shell
~ > vsctl event put quick-start \
  --data-format plain \
  --body "Hello Vanus" \
  --id "1" \
  --source "quick-start" \
  --type "examples"
+--------+
| RESULT |
+--------+
|   200  |
+--------+
```
3. get an event from eventbus
```shell
~ > vsctl event get quick-start --offset 0 --number 1
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
~ > curl -O http://44.242.140.28:9080/utils/display.yml
~ > kubectl apply -f display.yml
~ > kubectl get po
NAME                             READY   STATUS    RESTARTS   AGE
vanus-display-74b65fcff4-pk9rm   1/1     Running   0          12s
```
2. create a subscription
```shell
~ > vsctl subscription create \
  --eventbus quick-start \
  --sink 'http://quick-display:80' \
  --filters '[
    {
      "exact": {
          "source":"quick-start-filter-section"
      }
    }
  ]'  
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
```shell
~ > vsctl event put quick-start \
  --body '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
+--------+
| RESULT |
+--------+
|   200  |
+--------+
~ > vsctl event put quick-start \
  --body '{"msg":"2nd event, DISPLAY: NO"}' \
  --id "2nd" \
  --source "quick-start"
+--------+
| RESULT |
+--------+
|   200  |
+--------+
~ > vsctl event put quick-start \
  --body '{"msg":"3rd event, DISPLAY: YES"}' \
  --id "3rd" \
  --source "quick-start-filter-section"
+--------+
| RESULT |
+--------+
|   200  |
+--------+
```
4. back to display server for validation, the first and third event we just sent should be outputed here.
```shell
# NOTE: use the POD_NAME you got from step 1.
~ > kubectl logs vanus-display-74b65fcff4-pk9rm

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

### dataFilter
1. create a subscription with data filter by cel
```shell
~ > vsctl subscription create \
  --eventbus quick-start \
  --sink 'http://quick-display:80' \
  --filters '[
    {
      "cel": "$key.(string) == \"test\""
    }
  ]'  
+---------------------+-------------+-------------------------+----------------------------------------+-------------+
|          ID         |   EVENTBUS  |           SINK          |                 FILTER                 | TRANSFORMER |
+---------------------+-------------+-------------------------+----------------------------------------+-------------+
| 1656334097856707485 | quick-start | http://quick-display:80 | [                                      | ""          |
|                     |             |                         |   {                                    |             |
|                     |             |                         |     "cel": "$key.(string) == \"test\"" |             |
|                     |             |                         |   }                                    |             |
|                     |             |                         | ]                                      |             |
+---------------------+-------------+-------------------------+----------------------------------------+-------------+  
```
2. send events to `quick-start`
```shell
~ > vsctl event put quick-start \
  --body '{"key":"test"}' \
  --id "1st" \
  --source "quick-start-filter-section"
+--------+
| RESULT |
+--------+
|   200  |
+--------+

~ > vsctl event put quick-start \
  --body '{"key":"no match"}' \
  --id "2nd" \
  --source "quick-start-filter-section"
+--------+
| RESULT |
+--------+
|   200  |
+--------+  
```
3. back to display server for validation
```shell
~ > kubectl logs vanus-display-74b65fcff4-pk9rm

Vance Event Display
Server listening on port: 80
receive a new event, in total: 9                                                                                                                                                        │
{                                                                                                                                                                                          │
  "id" : "1st",                                                                                                                                                                            │
  "source" : "quick-start-filter-section",                                                                                                                                                 │
  "specversion" : "V1",                                                                                                                                                                    │
  "type" : "cmd",                                                                                                                                                                          │
  "datacontenttype" : "application/json",                                                                                                                                                  │
     "key" : "test"                                                                                                                                                                         │
   }                                                                                                                                                                                        │
}

```

### transformation
1. create a subscription with transformation
```shell
~ > vsctl subscription create \
  --eventbus quick-start \
  --sink 'http://quick-display:80' \
  --input-transformer '{
      "define": {
        "dataMsg": "$.data.msg",
        "dataSource": "$.source"
      },
      "template": "{\"transKey\": \"${dataMsg}\",\"transSource\":\"${dataSource}\"}"
    }'  
+---------------------+-------------+-------------------------+--------+---------------
|          ID         |   EVENTBUS  |           SINK          | FILTER |  TRANSFORMER |
+---------------------+-------------+-------------------------+--------+---------------
| 1656334253024543243 | quick-start | http://quick-display:80 | null   |   "{... }"   |
+---------------------+-------------+-------------------------+--------+---------------  
```
2. send events to `quick-start`
```shell
~ > vsctl event put quick-start \
  --body '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
+--------+
| RESULT |
+--------+
|   200  |
+--------+

```
3. back to display server for validation
```shell
~ > kubectl logs vanus-display-74b65fcff4-pk9rm

Vance Event Display
Server listening on port: 80
receive a new event, in total: 11                                                                                                                                                          │
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

## Advanced
### use connectors
see https://github.com/JieDing/vance-docs
#### source

#### sink
