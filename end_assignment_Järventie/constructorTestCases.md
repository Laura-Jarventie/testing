# Test Cases

## **constructor(jsonData)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

### Test 1: object created

```js
new StorageRegister(jsonData);
```

test if the objects inner field has the same value as given as parameter. Parameter jsonData is the json object from the default `datastorage.json`

### Test 2: missing parameter throws an exception

```js
new StorageRegister();
```

this will throw an exception `'data storage missing'`.
