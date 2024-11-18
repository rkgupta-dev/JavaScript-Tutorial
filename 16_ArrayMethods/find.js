/*
# find()
-> Returns the first element that satisfies the provided testing function.   */

const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2
