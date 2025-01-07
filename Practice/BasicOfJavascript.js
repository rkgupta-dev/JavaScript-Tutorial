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

/*--------------Operators in Javascript------------------------------
1. Arithmetic Operators
Perform mathematical calculations.   */

console.log(5 + 3);  // Addition: 8
console.log(5 - 3);  // Subtraction: 2
console.log(5 * 3);  // Multiplication: 15
console.log(5 / 2);  // Division: 2.5
console.log(5 % 2);  // Modulus: 1 (remainder of division)
console.log(2 ** 3); // Exponentiation: 8 (2 raised to the power of 3)


// 2. Assignment Operators:- Used to assign values to variables.    

let x = 5;

x += 3;  // x = x + 3
console.log("Add and assign:", x);        // 8

x *= 2;  // x = x * 2
console.log("Multiply and assign:", x);   // 16

x -= 4;  // x = x - 4
console.log("Subtract and assign:", x);   // 12


// 3. Comparison Operators:- Used to compare values.

let num = 10;

console.log("Equal to:", num == "10");    // true (type conversion)
console.log("Strict equal to:", num === "10"); // false (no type conversion)
console.log("Not equal to:", num != 5);   // true
console.log("Greater than:", num > 5);    // true
console.log("Less than:", num < 15);      // true
console.log("Greater or equal:", num >= 10); // true

// 4. Logical Operators:- Used to combine or invert boolean values.

let isAdult = true, hasPermission = false;

console.log("AND:", isAdult && hasPermission);  // false
console.log("OR:", isAdult || hasPermission);   // true
console.log("NOT:", !isAdult);                  // false

// 5. Bitwise Operators:- Operate on binary numbers.

let p = 5, q = 1; // Binary: 5 = 101, 1 = 001

console.log("AND:", p & q);  // 1 (001)
console.log("OR:", p | q);   // 5 (101)
console.log("XOR:", p ^ q);  // 4 (100)
console.log("Left shift:", p << 1); // 10 (1010)
console.log("Right shift:", p >> 1); // 2 (10)

// 6. Ternary Operator:- A shorthand for if-else.

let age1 = 20;
let category = age1 >= 18 ? "Adult" : "Minor";
console.log("Category:", category); // "Adult"


// 7. String Operators:- Used to concatenate strings.

let firstName = "Rohit", lastName = "Kumar";

console.log("Full Name:", firstName + " " + lastName); // "Rohit Kumar"

// 8. Type Operators:- Used to check or manipulate types.

let value = "Hello";
console.log("Type of value:", typeof value);  // "string"

let obj = { name: "Alice" };
console.log("Is instance of Object:", obj instanceof Object); // true


// 9. Other Operators

let emp = { name: "Rohit", age: 25 };

// `delete` operator
delete emp.age;
console.log("After delete:", emp); // { name: "Rohit" }

// `in` operator
console.log("name in obj:", "name" in emp); // true

// Comma operator
let result = (1, 2, 3); // Returns the last value
console.log("Comma operator result:", result); // 3
