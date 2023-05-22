# Labeling

This guide contains information to set up a Labeling Source in Vanus Cloud.

## Introduction

Labeling (also known as tagging) is a method used to organize and categorize resources in a cloud environment. Labeling is done by attaching metadata (key-value pairs) to cloud resources such as virtual machines, storage buckets, or database instances. Labeling cloud events is an essential part of managing cloud-based applications and services efficiently. Labels can be used to categorize and organize cloud events, making it easier to monitor performance, troubleshoot issues, easier automation, increased efficiency and identify trends. 

The Labeling Source is a webhook, it receives http requests with json data as the body, and labels the correcting keys.

---

## Prerequisites

- A [Vanus Cloud account](https://cloud.vanus.ai)

---

## Getting Started

### Create your connection in Vanus Cloud

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Name your connection  
![img.png](images/1.png)

4. Choose your source and insert the following:

- Source Path: A Source path refers to a field in body to label.
- Target Path: A Target path refers to a field in body where the output is placed. The output is a list of labels. 

**Example of a Path**

A JSON path would be structured in this format; `$.data.body.title`

In this example, the JSON path specifies the location of the title attribute within the body object of a CloudEvent's data attribute. The path consists of several components, separated by the dot (.) operator:

- `$`: The root object of the JSON document.
- `data`: The key of a property within the root object.
- `body`: The key of a property within the data object.
- `title`: The key of a property within the body object.
By following this path, you can access the value of the title attribute within the body object of a CloudEvent's data attribute.

- Label: The config of label, an example as below:
```json
{
    "label1": {
        "keys": ["key1", "key2"]
    },
    "label2": {
        "keys": ["key3", "key4", "key5"]
    }
}
```

If "key1" or "key2" is present in the field of `Source Path`, the `Target Path` will have "label1".
If "key3" or "key4" or "key5" is present in the field of `Source Path`, the `Target Path` will have "label2". 

![img.png](images/source.png)

5. Click **Next** to continue your configurations.  

6. Choose your sink and click **Next** 
![3](images/choose%20sink.png) 

7. Click on submit to finish the configuration. 
![](images/submit.png)  

8. You've successfully created your Vanus labeling source connection.  
![](images/created.png) 

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
