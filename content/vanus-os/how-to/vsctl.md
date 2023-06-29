---
title: Use vsctl
---

# Command line tool(vsctl)

Vsctl is a command line tool of Vanus. The goal of this document is to describe how to use vsctl.

## Prerequisites

Before Using vsctl, you must meet the following prerequisites.
1. Have a running [Vanus](https://github.com/vanus-labs/docs/blob/main/content/getting-started/installation.mdx) cluster.
2. Have [vsctl](https://github.com/vanus-labs/docs/blob/main/content/how-to/vsctl.md).
3. Have exported the environment variable by running this command: `export VANUS_GATEWAY=127.0.0.1:8080`

> Note: vsctl communicates with Vanus through the VANUS_GATEWAY environment variable.

## Syntax

The following is the syntax to run vsctl commands from your terminal.
```shell
vsctl [TYPE] [command] [NAME] [flags]
```
* `TYPE`：Specifies the resource type. for example `event`, `eventbus`, `subscription`.
* `command`：Specifies the operation that you want to perform resources, for example `create`, `put`, `get`, `delete`.
* `NAME`：Specifies the name of the resource. Names are case-sensitive. for example `vsctl eventbus create quick-start`.
* `flags`：Specifies optional flags.

> **Caution: The flags you specify from the command line can override default values and any corresponding environment variables.**

For more help, you can run `vsctl help`.

## Options

> -C, --config string   Default: "~/.vanus/vanus.yml"

    Specifies the config file of vsctl

> -D, --debug

    Enable debug

> --endpoint string   Default: "127.0.0.1:8080"

    Specifies the endpoint of vanus controller

> --format string   Default: "table"

    Specify the output format of vsctl. One of (json|table)

> -h, --help

    help for vsctl

## Environment variables

> VANUS_GATEWAY

    Vanus cluster gateway entry address. Default: "127.0.0.1:8080"

You can change VANUS_GATEWAY to your own Vanus cluster gateway address with the following command.
```
export VANUS_GATEWAY=[yourAddress:port]
```

## Operations

The following table includes short descriptions and the general syntax for all of the vsctl operations:

|  Operation  |      Syntax      |   Description   |
|-------------|------------------|-----------------|
| put         | vsctl event put [eventbus] [flags] | send event to eventbus |
| get         | vsctl event get [eventbus] [flags] | get events from the specified eventbus |
| create      | vsctl eventbus create [flags] | create eventbus |
| delete      | vsctl eventbus delete [flags] | delete eventbus |
| info        | vsctl eventbus info [flags] | get eventbus info |
| list        | vsctl eventbus list | list eventbus |
| create      | vsctl subscription create [flags] | create subscription |
| delete      | vsctl subscription delete [flags] | delete subscription |
| info        | vsctl subscription info [flags] | get subscription info |
| list        | vsctl subscription list | list subscription |
| get         | vsctl cluster controller topology | get the topology information of the controller cluster |
| get         | vsctl version [flags] | get vsctl version information |
||||

## Output options

The default output format of all vsctl commands is a readable table format. To output details in the terminal window in a specific format, you can specify the format output type through the `--format` parameter.

### Syntax

> vsctl [TYPE] [command] [NAME] --format <json|table>

### Example

In this example, the following command outputs the details of event as an object in table format:

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

### Example

In this example, the following command outputs the details of event as an object in JSON format:

```
$ vsctl event get quick-start --format json
{"Event":"Context Attributes,\n  specversion: 1.0\n  type: event-type\n  source: event-source\n  id: 299c6cbd-b3c6-4de8-8486-ef0c13d60d9e\n  time: 2022-09-20T12:42:36.992825162Z\n  datacontenttype: text/plain\nExtensions,\n  xvanuseventbus: quick-start\n  xvanuslogoffset: AAAAAAAAAAA=\n  xvanusstime: 2022-09-20T12:42:36.994Z\nData,\n  event-body\n","No.":0}
```

## Examples: Common operations

Use the following set of examples to help you familiarize yourself with running the commonly used vsctl operations:

`vsctl event` - Execute commands on events in Eventbus.
```
# get events from the specified eventbus <eventbus-name>.
vsctl event get <eventbus-name>

# send event to eventbus <eventbus-name>.
vsctl event put <eventbus-name>
```

`vsctl eventbus` - Execute the command on the specified Eventbus.
```
# create eventbus <eventbus-name>.
vsctl eventbus create --name <eventbus-name>

# delete eventbus <eventbus-name>.
vsctl eventbus delete --name <eventbus-name>

# show eventbus <eventbus-name> info.
vsctl eventbus info <eventbus-name>

# list eventbus <eventbus-name> 。
vsctl eventbus list
```

`vsctl subscription` - Execute the command on the specified subscription.
```
# create subscription <subscription-name>.
vsctl subscription create --name <subscription-name>

# delete subscription <subscription-name>.
vsctl subscription delete --name <subscription-name>

# show subscription <subscription-name> info.
vsctl subscription info <subscription-name>

# list subscription <subscription-name>.
vsctl subscription list
```

`vsctl cluster` - Execute the command on the specified cluster.
```
# get the topology information of the controller cluster.
vsctl cluster controller topology
```
