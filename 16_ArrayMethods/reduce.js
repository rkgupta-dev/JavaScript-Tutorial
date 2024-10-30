/*
## reduce()
Purpose: Reduces an array to a single value by accumulating a result as it iterates through the array.
Use case: When you want to calculate a sum, product, or any other aggregated value.

1. Sum of All Numbers in an Array
-> Using reduce() to find the sum of all numbers in an array.  */

let number = [5, 10, 15];

let total = number.reduce((sum, num) => sum + num, 0);
console.log("Total= " + total);

/*
2. Finding the Maximum Value in an Array
-> You can use reduce() to find the maximum value in an array.  */

let numbers = [5, 10, 3, 7, 8];

let max = numbers.reduce(
  (acc, current) => (current > acc ? current : acc),
  numbers[0]
);
console.log("Maxmium= " + max);

/*
3. Counting Occurrences of Items in an Array
-> Using reduce() to count the occurrences of each item in an array.   */

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

/*
4. Flattening an Array of Arrays
-> You can flatten a nested array into a single array using reduce().  */

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let flatted = nestedArray.reduce((acc, current) => acc.concat(current), []);
console.log(flatted);

/*
5. Calculating the Product of Numbers in an Array
-> Using reduce() to calculate the product of all numbers in an array.   */

let number1 = [2, 3, 4];

let product = number1.reduce((acc, current) => acc * current, 1);
console.log(product);

/*
6. Grouping Items by Property in an Array of Objects
-> Using reduce() to group an array of objects by a specific property.   */

let people = [
  { name: "Rohit", city: "Ranchi" },
  { name: "Shilton", city: "Bengalore" },
  { name: "Charlie", city: "New York" },
  { name: "Dave", city: "San Francisco" },
];

let groupedByCity = people.reduce((acc, person) => {
  acc[person.city] = acc[person.city] || [];
  acc[person.city].push(person.name);
  return acc;
}, {});

console.log(groupedByCity);

/*
7. Removing Duplicate Values in an Array
-> Using reduce() to remove duplicates from an array.   */

