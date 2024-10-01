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
console.log(typeof bike);

// 2. pop(): Removes the last element from an array and returns it.

const num1 = [1, 2, 3];
const last = num1.pop(); // Removes 3
console.log(last); // Output: 3
console.log(num1); // Output: [1, 2]

const bikes = ["Activa", "Honda", "Avenger"];
console.log(`Before pop = ${bikes}`);
bikes.pop("Pulsar");
console.log(`After pop = ${bikes}`);

// 3. shift(): Removes the first element from an array and shifts all other elements to a lower index.

const num2 = [10, 20, 30, 40];
console.log(num2); // Before shift Output: [ 10, 20, 30, 40 ]
num2.shift();
console.log(num2); // After shift Output: [ 20, 30, 40 ]

const color1 = ["red", "black", "blue"];
console.log(color1); // Before shift Output: [ 'red', 'black', 'blue' ]
color1.shift();
console.log(color1); // After shift Output: [ 'black', 'blue' ]

// 4. unshift(): Adds one or more elements to the beginning of an array.

const name = ["Akhil", "Prem", "Raja"];
console.log(name);
name.unshift("Rohit");
console.log(name);

// 5. length: Returns the number of elements in an array.

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);

// 6. splice(): Adds or removes elements at a specific index.
// * To remove elements:

const num3 = [1, 2, 3, 4, 5];

num3.splice(1, 2);

console.log(num3);

// * To add elements:

const num4 = [1, 2, 5, 6];

num4.splice(2, 0, 3, 4);

console.log(num4);

// 7. slice(): Returns a new array with selected elements, without modifying the original array.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
const citrus = fruits.slice(2, 4);   // Takes elements at index 2 and 3
console.log(citrus);                 // Output: ["Mango", "Orange"]
console.log(fruits);                 // Output: [ 'Apple', 'Banana', 'Mango', 'Orange', 'Kiwi' ]


// 8. concat(): Merges two or more arrays into a new array.

const arrA = [10, 20, 30];
const arrB = [40, 50, 60];

const add = arrA.concat(arrB);

console.log(add);


// 9. indexOf() and includes(): Find elements in the array.
// * indexOf(): Returns the index of the first occurrence of a value, or -1 if the value is not found.

const employee = ["Nikhil", "Akhil", "Nitya", "Prem"];
console.log(employee.indexOf("Nitya"));  // Output: 2
console.log(employee.indexOf("Jitu"));  // Output: -1

// * includes(): Checks if an array contains a specific value.

const fruit1 = ["Apple", "Banana", "Mango"];
console.log(fruit1.includes("Banana"));  // Output: true
console.log(fruit1.includes("Orange"));  // Output: false


// 10. join(): Combines all elements of an array into a string.

const words = ["Hello", "Rohit", "Welcome"];

const sentance = words.join(" ");

console.log(sentance);           // Output: Hello Rohit We
console.log(typeof(sentance));   // Output: string


// 11. reverse(): Reverses the order of the elements in an array.

const array = [1, 2, 3, 4, 5, 6];

array.reverse();

console.log(array);     // Output: [ 6, 5, 4, 3, 2, 1 ]


// 12. sort(): Sorts the elements of an array.
// * For numbers:

const number1 = [1, 4, 5, 2, 6, 3];

number1.sort();        // Default is lexicographical sorting

console.log(`Shorted array = ${number1}`);     // Output: Shorted array = 1,2,3,4,5,6

// For custom sorting:

const number2 = [4, 2, 5, 1, 3];
number2.sort((a, b) => a - b);  // Sorts in ascending order
console.log(number2);  // Output: [1, 2, 3, 4, 5]


/*
#  Looping Through an Array
-> There are several ways to loop through an array in JavaScript:

1. for Loop  */

const Array1 = [1, 2, 3, 4];

for(let i = 0; i < Array1.length; i++){
  console.log(Array1[i]);
}

console.log("---------");

// 2. forEach() Method

const Array2 = [1, 2, 3, 4, 5];

Array2.forEach(function(arr){
  console.log(arr);
});

// 3. for...of Loop

const Array3 = [10, 20, 30, 40];

for(const arr of Array3){
  console.log(arr);
}


// # Multidimensional Arrays: An array can contain other arrays, which is referred to as a multidimensional array.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]);  // Output: 5 (element at row 2, column 2)





//-----------------------------------Questions Practice---------------------------------

arr1 = [1, 2, 3, 4];
arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2); // Output: false, because in arr1 & arr2 same element but arr1 & arr2 store in different addresses of memory.




/*------------------------------------------------------------------------------------------

Summary of Arrays in JavaScript
* Arrays are used to store multiple values in a single variable.
* Arrays are indexed starting from 0, and can contain values of different data types.
* Arrays provide numerous methods like push(), pop(), shift(), unshift(), splice(), slice(), 
  and more for adding, removing, and manipulating elements.
* Arrays are dynamic and can grow or shrink as needed.
* You can loop through arrays using for loops, forEach(), or for...of.  
*/