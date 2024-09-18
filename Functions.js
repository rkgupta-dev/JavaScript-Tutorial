/*
# What is Functions?
-> Functions in JavaScript are blocks of reusable code designed to perform a particular task. 
   They allow you to define a set of statements once and execute them whenever you need by calling the function. 
   Functions help organize code, reduce repetition, and improve modularity.

# Syntax of a Function:
-> A function is defined using the function keyword followed by the function name, parentheses () 
   (which can contain parameters), and a block of code {}.

# Basic Structure:
-> function functionName(parameters) {
   // Code to be executed
   }

*/

// -------------------------------------Coding Section--------------------------------------

function greet() {
  console.log("Now, you learning Functions in JS");
}
greet();

function greet1(name) {
  console.log("Hello " + name + "!");
}
greet1("Rohit");

function sum(a, b) {
  s = a + b;
  return s;
}

let val = sum(3, 5);
console.log(val);

function sub(a, b) {
  return a - b;
}

let result = sub(10, 7);
console.log(result);

/* Types of Functions in JavaScript:

1. Function Declaration: A function declared using the function keyword can be invoked 
   before it is defined due to JavaScript's hoisting mechanism. */

function add(a, b) {
  return a + b;
}

let res = add(3, 5);
console.log(res); // Output: 8

/*  
2. Function Expression: In a function expression, a function is assigned to a variable. Unlike function declarations, 
   function expressions are not hoisted, meaning they cannot be called before they are defined. */

const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20

/*
3. Arrow Functions (=>): An arrow function is a more concise way to write function expressions introduced in ES6 (ECMAScript 2015). 
   It has a shorter syntax compared to traditional functions.

Syntax: let function_name = (argument1, argument2 ,..) => expression
*/

const subtract = (a, b) => a - b; // you can avoid curly bracess and return.
console.log(subtract(10, 6)); // Output: 4

const greet2 = () => "Hello!";
console.log(greet2()); // Output: 'Hello!'

const square = (a) => a * a;
let a = 5;
let results = square(a);
// console.log("The square of", a, "is", results);
console.log(`The square of ${a} is ${results}`);

let multiplyFn = (num1, num2) => num1 * num2;
let num1 = 5;
let num2 = 6;
let result1 = multiplyFn(num1, num2);
console.log(`The multiple of ${num1} and ${num2} = ${result1}`); //

// Array Declaration for difference b/w Normal function and Arrow function
const a1 = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// Using Normal function
const a2 = a1.map(function (s) {
  return s.length;
});
console.log("Normal way ", a2); // [8, 6, 7, 9]

// Using Arrow function
const a3 = a1.map((s) => s.length);
console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]

const name = ["Rohit", "Santosh", "Jitendra", "Ram", "Nikhil"];

const output = name.map((s) => s.length); // map() is a method explore next chapter
console.log("The length of each index", output);

/*
4. Anonymous Functions: Anonymous functions are functions without a name. They are often used in places where 
   functions are passed as arguments, like in event handlers or array methods.

*/

setTimeout(function () {
  console.log("This message appears after 3 seconds");
}, 3000);

setTimeout(function () {
  console.log("This message show in display after 5 seconds");
}, 5000);

//  Anonymous Function with map()
const numbers = [1, 2, 3];
const squares = numbers.map(function (num) {
  return num * num;
});
console.log(squares); // Output: [1, 4, 9]

/*
5. IIFE (Immediately Invoked Function Expression): An IIFE is a function that runs as soon as it is defined. 
   It is often used to avoid polluting the global scope. */

(function () {
  console.log("This function runs immediately!");
})();

//  With parameter
(function (a, b) {
  console.log(a + b);
})(5, 10);

// Using IIFE for Scope Encapsulation
var globalVar = "Global";

(function () {
  var localVar = "Local";
  console.log(globalVar); // "Global"
  console.log(localVar); // "Local"
})();

console.log(globalVar); // "Global"
// console.log(localVar);  // Uncaught ReferenceError: localVar is not defined

/*
6. Callback Functions
   A callback function is passed as an argument to another function and executed after some operation is completed. 
   Callbacks are essential for handling asynchronous operations like API calls or events. */

function processData(callback) {
  console.log("Processing data...");
  callback();
}

processData(function () {
  console.log("Data processed!");
});
// Output:
// Processing data...
// Data processed!

function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function() {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);


function addNum(callback){
   console.log("Adding two number.");
   callback();
}

addNum(function(A, B){
   A = 5;
   B = 6;
   console.log(`${A} and ${B} = `, A + B);
});



/*
7. Higher-Order Functions: A higher-order function is a function that takes another function as an argument or 
returns a function. They are commonly used in array methods like .map(), .filter(), and .reduce(). */

function doMath(operation, a, b) {
   return operation(a, b);
 }
 
 function add(x, y) {
   return x + y;
 }
 
 console.log(doMath(add, 5, 10));  // Output: 15

 



 /*--------------------------------------------------------------------------------------
Summary of JavaScript Functions:
Function Declaration: Standard way to define functions.
Function Expression: Assigns a function to a variable.
Arrow Functions: Shorter syntax for functions.
Anonymous Functions: Functions without a name, often used as arguments.
IIFE: Functions that are invoked immediately after they are defined.
Callback Functions: Passed to other functions to be executed later.
Higher-Order Functions: Functions that take or return other functions.
Functions make JavaScript code more reusable, modular, and easy to maintain!
*/