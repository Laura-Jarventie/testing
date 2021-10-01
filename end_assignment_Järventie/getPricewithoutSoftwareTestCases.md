# Test Cases

## **getPriceWithoutSoftware(id)**

Returns the price with out software

- Parameters: id of the computer
- Return: The price of the computer not including the price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: get price of computer without software from default jsonData with parameter "id2"

```js
storageRegister.getPriceWithoutSoftware("2");
```

returns

```
[350]
```

### Test 2: if no computer with given id number 0000 is found an exception is thrown

```js
storageRegister.getPriceWithoutSoftware("0000");
```

returns

```
`nothing found with given id`
```
