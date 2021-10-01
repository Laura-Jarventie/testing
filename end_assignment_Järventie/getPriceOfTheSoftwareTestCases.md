# Test Cases

## **getPriceOfTheSoftware(id)**

Returns the total price of software bunled with the computer

- Parameters: id of the computer to be searched
- Return: the total price of software. If no software is found returns 0
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: get total price of software specifyed by id

```js
storageRegister.getPriceOfTheSoftware("1");
```

returns

```
133
```

### Test 2: get total price of software specifyed by id, but if no software found, return 0

```js
storageRegister.getPriceOfTheSoftware("3");
```

returns

```
0
```

### Test 3: if no computer with given id number is found an exception is thrown

```js
storageRegister.getPriceOfTheSoftware("0000");
```

returns

```
`nothing found with given id`
```
