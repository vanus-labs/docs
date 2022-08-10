# Vanus Filters

You can use filters in vanus to filter events are to be delivered to the sink.

## Use And Example

When create a subscription,option param `filters` which is used to filer events is an array.
For example:
```text
vsctl subscription create \
--filters '[{ "exact": { "source": "vanus.source", "type": "vanus.type" } }]'
```
Vanus support follow filters:

### Exact

Exact is a map which the keys are the names of the CloudEvents attributes, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes MUST all exactly match with the associated value String specified (case sensitive).
The attribute name and value specified in the filter express MUST NOT be empty strings.
For example:
```json
{ "exact": { "source": "vanus.source", "type": "vanus.type" } }
```

### Prefix

Prefix is a map which the keys are the names of the CloudEvents attributes, and their values are the String values to use in the comparison. 
The values of the matching CloudEvents attributes MUST all start with the associated value String specified (case sensitive).
The attribute name and value specified in the filter express MUST NOT be empty strings.
For example:
```json
{ "prefix": { "source": "vanus.source", "type": "vanus.type" } }
```

### Suffix

Suffix is a map which the keys are the names of the CloudEvents attributes, and their values are the String values to use in the comparison.
The values of the matching CloudEvents attributes MUST all end witch the associated value String specified (case sensitive).
The attribute name and value specified in the filter express MUST NOT be empty strings.
For example:
```json
{ "suffix": { "source": "vanus.source", "type": "vanus.type" } }
```

### Not

Not is a filter, it means the inverse of the result of filter
For example:
```json
{
  "not": { "exact": { "type": "vanus.type" } }
}
```

### All

All is a nested array which every item is a filter,it means all item must match 
For example:
```json
{
  "all": [
    { "exact": { "source": "vanus.source" } },
    { "prefix": { "type": "vanus.type" } }
  ]
}
```

### Any

Any is a nested array which every item is a filter,it means al least one of item match
For example:
```json
{
  "any": [
    { "exact": { "source": "vanus.source" } },
    { "prefix": { "type": "vanus.type" } }
  ]
}
```

### SQL

SQL is a string value, representing [CloudEvents SQL Expression](https://github.com/cloudevents/spec/blob/main/cesql/spec.md).
The result value of the expression must be boolean, otherwise if an error occurred while evaluating the expression or the result is not boolean will be as FALSE .
The filter key are the names of the CloudEvents attributes
For example:
```json
{ "sql": "source LIKE '%vanus%'" }
```

### CEL

CEL is a string value, representing Google's [Common Expression Language (CEL)](https://github.com/google/cel-spec).
The result value of the expression must be boolean, otherwise if an error occurred while evaluating the expression or the result is not boolean will be as FALSE .
The filter key are the names of the CloudEvents data and only support type [string,int64,uint64,bool,double]
```json
{ "cel":"$amount.(double) >= 2.0" }
```