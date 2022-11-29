---
title: Manage Eventbus
---

# Manage Eventbus

The following page will teach you how to manage all of your Eventbus with `vsctl` command.

## Create Eventbus

The `create` sub-command from `vsctl eventbus` lets you create an Eventbus in Vanus.

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

## Detail Eventbus

The `info` sub-command from `vsctl eventbus` lets you see the detail of an Eventbus.

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

## List Eventbus

The `list` sub-command from `vsctl eventbus` lets you list all Eventbus.

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

## Delete Eventbus

The `delete` sub-command from `vsctl eventbus` lets you delete an Eventbus.

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
