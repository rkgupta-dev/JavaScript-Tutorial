/*
# Object:- A collection of key-value pairs where keys are strings (or symbols) and values can be any data type.
Key Points:-
* Objects are collections of key-value pairs.
* Keys are strings (or Symbols), and values can be of any type.
* Used to represent real-world entities with properties.
* Access properties using dot notation (obj.key) or bracket notation (obj['key']).           */

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  speed: "200kmph",
};
console.log(car.brand); // Output: Tesla
car.color = "red"; // Adding a new property
console.log(car); // Output: { brand: 'Tesla', model: 'Model 3', year: 2023, color: 'red' }
console.log(car.speed);

//---------------------------------------------------------------------------------------------------

const person = {
  name: "Rohit",
  age: 30,
  isEmployed: true,
};

// 1. Accessing Object Properties
// Dot notation:-

console.log(person.name); // "Rohit"
