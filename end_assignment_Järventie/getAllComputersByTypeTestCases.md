# Test Cases

## **getAllComputersByType(type)**

Returns an array of computer objects of given type

- Parameters: type of the computer to be searched
- Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### Test 1: use default jsonData with parameter type laptop

get types of the default jsonData

returns

```json
[
  {
    "id": 2,
    "manufacturer": "CERA",
    "type": "laptop",
    "accessories": ["mouse"],
    "price": 350,
    "software": [
      {
        "name": "Writer",
        "price": 10
      },
      {
        "name": "Counter",
        "price": 20
      }
    ]
  },
  {
    "id": 3,
    "manufacturer": "BMI",
    "type": "laptop",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
```

### Test 2: If no computer of given type is found, an empty array is returned

```js
storageRegister.getAllComputersByType("NotFound");
```

returns []

## 3. parameter missing

Call

```js
storageRegister.getAllComputersByType();
```

returns `'parameter missing'`.
