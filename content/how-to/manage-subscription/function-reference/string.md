# String functions

## upper_case

Changes each string in a value to uppercase.

**definition**

["upper_case", path]

**Parameters**

- `"upper_case"` – The name of the function.
- `path` – The name of an existing JSON key.

**Example**

```
{"command":["upper_case","$.data.name"]}
```

## lower_case

Changes each string in a value to lowercase.

**definition**

["lower_case", path]

**Parameters**

- `"lower_case"` – The name of the function.
- `path` – The name of an existing JSON key.

**Example**

```
{"command":["lower_case","$.data.name"]}
```

## add_prefix

Adds one or more characters, concatenating them as a prefix to the beginning of a value.

**definition**

["add_prefix", path, value]

**Parameters**

- `"add_prefix"` – The name of the function.
- `path` – The name of an existing JSON key.
- `value` – Prefix string to append

**Example**

```
{"command":["add_prefix","$.data.name","btest_"]}
```

## add_suffix

Adds one or more characters, concatenating them as a suffix to the end of a value.

**definition**

["add_suffix", path, value]

**Parameters**

- `"add_suffix"` – The name of the function.
- `path` – The name of an existing JSON key.
- `value` – Suffix string to append

**Example**

```
{"command":["add_suffix","$.data.name","_ntest"]}
```

## replace_with_regex

Replaces the part that satisfies the regex with the specified value.

**definition**

["replace_with_regex", path, regex, value]

**Parameters**

- `"replace_with_regex"` – The name of the function.
- `path` – The name of an existing JSON key. 
- `regex` – Regular expression to match. 
- `value` – The string value.

**Example**

```
{"command":["replace_with_regex","$.data.name","ab?","test"]}
```

## join

Merges two values into a new key.

**definition**

["join", toPath, separator,value1,value2,...]

**Parameters**

- `"join"` – The name of the function.
- `toPath` – The name of an existing JSON key. 
- `separator` – Regular expression to match. 
- `value1` –  Support constant、json path.
- `value2` –  Support constant、json path.

**Example**

```
{"command":["join","$.data.desc","-","$.data.name","abc"]}
```
