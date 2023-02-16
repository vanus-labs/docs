## Use cases

Here are some popular use cases for Vanus, please refer to the blog for detailed cases.

#### Data Pipeline

Developers can easily build data pipelines from event sources to data lakes through Vanus to facilitate real-time data analysis.

* **Optimize Ad Campaign**： Sync customer data from snowflake to google ads in real-time to optimize campaigns.
* **Dynamic Customer 360**: Get data in real-time from websites, and social media to build dynamic customer 360 views.
* **Business Opportunity Mining: **Synch customer leads obtained from Linkedin and Twitter to Snowflakes.

* **User behavior analysis**: Sync user website clicks data to snowflakes analysis for optimizing user journey.
* **Optimize user experience**: Send Gmail to users before successful registration, birthday, or product trial ends.

* **Slack data analysis**: Obtain the info in the slack customer community and sync it to Big Query for mining.

#### Connection 

Developers can use Vanus to quickly establish connections between SaaS.

* **GitHub event notification**: [Deliver any event generated on GitHub to slack](https://www.vanus.ai/blog/2023/02/05/github-slack).

* **Salesforce leads**: Synchronize potential users acquired on LinkedIn to Salesforce.

* **Sheet record ad leads**: Create google sheet records for new Facebook ad leads

* **Send an email with Webhook**: Send a Gmaill email after receiving a webhook request

* **Store change data**:: When MySQL adds new records, the data will be synchronized to Google sheets 

* **User login reminde**r: When the user logs in through auth0, he can receive Gmail emails   

* **Reminder before the meeting**: Send a slack notification before the google calendar meeting starts

#### Cloud Services

Developers can use Vanus to build event-driven systems based on cloud services.

*  **Identify electronic invoices**: Upload s3 invoices to identify information and sync Salesforce.

* **Illegal image identification**： Identify offending images uploaded to s3 and send them to Gmail.

* **Webhook trigger function:** Trigger aws lambda to run when the webhook receives a new request.

* **Cloud bill reminder:** [Set up slack messages or Gmail reminders for Amazon cloud bills.](https://www.vanus.ai/blog/2023/01/30/awsbilling-slack-blog)

* **Prometheus alarm:**  [Get Prometheus alarm information and deliver slack messages or send Gmail.](https://www.vanus.ai/blog/2023/01/16/Minimax-Success%20Story)

* **CDC trigger function:** Get database change events and trigger aws lambda or Google Cloud function.

#### Job Scheduling

Developers can use Vanus for job scheduling.

* **Kubernetes Job**: Regularly triggers the Kubernetes job.     

* **Cloud function**: Regularly trigger cloud functions such as AWS Lambda and Google Cloud Functions.     

* **Webhook**: Webhook can be called regularly.    

* **Send Gmail**: Send Gmail messages periodically.     

* **Slack message**: Send messages to the slack channel regularly    

* **Amazon** **SQS**: Sends events to SQS periodically.