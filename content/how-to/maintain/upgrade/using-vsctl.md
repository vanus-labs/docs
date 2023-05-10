---
title: Use Vsctl
---

# Upgrade Vanus Cluster Using Vsctl

This document  will teach you how to upgrade Vanus cluster using [Vsctl](https://github.com/vanus-labs/docs/blob/main/user-manual/how-to/vsctl.md)

> **Warning:**
>
> - Vanus only supports v0.7.0 and higher version upgrades. If your cluster is lower than v0.7.0, it is recommended that you directly redeploy the latest version.
> - During the process of upgrading the Vanus cluster, a small number of messages may be consumed or delivered repeatedly. Please try to upgrade during the low peak period.

> **Note:**
>
> If the original cluster is a version before v0.5.0, it is not supported to upgrade directly to v0.7.0 or later versions. You need to upgrade from the previous version to v0.5.0, and then to v0.7.0 and subsequent revisions.

## Upgrade Caveat
- Vanus currently does not support version downgrade or rolling back to an earlier version after the upgrade.
- Individual upgrade of a component of Vanus is not supported.
- For detailed compatibility changes of different versions, see the Release Notes of each version. Modify your cluster configuration according to the "Compatibility Changes" section of the corresponding release notes.
- Vanus only supports v0.7.0 and higher version upgrades. If your cluster is lower than v0.7.0, it is recommended that you directly redeploy the latest version.

## Preparations

This section introduces the preparation works needed before upgrading your Vanus cluster, including upgrading Vsctl and the Vanus operator component.

### Step 1: Review compatibility changes

Review the compatibility changes and deprecated features in Vanus v0.7.0 release notes. If any changes affect your upgrade, take actions accordingly.

### Step 2: Upgrade Vsctl

    {{< copyable "shell-regular" >}}

    ```shell
    sudo curl -o /usr/local/bin/vsctl https://download.linkall.com/vsctl/v0.7.0/macos-arm64/vsctl
    sudo chmod +x /usr/local/bin/vsctl
    vsctl --version
    ```

### Step 3: Upgrade Vanus Operator

    {{< copyable "shell-regular" >}}

    ```shell
    kubectl set image deployment/vanus-operator apiserver=public.ecr.aws/vanus/operator:v0.3.0 manager=public.ecr.aws/vanus/operator:v0.3.0 -n vanus
    ```

### Step 4: Check the health status of the current cluster

To avoid the undefined behavior or other failures during the upgrade process, it is recommended to check the current health status of the cluster before the upgrade. This operation can be completed through the status subcommand.

{{< copyable "shell-regular" >}}

```shell
vsctl cluster status
```

After execution, the cluster status check result will be output. If the cluster status display result is "Running", it indicates that the current cluster is in normal operation status and can continue to upgrade; If the result is "Error", it means that there are components in the current cluster that are in abnormal status. The corresponding abnormal status should be eliminated first, and the result should be checked again as "Running" before continuing the upgrade.

## Upgrade the Vanus cluster

This section describes how to upgrade the Vanus cluster and verify the version after the upgrade.

### Upgrade the Vanus cluster to a specified version

By default, Vsctl upgrades the Vanus cluster using the online method, which means that the Vanus cluster can still provide services during the upgrade process. With the online method, the leaders are migrated one by one on each node before the upgrade and restart. Therefore, for a large-scale cluster, it takes a long time to complete the entire upgrade operation.

{{< copyable "shell-regular" >}}

```shell
vsctl cluster upgrade --version <version>
```

For example, if you want to upgrade the cluster to v0.7.0:

{{< copyable "shell-regular" >}}

```shell
vsctl cluster upgrade --version v0.7.0
```

### Verify the cluster version

Execute the `status` command to view the latest cluster version `Cluster Version`：

{{< copyable "shell-regular" >}}

```shell
vsctl cluster status
```

```
+-----------------------+------------------+
|          NAME         |      RESULT      |
+-----------------------+------------------+
|    Cluster Version    |      v0.7.0      |
+-----------------------+------------------+
|     Cluster Status    |      Running     |
+-----------------------+------------------+
```

## FAQ

This section describes common problems encountered when updating the Vanus cluster using Vsctl.
