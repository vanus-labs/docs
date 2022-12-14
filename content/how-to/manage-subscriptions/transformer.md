---
title: Vanus Transformer
---

# Vanus Transformer

you can use transformer in vanus to customize data from a CloudEvent before send to sink. Using the transformer in `vsctl` or the API, you define variables that use JSON path to reference values in the original CloudEvent source. The transformed CloudEvent is sent to a sink instead of the original CloudEvent. You can define variables, assigning each a value from the CloudEvent attribute or data. Then you can use those variables in the Template or Function as `<variable-name>`.

## Prerequisites

Because define variables that use JSON path, so if you define variables use CloudEvent data, data must be JSON format.

## Use And Example

When create a subscription,option param `transformer` has three param `define`, `pipeline` and `template`.

For example:

```shell
vsctl subscription create \
  --eventbus testeb \
  --sink 'http://localhost:8080' \
  --transformer '{
      "define": {
        "source": "$.source",
        "amount": "$.data.amount"
      },
      "pipeline":[
        {"command":["create","$.data.source","$.source"]},
        {"command":["delete","$.data.date"]}
      ]
      "template": "source is <source>, amount is <amount>"
    }'
```

## Define

The param `define` is used to define variables. Use JSON path to reference items in the CloudEvent and store those values in variables.
The following is an example event.

```json
{
  "specversion": "1.0",
  "id": "4395ffa3-f6de-443c-bf0e-bb9798d26a1d",
  "source": "cloud.aws.billing",
  "type": "aws.service.daily",
  "datacontenttype": "application/json",
  "time": "2022-06-14T07:05:55.777689Z",
  "vanuskey": "vanusValue",
  "data": {
    "date": "2022-06-13",
    "service": "Amazon Elastic Compute Cloud - Compute",
    "amount": "12.294",
    "unit": "USD"
  }
}
```

For instance, you can define variables like:

```json
"define": {
  "source": "$.source",
  "date": "$.data.date",
  "amount": "$.data.amount",
  "unit": "$.data.unit",
  "service": "$.data.service"
}
```

## Function

The param `pipeline` is used to define function. pipeline is a nested array which every item is a function as a map which key use command and value is an array which it's first param as function name, following as function param.

For more about and Vanus support function please go to [function reference](function-reference.md).

For example:

```json
"pipeline":[
    {"command":["create","$.data.source","$.source"]},
    {"command":["delete","$.vanuskey"]}
]
```

## Template

The param template is the CloudEvent data you want to send to sink.
You can create a template that either a string or JSON format.
Using the previous define variables, the following template examples will transform the event data to the example data.

| description                | template                                                         | CloudEvent data                                                                             |
|----------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| simple string              | Billing \<date> amount \<amount> \<unit>                       | Billing 2022-06-13 amount 12.194 USD                                                      |
| string with escaped quotes | Billing \<date> service "\<service>" amount \<amount> \<unit> | Billing 2022-06-13 \"Amazon Elastic Compute Cloud - Compute\" amount 12.194 USD           |
| simple JSON                | {<br/>  "service": \<service>,<br/>  "amount":\<amount><br/>}    | {<br/>  "service": "Amazon Elastic Compute Cloud - Compute",<br/>  "amount": "12.194"<br/>} |

> the tempplate will replace event data, so functon will be no effect if it changes data.
