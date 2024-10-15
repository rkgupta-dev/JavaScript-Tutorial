/*
## What is constructor?
-> In JavaScript, a constructor is a special method used in classes to initialize objects 
   when they are created. It’s part of the class syntax and is called automatically when an 
   instance of the class is instantiated using the new keyword.

*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display person's information
  details() {
    return `${this.name} is ${this.age} years old`;
  }
}

const person1 = new Person("Rohit", 26);

console.log(person1.details());


// You can also have default values in the constructor:

class Car {
    constructor(brand = 'Tata', color = 'Black'){
        this.brand = brand;
        this.color = color;
    }

    config(){
        return `The ${this.brand} car is ${this.color}`;
    }
}

const car1 = new Car();

console.log(car1.config());


/*
Key Points:
1. The constructor is a method that is automatically called when a new instance of a class is created.
2. You can pass arguments to the constructor to initialize the instance’s properties.
3. A class can only have one constructor. If you try to define more than one, it will result in an error.
4. The new keyword is used to create an instance of the class and invoke the constructor.
*/
