---
title: Using SDK
category: 6321d3a56093c3010397e4aa
---

# 使用 SDK

Vanus 接收 CloudEvents 格式的事件数据，作为生产者的用户业务系统需要将消息转换成 CloudEvents 格式的数据并发送到 Vanus。

## 操作

**前提条件**

1. 确保名称为 quick-start 的 Eventbus 已创建。
2. 修改 endpoint 为测试环境中 Vanus Controller 的端点。

**示例代码**

同步发送的整个代码流程如下：
1. **创建 CloudEvents Client**。
2. **指定 endpoint**。endpoint 是 Vanus 暴露的统一端口，默认为 127.0.0.1:30001，同时需要指定目的 Eventbus。
3. **创建一个符合 CloudEvents 格式的 event**。并指定ID、source、type、data等信息。
4. **调用 send 接口将消息发送出去**。同步发送等待结果最后返回 SendResult，并判断发送是否成功。

如下是示例代码:
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

**预期结果**

以下结果表示事件成功发送到 quick-start。
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