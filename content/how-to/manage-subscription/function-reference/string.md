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

Replaces the stated string in a path with the specified new value.

### definition

["replace_string", path, subValue, newValue]

### Parameters

- `"replace_string"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `subValue` – The string value to be replaced. The param support all param types.
- `newValue` - The replacement string that is used to substitute the old value. The param support all param types.

### Example

```json
{"command":["replace_string","$.data.name","subValue","newValue"]}
```

## replace_between_positions

Replaces the stated string within a path with the specified value by defining a range of index.

### definition

["replace_between_positions", path, index1, index2, newValue]

### Parameters

- `"replace_between_positions"` – The name of the function.
- `path` – The name of an existing event attribute or event data path.
- `index1` - The start position. The param support integers.
- `index2` – The end position. The param support integers.
- `newValue` – The replacement string that is used to substitute the old value. The param support all param types.

### Example

```json
{"command":["replace_between_positions","$.data.name1","0","1","abc"]}
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

## check_custom_values

Checks if the specified string is present or not in a path (true/false) and assign it to a new path.

### definition

["check_custom_values", path1, value, path2, flag1, flag2]

### Parameters

- `"check_custom_values"` – The name of the function.
- `value` - Specified value to be checked.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `flag1` – String to be assigned to new path if the custom value is found true.
- `flag2` – String to be assigned to new path if the custom value is found false. 

### Example

```json
{"command":["check_custom_values","$.data.name1","abc","$.data.name2","true","false"]}
```

## split_with_interval

Divides the range of strings into smaller non-overlapping segments by starting at a designated position.

### definition

["split_with_interval", path1, index1, index2, path2]

### Parameters

- `"split_with_interval"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `index1` – The start position. The param support integers.
- `index2` – The split interval. The param support integers.

### Example

```json
{"command":["split_with_interval","$.data.name1","1","2","$.data.name2"]}
```

## extract_between_delimiters

Retrieves the string within two seperators.

### definition

["extract_between_delimiters", path1, path2, seperator1, seperator2]

### Parameters

- `"extract_between_delimiters"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `seperator1` – The start delimiter. The param support all param types.
- `seperator2` - The end delimiter. The param support all param types

### Example

```json
{"command":["extract_between_delimiters","$.data.name1","$.data.name2","-",","]}
```

## extract_missing

Checks if the specified string is present or not in a path and assign it to a new path.

### definition

["extract_missing", path1, path2, flag1, flag2]

### Parameters

- `"extract_missing"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `flag1` – String to be assigned to new path if the custom value is found true.
- `flag2` – String to be assigned to new path if the custom value is found false. 

### Example

```json
{"command":["extract_missing","$.data.name1","$.data.name2","true","false"]}
```

## replace_between_delimiters

Replaces the string between two seperators with the specified value.

### definition

["replace_between_delimiters", path, seperator1, seperator2, newValue]

### Parameters

- `"replace_between_delimiters"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `seperator1` – The start delimiter. The param support all param types.
- `seperator2` - The end delimiter. The param support all param types
- `newValue` - The replacement string that is used to substitute the old value. The param support all param types.

### Example

```json
{"command":["replace_between_delimiters","$.data.name1","-","-","abc"]}
```

## capitalize_word

Converts the strings within a value to uppercase.

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

Splits the string within a seperator into an array of smaller non-overlapping segments and assign them to a new path.

### definition

["split_with_delimiter", path1, seperator, path2]

### Parameters

- `"split_with_delimiter"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `seperator` – The delimiter value. The param support all param types.

### Example

```json
{"command":["split_with_delimiter","$.data.name1","-","$.data.name2"]}
```

## split_between_positions

Splits the stated string within a path into three parts by defining a range of index.

### definition

["split_between_positions", path1, index1, index2, path2]

### Parameters

- `"split_between_positions"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `index1` – The start position. The param support integers.
- `index2` – The end position. The param support integers.

### Example

```json
{"command":["split_between_positions","$.data.name1","1","2","$.data.name2"]}
```

## split_from_start

Splits the string within a path from a numeric position into an array of two non-overlapping segments and assign them to a new path.

### definition

["split_from_start", path1, index, path2]

### Parameters

- `"split_from_start"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `index` – The start position. The param support intregers.

### Example

```json
{"command":["split_from_start","$.data.name1","1","$.data.name2"]}
```

## extract_between_positions

Retrieves the stated string within a range of index and assign it to a new path.

### definition

["extract_between_positions", path1, path2, index1, index2]

### Parameters

- `"extract_between_positions"` – The name of the function.
- `path1` – The name of an existing event attribute or event data path.
- `path2` - The name of the new event attribute or event data path.
- `index1` – The start position. The param support integers.
- `index2` – The end position. The param support integers.

### Example

```json
{"command":["extract_between_positions","$.data.name1","$.data.name2","1","2"]}
```
