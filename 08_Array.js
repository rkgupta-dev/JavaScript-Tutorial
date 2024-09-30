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
console.log(numbers);