# Structure functions

## create

Creates a new object

**definition**

["create", path, value]

**Parameters**

- `"create"` – The name of the function.
- `path` – The name of an nonexisting key.if nonexiting,....
- `value` – The data of the key's. support constant、

**Example**

```
["create", "$.data.name", "abc"]
```

## delete

Delete CE keys or objects.

**definition**

["delete", path]

**Parameters**

- `"delete"` – The name of the function.
- `"key"` – The name of an existing key.

**Example**

```
["delete", "$.data.key"]
```

## move

Move existing CE values to new keys.

**definition**

["move", "fromKey", "toKey"]

## rename

Creates a new key with the different name, but with all of the same value. The old key is then removed from the CE keys.

**definition**

["rename", "key", "newKey"]

## replace

Replaces a specified characters with another for CE keys.

**definition**

["replace", "key", value]
