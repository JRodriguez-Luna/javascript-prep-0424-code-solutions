# prep-javascript-arrays-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the principal use of arrays?
  -> The principal use of arrays are to sto a list of items or data in a single variable.

- Describe the syntax (structure) of array-literals in JavaScript.
  -> Arrays are defined by using square brackets and adding comma delineated values between the opening and closing brackets.

- What number represents the **first** index of an array?
  -> Zero presents the first index.

- How can you access the last element of an array?
  -> size of array - 1

## Notes

Array is a special variable, which can hold more than one value.

- Arrays are defined by using square brackets [] and adding comma delineated values between the opening and closing brackets.
  Syntax:

```javascript
 const array_name = [item1, item2, ...];
 // common practice to declare arrays with the const keyword.
```

Example

```javascript
const cars = ['Honda', 'Toyota', 'Lexus'];
const cars2 = ['Honda', 'Toyota', 'Lexus'];

//Replace
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';

// Javascript Keyword new
const cars3 = new Array('Subaru', 'McLaren', 'Lambo');

//Accessing Array elements
let car = cars[0]; // 'Saab'
```

Both do the same, no need to use "new Array()".

Arrays can store different type of items like:

- numbers
- strings
- booleans
- objects & more
  And you can change what's in each slot whenever you want.

Array contain index. From 0 - n.

The Length Property

- 'length' property of an array returns the length of an array (n elements)
  Sample:

```javascript
let length = cars.length; // 3
```
