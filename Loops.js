/*
# What is Loops?
-> Loops in JavaScript are used to repeatedly execute a block of code as long as a specified condition is true.

# Types of Loops in JavaScript.
-> There are for types of JavaScript
1. for Loop
2. while Loop
3. do-while Loop
4. for-in Loop
*/

// -------------------------------------Coding Section--------------------------------------

// 1. for Loop: The for loop repeats a block of code a specific number of times, typically when the number of iterations is known in advance.

for (let i = 0; i <= 5; i++) {
  console.log("Rohit Kumar Gupta:", i);
}

// 2. while Loop: The while loop repeats a block of code as long as the condition remains true. It is used when the number of iterations is not known beforehand.

let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++;
}

let num = 0;
while (num < 5) {
  console.log("Num =", num);
  num++;
}

// 3. do...while Loop: The do...while loop is similar to the while loop, but it will always execute the code block at least once before checking the condition.

let number = 0;
do {
  console.log("Number is:", number);
  number++;
} while (number < 3);

let num1 = 1;
do {
  console.log("Num is:", num1);
  num1++;
} while (num1 <= 10);

// 4. for...in Loop: The for...in loop is used to iterate over the properties of an object (enumerable properties).
/*
Syntax
for (key in object) {
    // Code to be executed
}
*/

let student = { name: "Rohit", age: 26, city: "Ranchi" };
for (let key in student) {
  console.log(key + ": " + student[key]);
}
// Output:
// name: Rohit
// age: 26
// city: Ranchi


let employee ={name: "Ram", age: 20, city: "Bengalore"};
for(let key in employee){
    console.log(key + ": " + employee[key]);
}
// Output:
// name: Ram
// age: 20
// city: Bengalore












 /*-------------------------------------------------------------------------------------------
Summary:
for: Useful when you know how many times to loop.
while: Repeats while a condition is true, useful when the loop count is unknown.
do...while: Runs the block at least once before checking the condition.
for...in: Loops over object properties.

These looping structures help you perform repetitive tasks efficiently in JavaScript!
*/