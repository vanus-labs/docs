# Amazon RDS MySQL 

This guide contains information required in setting up an Amazon MySQL Source in Vanus Connect.  

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

### Step 1: Setup A Mysql database server in AWS using RDS  

#### Create an RDS account  
1. Log in to the [**AWS Management Console**](https://aws.amazon.com/) using your root account credentials.

2. Type **RDS**① in the search box and select **RDS**② from the results.

![aws-mysql-sink-1](images/aws-mysql-sink-1.webp)

3. Click the **Region name**③ to open the dropdown menu and select the particular **Region**④ in which you want to create the DB instance.

![aws-mysql-sink-2](images/aws-mysql-sink-2.webp)

4. Click **Create database**⑤.

![aws-mysql-sink-3](images/aws-mysql-sink-3.webp)

5. Select **Standard create**⑥ and choose the **MySQL**⑦ icon.

![aws-mysql-sink-4](images/aws-mysql-sink-4.webp)

6. Select the **Free tier**⑧ Template for testing, or opt for one of the other available options based on your specific use case.

![aws-mysql-sink-5](images/aws-mysql-sink-5.webp)

:::note
**Multi-AZ DB**⑨ deployment is only available for the paid tier. A Multi-AZ deployment automatically provisions and maintains a synchronous standby replica in a different Availability Zone.
:::

7. Enter the following information.

![aws-mysql-sink-6](images/aws-mysql-sink-6.webp)

- **DB instance identifier⑩:** Give a unique name to your instance.

- **Master username⑪:** This is the username that will be used to log in to your DB instance.

- **Master password⑫:** This is the password that will be used to log in with the username.

- **Confirm master password⑬:** Write the password again.

8. Select the **General Purpose SSD (gp2)⑭** storage type. *It's efficient and cost-effective for our intended use*.

![aws-mysql-sink-7](images/aws-mysql-sink-7.webp)

9. Enable **Public access**⑮.

![aws-mysql-sink-8](images/aws-mysql-sink-8.webp)

:::note
This allocates an IP to your database instance and allows direct connection to the database from the internet.
:::

10. Select **Create new**⑯ to create a new VPC security group, then specify your **New VPC security group name**⑰.

![aws-mysql-sink-9](images/aws-mysql-sink-9.webp)

11. Select **Password authentication**⑱.

![aws-mysql-sink-10](images/aws-mysql-sink-10.webp)

:::note
Leave **Enable Enhanced monitoring**⑲ unchecked to stay within the free tier limit.
:::

12. Input an **Initial database name**⑳, and set your preferred **Backup retention period**㉑.

![aws-mysql-sink-11](images/aws-mysql-sink-11.webp)

13. Click the **Create database**㉒ button to complete the process of creating your database.

![aws-mysql-sink-12](images/aws-mysql-sink-12.webp)

### Step 2: Modify Your VPC Security Groups

1. Click on the **Database**① you just created in AWS RDS.

![aws-mysql-sink-13](images/aws-mysql-sink-13.webp)

2. Within the **Connectivity & security**② section, click on your **VPC security group**③.

![aws-mysql-sink-14](images/aws-mysql-sink-14.webp)

3. Within the **Inbound rules**④ section, click the **Edit inbound rules**⑤ button.

![aws-mysql-sink-15](images/aws-mysql-sink-15.webp)

4. Click on the **source field**⑥ and choose **My IP**⑦ to allow connectivity exclusively from your IP address, then click **Save rules**⑧ to save your settings.

![aws-mysql-sink-16](images/aws-mysql-sink-16.webp)

:::note
Alternatively, you can opt for `Anywhere-IPv4` to enable traffic from any IPv4 address.
:::

Now you can connect to your server and create a table.

---

### Step 3: Amazon RDS MySQL Connection Settings

**To set up Amazon RDS MySQL Sink in Vanus Connect:**

1. Return to the [**RDS page**](https://console.aws.amazon.com/rds/) and click on the **database**① you just created.

![aws-mysql-sink-17](images/aws-mysql-sink-17.webp)

2. Copy your **Endpoint & port**②.

![aws-mysql-sink-18](images/aws-mysql-sink-18.webp)

3. Navigate to the Vanus Cloud platform and fill in the following credentials.

- **Host③:** This is your RDS endpoint.
- **Port④:** Enter the port number on which your MySQL server is listening. The default port for MySQL is 3306.
- **Username⑤:** Master username selected during the database creation.
- **Password⑥:** User password.
- **Database⑦:** The initial database name.
- **Table⑧:** The name of the table you want your events to be sent to.

![aws-mysql-sink-19](images/aws-mysql-sink-19.webp)

4. Verify the Schema by clicking on **Fetch schema**⑨. Click **Next**⑩ to continue the configuration.

![aws-mysql-sink-23](images/aws-mysql-sink-23.webp)

---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai/getting-started/what-is-vanus)
