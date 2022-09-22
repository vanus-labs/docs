---
title: Dead Letter
category: 6321d39d70a0c10aabfaa53d
---

# Dead Letter

Sometimes the event can't successfully delivered to the sink, Vanus will retry deliver it. If the event delivery attempts reach the maximum number of retries, Vanus will not drop it, but write to a specical eventbus. You can process the event at a later time. The event that can't be dilvered is called Dead Letter Event.

Each Dead Letter Event contains the id of the subscription with the error info, the reason and last delivery time. You can review the event to identify and make to correct errors.
