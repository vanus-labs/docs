---
title: Mathematical functions
---

# Mathematical functions

## math_add

Sums two or more number into event attribute or event data path.

### definition

["math_add", toPath,value1,value2,...]

### Parameters

- `"math_add"` – The name of the function.
- `toPath` – The name of an existing event attribute or event data path.
- `value1` –  The param support all param types, but the value must be number.
- `value2` –  The param support all param types, but the value must be number.

### Example

```json
{"command":["math_add","$.data.count","$.data.num",10]}
```

## math_sub

Subtracts one number from another into event attribute or event data path.

### definition

["math_sub",  toPath,value1,value2]

### Parameters

- `"math_sub"` – The name of the function.
- `toPath` – The name of an existing event attribute or event data path.
- `value1` –  The param support all param types, but the value must be number.
- `value2` –  The param support all param types, but the value must be number.

### Example

```json
{"command":["math_sub","$.data.count","$.data.num",10]}
```

## math_mul

Multiplies two or more numbers into event attribute or event data path.

### definition

["math_mul", toPath,value1,value2]

### Parameters

- `"math_mul"` – The name of the function.
- `toPath` – The name of an existing event attribute or event data path.
- `value1` –  The param support all param types, but the value must be number.
- `value2` –  The param support all param types, but the value must be number.

### Example

```json
{"command":["math_mul","$.data.count","$.data.num",10]}
```

## math_div

Divides one input number from another into event attribute or event data path.

### definition

["math_div",  toPath,value1,value2,...]

### Parameters

- `"math_div"` – The name of the function.
- `toPath` – The name of an existing event attribute or event data path.
- `value1` –  The param support all param types, but the value must be number.
- `value2` –  The param support all param types, but the value must be number and cant't be zero.

### Example

```json
{"command":["math_div","$.data.count","$.data.num",10]}
```
