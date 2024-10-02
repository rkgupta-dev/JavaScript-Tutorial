/*---------------------------------------NUMBERS-----------------------------------------------
# What is number in javascript?
-> In JavaScript, Number is a primitive data type used to represent both integer and 
   floating-point (decimal) values. JavaScript doesn't differentiate between integers and 
   floats — all numbers are represented as 64-bit floating-point values following the IEEE 754 standard.

# Examples of Numbers in JavaScript:
   1. Integer:                                                                                                 */

let age = 30;
console.log(age); // Output: 30

// 2. Floating-Point (Decimal):

let price = 19.99;
console.log(price); // Output: 19.99

// 3. Special Numeric Values:
// * Infinity: Represents a number larger than any finite number.

console.log(1 / 0); // Output: Infinity

// * -Infinity: Represents a number smaller than any finite number.

console.log(-1 / 0); // Output: -Infinity

// * NaN (Not-a-Number): Represents a value that is not a valid number.

console.log("abc" / 2); // Output: NaN

/*
# Common Number Methods
-> JavaScript has some built-in methods to handle numbers. These methods are part of the Number object.
   1. Number.isInteger(): Checks if a value is an integer.                                                 */

console.log(Number.isInteger(10)); // Output: true
console.log(Number.isInteger(10.5)); // Output: false

// 2. Number.parseFloat(): Converts a string to a floating-point number.

let value = "10.99";
console.log(Number.parseFloat(value)); // Output: 10.99

// 3. Number.parseInt(): Converts a string to an integer.

let number = "10.99";
console.log(Number.parseInt(number)); // Output: 10

// 4. Number.isNaN(): Checks if a value is NaN (Not-a-Number).

console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(34)); // Output: false

// # Numeric Constants
// 1. Number.MAX_VALUE: The largest positive number JavaScript can represent.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 2. Number.MIN_VALUE: The smallest positive number greater than 0.
console.log(Number.MIN_VALUE); // Output: 5e-324

// 3. Number.POSITIVE_INFINITY: Represents positive infinity.
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// 4. Number.NEGATIVE_INFINITY: Represents negative infinity.
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// 5. Number.NaN: Represents a value that is "Not-a-Number".
console.log(Number.NaN); // Output: NaN

let num1 = 15; // Integer
let num2 = 2.5; // Floating-point number
let sum = num1 + num2; // Addition of numbers
console.log(`The sum of ${num1} and ${num2} = ${sum}`); // Output: 17.5

/*
# Automatic Type Conversion (Coercion)
-> JavaScript automatically converts between different data types when necessary. For example:  */

let result = "5" - 2; // JavaScript converts "5" (string) to 5 (number) before subtraction
console.log(result); // Output: 3

/*---------------------------------------------------------------------------------------------------------
Summary
* Number in JavaScript represents both integers and floating-point numbers.
* Special values like Infinity, -Infinity, and NaN are part of the Number type.
* JavaScript provides built-in methods like isNaN(), isInteger(), and constants 
  like MAX_VALUE and MIN_VALUE for working with numbers.                        */

console.log("----------Boolean----------");

/*----------------------------------------------BOOLEANS----------------------------------------------------  

# What is boolean in javascript?
-> In JavaScript, a Boolean is a primitive data type that can have one of two values: true or false.
   It is often used to represent logical values and to control the flow of programs (e.g., in if conditions).

# Boolean Values
-> There are only two possible Boolean values:

1. true: Represents a logical truth.
2. false: Represents a logical falsehood.

# Creating a Boolean Value
-> You can create a Boolean value by directly assigning true or false:                                        */

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn); // Output: true
console.log(isAdmin); // Output: false

/*
# Boolean Constructors
-> You can also create a Boolean using the Boolean() constructor or function.
   The Boolean() function can be used to convert other values to a Boolean:     */

let isLogIn = Boolean(true);
console.log(isLogIn); // Output: true

/*
# Truthy and Falsy Values
-> In JavaScript, certain values are considered truthy (which convert to true in a Boolean context) and 
   others are considered falsy (which convert to false).

* Falsy Values: The following values are considered falsy in JavaScript:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN (Not-a-Number)                                                                                 */

console.log("Return Falsy");
console.log(Boolean(false));                    // Output: false
console.log(Boolean(0));                        // Output: false
console.log(Boolean(""));                       // Output: false
console.log(Boolean(null));                     // Output: false
console.log(Boolean(undefined));                // Output: false


/*
* Truthy Values: All values other than the falsy ones are considered truthy. Some examples include:
- true
- Non-zero numbers (e.g., 1, -1, 3.14)
- Non-empty strings (e.g., "hello")
- Arrays, objects, and functions                                                                  */

console.log("Return Truthy");
console.log(Boolean(true));         // Output: true
console.log(Boolean(1));            // Output: true
console.log(Boolean("hello"));      // Output: true
console.log(Boolean([]));           // Output: true (empty array)
console.log(Boolean({}));           // Output: true (empty object)


/*
# Using Booleans in Conditions
-> Booleans are typically used in conditional statements like if, while, or ternary operators:     */

let isMember = true;

if (isMember) {
  console.log("Welcome, member!");  // This will execute
} else {
  console.log("Please sign up.");
}


let ages = 18;
let isAdult = ages >= 18;  // Returns true or false based on the comparison

console.log(isAdult);  // Output: true

