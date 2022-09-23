---
title: Using SDK
category: 6321d3a56093c3010397e4aa
---

# Using SDK

The Vanus Trigger module pushes event data conforming to CloudEvent format to the Sink Connector and then converts it into user application data to trigger user consumption.

## Operations

**Prerequisites**

1. It is necessary to ensure that the subscription exists and the Sink is configured as the listening address of the user application; for subscription creation, please refer to the relevant sections of [quick-start](https://github.com/linkall-labs/docs/blob/main/vanus/quick-start.md#filter).
2. It is necessary to ensure that vanus can communicate with the port network monitored in the user application.

**Sample code**

The whole code process is as follow:
1. **Create a consumer application**.
2. **Start the receiver of cloudevents**. The receiver receives the event pushed by the Trigger module.
3. **Process the user's actual business logic**. Here, only event data is printed to standard output.

The following is an example code:
```golang
package main

import (
	"context"
	"fmt"
	"net"

	ce "github.com/cloudevents/sdk-go/v2"
	"github.com/cloudevents/sdk-go/v2/client"
	cehttp "github.com/cloudevents/sdk-go/v2/protocol/http"
)

func main() {
	ctx := context.Background()
	// listen for user application
	ls, err := net.Listen("tcp", "0.0.0.0:6789")
	if err != nil {
		panic(fmt.Sprintf("failed to listen, err: %s\n", err.Error()))
	}

	c, err := client.NewHTTP(cehttp.WithListener(ls))
	if err != nil {
		panic(fmt.Sprintf("failed to init cloudevents client, err: %s", err.Error()))
	}

	fmt.Println("listen 0.0.0.0:6789...")

	err = c.StartReceiver(ctx, func(event ce.Event) {
		fmt.Printf("received an event: %s\n", event.String())
	})
	if err != nil {
		panic(fmt.Sprintf("failed to start cloudevents receiver, err: %s\n", err.Error()))
	}
}

```

**Expected results**

Send a message to the Eventbus named quick-start. The receiver sees the following results, indicating that the user application has received the event pushed by Vanus.
```
listen 0.0.0.0:6789...
received an event: Context Attributes,
  specversion: 1.0
  type: event-type
  source: event-source
  id: 34d3e285-0329-4c6c-9e80-5b3bbcf7cd6f
  time: 2022-09-21T02:08:42.893778582Z
  datacontenttype: text/plain
Extensions,
  xvanuseventbus: quick-start
  xvanusstime: 2022-09-21T02:08:42.894Z
Data,
  {
    "hello": "world"
  }
```