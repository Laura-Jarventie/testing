# calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum of the given numbers.

- if parameter is missing, throws an exception: `'parameter missing'`
- if parameters are not numbers, throws and exception:`'only numbers allowed'`

### Test cases

### 1 sums

#### Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(-2,-4) return -6
- sum(-2,4) return 2
  [2, -4, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0, -3, -3],
  [-3, 0, -3]

- 0 is always good to test, and also 0 0

##### Floats

sum(10, 11.5) return 21.5

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-3, 2.5, -0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### 1.2 Missing parameters

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum('a') throws and exception `'parameter missing'`
- sum('') throws an exception `'parameter missing'`

#### 1.3 Parameters are not numbers

- sum('a',1) throws an exception `'only numbers allowed'`
- sum(2, 'adfsds') throws an exception `'only numbers allowed'`
- sum('a','b') throws an exception `'only numbers allowed'`
- sum('','') throws an exception `'only numbers allowed'`
- sum(null, 1) throws an exception `'parameter missing'`
- sum(undefined, 1) throws an exception `'parameter missing'`

## **subtraction(a, b)**

Function returns the difference of two numbers a - b. Numbers are passed to the function as parameters.

Returns the diff of the given numbers.

- if parameter is missing, throws an exception: `'parameter missing'`
- if parameters are not numbers, throws and exception:`'only numbers allowed'`

### 2 subtractions

### Test cases

#### Integers

- subtract(4,3) return 1
- subtract(2,3) return -1
- subtract(-2,-4) return 2
- subtract(-2,4) return -6

  [2, -4, 6],
  [0, 0, 0],
  [0, 3, -3],
  [3, 0, 3],
  [0, -3, -3],
  [-3, 0, -3]

  ##### Floats

subtract(10, 11.5) return -1.5

[10, 11.5, -1.5],
[2.5, 3, 0.5],
[2.5, 2.5, 0],
[2.4, -2.5, 4.9]
and more....

#### 2.2 Missing parameters

- subtract() throws an exception `'parameter missing'`
- subtract(1) throws an exception `'parameter missing'`
- subtract('a') throws and exception `'parameter missing'`
- subtract('') throws an exception `'parameter missing'`

#### 2.3 Parameters are not numbers

- subtract('a',1) throws an exception `'only numbers allowed'`
- subtract(2, 'adfsds') throws an exception `'only numbers allowed'`
- subtract('a','b') throws an exception `'only numbers allowed'`
- subtract('','') throws an exception `'only numbers allowed'`
- subtract(null, 1) throws an exception `'parameter missing'`
- subtract(undefined, 1) throws an exception `'parameter missing'`

### 3 Division

function divide (a,b) return a/b.

problems:

0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity
Infinity / Infinity => NaN
-Infinity / Infinity => NaN
Infinity / --Infinity => NaN
-Infinity / -Infinity => NaN

Test values:
[0, 0, Number.NaN],
[2, 0, Number.POSITIVE_INFINITY],
[-2, 0, Number.NEGATIVE_INFINITY],
[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.Nan]
