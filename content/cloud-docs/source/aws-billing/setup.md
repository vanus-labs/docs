--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- Have an [AWS Account ](https://aws.amazon.com)

---

**Perform the following steps to configure your Amazon billing Source.**

### Step 1: Create a new User in AWS 

1. Log in to the AWS [Management Console](https://aws.amazon.com) using your root account credentials.
2. Navigate to the [IAM](https://console.aws.amazon.com/iam/) service by searching for IAM and clicking the **IAM service**.
   ![](images/1.png)
3. Click the **Users tab** in the left navigation menu, then click the **Add user** button.
![](images/create%20a%20user.png)
4. Write a name for your user and click **next**.
![img.png](images/3.png)
5. Select **Attach policy directly**, and **Create policy**.
![](images/4..png)
6. Search and select the Service `Cost Explore Service`
![img.png](images/5..png)
7. Next, search for the following policy.
   - "GetCostAndUsage", 
![img.png](images/6.png)
8. Press **Next** and proceed to the next page.
9. Name your policy and click **Create policy**.
![img_1.png](images/7..png)
10. Return to your previous `TAB`.
![img.png](images/8.png)
11.  Search for your custom policy, add it to your user, and press **Next**.
![img.png](images/9..png)
12. Review and press **Create user**.
![img.png](images/10..png)

---

### Step 2: Create an Access and Secret Key
1. Now click on the user you've just created.
![img.png](images/11.png)
2. Under **Security and credential**, scroll down the page to `Access Key`, and Click **Create access key**.
![](images/12.png)
3. Select Command line interface CLI, and press **Next**.
![img.png](images/13.png)
4. Click **Create access key**.
![img.png](images/14.png)
5. Save your `Access key` and `Secret key` safely. Download the .csv file.
    ![](images/15.png)

---

### Step 3: Amazon Billing Connection Settings

1. Write a name for your connection in Vanus Cloud.
      ![img.png](images/16.png)
2. Provide your Access Key ID and Secret Key, and set the desired hour according to the UTC you want your billing information fetched.
![](images/17.png)
3. Click **Next** and continue the configuration.

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).