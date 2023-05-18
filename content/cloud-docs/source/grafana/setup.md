# Prerequisites

- A Grafana instance or an account in Grafana cloud

# Getting Started

Perform the following steps to configure your Grafana Source:

## Create a Connection

1.  Write a name for your connection.
   ![img.png](images/1..png)
2. From the list of sources, choose **Grafana**.
![img.png](images/source.png)
3. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction. 
   ![img.png](images/2..png)
4. Click **`Next`** to save the Grafana Source. 

# **Configuring Grafana to send Events**

1. Click the copy icon to copy the Webhook URL.
   ![](images/copy%20webhook%20url.png)
2. Log in to your [Grafana](https://grafana.com) account.
3. Navigate to the **Alert & IRM** menu in the **Menu** Tab, and click on **Alerting**.
![img.png](images/alert.png)
4. Click on the **Contact Points**, and click on **Add contact point**.
![img_1.png](images/add%20contacts.png)
5. Name your contact point, click on integration, select webhook, provide the payload URL from Vanus Cloud, and **Save contact point**.
![img_2.png](images/save%20contact.png)

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
