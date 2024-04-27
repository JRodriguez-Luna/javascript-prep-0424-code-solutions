function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers Function:', sum);

//Converting function
function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Function:', minutes); //120

// Greeting function
function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('World');
console.log('getGreeting Function:', greeting);

// Arrow function
// const getGreeting = name => 'Hello ' + name + '!';

// Addition Multiplication function
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Function:', sumTimesFive);

// Multiply Divide
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Function:', productDividedByFive);

// Subtract
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Function:', difference);

//Circle Circumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumference = getCircleCircumference(5);
console.log('getCircleCircumference Function:', circumference);

//Full Name
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Jesus', 'Rodriguez');
console.log('getFullName Function:', fullName);

//cube
function cube(number) {
  return number ** 3;
}
const cubed = cube(5);
console.log('cube Function:', cubed);
