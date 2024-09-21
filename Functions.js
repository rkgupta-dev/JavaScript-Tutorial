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
  // name is parameter of greet1() function, parameter always local variable.
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

Syntax: let function_name = (param1, param2 ,..) => { 
        expression
        }
*/

const arrowSum = (val1, val2) => {
  console.log("Sum of two numbers = ", val1 + val2);
};
arrowSum(3, 6);

const subtract = (a, b) => a - b; // you can also avoid curly bracess and return.
console.log(subtract(10, 6)); // Output: 4

const arrowMultiply = (m1, m2) => {
  return m1 * m2;
};
let Result = arrowMultiply(10, 10);
console.log(`The multiple of two numbers = ${Result}`);

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
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

function addNum(callback) {
  console.log("Adding two number.");
  callback();
}

addNum(function (A, B) {
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

console.log(doMath(add, 5, 10)); // Output: 15

//-----------------------------------Questions Practice---------------------------------
/*
1. Create a function using the "function" keyword that takes a String as an argument & return the 
 number of vowels in the string */

function countVowel(str) {
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char);
    }
  }
}
countVowel("Rohit Kumar Gupta");
console.log("--------------------------");

// Above problem solved using Arrow Function.
const arrowCountVowel = (str) => {
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char);
    }
  }
};
arrowCountVowel("abcdefghijklmnopqrstuvwxyz");

/*
2. Write a function which calculates the product of two numbers, and returns the result. */

function calculatesProduct() {
  result = p1 * p2;
  return result;
}

let p1 = 6;
let p2 = 5;
console.log(calculatesProduct());

/*
3. Write a function which takes a parameter and return is type. */

function checkType(type) {
  return typeof type;
}

console.log(checkType("Divisha"));

/*
4. Write a JS function which takes a number as a parameter and print 5 times. */

function printNumber(numb) {
  for (let i = 0; i < 5; i++) {
    console.log(numb);
  }
}

printNumber("HII SHILTON!");

/*
5. Write a function which takes a number as a parameter and print it in decreasing order till 0. */

function takeNumber(takeNum) {
  for (let i = takeNum; i >= 0; i--) {
    console.log(i);
  }
}

takeNumber(5);

/*
6. Write a function which takes a parameter and only when Hello is given as the parameter it prints "World". */

function PrintHello(abc) {
  if (abc === "Hello") {
    console.log(`${abc} World!`);
  } else {
    console.log("Parameter is not Hello");
  }
}

PrintHello("Hello");

/*
7. Function take price and discount as parameters and return the discounted amount. */

function summerSale(price, discount) {
  let discountedAmount = (price * discount) / 100;
  console.log(`You saved ₹${discountedAmount}`);
  return price - discountedAmount;
}

const price = 500;
const discount = 17;
const discounted = summerSale(price, discount);

console.log(`The discounted amount is: ₹${discounted}`);

/*
8. Function takes age as a parameter and checks whether the person is minor or not. If the person is minor and age
   is a multiple of 2 return true otherwise false. Then if the return value is true print You are eligible for the offer. */

function checkEligibility(age) {
  if (age < 18 && age % 2 === 0) {
    console.log("You are minor");
    return true;
  } else {
    console.log("You are NOT minor");
    return false;
  }
}

const age = 17;
const isEligible = checkEligibility(age);

if (isEligible) {
  console.log("You are eligible for the offer.");
} else {
  console.log("You are not eligible for the offer.");
}

/*
9. Write a javascript function which takes an array as parameters and return the largest number in that array. */

function largestNumber(number) {
  let largest = number[0]; // Initialize the first element as the largest

  for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
      largest = number[i]; // Update largest if current element is greater
    }
  }

  return largest;
}

const number = [45, 24, 66, 56, 8, 100, 200];
console.log(number);
console.log(number.length);
console.log(largestNumber(number));

/*
10. Write a function which takes a number as a param and print its table. */

function printTable(number) {
  for (i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

printTable(10);

/*
11. Write a function which takes a string and a character as param and return no. of occurrences of that character
    in the string. */

function countChar(string, char) {
  let count = 0; // Initialize a count variable to store the occurrences

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      // Check if the current character matches the input character
      count++; // Increment the count if a match is found
    }
  }

  return count; // Return the total count
}

const string = "Divisha";
const char = "i";

const display = countChar(string, char);

console.log(`In "${string}", No. of Occurrence ${char} = ${display}`);


/*
12. Count number of Vowels in String */

function countVowel(str) {
  let count = 0;
  str=str.toLowerCase();
  for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
       count++; //Increment vowel count
    }
  }
  return console.log(`${count} Vowel in "${str}"`);
}

console.log(countVowel("Rohit"))



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
