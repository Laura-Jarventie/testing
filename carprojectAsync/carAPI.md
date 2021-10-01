# Carstorage API

## car.json

```json
[
  { "model": "Bored T-model", "licence": "ABC-1" },
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Bored T-model", "licence": "GF-10" },
  { "model": "XGT", "licence": "B-1" }
]
```

**search(keay,value)**
function returns array of cars that matches the given criteria. If no match, returns an empty array.

if the parameters are missing,

parameters:
key: model or licence
value: value to be search

### examples

```js
search("model", "Nova");
```

returns

```json
[
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Bored T-model", "licence": "GF-10" }
]
```

```js
search("licence", "ABC-1");
```

returns

```json
[{ "model": "Bored T-model", "licence": "ABC-1" }]
```

```js
search("model", "x");
```

returns

```json
[]
```

```js
search();
or;
search(model);
```

returns

```json
[
  { "model": "Bored T-model", "licence": "ABC-1" },
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Bored T-model", "licence": "GF-10" },
  { "model": "XGT", "licence": "B-1" }
]
```
