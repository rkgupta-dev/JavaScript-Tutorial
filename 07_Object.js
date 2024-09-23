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
  greet: function () {
    console.log(`Hello, My name is ${this.name}`);
    console.log(`Hello, I am from ${this.address}`);
  },
};

console.log(person); //Output: { name: 'Rohit', age: 26, employeeId: 'JSR333', address: 'Bairiya' }
console.log(person.age); //Output: Bairiya
person.greet(); // function greet under the object.


const person1 = {
  name: "Rohit",
  age: 26,
  employeeId: "JSR333",
  address: "Bairiya",
};

console.log(person1); //Output: { name: 'Rohit', age: 26, employeeId: 'JSR333', address: 'Bairiya' }

// You can access object properties in two ways:
console.log(person1.address); //Output: Bairiya
console.log(person1["address"]); //Output: Bairiya


const bikes = {
  owner: "Rohit Kr. Gupta",
  model: "Passion PRO",
  color: "Black",
};

function greeting(){
  console.log(`Hello Welcome to Ontrack Service Point.`);
  console.log(`Mr. ${person.name} your ${bikes.model} deliver on Monday after servicing.`)
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


const user = {};  // create a normal object
user.name = "Rohit";
user.email = "rohitkr@gmail.com";
user.email = "rkgupta@gmail.com";  // You can also update or properties

// delete user.email; //You can also delete any properties 

console.log(user); //Output: { name: 'Rohit', email: 'rohitkr@gmail.com' }
console.log(user.email);  //Output: rohitkr@gmail.com

/*
3. Using a Constructor Function: A constructor function allows you to create multiple objects 
   with similar properties and methods. */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
     console.log(`Hello, My name is ${this.name} & i am ${this.age} years old.`);
  }
}

const Person1 = new Person("Rohit", 26);
const Person2 = new Person("Saro", 50);

console.log(Person1.name)

Person1.greet();
Person2.greet();