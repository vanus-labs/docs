---
title: Using SDK
category: 6321d3a56093c3010397e4aa
---

# 使用 SDK

Vanus 接收 CloudEvents 格式的事件数据，作为生产者的用户业务系统需要将消息转换成 CE 格式的数据并发送到 Vanus。

## 操作

**前提条件**

1. 确保名称为quick-start的eventbus已创建。
2. 修改endpoint为测试环境中vanus controller的端点。

**示例代码**

同步发送的整个代码流程如下：
1. **创建 CloudEvents Client**。
2. **指定 endpoint**。endpoint 是 Vanus 暴露的统一端口，默认为 127.0.0.1:30001，同时需要指定目的 eventbus。
3. **创建一个符合 CloudEvents 格式的 Event**。并指定id、source、type、data等信息。
4. **调用send接口将消息发送出去**。同步发送等待结果最后返回SendResult，并判断发送是否成功。

如下是示例代码:
```golang
package main

import (
	"context"
	"fmt"
	"strings"

	ce "github.com/cloudevents/sdk-go/v2"
	"github.com/google/uuid"
)

const (
	httpPrefix = "http://"
	// the endpoints of vanus controller, default: 127.0.0.1:30001.
	endpoint   = "127.0.0.1:30001"
	eventbus   = "quick-start"
)

func main() {
	p, err := ce.NewHTTP()
	if err != nil {
		panic(fmt.Sprintf("new cloudevents protocol failed, err: %s\n", err.Error()))
	}

	client, err := ce.NewClient(p, ce.WithTimeNow(), ce.WithUUIDs())
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
	// create an event in cloudevents format.
	event := ce.NewEvent()
	event.SetID(uuid.NewString())
	event.SetSource("event-source")
	event.SetType("event-type")
	event.SetData(ce.TextPlain, "event-body")

	res := client.Send(ctx, event)
	if ce.IsUndelivered(res) {
		panic(fmt.Sprintf("failed to send event, err: %s\n", res.Error()))
	}
}
```

**预期结果**

以下结果表示事件成功发送到quick-start。
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
|     |   event-body                               |
|     |                                            |
+-----+--------------------------------------------+
```