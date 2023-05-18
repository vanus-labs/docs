## Prerequisites

- An AWS Account with Administrative Privileges

## Getting Started

### Create your connection in Vanus Cloud

To obtain all Amazon Eventbridge events in Vanus Cloud, follow these steps:

1. Write a name for your connection.
![img.png](images/1.png)  

2. After you finish creating the connection, there will be more steps. Please click the link to open a new tab with the following instruction.
![img.png](images/2.png)  

3. Click **Next** and continue the configuration.  


### **Configuring Amazon Eventbridge**

1. Click the **copy icon** to copy the webhook url.
   ![](images/no1.png)  

2. Navigate to the [EventBridge console](https://console.aws.amazon.com/events/home).  

## Step 1: Create an Event Bus

1. In the side menu click **Event buses**.
   ![img_3.png](images/no2.png)  

2. Create a **new event bus** if you haven't already.
   ![img_4.png](images/3.png)  

3. Write a name and press **create**.
   ![img_5.png](images/4.png) 

## Step 2: Create a Rule.
1. Go to **Rules** from the side menu and click **Create rule**. 
   ![img_6.png](images/5.png)  

2. Name your rule, select your **Event bus** and press **Next**. 
   ![img_7.png](images/6.png)  

3. Select **all events**.
   ![img_8.png](images/7.png)  

4. Press **Next** to continue.
![img.png](images/8.png)

## Step 3: Create an API Destination and Connection
1. Select EventBridge API destination.
    ![img_9.png](images/9.png)  

2. Now select create new **Create a new API destination** under API destination.  
![img_10.png](images/10.png)  
   - Write a connection **Name**.
   - Set the **API destination endpoint** to the URL from Vanus Cloud from **[step 1](#configuring-amazon-eventbridge)**.
   - Set the **HTTP method** as `POST`.  
       
3. Next, select **Create a new connection**.
![](images/11.png)  

4. Write a name for you connection and select **Basic (Username/Password)** under Authorization type.
    ![img_12.png](images/12.png)  

5. Create a **Username** and a **Password** of your choice, this won't be needed in this scenario but it is required and press **Next**.
    ![img_13.png](images/13.png)  

6. Under Configure tags - optional press **Next**.
![](images/14.png)  

7. Review and press **Create rule**.
![](images/15.png)

*Now every event sent to your Event Bus will be send to your Vanus connection.* 


Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).