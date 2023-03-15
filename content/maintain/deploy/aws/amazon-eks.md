# Deploy Vanus cluster on AWS EKS

This document describes how to deploy a Vanus cluster on AWS Elastic Kubernetes Service (EKS).

To deploy Vanus Operator and the Vsctl in a self-managed Kubernetes environment, refer to Deploy Vanus Operator and [Deploy Vsctl](https://github.com/vanus-labs/docs/blob/main/user-manual/how-to/vsctl.md) on General Kubernetes.

## Prerequisites

Before deploying a Vanus cluster on AWS EKS, make sure the following requirements are satisfied:


* Complete all operations in [Getting started with eksctl](https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/getting-started-eksctl.html).

  This guide includes the following contents:

  - Install [awscli](https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/getting-started-install.html)
  - Configure [awscli](https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config)
  - Install and configure [eksctl](https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/eksctl.html) used for creating Kubernetes clusters.
  - Install [kubectl](https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/install-kubectl.html)

To verify whether AWS CLI is configured correctly, run the `aws configure list` command. If the output shows the values for access_key and secret_key, AWS CLI is configured correctly. Otherwise, you need to re-configure AWS CLI.

> **Note:**
>
> The operations described in this document require at least the [minimum privileges needed by eksctl](https://eksctl.io/usage/minimum-iam-policies/) and the [service privileges needed to create a Linux bastion host](https://aws-quickstart.github.io/quickstart-linux-bastion/#_aws_account).

## Recommended instance types and storage

* Instance types: to gain better performance, the following is recommended:
  - Store nodes: c5.2xlarge
  - Etcd nodes: m4.xlarge
* Storage: Because AWS supports the EBS gp3 and io2 volume type, it is recommended to use EBS io2. For io2 provisioning, the following is recommended:
  - Etcd：500 MiB/s, 5000 IOPS
  - Store：1000 MiB/s, 10000 IOPS
* AMI type: Amazon Linux 2

The above configuration is the default recommended configuration. You need to adjust it according to your cluster size and business load type. For details, please refer to [Amazon EBS–optimized instances](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-optimized.html#current-accelerated-computing) and [Etcd hardware recommendations](https://etcd.io/docs/v3.5/op-guide/hardware/).

## Create an EKS cluster and a node pool

According to AWS [Official Blog](https://aws.amazon.com/cn/blogs/containers/amazon-eks-cluster-multi-zone-auto-scaling-groups/) recommendation and EKS [Best Practice Document](https://aws.github.io/aws-eks-best-practices/reliability/docs/dataplane/#ensure-capacity-in-each-az-when-using-ebs-volumes).

Save the following configuration as the cluster.yaml file. Replace ${clusterName} with your desired cluster name. The cluster and node group names should match the regular expression [a-zA-Z][-a-zA-Z0-9]*, so avoid names that contain _.

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: ${clusterName}
  region: us-west-2

nodeGroups:
  - name: vanus-core
    desiredCapacity: 3
    privateNetworking: true
    availabilityZones: ["us-west-2b"]
    instanceType: c5.2xlarge
    labels:
      dedicated: core
```

By default, three Vanus nodes are required, so you can set the desiredCapacity of the vanus-core node group to 3. You can scale out this node group any time if necessary.

Execute the following command to create the cluster:

```shell
eksctl create cluster -f cluster.yaml
```

After executing the command above, you need to wait until the EKS cluster is successfully created and the node group is created and added in the EKS cluster. This process might take 5 to 20 minutes. For more cluster configuration, refer to [eksctl documentation](https://eksctl.io/usage/creating-and-managing-clusters/#using-config-files).


> **Warning:**
>
> - If you created a cluster using eksctl, you can skip this warning. This is because eksctl has completed this step for you. Enable kubectl to communicate with your cluster by adding a new context to the kubectl config file. If you do not create a cluster using eksctl, you need to execute the following command to create or update the kubeconfig file for the cluster. Replace region-code with the AWS region where your cluster is located, and replace my-cluster with the name of your cluster.
> 
> ```shell
> aws eks update-kubeconfig --region region-code --name my-cluster
> ```

## Configure StorageClass

This section describes how to configure StorageClass for different storage types, including gp2 storage type(default), gp3 storage type, io2 storage type(recommended), or other EBS storage types that exist by default after the EKS cluster is created.

### gp2 storage type(default)

After you create an EKS cluster, the default StorageClass is gp2.

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
  name: gp2
parameters:
  fsType: ext4
  type: gp2
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
```

### gp3 storage type

If you do not want to use the default gp2 storage type, you can create StorageClass for other storage types. For example, you can use the gp3 storage type.

The following example shows how to create and configure a StorageClass for the gp3 storage type:

1. For gp3 storage type, please refer to [Amazon EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) to deploy the [Amazon Elastic Block Store (EBS) CSI driver](https://github.com/kubernetes-sigs/aws-ebs-csi-driver) on EKS.

2. Create a StorageClass resource. In the resource definition, specify your desired storage type in the `parameters.type` field.

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
  name: gp3
parameters:
  fsType: xfs
  type: gp3
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
```

3. In the Vanus Cluster YAML file, configure `gp3` in the `storageClassName` field. For example:

```yaml
spec:
  volumeClaimTemplates:
    ...
    storageClassName: gp3
```

### io2 storage type(recommended)

> **Note**
>
> - io2 Block Express volumes are supported with C6in, C7g, M6in, M6idn, M7g, R5b, R6in, R6idn, R7g, Trn1, X2idn, and X2iedn instances.

Vanus is an I/O-intensive workload. If you want to obtain higher performance, you can choose to use [io2 storage type](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/provisioned-iops.html#io2-block-express)。

The following example shows how to create and configure a StorageClass for the io2 storage type:

1. For io2 storage type, please refer to [Amazon EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) to deploy the [Amazon Elastic Block Store (EBS) CSI driver](https://github.com/kubernetes-sigs/aws-ebs-csi-driver) on EKS.

2. Create a StorageClass resource. In the resource definition, specify your desired storage type in the parameters.type field.

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
  name: io2
parameters:
  fsType: xfs
  type: io2
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
```

3. In the Vanus Cluster YAML file, configure `io2` in the `storageClassName` field. For example:

```yaml
spec:
  volumeClaimTemplates:
    ...
    storageClassName: io2
```

If you want to learn more about EBS storage type selection and configuration information, please check [AWS Official Document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) and [Storage Class Official Document](https://kubernetes.io/docs/concepts/storage/storage-classes/).

## Deploy Vanus Operator

Reference [vanus-operator](https://github.com/vanus-labs/vanus-operator）to deploy Vanus Operator in the EKS cluster.

Execute the following command to deploy the Vanus Operator:

```shell
kubectl apply -f https://dl.vanus.ai/vanus/operator/latest/vanus-operator.yml
```

### View the Vanus Operator status

To view the status of the Vanus Operator, run the following command:

```
kubectl get pod -n vanus
```

When vanus-operator-xxx is in the Running state, it can be considered that the Vanus Operator has been successfully started. The following is an example output of a normal Vanus Operator:

```
NAME                              READY   STATUS    RESTARTS   AGE
vanus-operator-579954766c-vqk4h   2/2     Running   0          39s
```

## Deploy Vanus Cluster

It is recommended to use the Vsctl to deploy the Vanus cluster. Refer to the [Vsctl](https://github.com/vanus-labs/docs/blob/main/user-manual/how-to/vsctl.md) document for install vsctl.

### Configure Vanus Operator Endpoint

The Vanus Operator uses the LoadBalancer type service by default, so that the Vanus Operator can be accessed normally outside the EKS cluster (such as vsctl).

Execute the following command to configure the Vanus Operator Endpoint to make vsctl cluster subcommand work properly:

```shell
export VANUS_OPERATOR="$(kubectl -n vanus get svc vanus-operator -o jsonpath='{.status.loadBalancer.ingress[*].hostname}'):8089"
```

> **Note**
>
> - After the Vanus Operator Service (LoadBalancer) resource is created successfully, it is expected to take several minutes for the network to take effect. Please wait patiently. You can also verify whether the network is available through the following command:
> ```
> ping $(kubectl -n vanus get svc vanus-operator -o jsonpath='{.status.loadBalancer.ingress[*].hostname}')
> ```

### Generate Vanus Cluster Topology

Execute the following command to generate the Vanus cluster topology file:

```shell
vsctl cluster generate
```

After the command is executed successfully, the Vanus cluster default topology file will be automatically generated in the current directory. The file name is `cluster.yaml.example`. The Vanus cluster default topology is as follows:

```
version: v0.7.0
etcd:
  # etcd replicas is 3 by default, modification not supported
  replicas: 3
  storage_size: 10Gi
  # specify the pvc storageclass of the etcd, use the cluster default storageclass by default
  # storage_class: gp3
controller:
  # controller replicas is 2 by default, modification not supported
  replicas: 2
store:
  replicas: 3
  storage_size: 10Gi
  # specify the pvc storageclass of the store, use the cluster default storageclass by default
  # storage_class: io2
gateway:
  # gateway replicas is 1 by default, modification not supported
  replicas: 1
trigger:
  replicas: 1
timer:
  # timer replicas is 2 by default, modification not supported
  replicas: 2
```

The default deployed Vanus cluster version is v0.7.0. You can also modify the version field to deploy a lower version. You can adjust the initial number of replicas of the cluster by modifying the replicas field of each component, or expand the number of replicas by using the `vsctl cluster scale` subcommand after deployment. The default size of the PV attached to the storage component is 10Gi. It is recommended that you adjust it according to the actual business data volume.

### Deploy Vanus Cluster

Execute the following command to deploy the Vanus cluster:

```shell
vsctl cluster create --config-file cluster.yaml.example
```

After executing the above command, the cluster topology will be printed for you to reconfirm. If it meets the expectations, you can continue to deploy, as shown below:

```
+---------+---------+------------+----------+-------------+--------------+
| CLUSTER | VERSION |  COMPONENT | REPLICAS | STORAGESIZE | STORAGECLASS |
+---------+---------+------------+----------+-------------+--------------+
|  vanus  |  v0.7.0 |    etcd    |     3    |     10Gi    |       -      |
|         |         +------------+----------+-------------+--------------+
|         |         |    store   |     3    |     10Gi    |       -      |
|         |         +------------+----------+-------------+--------------+
|         |         | controller |     2    |      -      |       -      |
|         |         +------------+----------+-------------+--------------+
|         |         |   gateway  |     1    |      -      |       -      |
|         |         +------------+----------+-------------+--------------+
|         |         |   trigger  |     1    |      -      |       -      |
|         |         +------------+----------+-------------+--------------+
|         |         |    timer   |     2    |      -      |       -      |
+---------+---------+------------+----------+-------------+--------------+
The cluster specifications are shown in the above table. Please confirm whether you want to create the cluster(y/n):y
+------------------------+
|         RESULT         |
+------------------------+
| Create Cluster Success |
+------------------------+
```

### View Vanus Cluster deployment status

Execute the following command to view the Vanus cluster deployment status:

```
kubectl get pod -n vanus
```

When all the Pods are in the Running state, the Vanus cluster is successfully started. For example:

```
NAME                              READY   STATUS    RESTARTS   AGE
vanus-controller-0                1/1     Running   0          54s
vanus-controller-1                1/1     Running   0          51s
vanus-etcd-0                      1/1     Running   0          2m17s
vanus-etcd-1                      1/1     Running   0          2m17s
vanus-etcd-2                      1/1     Running   0          2m17s
vanus-gateway-79c98459c6-sx572    1/1     Running   0          54s
vanus-operator-579954766c-9jdsh   2/2     Running   0          40m
vanus-root-controller-0           1/1     Running   0          51s
vanus-root-controller-1           1/1     Running   0          51s
vanus-store-0                     1/1     Running   0          54s
vanus-store-1                     1/1     Running   0          42s
vanus-store-2                     1/1     Running   0          27s
vanus-timer-58dfd7c6dc-4dgm6      1/1     Running   0          54s
vanus-timer-58dfd7c6dc-tfghk      1/1     Running   0          54s
vanus-trigger-9fccddc6f-wq65x     1/1     Running   0          54s
```

> **Note**
>
> - Vanus cluster installation will deploy the Etcd clusters first, and other components need to wait for the Etcd cluster to be ready before they can start. Therefore, Vanus cluster deployment is expected to take 1-2 minutes, please wait patiently.

So far, you have successfully deployed the Vanus cluster.

For other cluster operations, you can refer to the `vsctl cluster -h` subcommand.
