# Output Events of Grafana Source

Grafana Source supports all **[Grafana events](https://grafana.com/docs/grafana-cloud/alerting/manage-notifications/webhook-notifier)**.

Grafana Source generates **[CloudEvents](https://docs.vanus.ai/reference/cloudevents)** corresponding to each type of Grafana events.

## Sample Event

### Threshold-based alerts:
#### High CPU usage
#### Low disk space
#### High memory usage
#### High network latency

---

### Anomaly detection alerts:
#### Sudden spike in error rates
#### Unusual increase in user logins
#### Unexpected drop in revenue

---

### State-change alerts: 
#### Service status changes
#### Server availability changes
#### Component health status changes

---

### Rate-of-change alerts:
#### Rapid increase in the number of users
#### Sudden drop in website traffic
#### Accelerated growth in database size

---

### Forecasting alerts: 
#### Projected resource exhaustion
#### Predicted downtime
#### Expected performance degradation

