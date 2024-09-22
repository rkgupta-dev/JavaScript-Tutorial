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


// function greet under the object.
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
console.log(person1["address"]); //Output: Bairiya (also access like this (person1["address"])

person1.greet();


const bikes = {
  owner: "Rohit Kr. Gupta",
  model: "Passion PRO",
  color: "Black",
};

function greeting(){
  console.log(`Hello Welcome to Ontrack Service Point.`);
  console.log(`Mr. ${bikes.owner} your ${bikes.model} deliver on Monday after servicing.`)
}

greeting();


/*
2. Using the new Object() Constructor: You can also create an object using the new Object() constructor.*/

const car = new Object();

car.brand = "Benz";
car.color = "White";
car.speed = "200 Kmph";

console.log(car.brand);
console.log(`The speed of ${car.brand} is ${car.speed}`);

car.rate = "5 million";
console.log(car.rate);
