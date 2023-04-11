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
   - Host
   - Port
   - Username
   - Password
   - Database Name
   - Table Name
     ![](images/mysql.png)
3. Click Next and finish the configurations.

## Required Data Format

The event data must be JSON format, here a simple message, example:

```json
{
  "data": {
    "id": 1,
    "name": "xdl",
    "description": "Development Manager",
    "date": "2023-03-06"
  }
}
```
