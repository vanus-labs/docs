---
title: Using CloudEvents SDK
category: 6321d3a56093c3010397e4aa
---

# 使用 [CloudEvents](https://github.com/cloudevents) SDK 消费来自 Vanus 的事件

本文档将展示如何使用 [CloudEvents](https://github.com/cloudevents) SDK 消费来自 Vanus 的事件。

## 操作

**前提条件**

1. 安装 [Vanus](https://github.com/linkall-labs/docs/blob/main/user-manual/getting-started/install/k8s(recommended).md) 和 [vsctl](https://github.com/linkall-labs/docs/blob/main/user-manual/how-to/vsctl.md)。
2. 创建一个名称为 quick-start 的 [Evevtbus](https://github.com/linkall-labs/docs/blob/main/concepts/eventbus.md)。
3. 创建一个 subscription。subscription 创建可参见[Manage Subscriptions](https://github.com/linkall-labs/docs/blob/main/user-manual/how-to/managing-subscription.md)相关章节。

> 我们还提供了一个交互式的 [Kubernetes 环境](https://play.linkall.com/)，可以更简单地在浏览器中部署和使用 Vanus。

**示例代码**

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
	// step 1: Create a tcp listener
	ls, err := net.Listen("tcp", "0.0.0.0:6789")
	if err != nil {
		panic(fmt.Sprintf("failed to listen, err: %s\n", err.Error()))
	}

	// step 2: Create a http client connected to the tcp listener
	c, err := client.NewHTTP(cehttp.WithListener(ls))
	if err != nil {
		panic(fmt.Sprintf("failed to init cloudevents client, err: %s", err.Error()))
	}

	fmt.Println("listen 0.0.0.0:6789...")
	// step 3: Start the receiver and do business logic
	err = c.StartReceiver(ctx, func(event ce.Event) {
		fmt.Printf("received an event: %s\n", event.String())
	})
	if err != nil {
		panic(fmt.Sprintf("failed to start cloudevents receiver, err: %s\n", err.Error()))
	}
}

```
> 注意：确保 Vanus 与 consumer 网络互通。

**向 Vanus 发送一条事件**

```bash
~ > vsctl event put quick-start \
  --data-format plain \
  --body "Hello Vanus" \
  --id "1" \
  --source "quick-start" \
  --type "examples"
```

**预期结果**

```
listen 0.0.0.0:6789...
received an event: Context Attributes,
  specversion: 1.0
  type: examples
  source: quick-start
  id: 34d3e285-0329-4c6c-9e80-5b3bbcf7cd6f
  time: 2022-09-21T02:08:42.893778582Z
  datacontenttype: text/plain
Extensions,
  xvanuseventbus: quick-start
  xvanusstime: 2022-09-21T02:08:42.894Z
Data,
  Hello Vanus
```