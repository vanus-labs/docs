# Vanus Transformer

The transformer feature from Vanus lets you customize data from a CloudEvent before sending it to the Sink connector. With this feature, you can create Variables according to JSON values. Once you've created variables for all the desired data, you can create a template. You can make the Variables from the CloudEvent attributes and data.

:::tip
The transforming tool uses JSON format, so the receiving data must be in a JSON format to use it.
Although it is still possible to partially use the transformer tool to get the CloudEvent attributes.
:::

## Uses And Example

When creating a subscription, you can use parameter --transformer which have three parameter options: `define`, `pipeline` and `template`.

For example:

```shell
vsctl subscription create \
  --name quick-start \
  --eventbus quick-start \
  --sink 'http://localhost:8080' \
  --transformer '{
      "define": {
        "source": "$.source",
        "amount": "$.data.amount"
      },
      "pipeline":[
        {"command":["create","$.data.source","$.source"]},
        {"command":["delete","$.data.date"]}
      ],
      "template": "source is <source>, amount is <amount>"
    }'
```

The original event:

```json
{
    "id": "080e28a0-b437-11ed-9250-18275c0cc45b",
    "source": "https://api.github.com/repos/vanus-demo/test-repo",
    "type": "com.github.star.created",
    "datacontenttype": "application/json",
    "time": "2022-02-21T07:32:44.190Z",
    "vanusattr": "vanus"
    "data": {
        "action": "created",
        "sender": {
            "login": "vanus-demo",
            "type": "User"
        }
    }
}
```

## Define

The parameter `define` is used to define variables. Using JSON path to reference items in the CloudEvent and store those values in variables.

For example, you can define variables like:

```json
"define": {
  "source": "$.source",
  "vanusattr": "$.vanusattr",
  "login": "$.data.sender.login",
  "sender": "$.data.sender",
  "action": "$.data.action"
}
```

## Pipeline

The parameter `pipeline` helps you define functions. These functions create, delete, move, rename, etc. They can give you the ability to make specific changes to your data.

Refer to the [function reference](function-reference.md) document for more information.

For example, you can create pipelines in the following way:

```json
"pipeline": [
    {"command":["create","$.data.source","$.source"]},
    {"command":["create","$.login","<login>"]},
    {"command":["move","$.data.sender.type","$.data.type"]},
    {"command":["delete","$.vanusattr"]},
    {"command":["delete","$.data.sender"]},
    {"command":["upper_case","$.data.action"]}
]
```

The the event will became:

```json
{
    "id": "080e28a0-b437-11ed-9250-18275c0cc45b",
    "source": "https://api.github.com/repos/vanus-demo/test-repo",
    "type": "com.github.star.created",
    "datacontenttype": "application/json",
    "time": "2022-02-21T07:32:44.190Z",
    "login": "vanus-demo",
    "data": {
        "source": "https://api.github.com/repos/vanus-demo/test-repo",
        "type": "User",
        "action": "CREATED"
    }
}
```

## Template

The parameter `template` is where you can structure events with the variables created in define which grammar like `<source>`  or in JSON path which's grammar like `<$.data.source>`, which will be sent to the Sink connector in the format created. You can create a template either in a string or a JSON format.

:::tip
The template will replace the event data.
:::

### String

For example, you can create template in the following way:

```json
"template": "user <login> at <$.time> stared the repository <$.data.source>"
```

The event will become:

```json
{
    "id": "080e28a0-b437-11ed-9250-18275c0cc45b",
    "source": "https://api.github.com/repos/vanus-demo/test-repo",
    "type": "com.github.star.created",
    "datacontenttype": "text/plain",
    "time": "2022-02-21T07:32:44.190Z",
    "login": "vanus-demo",
    "data": "user vanus-demo at 2022-02-21T07:32:44.190Z stared the repository https://api.github.com/repos/vanus-demo/test-repo"
}
```

### JSON

For example, you can create template like:

```json
"template": "{\"user\": \"<login>\",\"content\": \"stared the repository <$.data.source>\"}"
```

The event will became:

```json
{
    "id": "080e28a0-b437-11ed-9250-18275c0cc45b",
    "source": "https://api.github.com/repos/vanus-demo/test-repo",
    "type": "com.github.star.created",
    "datacontenttype": "text/plain",
    "time": "2022-02-21T07:32:44.190Z",
    "login": "vanus-demo",
    "data": {
        "user": "vanus-demo",
        "content": "stared the repository https://api.github.com/repos/vanus-demo/test-repo"
    }
}
```
