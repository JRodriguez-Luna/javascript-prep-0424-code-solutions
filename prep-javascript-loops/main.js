// while loop sample one
const whileLoop1 = () => {
  const array = [];
  let index = 0;

  while (index < 10) {
    array.push(index); // pushes it to the back of the list
    index++; // increment
  }

  return array;
};

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

//While loop sample two

const whileLoop2 = () => {
  const array = [];
  let index = 0;

  while (index < 20) {
    array.push(index);
    index += 2;
  }

  return array;
};

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

// For loop

//for loop sample one
const forLoop1 = () => {
  const array = [];
  for (let i = 0; i < 10; i++) array.push(i);

  return array;
};

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

//for loop sample two
const forLoop2 = () => {
  for (let i = 100; i > 0; i--) console.log('Time till explosion: ', i);
};

forLoop2();

//For...in

const person = {
  name: 'Jesus Rodriguez-Luna',
  age: 24,
  hobby: 'coding',
  invention: 'life',
};

const forInLoop1 = (object) => {
  const array = [];
  for (const key in object) {
    array.push(key);
  }

  return array;
};

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

// sample two
const forInLoop2 = (object) => {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }

  return array;
};

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
