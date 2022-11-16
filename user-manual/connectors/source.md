---
title: Source
id: source
---

# Source
source connector obtains data from an underlying data producer and delivers it to targets, after original data has been transformed into CloudEvents. Vance doesn't limit the way how a source retrieves data. (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data sent to it).

## Connectors List
- [MySQL Source][mysql-source]
- [Amazon S3 Source][s3-source]
- [Amazon SNS Source][sns-source]
- [Amazon SQS Source][sqs-source]
- [HTTP Source][http-source]
- [GitHub Source][github-source]

[mysql-source]: source/mysql.md
[s3-source]: source/s3.md
[sns-source]: source/sns.md
[sqs-source]: source/sqs.md
[http-source]: source/http.md
[github-source]: source/github.md