# Use Cloud Billing Source to retrieve bills from multiple cloud vendors

## Overview

Vanus obtains bills by using interfaces from various cloud vendors. It uses Elasticsearch for data storage to achieve unified management of bills. It also notifies the team of abnormal expenses via Feishu-bot.
![billing](./billing.png)
In this tutorial, you will learn how to use Cloud Billing Source of Vanus to acquire the billing from Cloud Service providers like AWS and AliCloud, and store the data in Elasticsearch. If any resource caused abnormal billing, alters would be sent out via feishu-bot.

## Prerequisites

- [Install Vanus](https://github.com/linkall-labs/docs/blob/main/vanus/quick-start.md)

- Install Elasticsearch and Kibana

  ```bash
  kubectl apply -f install-elasticsearch.yaml
  ```

- Configure Feishu-bot（ [自定义机器人指南](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)）

## Step 1: Create EventBus

```bash
vsctl eventbus create --name tutorials
```

## Step 2: Create Source & Sink

Navigate to the `tutorials/billing` directory

```bash
cd ./docs/tutorials/billing
```

### Create Data Source - bills from cloud vendors

With command line, you create [AWS Billing Source](https://github.com/linkall-labs/vance/blob/main/connectors/source-aws-billing/README.md) and [AliCloud Billing Source](https://github.com/linkall-labs/vance/blob/main/connectors/source-alicloud-billing/README.md),

1. Modify the attribute  `env` in file source-aws-billing.yaml
   - Modify `ACCESS_KEY_ID` 
   - Modify `SECRET_ACCESS_KEY` 
2. Modify file source-alicloud-billing.yaml
   - Modify `ACCESS_KEY_ID`
   - Modify `SECRET_ACCESS_KEY` 
3. Then, apply that yaml using `kubectl`:

```bash
kubectl apply -f source-aws-billing.yaml
kubectl apply -f source-alicloud-billing.yaml
```

### Create Sink End - Elasticsearch

With the command line of Vanus,  you create the event sink end: [Elasticsearch Sink](https://github.com/linkall-labs/vance/blob/main/connectors/sink-elasticsearch/README.md),

1. Modify sink-elasticsearch-billing.yaml, attribute `env`:`ADDRESS`,`USERNAME`,`PASSWORD` are all configurations of Elasticsearch

2. Then, apply that yaml using `kubectl`:

```bash
kubectl apply -f sink-elasticsearch-billing.yaml
```

### Create Target End  - Feishu-bot

With the command line of Vanus,  you create the event sink end: [Feishu-bot](https://github.com/linkall-labs/vance/blob/main/connectors/sink-feishu-bot/README.md)

1. Modify sink-feishu-bot.yaml, attribute `env`
   - Modify ` V_TARGET` ,this is a webhook provided by feishu-bot
   - Modify `FEISHU_SECRET` , this is a secret token provided by feishu-bot

2. Then, apply that yaml using `kubectl`:

```
kubectl apply -f sink-feishu-bot.yaml
```

## Step 3: Subscription Event

### Create Elasticsearch Subscription

Create Subscription Event, you can do a filter before delivering event to the sink end:

```bash
vsctl subscription create \
  --eventbus tutorials \
  --sink 'http://elasticsearch-billing-sink.default:8080' \
  --filters '[
    {
      "suffix": {
          "source":".billing"
      }
    }
  ]'
```

- `sink` Tthe target end of the event delivery.
- `filters` The ways of filtering the events. 
- use keyword `suffix` to do the postfix match for attribute source

### Create Feishu-bot Subscription

Create Subscription Event, you can do a filter before delivering event to the sink end:

```bash
vsctl subscription create \
  --eventbus battle \
  --sink 'http://feishu-bot-sink.default' \
  --filters '[
        {
            "suffix": {
                "source":".billing"
            }
        },
        {
            "cel":"$amount.(double) >= 8.013"
        }
    ]' \
  --transformer '{
      "define": {
        "date": "$.data.date",
        "amount": "$.data.amount",
        "unit": "$.data.unit",
        "source": "$.source",
        "service": "$.data.service"
      },
      "template": "date:${date},source is ${source},\"${service}\" amount:${amount} ${unit}"
    }'
```

- `sink` Points to the target end of the event delivery.
- `filters` The method of filtering the events. 
  - `suffix` to do the postfix match for attribute source
  - `cel`key word for filtering the attributes by expression， for example to filter a resource attribute (amount)> threshold(8.013);
- `input-transformer` attribute for event transform, redefine the content of event by template
  - `define`, the keyword for defining the variable which template would need。use JSONPath to get the content of the event, and save it in the defined variable;
  - `template`, keyword, for doing the transform of an event by customized format, then route to target.

## Step 4: Result Checking

### Check Billing Data

Now let's connect to kibana where we can manage data and do data analysis.

![billing](./billing-kibana.png)

### Check Warning Message

When certain resource in bills triggered by Feishu-bot, you would see the warning messages:

![billing](./billing-feishu.png)

## Summary

In this tutorial, you can learn:

- How to use two sources and two sinks.
- How to do the event filter and content transform.

