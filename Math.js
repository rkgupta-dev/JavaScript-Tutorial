/*
# What is Math in javascript?
-> In JavaScript, Math is a built-in object that provides properties and methods for mathematical 
   constants and functions. It includes methods for performing basic arithmetic, rounding numbers, 
   generating random numbers, and more advanced operations like trigonometry and logarithms. 
   The Math object is not a constructor, so all its properties and methods are static and called directly, 
   like Math.PI or Math.sqrt().
   
# Common Math Properties
   1. Math.PI: Represents the value of π (pi), approximately 3.14159.    */

console.log("The Value of PI =", Math.PI); // Output: The Value of PI = 3.141592653589793

// 2. Math.E: Represents Euler's number, the base of natural logarithms, approximately 2.718.

console.log(Math.E); // Output: 2.718281828459045

/*
# Common Math Methods
   1. Math.round(): Rounds a number to the nearest integer. */

console.log("Nearest Integer of 4.6 = ", Math.round(4.6)); // Output: 5
console.log("Nearest Integer of 4.4 = ", Math.round(4.4)); // Output: 4
console.log("Nearest Integer of 4.5 = ", Math.round(4.5)); // Output: 5
console.log("---------------------------");


// 2. Math.ceil(): Rounds a number up to the nearest integer.

const ceil = Math.ceil(4.6);
console.log(`Up to the nearest integer of 4.6 = ${ceil}`);  // Output: 5


// 3. Math.floor(): Rounds a number down to the nearest integer.

const floor = Math.floor(4.6);
console.log(`Down to the nearest integer of 4.6 = ${floor}`);  // Output: 4


// 4. Math.sqrt(): Returns the square root of a number.

const sqrt = Math.sqrt(16);
console.log(`The square root of 16 = ${sqrt}`);  // Output: 4


// 5. Math.pow(): Raises a number to the power of another number.

const pow = Math.pow(2, 3);
console.log(`2 the power of 3 = ${pow}`);  // Output: 8


// 6. Math.max(): Returns the largest number from a list of numbers.

const max = Math.max(30, 5, 10, 50, 20, 4);
console.log(`The Maximum number in list = ${max}`);


// 7. Math.min(): Returns the smallest number from a list of numbers.

const min = Math.min(30, 5, 10, 50, 20, 4);
console.log(`The Minimum number in list = ${min}`);


// 8. Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random());  // Output: A random number between 0 and 1

// To generate a random number within a range (e.g., 0 to 99):

const randomNumber = Math.floor(Math.random() * 100);  // Random integer between 0 and 100
console.log(randomNumber);


// 9. Math.abs(): Returns the absolute value of a number (removes any negative sign).

const abs = Math.abs(-5);
console.log(`Remove -ve Number = ${abs}`);  // Output: 5


// 10. Math.trunc(): Returns the integer part of a number, removing any fractional digits.

console.log(Math.trunc(4.9));  // Output: 4
console.log(Math.trunc(-4.8)); // Output: -4


/*
# Trigonometric Methods
   1. Math.sin(): Returns the sine of a number (in radians). */

console.log("sin Value = ", Math.sin(Math.PI / 2));  // Output: 1


// 2. Math.cos(): Returns the cosine of a number (in radians).

console.log("cos Value = ", Math.cos(0));  // Output: 1


// 3. Math.tan(): Returns the tangent of a number (in radians).

console.log("tan Value = ", Math.tan(Math.PI / 4));  // Output: 0.9999999999999999


// -------------------------------------Coding Section--------------------------------------

const number = 9;
console.log("Square root of", number, "is", Math.sqrt(number));  // Output: Square root of 9 is 3

const randomNum = Math.random();
console.log("Random number between 0 and 1:", randomNum);  // Output: Random number between 0 and 1

const maxNumber = Math.max(10, 20, 30);
console.log("The largest number is:", maxNumber);  // Output: The largest number is 30








/*-------------------------------------------------------------------------------------------------
Summary
* The Math object provides useful mathematical constants (Math.PI, Math.E) and methods for 
  performing calculations.
* Common methods include rounding numbers (round(), ceil(), floor()), generating random numbers (random()), 
  and basic arithmetic (sqrt(), pow(), abs()).
* There are also methods for finding the max/min values from a list of numbers and trigonometric functions 
  like sine, cosine, and tangent.   */