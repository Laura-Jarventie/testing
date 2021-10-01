# Jest project Workflow

## 1. Create a project folder

## 2. Create package.json with `npm init`

```shell
> npm init -y
```

or

```shell
> npm init
```

and answer the question

## 3. Install jest as devDependencies

```shell
> npm install jest --save-dev
```

This modifies package.json by adding devDependencies to it

```
"devDependencies": {
    "jest": "^27.0.6"
  }
```

## 4. Modify test-script in package.json

```json
"scripts": {
    "test": "jest"
  }
```

## 5. Create test forlder named `__test__`

## 6. Write tests

## 7. To run tests

```shell
> npm test
```

#### 7B. run only one test file (happen´s rarely)

```shell
npm test --testFile fileToBeTested.test
```
