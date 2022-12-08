# Structure functions

## create

Creates a new object

**definition**

["create", path, value]

**Parameters**

- `"create"` – The name of the function.
- `path` – The name of an new JSON key. If the key exist, an error is reported.
- `value` – The data of the JSON key's. support constant、json value.

**Example**

```
{"command":["create","$.data.name","abc"]}
```

## delete

Delete CE keys or objects.

**definition**

["delete", path]

**Parameters**

- `"delete"` – The name of the function.
- `path` – The name of an existing JSON key. If the key nonexist, an error is reported.

**Example**

```
{"command":["delete","$.data.name"]}
```

## move

Move existing CE values to new keys.

**definition**

["move", fromPath, toPath]

**Parameters**

- `"move"` – The name of the function.
- `fromPath` – The name of an existing JSON key. If the key nonexist, an error is reported.
- `toPath` – The name of an new JSON key. If the key exist, an error is reported.

**Example**

```
{"command":["move","$.data.name","$.data.target.name"]}
```

## rename

Creates a new key with the different name, but with all of the same value. The old key is then removed from the CE keys.

**definition**

["rename",oldPath, newPath]

**Parameters**

- `"rename"` – The name of the function.
- `oldPath` – The name of an existing JSON key. If the key nonexist, an error is reported.
- `newPath` – The name of an new JSON key. If the key exist, an error is reported.

**Example**

```
{"command":["rename","$.data.name","$.data.target.name"]}
```

## replace

Replaces a specified characters with another for CE keys.

**definition**

["replace", path, value]

**Parameters**

- `"replace"` – The name of the function.
- `path` – The name of an existing JSON key. If the key nonexist, an error is reported.
- `value` – The data for the JSON key's. support constant、json value.

**Example**

```
{"command":["replace","$.data.name","newname"]}
```
