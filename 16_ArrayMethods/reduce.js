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

let max = numbers.reduce((acc, current) => (current > acc ? current : acc), numbers[0]);
console.log("Maxmium= " + max);

