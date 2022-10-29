---
title: MySQL
id: mysql
---

# MySql Source
This document provides a brief introduction of the MySQL Source.
It is also designed to guide you through the process of running an
MySQL Source Connector.
## Introduction
The MySql Source is a [Vance Connector][vc] that use [Debezium][debezium] 
to obtain a snapshot of the existing data in a MySql database and then 
monitors and record all subsequent row-level changes to that data.

For example, MySql database vance has table vance_test Look:

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

## MySQL Event Structure
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
This quick start will guide you through the process of running an MySQL Sink connector.

### Prerequisites
- A running [MySQL][mysql] database.

### Set MySql Source Configurations
You can specify your configs by either setting environments
variables or mounting a config.json to `/vance/config/config.json`
when running the connector.

Here is an example of a configuration file for the MySQL Source.
```json
{
  "v_target": "http://host.docker.internal:8081",
  "v_store_file": "/tmp/offset.dat"
}
```

#### Config Fields of the Mysql Source
| name               | requirement | description                                                                                                                                    |
|--------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| v_target           | required    | target URL will send CloudEvents to                                                                                                            |
| v_store_file       | required    | kv store file name                                                                                                                             |
| include_table      | optional    | comma-separated list of include table name, not include database name                                                                          |
| exclude_table      | optional    | comma-separated list of exclude table name, not include database name. <br/>no need add system table and only no config include_table will use |
| store_offset_key   | optional    | offset store use key, default is vance_debezium_offset                                                                                         |
| offset_binlog_file | optional    | binlog filename, increment sync start binlog file name if not set is full sync                                                                 |
| offset_binlog_pos  | optional    | binlog position, use with config offset_binlog_file                                                                                            |

## MySql Source Secrets
Users should set their sensitive data Base64 encoded in a secret file.
And mount your local secret file to `/vance/secret/secret.json` when you run the connector.

### Encode your sensitive data

```shell
$ echo -n MY_SECRET | base64
QUJDREVGRw==
```

Replace 'MY_SECRET' with your sensitive data.

Here is an example of a Secret file for the MySQL Sink.
```jsonTVlfU0VDUkVU
{
  "host": "TVlfU0VDUkVUTVlfU0VDUkVU",
  "port": "OTA4Mw==",
  "username": "bG92ZWNob2NvbGF0ZQ==",
  "password": "MTIzNDU2Nzg5",
  "dbName": "SW1XYWxraW5PblN1blNoaW5l"
}
```
#### Secret Fields of the Mysql Source

| name               | requirement | description                                                                                                |
|--------------------|-------------|------------------------------------------------------------------------------------------------------------|
| host               | required    | db host                                                                                                    |
| port               | required    | db port                                                                                                    |
| username           | required    | db username                                                                                                |
| password           | required    | db password                                                                                                |
| dbName             | required    | db database name                                                                                           |

### Run the MySQL Sink with Docker
Create your config.json and secret.json, and mount them to
specific paths to run the MySQL Source using the following command.

> docker run -v $(pwd)/secret.json:/vance/secret/secret.json -v $(pwd)/config.json:/vance/config/config.json --rm vancehub/source-mysql

### Verify the MySQL Source
You can verify if the MySQL Source works properly by Running our Display Sink.
> docker run -p 8081:8081 --rm vancehub/sink-display

:::tip
Set the v_target as http://host.docker.internal:8081
:::

[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md
[debezium]: https://debezium.io/documentation/reference/1.9/connectors/mysql.html