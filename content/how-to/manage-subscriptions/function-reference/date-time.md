# Date and time functions

## format_date

Returns a value in which a date string is converted into a formatted value.

### definition

["format_date", path, sourceFormat, dateFormat]

### Parameters

- `"format_date"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `sourceFormat` –  The current time format. The param support all param types, but the value like "yyyy-mm-dd HH:MM:SS".
- `dateFormat` –  The new time format. The param support all param types, but the value like "yyyy-mm-dd HH:MM:SS".

### Example

```json
{"command":["format_date","$.data.date","yyyy-mm-dd HH:MM:SS","yyyy/mm/dd"]}
```

## format_unix_time

Returns a value in which a Unix time converted into a formatted value.

### definition

["format_unix_time", path, format]

### Parameters

- `"format_unix_time"` – The name of the function.
- `path` – The name of an existing event attribute or event data path. The value must be epoch time (Unix time)—the number of seconds since January 1, 1970.
- `format` –  The format expect to. The param support all param types, but the value like "yyyy-mm-dd HH:MM:SS".

### Example

```json
{"command":["format_unix_time", "$.data.timestamp", "yyyy/mm/dd"]}
```
