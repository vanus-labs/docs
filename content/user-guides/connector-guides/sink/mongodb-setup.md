# MongoDB

This guide contains information to set up a MongoDB Sink in Vanus Cloud.

## Introduction

MongoDB is a popular open-source NoSQL document database that is designed for storing, retrieving, and managing unstructured and semi-structured data. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents that can vary in structure and content, making it well-suited for use in a wide range of applications.

## Prerequisites

Before forwarding events to MongoDB, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai)

## Getting Started

**To set up MongoDB Sink in Vanus Cloud:**

1. In Vanus Cloud, go to "Sinks" and select "MongoDB".
2. Provide the following credentials
   - Connection Uri: The URI to connect MongoDB, view [Connection String URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/) for more details
   - Port: The port which the MongoDB Sink listens on
   - Username: MongoDB username
   - Password: MongoDB user's password
   - Auth Source
   - Auth Mechanism
   - Auth Mechanism Properties
     ![](images/mongodb.png)
3. Click Next and finish the configurations.

## Custom Connection

Create your template following the structure of your database, an example:

```yaml
{ _id: ObjectId("63a56b176dcdb253ae4924f0"), scenario: "quick-start" }
```
