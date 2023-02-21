# Use Cloud Functions

Vanus supports sending direct events to [Cloud Functions][cloud functions]. The following page will teach you how to use Cloud Functions with vsctl commands in Vanus.

> Vanus only support Cloud Functions(2nd gen) HTTP triggers.

## Prerequisites

Before using Cloud Functions, you must meet the following prerequisites.

1. Have a running [Vanus](https://github.com/vanus-labs/docs/blob/main/user-manual/getting-started/install/k8s(recommended).md) cluster.
2. Have [vsctl](https://github.com/vanus-labs/docs/blob/main/user-manual/how-to/vsctl.md).
3. Have a Cloud account and create a [service account].
4. Have a [Cloud Function][function].
5. The "cloudfunctions.functions.invoke" [permission] grant for your gcloud account

## Create a Subscription to Use with Cloud Functions

When you create a subscription setting the `protocol` flag as "gcloud-functions", Vanus will send all available events to your Google Cloud function.

 Use the command below to create your Subscription：

```bash
vsctl subscription create \
  --name=test-function \
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
