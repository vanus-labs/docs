# Vanus Transformer

The transformer feature from Vanus lets you customize data from a CloudEvent before sending it to the Sink connector. With this feature, you can create Variables according to JSON values. Once you've created variables for all the desired data, you can create a template. You can make the Variables from the CloudEvent attributes and data.
:::notice
The transforming tool uses JSON format, so the receiving data must be in a JSON format to use it.
Although it is still possible to partially use the transformer tool to get the CloudEvent attributes.
:::

## Uses And Example

When creating a subscription, you will have three parameter options: `define, pipeline and template`.

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
      ],
      "template": "source is <source>, amount is <amount>"
    }'
```

## Define

The parameter `define` is used to define variables. Using JSON path to reference items in the CloudEvent and store those values in variables. The following is an example event.

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

The parameter pipeline helps you define functions. These functions create, delete, move, rename, etc. They can give you the ability to make specific changes to your data.

Refer to the [function reference](function-reference.md) document for more information.

For example:

```json
"pipeline": [
    {"command":["create","$.data.source","$.source"]},
    {"command":["delete","$.vanuskey"]}
]
```

## Template

The parameter template is where you can structure events with the variables created in define, which will be sent to the Sink connector in the format created. You can create a template either in a string or a JSON format.

| description                | template                                                     | CloudEvent data                                                                           |
|----------------------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| simple string              | Billing `<date>` amount `<amount>` `<unit>`                  | Billing 2022-06-13 amount 12.194 USD                                                    |
| string with escaped quotes | Billing `<date>` service `<service>` amount `<amount>` `<unit>` | Billing 2022-06-13 "Amazon Elastic Compute Cloud - Compute" amount 12.194 USD           |
| simple JSON                | {<br/>  "service": `<service>`,<br/>  "amount":`<amount>`<br/>} | {<br/>  "service": "Amazon Elastic Compute Cloud - Compute",<br/>  "amount": "12.194"<br/>} |

> The template will replace the variables with the data for each event.
