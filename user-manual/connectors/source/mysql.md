---
title: MySQL
---

# MySQL Source
This document provides a brief introduction of MySQL Source.
It is also designed to guide you through the process of running a
MySQL Source Connector.
## Introduction
The MySQL Source is a [Vance Connector][vc] that use [Debezium][debezium] 
to obtain a snapshot of the existing data in a MySQL database and then 
monitors and records all subsequent row-level changes to that data.

## MySQL Event Structure
For example, a MySQL database.
```text
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| name        | varchar(100) | NO   |     | NULL    |                |
| description | varchar(100) | NO   |     | NULL    |                |
| date        | date         | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```
The MySQL Source will transform the MySQL database event above into a CloudEvent with the following structure:
```json
{
  "id": "vance.vance_test:binlog.000010:2515",
  "source": "vance.debezium.mysql",
  "specversion": "1.0",
  "type": "debezium.mysql.vance.vance_test",
  "time": "2022-07-08T03:17:03.139Z",
  "datacontenttype": "application/json",
  "vancedebeziumop": "r",
  "vancedebeziumversion": "1.9.4.Final",
  "vancedebeziumconnector": "mysql",
  "vancedebeziumname": "vance",
  "vancedebeziumtsms": "1657250223138",
  "vancedebeziumsnapshot": "true",
  "vancedebeziumdb": "vance",
  "vancedebeziumtable": "vance_test",
  "vancedebeziumpos": "2515",
  "vancedebeziumfile": "binlog.000010",
  "vancedebeziumrow": "0",
  "data": {
    "id": 18,
    "name": "xdl",
    "description": "Development Manager",
    "date": "2022-07-06"
  }
}
```
## Quick Start
This quick start will guide you through the process of running an MySQL Source connector.

### Prerequisites
- A running [MySQL][mysql] database.

### Set MySQL Source Configurations
You can specify your configs by either setting environments
variables or mounting a config.json to `/vance/config/config.json`
when running the connector.

Here is an example of a configuration file for MySQL Source.
```json
{
  "host": "localhost",
  "port": "3306",
  "username": "root",
  "password": "123456",
  "db_name": "dbname",
  "include_table": "user",
  "v_store_file": "/vance/data/offset.dat",
  "db_history_file": "/vance/data/history.dat",
  "v_target": "http://host.docker.internal:8081"
}
```

#### Config Fields of the Mysql Source
| name                 | requirement | description                                                                    |
|----------------------|-------------|--------------------------------------------------------------------------------|
| host                 | required    | db host                                                                        |
| port                 | required    | db port                                                                        |
| username             | optional    | db username                                                                    |
| password             | optional    | db password                                                                    |
| db_name              | required    | db database name                                                               |
| v_target             | required    | target URL will send CloudEvents to                                            |
| v_store_file         | required    | save offset file name                                                          |
| db_history_file      | required    | save db schema history file name                                               |
| store_offset_key     | optional    | offset store use key, default is vance_debezium_offset                         |
| offset_binlog_file   | optional    | binlog filename, increment sync start binlog file name if not set is full sync |
| offset_binlog_pos    | optional    | binlog position, use with config offset_binlog_file                            |
| offset_binlog_gtids  | optional    | binlog grids                                                                   |

### Run the MySQL Source with Docker
Create your config.json and mount it with your data path to the
specific paths to run the MySQL Source using the following command.

> docker run -v $(pwd)/config.json:/vance/config/config.json -v $(pwd)/data:/vance/data --rm vancehub/source-mysql

### Verify the MySQL Source
You can verify if the MySQL Source works properly by Running our Display Sink.
> docker run -p 8081:8081 --rm vancehub/sink-display

:::tip
Set the v_target as http://host.docker.internal:8081
:::

[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md
[debezium]: https://debezium.io/documentation/reference/1.9/connectors/mysql.html\
[mysql]: https://www.mysql.com