# Use Cloud Functions

Vanus support direct send events to [Cloud Functions][cloud functions]. The following page will teach you how to use Cloud Functions with `vsctl` command in Vanus.

> Vanus only support Cloud Funtions(2nd gen) HTTP triggers.

## Prerequisites

Before using Cloud Function, you must meet the following prerequisites.

1. Have a running [Vanus](https://github.com/linkall-labs/docs/blob/main/user-manual/getting-started/install/k8s(recommended).md) cluster.
2. Have [vsctl](https://github.com/linkall-labs/docs/blob/main/user-manual/how-to/vsctl.md).
3. Have a Cloud account and create a [service account].
4. Have a [Cloud Function][function].
5. The "cloudfunctions.functions.invoke" [permission] grant for your gcloud account

## Create Subscription Use Cloud Functions

When you create a subscription `protocol` use "gcloud-functions", then Vanus will send events to your function. for example:

```bash
vsctl subscription create \
  --eventbus=test-function \
  --sink "https://function-1-tvm6jmwz6a-uc.a.run.app" \
  --protocol gcloud-functions \
  --credential-type gcloud \
  --credential-file ./gcloud_credentail.json
```

The following params are also required:

1. `sink`: your Cloud Function URL.
2. `credential-type` is must be "gcloud".
3. `credential` is a file which save your gcloud [service account].

[cloud functions]: https://cloud.google.com/functions/docs/concepts/overview
[service account]: https://cloud.google.com/iam/docs/creating-managing-service-account-keys
[function]: https://cloud.google.com/functions/docs/console-quickstart
[permission]: https://cloud.google.com/functions/docs/securing/managing-access-iam
