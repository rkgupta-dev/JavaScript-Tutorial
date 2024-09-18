/*
# What is Loops?
-> Loops in JavaScript are used to repeatedly execute a block of code as long as a specified condition is true.

# Types of Loops in JavaScript.
-> There are for types of JavaScript
1. for Loop
2. while Loop
3. do-while Loop
4. for-in Loop
5. for-of Loop
6. forEach Loop
*/

// -------------------------------------Coding Section--------------------------------------

// 1. for Loop: The for loop is the most commonly used loop. It repeats a block of code a specific number of times.
for (let i = 0; i <= 5; i++) {
  console.log("Rohit Kumar Gupta:", i);
}

/*
2. while Loop: The while loop continues to execute the block of code as long as the condition is true. 
   If the condition becomes false, the loop stops. */
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

/*
3. do...while Loop: The do...while loop is similar to the while loop, but it will always execute 
   the code block at least once before checking the condition. */

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

/*
 4. for...in Loop: The for...in loop is used to iterate over the properties of an object. 
    It loops through the keys (or properties) of an object, one by one.

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

let employee = { name: "Ram", age: 20, city: "Bengalore" };
for (let key in employee) {
  console.log(key + ": " + employee[key]);
}
// Output:
// name: Ram
// age: 20
// city: Bengalore

/*
5. for...of Loop: The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. 
   It loops through the values of the iterable, not the keys. 

   Syntax:
   for (variable of iterable) {
    // Code to be executed
   }
   */

let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


/*
6. forEach in JavaScript: forEach is a built-in array method in JavaScript that is used to iterate over 
the elements of an array and execute a provided function once for each element.

Syntax:
array.forEach(function(element, index, array) {
  // Code to execute for each element
});
element: The current element being processed in the array.
index: The index of the current element (optional).
array: The array that forEach is iterating over (optional).
*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});
// Output: 1, 2, 3, 4, 5

const bikes = ["Activa", "Dio", "Passion Pro", "Bullet", "Avenger"];

bikes.forEach(function(model){
  console.log(model);
})
// Output:
// Activa
// Dio
// Passion Pro
// Bullet
// Avenger


// Using Arrow Function

const mobiles = ["Redmi", "Oppo", "Vivo", "Iphone"];

mobiles.forEach( model => {
  console.log(model);
})

// Output: Redmi, Oppo, Vivo, Iphone


const mode = ["dark", "light"];

mode.forEach( modes => {
  console.log(modes);
})



/*-------------------------------------------------------------------------------------------

Summary:
for loop: Repeats a block of code a specific number of times.
while loop: Repeats as long as the condition is true.
do...while loop: Always runs at least once before checking the condition.
for...in loop: Iterates over the properties of an object.
for...of loop: Iterates over the values of iterable objects like arrays and strings.
Loops help automate repetitive tasks in JavaScript, making your code efficient and concise!
*/
