---
title: Manage Subscriptions
---

# Manage Subscriptions

The following page will teach you how to manage all of your Subsciptions with `vsctl` command.

## Create Subscription

To create a subscription, use the following command:

```shell
vsctl subscription create
```

### Example

```shell
vsctl subscription create --eventbus test --sink http://localhost:8080
```

### Options

```console
      --credential string          sink credential info, JSON format
      --credential-file string     sink credential file
      --credential-type string     sink credential type: aws or gcloud
      --delivery-timeout int32     event delivery to sink timeout, unit millisecond
      --eventbus string            eventbus name to consuming
      --filters string             filter event you interested, JSON format required
      --from string                consume events from, latest,earliest or RFC3339 format time
  -h, --help                       help for create
      --max-retry-attempts int32   event delivery fail max retry attempts
      --protocol string            protocol,http or aws-lambda or gcloud-functions (default "http")
      --rate-limit int32           rate limit
      --sink string                the event you want to send to
      --transformer string         transformer, JSON format required
```

## Detail Subscription

To find more details about a subscription use the following command:

```shell
vsctl subscription info
```

### Example

```shell
vsctl subscription detail --id 1660283211867739000
```

### Options

```console
 -h, --help      help for info
     --id uint   subscription id to info

```

## List Subscription

To list all subscriptions use the following command:

```shell
vsctl subscription list
```

### Example

```shell
vsctl subscription list
```

### Options

```console
 -h, --help      help for info

```

## Delete Subscription

To delete a subscription use the following command:

```shell
vsctl subscription delete
```

### Example

```shell
vsctl subscription delete --id 1660283211867739000
```

### Options

```console
 -h, --help      help for info
     --id uint   subscription id to deleting
```
