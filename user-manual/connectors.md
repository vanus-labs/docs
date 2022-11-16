---
title: Connectors
id: connectors
slug: /connectors
---

# Connectors

Vance Connect provides out-of-the-box Connectors that enable you to integrate with popular services or applications 
without writing codes. With a simple configuration file, Vance Connectors connect to the external service and move data
in and out of that service on behalf of user applications, allowing you to focus on your business logic.

Vance Connect consists of the following content:

- [**Source**][connectors-source] - A source connector obtains data from an underlying data producer and delivers it to targets, after original data has been transformed into CloudEvents. Vance doesn't limit the way how a source retrieves data. (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data sent to it).
- [**Sink**][connectors-sink] - A sink connector receives CloudEvents and does some specific business logics. (e.g., A MySQL Sink extracts useful data from CloudEvents and writes them to a MySQL database).



[connectors-source]: connectors/source.md

[connectors-sink]: connectors/sink.md