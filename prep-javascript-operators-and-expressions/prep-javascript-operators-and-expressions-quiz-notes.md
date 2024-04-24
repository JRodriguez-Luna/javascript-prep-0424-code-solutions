# prep-javascript-operators-and-expressions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What data type is returned by an arithmetic operation?
  -> The data type returned by an arithmetic operation is numbers.

- What is string concatenation?
  -> String concatenation joins two string values

- What purpose(s) does the `+` plus operator serve in JavaScript?
  -> The addition (+) operator produces the sum of numeric operands or string concatenation.

- What data type is returned by comparing two values (`<`, `>`, `===`, etc)?
  -> The data type returned by comparing two values is a boolean.

- What does the `+=` "plus-equals" operator do?
  -> The addition assignment (+=) operator performs addition(numeric addition or string concatenation) on
  the two operands and assigns the result to the left operand.

## Notes

Arithmetic Operators

- Addition(+): Adds two operands:

```javascript
console.log(5 + 2); //7
```

- Subtraction(-): Subtracts the second operand from the first:

```javascript
console.log(5 - 2); //3
```

- Multiplication(\*): Multiplies two operands:

```javascript
console.log(3 * 4); //12
```

- Division(/): Divides the numerator by the denominator:

```javascript
console.log(10 / 2); //5
```

String Operators:

- Concatenation(=): Joins two string values:

```javascript
console.log('Hello' + ' World!'); //"Hello World!"
```

Assignment Operators:

- Basic Assignment(=): Assigns a value to a variable:

```javascript
let x = 5;
x = 10;
```

Addition Assignment(+=): Adds the right operands to the left operand and assigns the result:

```javascript
let y = 10;
y += 5; // same as y = y + 5;
console.log(y); //15
```

Comparison Operators:

- Equality(==): Checks if the values are the same, performing type coercion if necessary:

```javascript
console.log(5 == 5); //true
console.log(5 == '5'); //true
```

- Strict Equality(===): Check if the value and type are the same:

```javascript
console.log(5 === 5); //true
console.log(5 === '5'); //false
```

Logical Operators:

- logical AND (&&): Returns true if both operands are true:

```javascript
console.log(true && false); //false
console.log(true && true); //true
```

- logical OR(||): Returns true if at least one of the operands is true:

```javascript
console.log(true || false); //true
```

- logical NOT(!): INverts the truthiness of the operand:

```javascript
console.log(!true); //false
console.log(!false); //true
```

Additional Operators:

- typeof Operator: Returns the type of the operand:

```javascript
console.log(typeof 'Hello'); //"string"
console.log(typeof 42); //"number"
```

- Relational and Equality Operators: Compares two values, returning a boolean result:

```javascript
console.log(5 > 3); //true
console.log(3 === 3); //true
console.log(1 !== 2); //true
```
