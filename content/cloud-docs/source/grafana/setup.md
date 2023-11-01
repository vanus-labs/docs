--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- A Grafana instance or a [**Grafana cloud account**](https://grafana.com/)

---

**Perform the following steps to configure your Grafana Source.**

### Grafana Connection Settings

- Write a **Name**① for your connection in Vanus Connect.

![grafana-source-1.webp](images/grafana-source-1.webp)

# Configuring Grafana to send Events

1. Click on the **copy**① icon to copy the Webhook URL. Use the Webhook URL to receive events.

![grafana-source-2.webp](images/grafana-source-2.webp)

3. Log in to your [**Grafana Account**]②(https://grafana.com).

![images/grafana-source-8.webp](images/grafana-source-8.webp)

4. Click on the **hamburger button**③, navigate to **Alerts & IRM**④, and select **Alerting**⑤.

![grafana-source-4.webp](images/grafana-source-4.webp)

5. Select **Contact points**⑥, and click on **Add contact point**⑦.

![grafana-source-5.webp](images/grafana-source-5.webp)

6. **Name**⑧ your contact point, click on integration and select **webhook**⑨, provide the payload **URL**⑩ from Vanus Connect, and **Save contact point**⑪.

![grafana-source-6.webp](images/grafana-source-6.webp)

7. Click **Next**⑫ and continue the configuration.

![grafana-source-7.webp](images/grafana-source-7.webp)

---


Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
