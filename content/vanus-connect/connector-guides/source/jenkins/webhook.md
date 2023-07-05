### Configuring Jenkins to Send Webhook Events 

### Step 1: Configure webhook

1. Click the copy icon to copy the webhook url
![copy url](images/copy-webhook-url.png)

2. Log in to your Jenkins account.

#### Sending events using http request plugin

1. Click on **Manage Jenkins**.
![](images/manage%20jenkins.png)

2. Navigate to the **Plugins** section.
![](images/plugins.png)

3. Click on **Available plugins**.
![](images/available%20plugins.png)

4. Search for **HTTP request**.
![](images/search-http-plugin.png)

5. Select the plugin and click on **Install without restart**.
![](images/install-http-plugin.png)

6. Click on **Go back to the top page**.
![](images/back-to-page.png)

7. Access your project by clicking on it.
![](images/click-into-project.png)

8. Click on **Configure**.
![](images/configure%20project.png)

9. Scroll down to **Build Steps** and click on **Add build steps**.
![](images/add-build-step.png)

10. Select **HTTP Request**.
![](images/http-request.png)

11. Provide the payload URL copied from your Jenkins source connector in Vanus Connect and select HTTP mode.
![](images/input-webhook-url.png)

12. Click on **Advanced** to see more settings.
![](images/click-advanced.png)

13. Set your desired parameters and click on **Save**.
![](images/save-settings2.png)

#### Sending events using a simple script

1. Click on **Manage Jenkins**.
![](images/manage%20jenkins.png)

2. Click into your project.
![](images/click-into-project.png)

3. Scroll down to **Build Step** and click on **Add build steps**.
![](images/add-build-step.png)

4. Click on **Execute Shell**.
![](images/execute-shell.png)

5. Write your code in the command field; ensure you include the payload URL copied from your Jenkins source connector in Vanus Connect.
![](images/add-vanus-url.png)

6. Click on save.
![](images/save-settings3.png)

:::note
If you are employing a custom script to transmit events, there is no requirement to install the HTTP Request plugin.
:::