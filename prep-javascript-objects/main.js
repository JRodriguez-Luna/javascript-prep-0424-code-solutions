// Object literal syntax
const person = {
  firstName: 'Jesus',
  lastName: 'Rodriguez-Luna',
  hobby: 'Love to code!',
};

console.log(person);

// Concatenated string
const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);

// Add using dot notation
person.job = 'Healthcare';
console.log("The persons's current job is:", person.job);

// Add using bracket notation
person['previousJob'] = 'CVS';
console.log("The person's previous job is:", person['previousJob']);

// Log the entire person object
console.log('The complete person object:', person);
