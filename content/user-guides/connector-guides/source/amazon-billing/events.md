# Output Events of AWS Billing Source

AWS Billing Source supports all **[AWS Billing Get Cost And Usage events](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Operations_AWS_Budgets.html)**.

AWS Billing Source generates **[CloudEvents](https://docs.vanus.ai/reference/cloudevents)** corresponding to each type of AWS Billing events.

## Sample Event

- Get Cost And Usage

```json
{
  "specversion": "1.0",
  "id": "026046e2-3cb0-4116-895e-c77877072dd2",
  "source": "cloud.amazon.billing",
  "type": "amazon.billing.daily",
  "datacontenttype": "application/json",
  "time": "2023-01-28T06:11:10.012579049Z",
  "data": {
    "date": "2023-01-27",
    "service": "Amazon Relational Database Service",
    "amortizedCost": {
      "amount": "0.2672917174",
      "unit": "USD"
    }
  }
}
```
