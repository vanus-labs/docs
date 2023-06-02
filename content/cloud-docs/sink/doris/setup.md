--- 
hide_table_of_contents: true
hide_title: true
---

## Prerequisites

Before forwarding events to Doris, you must have:

- A Doris cluster.

---

**Perform the following steps to configure your Doris Cluster**

## Step 1: Setup A Doris Cluster using AWS EC2 Instance

### Launch an AWS EC2 Instance

1. Go to the [AWS Management Console](https://console.aws.amazon.com) and sign in using your AWS account credentials.


2. Search for "EC2" in the AWS Management Console search bar or locate it under the "Compute" category. Click on "EC2" to access the EC2 Dashboard.
![Alt text](images/1.1.png)

3. On the EC2 Dashboard, click on the "Launch Instance" button to start the instance creation process.
![Alt text](images/2.png)

4. Choose an Amazon Machine Image (AMI) and Instance type.
![Alt text](images/3.png)

5. Create or select a key pair.
![Alt text](images/5.png)

5. Create or select a security group to control inbound and outbound traffic to your instance.
![Alt text](images/4.png)

6. Launch the instance.

### SSH into the EC2 Instance

1.In your EC2 Dashboard, click on Instances, then check the box next to the instance you created, and finally connect.
![Alt text](images/ssh1.png)

2. Click on the SSH Client Tab and then copy the text labelled Example.
![Alt text](images/ssh2.png)

3. Open your computer's terminal, navigate to the directory containing your keypair, and then paste the text you copied previously. Run it and then enter 'yes' when prompted.
![Alt text](images/ssh3.png)


### Installing Apache Doris

Before installing Apache Doris, ensure that your system meets the minimum requirements and dependencies. This typically includes having Java JDK installed and configured properly. 

1. Update and upgrade your system to refresh your APT cache index.

`sudo apt -y update && sudo apt -y upgrade`

2. Once the update is done, disable the swap partition.

`sudo swapoff -a`

3. Install dependencies
`sudo apt install build-essential maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build -y`

4. To install the JRE from OpenJDK 11, run the command below:

`sudo apt install default-jre -y`

5. Confirm the java installation
`java --version`
![Alt text](images/dep1.png)

6. Set the JAVA_HOME environment variable. This is to make JAVA available system-wide as well as specify the JAVA location in the system. Begin by checking the installation location of JAVA by this command below.
`sudo update-alternatives --config java`

From my system, JAVA is installed on `/usr/lib/jvm/java-11-openjdk-amd64/bin/java` path.

7. Configure the Java environment with this command `sudo vim /etc/environment` using your preferred text editor and add the following line. 
```
JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
```
8. Save your file and exit from your editor. Source your profile file.

`source /etc/environment`

9. Verify that the environment variable is set:

```shell
$ echo $JAVA_HOME

/usr/lib/jvm/java-11-openjdk-amd64
```

10.  Run the code below to add the Apache Doris apt repository. This is because it is not available on the Ubuntu repository.

`sudo add-apt-repository -y ppa:ubuntu-toolchain-r/test`

20. Once you have added the apt repository, update your system to refresh your apt cache.

`sudo apt update`

21. Install GCC - GCC refers to the C (and C++) compiler offered by the GNU toolchain of compilers. It is an essential tool to compile Apache Doris in Ubuntu.
This is installed by running the following commands.

`sudo apt install build-essential`
![Alt text](images/dep3.png)

`sudo apt install gcc g++`
![Alt text](images/dep4.png)

22. 
## Doris Connection Settings

1. Provide the following credentials

   - Fenodes: Enter the comma-separated list of FQDNs or IP addresses of the nodes that make up your Doris cluster.
   - Database Name: Enter the name of the database that you want to use for the sink.
   - Table Name: Enter the name of the table that you want to use for the sink.
   - Username: Enter the username that you want to use to connect to your Doris database.
   - Password: Enter the password that corresponds to the username you entered in the previous step.
     ![](images/doris.png)

2. Click `Next`

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).

