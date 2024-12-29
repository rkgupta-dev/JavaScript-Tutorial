/*
## What is JavaScript?
-> JavaScript is a programming language used to make web pages interactive. 
   It can be run in the browser or on the server (Node.js).

## Concepts: Variables, Data Types, Operators, Basic Syntax   

------------------------------------------------------------------------------------------------------
Variables :-  Variables are used to store data. In JavaScript, you can declare variables using var, let, or const.
1. Declaring Variables: Use var, let, or const to declare variables.           */

let name = "Ram"; // (block-scoped)
const city = "Bengalore"; // (constant value)
var age = 26; // (function-scoped, not recommended for modern JavaScript))

console.log(name, age, city);

// 2. Variable Reassignment: Variables declared with let can be reassigned, but const cannot.

let score = 10;
console.log(score); // Output: 10

score = 20; // Reassignment allowed
console.log(score); // Output: 20

const score1 = 100;
// score1 = 200; // Reassignment not allowed
console.log(score1); // Error: Assignment to constant variable.

// 3. Local Variable: Declared inside a function or block, accessible only within that scope.

function localVariable() {
  let localMessage = "I am local!"; // Local variable
  console.log(localMessage); // Output: I am local!
}
localVariable();
// console.log(message); // Error: message is not defined (outside scope)

function showPrice() {
  let price = 255;
  console.log(price);
}
showPrice(); // Output: 255
// console.log(price);  // Error: price is not defined

// 4. Global Variable: Declared outside of any function or block, accessible from anywhere.

let globalMessage = "I am global"; // Global variable

function globalVariable() {
  console.log(globalMessage); // Accessing global variable
}
globalVariable(); // Output: I am global
console.log(globalMessage); // Output: I am global

let Price = 500;

// 3. Using Both Local and Global Variables: Local variables take precedence over global variables with the same name.

let Name = "Global Name"; // Global variable

function showName() {
  let Name = "Local Name"; // Local variable
  console.log(Name); // Output: Local Name
}
showName();
console.log(Name); // Output: Global Name
