/*
# What is Operators?
-> JavaScript operators are symbols that are used to perform operations on operands.

# Types of Operators.
-> There are different types of JavaScript operators:
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Unary Operators
7. Conditional (Ternary) Operator
8. Spread Operator (...) Operator
Rest Operator (...) Operator
*/

// -------------------------------------Coding Section--------------------------------------

// 1. Arithmetic Operators: Used for mathematical calculations.

let a = 10;
let b = 5;

console.log(a + b); // Addition: Output: 15
console.log(a - b); // Subtraction: Output: 5
console.log(a * b); // Multiplication: Output: 50
console.log(a / b); // Division: Output: 2
console.log(a % b); // Modulus (remainder): Output: 0
console.log(a ** b); // Exponentiation (a raised to the power of b): Output: 100000


    
// 2. Assignment Operators: Used to assign values to variables.

let x = 10; // Assignment

console.log((x += 5)); // Addition assignment: x = x + 5 → x is now 15
console.log((x -= 3)); // Subtraction assignment: x = x - 3 → x is now 12
console.log((x *= 2)); // Multiplication assignment: x = x * 2 → x is now 24
console.log((x /= 4)); // Division assignment: x = x / 4 → x is now 6
console.log((x %= 3)); // Modulus assignment: x = x % 3 → x is now 0

x += 500;
console.log(x);


// 3. Comparison Operators: Used to compare values and return a boolean (true or false).

let a1 = 10;
let b1 = 5;

console.log(a1 == b1);  // Equality: false (checks for value equality)
console.log(a1 === b1); // Strict equality: false (checks for value and type equality)
console.log(a1 != b1);  // Inequality: true (checks if values are not equal)
console.log(a1 !== b1); // Strict inequality: true (checks if values and types are not equal)
console.log(a1 > b1);   // Greater than: true
console.log(a1 < b1);   // Less than: false
console.log(a1 >= b1);  // Greater than or equal to: true
console.log(a1 <= b1);  // Less than or equal to: false



// 4. Logical Operators: Used to perform logical operations and return a boolean.

let x1 = true;
let y1 = false;

console.log(x1 && y1); // Logical AND: false (both need to be true)
console.log(x1 || y1); // Logical OR: true (at least one needs to be true)
console.log(!x1);     // Logical NOT: false (inverts the boolean value)



// 5. Bitwise Operators: Perform operations on binary representations of numbers.

let p = 5;  // Binary: 0101
let q = 3;  // Binary: 0011

console.log(p & q);  // Bitwise AND: 1 (Binary: 0001)
console.log(p | q);  // Bitwise OR: 7 (Binary: 0111)
console.log(p ^ q);  // Bitwise XOR: 6 (Binary: 0110)
console.log(~p);     // Bitwise NOT: -6 (Binary: 1010)
console.log(p << 1); // Bitwise left shift: 10 (Binary: 1010)
console.log(p >> 1); // Bitwise right shift: 2 (Binary: 0010)



// 6. Unary Operators: Operate on a single operand.

let r = 5;

console.log(+r);  // Unary plus: 5 (converts to a number, if not already)
console.log(-r);  // Unary minus: -5 (negates the value)
console.log(++r); // Pre-increment: 6 (increments before using the value)
console.log(r++); // Post-increment: 6 (uses the value, then increments)
console.log(--r); // Pre-decrement: 5 (decrements before using the value)
console.log(r--); // Post-decrement: 5 (uses the value, then decrements)
console.log(typeof r); // Typeof: "number" (returns the type of the operand)



// 7. Conditional (Ternary) Operator: A shorthand for if-else statements.

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";  // Conditional (ternary) operator
console.log(canVote);  // Output: "Yes"

let age1 = 18;
let canDrive = (age1 >= 18) ? "Yes, you can drive" : "No, you cannot drive";
console.log(canDrive);


// 8. Spread Operator (...): Expands elements of an iterable (like an array) into individual elements.

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];  // Spread operator
console.log(newNumbers);  // Output: [1, 2, 3, 4, 5]


let series = [1, 2, 3, 4, 5];
let newSeries = [...series, 6, 7, 8, 9, 10]; // Spread operator
console.log(newSeries);   // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// 9. Rest Operator (...): Collects multiple elements into an array (used in function parameters or array destructuring).

function sum(...numbers) {  // Rest operator in function parameters
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));  // Output: 10
  
function sum1(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum1(1,2,4,5,6));   // Output: 18


function calculateCartPrice(...num2){  // You remove three ... dot then the output only 200.
  return num2;
}
const result =  calculateCartPrice(200, 300, 240, 500);
console.log(result); //Output: [ 200, 300, 240, 500 ]









  /*-------------------------------------------------------------------------------------------
Summary
Arithmetic Operators: +, -, *, /, %, **
Assignment Operators: =, +=, -=, *=, /=, %=
Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
Logical Operators: &&, ||, !
Bitwise Operators: &, |, ^, ~, <<, >>
Unary Operators: +, -, ++, --, typeof
Conditional (Ternary) Operator: ? :
Nullish Coalescing Operator: ??
Spread/Rest Operators: ...
Operators are fundamental to performing operations and controlling logic in JavaScript,
making them crucial for effective programming.
*/