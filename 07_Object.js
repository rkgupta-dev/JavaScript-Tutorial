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

function greeting() {
  console.log(`Hello Welcome to Ontrack Service Point.`);
  console.log(
    `Mr. ${person.name} your ${bikes.model} deliver on Monday after servicing.`
  );
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

const user = {}; // create a normal object
user.name = "Rohit";
user.email = "rohitkr@gmail.com";
user.email = "rkgupta@gmail.com"; // You can also update or properties

// delete user.email; //You can also delete any properties

console.log(user); //Output: { name: 'Rohit', email: 'rohitkr@gmail.com' }
console.log(user.email); //Output: rohitkr@gmail.com

/*
3. Using a Constructor Function: A constructor function allows you to create multiple objects 
   with similar properties and methods. */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, My name is ${this.name} & i am ${this.age} years old.`);
  };
}

const Person1 = new Person("Rohit", 26);
const Person2 = new Person("Saro", 50);

console.log(Person1.name);

Person1.greet();
Person2.greet();

/*
4. Accessing and Modifying Object Properties 
i. Dot Notation: */

const obj = {
  name: "Rohit Kumar Gupta",
  age: 50,
};

console.log(obj.name); // Access property
console.log(obj.age); // Access property
obj.age = 26; // Modify property
console.log(obj.age); // After Modify Output

/*
ii. Bracket Notation: You can also access properties using bracket notation, 
    especially when property names are dynamic or contain special characters. */

const obj1 = {
  name: "Jitendra",
  age: 50,
};

console.log(obj1["name"]); // Output: John
obj1["age"] = 31; // Modify property
console.log(obj1["age"]); // Output after modify 31

// 5. Nested Objects: An object can contain another object as a property, creating a nested object.

const student = {
  name: "Nikhil",
  address: {
    city: "Ranchi",
    pincode: 815314,
  },
};

let output = student.address.city;
console.log(output);

console.log(student.address.pincode); // you can also console log like this.

/*
6. Object Methods: Objects can contain functions as values, which are called methods.
   Methods allow you to add behavior to objects. */

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(45, 5)); // Output: 50
console.log(calculator.subtract(45, 5)); // Output: 40

// 7. Looping through an Object: You can loop through an object’s properties using a for...in loop.

const persons = {
  name: "Nikhil",
  age: 12,
  city: "Bangalore",
};

for (let key in persons) {
  console.log(`${key} : ${persons[key]}`);
}

// 8. Common Object Methods: JavaScript provides some built-in methods for working with objects.

const xyz = {
  name: "Akhil",
  age: 6,
  city: "Bengalore",
};

// i. Object.keys(): Returns an array of an object's keys.
console.log(Object.keys(xyz)); // Output: [ 'name', 'age', 'city' ]

// ii. Object.values(): Returns an array of an object's values.
console.log(Object.values(xyz)); // Output: [ 'Akhil', 6, 'Bengalore' ]

// iii. Object.entries(): Returns an array of key-value pairs.
console.log(Object.entries(xyz));
// Output: [ [ 'name', 'Akhil' ], [ 'age', 6 ], [ 'city', 'Bengalore' ] ]

/*
# More Concepts in JavaScript Objects
1. Prototypes and Inheritance: JavaScript uses prototypal inheritance. Every JavaScript object has a hidden
   property called __proto__ (or [[Prototype]]) that points to another object, called its prototype. */

const parent = {
  name: "Saro Devi",
  info: function () {
    console.log("Hello from parent Object.");
  },
};

const child = Object.create(parent);

child.info();

function Teacher(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Teacher.prototype.greets = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Creating an instance of Person
let teacher1 = new Teacher("Rohit", 25);
console.log(teacher1.greets()); // Output: "Hello, my name is Rohit and I am 30 years old."

let teacher2 = new Teacher("Avinash", 30);
console.log(teacher2.greets()); // Output: "Hello, my name is Avinash and I am 25 years old."

/*
2. this Keyword in Objects: The this keyword refers to the current object from which it is called.
   In object methods, this refers to the object itself. */

const Car = {
  brand: "Tata",
  model: "Harrier",
  getDetail: function () {
    return `${this.brand} ${this.model}`;
  },
};

console.log(Car.getDetail());

/*
3. Getters and Setters in JavaScript 
-> Getters and Setters are special methods in JavaScript that allow you
   to control how properties of an object are accessed and modified. They provide a way to implement computed
   properties or to validate input when updating a property.
i. Getters (get keyword) */

const p = {
  firstName: "Rohit",
  lastName: "Gupta",
  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(p.fullName);

/*
ii. Setters (set keyword) */

const p1 = {
  firstName: "Rohit",
  lastName: "Gupta",
  // Setter for fullName
  set fullName(value) {
    const parts = value.split("");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

p1.fullName = "Avinash Sharma";

console.log(p.firstName);
console.log(p.lastName);

//-----------------------------------Questions Practice---------------------------------
/*
1. Write a function to list the properties of a Javascript object. */

function ListOfProperty(laptop) {
  return Object.entries(laptop);
}

const laptop = {
  brand: "lenovo",
  color: "black",
  model: "ES-204",
};

console.log(ListOfProperty(laptop));

/*
2. Write a function to delete the roll no. property. Also print the object before or after
   deleting the property. */

function propItem(std) {
  return Object.entries(std);
}

let student1 = {
  name: "Divisha",
  class: "VI",
  rollno: "3",
};

console.log("Before Deletion:", propItem(student1));
delete student1.rollno;
console.log("After Deletion:", propItem(student1));

/*
3. Show the ways to access the property rollno of the above given object. */

student1.rollno = 5;

console.log(student1.rollno); // using Dot notation
console.log(student1["rollno"]); // using Bracket

/*
4. Write a function to display the reading status (i.e. display book name, author name and reading status) 
   of the following books. */

let library = [
  {
    autor: "Bill Gate",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    autor: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    autor: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];


library.forEach((obj) => {
  console.log(Object.values(obj));
})
console.log(Object.values(library));

/*
Write function that checks if a specific property exists in an object. */
let student2 = {
  name: "Akhil",
  age: 6,
  rollno: "7"
};

function hasProperty(key, value) {
  if (key.hasOwnProperty(value)) {
    return console.log(`${value} is available in the object.`);
  } else {
    return console.log(`${value} is NOT available in the object.`);
  }
}

hasProperty(student2, 'name');
hasProperty(student2, 'class');





/*-----------------------------------------------------------------------------------------
Summary
*An object is a collection of key-value pairs, where keys are strings (or symbols) and values can be
 anything (including other objects and functions).
*Objects can be created using object literals ({}), constructor functions, or the new Object() syntax.
*Methods are functions inside objects, allowing you to add behavior to your objects.
*JavaScript provides useful methods like Object.keys(), Object.values(), and Object.entries() to work
 with object properties.  */
