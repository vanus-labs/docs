# AWS-PostgreSQL   

This guide contains information required in setting up an Amazon PostgreSQL Source in Vanus Cloud.  


## Introduction  

### PostqreSQL  
PostgreSQL is a reliable and feature-rich open-source database system with advanced features like multi-version concurrency control(MVCC), full-text search, and geospatial data management. It's commonly used for data-intensive applications and web applications due to its scalability and robustness. PostgreSQL works on various operating systems and provides both command-line and graphical user interface tools for data management and application development.


### AWS-PostgreSQL  
AWS PostgreSQL is a managed database service offered by Amazon Web Services (AWS) that provides a fully-managed, scalable, and secure PostgreSQL database in the cloud. It simplifies tasks like database backups, software patching, and replication, allowing users to focus on their application development and business needs. AWS PostgreSQL features high availability, automated backups and recovery, automatic failover, and advanced security features like encryption. It also supports popular PostgreSQL extensions like PostGIS and pgAdmin. Overall, AWS PostgreSQL is a reliable option for running PostgreSQL databases in the cloud with flexibility and scalability.


### PostgreSQL CDC  
PostgreSQL CDC (Change Data Capture) is a feature that captures and tracks real-time changes made to a PostgreSQL database. It works by monitoring the database's transaction log and capturing any detected changes, which are stored separately for further analysis or processing. CDC is useful for real-time data integration and synchronization in scenarios such as data warehousing, business intelligence, or ETL processes, ensuring that downstream systems have access to the latest information and data is synchronized across different systems in real-time.


### PostgreSQL CDC Source  
The Vanus PostgreSQL Source connector is a connector provided by Vanus, that identifies and tracks data changes from a PostgreSQL database in real-time. It extracts this data from the users postgresql database, converts it to cloud events and streams it to a sink connector of their choice.  
CDC is a technique used to identify and track changes made to a database, such as insertions, updates, and deletions.  


## Prerequisites  
Before creating your PostgreSQL connection, you must have:

- A Vanus Cloud account
- An SQL client
- A running PostgreSQL server
- A database, schema and Table  


## Getting Started 
1. Log into your [Vanus Dashboard](https://cloud.vanus.ai/dashboard)  

2. Click on **Connections**.  
![](images/VC%20connections%20start.png)   

3. Click on **Create connection**  
![](images/create%20connection.png)   


### Step 1: Setup A PostgreSQL database server in AWS using RDS  

#### Creating an RDS account  
1. Log in to the [AWS Management Console](https://aws.amazon.com/)   

2. Click on the left navigation pane called **services** click on database and select **RDS**.   
![](images/management%20console.png)   


3. Click on Create database in the Create Database section.  
![](images/create%20RDS%20database.png)   


#### Create Database  
Now you have options to select your engine.  

1. Select standard create and choose the PostgreSQL icon.   
![](images/create%20postgres%20db.png)   


2. Select the **Free tier** template.   
![](images/free%20tier%20template.png)   


>**Note** Multi-AZ deployment is not available for the free tier, you will have to pay for it. Using a Multi-AZ deployment automatically provisions and maintains a synchronous standby replica in a different Availability Zone.   



##### Settings   
![](images/settings.png)   

- DB Instance Identifier: Type a name unique to the region your DB instance has been set in.  

- Master Username: This is the username that would be used to log in to your DB instance.  

- Master Password: Type a password that takes the given constraints into consideration.  

- Confirm password: Type the password again.   


##### Instance configuration and storage
1. Leave the default Instance configuration.  

2. Select the gp2 storage type, it's efficient and cost effective for our intended use.  

3. Turn off autoscaling to avoid extra cost. Unless your use-case requires it.   
![](images/instance%20config%20and%20storage.png)   


##### Connectivity  
1. Leave the default VPC and subnet group.  

2. Enable public access, this allocates an IP to your database instance and allows direct connection to the database from your own device.  
![](images/connectivity.png)   


3. Select **Create new VPC security group**. This would create a security group that allows connection from the IP address of the device that you are currently using, to the database you created.

4. Leave Database port on 5432   

5. Select the password method of authentication.
![](images/VPC%20sg%20and%20db%20auth.png)   


6. Enable or disable performance insight depending on your database needs. We disabled it for this tutorial.  

7. Set a database name. If you do not provide one, Amazon RDS will not create a database on the instance being created.   
![](images/monitoring%20and%20additional%20config.png)   


8. Set your preferred backup retention period.  

9. Enable or disable backup replication, based on your database needs. We disabled it for this tutorial.  
![](images/backup.png)   


10. Leave Deletion protection unchecked, checking the box prevents you from being able to delete the database.  
![](images/logs%20and%20maintenance.png)   


11. Click on **Create Database**  
![](images/final%20create%20db.png)   


12. Your DB is now being created.  
![](images/DB%20creation%20in%20progress.png)   


#### Download an SQL client  
After the database instance is successfully created and its status changes to "available," you will be able to connect to a database on the DB instance through a standard SQL client. To accomplish this, we will download SQL Workbench, which is a popular SQL client, as part of the next step.   

1. Go to the [SQL Workbench website](http://www.sql-workbench.net/downloads.html) and **"click Generic package for all systems including all optional libraries."**  
![](images/SQL%20workbench.png)   


2. Next, click [here] to download the latest JDBC driver from the PostgreSQL website.  
![](images/download%20pgadmin%20driver.png)   


3. Click here to select the latest version of the driver.  
![](images/download%20java%20driver.png)   


#### Connect to the PostgreSQL Database  
In this step you would connect to the database you just created, using SQL Workbench.    

###### Pre-Connection steps 
1. Confirm the creation of your database.  
![](images/instance%20successfully%20created.png)   


2. Click into the database and navigate to security groups.     
![](images/click%20into%20database.png)   


3. Edit the inbound rule to ensure your current IP is granted access to the database.  
![](images/edit%20inbound%20rule.png)   


###### Connection steps  
1. Take note of your databases' endpoint and port.  
![](images/connection%20details.png)   


2. Install the SQL workbench.   

3. Open the program and a dialog box appears. Fill in the appropriate details.  
![](images/connect%20to%20rds%20pg.png)   


- **Driver:** The PostgreSQL driver being used is org.postgresql.Driver. To modify the driver definition, select it from the drop-down menu, and when prompted, choose to edit it. In the subsequent dialog box, click on the folder icon to select the driver that was downloaded in the previous step.   

- **URL:** To locate your JDBC URL, refer to the Amazon RDS console and copy your endpoint. After "jdbc:postgresql://", enter or paste the endpoint (including port) of the DB Instance. Then, append a forward slash and the name of your database instance at the end of the URL. As an illustration, the URL may look like this: jdbc:postgresql://rds-postgresql-.cg034hpkmmjt.us-east-1.rds.amazonaws.com/dbname.  

- **Username:** Enter the username that was set up for the Amazon RDS database. In this tutorial, the username is 'jay'.  

- **Password:** Enter the password that was set up for the Amazon RDS database.   

*Click **"Ok" when you're done.*  



- You are now connected to the database.  
![](images/congratulations%20you're%20connected%20to%20db.png)   


- You can start creating tables, inserting data and running queries from SQL Workbench.   
![](images/created%20table.png)   


![](images/table%20exists%20with%20content.png)   


### Step 2: Finish Your Connection in Vanus Cloud  
1. Write a name for your connection, and from the list of sources, choose Mysql.  
![](images/name%20connection.png)   


2. Provide the Host, port. Username, Password, Database, Schemas and tables.   
![](images/source%20config.png)   


Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai/getting-started/what-is-vanus)