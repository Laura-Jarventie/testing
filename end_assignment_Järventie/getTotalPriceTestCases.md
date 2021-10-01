# Test Cases

## **getTotalPrice(id)**

Returns the total price of computer including the total price of the software

- Parameters: id of the computer
- Return: The price of the computer including the total price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: get total price of computer specifyed by id including total price of software

```js
storageRegister.getTotalPrice(2);
```

returns

```
380
```

## Test 2: get total price of computer specifyed by id including total price of software when there are no softwares

```js
storageRegister.getTotalPrice(3);
```

returns

```
150
```

### Test 3: if no computer with given id number 4 is found an exception is thrown

```js
storageRegister.getTotalPrice(4);
```

returns

```
`nothing found with given id`
```
