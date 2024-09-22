/*
# What is Datatype?
-> In JavaScript, data types refer to the different kinds of values that can be stored and manipulated in the program.

# Types of Datatype
=> There are two types of data types
1. Primitive data type               2. Non-primitive data type
-> Number                            -> Object
-> String                            -> Array
-> Boolean                           -> Function
-> Null
-> Undefined
-> BigInt
-> Symbol

*/

// -------------------------------------Coding Section--------------------------------------

// 1. Primitive data types -----------------------------------------------------------------
// Number: Represents numeric values (both integers and floating-point numbers).

let age = 30; // Integer
let price = 99.99; // Floating point number

console.log("the type of age =", typeof age); // number
console.table([age, price]); // console.table is printing in table format

// String: Represents a sequence of characters (text).

let name = "Rohit"; // String with double quotes
let city = "Bengalore"; // String with single quotes

console.log(name);
console.log(city);
console.log(typeof city); // you can also check type of name

// Boolean: Represents two values: true or false. Often used in conditions.

let a = 5;
let b = 5;
let c = 6;

console.log(a == b); //true
console.log(a == c); //false

// Null: Represents the intentional absence of any value (a variable explicitly set to "nothing").

let result = null; // Null value
console.log(result);
console.log(typeof result); // object

// Undefined: A variable that has been declared but not assigned a value yet.

let x;
console.log(x); // Output: undefined

// BigInt: Represents numbers larger than what can be stored in a regular Number type (introduced in ES2020).

let bigNumber = BigInt(12345678901234567890);
console.log(bigNumber);
console.log(typeof bigNumber);

// Symbol: Represents a unique identifier (introduced in ECMAScript 6).

let sym = Symbol("id");
console.log(sym);
console.log(typeof sym);

// 2. Non-primitive data type --------------------------------------------------------

// Object: Used to store collections of data and more complex entities. Objects can hold multiple key-value pairs.

let person = { firstName: "Rohit", lastName: "Gupta", age: 25 }; // Object with properties

console.log(person);
console.log(typeof person);

// Array: A special type of object that stores a list of values (ordered collections).

let colors = ["red", "green", "blue", "orange"]; // Array

console.log(colors);
console.log(typeof colors);

// Function: A block of code designed to perform a specific task. Functions themselves are treated as objects in JavaScript.

function greet() {
  console.log("Hello!");
  console.log(typeof greet)  // Output: function
}

greet(); // function call, you call the function after print the greet.




/*
# Dynamic Typing in JavaScript
=> JavaScript is a dynamically typed language, meaning that the type of a variable is determined at runtime,
   not when you declare it. You can even change the type of a variable later in your code:
*/

let num = 10;     
console.log(typeof num)  // x is a number

num = "Hello";     
console.log(typeof num)  // Now x is a string









/*-------------------------------------------------------------------------------------------
Summary
Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
Complex Data Types: Object, Array, Function
These data types help you structure and organize your data properly in a JavaScript program.
*/