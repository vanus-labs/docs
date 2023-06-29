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
  --name quick-start \
  --eventbus quick-start \
  --sink 'http://localhost:8080' \
  --filters '[
      { "exact": { "source": "vanus.source", "data.action": "created" } }
      { "prefix": { "type": "vanus.type" } }
    ]'
```

Vanus filters are fully compatible with [CloudEvents filters][ce-filters]. Filters also support filtering of the data part when it is in a JSON format. The parameter 'filters' is an array of filter expressions, and each element is an object with only one key. Here are some filtering types.

### Exact

Exact is a map which the keys are the names of the CloudEvents attributes or data path, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes or data path MUST all exactly match with the associated value String specified (case sensitive).
The name and value specified in the filter express MUST NOT be empty strings.

```json
{ "exact": { "source": "vanus.source", "type": "vanus.type", "data.action": "created" } }
```

### Prefix

Prefix is a map which the keys are the names of the CloudEvents attributes or data path, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes or data path MUST all start with the associated value String specified (case sensitive).
The name and value specified in the filter express MUST NOT be empty strings.

```json
{ "prefix": { "source": "vanus.source", "type": "vanus.type", "data.action": "created" } }
```

### Suffix

Suffix is a map which the keys are the names of the CloudEvents attributes or data path, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes or data path MUST all end witch the associated value String specified (case sensitive).
The name and value specified in the filter express MUST NOT be empty strings.

```json
{ "suffix": { "source": "vanus.source", "type": "vanus.type", "data.action": "created" } }
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

SQL is a string value, representing a [CloudEvents SQL Expression][ce-sql]. The result value of the expression must be boolean, otherwise if an error occurred while evaluating the expression or the result is not boolean will be as FALSE . The filter key are the names of the CloudEvents attributes, not support data path.

```json
{ "sql": "(source LIKE '%vanus%' AND numvalue > 10) OR subject = 'vanus.subject'" }
```

[ce-filters]: https://github.com/cloudevents/spec/blob/main/subscriptions/spec.md#324-filters
[ce-sql]: https://github.com/cloudevents/spec/blob/main/cesql/spec.md