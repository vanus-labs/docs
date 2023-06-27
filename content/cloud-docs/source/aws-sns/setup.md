--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- An [AWS Account](https://aws.amazon.com) 

---

**Perform the following steps to configure your Amazon SNS Source**

### Step 1: Create a new AWS user 

Create a new user and set the proper IAM policy. 

#### Create a user 

1. Log in to the [AWS Management Console](https://aws.amazon.com/) using your root account credentials. 

2. Navigate to the IAM service by typing **IAM** in the search bar and selecting it from the drop down menu. 
![](images/iam.png)  

3. Click on the Users tab in the left navigation menu. 
![](images/select%20users.png)  

4. Click on the **Add users** button. 
![](images/add%20users.png)  

5. Write the name of your user and click **Next**. 
![](images/name%20user.png)  

6. Select **attach policies directly**. 
![](images/attach%20policies%20directly.png)  

7. Search for **AmazonSNS**; select `AmazonSNSFullAccess` and click **next** 
![](images/sns%20full%20access.png)  

8. Review and click on **Create user**. 
![](images/create%20user.png)  

#### Create Access Key 

1. click on the user you just created. 
![](images/click%20into%20user.png)  

2. Click on **Security credentials** and **Create access key**. 
![](images/create%20access%20key.png)  

3. Select Command line interface (CLI), accept recommendations and click **Next**. 
![](images/cli%20access.png)  

4. Click on **Create access key**.  
![](images/create%20access%20key%20final.png)  

5. Copy your **access key** and **secret access key** and keep them safe. Additionally, you can click on **Download.csv file** to download the file containing your credentials as a backup in case you misplace or lose the copied keys. 
![](images/csv.png) 

6. Click on **Done**

7. Your Access Key has been created and is active.  
![](images/active%20access%20key.png)  

---

### Step 2: Create an SNS topic 

1. Navigate to the **Simple Notification Service** page by typing **SNS** in the search bar and selecting it from the drop down menu. 
![](images/sns%20search.png)  

2. Click on **Topics**. 
![](images/select%20topics.png)  

3. Click on **Create topic**. 
![](images/create%20topic.png)  

4. Select topic type, name your topic, and select a display name for the topic. 
![](images/create%20topic2.png)  

5. Leave the other settings on default and click **Create topic**. 
![](images/create%20topic%20final.png)  

6. Copy your SNS topic ARN, it would be needed when creating your connection in Vanus. 
![](images/topic%20arn.png)  

---

### Step 3: Amazon SNS Connection Settings 

1. Write a connection name without any spaces.  
![](images/Name%20connection.png)  

2. Enter your Access Key ID, Secret Access key, SNS ARN and click **Next** to continue the configuration.  
![](images/Source%20config.png)  

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
