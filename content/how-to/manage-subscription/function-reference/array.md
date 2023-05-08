# Array functions

## unfold_array

Expands the source path into multiple JSON elements with the target path name and an added prefix e.g targetPath-1, targetPath-2

### definition

["unfold_array", sourcePath, targetPathPrefix]

### Parameters

- `"unfold_array"` – The name of the function.
- `sourcePath` – The name of event attribute or event data path. The param must be an array.
- `targetPath` – The name of the new event attribute or event data path.

### Example

```json
{"command":["unfold_array","$.data.name1","$.data.name2"]}
```
