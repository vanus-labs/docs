---
title: Use Vanus Operator
---

# Upgrade Vanus Cluster Using Operator

If you use Vanus Operator to deploy and manage a Vanus cluster on Kubernetes, you can upgrade the version of a Vanus cluster through rolling update to reduce the impact on business. This article describes how to use the Operator to upgrade the Vanus cluster on Kubernetes.

## Upgrade Sequence

When upgrading, Vanus Operator will upgrade in the order of Controller, Store and other components. Rolling upgrade will delete the old version of Pod and create a new version of Pod. When the new version of Pod runs normally, the next Pod can be processed.

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

## Upgrade the Vanus cluster

1. In Vanus CR, modify the image version of the cluster to be upgraded.

    {{< copyable "shell-regular" >}}

    ```shell
    kubectl edit vanus ${vanus_cr_name} -n ${namespace}
    ```

    Vanus currently does not support the upgrade of individual components, so it is required that all components in the cluster use the same version, so modify 'spec.version'.

    The format of the `version` field is as follows:

    - `spec.version`. the format is `imageTag`, such as `v0.7.0`.

2. Check the upgrade progress:

    {{< copyable "shell-regular" >}}

    ```shell
    watch kubectl get pod -n ${namespace} -o wide
    ```

    After all the Pods finish rebuilding and become `Running`, the upgrade is completed.

3. Check the upgrade progress:

    {{< copyable "shell-regular" >}}

    ```shell
    vsctl cluster status
    ```

    After the upgrade is completed, you can view the upgraded cluster version and status information through the `vsctl cluster status` command.
