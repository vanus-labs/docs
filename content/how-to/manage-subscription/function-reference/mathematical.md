# Mathematical functions

## math_add

Sums two or more values into the target key.

**definition**

["math_add", toPath,value1,value2,...]

**Parameters**

- `"math_add"` – The name of the function.
- `toPath` – The name of an existing JSON key. 
- `value1` –  Support constant、json path.
- `value2` –  Support constant、json path.

**Example**

```
{"command":["math_add","$.data.count","$.data.num","10"]}
```

## math_sub

Subtracts one number from another and returns the result in a new target key.

**definition**

["math_sub",  toPath,value1,value2]

**Parameters**

- `"math_sub"` – The name of the function.
- `toPath` – The name of an existing JSON key. 
- `value1` –  Support constant、json path.
- `value2` –  Support constant、json path.

**Example**

```
{"command":["math_sub","$.data.count","$.data.num","10"]}
```

## math_mul

Multiplies two numbers and returns the result in a new target key.

**definition**

["math_mul", toPath,value1,value2]

**Parameters**

- `"math_mul"` – The name of the function.
- `toPath` – The name of an existing JSON key. 
- `value1` –  Support constant、json path.
- `value2` –  Support constant、json path.

**Example**

```
{"command":["math_mul","$.data.count","$.data.num","2"]}
```

## math_div

Divides one input number by another and returns the result in a new target key.

**definition**

["math_div",  toPath,value1,value2,...]

**Parameters**

- `"math_div"` – The name of the function.
- `toPath` – The name of an existing JSON key. 
- `value1` –  Support constant、json path.
- `value2` –  Support constant、json path.

**Example**

```
{"command":["math_div","$.data.count","$.data.num","2"]}
```
