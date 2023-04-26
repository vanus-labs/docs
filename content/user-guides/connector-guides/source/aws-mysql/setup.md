# AWS-MySQL  

This guide contains information required in setting up an Amazon MySQL Source in Vanus Cloud.  

## Introduction   

### MySQL  
MySQL is a widely used database management system that helps manage and manipulate data using Structured Query Language (SQL). It offers several capabilities to manage data effectively, including the ability to **create indexes**, which improves the speed of data retrieval. **Replication** which allows data to be duplicated across multiple servers, providing backup and fault tolerance. And stored procedures, which are a set of pre-written SQL commands that can be saved in the database and executed later, making it easier to manage complex operations. MySQL is appreciated for its ease of use, flexibility and reliability. It can be integrated with a wide range of programming languages and operating systems.  

### AWS-MySQL  
AWS MySQL is a cloud-based relational database service provided by Amazon Web Services, which utilizes the open-source MySQL database management system. This service allows users to deploy and manage MySQL databases in the cloud without the need to configure and administer infrastructure on their own. AWS MySQL provides numerous features, including automatic backups, scalability, high availability, and security, making it a highly sought-after option for businesses of all sizes. Furthermore, AWS MySQL supports seamless integration with popular open-source MySQL tools and applications, which enables users to migrate their existing MySQL databases to the cloud effortlessly.   

## Prerequisites   
Before creating your MySQL connection, you must have:  

- A Vanus Cloud account 
- An SQL client 
- A running MySQL server
- A database and Table

## Getting Started   

1. Log in to your [Vanus Dashboard](https://cloud.vanus.ai/dashboard).    

2. Click on **Connections**  
[1](images/Click%20connections1.png)  

3. Click on **Create Connection**  
[2](images/create%20connection.png)   


### Step 1: Setup A Mysql database server in AWS using RDS  

#### Create an RDS account  
1. Log in to the [AWS Management Console](https://aws.amazon.com/) using your root account credentials.  
[3](images/sign%20into%20the%20AWS%20console.png)   


2. Click on the left navigation pane called services and select **RDS**.  
[4](images/select%20RDS.png)   


Or type "RDS" in the search box and select it from the results.   
[5](images/search%20for%20RDS.png)   


3. In the top right corner of the Amazon RDS console, select the Region in which you want to create the DB instance.   
[6](images/select%20your%20preferred%20region.png)   


4. Click on **Create database** in the **Create Database** section.  
[7](images/create%20database.png)   


#### Create Database   
Now you have options to select your engine.  

1. Select **standard create** and choose the MySQL icon.  
[8](images/select%20mysql%20and%20standard%20create.png)   


2. Leave the default value for edition, and select the **Free Tier** template.   
[9](images/select%20free%20tier.png)   


>**Note** 
Multi-AZ deployment is not available for the free tier, you will have to pay for it. Using a Multi-AZ deployment automatically provisions and maintains a synchronous standby replica in a different Availability Zone.  

[10](images/leave%20availability.png)   


##### Settings   
[11](images/settings2.png)   
- **DB Instance Identifier:** Type a name unique to the region your DB instance has been set in.  

- **Master Username:** This is the username that would be used to log in to your DB instance.  

- **Master Password:** Type a password that takes the given constraints into consideration.  

- **Confirm password:** Type the password again.  


##### Instance configuration and storage   
1. Leave the default Instance configuration. 

2. Select the gp2 storage type, it's efficient and cost effective for our intended use.  
[12](images/instance%20config.png)   


##### Connectivity   
1. Leave the default subnet group.  

2. Enable public access, this allocates an IP to your database instance and allows direct connection to the database from your own device.  
[13](images/connectivity.png)  


3. Select **Create new VPC security group**. This would create a security group that allows connection from the IP address of the device that you are currently using, to the database you created.  

4. Leave **Database port** on 3306   
[14](images/VPC.png)   


5. Select the password method of authentication.   

6. Leave **enabled monitoring** unchecked, to stay within the free tier limit.  
[15](images/Database%20Auth.png)  

 
7. Set a database name. If you do not provide one, Amazon RDS will not create a database on your instance being created.  

8. Set your preferred backup retention period.  
[16](images/additional%20config.png)  


9. Leave **Deletion protection** unchecked, checking the box prevents you from being able to delete the database.  
[17](images/encryption.png)   


10. Click on **create database**  
[18](images/final%20create.png)   


11. Your DB is now being created. This could take a few minutes, so move on to the next step while you wait. 
[19](images/db%20creation%20in%20progress.png)   


#### Download an SQL client
After the database instance is successfully created and its status changes to "available," you will be able to connect to a database on the DB instance through a standard SQL client. To accomplish this, we will download MySQL Workbench, which is a widely used SQL client, as part of the next step.   

1. Navigate to the [download MySQL Workbench](https://dev.mysql.com/downloads/workbench/) page and click on **download.**  
[20](images/mysql%20workbench.png)   


2. You would be prompted to log in or sign up. You can choose neither and just click on **No thanks, just start my download** for a quick download.  
[21](images/mysql2.png)   


#### Connect to the MySQL database   
Now it's time to connect to the database you created using MySQL workbench.  

1. Launch the MySQL Workbench application and click on **Database**.  
[22](images/workbench%20database.png)   


2. Click on **Connect Database**   
[23](images/connect%20to%20database.png)   


3. Fill the dialog box with the appropriate information.   
[24](images/mysql%20connect%20to%20database.png)   

- You can find the **hostname** on the Amazon RDS console.  

- The username is the Amazon RDS database Master Username we created during your RDS setup.  

- For your **password**, choose **Store in vault** and enter the password created while creating the Amazon RDS database. After that, choose ok.  


*You are  now connected to the database.*  


[25](images/workbench%20connection%20successful.png)   
Within the MySQL Workbench, there are multiple schema objects that can be accessed within the database. This will allow you to perform tasks such as creating tables, inserting data, and executing queries.   


>**Note** If you have errors during connection, make sure you go to the security group on your RDS instance and ensure that the IP it has given access to is your IP. Change the settings from "custom" to **"my IP"**.    

[26](images/edit%20inbound%20rule.png)   


### Step 2: Finish Your connection in Vanus cloud   
1. Write a name for your connection, and from the list of sources, choose **Mysql**. 
[27](images/vanus%20cloud%20connection.png)   


2. Provide the Host ID, port ID, username, password, Databases and Tables as instructed. Then save the Amazon Mysql source by clicking "Next".  
![28](images/source%20configuration.png)  


Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai/getting-started/what-is-vanus)
