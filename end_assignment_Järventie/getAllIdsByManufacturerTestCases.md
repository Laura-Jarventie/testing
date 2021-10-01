# Test cases

## **getAllIdsByManufacturer(manufacturer)**

Returns all ids of the computers matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of computer id where the computers manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### Test 1: get from default jsonData with parameter BMI

```js
storageRegister.getAllIdsByManufacturer("BMI");
```

returns

```json
["1", "3"]
```

### Test 2: get from default jsonData with parameter CERA

```js
storageRegister.getAllIdsByManufacturer("CERA");
```

returns

```json
["2"]
```

### Test 3: Non-matching manufacturer returns an empty array

```js
storageRegister.getAllIdsByManufacturer("NoMatch");
```

returns []

### Test 4: missing parameter returns an empty array

```js
storageRegister.getAllIdsByManufacturer();
```

returns []
