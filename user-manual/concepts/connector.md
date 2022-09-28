---
title: Connector
---

## Vance Connect

Vance Connect allows you to skip the complex integration with external services by offering out-of-the-box connectors.
Each connector acts as a proxy between outside services and your system, enabling you to have faster integrations with 
no codes. 
All data produced or processed by our connectors conforms to the CloudEvents specification, which helps enterprises 
leverage event-driven architecture to do business in the age of events.

Vance Connect consists of the following terms:

- **Connector** - A connector is an image that interacts with a specific external service or underlying data source
   (e.g., Databases) on behalf of user applications.
   In Vance, a connector is either a Source or a Sink.
- **Source** - A source connector obtains data from an underlying data producer and delivers it to targets, after 
  original data has been transformed into CloudEvents. Vance doesn't limit the way how a source retrieves data.
  (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data sent to it). 
- **Sink** - A sink connector receives CloudEvents and does some specific business logics.
    (e.g., A MySQL Sink extracts useful data from CloudEvents and writes them to a MySQL database). 
- **CloudEvents** - A specification for describing event data in common formats to provide interoperability across 
  services, platforms and systems.