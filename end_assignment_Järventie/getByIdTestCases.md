# Test Cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the computer
- Return: returns the computer object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test 1: get object of the id number "1"

Call

```js
storageRegister.getById(1);
```

returns

```json
{
  "id": 1,
  "manufacturer": "BMI",
  "type": "minitower",
  "accessories": ["keyboard", "display", "mouse"],
  "price": 250
  "software": "[
          {
            name: "Writer",
            price: 123,
          },
          {
            name: "Solitaire",
            price: 10,
          },
        ]"
}
```

### Test 2: wrong id-number

Call

```js
storageRegister.getById(x);
```

returns `"parameter should be valid id of a computer"`

### 3. parameter missing

Call

```js
storageRegister.getById();
```

returns `'parameter missing'`.
