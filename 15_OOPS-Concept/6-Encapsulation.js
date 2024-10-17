/*
## What is Encapsulation?
-> Encapsulation in JavaScript is a core concept of object-oriented programming (OOP) that involves
   bundling data (variables) and methods (functions) that operate on the data into a single unit, 
   usually a class. It restricts direct access to some of the object's components, which is important
   for data protection and controlling how data is modified.
   
-> The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on
   that data. It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -

## In JavaScript, encapsulation is often achieved through:
1. Using classes to group related data and methods.
2. Private fields and methods, which are typically hidden from outside access, can now be created 
   using the # symbol or closures.  

1. Using classes for encapsulation:                                                                      */

class Car {
    constructor(brand, model) {
        this.brand = brand; // Public property
        this.model = model; // Public property
    }

    // Public method
    displayDetails() {
        return `${this.brand} ${this.model}`;
    }
}

const myCar = new Car("Tata", "Safari");
console.log(myCar.displayDetails()); // Output: Tata Safari

/*
2. Encapsulation with private fields (ES6+ feature):
-> Private fields and methods can be declared using the # symbol. They are not accessible outside the class,
   which provides true encapsulation.                   */

   class Car1 {
    #brand;
    #model;

    constructor(brand, model) {
        this.#brand = brand;  // Private field
        this.#model = model;  // Private field
    }

    // Public method to access private fields
    displayDetails() {
        return `${this.#brand} ${this.#model}`;
    }
}

const myCar1 = new Car1("Toyota", "Camry");
console.log(myCar1.displayDetails());  // Output: Toyota Camry
// console.log(myCar1.#brand);  // Error: Private field '#brand' must be declared in an enclosing class

/*
3. Encapsulation using closures:
-> Another way to achieve encapsulation is by using closures to keep data private.              */

function createCar(brand, model) {
    let _brand = brand;  // Private variable
    let _model = model;  // Private variable

    return {
        // Public method to access private variables
        displayDetails() {
            return `${_brand} ${_model}`;
        }
    };
}

const myCar2 = createCar("Honda", "Shine");
console.log(myCar2.displayDetails());  // Output: Honda Shine
// console.log(myCar2._brand);  // Undefined (cannot access private variable)
