'use strict';

/*let input = prompt('please enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let firstName = prompt('enter your first name: ');
let lastName = prompt('enter your last name: ');

fullName = firstName + ' ' + lastName;

let greeting = '';

if (firstName && lastName ){
 greeting = 'hello' + ' ' + fullName + '!';
} else {
  greeting = 'hello anonymous.';
}

alert(greeting);