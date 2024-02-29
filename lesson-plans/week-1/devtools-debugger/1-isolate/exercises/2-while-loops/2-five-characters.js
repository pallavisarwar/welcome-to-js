'use strict';

/*let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let userInput;

while (!userInput || userInput.length !== 10) {
  var firstPart = prompt('enter something:');
  var secondPart = prompt('enter something:');

   if (firstPart && secondPart) {
    userInput = firstPart + secondPart;
   } else {
    alert ('you need to enter something')
   }
}
let message = 'thank you for ' + userInput + '!';
alert(message);