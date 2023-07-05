# HTTP

This guide contains information to set up a HTTP Sink in Vanus Connect.

## Introduction

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

Using HTTP Sink you can send an HTTP request to any application or webhook server.

## Prerequisites

To set up HTTP Sink, you must have:

- A [Vanus Cloud account](https://cloud.vanus.ai).
- A payload URL.

## Getting Started

1. Log in to your [Vanus](https://cloud.vanus.ai) account and click on **connections**  
![3](images/go%20to%20vanuscloud.png)  

2. Click on **Create Connections**  
![3](images/click%20create%20connection.png)  

3. Name your connection, Choose your source and click next 
![3](images/choose%20source.png) 

4. Click on **Sink** and choose **http** 
![3](images/choose%20sink.png) 

5. Get a Payload URL from your application. (The EndPoint URL to send the HTTP requests) 

6. Paste the payload URL into the `URL` field and press **Next**
![](images/http.png) 

*You can also select the URL Method (`POST`, `GET`, `PATCH`, `DELETE`, `PUT`)*   

7. Click on submit to finish the configuration. 
![](images/submit.png)  

8. You've successfully created your Vanus http sink connection.  
![](images/created.png)  

## Required Data Format

The event data must be JSON form4at, here a simple message, example:

```json
{
  "body": "Message must go here!"
}
```
