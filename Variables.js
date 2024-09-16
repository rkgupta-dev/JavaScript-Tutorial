/*
# What is Variables?
-> Variables are containers for storing data or value.

# JavaScript variables can be declared in 4 ways:-
1. Automatically
   eg- price = 1;

2. Using Var
   eg- var price = 1;
   
3. Using let   
   eg- let price = 1;

4. Using const 
   eg- const price = 1; 
   
# Variables Rules
-> Variable names are case sensitive, "a" and "A" is different.

-> Only letters, digit, underscore (_) and $ is allowed. (not even space)

-> Names can also begin with $ and _

-> Reserved words cannot be variables names.

# let, const and var
var => Variable can be re-declared & updated. var global scope variable.

let => Variable cannot be re-declared but can be updated. let block scope variable.

const => Variable cannot be re-declared or updated. const block scope variable.

# Local Variable and Global Variable
Local Variable => In JavaScript local variable is declared inside block or function. It is accessible within function or block only.

Global Variable => In JavaScript global variable is declared outside block or function. It can be accessed from any block or function.
*/

// -------------------------------------Coding Section--------------------------------------

// price = 33;
// console.log(price);


// var price = 45;
// console.log(price);
var name = "Ram";
console.log(name);


let price1 = 50;
let price2 = 55;
let totalPrice = price1 + price2;
console.log(totalPrice);
let age = 25;
age = 26;  // You can change the value
console.log(age); // Output: 26


const price = 200;
const names = "Rohit Kumar";
console.log(price);
console.log(names);
// const city = "Bangaluru";
// city = "Ranchi";  // This will throw an error because `const` variables cannot be reassigned


// ************** Local Variable ***************

function localVariable(){
    let localVar = "I am local Variable"; // Local variable
    console.log(localVar); // Accessible inside the function, Output: "I am local Variable"
}
localVariable();

// console.log(localVar);  // Error: localVar is not defined (not accessible outside the function)


if(true){
    let print = "I am inside the block that means i am local variable";
    console.log(print); // Output: "I am inside the block that means i am local variable"
}

// console.log(print); // Error: print is not defined (outside block scope)


// ************** Global Variable ***************

let globalVariable = "I am global variable"

function globalVar(){
    console.log(globalVariable); // Accessible inside a function
}

globalVar();  // Output: "I am global variable"

console.log(globalVariable);  // Accessible outside too, Output: "I am global variable"