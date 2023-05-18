#
# Prerequisites

Before obtaining SNS events, you must have:

- Have an AWS SNS Topic.
- AWS IAM Access Key.
- AWS permissions for the IAM user:
  - sns:Subscribe
  - sns:ConfirmSubscription
  - sns:Unsubscribe

---

**Perform the following steps to configure your Amazon SNS Source:**

## Step 1: Create a New AWS User

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.
2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by clicking on the Services menu and selecting IAM.
   ![](images/1.png)
3. Click on the **Users tab** in the left navigation menu, and then click the **Add user** button.
   ![](images/create%20a%20user.png)
4. Write the name for your user and click **next**. 
![](images/3.png)

5. Select **attach policy directly**, and **Create policy**.
   ![](images/permissionoption.png)
6. Select the Service `Cost Explore Service` and search for the following policy.
    - "PutObject",
    - "GetObject",
    - "GetObjectVersion",
    - "DeleteObject",
    - "DeleteObjectVersion"
   
7. Press **next** and proceed to the next page, name your policy and click **create policy**.
8. Return back to your previous `TAB`.
9. Search for your custom policy and add it to your account, and press **next**.
   ![img.png](images/9..png)
10. Review and press **create user**.

---

## Step 2: Create an Create Access Key

1. Now click on the user you just created.
   ![img.png](images/11.png)
2. Under **Security and credential** scroll down the page to `Access Key`, and Click **Create access key**.
   ![](images/12.png)
3. Select Command line interface CLI, and press **next**.
   ![img.png](images/13.png)
4. Save your access key and secret key safely.
   ![](images/img.png)

---

## Step 3: Config your Connection

1. Write a connection name without any spaces.
   ![img.png](images/16.png)
2. Enter the following credentials:

   - Port
   - Access Key ID
   - Secret Access Key
   - SNS ARN
   - Endpoint
   - Protocol

     ![img.png](images/vanus-sns.png)

3. To get **SNS ARN**, **Endpoint** and **Protocol**, let's go back to our Amazon Web Services Account. 

4. To obtain the **SNS ARN**, Search for **SNS** and Click on it to open the SNS Console. 
![img.png](images/search%20sns.png) 

5. Click on **topics** 
![img.png](images/select%20topics.png)

5. Click on the **Create Topic** Button. 
![img.png](images/create%20topic.png)

6. Select the type as **FIFO** and name the Topic. Scroll down and click the **Create topic** button to create a Topic. 
![img.png](images/create%20topic2.png)


6. Copy the **SNS ARN** and paste on the field in Vanus Cloud and click **Next** to continue.  
![img.png](images/arn.png)

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
