---
title: Using SDK
category: 6321d3a56093c3010397e4aa
---

# 使用 SDK

Vanus Trigger 模块将符合 CloudEvent 格式的事件数据推送到 Connector Sink，转换成用户应用程序数据后，触发用户消费。

## 操作

**前提条件**

1. 需要确保subscription存在且sink配置为用户应用程序监听的地址，subscription创建可参见[quick-start](https://github.com/linkall-labs/docs/blob/main/vanus/quick-start.md#filter)相关章节。
2. 需要确保vanus与用户应用程序中监听的端口网络互通。

**示例代码**

整个代码流程如下：
1. **创建一个消费端应用程序**。
2. **启动 cloudevents 的 receiver**。receiver 接收 Trigger 模块推送过来的 event。
3. **处理用户实际业务逻辑**。这里仅将 event 数据打印到标准输出。

如下是示例代码:
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

	c, err := client.NewHTTP(cehttp.WithListener(ls), cehttp.WithRequestDataAtContextMiddleware())
	if err != nil {
		panic(fmt.Sprintf("failed to init cloudevnets client, err: %s", err.Error()))
	}

	fmt.Println("listen 0.0.0.0:6789...")

	err = c.StartReceiver(ctx, func(event ce.Event) {
		fmt.Printf("received a event: %s\n", event.String())
	})
	if err != nil {
		panic(fmt.Sprintf("failed to start cloudevnets receiver, err: %s\n", err.Error()))
	}
}

```

**预期结果**

向名称为quick-start的eventbus中发送一条消息，接收端看到以下结果表示用户应用程序接收到vanus推送的事件。
```
listen 0.0.0.0:6789...
received a event: Context Attributes,
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
  event-body
```