---
title: Minikube
category: 6321d397df41c405569e24b3
slug: getting-started-install-minikube
order: 0
---

# Use minikube to install Vanus

## Prerequisites

Before installing Vanus, you must meet the following prerequisites:

1. you have installed the [docker](https://docs.docker.com/engine/install).
2. you have installed the [minikube](https://minikube.sigs.k8s.io/docs/start) and minikube must have access to the internet to fetch images.
3. you have installed the [kubectl](https://kubernetes.io/docs/tasks/tools).
  
## Install Vanus

Install Vanus by running the command:

```shell
kubectl apply -f http://44.242.140.28:9080/all-in-one/v0.3.0.yml
```

## Verify the installation

Monitor the Vanus components until all of the components show the STATUS Running or Completed.
You can do this by running the following command:

```shell
kubectl get pods -n vanus
```

Inspecting the output:

```text
NAME                             READY   STATUS    RESTARTS    AGE
vanus-controller-0               1/1     Running   0           8s
vanus-controller-1               1/1     Running   0           9s
vanus-controller-2               1/1     Running   0           10s
vanus-gateway-7889df65c9-hvm97   1/1     Running   0           3s
vanus-store-0                    1/1     Running   0           10s
vanus-store-1                    1/1     Running   0           11s
vanus-store-2                    1/1     Running   0           12s
vanus-timer-88bc6885-fst27       1/1     Running   0           10s
vanus-trigger-8668cd4659-l9lgp   1/1     Running   0           10s
```
