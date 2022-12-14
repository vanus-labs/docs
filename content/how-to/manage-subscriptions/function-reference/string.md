---
title: String functions
---

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
