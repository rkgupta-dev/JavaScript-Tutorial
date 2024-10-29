/*
## map()
Purpose: Creates a new array by transforming each element in the original array.
Use case: When you want to apply the same operation on every item in an array.  

1. Adding "!" to each fruit name.                                    */

let fruit = ["apple", "banana", "cherry"];
let newFruits = fruit.map((fruit) => fruit + "!");
console.log(newFruits);
// Output: ["apple!", "banana!", "cherry!"]

/*
2. Converting an Array of Strings to Uppercase
You can use map() to transform each string in an array to uppercase. */

const fruits = ["apple", "banana", "cherry"];
const upperCase = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCase);
// Output: [ 'APPLE', 'BANANA', 'CHERRY' ]

/*
3. Extracting Specific Properties from an Array of Objects
Suppose you have an array of objects, and you want to extract a specific property from each object.  */

const user = [
  { name: "Rohit", surname: "Gupta", age: "26" },
  { name: "Rajeev", surname: "Mishra", age: "24" },
  { name: "Akhil", surname: "Raj", age: "22" },
];

const getName = user.map((name) => name.name);
console.log(getName);
// Output: [ 'Rohit', 'Rajeev', 'Akhil' ]

const fullName = user.map((fname)=> fname.name +" "+ fname.surname);
console.log(fullName);