--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- A [**Vanus Cloud account**](https://cloud.vanus.ai)
- A running MySQL server.
- A Database and Table created.

---

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

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai).
