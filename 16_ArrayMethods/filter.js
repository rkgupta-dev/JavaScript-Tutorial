/*
## filter()
filter()
Purpose: Creates a new array with elements that pass a certain condition.
Use case: When you want to keep only the items that meet certain criteria.

1. Filtering out numbers greater than 10.  */

let number = [5, 12, 8, 20, 7];

let filtredNumber = number.filter((num) => num > 10);
console.log(filtredNumber);

/*
2. Filtering Even/Odd Numbers from an Array
-> You can use filter() to create a new array containing only the even/odd numbers from an existing array. */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(`Even number in array ${evenNumber}`);

let oddNumber = numbers.filter((num) => num % 2 !== 0);
console.log(`Odd number in array ${oddNumber}`);

/*
3. Filtering Out Specific Values
-> You can filter out specific values from an array, such as removing all occurrences of a particular number. */

let numbers1 = [1, 2, 3, 4, 2, 5, 2, 6];

let removeSpecificNumber = numbers1.filter((num) => num !== 2);
console.log(removeSpecificNumber);

/*
4. Filtering Strings by Length
-> You can filter an array of strings to include only those that meet a certain length requirement.  */

let words = ["apple", "banana", "kiwi", "grape", "blueberry"];

let longWord = words.filter((word) => word.length > 5);
console.log(longWord);

/*
5. Filtering Objects Based on a Property
-> You can filter an array of objects based on a specific property value.  */

let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

let costlyProduct = products.filter((product) => product.price > 500);

console.log(costlyProduct);

/*
6. Filtering Out Falsy Values
-> You can filter out any falsy values from an array, such as null, undefined, 0, NaN, "", or false.  */

let mixedArray = [0, 1, false, 2, "", 3, null, 4, undefined, 5];
let truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues); // Output: [1, 2, 3, 4, 5]

/*
7. Filtering by Age in an Array of Objects
-> You can filter users based on their age.  */

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 20 },
];

let adults = users.filter((user) => user.age > 18);
console.log(adults);

/*
8. Filtering Based on Multiple Criteria
-> You can combine multiple conditions to filter an array.  */

let people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "New York" },
];

let findPeople = people.filter(
  (person) => person.age > 28 && person.city === "New York"
);
console.log(findPeople);

/*
9. Chaining filter() with Other Array Methods
-> You can chain filter() with other array methods like map().   */

let numbers2 = [1, 2, 3, 4, 5, 6];

let squareOfEvenNumber = numbers2
  .filter((num) => num % 2 === 0)
  .map((num) => num * num);
console.log(squareOfEvenNumber);

let squareOfOddNumber = numbers2
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num);
console.log(squareOfOddNumber);

/*
10. Filtering Unique Values from an Array
-> You can use filter() in combination with indexOf() to filter out duplicate values.  */

let numbers3 = [1, 2, 3, 1, 2, 4, 5];
let uniqueNumbers = numbers3.filter(
  (num, index) => numbers3.indexOf(num) === index
);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

let numbers4 = [10, 20, 30, 10, 20, 40, 50];
let unqNumbers = numbers4.filter((num, index) => numbers4.indexOf(num) === index);
console.log(unqNumbers);