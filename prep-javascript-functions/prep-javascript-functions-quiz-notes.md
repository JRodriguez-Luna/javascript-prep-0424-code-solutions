# prep-javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the five parts of a function definition?

  1. function keyword at the beginning of a new function
  2. Optional Name
  3. comma-separated list of zero to n parameters
  4. code block between the {}
  5. optional return statement

- How do you call a function?
  -> you call it by calling the name of the function defined along with any
  possible arguments needed

- What is the difference between a parameter and an argument?
  -> When defining a function, we declare parameters.
  When we call a function, we pass an argument(s).

## Notes

Function - a collection of code which performs a specific task.
Def syntax:

```javascript
  // Defining a Function
  function example(para1, para2, para3, ...) {
    // ...more Javascript code...
    return;
  }

  //Calling a function
  example('1', '2', '3', ...);
```

Naming a function

- Be sure your function's name include at least a verb. A 'verb-noun' combination is best.
  -> Make your function name concise, yet descriptive. Function "make stuff" or "do doings" so it makes sense that good function names contain a verb-noun combination.

example:

```javascript
  function start(); // Not great. What's it do?
  function play(); // Play what?
  function playVideo(); //Much Better. Function plays a video, what video?
  function playVIdeo(video); //Perfect! Function plays a video of our choosing!
```

Anonymous Functions

- Function definitions have an optional name. Meaning it completely valid to define a
  function with no name.
  Example of Anonymous Functions

```javascript
  function() { // an anonymous function; it has no name
    const greeting = 'Hello, World!';
    console.log(greeting);
  }
```

How are you supposed to call this function?

- You don't.
  -> Strictly anonymous functions are typically called by some other
  part of the program, which means you won;t be writing the code that calls it.

Named Function Expressions

- Created by assigning a anonymously defined function to a variable.
  -> Once anonymous function is assigned to a variable, it can be called just like a standard function definition.

  Standard 'add' definition and function call:

  ```javascript
  function add(num1, num2) {
    return num1 + num2;
  }

  add(5, 5); //10
  ```

  Function Expression Definition and Function call for 'add' function:

  ```javascript
  const add = function (num1, num2) {
    return num1 + num2;
  };

  add(5, 5);
  ```

  Almost the same. In almost all cases, named function expression can be used anywhere
  a std function definition is used, but their typical use is as arguments passed to the other functions.

  Function definitions & named function expressions are different, but wont learn about
  it till later.

Arrow Functions

- very similar in style and use to an anonymous function, but there are some big
  differences that need to be touched on.
  -> Arrow function do not use the function keyword as part of their definition.
  Syntax sample:

```javascript
const add = (num1, num2) => {
  return num1 + num2;
};

add(5, 5);
```

The '=>' is why this type of function is called an arrow function.
Arrow functions have an implicit return when curly braces {} are not used to contain the functions's code block.
\*\* -> Implicit return means that an arrow function can return a value without using the return keyword

Implicit Return Example:

```javascript
const add = (num1, num2) => num1 + num2;
```

Notice:

- no return statement
- no {} to indicate a code block
- code block consists of only one line of code (an expression)

The implicit return functionality of an arrow function only works when all is met above.

This was created to reduce syntax needed for writing functions, especially small one line functions like the example above.
