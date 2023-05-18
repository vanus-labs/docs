# Prerequisites

Before forwarding events to Feishu, you must have:

- A Doris cluster.

# Getting Started

**To set up Doris Sink in Vanus Cloud:**

1. Provide the following credentials

   - Fenodes: Enter the comma-separated list of FQDNs or IP addresses of the nodes that make up your Doris cluster.
   - Database Name: Enter the name of the database that you want to use for the sink.
   - Table Name: Enter the name of the table that you want to use for the sink.
   - Username: Enter the username that you want to use to connect to your Doris database.
   - Password: Enter the password that corresponds to the username you entered in the previous step.
     ![](images/doris.png)

2. Click `Next`

# Custom Connection

Create your template following the structure of your database, an example:

```json
{
  "title": "value",
  "date": "value",
  "ect...": "value"
}
```
