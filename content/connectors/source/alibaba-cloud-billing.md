---
title: Alibaba Cloud Billing
---

# Alibaba Cloud Billing Source
This document provides a brief introduction to AliCloud billing Source.
It is also designed to guide you through the process of running a
GitHub Source Connector.

## Introduction
The AliCloud Billing Source is a [Vance Connector][vc] which use [AliCloud billing][alibill] api pull yesterday billing data by fix time.The data group by product


## AliCloud Billing Event Structure
For example, billing data output a CloudEvent looks like:

```json
{
  "specversion": "1.0",
  "id": "bd64e9e0-cd46-43f1-95fa-2008b6b49e85",
  "source": "cloud.alicloud.billing",
  "type": "alicloud.account_billing.daily",
  "datacontenttype": "application/json",
  "time": "2022-06-14T07:01:55.277687Z",
  "data": {
    "VanceSource": "cloud.alicloud.billing",
    "VanceType": "alicloud.account_billing.daily",
    "AdjustAmount": 0,
    "BillAccountID": "123456",
    "BillAccountName": "aliyun23456",
    "BillingDate": "2022-06-13",
    "BizType": "",
    "CashAmount": 0,
    "CostUnit": "",
    "Currency": "CNY",
    "DeductedByCashCoupons": 0,
    "DeductedByCoupons": 0,
    "DeductedByPrepaidCard": 0,
    "InvoiceDiscount": 0,
    "OutstandingAmount": 0,
    "OwnerId": "123456",
    "OwnerName": "aliyun23456",
    "PaymentAmount": 0.23,
    "PipCode": "disk",
    "PretaxAmount": 0,
    "PretaxGrossAmount": 0.2352,
    "ProductCode": "disk",
    "ProductName": "",
    "SubscriptionType": "PayAsYouGo"
  }
}
```

## Quick Start
This quick start will guide you through the process of running
a AliCloud Billing Source Connector.

### Prerequisites
- Have container runtime (i.e., docker).
- Have a AliCloud account.

### Step 1: Create a Config.json file
Create a new file name config.json with the following command.
> vim config.json
or
> vi config.json

### Step 2: Insert the configurations.
Press `I` to modify the file and add the following configurations. Use the chart bellow to modify the configs.
 ```json
 {
  "v_target": "http://host.docker.internal:8081",
  "access_key_id": "YOUR_ACCESS_KEY",
  "secret_access_Key": "YOUR_SECRET_KEY"
}
 ```
### Config Fields of the Source Connector

| name              | requirement | description                                                         |
|-------------------|-------------|---------------------------------------------------------------------|
| v_target          | required    | target URL will send CloudEvents to                                 |
| access_key_id     | required    | the AliCloud account [accessKeyID][accessKey]                       |
| secret_access_Key | required    | the AliCloud account [secretAccessKey][accessKey]                   |
| endpoint          | optional    | the AliCloud business api endpoint,default business.aliyuncs.com    |
| pull_hour         | optional    | AliCloud billing source pull billing data time(unit hour),default 2 |

:::tip
Exit `vim` and `vi` press `ESC` and `shift` + `:` afterwards `wq` and `ENTER`.
:::

### Step 3: Run the docker image
Run The connector with the following command.
> docker run -v $(pwd)/config.json:/vance/config/config.json --rm vancehub/source-alicloud-billing


### (Optional) Verify the Source connector
**step 1**

Start display Sink with the following command:
> docker run -p 8081:8081 --rm vancehub/sink-display

### Result

 ```shell

{
  {
   "id" : "42d5b039-daef-4071-8584-e61df8fc1354",
   "source": "cloud.alicloud.billing",
   "specversion" : "V1",
   "type": "alicloud.account_billing.daily",
   "datacontenttype" : "application/json",
   "time" : "2022-05-17T18:44:02.681+08:00", 2-07-06"
   "data": {
    "VanceSource": "cloud.alicloud.billing",
    "VanceType": "alicloud.account_billing.daily",
    "AdjustAmount": 0,
    "BillAccountID": "123456",
    "BillAccountName": "aliyun23456",
    "BillingDate": "2022-06-13",
    "BizType": "",
    "CashAmount": 0,
    "CostUnit": "",
    "Currency": "CNY",
    "DeductedByCashCoupons": 0,
    "DeductedByCoupons": 0,
    "DeductedByPrepaidCard": 0,
    "InvoiceDiscount": 0,
    "OutstandingAmount": 0,
    "OwnerId": "123456",
    "OwnerName": "aliyun23456",
    "PaymentAmount": 0.23,
    "PipCode": "disk",
    "PretaxAmount": 0,
    "PretaxGrossAmount": 0.2352,
    "ProductCode": "disk",
    "ProductName": "",
    "SubscriptionType": "PayAsYouGo"
   }
 }
 ```


[vc]: https://github.com/linkall-labs/vance-docs/blob/main/docs/concept.md
[config]: https://github.com/linkall-labs/vance-docs/blob/main/docs/connector.md
[alibill]: https://help.aliyun.com/document_detail/142608.html
[accessKey]: https://help.aliyun.com/document_detail/38738.html