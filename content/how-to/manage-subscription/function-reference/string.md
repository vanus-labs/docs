# String functions

## upper_case

Changes each string in a value to uppercase.

### definition

["upper_case", path]

### Parameters

- `"upper_case"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.

### Example

```json
{"command":["upper_case","$.data.name"]}
```

## lower_case

Changes each string in a value to lowercase.

### definition

["lower_case", path]

### Parameters

- `"lower_case"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.

### Example

```josn
{"command":["lower_case","$.data.name"]}
```

## add_prefix

Adds one or more characters, concatenating them as a prefix to the beginning of a value.

### definition

["add_prefix", path, value]

### Parameters

- `"add_prefix"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `value` – The prefix string value to append; The param support all param types.

### Example

```json
{"command":["add_prefix","$.data.name","btest_"]}
```

## add_suffix

Adds one or more characters, concatenating them as a suffix to the end of a value.

### definition

["add_suffix", path, value]

### Parameters

- `"add_suffix"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `value` – The suffix string value to append; The param support all param types.

### Example

```json
{"command":["add_suffix","$.data.name","_ntest"]}
```

## replace_with_regex

Replaces the part that satisfies the regex with the specified value.

### definition

["replace_with_regex", path, regex, value]

### Parameters

- `"replace_with_regex"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `regex` – Regular expression to match. The param must be constant value.
- `value` – The string value. The param support all param types.

### Example

```json
{"command":["replace_with_regex","$.data.name","ab?","test"]}
```

## join

Merge two or more values into an event attribute or event data path

### definition

["join", toPath, separator,value1,value2,...]

### Parameters

- `"join"` – The name of the function.
- `toPath` – The name of an existing event attribute or event data path.
- `separator` – The separator. The param must be constant value.
- `value1` – The value to merged. The param support all param types.
- `value2` –  The value to merged. The param support all param types.

### Example

```json
{"command":["join","$.data.desc","-","$.data.name","abc"]}
```
## replace_string

Replaces the stated string with the specified value.

### definition

["replace_string", path, value]

### Parameters

- `"replace_string"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `value` – The string value. The param support all param types.

### Example

```json
{"command":["replace_string","$.data.name","newValue"]}
```

## replace_between_positions

Replaces the stated string within a range with the specified value.

### definition

["replace_between_positions", path1, value1, value2, path2]

### Parameters

- `"replace_between_positions"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value1` – The start position. The param support all param types.
- `value2` – The end position. The param support all param types.

### Example

```json
{"command":["replace_between_positions","$.data.name1","ntest_","_btest","$.data.name2"]}
```

## capitalize_sentence

Converts the first letter string of a sentence within a value to uppercase.

### definition

["capitalize_sentence", path]

### Parameters

- `"capitalize_sentence"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.

### Example

```json
{"command":["capitalize_sentence","$.data.name"]}
```

## split_with_interval

Divides the range of strings into smaller non-overlapping segments.

### definition

["split_with_delimiter", path1, value1, value2, path2]

### Parameters

- `"split_with_interval"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value1` – The start position. The param support all param types.
- `value2` – The split interval. The param support all param types.

### Example

```json
{"command":["replace_between_positions","$.data.name1","ntest_","(a,b)","$.data.name2"]}
```

## extract_between_delimiters

Retrieves the string within two seperators.

### definition

["extract_between_delimiters", path1, path2, value]

### Parameters

- `"extract_between_delimiters"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value` – The string value. The param support all param types.

### Example

```json
{"command":["replace_between_delimiters","$.data.name1","$.data.name2","newValue"]}
```

## replace_between_delimiters

Replaces the string between two seperators with the specified value.

### definition

["replace_between_delimiters", path1, path2, value]

### Parameters

- `"replace_between_delimiters"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value` – The string value. The param support all param types.

### Example

```json
{"command":["replace_between_delimiters","$.data.name1","$.data.name2","newValue"]}
```

## capitalize_word

Converts the first letter string of a word within a value to uppercase.

### definition

["capitalize_word", path]

### Parameters

- `"capitalize_word"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.

### Example

```json
{"command":["capitalize_word","$.data.name"]}
```

## split_with_delimiter

Splits the string within a seperator.

### definition

["split_with_delimiter", path1, value, path2]

### Parameters

- `"split_with_delimiter"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value` – The delimiter value. The param support all param types.

### Example

```json
{"command":["split_with_delimiter","$.data.name1","-","$.data.name2"]}
```

## split_between_positions

Splits the stated string within a range with the specified value.

### definition

["split_between_positions", path1, value1, value2, path2]

### Parameters

- `"split_between_positions"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value1` – The start position. The param support all param types.
- `value2` – The end position. The param support all param types.

### Example

```json
{"command":["replace_between_positions","$.data.name1","ntest_","_btest","$.data.name2"]}
```

## extract_between_positions

Retrieves the stated string within a range with the specified value.

### definition

["extract_between_positions", path1, path2, value1, value2]

### Parameters

- `"replace_between_positions"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `value1` – The start position. The param support all param types.
- `value2` – The end position. The param support all param types.

### Example

```json
{"command":["replace_between_positions","$.data.name1","$.data.name2","ntest_","_btest"]}
```
