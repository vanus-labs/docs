# Quick Start

## Prerequisites
- minikube: [how to install]( https://minikube.sigs.k8s.io/docs/start)
- kubectl: [how to install](https://kubernetes.io/docs/tasks/tools/)

## Installation

### vanus

```shell
~ > curl -O http://44.242.140.28:9080/all-in-one/v0.0.2.yml
~ > kubectl apply -f v0.0.2.yml
```
when all resources created done, verify it, the result will be liking below:
```shell
~ > kubectl get po -n vanus
vanus-controller-0                  1/1     Running   0             30s
vanus-controller-1                  1/1     Running   0             30s
vanus-controller-2                  1/1     Running   0             30s
vanus-gateway-5fd85c7c-vnzcw        1/1     Running   0             17h
vanus-store-0                       1/1     Running   0             30s
vanus-store-1                       1/1     Running   0             30s
vanus-store-2                       1/1     Running   0             30s
vanus-trigger-75cb74dbbf-k8jsm      1/1     Running   0             30s
```
if you want to install monitoring together, follow below:
```shell
~ > curl -O http://44.242.140.28:9080/monitoring/monitor-v0.0.2.yml
~ > kubectl apply -f monitor-v0.0.2.yml
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
# choose a right version based your arch and os: linux-amd64, macos-arm64
~ > curl -O http://44.242.140.28:9080/vsctl/v0.0.2/macos-arm64/vsctl
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

## Uses
There are some examples below that demonstrate can do.
### put/get
1. create an [eventbus](TODO)  
```shell
~ > vsctl eventbus create --name quick-start
```
2. send an event to the eventbus
```shell
~ > vsctl event put quick-start \
  --body "Hello Vanus" \
  --id "1" \
  --source "quick-start" \
  --type "examples"
```
3. get an event from eventbus
```shell
~ > vsctl event get quick-start --offset 0 --number 1
```

### filter
1. start a display server to verify filter
```shell
~ > curl -O http://44.242.140.28:9080/utils/display.yml
~ > kubectl apply -f display.yml
~ > kubectl get po -n vanus | grep display

~ > kubectl exec -it  
```
3. open another terminal session to create a subscription
```shell
~ > vsctl subscription create \
  --eventbus quick-start \  
  --source 'quick-start-filter-section' \
  --sink 'vanus-display:3080' \
  --filters '' \  
```

the subscription will subscribe all events from `--source` in `--eventbus`. and only events matched with `--filter`
can be emitted to `--sink`
3. send events to `quick-start` just created
```shell
~ > vsctl event put quick-start \
  --body "test filter, the event will be displayed." \
  --id "2" \
  --source "quick-start-filter-section" \
  --type "examples"
  
~ > vsctl event put quick-start \
  --body "test filter, the event won't be displayed." \
  --id "3" \
  --source "quick-start" \
  --type "examples"  
  
~ > vsctl event put quick-start \
  --body "test filter, the event will be displayed." \
  --id "2" \
  --source "quick-start-filter-section" \
  --type "?"  
```
4. back to display server for validation, the first event we sent should be output here.
```shell

```

### transformation
## Advanced
### use connectors
see https://github.com/JieDing/vance-docs
#### source

#### sink
