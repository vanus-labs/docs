# Quick Start

## Pre-requirements
- minikube: [how to install]( https://minikube.sigs.k8s.io/docs/start)
- kubectl: [how to install](https://kubernetes.io/docs/tasks/tools/)

## Installation

### vanus

```bash
~ > curl -O http://44.242.140.28:9080/all-in-one/v0.0.2.yml
~ > kubectl apply -f v0.0.2.yml
```
when all resources created done, verify it, the result will be liking below:
```bash
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
```bash
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
```bash
# choose right version bashed your arch and os: linux-amd64, macos-arm64
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

## examples

### pub/sub

### use connectors

#### source

#### sink

### filter

### transformation

