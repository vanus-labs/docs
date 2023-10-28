# MongoDB

This guide contains information to set up a MongoDB Sink in Vanus Connect.

## Introduction

MongoDB is a popular open-source NoSQL document database that stores data in a flexible, JSON-like format.

The MongoDB Sink connector let you insert events into a mongoDB database automatically.

## Prerequisites   

Before forwarding events to MongoDB, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai) 
- A [MongoDB account](https://account.mongodb.com/account/register)   

## Getting Started

### Step 1: Setup a MongoDB database  

#### Create a MongoDB account(for 1st time users without an account)

1. Go to the [official MongoDB website](https://www.mongodb.com/) and click on **Start free**① to create a free account. 

![mongodb_1.webp](images/mongodb_1.webp)   


2. Sign up with your preferred **authentication method**②.   

![mongodb_2.webp](images/mongodb_2.webp)   


>**Note** MongoDB Atlas is a cloud-based and fully-managed version of the MongoDB database. It is designed to simplify the process of deploying and managing MongoDB in the cloud. It includes features such as automatic scaling, backup and recovery, and performance optimization. The MongoDB website refers to Atlas as it is one of the primary ways to use the MongoDB database in a cloud environment.

##### Project details information   

Answer some few questions like:

- **What is your goal today?:**③ These are questions designed to help MongoDB Inc understand the users goals and requirements for using the MongoDB database in the cloud. The questions are designed to understand the user's specific needs and use case. Based on their responses, MongoDB Inc. can provide personalized guidance and resources to maximize the benefits of their MongoDB deployment, ensuring a successful implementation in the cloud.


- **What is your preferred language?:**④ This section is a way for MongoDB Inc. to gather information about the user's technical skills and preferences, and to provide customized support to ensure a successful MongoDB deployment. Select your preferred programming language.

- Click the **Finish**⑤ button.

![mongodb_3.webp](images/mongodb_3.webp)

#### Setting up your MongoDB database      

- Select the **M0**⑥ template for a free deployment.  

- **Select**⑦ your preferred cloud provider, we selected AWS, but you have the option to go with google cloud or azure.  



>**Note** Atlas MongoDB asks users to choose a cloud provider to host their MongoDB deployment. This is because Atlas is a cloud-based database service that needs to know which provider the user wants to use to optimize performance, security, and cost-effectiveness within that provider's environment. Different cloud providers offer different features and capabilities, so Atlas MongoDB can provide customized recommendations and resources based on the user's chosen provider. Choosing a cloud provider is an essential step to set up the MongoDB deployment properly and ensure optimal performance and security.

- Select your preferred **Region**⑧. The region you want your resources to be deployed in.   

- Choose a **Name**⑨ for your Cluster.  

>**Note** A cluster in MongoDB is a group of servers or nodes that work together to store and manage data. It typically consists of multiple instances of the MongoDB database, which communicate with each other to ensure data consistency and availability.
A cluster provides high availability and scalability to a MongoDB deployment, enabling it to handle large amounts of data and traffic. By distributing data across multiple nodes, it ensures that data remains accessible even if some nodes fail

- Click on **Create**⑩ to create your database.  

![mongodb_4.webp](images/mongodb_4.webp)


##### Security Setup   

- **Select**⑪ your preferred means of authentication. 

- For the users who chose **Username and Password**⑫, type your username in the username field. You can choose to either type your password or have Atlas autogenerate a secure password for you.  

- Click on **Create User**⑬ to create the user.  

![mongodb_5.webp](images/mongodb_5.webp)

##### Setting up the host

We are going to be using an EC2 instance running the Ubuntu AMI to connect to our DynamoDB database. We need to set that up before moving to the next step.  

1. Log in to the [AWS Management Console](https://aws.amazon.com/)   

2. Click on the left navigation pane called **Services**① and select **Compute**②. A list of all compute services would be listed out, select **EC2**③.

![mongodb_6.webp](images/mongodb_6.webp)   


3. Click on the **Launch Instance**④ button.

![mongodb_7.webp](images/mongodb_7.webp)   

###### Name and AMI setting

4. Give your instance a **Name**⑤ and **Select**⑥ an Amazon machine image for the instance. Click on the AMI button to select your preferred server. Select a server that is **free tier eligible**⑦ to prevent extra cost.

![mongodb_8.webp](images/mongodb_8.webp)   

5. **Create new key pair**⑧, to enable you SSH into your server. 

![mongodb_9.webp](images/mongodb_9.webp)

6. Provide the **Key pair name**⑨. Leave the **key pair type**⑩ on the default selection. For the Private key file format, select the **.pem**⑪ if you plan on using your terminal to SSH into your instance, or select **.ppk**⑫ if you want to use putty. Click on **Create key pair**⑬ to finish the creation of the key pair. 

![mongodb_10.webp](images/mongodb_10.webp)    

7. Leave the default VPC and subnet.  

8. **Create Security group**⑭. We allowed SSH traffic from **Anywhere**⑮ because we intend to terminate the instance immediately after the test, it's best practice to set the specific IP you want to have access to your instance. Leave the storage section in its default setting. Click on **Launch Instance**⑯ when you're done with the required settings.  

![mongodb_11.webp](images/mongodb_11.webp) 

9. Check the box before the instance name, to see the drop down menu. **Copy**⑰ your public IP, it would be needed to set a host for MongoDb.

![mongodb_12.webp](images/mongodb_12.webp)   


#### MongoDB connection setting.

1. Choose a connection point, select **Cloud Environment**①.  

2. Set your network security and input the **IP Address**② of the created EC2 instance.  

3. Click **Add Entry**③ to save the IP.  

4. Click **Finish and Close**④ to complete setup.  

![mongodb_13.webp](images/mongodb_13.webp)      

5. Your database is ready to be used. Click on **Go to Overview**⑤ to access to your database page.  

![mongodb_14.webp](images/mongodb_14.webp)      

###### SSH Into your EC2 Instance

Now we want to SSH into our EC2 instance to enable us connect to our database host.  

1. Click the **Connect button**⑥.

![mongodb_15.webp](images/mongodb_15.webp)      


2. On the Connect to instance page, select **SSH Client**⑦ and **Copy**⑧ the example command given.

![mongodb_16.webp](images/mongodb_16.webp)      


3. Open up your terminal and paste the code in the same folder/directory your key pair was downloaded into. You have successfully connected to your instance.

![mongodb_17.webp](images/mongodb_17.webp)  


#### MongoDB cluster Connection 

1. Go to your MongoDB Database page and click on the **Connect**⑨ button.

![mongodb_18.webp](images/mongodb_18.webp)   

2. Select the means through which you would connect to your database. We chose the **Shell**⑩.  

![mongodb_19.webp](images/mongodb_19.webp)  

3. Select your **operating system**⑪ and **copy download URL**⑫. 

![mongodb_20.webp](images/mongodb_20.webp)

4. **Paste**⑬ it in our terminal with the download command.

```
wget https://downloads.mongodb.com/compass/mongodb-mongosh_1.10.6_amd64.deb
```

![mongodb_21.webp](images/mongodb_21.webp)   
   
5. Return to the Atlas page, click on the **[How to](https://www.mongodb.com/docs/mongodb-shell/install/)**⑭ link to get step by step instructions on how to add your mongosh directory to your $PATH variable. **Copy**⑮ the connection string provided in **Step 3** of the **Connect to Cluster** page. 

![mongodb_22.webp](images/mongodb_22.webp)   

6. Paste the command in your terminal, you would be prompted for your password. Type the password you set for database authentication.  

![mongodb_23.webp](images/mongodb_23.webp)  

You are now connected to your MongoDB database.

### Step 2: Set up MongoDB Sink in Vanus Connect  

-  Log in to your [Vanus](https://cloud.vanus.ai) account  

-  **Name**① your connection, Choose your Source and click Next

- Click **MongoDB** as Sink.  

- **Input**② the following credentials  

   - **Connection Uri:** The URI to connect MongoDB, view [Connection String URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/) for more details
   - **Port:** The port which the MongoDB Sink listens on
   - **Username:** MongoDB username
   - **Password:** MongoDB user's password
   - **Auth Source:** The authentication database used to authenticate users credentials 
   - **Auth Mechanism:** The method used for authentication 
   - **Auth Mechanism Properties:** The configuration options set to control the behaviour and parameters of the authentication mechanism. 

![mongodb_sink_1.webp](images/mongodb_sink_1.webp)

5. Click on **Display sample events**③ for reference. Input key and search for the corresponding **value**④ for the event you want.

![mongodb_sink_2.webp](images/mongodb_sink_2.webp)

6. You can fill in as many **key-value pairs**⑤ as you wish to receive. Click **Submit**⑥ to finish the configuration process.

![mongodb_sink_3.webp](images/mongodb_sink_3.webp)


## Custom Connection

Create your template following the structure of your database, an example:

```json

{
   "inserts": [
      {
        "scenario": "quick-start"
      }
  ]
}
```
