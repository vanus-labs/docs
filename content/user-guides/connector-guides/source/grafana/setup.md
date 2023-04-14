# Grafana

This guide contains information to set up a Grafana Source in Vanus Cloud.

## Introduction

Grafana is an open-source platform for data visualization and analytics. It enables users to create and share dashboards, charts, and alerts across multiple data sources.

The Grafana Source is a webhook server that enables you to establish an endpoint for receiving events from Grafana. To achieve this, it is necessary to establish a connection within Grafana.


## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- A Grafana instance or an account in Grafana cloud

## Getting Started

To obtain all Grafana events using Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Grafana**.
4. Click **`Next`** to save the Grafana Source.
5. After creating your connection, select your connection and get the payload from the Grafana information.
![](images/payload.png)

### Configuring Grafana to send Events

1. Log in to your Grafana account.
2. Navigate to the **Alert & IRM** menu in the **Menu** Tab.
![img.png](images/img.png)
3. Click on the **Contact Points**, and click on **add contact point**.
![img_1.png](images/img_1.png)
4. Name your contact point and click on integration and select webhook.
5. Provide the payload URL of your Grafana source connector in Vanus Cloud.
![img_2.png](images/img_2.png)
6. Save your settings.

## Supported Events
This Vanus Cloud Source connector offers support for various events. Below is a list of the supported events:

Resource usage metrics:

- CPU utilization
- Memory usage

Security events:

- Failed login attempts

Billing and cost metrics:

- Instances running
- Storage usage

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).