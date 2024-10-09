/*
# Class
-> In JavaScript, classes are a blueprint for creating objects. They are a part of the Object-Oriented Programming
   (OOP) paradigm, which helps to structure your code in a more organized and reusable way. JavaScript classes
   were introduced in ES6 as syntactical sugar over JavaScript’s existing prototype-based inheritance.

-> In JavaScript, classes are the special type of functions. We can define the class just like
   function declarations and function expressions.


* In JavaScript, classes can be created using two main approaches: class declarations and class expressions.
  Both ways are used to define classes, but there are some subtle differences between them, especially in terms
  of how they are hoisted and named.

Let’s dive into both:

1. Class Declaration
-> A class declaration defines a class with the class keyword, followed by the class name. Class declarations
   are not hoisted, meaning you need to define the class before you can use it.

-> A class can be defined by using a class declaration. A class keyword is used to declare a class with any 
   particular name. According to JavaScript naming conventions, the name of the class always starts with an 
   uppercase letter.
*/

class Employee {
  // Constructor is called when a new object is created from this class
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  // Method
  details() {
    return `${this.name} your employee id is ${this.id}.`;
  }
}

const emp = new Employee("Rohit", 3337); // Creating an instance of the Employee class

console.log(emp.details()); // Output: Rohit your employee id is 3337.

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  info() {
    return `The ${this.brand} car highest speed is ${this.speed}`;
  }
}

const car = new Car("Tata", "200/kmph");

console.log(car.info());
