# prep-javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `strictly equal` mean?
  -> Checks whether its two operands are equal, returning a Boolean result.
  --> The strictly equality operator always considers operands of different types
  to be different.

- What is the logical **and** operator?
  -> Logical **and** compares more conditional statement's determined by its truthiness.
  Ex:

  - True && False = false
  - True && True = true
  - False && False = false
  - False && True = false;

- Can you name some comparison operators?
  - == EQUAL TO
  - === EQUAL TO VALUE AND EQUAL TYPE
  - != NOT EQUAL
  - !== NOT EQUAL VALUE OR NOT EQUAL TYPE
  - > GREATER THAN
  - < LESS THAN
  - > = GREATER THAN OR EQUAL TO
  - <= LESS THAN OR EQUAL TO

## Notes

Strictly Equality vs Equality

Strictly Equality - always considers operands of different types to be different.

```javascript
(1 == 1)(
  //true
  'hello' === 'hello'
)(
  //true
  '1' === 1
)(
  //false
  0 === false
); //false
```

data type and value are checked.

Equality - it attempts to convert and compare operands that are of different types.

```javascript
(1 == 1)(
  //true
  'hello' == 'hello'
)(
  //true
  '1' == 1
)(
  //true
  0 == false
); //true
```

value checked, ignores type.

List of Comparison Operators:

- == EQUAL TO
- === EQUAL TO VALUE AND EQUAL TYPE
- != NOT EQUAL
- !== NOT EQUAL VALUE OR NOT EQUAL TYPE
- > GREATER THAN
- < LESS THAN
- > = GREATER THAN OR EQUAL TO
- <= LESS THAN OR EQUAL TO

If, If/else Statement syntax:

```javascript
if (condition) {
  // code block
} else if (condition || condition) {
  // code block
} else {
  // code block
}

switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```
