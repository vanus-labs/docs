--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

Before forwarding events to Google Sheets, you must have:

- A Google account with administrative privileges.

- A [**Vanus Cloud Account**](https://cloud.vanus.ai).

---

**Perform the following steps to configure your google-sheets Sink.**

### Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://docs.google.com/spreadsheets/u/0/) and **Sign in**.

2. Create a new **Blank**① spreadsheet.

![google-sheets-1](images/google-sheets-1.webp)

3. Copy the `ID`② of the spreadsheet found in the link.

![google-sheets-2](images/google-sheets-2.webp)

:::note
The spreadsheet's ID consists of the alphanumeric characters located between `d/` and `/edit` in the URL: `179S9nzv4xaRtI07lPw1tYRP9l65IZLF5zDN6C8r30oM`.
:::

---

### Step 2: Create a Connection

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem label="Authentication via Google" value="authentication-via-google">

1. Click on **Sign in with Google**① and follow the process to sign in to your Google account.

![google-sheets-3](images/google-sheets-3.webp)

</TabItem>

<TabItem label="Service Account Credentials" value="service-account-credentials">

1. Go to the Google [Service account](https://console.cloud.google.com/iam-admin/serviceaccounts) and click **Create Project**①.

![google-sheets-4](images/google-sheets-4.webp)

2. Write your **Project name**② and click **CREATE**③.

![google-sheets-5](images/google-sheets-5.webp)

3. Now click **+ CREATE SERVICE ACCOUNT**④.

![google-sheets-6](images/google-sheets-6.webp)

4. Create **Service account details**.

- First, write a **Service account name**⑤, this can be any name you would like to give it.

- Secondly, write a **Service account ID**⑥, this ID must be written in lowercase and needs to be at least 6 characters.

- Now click **CREATE AND CONTINUE**⑦.

![google-sheets-7](images/google-sheets-7.webp)

5. The connection doesn't need to set specific roles you can press **DONE**⑧.

![google-sheets-8](images/google-sheets-8.webp)

6. Now click on your **Service Account**⑨.

![google-sheets-9](images/google-sheets-9.webp)

7. Click on **KEYS**⑩ in the TAB menu.

![google-sheets-10](images/google-sheets-10.webp)

8. Now click on **ADD KEY**⑪ and **Create new key**⑫.

![google-sheets-11](images/google-sheets-11.webp)

9. Choose **JSON**⑬ and **CREATE**⑭.

![google-sheets-12](images/google-sheets-12.webp)

10. It will trigger the download of a JSON file copy the whole content and paste it in the **Credentials**⑮ section in Vanus Connect.

![google-sheets-13](images/google-sheets-13.webp)

</TabItem>

</Tabs>

---

### Step 3: Google Sheets Connection Settings

1. Paste the string from the sheet URL Example: `179S9nzv4xaRtI07lPw1tYRP9l65IZLF5zDN6C8r30oM` from Step 1.

2. Obtain the name of the **Sheet**① at the bottom of the spreadsheet.

![google-sheets-14](images/google-sheets-14.webp)

3. Paste the **Default Sheet Name**: `Sheet1`②.

![google-sheets-15](images/google-sheets-15.webp)

4. Click **Next**③ to continue.

---

Learn more about Vanus and Vanus Connect in our [documentation](https://docs.vanus.ai).
