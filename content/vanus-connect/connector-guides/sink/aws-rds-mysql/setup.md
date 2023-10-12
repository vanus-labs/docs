# Amazon RDS MySQL

This guide contains the required information to set up an Amazon MySQL Sink in Vanus Connect.   

## Introduction  

MySQL is a popular open-source relational database management system to store, organizes, and retrieves data for websites, applications, and other software.

Vanus Connect's AWS MySQL sink connector simplifies transferring data/events from various sources to a MySQL database/table, with configurable filters and upsert/insert modes.

## Prerequisites

Before forwarding events to MySQL, you must have:

- An [**Amazon Web Services**](https://aws.amazon.com) account.
- A [**Vanus Cloud Account**](https://cloud.vanus.ai).

## Getting Started

### Step 1: Set Up a MySQL Server in AWS Using RDS

1. Log in to the [**AWS Management Console**](https://aws.amazon.com/) using your root account credentials.

2. Type **RDS**① in the search box and select **RDS**② from the results.

![aws-mysql-source-1](images/aws-mysql-source-1.webp)

3. Click the **Region name**③ to open the dropdown menu and select the particular **Region**④ in which you want to create the DB instance.

![aws-mysql-source-2](images/aws-mysql-source-2.webp)

4. Click **Create database**⑤.

![aws-mysql-source-3](images/aws-mysql-source-3.webp)

5. Select **Standard create**⑥ and choose the **MySQL**⑦ icon.

![aws-mysql-source-4](images/aws-mysql-source-4.webp)

6. Select the **Free tier**⑧ Template for testing, or opt for one of the other available options based on your specific use case.

![aws-mysql-source-5](images/aws-mysql-source-5.webp)

:::note
**Multi-AZ DB**⑨ deployment is only available for the paid tier. A Multi-AZ deployment automatically provisions and maintains a synchronous standby replica in a different Availability Zone.
:::

7. Enter the following information.

![aws-mysql-source-6](images/aws-mysql-source-6.webp)

- **DB instance identifier⑩:** Give a unique name to your instance.

- **Master username⑪:** This is the username that will be used to log in to your DB instance.

- **Master password⑫:** This is the password that will be used to log in with the username.

- **Confirm master password⑬:** Write the password again.

8. Select the **General Purpose SSD (gp2)⑭** storage type. *It's efficient and cost-effective for our intended use*.

![aws-mysql-source-7](images/aws-mysql-source-7.webp)

9. Enable **Public access**⑮.

![aws-mysql-source-8](images/aws-mysql-source-8.webp)

:::note
This allocates an IP to your database instance and allows direct connection to the database from the internet.
:::

10. Select **Create new**⑯ to create a new VPC security group, then specify your **New VPC security group name**⑰.

![aws-mysql-source-9](images/aws-mysql-source-9.webp)

11. Select **Password authentication**⑱.

![aws-mysql-source-10](images/aws-mysql-source-10.webp)

:::note
Leave **Enable Enhanced monitoring**⑲ unchecked to stay within the free tier limit.
:::

12. Input an **Initial database name**⑳, and set your preferred **Backup retention period**㉑.

![aws-mysql-source-11](images/aws-mysql-source-11.webp)

13. Click the **Create database**㉒ button to complete the process of creating your database.

![aws-mysql-source-12](images/aws-mysql-source-12.webp)

### Step 2: Modify Your VPC Security Groups

1. Click on the **Database**① you just created in AWS RDS.

![aws-mysql-source-13](images/aws-mysql-source-13.webp)

2. Within the **Connectivity & security**② section, click on your **VPC security group**③.

![aws-mysql-source-14](images/aws-mysql-source-14.webp)

3. Within the **Inbound rules**④ section, click the **Edit inbound rules**⑤ button.

![aws-mysql-source-15](images/aws-mysql-source-15.webp)

4. Click on the **Source field**⑥ and choose **My IP**⑦ to allow connectivity exclusively from your IP address, then click **Save rules**⑧ to save your settings.

![aws-mysql-source-16](images/aws-mysql-source-16.webp)

:::note
Alternatively, you can opt for `Anywhere-IPv4` to enable traffic from any IPv4 address.
:::

Now you can connect to your server and create a table.

---

### Step 3: Amazon RDS MySQL Connection Settings

**To set up Amazon RDS MySQL Sink in Vanus Connect:**

1. Return to the [**RDS page**](https://console.aws.amazon.com/rds/) and click on the **database**① you just created.

![aws-mysql-source-17](images/aws-mysql-source-17.webp)

2. Copy your **Endpoint & port**②.

![aws-mysql-source-18](images/aws-mysql-source-18.webp)

3. Navigate to the Vanus Cloud platform and fill in the following credentials.

![aws-mysql-source-19](images/aws-mysql-source-19.webp)

- **Host③:** This is your RDS endpoint.
- **Port④:** Enter the port number on which your MySQL server is listening. The default port for MySQL is 3306.
- **Username⑤:** Master username selected during the database creation.
- **Password⑥:** User password.
- **Database⑦:** The initial database name.
- **Table⑧:** The name of the table you want your events to be sent to.
- Choose the **Insertion Mode**⑨.
- Click **Next**⑩ and finish the configurations.

---

## Custom Connection

The event data must be in JSON format and created following the structure of your database, here's an example:

```json
{
  "title": "value",
  "date": "value",
  "ect...": "value"
}
```
