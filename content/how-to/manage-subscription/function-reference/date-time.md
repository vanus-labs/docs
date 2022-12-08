# Date and time functions

## format_date

Returns a value in which a date string is converted into a formatted value.

**definition**

["format_date", path, sourceFormat, dateFormat]

**Parameters**

- `"format_date"` – The name of the function.
- `path` – The name of an existing JSON key. 
- `sourceFormat` –  Current time format.
- `dateFormat` –  Target time format.

**Example**

```
{"command":["format_date","$.data.date","yyyy-mm-dd HH:MM:SS","yyyy/mm/dd"]}
```

## format_unix_time

Returns a value in which a unix time converted into a formatted value.

**definition**

["format_unix_time", path, format]

**Parameters**

- `"format_unix_time"` – The name of the function.
- `path` – The name of an existing JSON key. Its value is a timestamp, must a long type.
- `format` –  Target time format.

**Example**

```
{"command":["format_unix_time", "$.data.time", "yyyy/mm/dd"]}
```
