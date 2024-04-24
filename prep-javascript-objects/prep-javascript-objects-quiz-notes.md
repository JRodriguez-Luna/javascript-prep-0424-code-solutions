# prep-javascript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What data types can object properties hold?
  -> Data types that object properties can hold:

  - strings
  - numbers
    & more

- Describe the syntax (structure) of object-literals in JavaScript.
  -> Using the object-literal syntax, you will need: - {} (curly braces) to surround the keys and values.
  -> Withing the curly brace, add each key followed by a colon (:), followed by its value. - Each key/value pair is separated by a comma (,). - Don't forget the semi-colon(;) at the end of the curly brace!!

## Notes

What are Objects in JavaScript?

- Object are one of the fundamental building blocks of JavaScript. It uses named
  properties which generally describe the data they hold.
  -> One of the Primary Reasons for this structure:
  -> Allows for modeling of real world structures.

  Ex:
  Guy named: Paul Atreides; Own unique characteristics and preferences (not some rando)

      People have different traits and qualities that make them who they are.
      This is what JavaScript object is like! (kinda)

      Think of Object as a person. This 'person' contains different attributes and characteristics.
      Each attribute represents a different aspect of the person, like their name, age, and favorite food.
      Just like person has labels on each attribute to help you understand them, JavaScript objects have labels
      called "keys" that point to specific attributes or characteristics, which we call "values".

  Pseudo Example:
  Say we have a person object called "human". Inside the object "human", we have attributes like firstName, lastName,
  favoriteFood, and age. These are our keys. Each key has a corresponding attribute, values. SO:

      ```JavaScript
        const human = {
          firstName: 'Paul',
          lastName: 'Atreides',
          favoriteFood: 'spice',
          age: 35,
        };
      ```
      This is a Key: Value pair!!

      Objects are very useful for modeling things in the real world by grouping values together in one place.

Accessing and Creating properties in 'objects':

- Two different ways to access and create properties on objects:

  1. dot notation
     -> Retrieve property values:

  ```javascript
  const firstName = human.firstName;
  console.log("the human's first name is", firstName);
  ```

  -> Add or Update property values:

  ```javascript
  human.fear = 'nothing';
  console.log('the human is afraid of', human.fear);
  ```

  2. bracket notation
     -> Retrieve property values:

  ```javascript
  const lastName = human['lastName'];
  console.log("the human's last name is", lastName);
  ```

  -> Add or Update property values:

  ```javascript
  human['middleName'] = 'Danger';
  console.log("the human's middleName is", human['middleName']);
  ```

  **Spend the time to practice these to learn how to properly create and use objects!!**
  -> One of the most important aspects of becoming a JavaScript developer.

  Create an object using 'object literal syntax':
  -> This is using:

  - {} (curly braces) to surround the keys and values.
    -> Withing the curly brace, add each key followed by a colon (:), followed by its value.
  - Each key/value pair is separated by a comma (,).

  ```javascript
  const hanSolo = {
    firstName: 'Han',
    lastName: 'Solo',
    hobby: 'Piloting the Millennium Falcon',
    age: 42,
  };
  ```

  _How to read it:_

  - The object hanSolo has 4 keys (or properties) named;

    - firstName
    - lastName
    - hobby
    - age

    The value of the firstName property is the string 'Han',
    the value of the lastName property is the string 'Solo',
    the value of the hobby property is the string 'Piloting the Millennium Falcon',
    and the value of the age property is the number 42.
