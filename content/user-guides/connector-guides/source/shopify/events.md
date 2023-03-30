
# Output Events of Shopify Source

Shopify Source supports all **[Shopify events](https://shopify.dev/docs/api/admin-rest/2022-04/resources/webhook)**.

Shopify Source generates **[CloudEvents](https://docs.vanus.ai/reference/cloudevents)** corresponding to each type of Shopify events.

## Sample Event

### Customers:
#### Customer creation

```json
{
    "specversion": "1.0",
    "type": "com.shopify.customer.created",
    "source": "https://example.com/shopify",
    "id": "123456789",
    "time": "2022-04-01T12:34:56Z",
    "datacontenttype": "application/json",
    "data": {
        "id": "987654321",
        "email": "john@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "created_at": "2022-04-01T12:34:56Z",
        "updated_at": "2022-04-01T12:34:56Z"
    }
`}
```

#### Customer update

#### Customer deletion

---

### Orders:
#### Order creation

#### Order update

#### Order cancellation

#### Order fulfillment

#### Order payment

#### Order refund

---

### Products:
#### Product creation

#### Product update

#### Product deletion

---

### Carts:
#### Cart creation

#### Cart update
