# Elasticsearch

This guide contains information to set up a Elasticsearch Sink in Vanus Connect.

## Introduction

Elasticsearch is a fast and scalable search and analytics engine used as a backend for search-heavy applications. One of the key features of Elasticsearch is its scalability, which allows it to handle large volumes of data across multiple nodes in a cluster. It also has a powerful query language and a rich set of APIs that make it easy to interact with and integrate into a wide range of applications and systems.

The Elasticsearch Sink simplifies the process of delivering data to your Elasticsearch cluster. With this tool, you can easily and efficiently transfer your data to your Elasticsearch cluster, making it searchable and accessible for analysis and other processing needs.

## Prerequisites

Before forwarding events to Elasticsearch, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai).
- Have an Elasticsearch cluster. 

## Getting Started

### Step 1: Create a Deployment

1. Go to the [**Elasticsearch**](https://www.elastic.co/) official website.

2. Input your **Email and Password**①, then click **Sign up with email**②.

![elasticsearch-sink-1](images/elasticsearch-sink-1.webp)

3. Give your deployment a **Name**③ and click **Create deployment**④.

![elasticsearch-sink-2](images/elasticsearch-sink-2.webp)

*A deployment includes Elasticsearch, Kibana, and other elastic stack features.*

4. Click on the **Cloud Provider**⑤ field to change your cloud provider and the **Region**⑥ field to change your region.

![elasticsearch-sink-3](images/elasticsearch-sink-3.webp)

*You can leave the other settings on default or customize your settings further, depending on your use case.*

5. Click on **Create deployment**⑦ to finish creating your deployment.

![elasticsearch-sink-4](images/elasticsearch-sink-4.webp)

6. **Download**⑧ your deployment credentials, you will need them to log in to your endpoint, and they will also be needed for your Vanus connection.

![elasticsearch-sink-5](images/elasticsearch-sink-5.webp)

7. Your deployment has been successfully created, now click **Continue**⑨.

![elasticsearch-sink-6](images/elasticsearch-sink-6.webp)


#### Getting your server endpoint

1. Navigate to the [**Deployment Page**](https://cloud.elastic.co/deployments/) to see your deployments.

2. Click on the the **created deployment**①.

![elasticsearch-sink-7](images/elasticsearch-sink-7.webp)


3. Copy your Elasticsearch endpoint by clicking on **Copy endpoint**②.

![elasticsearch-sink-8](images/elasticsearch-sink-8.webp)

4. Paste the copied **endpoint**③ in your browser, fill in the **credentials**④ you downloaded while creating your deployment and click on **Sign in**⑤.

![elasticsearch-sink-9](images/elasticsearch-sink-9.webp)

![elasticsearch-sink-10](images/elasticsearch-sink-10.webp)

#### Creating an Index

1. Click on **API Console**①.

![elasticsearch-sink-11](images/elasticsearch-sink-11.webp)

2. Select the **PUT**② option, write the **name of your index**③, and click **Submit**④.

![elasticsearch-sink-12](images/elasticsearch-sink-12.webp)

3. You'll get a **200-OK**⑤ message if your index was successfully created.

![elasticsearch-sink-13](images/elasticsearch-sink-13.webp)

3. Add a **backslash and your index name**⑥ to your endpoint to see the content of your index.

![elasticsearch-sink-14](images/elasticsearch-sink-14.webp)

---

### Step 2: ElasticSearch Connection Settings

1. Provide the following credentials.

- **Server Endpoint①:** The endpoint of your ElasticSearch cluster.

- **Index②:** The name of the index you created.

- **Username③:** The username you downloaded during the creation of your deployment.

- **Password④:** The password you downloaded during the creation of your deployment.

![elasticsearch-sink-15](images/elasticsearch-sink-15.webp)

2. Click **Next**⑤ and finish the configurations.


## Custom Connection

Create your template following the structure of your database, an example:

```json
{
  "_index": "vanus_test",
  "_type": "_doc",
  "_id": "CqFnBIEBzJc0Oa5TERDD",
  "_version": 1,
  "_source": {
    "id": 123,
    "date": "2022-06-13",
    "service": "test data"
  }
}
```
