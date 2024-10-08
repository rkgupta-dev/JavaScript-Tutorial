/*
## OOPS CONCEPT
-> OOP (Object-Oriented Programming) in JavaScript is a programming paradigm that uses objects to represent
   real-world entities, allowing you to structure your code in a more modular, reusable, and maintainable way. 
   OOP revolves around the concept of objects and the use of methods to manipulate the data within these objects. 
   
1. Object
-> Objects: In JavaScript, an object is a collection of properties, where a property is an association between
   a name (or key) and a value. Objects can contain data (known as properties) and functionality (known as methods).  

-----------------------------------------------------------------------------------------------------------------*/

// 1. Basic Object Literal

const Car = {
  brand: "Tata",
  color: "white",
  start: function () {
    console.log(`${this.brand} is started.`);
  },
};

console.log(Car.brand); // Output: Tata

Car.start(); // Output: Tata is started.

const person = {
  firstName: "Rohit",
  lastName: "Gupta",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

console.log(person.firstName); // Output: Rohit
console.log(person.lastName); // Output: Gupta

person.fullName(); // Output: My full name is Rohit Gupta

// 2. Object with Nested Objects

const smartPhone = {
  brand: "Apple",
  model: "Iphone 13",
  specification: {
    memory: {
      storage: "128GB",
      ram: "4GB",
    },

    camera: {
      front: "12MP",
      rear: "32MP",
    },
  },
};

console.log(smartPhone.specification);

// Output:
//  {
//   memory: { storage: '128GB', ram: '4GB' },
//   camera: { front: '12MP', rear: '32MP' }
//  }

console.log(smartPhone.specification.memory.storage); // Output: 128GB
console.log(smartPhone.specification.camera.front); // Output: 12MP

// 3. Object with Arrays

const student = {
  name: "Akhil",
  marks: ["Hindi-70", "Eng-80", "Math-94"],
  details: function () {
    return `${this.name} scored in final exam ${this.marks}`;
  },
};

console.log(student.details());

const students = {
  name: "Rohit",
  grades: [90, 85, 80, 75],
  avgGrade: function () {
    let sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  },
};

console.log(students.avgGrade());

// 4. Factory Function to Create Objects

function createBook(title, author) {
  return {
    title: title,
    author: author,
    getDetails: function () {
      return `${this.title} written by ${this.author}`;
    },
  };
}

const Book1 = createBook("Don Quixote", "Miguel de Cervantes");

const Book2 = createBook("The Adventures of Tom Sawyer", "Mark Twain");

console.log(Book1.getDetails());
console.log(Book2.getDetails());

// 5. Object with Dynamic Properties

const user = {
  name: "Nikhil",
  age: 10,
};

user.email = "nikhilraj@123gmail.com"; // Adding new property
console.log(user.email); // Output: nikhilraj@123gmail.com

delete user.age; // Deleting property
console.log(user.age); // Output: undefined

// 6. Object with Getters and Setters

const person1 = {
  firstName: "Rajeev",
  lastName: "Mishra",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person1.fullName); // Output: Rajeev Mishra

person1.fullName = "Rohit Kumar"; // assign

console.log(person1.fullName); // Output: Rohit Kumar

// 7. Using Object.create()

const fruit = {
  fruitName: "Mango",
  taste: "Sweet",
  details: function () {
    return `${this.fruitName} is very ${this.taste}.`;
  },
};

console.log(fruit.details()); // Output: Mango is very Sweet.

const more = Object.create(fruit); // created a object using Object.create() fn

more.fruitName = "Apple"; // assign Apple in more.fruitName

console.log(more.fruitName); // Output: Apple

console.log(more.details()); // Output: Apple is very Sweet.

// 8. Object with Methods Referencing this

