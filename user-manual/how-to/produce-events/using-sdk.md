---
title: Using SDK
category: 6321d3a56093c3010397e4aa
---

# Using SDK

The SDK conforming to CloudEvents specification can be used to directly send events to Vanus's Eventbus.

## Operations

**Prerequisites**

1. Ensure that the Eventbus named quick-start has been created.
2. Modify the endpoint to the endpoint of the Vanus controller in the test environment.

**Sample code**

The whole code process of synchronous transmission is as follows:
1. **Create CloudEvents Client**.
2. **Specify endpoint**. The endpoint is the unified port exposed by Vanus. It defaults to 127.0.0.1:30001. At the same time, the target eventbus needs to be specified.
3. **Create an Event conforming to CloudEvents format**. And specify information such as id, source, type, and data.
4. **Call the Send interface to send messages**. The synchronization sending wait result finally returns to SendResult, and judges whether it was sent successful.

The following is an example code:
```golang
package main

import (
	"context"
	"fmt"
	"os"
	"strings"

	ce "github.com/cloudevents/sdk-go/v2"
	"github.com/google/uuid"
)

const (
	httpPrefix = "http://"
	eventbus   = "quick-start"
)

var (
	endpoint = os.Getenv("VANUS_GATEWAY")
)

func main() {
	client, err := ce.NewClientHTTP()
	if err != nil {
		panic(fmt.Sprintf("new cloudevents client failed, err: %s\n", err.Error()))
	}

	var target string
	if strings.HasPrefix(endpoint, httpPrefix) {
		target = fmt.Sprintf("%s/gateway/%s", endpoint, eventbus)
	} else {
		target = fmt.Sprintf("%s%s/gateway/%s", httpPrefix, endpoint, eventbus)
	}

	ctx := ce.ContextWithTarget(context.Background(), target)
	event := ce.NewEvent()
	event.SetID(uuid.NewString())
	event.SetSource("event-source")
	event.SetType("event-type")
	event.SetData(ce.ApplicationJSON, map[string]string{"hello": "world"})

	if result := client.Send(ctx, event); ce.IsUndelivered(result) {
		panic(fmt.Sprintf("failed to send event, err: %s\n", result.Error()))
	}
}
```

**Expected results**

The following results indicate that the event was successfully sent to quick-start.
```
$ vsctl event get quick-start
+-----+--------------------------------------------+
| NO. |                    EVENT                   |
+-----+--------------------------------------------+
|     | Context Attributes,                        |
|     |   specversion: 1.0                         |
|     |   type: event-type                         |
|     |   source: event-source                     |
|     |   id: 299c6cbd-b3c6-4de8-8486-ef0c13d60d9e |
|     |   time: 2022-09-20T12:42:36.992825162Z     |
|  0  |   datacontenttype: text/plain              |
|     | Extensions,                                |
|     |   xvanuseventbus: quick-start              |
|     |   xvanuslogoffset: AAAAAAAAAAA=            |
|     |   xvanusstime: 2022-09-20T12:42:36.994Z    |
|     | Data,                                      |
|     |   {                                        |
|     |     "hello": "world"                       |
|     |   }                                        |
|     |                                            |
+-----+--------------------------------------------+
```