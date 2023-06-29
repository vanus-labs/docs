# Function reference

The [transformer](transformer.md#function) uses functions in Vanus. Every function consists of two parts, the first part is the function name, and the other is parameters required by this function.

The function parameters support the following type:

- Event JSON Path - support event attribute such as `$.id` and event data such as `$.data.service`.
- Define Variable - in [define](transformer.md#define) defined variable such as `<variable>`.
- Constant - constant value such as "123".

For example:

```json
    {"command": ["create", "$.data.source", "$.source"]}
```

The following sections describe the functions, organized by what they do.

## Topics

- [Structure](function-reference/structure.md)
  - create
  - delete
  - move
  - rename
  - replace
  - duplicate
- [String](function-reference/string.md)
  - upper_case
  - lower_case
  - add_prefix
  - add_suffix
  - replace_with_regex
  - join
  - replace_string
  - replace_between_positions
  - capitalize_sentence
  - check_custom_values
  - split_with_intervals
  - extract_between_delimiters
  - extract_missing
  - replace_between_delimiters
  - capitalize_word
  - split_with_delimiter
  - split_between_positions
  - split_from_start
  - extract_between_positions
- [Date and time](function-reference/date-time.md)
  - date_format
  - unix_time_format
- [Mathematical](function-reference/mathematical.md)
  - math_add
  - math_sub
  - math_mul
  - math_div
- Condition
  - condition_if
- Array
  - render_array
  - array_foreach
  - unfold_array
- Common
  - length
