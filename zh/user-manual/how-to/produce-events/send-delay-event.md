---
title: Send Delay Event
category: 6321d3a56093c3010397e4aa
---

# 使用 CloudEvents SDK 向 Vanus 发送延迟事件

本文档将指导你如何构建一个简单的生产者去发送延迟事件。

## 操作

**前提条件**

1. 安装 [Vanus](https://github.com/linkall-labs/docs/blob/main/user-manual/getting-started/install/k8s(recommended).md) 和 [vsctl](https://github.com/linkall-labs/docs/blob/main/user-manual/how-to/vsctl.md)。
2. 创建一个名称为 quick-start 的 [Eventbus](https://github.com/linkall-labs/docs/blob/main/concepts/eventbus.md)。
3. 输入以下命令配置环境变量：`export VANUS_GATEWAY=127.0.0.1:8080`。

> 我们还提供了一个交互式的 [Kubernetes 环境](https://play.linkall.com/)，可以更简单地在浏览器中部署和使用 Vanus。

**示例代码**

```golang
package main

import (
	"context"
	"fmt"
	"os"
	"strings"
	"time"

	ce "github.com/cloudevents/sdk-go/v2"
	"github.com/google/uuid"
)

const (
	httpPrefix           = "http://"
	eventbus             = "quick-start"
	xceVanusDeliveryTime = "xvanusdeliverytime"
)

var (
	endpoint = os.Getenv("VANUS_GATEWAY")
)

func main() {
	// step 1: build a CloudEvents client
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

	// step 2: specify the target
	ctx := ce.ContextWithTarget(context.Background(), target)
	// step 3: build a CloudEvent
	event := ce.NewEvent()
	event.SetID(uuid.NewString())
	event.SetSource("event-source")
	event.SetType("event-type")
	event.SetData(ce.ApplicationJSON, map[string]string{"hello": "world"})
	// set delivery time of delay event
	timeOfRFC3339Nano := time.Now().Add(10 * time.Second).Format(time.RFC3339Nano)
	event.SetExtension(xceVanusDeliveryTime, timeOfRFC3339Nano)

	// step 4: send the CloudEvent
	if result := client.Send(ctx, event); ce.IsUndelivered(result) {
		panic(fmt.Sprintf("failed to send event, err: %s\n", result.Error()))
	}
}
```

**预期效果**

等待 10s 后运行以下命令，确认 producer 是否成功将事件发送到 Eventbus 中。
```
$ vsctl event get quick-start
```
预期效果如下：
```
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
|     |   xvanusdeliverytime: 2022-09-20T13:00:00Z |
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