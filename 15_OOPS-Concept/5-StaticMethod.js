/*
## What is static method?
-> The JavaScript provides static methods that belong to the class instead of an instance of that class. 
   So, an instance is not required to call the static method. These methods are called directly on the class itself.

-> In JavaScript, static methods are methods defined on the class itself, rather than on instances of the class.
   These methods are called directly on the class (or constructor function) without the need to instantiate an object.


## Points to remember:
1. The static keyword is used to declare a static method.
2. The static method can be of any name.
3. A class can contain more than one static method.
4. If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
5. The static method can be used to create utility functions.
6. We can use this keyword to call a static method within another static method.
7. We cannot use this keyword directly to call a static method within the non-static method. In such case,
   we can call the static method either using the class name or as the property of the constructor.

1. Defining a Static Method
-> Define a static method, the static keyword is used before the method definition.
 */

class Driver {
  drive1(name, model) {
    return `${name} drive ${model} car.`;
  }

  static drive2(name, model) {
    return `${name} drive ${model} car.`;
  }
}

const d1 = new Driver();
console.log(d1.drive1("Rohit", "Tata Harrier")); // Output: Rohit drive Tata Harrier car.

// if we use static method then access directly like below
console.log(Driver.drive2("Akhil", "Benz")); // Output: Akhil drive Benz car.

class Calculator {
  // Static method
  static add(a, b) {
    return a + b;
  }

  // Instance method
  subtract(a, b) {
    return a - b;
  }
}

// Call static method directly on the class
console.log(Calculator.add(5, 3)); // Output: 8

// Cannot call a static method on an instance
const calc = new Calculator();
// console.log(calc.add(5, 3)); // Error: calc.add is not a function

// Call instance method on the object
console.log(calc.subtract(5, 3)); // Output: 2

/*
2. When to Use Static Methods
-> Static methods are useful for operations that are related to the class but don’t need to access or modify
   any specific instance data. */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Static method to compare two users by age
  static compareAge(user1, user2) {
    return `The difference age b/w ${user1.name} & ${user2.name} = ${
      user1.age - user2.age
    }`;
  }
}

const user1 = new User("Rohit", 26);
const user2 = new User("Nikhil", 10);

// Compare users by age using static method
console.log(User.compareAge(user1, user2));

/*
3. Static Methods in Constructor Functions
-> Static methods can also be added to constructor functions (older JavaScript syntax) by assigning them
   directly to the constructor. */

function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a static method
Car.honk = function () {
  return "Beep beep!";
};

const myCar = new Car("Toyota", "Corolla");

// Call the static method on the constructor
console.log(Car.honk()); // Output: "Beep beep!"

// Cannot call static method on an instance
// console.log(myCar.honk()); // Error: myCar.honk is not a function

/*
4. Static Methods and Inheritance
-> Static methods are inherited by subclasses. If you create a class that extends another class, 
   the subclass will inherit the static methods of the parent class.*/

class Animal {
  static isAnimal(obj) {
    return obj instanceof Animal;
  }
}

class Dog extends Animal {}

// Call static method on subclass
const dog = new Dog();
console.log(Dog.isAnimal(dog)); // Output: true

/*----
5. Differences Between Static and Instance Methods
->
          Static Methods	                                    Instance Methods
i.  Called on the class itself	                   i. Called on instances of the class
ii. Cannot access instance properties	             ii. Can access and modify instance properties
iii. Useful for utility or helper functions	       iii. Used to operate on the instance’s data

6. Real-World Example: Static Methods in Built-in Objects
-> JavaScript has several built-in objects that use static methods, like Math and Object.

*/

// Math static methods
console.log(Math.max(10, 20)); // Output: 20
console.log(Math.sqrt(16)); // Output: 4

// Object static methods
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // Output: ['a', 'b']
console.log(Object.values(obj)); // Output: [1, 2]

/*
# Summary
1. Static methods are defined on the class itself and not on instances.
2. They are called using the class name, and not through object instances.
3. Static methods are useful for utility functions, helper methods, and factory functions.
4. Static methods can be inherited by subclasses.
*/
