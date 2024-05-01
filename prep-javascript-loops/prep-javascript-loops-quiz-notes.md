# prep-javascript-loops-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the **condition** expression in the `for` and `while` loops?

- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?
  --> at the very beginning of the loop.

- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?
  --> It gets evaluated before each new iteration of the loop.

- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?
  --> At the end of each iteration.

- What is the purpose of the **final expression** in a `for` loop?
  --> To make sure we are moving forward to the next element. No infinite loop.

- What types of data should the `for...in` loop be used on?
  --> things like object. It is preferred not to use it on arrays or strings.

## Notes

Loops are tools which allows the programmer to run a code block over and over again a set number of times
based on conditional expression evaluations.

- Must contain a terminating condition, which is boolean expression that will become false at some point.
- Similar to if statements
  -> code will not run unless the conditional expression evaluates to true.
- conditional expression needs to evaluate to true to start the loop, and must at some point evaluate
  to false to stop loop.

List of loops in JS:

- While loops
- For Loops
- For...in Loops

While Loops syntax:

```javascript
  while(boolean expression) {
    // do something till it evaluates to false
  }
```

Start with a true expression and end with a false expression over time.
Use variable i or index to increase each time the loop runs until the conditional expression evaluates
to false
Example of **index** evaluating to false:

```javascript
let index = 0; // index variable defined with 'let' so its value can be updated
while (index < 10) {
  console.log('loop is going');
  index++; // the index variable is incremented and updated
}

console.log('loop complete');
```

Common use:

- Looping through a list of data.

For Loop

- Similar to while loop, but syntax is more explicit regarding the structure of the loop.
  Difference between While vs. For Loop:

```javascript
let index = 0; // defining the index variable

while (index < 10) {
  console.log(index);
  index++;
}

for (let index = 0; index < 10; index++) {
  console.log(index);
}
```

For Loop Syntax:

```js
for (initialization; condition; afterthought) {
  statement;
}
```

initialization - variable declaration used to initialize a counter variable before the loop begins.
condition - evaluated before each loop iteration; if expression is true, statement executes, else exits
the loop.
afterthought - expression evaluated at the end of each loop iteration. Generally used to update/increment
the counter variable.
statement - executes as long as the condition evaluates to true.

Cannot use the in operator unparenthesized, because that is ambiguous with a for...in loop:

```js
for (let i = ('start' in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}

for (let i = ('start' in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
```

For...in

- iterates over all enumerable string properties of an object (ignoring properties keyed by symbols),
  including inherited enumerable properties.

Sample:

```js
  const obj = { a: 1, b: 2, c: 3};

  for(const key in obj)
    console.log(key: obj[key]);

  //should work the same
  for(const key,value in obj)
    console.log(key: value);
```

Syntax:

```js
for (variable in object) statement;
```
