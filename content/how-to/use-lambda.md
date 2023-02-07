# Use Lambda

Vanus supports sending direct events to  [AWS Lambda][lambda]. The following page will teach you how to use Lambda with vsctl command in Vanus.

## Prerequisites

Before using Lambda, you must meet the following prerequisites:

1. Have a running [Vanus](https://github.com/linkall-labs/docs/blob/main/content/getting-started/installation.mdx) cluster.
2. Have [vsctl](https://github.com/linkall-labs/docs/blob/main/content/how-to/vsctl.md).
3. An AWS account configured with [Access Keys][access-keys].
4. Have a [Lambda function][lambda function]
5. The "lambda:InvokeFunction" [permission] grant for your AWS user account

## Create a Subscription to Use with Lambda

When you create a subscription setting the `protocol` flag as "aws-lambda", Vanus will send all available events to your aws-lambda.

 Use the command below to create your Subscription:

```bash
vsctl subscription create \
  --name=test-lambda \
  --eventbus=test-lambda \
  --sink "arn:aws:lambda:us-west-2:843378899134:function:eventecho" \
  --protocol aws-lambda \
  --credential-type aws \
  --credential '{"access_key_id":"xxxxxx","secret_access_key":"xxxxxxx"}'
```

The following params are also required:

1. `sink`: your lambda function ARN.
2. `credential-type`: must be "aws".
3. `credential`:  AWS account [Access Keys][access-keys],JSON format use properties "access_key_id" and "secret_access_key".

[lambda]: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
[lambda function]: https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html
[access-keys]: https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys
[permission]: https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html
