# Function reference

Function is used by [transformer](transformer.md#function) in Vanus. Every function is a map which key use command and value is an array which it's first param as function name, following as function param.

The functon param support follow type:

- Event JSON Path - support event attribute such as "\$.id" and event data such as "\$.data.service".
- Define Variable - in [define](transformed.md#define) defined varialbe such as "\<variable>".
- Constant - cunstant value such as "123".

For example:

```json
    {"command":["create","$.data.source","$.source"]}
```

The following sections describe the functions, organized by what they do.

## Topics

- [Structure](function-reference/structure.md)
  - create
  - delete
  - move
  - rename
  - replace
- [String](function-reference/string.md)
  - upper_case
  - lower_case
  - add_prefix
  - add_suffix
  - replace_with_regex
  - join
- [Date and time](function-reference/date-time.md)
  - format_date
  - format_unix_time
- [Mathematical](function-reference/mathematical.md)
  - math_add
  - math_sub
  - math_mul
  - math_div
