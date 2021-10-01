# Test Cases

## **GetComputerAccessories(id)**

Returns an array of computer accessories. If none found, returns an empty array.

- Parameters: id of the computer
- Return: returns accessories as an array

### Test 1: get accessories from default jsonData with parameter "1"

```js
storageRegister.getComputerAccessories(1);
```

returns

```json
["keyboard", "display", "mouse"]
```

### Test 2: if no accessories found, returns empty array from default jsonData with parameter "3"

```js
storageRegister.getComputerAccessories(3);
```

returns

```json
[]
```
