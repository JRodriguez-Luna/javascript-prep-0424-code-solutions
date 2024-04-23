# prep-javascript-variables-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does the `=` (equals) operator do in JavaScript?
  -> It assigns value to the variable name.

- What operator will return the data type of a variable value?
  -> The typeof operator along with the console.log() to display.

- Which keyword is used to declare a variable in JavaScript?
  -> Keywords used to declare a variable in JS are: const, let, or var.

- Which characters is a JavaScript variable allowed to begin with?
  -> Characters allowed to begin with in JS are: letter, $(dollar sign), & \_ (underscore)

- What are quotation marks used for in JavaScript?
  -> Quotation marks are used to create string variables

- What is the purpose of strings in JavaScript?
  -> Strings are a sequence of characters used to represent text and are used for things like your name, or store name, etc.

- What is the purpose of booleans in JavaScript?
  -> Booleans carry two values: true and false. Typically used in conditional testing to
  decide which path of code to execute depending on its truthiness.

- What is the purpose of numbers in JavaScript?
  -> Numbers are used to represent integers and floating-oint values for variables things like price tag.

- What does `null` mean in JavaScript?
  -> Null is intentionally used to represent "no value" or "empty value". This is assigned explicitly to a variable.

## Notes

Variables are fundamental concepts that are like containers that hold/store data like number, sentence, or even a list of items. You can refer to variable for whenever you need to access the contents inside it. In JS, this is called "Variable Name".

Declaring Variables:

- Use 'var', 'let'. or 'const' keywords followed by a name for the variable. Best practice is to
  use 'const' except when the variable is expected to be change/modified. Use 'let' and in some
  situations we don't need to account for in this exercise, 'var'.

  Example of Declaring a Variable:

  ```javascript
  const pi = 3.14159;
  let glasses = true;
  var name = 'John Doe';
  ```

  The '=' is the assignment operator to assign it value.
  Character Variable Names can include letters, underscores, and dollarsigns, but must start with:

  - letter
  - $
  - \_

  ```javascript
  const _name = 'John Doe';
  const $age = 25;
  const name1 = 'Jane Doe';
  ```

  JS is case sensitive, so having to variables name 'age' and 'Age' will be two different
  variables.

Introduction to Strings:

- a string is a sequence of characters used to represent text.
  -> enclosed in quotation marks; ('') or ("")

Example of a String:

```javascript
const greeting = 'Hello, world!';
const name = 'John Doe';
```

Introduction to Numbers:

- Numbers in JS used to represent both integer and floating-point values. JS has a single number type, and numbers can have decimals.
  Example of Numbers:

  ```javascript
  const age = 25; //integer
  const price = 19.99; // floating-point number

  const sum = 10 + 15; // add two numbers
  const difference = 10 - 5; // subtract
  const product = 10 * 5; //multiply
  const quotient = 10 / 5; //Divide
  ```

Introduction to Booleans:

- Booleans are two values: true or false.
  Example of Booleans:
  ```javascript
  const isOnline = true;
  const isLoggedIn = false;
  ```

Using Booleans in Conditions:

```javascript
if (isOnline) {
  console.log('User is Online');
} else {
  console.log('User is offline');
}
```

Introduction to Null and Undefined:

- In JS, undefined and null are two PRIMITIVE values that represent the absence of meaningful value.
  -> Similar but used in difference contexts

- Undefined:

  - assigned to variables that have been declared but not initialized with a value.
    -> Represents absence of value or "not defined".

  Example of undefined:

  ```javascript
  let user;
  console.log(user); //output: undefined
  ```

  Variables that are declared but not initialized are by default, undefined.
  --> Functions without a return statement also return undefined.

- Null

  - intentionally used to represent "no value" or "empty value". Must be assigned explicitly to
    a variable.

  Example of null:

  ```javascript
  const result = null;
  console.log(result); //output: null
  ```

Difference Between Undefined and Null:

- type: typeof undefined == undefined. typeof null == object.
- intention: undefined typically indicated a variable not initialized, while null is used to
  intentionally denote the absence of any value. They are used interchangeably.
