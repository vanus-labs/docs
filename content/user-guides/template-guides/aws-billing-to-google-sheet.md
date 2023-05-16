# Send AWS billing to Google Sheets

AWS is the one of the largest cloud service platform that provides developers with a place to host and manage their software projects and much more

You can receive notifications on Google Sheets when Billing on AWS happens with the help of Vanus Cloud.

This guide will help you get a record of AWS billings directly on Google Sheets.

<iframe
  width="800"
  height="450"
  src="https://www.youtube.com/watch?v=KVqCJHHnzs8"
  title="YouTube video player"
  frameBorder="0"
  allowFullScreen={true}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>

## Get Started

### Step 1: Configure the Source

- Log in to [Vanus Cloud](https://cloud.vanus.ai/) and choose the **Send AWS billing to Google Sheets** template.

- Open AWS Management Console on browser and login with your root userid

![1.png](imgs/aws-to-sheets-1.PNG)

### Step 2: Configure Sink - Set the AWS account configurations

- Search for IAM services and open it

![2.png](imgs/aws-to-sheets-2.PNG)

- Go to Users tab in left sidebar and click on Add user button

![3.png](imgs/aws-to-sheets-3.PNG)

- Add a name for the user and click on Next

![4.png](imgs/aws-to-sheets-4.PNG)

- Select Attach policy directly, and Create policy

![5.png](imgs/aws-to-sheets-5.PNG)

- Search for Cost Explore Service option, open it

![6.png](imgs/aws-to-sheets-6.PNG)

- Now search for GetCostAndUsage option, select it and click on next

![7.png](imgs/aws-to-sheets-7.PNG)

- Add a name for the policy and click on Create Policy

![8.png](imgs/aws-to-sheets-8.PNG)

- Go back to the previous tab and search for the policy we have just created

![9.png](imgs/aws-to-sheets-9.PNG)

- Add that policy and click on Create User

### Step 3: Create an Access Key and Secret Key

- Click on the user we have created and go to the Security and Credential tab

- Scroll down the page. In the Acccess key section, click on Create access key
  ![10.png](imgs/aws-to-sheets-10.PNG)

- Select Command line interface CLI, and press Next
  ![11.png](imgs/aws-to-sheets-11.PNG)

- Click Create access key and download the .csv file

![12.png](imgs/aws-to-sheets-12.PNG)

### Step 3: Connection Configuration

- Go back to Vanus Cloud website and add a name for your connection

- Copy and paste the Access key ID and Secret Access key and set the desired fetching time in the Source configuration

- Click on Next

### Step 4: Sink Configuration

- Select the Service Account Credentials in the Authencation Method

  ![13.png](imgs/aws-to-sheets-13.PNG)

- Now go to Google Service Account and add a Project

  ![14.png](imgs/aws-to-sheets-14.PNG)

- Click on '+ CREATE SERVICE ACCOUNT'

- Add a Service Account Name and Service Account ID and click on Create and Continue and then click on Done

  ![15.png](imgs/aws-to-sheets-15.PNG)

- Now click on newly created Service Account, go to Keys tab

- Click on Add Key and select the Create new key option

![16.png](imgs/aws-to-sheets-16.PNG)

- Choose JSON format and click on Create. A JSON file will be downloaded on your device

  ![17.png](imgs/aws-to-sheets-17.PNG)

- Open that file and copy the credientals mentioned in it

- Go back to Setup and paste the copied credentials in the Credentials section

- For the spreadsheet Id we will create a go to Google Sheets and create a new sheet

- Copy the sheet id from the URL and paste it in the spreadhseet ID section

  ![18.png](imgs/aws-to-sheets-18.PNG)

- Add the sheet name and click on Submit

- Your connection has been succesfully setup

- Now all your AWS billings will get recorded in the Google Sheet automatically
