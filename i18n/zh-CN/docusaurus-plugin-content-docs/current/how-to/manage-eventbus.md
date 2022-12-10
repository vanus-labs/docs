---
title: Manage Eventbus
---

# 管理 Eventbus

本页面将向你展示使用 `vsctl eventbus` 命令管理 Eventbus。

## 创建 Eventbus

`vsctl eventbus` 命令的 `create` 子命令用于创建 Eventbus。

```console
$ vsctl eventbus create -h         
create a eventbus

Usage:
  vsctl eventbus create [flags]

Flags:
  -h, --help          help for create
      --name string   eventbus name to deleting

Global Flags:
  -C, --config string     the config file of vsctl (default "~/.vanus/vanus.yml")
  -D, --debug             is debug mode enable
      --endpoint string   the endpoints of vanus controller (default "127.0.0.1:8080")
      --format string     the output format of vsctl, json or table (default "table")
```

## 显示 Eventbus 的详细信息

`vsctl eventbus` 命令的 `info` 子命令用于显示 Eventbus 的详细信息。

```console
$ vsctl eventbus info -h
get the eventbus info

Usage:
  vsctl eventbus info [flag]  [flags]

Flags:
      --block             if show all block of segment
      --eventbus string   eventbus to show, use , to separate
  -h, --help              help for info
      --segment           if show all segment of eventlog

Global Flags:
  -C, --config string     the config file of vsctl (default "~/.vanus/vanus.yml")
  -D, --debug             is debug mode enable
      --endpoint string   the endpoints of vanus controller (default "127.0.0.1:8080")
      --format string     the output format of vsctl, json or table (default "table")
```

## 列出 Eventbus

`vsctl eventbus` 命令的 `list` 子命令用于列出所有 Eventbus。

```console
$ vsctl eventbus list -h
list the eventbus

Usage:
  vsctl eventbus list [flags]

Flags:
  -h, --help   help for list

Global Flags:
  -C, --config string     the config file of vsctl (default "~/.vanus/vanus.yml")
  -D, --debug             is debug mode enable
      --endpoint string   the endpoints of vanus controller (default "127.0.0.1:8080")
      --format string     the output format of vsctl, json or table (default "table")
```

## 删除 Eventbus

`vsctl eventbus` 命令的 `delete` 子命令用于删除 Eventbus。

```console
$ vsctl eventbus delete -h
delete a eventbus

Usage:
  vsctl eventbus delete <eventbus-name>  [flags]

Flags:
  -h, --help          help for delete
      --name string   eventbus name to deleting

Global Flags:
  -C, --config string     the config file of vsctl (default "~/.vanus/vanus.yml")
  -D, --debug             is debug mode enable
      --endpoint string   the endpoints of vanus controller (default "127.0.0.1:8080")
      --format string     the output format of vsctl, json or table (default "table")
```