---
title: Dead Letter
category: 6321d39d70a0c10aabfaa53d
---

# Dead Letter

When the event did not successfully deliver to the sink, Vanus will retry to deliver it. If the event delivery attempts reach the maximum number of retries, Vanus will not drop it but instead write it to a special Eventbus. You can process the event at a later time. An event that can't be delivered is called Dead Letter Event.

Each Dead Letter Event contains the ID of the subscription with the error information, the reason, and the last delivery time. You can review the event to identify and correct errors.
