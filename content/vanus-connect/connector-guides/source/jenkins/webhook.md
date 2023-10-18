# Configuring Jenkins to Send Webhook Events

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Step 1: Configure webhook

1. Click the **copy icon**① to copy the webhook url

![jenkins-source-2](images/jenkins-source-2.webp)

2. Log in to your Jenkins account.

## Step 2: Send Jenkins Event

<Tabs>

<TabItem label="Plugin" value="plugin">

1. Click on **Manage Jenkins**①.

![jenkins-source-3](images/jenkins-source-3.webp)

2. Navigate to the **Plugins**② section.

![jenkins-source-4](images/jenkins-source-4.webp)

3. Click on **Available plugins**③.

![jenkins-source-5](images/jenkins-source-5.webp)

4. Search for **http request**④.

![jenkins-source-6](images/jenkins-source-6.webp)

5. **Select**⑤ the plugin and click on **Install without restart**⑥.

![jenkins-source-7](images/jenkins-source-7.webp)

6. Click on **Go back to the top page**⑦.

![jenkins-source-8](images/jenkins-source-8.webp)

7. Access your **project**⑧ by clicking on it.

![jenkins-source-9](images/jenkins-source-9.webp)

8. Click on **Configure**⑨.

![jenkins-source-10](images/jenkins-source-10.webp)

9. Scroll down to **Build Steps**⑩ and click on **Add build step**⑪.

![jenkins-source-11](images/jenkins-source-11.webp)

10. Select **HTTP Request**⑫.

![jenkins-source-12](images/jenkins-source-12.webp)

11. Provide the payload **URL**⑬ copied from your Jenkins source connector in Vanus Connect and choose **POST**⑭ as the HTTP mode.

![jenkins-source-13](images/jenkins-source-13.webp)

12. Click on **Advanced**⑮ to see more settings.

![jenkins-source-14](images/jenkins-source-14.webp)

13. Set your desired parameters and click on **Save**⑯.

![jenkins-source-15](images/jenkins-source-15.webp)

</TabItem>

<TabItem label="Script" value="script">

1. Click on **Manage Jenkins**①.

![jenkins-source-16](images/jenkins-source-16.webp)

2. Click into your **project**②.

![jenkins-source-17](images/jenkins-source-17.webp)

3. Scroll down to **Build Steps**③ and click on **Add build step**④.

![jenkins-source-18](images/jenkins-source-18.webp)

4. Click on **Execute shell**⑤.

![jenkins-source-19](images/jenkins-source-19.webp)

5. Compose your code in the command field, including the Jenkins source connector's copied payload **URL**⑥, and click on **save**⑦.

![jenkins-source-20](images/jenkins-source-20.webp)

</TabItem>

</Tabs>

:::note
If you are employing a custom script to transmit events, there is no requirement to install the HTTP Request plugin.
:::
