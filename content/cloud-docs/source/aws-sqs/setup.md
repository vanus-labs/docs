## Prerequisites

Before obtaining SQS events, you must have:

- Have an AWS SQS Queue.
- AWS IAM Access Key.
- AWS permissions for the IAM user:
  - sqs:GetQueueUrl
  - sqs:ReceiveMessage
  - sqs:DeleteMessage

## Getting Started

### Step 1: Create a new AWS user

Create a new user and set the proper IAM policy.

1. Log in to the AWS Management Console using your root account credentials.
2. Navigate to the IAM service by clicking on the Services menu and selecting IAM.
   ![](images/1.png)
3. Click on the Users tab in the left navigation menu, and then click the Add user button.
   ![](images/create%20a%20user.png)
4. Write the name for your user and click next. 
![](images/3.png)
5. Select attach policy directly, and Create policy.
   ![](images/4..png)
6. Search for the Service `sqs`, select `AmazonSQSFullAccess` and press **next** 
   ![](images/permission.png)
8. Review and press create user. 
![](images/create%20user.png)
9. Now click on the user you just created.  
![](images/11.png)  
10. Go to `Security Credentials` and click **Create access key**.
    ![](images/12.png)
11. Select Command line interface CLI, and press next.  
![](images/13.png)
12. Save your access key and secret key safely.
    ![](images/img.png)

### Step 2: Config your connection

To obtain Amazon SQS events using the SQS source connector in Vanus Cloud, follow these steps:

1. Write a connection name without any spaces.  
   ![img.png](images/my%20connection.png)
2. Enter your Access Key and Secret Key in Vanus Cloud.  
   ![img.png](images/vanus-sqs.png)
3. Click next to continue.  

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
