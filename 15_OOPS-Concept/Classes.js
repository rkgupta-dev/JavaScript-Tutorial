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

/*
Key Points Class Declaration:
Named:- In a class declaration, the class has a name (e.g., Rectangle).

Not hoisted:- Unlike function declarations, class declarations are not hoisted. 
              You cannot use the class before it’s declared.
*/

// Uncaught ReferenceError: Cannot access 'Rectangle' before initialization
// const rect = new Rectangle(10, 5);  // uncomment and get above error

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

/*------------------------------------------------------------------------------------------------------------
2. Class Expression
-> A class expression is another way to define a class. It can be either named or anonymous. Just like function
   expressions, class expressions allow for more flexible naming and can be defined inline.

-> Another way to define a class is by using a class expression. Here, it is not mandatory to assign the name of
   the class. So, the class expression can be named or unnamed. The class expression allows us to fetch the class
   name. However, this will not be possible with class declaration.
*/

// i. Anonymous Class Expression (Unnamed Class Expression)

const laptop = class {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  getInfo(){
    return `This ${this.brand} laptop ${this.color} in color.`
  }
};

const info = new laptop("Lenovo", "white");

console.log(info.getInfo());

// ii. Named Class Expression (Unnamed Class Expression)

const Rectangle1 = class Rect {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }
}

const area = new Rectangle1(5, 10);

console.log(area.getArea());