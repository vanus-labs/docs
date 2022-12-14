---
title: Structure functions
---

# Structure functions

## create

Create a new event attribute or event data path.

### definition

["create", path, value]

### Parameters

- `"create"` – The name of the function.
- `path` – The name of event attribute or event data path. If the key exist, an error will be reported. The param must be event json path.
- `value` – The value of event attribute or event data path. The param support all param types.

### Example

```json
{"command":["create","$.data.name","abc"]}
```

## delete

Delete a event attribue or event data path.

### definition

["delete", path]

### Parameters

- `"delete"` – The name of the function.
- `path` – The name of event attribue or event data path. If the key no exist, an error will be reported. The param must be event json path.

### Example

```json
{"command":["delete","$.data.name"]}
```

## move

Move the existing event attribe or event data path.

### definition

["move", fromPath, toPath]

### Parameters

- `"move"` – The name of the function.
- `fromPath` – The name of event attribe or event data path. If the key no exist, an error will be reported. The param must be event json path.
- `toPath` – The target name of event attribe or event data path. If the key exist, an error will be reported. The param must be event json path.

### Example

```json
{"command":["move","$.data.first.name1","$.data.second.name2"]}
```

## rename

Rename the existing event attribe or event data path.

### definition

["rename",oldPath, newPath]

### Parameters

- `"rename"` – The name of the function.
- `oldPath` – The name of an existing event attribe or event data path. If the key no exist, an error will be reported. The param must be event json path.
- `newPath` – The name of an new event attribe or event data path. If the key exist, an error will be reported. The param must be event json path.

### Example

```json
{"command":["rename","$.data.name1","$.data.name2"]}
```

## replace

Replaces the value of event attribe or event data path.

### definition

["replace", path, value]

### Parameters

- `"replace"` – The name of the function.
- `path` – The name of an existing event attribe or event data path. If the key no exist, an error will be reported. The param must be event json path.
- `value` – The new value of event attribe or event data path. The param support all param types.

### Example

```json
{"command":["replace","$.data.name","newValue"]}
```
