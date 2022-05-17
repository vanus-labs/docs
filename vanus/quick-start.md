# Quick Start

## Prerequisites
- minikube: [how to install]( https://minikube.sigs.k8s.io/docs/start)
- kubectl: [how to install](https://kubernetes.io/docs/tasks/tools/)

## Installation

### vanus

```shell
~ > curl -O http://44.242.140.28:9080/all-in-one/latest.yml
~ > kubectl apply -f latest.yml
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
if you want to install monitoring together, follow below:
```shell
~ > curl -O http://44.242.140.28:9080/monitoring/monitor-latest.yml
~ > kubectl apply -f monitor-latest.yml
~ > kubectl get po -n vanus
vanus-controller-0                  1/1     Running   0             2m16s
vanus-controller-1                  1/1     Running   0             2m16s
vanus-controller-2                  1/1     Running   0             2m16s
vanus-gateway-5fd85c7c-vnzcw        1/1     Running   0             2m16s
vanus-grafana-849c74df79-lwhk5      1/1     Running   0             18s
vanus-prometheus-5f588dfcf5-p8mtg   1/1     Running   0             18s
vanus-store-0                       1/1     Running   0             2m16s
vanus-store-1                       1/1     Running   0             2m16s
vanus-store-2                       1/1     Running   0             2m16s
vanus-trigger-75cb74dbbf-k8jsm      1/1     Running   0             2m16s
vanus-vsctl-69bc7dcf59-mtz8m        1/1     Running   0             2m16s
```

### vsctl
```shell
# NOTE: choose a right version based your arch and os: linux-amd64, macos-arm64
~ > curl -O http://44.242.140.28:9080/vsctl/latest/macos-arm64/vsctl
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
  help         Help about any command

Flags:
  -C, --config string       the config file of vsctl (default "~/.vanus/vanus.yml")
  -D, --debug               is debug mode enable
      --endpoints strings   the endpoints of vanus controller (default [127.0.0.1:2048])
  -h, --help                help for vsctl

Use "vsctl [command] --help" for more information about a command.
```
and set endpoints
```shell
~ > minikube service list -n vanus
|-----------|--------------------|----------------------|---------------------------|
| NAMESPACE |        NAME        |     TARGET PORT      |            URL            |
|-----------|--------------------|----------------------|---------------------------|
| vanus     | vanus-controller   | No node port         |
| vanus     | vanus-controller-0 | controller-grpc/2048 | http://192.168.49.2:32000 |
| vanus     | vanus-controller-1 | controller-grpc/2048 | http://192.168.49.2:32100 |
| vanus     | vanus-controller-2 | controller-grpc/2048 | http://192.168.49.2:32200 |
| vanus     | vanus-gateway      | vanus-gateway/8080   | http://192.168.49.2:30001 |
|-----------|--------------------|----------------------|---------------------------|

~ > export VANUS_ENDPOINTS=192.168.49.2:32000,192.168.49.2:32100,192.168.49.2:32200
```

## Uses
There are some examples below that demonstrate vanus can do.
### put/get
1. create an [eventbus](#)  
```shell
~ > vsctl eventbus create --name quick-start
create eventbus: quick-start success
```
2. send an event to the eventbus
```shell
~ > vsctl event put quick-start \
  --data-format plain \
  --body "Hello Vanus" \
  --id "1" \
  --source "quick-start" \
  --type "examples"
sent 200  
```
3. get an event from eventbus
```shell
~ > vsctl event get quick-start --offset 0 --number 1
event: 0, Context Attributes,
  specversion: 1.0
  type: examples
  source: quick-start
  id: 1
  time: 2022-05-17T09:17:51.208428312Z
  datacontenttype: text/plain
Extensions,
  xvanuseventbus: quick-start
Data,
  "Hello Vanus"
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
  --sink 'http://vanus-display.default:3080' \
  --filters '[
    {
      "exact": {
          "source":"quick-start-filter-section"
      }
    }
  ]'  
create subscription: 1652779545393580804 success  
```
the subscription will subscribe all events from `--source` in `--eventbus`. and only events matched with `--filter`
can be emitted to `--sink`.

3. send events to `quick-start` just created
```shell
~ > vsctl event put quick-start \
  --body '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
sent: 200
~ > vsctl event put quick-start \
  --body '{"msg":"2nd event, DISPLAY: NO"}' \
  --id "2nd" \
  --source "quick-start"
sent: 200  
~ > vsctl event put quick-start \
  --body '{"msg":"3rd event, DISPLAY: YES"}' \
  --id "3rd" \
  --source "quick-start-filter-section"
sent: 200  
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
  --sink 'http://vance-display.default' \
  --filters '[
    {
      "cel": "$key.(string) == \"test\""
    }
  ]'  
create subscription: 1652789247417517995 success  
```
2. send events to `quick-start`
```shell
~ > vsctl event put quick-start \
  --body '{"key":"test"}' \
  --id "1st" \
  --source "quick-start-filter-section"
sent: 200

~ > vsctl event put quick-start \
  --body '{"key":"no match"}' \
  --id "2nd" \
  --source "quick-start-filter-section"
sent: 200  
```
3. back to display server for validation
```shell
~ > kubectl logs vanus-display-74b65fcff4-pk9rm

Vance Event Display
Server listening on port: 3080
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
  --sink 'http://vanus-display.default:3080' \
  --input-transformer '{
      "define": {
        "dataMsg": "$.data.msg",
        "dataSource": "$.source"
      },
      "template": "{\"transKey\": \"${dataMsg}\",\"transSource\":\"${dataSource}\"}"
    }'  
create subscription: 1652786983757756860 success  
```
2. send events to `quick-start`
```shell
~ > vsctl event put quick-start \
  --body '{"msg":"1st event, DISPLAY: YES"}' \
  --id "1st" \
  --source "quick-start-filter-section"
sent: 200

```
3. back to display server for validation
```shell
~ > kubectl logs vanus-display-74b65fcff4-pk9rm

Vance Event Display
Server listening on port: 3080
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
