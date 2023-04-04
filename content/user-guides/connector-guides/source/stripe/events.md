# Output Events of Stripe Source

Stripe Source supports all **[Stripe events](https://stripe.com/docs/api/events/types)**.

Stripe Source generates **[CloudEvents](https://docs.vanus.ai/reference/cloudevents)** corresponding to each type of Stripe events.

## Sample Event

### Charge Succeded

```json
{
  "specversion": "1.0",
  "type": "charge.succeeded",
  "source": "https://api.stripe.com/v1/events/YOUR_LINK_ID/",
  "id": "evt_1IwQqE2B7uzTt64ZUhFzlylR",
  "object": "event",
  "api_version": "2021-06-14",
  "created": 1649076678,
  "data": {
    "object": {
      "id": "ch_1IwQqD2B7uzTt64Z1WYXGg5B",
      "object": "charge",
      "amount": 2999,
      "amount_refunded": 0,
      "captured": true,
      "created": 1649076678,
      "currency": "usd",
      "customer": "cus_J4XqStuV7OanL4",
      "description": "Example charge",
      "payment_method": "pm_1IwQpX2B7uzTt64ZMve5wjoW",
      "status": "succeeded"
    }
  },
  "livemode": true,
  "pending_webhooks": 1
}
```

---

### Invoice Paid

```json
{
  "specversion": "1.0",
  "type": "invoice.paid",
  "source": "https://api.stripe.com/v1/events/YOUR_LINK_ID/",
  "id": "7c5b2e88-7fcd-11ec-8e5b-080027e7f5a5",
  "time": "2022-02-14T20:06:04Z",
  "data": {
    "object": {
      "id": "in_1JNPSk2eZvKYlo2CcB3qcyB3",
      "object": "invoice",
      "amount_due": 1099,
      "amount_paid": 1099,
      "customer": "cus_J4XqStuV7OanL4",
      "status": "paid",
      "paid": true,
      "date": 1644888342,
      "charge": "ch_3Hykxq2eZvKYlo2Cce4h4z4t",
      "subscription": "sub_3HykXk2eZvKYlo2CWeZHjfLT",
      "payment_intent": "pi_3Hykxq2eZvKYlo2Cce4h4z4t"
    }
  }
}
```

---

### Customer Subscription Update

```json
{
  "specversion": "1.0",
  "id": "f5f2c5eb-e246-4726-a5d6-1e2fbff14fc9",
  "source": "https://api.stripe.com/v1/events/YOUR_LINK_ID",
  "type": "customer.subscription.updated",
  "data": {
    "object": {
      "id": "sub_3Jz7tV2eZvKYlo2CiRfRlNyE",
      "object": "subscription",
      "customer": "cus_J4XqStuV7OanL4",
      "items": {
        "object": "list",
        "data": [
          {
            "id": "si_3Jz7Wk2eZvKYlo2CjNxd8f7W",
            "object": "subscription_item",
            "plan": {
              "id": "plan_123",
              "object": "plan",
              "amount": 1999,
              "interval": "month",
              "product": "prod_123",
              "nickname": "Gold Plan"
            }
          }
        ]
      },
      "status": "active",
      "current_period_start": 1649073600,
      "current_period_end": 1651752000,
      "canceled_at": null,
      "cancel_at_period_end": false,
      "start_date": 1649073600,
      "ended_at": null
    },
    "previous_attributes": {
      "canceled_at": 1646744961,
      "cancel_at_period_end": true,
      "ended_at": 1646744961,
      "status": "canceled"
    }
  },
  "time": "2022-03-25T14:20:31.912719Z"
}
```
