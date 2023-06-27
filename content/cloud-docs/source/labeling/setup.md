--- 
hide_table_of_contents: true
hide_title: true
---

### Prerequisites

- Have a HTTP client

---

**Perform the following steps to configure your labeling Source.**

### Labeling Connection Settings
1. Write a name for your connection in Vanus Cloud.
![](images/name.png)

2. Insert the following:
    - **Source Path:** A Source path refers to JSON path origin.
    - **Target Path:** A Target path refers JSON path where the output is placed. The output is a list of labels.
    
**Example of a Path**

A JSON path would be structured in this format; `$.data.body.title`

In this example, the JSON path specifies the location of the title attribute within the body object of a CloudEvent's data attribute. The path consists of several components, separated by the dot (.) operator:

- `$`: The root object of the JSON document.
- `data`: The key of a property within the root object.
- `body`: The key of a property within the data object.
- `title`: The key of a property within the body object.
By following this path, you can access the value of the title attribute within the body object of a CloudEvent's data attribute.

    - Label: The configuration of a label, example below:
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
    If "key1" or "key2" is present in the value of  the `Source Path`, the `Target Path` will have the "label1".
    If "key3" or "key4" or "key5" is present in the value of the `Source Path`, the `Target Path` will have the "label2".
    
    ![img.png](images/source.png)
3. After creating the connection, there are a few more steps. Simply click the link to open a new page with all the details on how to complete the connection.

   ![](images/warning.png)

4. Click **Next** and continue the configuration.

---

Learn more about Vanus and Vanus Cloud in our [documentation](https://docs.vanus.ai).
