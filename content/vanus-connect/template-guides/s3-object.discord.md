# S3 Upload Object Event triggers a Discord message

S3 is one of the most popular service provided by Amazon Web Services

S3 service allows the user to store objects through a web service interface

This guide will help you get a Discord notification whenever a new object gets uploaded on your S3 service

<iframe width="800" height="450" src="https://www.youtube.com/embed/d-5wDjr4-Z0" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source

- Log in to [Vanus Connect](https://cloud.vanus.ai/) and choose the **S3 Upload Object Event triggers a Discord message** template.

### Step 2: Get Access key

- Go to [Aws Management Console](https://aws.amazon.com/) and login using your root account

- Search for IAM services and click on it

![1.png](imgs/aws-bucket-discord-1.PNG)

- Go to Users on left sidebar and click on Add User

![2.png](imgs/aws-bucket-discord-2.PNG)

- Give a name to the user and click on Next

![3.png](imgs/aws-bucket-discord-3.PNG)

- Select Attach policies directly and click on Create Policy

![4.png](imgs/aws-bucket-discord-4.PNG)

- Click on S3 and search for PutBucketNotification and select it

![5.png](imgs/aws-bucket-discord-5.PNG)

![6.png](imgs/aws-bucket-discord-6.PNG)

- Click on Add more permissions and search for SQS and click on it

![7.png](imgs/aws-bucket-discord-7.PNG)

- Now search these policies are add them:

1. ListQueues
2. GetQueueUrl
3. ReceiveMessage
4. GetQueueAttributes
5. CreateQueue
6. SetQueueAttributes
7. DeleteMessage

and press Next

![8.png](imgs/aws-bucket-discord-8.PNG)

- Add a name to your policy and click on Create Policy

![9.png](imgs/aws-bucket-discord-9.PNG)

- Go back to the previous tab and refresh it

- Search for the custom policy we have created and select it and click Next

![10.png](imgs/aws-bucket-discord-10.PNG)

- Review it and click Create User

![11.png](imgs/aws-bucket-discord-11.PNG)

- Click on the created user and go to Security and Credentials tab

![12.png](imgs/aws-bucket-discord-12.PNG)

- Scroll down and click Create access key

![13.png](imgs/aws-bucket-discord-13.PNG)

- Select Command line interface CLI, press Next and click Create access key

![14.png](imgs/aws-bucket-discord-14.PNG)

- Copy the access key and secret access key and paste them in Connection setup

![15.png](imgs/aws-bucket-discord-15.PNG)

### Step 3: Create ARN number

- Go to AWS console and search for S3 service and click on it

![16.png](imgs/aws-bucket-discord-16.PNG)

- Click on Create New bucket

![17.png](imgs/aws-bucket-discord-17.PNG)

- Give a name to the bucket and click Create Bucket

![18.png](imgs/aws-bucket-discord-18.PNG)

- Open the created bucket and go to properties tab

![19.png](imgs/aws-bucket-discord-19.PNG)

- Copy the ARN Number and paste it in connection setup and click Next

### Step 4: Configure Sink - Get the Discord Webhook URL

- Open Discord in your browser and go to your desired Discord Server

- Go to the Server settings and click on Integrations

- Click on New Webhook. Open the newly created Webhook and Copy the Webhook URL

![2.png](imgs/github-issue-discord-2.PNG)

![3.png](imgs/github-issue-discord-3.PNG)

- Paste the copied URL in the "Webhook URL" in Sink Configuration and click Submit

- Your connection has been succesfully setup
