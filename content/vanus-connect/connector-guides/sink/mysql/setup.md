# MySQL

This guide contains information required in setting up an MySQL Sink in Vanus Connect.  

## Introduction  

MySQL is a popular open-source relational database management system used to store, organize, and retrieve data for websites, applications, and other software.

Vanus Connect's MySQL sink connector simplifies the process of transferring data/events from various sources to a MySQL database/table, with configurable filters and upsert/insert modes.
## Prerequisites

Before forwarding events to MySQL, you must have:

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- Have a running MySQL server.
- Have a Database and Table created.

**Perform the following steps to configure your MySQL Sink.**

### Step 1: Create a Connection

Enter all the following information in Vanus Connect.

![mysql_sink_4.webp](images/mysql_sink_4.webp)

- **Host**① - The IP address of your MySQL Server.
- **Port**② - The Port of your MySQL Server: 3306.
- **Username**③ - A Username with the following permissions INSERT, UPDATE, DELETE.
- **Password**④ - The user password.
- **Database**⑤ - The database name.
- **Table**⑥ - The table name.
- Choose the **insertion mode**⑦.
- Click on **Next**⑧ to continue the configuration.


### Step 2: MySQL Connection Settings

1. Click on **Display sample events**① for reference and click on **Add More**② to add events.

![mysql_sink_1.webp](images/mysql_sink_1.webp)

2. **Input key**③ and search for the corresponding **value**④ for the event you want.

![mysql_sink_3.webp](images/mysql_sink_3.webp)

3. You can fill in as many **key-value pairs**⑤ as you wish to receive. Click **Submit**⑥ to finish the configuration process.

![mysql_sink_2.webp](images/mysql_sink_2.webp)

:::note
You can structure your events to suit your specific requirements, create connections for different scenarios, or take advantage of our pre-existing connection templates for a more organized approach to sending events.
:::

---

## Custom Connection

The event data must be in JSON format and created following the structure of your database, here's an example:

```json
{
  "title": "value",
  "date": "value",
  "ect...": "value"
}
```
