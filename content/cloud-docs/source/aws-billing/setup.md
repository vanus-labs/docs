--- 
hide_table_of_contents: true
hide_title: true
---

## Prerequisites

- An [AWS Account ](https://aws.amazon.com)

---

**Perform the following steps to configure your Amazon billing Source:**

## Step 1: Create a new User in AWS 

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.
2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by searching for IAM and click the IAM service.
   ![](images/1.png)
3. Click on the **Users tab** in the left navigation menu, and then click the **Add user** button.
![](images/create%20a%20user.png)
4. Write the name for your user and click **next**.
![img.png](images/3.png)
5. Select **Attach policy directly**, and **Create policy**.
![](images/4..png)
6. Select the Service `Cost Explore Service`.
![img.png](images/5..png)
7. Next search for the following policy.
   - "GetCostAndUsage", 
![img.png](images/6.png)
8. Press **Next** and proceed to the next page.
9. Name your policy and click **Create policy**.
![img_1.png](images/7..png)
10. Return back to your previous `TAB`.
![img.png](images/8.png)
11. Search for your custom policy and add it to your account, and press **Next**.
![img.png](images/9..png)
12. Review and press **Create user**.
![img.png](images/10..png)

---

## Step 2: Create an Access Key and Secret Key
1. Now click on the user you just created.
![img.png](images/11.png)
2. Under **Security and credential** scroll down the page to `Access Key`, and Click **Create access key**.
![](images/12.png)
3. Select Command line interface CLI, and press **Next**.
![img.png](images/13.png)
4. Click **Create access key**.
![img.png](images/14.png)
5. Save your `Access key` and `Secret key` safely. Download the .csv file.
    ![](images/15.png)

---

## Step 3: Amazon Billing Connection Settings

1. Write a name for your connection.
      ![img.png](images/16.png)
2. Provide your Access Key ID and Secret Key, set the desired hour for event fetching.
![](images/17.png)
3. Click **Next** and continue the configuration.

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai)