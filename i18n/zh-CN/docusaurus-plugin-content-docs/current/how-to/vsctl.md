---
title: vsctl
---

# 命令行工具(vsctl)

vsctl 是 Vanus 的命令行工具。本文档将展示如何使用 vsctl 命令行工具。

## 准备

在使用vsctl之前，必须满足以下条件。
1. 安装 [Vanus](https://github.com/vanus-labs/docs/blob/main/user-manual/getting-started/install/k8s(recommended).md) 和 [vsctl](https://github.com/linkall-labs/docs/blob/main/user-manual/how-to/vsctl.md)。
2. 创建一个名称为 quick-start 的 [Evevtbus](https://github.com/vanus-labs/docs/blob/main/concepts/eventbus.md)。
3. 输入以下命令配置环境变量：`export VANUS_GATEWAY=127.0.0.1:8080`。

> 注意：vsctl 通过 VANUS_GATEWAY 环境变量与 Vanus 集群交互。
## 语法

使用以下语法从终端窗口运行 vsctl 命令：
```shell
vsctl [TYPE] [command] [NAME] [flags]
```
* `TYPE`：指定资源类型。例如 `event`、`eventbus`、`subscription`。
* `command`：指定对资源执行的操作，例如 `create`、`put`、`get`、`delete`。
* `NAME`：指定资源名称。名称区分大小写。例如：`vsctl eventbus create quick-start`。
* `flags`：指定可选的参数。

> **注意：从命令行指定的参数会覆盖默认值和任何相应的环境变量。**
如果你需要帮助，在终端窗口中运行 `vsctl help` 。

## 选项

> -C, --config string   默认值: "~/.vanus/vanus.yml"
指定 vsctl 配置文件

> -D, --debug
开启 debug 模式

> --endpoint string   默认值: "127.0.0.1:8080"
指定 vanus controller 端点

> --format string   默认值: "table"
指定 vsctl 输出格式，可取 (json|table) 其中之一。

> -h, --help
vsctl 操作的帮助命令

## 环境变量

> VANUS_GATEWAY
vsctl 集群网关入口地址。默认值: "127.0.0.1:8080"

您可以使用以下命令将 Vanus_Gateway 更改为自己的 Vanus 网关地址。
```
export VANUS_GATEWAY=[yourAddress:port]
```

## 操作

下表包含所有 vsctl 操作的简短描述和普通语法：

|   操作       |       语法       |   描述           |
|-------------|------------------|-----------------|
| put         | vsctl event put [eventbus] [flags] | 发送事件到eventbus |
| get         | vsctl event get [eventbus] [flags] | 从指定eventbus中获取事件 |
| create      | vsctl eventbus create [flags] | 创建eventbus |
| delete      | vsctl eventbus delete [flags] | 删除eventbus |
| info        | vsctl eventbus info [flags] | 获取eventbus详细信息 |
| list        | vsctl eventbus list | 列举eventbus |
| create      | vsctl subscription create [flags] | 创建subscription |
| delete      | vsctl subscription delete [flags] | 删除subscription |
| info        | vsctl subscription info [flags] | 获取subscription详细信息 |
| list        | vsctl subscription list | 列举subscription |
| get         | vsctl cluster controller topology | 获取controller集群拓扑信息 |
| get         | vsctl version [flags] | 获取vsctl版本信息 |
||||

## 输出选项

所有 vsctl 命令的默认输出格式都是可读的表格格式。要以特定格式在终端窗口输出详细信息， 可以通过 --format 参数指定格式化输出类型。

### 语法

> vsctl [TYPE] [command] [NAME] --format <json|table>
### 示例

在此示例中，以下命令将 event 的详细信息输出为 table 格式的对象：

```
$ vsctl event get quick-start --format table
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

### 示例

在此示例中，以下命令将 event 的详细信息输出为 JSON 格式的对象：

```
$ vsctl event get quick-start --format json
{"Event":"Context Attributes,\n  specversion: 1.0\n  type: event-type\n  source: event-source\n  id: 299c6cbd-b3c6-4de8-8486-ef0c13d60d9e\n  time: 2022-09-20T12:42:36.992825162Z\n  datacontenttype: text/plain\nExtensions,\n  xvanuseventbus: quick-start\n  xvanuslogoffset: AAAAAAAAAAA=\n  xvanusstime: 2022-09-20T12:42:36.994Z\nData,\n  event-body\n","No.":0}
```

## 示例：常用操作

使用以下示例集来帮助你熟悉运行常用 vsctl 操作：

`vsctl event` - 对 Eventbus 中的事件执行命令。
```
# 从指定 eventbus <eventbus-name> 中获取 event。
vsctl event get <eventbus-name>
# 向指定 eventbus <eventbus-name> 中写入 event。
vsctl event put <eventbus-name>
```

`vsctl eventbus` - 对指定 Eventbus 执行命令。
```
# 创建 eventbus <eventbus-name> 。
vsctl eventbus create --name <eventbus-name>
# 删除 eventbus <eventbus-name> 。
vsctl eventbus delete --name <eventbus-name>
# 打印 eventbus <eventbus-name> 详细信息。
vsctl eventbus info <eventbus-name>
# 列举所有 eventbus <eventbus-name> 。
vsctl eventbus list
```

`vsctl subscription` - 对指定 subscription 执行命令。
```
# 创建 subscription <subscription-name> 。
vsctl subscription create --name <subscription-name>
# 删除 subscription <subscription-name> 。
vsctl subscription delete --name <subscription-name>
# 打印 subscription <subscription-name> 详细信息。
vsctl subscription info <subscription-name>
# 列举所有 subscription <subscription-name> 。
vsctl subscription list
```

`vsctl cluster` - 对 cluster 执行命令。
```
# 获取 controller 集群拓扑信息。
vsctl cluster controller topology
```