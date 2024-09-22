/*
# What is Object?
-> In JavaScript, an object is a collection of properties, where each property is a key-value pair.
   Objects allow you to store, access, and manipulate structured data in an organized manner. 
   JavaScript objects are dynamic, meaning their properties can be added, changed, or removed at runtime.

#
*/
// -------------------------------------Coding Section--------------------------------------

/*
# Creating an Object
-> There are several ways to create objects in JavaScript:

1. Object Literal Syntax
-> The simplest way to create an object is using the object literal syntax, where key-value pairs are enclosed 
   in curly braces {}. */

const person = {
  name: "Rohit",
  age: 26,
  employeeId: "JSR333",
  address: "Bairiya",
};

console.log(person); //Output: { name: 'Rohit', age: 26, employeeId: 'JSR333', address: 'Bairiya' }
console.log(person.age); //Output: Bairiya

const person1 = {
  name: "Rohit",
  age: 26,
  employeeId: "JSR333",
  address: "Bairiya",
  greet: function () {
    console.log(`Hello, My name is ${this.name}`);
    console.log(`Hello, I am from ${this.address}`);
  },
};

console.log(person1); //Output: { name: 'Rohit', age: 26, employeeId: 'JSR333', address: 'Bairiya' }

console.log(person1.address); //Output: Bairiya

person1.greet();
