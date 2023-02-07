---
title: Vanus Filters
---

# Vanus Filters

Filters allow you to filter events from an Eventbus when creating a subscription, enabling you to receive only the specific events needed.

## Uses And Example

When creating a subscription, Use the optional parameter --filters. 
See the following example:

```shell
vsctl subscription create \
  --name testeb \
  --eventbus testeb \
  --sink 'http://localhost:8080' \
  --filters '[
      { "exact": { "source": "vanus.source" } }
      { "prefix": { "type": "vanus.type" } }
    ]'
```

Vanus supports the following filter types

### Exact

Exact is a map which the keys are the names of the CloudEvents attributes, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes MUST all exactly match with the associated value String specified (case sensitive).
The attribute name and value specified in the filter express MUST NOT be empty strings.

```json
{ "exact": { "source": "vanus.source", "type": "vanus.type" } }
```

### Prefix

Prefix is a map which the keys are the names of the CloudEvents attributes, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes MUST all start with the associated value String specified (case sensitive).
The attribute name and value specified in the filter express MUST NOT be empty strings.

```json
{ "prefix": { "source": "vanus.source", "type": "vanus.type" } }
```

### Suffix

Suffix is a map which the keys are the names of the CloudEvents attributes, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes MUST all end witch the associated value String specified (case sensitive).
The attribute name and value specified in the filter express MUST NOT be empty strings.

```json
{ "suffix": { "source": "vanus.source", "type": "vanus.type" } }
```

### Not

Not is a filter that will not extract the events specified in it. All the events that do not have the specification mentioned will be extracted.

```json
{
  "not": { "exact": { "type": "vanus.type" } }
}
```

### All

All can have multiple filter types, and the events must meet all the requirements in the list.

```json
{
  "all": [
    { "exact": { "source": "vanus.source" } },
    { "prefix": { "type": "vanus.type" } }
  ]
}
```

### Any

Any can have multiple filter types, and the events will be extracted if they meet any of the requirements in the list.

```json
{
  "any": [
    { "exact": { "source": "vanus.source" } },
    { "prefix": { "type": "vanus.type" } }
  ]
}
```

### SQL

SQL is a string value, representing CloudEvents SQL Expression. The result value of the expression must be boolean, otherwise if an error occurred while evaluating the expression or the result is not boolean will be as FALSE . The filter key are the names of the CloudEvents attributes.

```json
{ "sql": "source LIKE '%vanus%'" }
```
