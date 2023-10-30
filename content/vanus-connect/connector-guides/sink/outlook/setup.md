# Outlook

This guide contains information to set up an Outlook Sink in Vanus Connect.

## Introduction

Outlook is a Microsoft email application and productivity tool that helps users manage their emails and offers additional features such as calendar management, contact organization, task tracking, note-taking, and web browsing. It's widely used for efficient communication and time management in both personal and professional settings.

The Outlook Sink Connector allows you to utilize your Outlook account in sending events to external sources, and also receive events from external sources into your Outlook account.

## Prerequisites

Before forwarding events to Outlook, you must have:

- An [**Outlook Account**](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0)

- A [**Vanus Cloud Account**](https://cloud.vanus.ai).

---

**Perform the following steps to configure your Outlook Sink.**

### Outlook Connection Settings

1. Click **Authorize**① to establish a connection with your Outlook account.

![outlook-sink-1](images/outlook-sink-1.webp)

2. Pick an **Account**② or **Use another account**③.

![outlook-sink-2](images/outlook-sink-2.webp)

3. Type in your **Password**④ and click **Sign in**⑤.

![outlook-sink-3](images/outlook-sink-3.webp)

4. Click on **Accept**⑥ to grant Vanus Connect access to your Outlook account.

![outlook-sink-4](images/outlook-sink-4.webp)

5. Return to Vanus Connect and complete your configuration.

### Complete Set Up

:::note
This is a general instruction on how to complete event subscription and configure your connection settings in Vanus Connect, which can be applied to any source pairing.
:::

1. Compose your **Subject**①, specify the recipient's **email address**②, and type in the **Content**③ you want to send.

![outlook-sink-5](images/outlook-sink-5.webp)

2. Click **Display sample events**④ to see a **Sample Event**⑤ for reference. Then input **`$` followed by the desired event⑥** to access a **list of corresponding event values**⑦.

![outlook-sink-6](images/outlook-sink-6.webp)

3. You can structure the content as you prefer and fill in as many **values**⑧ as you wish to receive.

![outlook-sink-7](images/outlook-sink-7.webp)

4. Click **Submit**⑨ to finish the configuration process.

![outlook-sink-8](images/outlook-sink-8.webp)

:::note
You can structure your events to suit your specific requirements, create connections for different scenarios, or take advantage of our pre-existing connection templates for a more organized approach to sending events.
:::

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
