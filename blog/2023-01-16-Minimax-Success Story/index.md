---
title: Vanus builds a minimalist alarm notification system for an AI unicorn company
authors: Veda 
tags: ['message queue', 'notification', 'event-driven']
---

# Vanus builds a minimalist alarm notification system for an AI unicorn company

OpenAI released an Optimizing Language Model for Dialogue named ChatGPT at the end of 2022. Once it was released, ChatGPT gained great attention and traffic, causing much discussion on online platforms. 

An AI unicorn start-up company is committed to becoming an infrastructure builder and content application creator in the era of AIGC. The virtual robot is the main business direction of this company.  Alexis is the infrastructure leader of the AI company, and his team is mainly responsible for developing online platforms, hyper-scale offline training tasks, and big data engines. A key feature of their product is the ability to intelligently answer questions in real-time, making online platforms real-time nature extremely important.



## Problems Encountered During Rapid Development

#### The surge in users brings more fault alerts

As expected,  the trend of AI companies saw a surge in users in a short time, and the demand for cloud products has also increased accordingly. They chose three cloud vendors to adopt Hybrid Cloud solutions. Cloud product failures are inevitable; the GPU failure rate in large scenarios is the highest for the infrastructure team, and many of these failures are repeated.

The standard process is that when a failure occurs, the developer will receive an alert from the cloud product by email, and the developer needs to get in touch with the corresponding cloud vendor Customer Service as soon as possible to notify the cloud vendor quickly solve the problem.

"My point of view is that there is no need to invest manpower in cases where the scenarios are clear. Before using Vanus, our team needed to be on call 24 hours a day to check for any alarms, and then manually connect with the three cloud vendors. The IM（instant messaging）tools used by Customer Service of each cloud vendor are different, and the personnel composition and behavior habits of each vendor are also different, which brings a lot of communication costs to developers. If it cannot be repaired in time, it will even affect the normal use of the intelligent platform. It is better to use code to achieve unified automated management. The problem is how to converge different cloud products into one application and distribute them to different IM tools."

#### The delay of the manual alarm may shut down the entire platform business

Even if the staff is on call 24 hours a day, it is difficult to ensure the timeliness of every alarm.

"If the cloud vendor's server storage fails, the entire platform business will be shut down, which means that all users cannot use the product. After the problem is resolved, we need to apologize to all individual users and business users, and even compensate them."

For an emerging product, the stability of the product is extremely important. If the user experience is not good, you may lose the user permanently.

#### Traditional message queues are not friendly to Kubernetes

"When we make technology selection, the most basic requirement is to deploy on Kubernetes, because all our businesses run on K8s."

The mainstream message queues on the market run on physical servers or virtual machines, such as Kafka. It is inherently unfriendly to Kubernetes, and its strong reliance on page cache leads to performance degradation and requires additional manual operation and maintenance.

#### The original alarm data requires additional code transformation

The original alarm data is a large JSON file, requiring developers to write a lot of code to convert the JSON file into human-readable information, and then send it to the cloud vendor's Customer Service. Different alarm data and different functions require additional codes. As alarms change and increase, developers must write codes continuously and put them into applications, raising development costs and later operation and maintenance costs.



## How was the problem solved?

For a start-up company, time is life, and it may be difficult to win against similar products if it is late. In the beginning, Alexis' team gave up on the solution developed by themselves. To save labor costs and ensure the timeliness of alarms, they urgently need to find an alarm notification system that can fully automate alarms and meet the requirements of product deployment on Kubernetes. After comparing and screening similar products on the market, Vanus was finally selected.

#### Automatically distribute alerts to different IM tools

When developers receive alerts from different cloud products, they need to reverse the alarm to Customer Service of the cloud vendor, and Customer Service will deal with the alarm content in a timely manner. Now the Alexis team sends the alarm events of different cloud vendors to Vauns in a unified way, and then uses Vanus's rich Connector features to automatically distribute the alarms to the corresponding IM tools of the cloud vendors.

"Vanus Connector is very helpful to us, we only need to do some simple configuration to automatically distribute to the corresponding Customer Service personnel. After being familiar with the basic concepts of Vanus, we can complete the configuration in about 10 minutes. For example, push a Prometheus alarm to the Slack group and send alarm emails, text messages, etc., which helps us complete the upstream and downstream access requirements traditional messaging products cannot do."

#### No additional data transformation code is required to speed up business iteration

"Vanus's Transform function helped us complete the data conversion requirements. Otherwise, we would have to write a lot of glue code to connect the upstream and downstream systems. Now we only need to use Vanus' Susbcription to configure it."

Vanus is a message queue with built-in event processing capabilities. Through the simple configuration of Vanus transform function, the JSON file of the original alarm data is converted into human-readable specific alarm information, and then distributed to the corresponding cloud vendor customer service communication tool through the Connector. Developers are not required to continuously add conversion codes to the program, which speeds up the iteration speed of the business.



## How does it feel to use Vanus?

With Vanus, my team and I rebuilt the alarm notification system to achieve fully automated notifications with simple configuration. Rich Connectors make the system extremely scalable. If you need to add new data sources or receiving channels, you can use your other Connectors, which is equivalent to systematically solving the problem of alarm notification automation.

"What attracts me most about Vanus is that it can be used as a base for us to build an event-driven system. The event-driven architecture can provide our system with excellent scalability and improve the speed of our business iteration. In addition, Vanus' fully k8s-oriented design is very useful to us, because all our business runs on k8s, saving us many maintenance costs.

In the next step, we plan to apply Vanus to the real-time synchronization scenario of our internal data, and use the Connector to synchronize the MySQL data to the MongoDB database in real-time. Afterward, it became more clear that we wanted to do our training Workflow around Vanus. In addition, some internal teams are using Redis's pub/sub and Pulsar, and we plan to converge to Vanus together. "
