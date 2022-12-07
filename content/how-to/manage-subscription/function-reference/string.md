# String functions

## upper_case

Changes each string in a value to uppercase.

**definition**

["upper_case", "key"]

## lower_case

Changes each string in a value to lowercase.

**definition**

["lower_case", "key"]

## add_prefix

Adds one or more characters, concatenating them as a prefix to the beginning of a value.

**definition**

["add_prefix", "key", "value"]

## add_suffix

Adds one or more characters, concatenating them as a suffix to the end of a value.

**definition**

["add_suffix", "key", "value"]

## replace_with_regex

Replaces the part that satisfies the regex with the specified value.

**definition**

["replace_with_regex", "key", "pattern", "value"]

## join

Merges two values into a new key.

**definition**

["join", "toKey", "separator","key1","key2"]