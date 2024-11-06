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
-> You can use map() to transform each string in an array to uppercase. */

const fruits = ["apple", "banana", "cherry"];
const upperCase = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCase);
// Output: [ 'APPLE', 'BANANA', 'CHERRY' ]

/*
3. Extracting Specific Properties from an Array of Objects
-> Suppose you have an array of objects, and you want to extract a specific property from each object.  */

const user = [
  { name: "Rohit", surname: "Gupta", age: "26" },
  { name: "Rajeev", surname: "Mishra", age: "24" },
  { name: "Akhil", surname: "Raj", age: "22" },
];

const getName = user.map((name) => name.name);
console.log(getName);
// Output: [ 'Rohit', 'Rajeev', 'Akhil' ]

const fullName = user.map((fname) => fname.name + " " + fname.surname);
console.log(fullName);

/*
4. Calculating the Length of Each String in an Array
-> You can calculate the length of each string in an array.  */

let words = ["hello", "world", "JavaScript"];

let lengths = words.map((word) => word.length);
console.log(lengths);

/*
5. Doubling Numbers in an Array
-> You can use map() to double each number in an array.   */

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map((num) => num * 2);
console.log(double);

/*
6. Converting an Array of Objects to a Different Structure
-> You can transform an array of objects into a new array with a different structure. */

let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

let productInfo = products.map((product) => ({
  productId: product.id,
  productName: product.name,
  productPrice: `${product.price}`,
}));

console.log(productInfo);

/*
7. Chaining map() with Other Array Methods
-> You can chain map() with other array methods like filter(). */

let number = [1, 2, 3, 4, 5, 6];

let squareEvenNumber = number
  .filter((num) => num % 2 === 0)
  .map((num) => num * num);

console.log(squareEvenNumber);

let squareOddNumber = number
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num);

console.log(squareOddNumber);

/*
8. Using map() to Flatten an Array of Arrays
-> You can flatten a nested array using map() combined with flat(). */

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattened = nestedArray.map((arr) => arr).flat();
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

/*
9. Creating an Array of Random Numbers
-> You can create an array of random numbers using map().  */

let randomNumbers = Array.from({ length: 5 }).map(() =>
  Math.floor(Math.random() * 100)
);
console.log(randomNumbers); // Output: Random array of 5 numbers between 0 and 99

/*
10. Formatting Dates
-> If you have an array of date strings and want to format them in a specific way, you can use map(). */

let dates = ["2023-01-01", "2023-02-15", "2023-03-30"];
let formattedDates = dates.map((date) => new Date(date).toLocaleDateString());
console.log(formattedDates); // Output: [formatted dates based on local settings]
