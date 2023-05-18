# Prerequisites   

Before forwarding events to MongoDB, you must have:

- A [MongoDB account](https://account.mongodb.com/account/register)   

# Getting Started

## Step 1: Setup a MongoDB database  

### Create a MongoDB account(for 1st time users without an account)  
1. Go to the [official MongoDB website](https://www.mongodb.com/) and click on **start free** to create a free account. 
![](images/mongodb%20start%20free.png)   


2. You can choose to Sign up with google or Create your Atlas account with your preferred username and password. For the purpose of this tutorial, we created our Atlas account.   
![](images/mongodb%20signup.png)   


>**Note** MongoDB Atlas is a cloud-based and fully-managed version of the MongoDB database. It is designed to simplify the process of deploying and managing MongoDB in the cloud. It includes features such as automatic scaling, backup and recovery, and performance optimization. The MongoDB website refers to Atlas as it is one of the primary ways to use the MongoDB database in a cloud environment.  


3. You'll receive a verification email.  
![](images/verify%20your%20email%20message.png)   


4. Go to your inbox and verify the email by clicking on **verify**.  
![](images/verify%20mongodb%20email.png)   


5. Congratulations. Your email has been successfully verified, click **continue** to be taken to the Atlas setup page.  
![](images/verified%20email.png)   


#### Project details information   

![](images/wwelcome%20to%20atlass.png)   

- **What is your goal today? :** These are questions designed to help MongoDB Inc understand the users goals and requirements for using the MongoDB database in the cloud. The questions are designed to understand the user's specific needs and use case. Based on their responses, MongoDB Inc. can provide personalized guidance and resources to maximize the benefits of their MongoDB deployment, ensuring a successful implementation in the cloud.
  

- **What application are you building? :** This section on the Atlas MongoDB information collection page aims to gather information about the user's specific project to understand their needs and offer customized guidance and resources. This section helps MongoDB Inc. identify trends and patterns in customers' MongoDB use cases to develop new features and functionality to better support them.


- **What is your preferred language? :** This section is a way for MongoDB Inc. to gather information about the user's technical skills and preferences, and to provide customized support to ensure a successful MongoDB deployment. 
Select your preferred programming language. 


### Setting up your MongoDB database   

![](images/create%20database.png)   

1. select the M0 template for a free deployment.  

2. Select your preferred cloud provider, we selected AWS, but you have the option to go with google cloud or azure.  

>**Note** Atlas MongoDB asks users to choose a cloud provider to host their MongoDB deployment. This is because Atlas is a cloud-based database service that needs to know which provider the user wants to use to optimize performance, security, and cost-effectiveness within that provider's environment. Different cloud providers offer different features and capabilities, so Atlas MongoDB can provide customized recommendations and resources based on the user's chosen provider. Choosing a cloud provider is an essential step to set up the MongoDB deployment properly and ensure optimal performance and security.

3. Select your preferred region. The region you want your resources to be deployed in.   


4. Choose a name for your Cluster.  

>**Note** A cluster in MongoDB is a group of servers or nodes that work together to store and manage data. It typically consists of multiple instances of the MongoDB database, which communicate with each other to ensure data consistency and availability.
A cluster provides high availability and scalability to a MongoDB deployment, enabling it to handle large amounts of data and traffic. By distributing data across multiple nodes, it ensures that data remains accessible even if some nodes fail


5. Click on create to create your database.  


#### Security Setup   

![](images/security%20quick%20start.png)   

1. Select your preferred means of authentication. 

2. For the users who chose **Username and password**, type your username in the username field. You can choose to either type your password or have Atlas autogenerate a secure password for you.  

3. Click on **create user** to create the user.  


#### Setting up the host   
We are going to be using an EC2 instance running the Ubuntu AMI to connect to our DynamoDB database. We need to set that up before moving to the next step.  

1. Log in to the [AWS Management Console](https://aws.amazon.com/)   

2. Click on the left navigation pane called **Services** and select compute. A list of all compute services would be listed out, select **EC2**. 
![](images/create%20ec2%20server.png)   


3. Click on the **Launch Instance** button.  
![](images/launch%20instance.png)   

##### Name and AMI setting  
1. Give your instance a name and select an Amazon machine image for the instance.  
![](images/server%20name%20and%20ami.png)   

2.. Click on the AMI button to select your preferred server. Select a server that is free tier eligible to prevent extra cost.  

![](images/ami%20and%20instance%20type.png)   

3. Select an instance type that is free tier eligible to prevent extra cost.  


##### Key pair setting  
1. Create a key pair, to enable you SSH into your server.  
![](images/create%20keypair.png)   

2. Give the key pair a name. Leave the key pair type on the default selection.  for the Private key file format, select the **.pem** if you plan on using your terminal to SSH into your instance, or select **.ppk** if you want to use putty.  

3. Click on **create key pair** to finish the creation of the key pair.  
![](images/create%20keypair2.png)   

##### Network setting  
1. Leave the default VPC and subnet.  

2. Create security group. It's best practice to set the specific IP you want to have access to your instance, so we set ours to only allow access from our IP.  

![](images/network%20setting.png)   

3. Leave the storage section in its default setting. Click on **Launch Instance** when you're done with the required settings.  


4. Click on Instance to be taking to the instance page where you can see the status of your recently launched instance.  
![](images/check%20instance.png)   


5. Wait until the instance state is **running** and its status check is **2/2 checks passed.**   
![](images/instance%20running.png)   


6. Check the box before the instance name, to see the drop down menu. Copy your public IP, it would be needed to set a host for MongoDb.  
![](images/copy%20instance%20IP.png)   


### MongoDB connection setting.  
1. Choose a connection point, you can choose to connect from your local environment, or a cloud environment.  

2. Set your network security and input the IP of the created EC2 instance.  

3. Click **add entry** to save the IP.  
![](images/ec2%20ip%20in%20mongodb.png)   

4. Click **Finish and Close** to complete setup.  
![](images/DB%20setup%20finished.png)   

5. Your database is ready to be used. Click on "Go to Database" to be taken to your database page.  
![](images/go%20to%20database.png)   

##### SSH Into your EC2 Instance 
Now we want to SSH into our EC2 instance to enable us connect to our database host.  

1. Click the **Connect button**.  
![](images/connect.png)   


2. On the **Connect to instance** page, select **"SSH Client"**. 

3. Copy the example command given.  
![](images/copy%20ssh%20example.png)   


4. Open up your terminal and paste the code in the same folder/directory your key pair was downloaded into.  
![](images/terminal%20access.png)   

5. You've been connected to your instance.  


### MongoDB cluster Connection  
1. Click on the **connect** button.  
![](images/connect%20to%20mongodb.png)   

2. Click on **Add current IP Address** to add your current devices IP to the Access list. 
![](images/add%20current%20ip.png)   


3. Select the means through which you would connect to your database.  
For the purpose of this tutorial, we chose the **shell**.  
![](images/mongo%20shell.png)   


4. Select your operating system and download the MongoDB shell **mongosh**  
![](images/connect%20to%20cluster%201.png)   


5. We're presently running an ubuntu server on our instance so we would copy the download url and paste it in our terminal with the download command.  
```
wget https://downloads.mongodb.com/compass/mongodb-mongosh_1.8.1_amd64.deb
```   

![](images/downloaded%20mongodb%20shell.png)   


6. Return to the Atlas page, click on the [How to](https://www.mongodb.com/docs/mongodb-shell/install/) link to get step by step instructions on how to add your mongosh directory to your $PATH variable.  

![](images/connect%20with%20mongo%20shell.png)   

7. Copy the connection string provided in step3 of the **Connect to Cluster** page.  

8. Paste the command in your terminal, you would be prompted for your password. Type the password you set for database authentication.  

![](images/successful%20mongosh%20connection.png)   

You are now connected to your MongoDB database.  

## Step 2: Set up MongoDB Sink in Vanus Cloud  

1. Provide the following credentials
   - Connection Uri: The URI to connect MongoDB, view [Connection String URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/) for more details
   - Port: The port which the MongoDB Sink listens on
   - Username: MongoDB username
   - Password: MongoDB user's password
   - Auth Source
   - Auth Mechanism
   - Auth Mechanism Properties

2. Click `Next` and finish the configurations.

# Custom Connection

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
