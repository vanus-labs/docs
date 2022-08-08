# Vanus Transformer

you can use transformer in vanus to customize data from a CloudEvent before send to sink.
Using the transformer in `vsctl` or the API, you define variables that use JSON path to reference values 
in the original CloudEvent source. The transformed CloudEvent is sent to a sink instead of the original CloudEvent.
You can define variables, assigning each a value from the CloudEvent attribute or data. 
Then you can use those variables in the  Template as ${variable-name}.

## Prerequisites

Because define variables that use JSON path, so if you define variables use CloudEvent data, data must be JSON format.

## Use And Example

When create a subscription,option param transformer has two param define and template.

## Define
The param define is used to define variables. Use JSON path to reference items in the CloudEvent and store those values in variables.
The following is an example Vanus Amazon Billing Source event.

```json
{
  "specversion": "1.0",
  "id": "4395ffa3-f6de-443c-bf0e-bb9798d26a1d",
  "source": "cloud.aws.billing",
  "type": "aws.service.daily",
  "datacontenttype": "application/json",
  "time": "2022-06-14T07:05:55.777689Z",
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
{
  "source": "$.source",
  "date": "$.data.date",
  "amount": "$.data.amount",
  "unit": "$.data.unit",
  "service": "$.data.service"
}
```

## Template

The param template is the CloudEvent data you want to send to sink. 
You can create a template that either a string or JSON format. 
Using the previous define variables, the following template examples will transform the event data to the example data.

| description                | template                                                         | CloudEvent data                                                                             |
|----------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| simple string              | "Billing ${date} amount ${amount} ${unit}"                       | "Billing 2022-06-13 amount 12.194 USD"                                                      |
| string with escaped quotes | "Billing ${date} service "${service}\" amount ${amount} ${unit}" | "Billing 2022-06-13 \"Amazon Elastic Compute Cloud - Compute\" amount 12.194 USD"           |
| simple JSON                | {<br/>  "service": ${service},<br/>  "amount":${amount}<br/>}    | {<br/>  "service": "Amazon Elastic Compute Cloud - Compute",<br/>  "amount": "12.194"<br/>} |

