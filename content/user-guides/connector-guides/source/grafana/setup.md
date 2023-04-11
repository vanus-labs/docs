# Grafana

This guide contains information to set up a Grafana Source in Vanus Cloud.

## Introduction

Grafana is a powerful open-source data visualization and monitoring tool that can be used to visualize and analyze various types of data, including cloud events.

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)
- Grafana installed on your machine or an Account in Grafana Cloud

## Getting Started

To obtain all Grafana events using the Streams menu and Webhook option in Vanus Cloud, follow these steps:

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).
2. Click on the **create connection** button under connections.
3. From the list of sources, choose **Grafana**.
4. Click **`Next`** to save the Grafana Source.
5.  After creating your connection, select your connection and get the payload from the Grafana information.
   ![](content/user-guides/connector-guides/source/grafana/images/payload.png)

### Configuring Grafana to Send Webhook Events

1. Log in to your Grafana account.
2. Navigate to the **Alerting** menu in the **Menu** Tab.
3. Click on the **Contact Points** button.
4. Click on **Add Contact Point**
5. Name your contact point and select the **Webhook** option.
   ![](content/user-guides/connector-guides/source/grafana/images/webhook.png)
6. Provide the payload URL of your Grafana source connector in Vanus Cloud.
7. Save your settings.

## Supported Events

Resource usage metrics:

- CPU utilization
- Memory usage

Security events:

- Failed login attempts

Billing and cost metrics:

- Instances running
- Storage usage
