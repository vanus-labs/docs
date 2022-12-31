# Date and time functions

## date_format

Returns a value in which a date string is converted into a formatted value.

### definition

["date_format", path, format, timeZone]

### Parameters

- `"date_format"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `format` –  The new time format. The param support all param types, but the value like "Y-m-d H:i:s".
- `timeZone` - The new time format with timeZone, if it's not set, the default is UTC. he param support all param types.

### Example

```json
{"command":["date_format", "$.data.date", "Y-m-d H:i:s", "EST"]}
```

## unix_time_format

Returns a value in which a Unix time converted into a formatted value.

### definition

["unix_time_format", path, format, timeZone]

### Parameters

- `"unix_time_format"` – The name of the function.
- `path` – The name of an existing event attribute or event data path. The value must be epoch time (Unix time)—the number of seconds since January 1, 1970.
- `format` –  The new time format. The param support all param types, but the value like "Y-m-d H:i:s".
- `timeZone` - The new time format with timeZone, if it's not set, the default is UTC. he param support all param types.

### Example

```json
{"command":["unix_time_format", "$.data.timestamp", "Y-m-d H:i:s", "EST"]}
```
