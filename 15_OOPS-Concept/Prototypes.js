/*
## What is prototype?
-> JavaScript is a prototype-based language that facilitates the objects to acquire properties 
   and features from one another. Here, each object contains a prototype object.

-> In JavaScript, whenever a function is created the prototype property is added to that function 
   automatically. This property is a prototype object that holds a constructor property.

-> When you create an object or a funciton, Javascript gives it a hidden link to another object 
   called its prototype. This prototype object can have properties and methods that all objects
   created from the same blueprint can access.

#  Syntax
-> ClassName.prototype.methodName  

1. Understanding Prototypes
-> In JavaScript, when you create an object or a function, a prototype is automatically assigned to it. 
   This prototype object can be used to attach methods and properties that all instances of that object 
   or function can share.

*/

function Addition(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Addition.prototype.add = function () {
  const sum = this.num1 + this.num2;
  return `The sum of ${this.num1} and ${this.num2} = ${sum} `;
};

const first = new Addition(24, 6);

console.log(first.add()); // Output: The sum of 24 and 6 = 30

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.info = function () {
  return `Hello, My name ${this.name} & i am ${this.age}`;
};

const person1 = new Person("Shilton", 50);

console.log(person1.info());

/*
2. Prototype Chain
-> In JavaScript, each object contains a prototype object that acquires properties and methods from it.
   Again an object's prototype object may contain a prototype object that also acquires properties and methods,
   and so on. It can be seen as prototype chaining.

-> The prototype chain in JavaScript is a fundamental concept that explains how JavaScript objects inherit
   properties and methods from other objects. Think of it as a chain of objects, where each object has a link
   to another object (its prototype), and this chain continues until you reach the top-level object, 
   which is Object.prototype.
*/

// Define a constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} make a sound`); // Output: Dog make a sound
};

const animal1 = new Animal("Dog");
animal1.speak();

// Define a second constructor function
function Dog(name) {
  Animal.call(this, name); // Inherit the name property from Animal
}

// Set the prototype of Dog to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log(`${this.name} bark!`);
};

const myDog = new Dog("Puppy");

myDog.bark(); // Output: Puppy bark!
myDog.speak(); // Output: Puppy make a sound
