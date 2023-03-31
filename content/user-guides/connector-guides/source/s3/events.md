# Output Events of S3 Source

S3 Source supports all **[S3 events](https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html)**.

S3 Source generates **[CloudEvents](https://docs.vanus.ai/reference/cloudevents)** corresponding to each type of S3 events.

## Sample Event

S3:ObjectCreated:

- S3:ObjectCreated:Put
- S3:ObjectCreated:Post
- S3:ObjectCreated:Copy
- S3:ObjectCreated:CompleteMultipartUpload

S3:ObjectRemoved:

- S3:ObjectRemoved:Delete
- S3:ObjectRemoved:DeleteMarkerCreated

S3:ObjectRestore:

- S3:ObjectRestore:Post
- S3:ObjectRestore:Complete
- S3:ObjectRestore:Delete
