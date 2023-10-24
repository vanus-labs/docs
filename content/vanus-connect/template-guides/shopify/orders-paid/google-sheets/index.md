# Shopify orders paid event create new row in Google Sheets

Shopify is a popular e-commerce platform that enables individuals and businesses to create and manage online stores.

By employing Vanus Connect, you can automatically add paid orders to your Google Sheets spreadsheet as a new row.

This guide is designed to assist you in setting up a system where you add paid orders to your Google Sheets spreadsheet as a new row.

## Getting Started

### Step 1: Configure the Source

1. Log in to [Vanus Connect](https://cloud.vanus.ai/) 

2. Choose the **Add new paid Shopify orders to Google Sheets rows** template. Click on **Try it now**①.

![shopify_google-sheets_1](images/shopify_google-sheets_1.webp)

3. Give the Conncection a **Name**②

![shopify_google-sheets_2](images/shopify_google-sheets_2.webp)

4. Click **Next**③.

![shopify_google-sheets_3](images/shopify_google-sheets_3.webp)



### Step 2: Obtain Google Sheets Spreadsheet ID and Configure the Sink

1. Sign In to [Google Sheets](https://docs.google.com/spreadsheets/create) and create a new Sheet.

2. **Copy**① the Spreadsheet ID.

![shopify_google-sheets_8](images/shopify_google-sheets_8.webp)

3. For the Sink Configuration, **Authenticate**② with Google, Paste the Google **Spreadsheet ID**③, provide the **Sheet Name**④, and Click on the **Submit**⑤ button.

![shopify_google-sheets_4](images/shopify_google-sheets_4.webp)

## Step 3: Configure Vanus Connect to receive Shopify events

After creating the connection in Vanus Connect, we have to configure our connection to receives events from our Shopify Store.

1. Click on the **connection name**①.

![shopify_google-sheets_10](images/shopify_google-sheets_10.webp) 

2. **Copy**② the Webhook URL.

![shopify_google-sheets_9](images/shopify_google-sheets_9.webp) 

3. Navigate to your Shopify Admin Dashboard and click on the **Settings**③ button.

![shopify_google-sheets_11](images/shopify_google-sheets_11.webp) 

4. Click the **Notification**④ menu on the sidebar.

![shopify_google-sheets_12](images/shopify_google-sheets_12.webp) 

5. Click on the **Create webhook**⑤ button.

![shopify_google-sheets_13](images/shopify_google-sheets_13.webp) 

6. Select the **Event**⑥, Paste the Webhook URL in the **URL**⑦ field, select the **Webhook API version**⑧, and click the **Save**⑨ button.

![shopify_google-sheets_14](images/shopify_google-sheets_14.webp) 


### Result Display

When a user pays for a product in your Shopify Store, the Order is automatically added to as new row in Google Sheets.

![shopify_google-sheets_6](images/shopify_google-sheets_6.webp)
