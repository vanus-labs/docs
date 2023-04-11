# MySQL

This guide contains information to set up a MySQL Sink in Vanus Cloud.

## Introduction

MySQL is an open-source relational database management system (RDBMS) that is used to store and manage data. It is one of the most popular databases in the world and is commonly used in web applications, as well as in enterprise environments.

## Prerequisites

Before forwarding events to MySQL, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)
- Have a running MySQL server.
- Have a Database and Table created.

## Getting Started

**To set up MySQL Sink in Vanus Cloud:**

1. In Vanus Cloud, go to "Sinks" and select "MySQL".
2. Provide the following credentials
   - Host: Enter the hostname or IP address of your MySQL server
   - Port: Enter the port number on which your MySQL server is listening. The default port for MySQL is 3306.
   - Username: User account name
   - Password: User password
   - Database Name: The name of the database
   - Table Name: The name of the table
     ![](images/mysql.png)
3. Click Next and finish the configurations.

## Custom Connection

Create your template following the structure of your database, an example:

```json
{
  "title": "value",
  "date": "value",
  "ect...": "value"
}
```
