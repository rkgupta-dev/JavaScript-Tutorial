/*
# What is Array?
-> In JavaScript, an array is a special type of object used to store a list of values. Arrays are one of the 
   most common data structures in JavaScript, allowing you to group multiple values in a single variable. 
   Each value in an array is called an element, and every element has a numerical index (starting from zero) 
   that you can use to access or manipulate the element.

-> An array is used to store multiple values in a single variable. Each value (element) has an index, 
   starting from 0, and arrays can hold any type of data like numbers, strings, or objects. 
   You can access, modify, and manipulate elements using various methods.

*/

// -------------------------------------Coding Section--------------------------------------

/*
# Creating an Array
-> There are three ways to create arrays in JavaScript:

1. Using Array Literal Syntax
-> The most common way to create an array is by using square brackets [].  */

const fruit = ["mango", "apple", "orange", "lichi"];

console.log(fruit);

// 2. Using Array directly (new keyword)

let numbers = new Array();
numbers[0] = 10;
numbers[1] = 30;
console.log(numbers); // Output: [ 10, 30 ]

const emptyArray = new Array();
console.log(emptyArray); // Output: []

const arrayWithLength = new Array(5);
// arrayWithLength[2] = "Rohit";
console.log(arrayWithLength); // Output: [ <5 empty items> ]

// 3.  Using Array constructor (new keyword)

const number = new Array(1, 2, 3, 4, 5);

console.log(number);

const color = new Array("Red", "Yellow", "Orange", "Green");

console.log(color);

/*
# Accessing Elements in an Array: You can access elements in an array using their index.
  Remember that the first element has an index of 0. */

const colors = ["Red", "Green", "Blue"];
console.log(colors); // Output: [ 'Red', 'Green', 'Blue' ]
console.log(colors[0]); // Output: "Red"
console.log(colors[2]); // Output: "Blue"

/*
# Modifying an Array: You can change the value of elements in an array by
  assigning a new value to a specific index. */

const animals = ["Dog", "Cat", "Elephant"];
animals[1] = "Tiger";
console.log(animals); // Output: ["Dog", "Tiger", "Elephant"]

// You can also add new elements by assigning values to indices beyond the current length of the array:

animals[3] = "Lion";
console.log(animals); // Output: ["Dog", "Tiger", "Elephant", "Lion"]

/*
# Common Array Methods: JavaScript provides many built-in methods to manipulate arrays.

1. push(): Adds one or more elements to the end of an array. */

const num = [1, 2, 3, 4];

console.log(`Before push numbers = ${num}`);
num.push(5);
console.log(`After push numbers = ${num}`);


const bike = ["Activa", "Honda", "Avenger"];

console.log(`Before push bikes = ${bike}`);
bike.push("Pulsar");
console.log(`After push bikes = ${bike}`);
console.log(typeof(bike));


// 2. pop(): Removes the last element from an array and returns it.

const num1 = [1, 2, 3];
const last = num1.pop();  // Removes 3
console.log(last);     // Output: 3
console.log(num1);  // Output: [1, 2]


const bikes = ["Activa", "Honda", "Avenger"];
console.log(`Before pop = ${bikes}`);
bikes.pop("Pulsar");
console.log(`After pop = ${bikes}`);

// 3. shift(): Removes the first element from an array and shifts all other elements to a lower index.

const num2 = [10, 20, 30, 40];
console.log(num2);    // Before shift Output: [ 10, 20, 30, 40 ]
num2.shift();
console.log(num2);    // After shift Output: [ 20, 30, 40 ]

// const color1 = ["red", "black", "blue"];
