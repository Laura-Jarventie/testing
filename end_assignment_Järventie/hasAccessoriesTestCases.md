# Test Cases

## **hasAccessories(id)**

- Parameters: id of the computer
- Return: returns true if the computer has accessories else returns false. If parameter id is missing false is returned

### Test 1: return true if computer id number "1" has accessories

Call

```js
storageRegister.hasAccessories("1");
```

returns

```
true
```

### Test 2: return false if parameter id is missing

Call

```js
storageRegister.hasAccessories();
```

returns

```
false
```

### Test 3: return false if computer id number "3" doesn´t have accessories

Call

```js
storageRegister.hasAccessories("3");
```

returns

```
false
```
