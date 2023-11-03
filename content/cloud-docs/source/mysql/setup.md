--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

Before forwarding events to MySQL, you must have:

- A [**Vanus Cloud Account**](https://cloud.vanus.ai)
- Have a running MySQL server.
- Have a Database and Table created.

---

**Perform the following steps to configure your MySQL Source**

### MySQL Connection Settings

1. Write a **Name**① for your connection in Vanus Connect.

![](images/mysql-source-1.webp)

2. Enter all the following information in Vanus Connect.

- **Host**② - The IP address of your MySQL Server.
- **Port**③ - The Port of your MySQL Server: 3306.
- **Username**④ - A Username with the following permissions RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT.
- **Password**⑤ - The user password.
- **Database**⑥ - The database name.
- **Table**⑦ - The table name.

![](images/mysql-source-2.webp)

3. Click **Next**⑧ and continue the configuration.

---

Learn more about Vanus and Vanus Connect in our [**documentation**](https://docs.vanus.ai/getting-started/what-is-vanus)
