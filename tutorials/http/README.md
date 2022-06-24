# Use HTTP Source as Grafana webhook URL

## Overview

Grafana is an open and composable observability and data visualization platform, have lots of event for metrics. Use Vanus can easily do the integration with Grafana, and manage events like alert and others together.

![grafana](./grafana.png)

In this tutorial, you will learn how to use Vanus's HTTP Source Connector with Grafana data source to aquire the alert data; How to use Vanus's Elasticsearch Sink Connector saving alert data to Elasticsearch.

## Prerequisites

- [Install Vanus](https://github.com/linkall-labs/docs/blob/main/vanus/quick-start.md)

- Instll and run Grafana

  ```bash
  kubectl apply -f install-grafana.yaml
  ```

- Instll and run Elasticsearch and Kibana

  ```bash
  kubectl apply -f install-elasticsearch.yaml
  ```

## Step 1: Create EventBus

```bash
vsctl eventbus create --name tutorials
```

## Step 2: Create Source & Sink

Now navigate to the `tutorials/http` directory

```bash
cd ./docs/tutorials/http
```

Do the following steps.

### Create HTTP Source Service

Create via cli [HTTP Source](https://github.com/linkall-labs/vance/blob/main/connectors/source-http/README.md).
```bash
kubectl apply -f source-http.yaml
```

### Create Target End - Elasticsearch

Use the command line of Vanus create the event target: [Elasticsearch Sink](https://github.com/linkall-labs/vance/blob/main/connectors/sink-elasticsearch/README.md),

1. Modify sink-elasticsearch-grafana.yaml , attribute `env`: `ADDRESS`,`USERNAME`,`PASSWORD` are all configuration of Elasticsearch
2. Then, apply that yaml using `kubectl`:

  ```bash
  kubectl apply -f sink-elasticsearch-grafana.yaml
  ```

## Step 3: Subscription

Use Vanus command line create Subscription Event, here can do filter before deliver event to sink end, execute the following command:

```bash
vsctl subscription create \
  --eventbus tutorials \
  --sink 'http://elasticsearch-grafana-sink.default:8080' \
  --filters '[
    {
      "exact": {
          "source":"vance.http"
      }
    }
  ]'
```

- `sink` Points to the target end of the event delivery.

- `filters` The method of filter the events. 

  - use keyword `exact` to do the exact match for attribute source


## Step 4: Event Delivery & Result Checking

### Add Alert Event Delivery

1. Login Grafana console

2. In the left bar select Alerting > Contact points，then click【New Contact points】

3. In Contact points tab，fill the following parameters:

   - Name：give it a name
   - Contact point type：select【Webhook】
   - Url： http://http-webhook-source.default:8080

   ![grafana](./grafana-web.png)

4. Click【Test】to simulate triggering the alert, sample of alert data:

   ```json
   {
        "orgId": 1,
        "state": "alerting",
        "title": "[FIRING:1]  (TestAlert Grafana)",
        "alerts": [{
                "endsAt": "0001-01-01T00:00:00Z",
                "labels": {
                        "instance": "Grafana",
                        "alertname": "TestAlert"
                },
                ...,
                "valueString": "[ metric='foo' labels={instance=bar} value=10 ]",
                "dashboardURL": "",
                "generatorURL": ""
        }],
        "status": "firing",
        ...,
        "commonLabels": {
                "instance": "Grafana",
                "alertname": "TestAlert"
        },
        "truncatedAlerts": 0,
        "commonAnnotations": {
                "summary": "Notification test"
        }
   }
   ```

### Check alert data

Now let's connect to kibana so that we can manage data and perform data analysis.

![grafana](./grafana-kibana.png)

## Summary

In this tutorial, we have learned:

- How to join sources and sink.
- Of course, for tools like Jenkins,GitHub,Prometheus those who support to use Webhook to trigger event, both alert and event can be saved by this way, and manage all events together.