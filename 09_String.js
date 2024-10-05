/*
# What is String in Javascript?
-> The JavaScript string is an object that represents a sequence of characters.

There are two ways to create string in JavaScript

1. By string literal
2. By string object (using new keyword)  

1. By String literal: The string literal is created using double quotes. The syntax of creating 
   string using string literal is given below: */

let name = "Rohit Kumar Gupta";
console.log(name);


// 2. By string object (using new keyword): The syntax of creating string object using new keyword is given below:

let names = new String("Hare Krishna");
console.log(names);


/*
#  Creating Strings in JavaScript
-> You can create strings in three different ways:
  1. Using Double Quotes (") */

const greeting = "Hello, world!";
console.log(greeting);

// 2.  Using Single Quotes (')

const greet = 'Welcome to Javascript Stirng';
console.log(greet);

// 3. Using Backticks (Template Literals) (`)

const greets = `Ram Ram Sare Bhaiyo Ne`;
console.log(greets);

/*
# String Properties
length: Returns the number of characters in a string. */

let bike = "Passion PRO";
console.log(`The lengthe of ${bike} = ${bike.length}`);

/*
# Common String Methods
1. toUpperCase(): Converts the string to uppercase letters.  */

const myName = "rohit kumar gupta";

const upper = myName.toUpperCase();
console.log(upper);


// 2. toLowerCase(): Converts the string to lowercase letters.

const brand = "SAMSUNG";

const lower = brand.toLowerCase();
console.log(lower);

const upper1 = brand.toUpperCase();
console.log(upper1);


// 3. charAt(): Returns the character at a specific index.

const color = "Yellow";

console.log(color.charAt(1));


// 4. slice(): Extracts a part of the string and returns a new string.

const myCar = "Tata Harrier";

console.log(myCar.slice(0, 4));


// 5. includes(): Checks if a string contains a certain substring.

const text = "Hello, world!";
console.log(text.includes("world"));  // Output: true


// 6. replace(): Replaces a part of the string with another string.

const text1 = "Welcome, world!";
const newText = text1.replace("world", "Jitendra");
console.log(newText);                            // Output: "Hello, Rohit!"


// Template Literals (Backticks) With backticks, you can include variables and expressions inside a string using ${}:

const Name = "Rohit";
const Greeting = `Hello, ${Name}!`;  // Template literal
console.log(Greeting);               // Output: "Hello, John!"




/*------------------------------------------------------------------------------------------------------
Summary
* A string is a sequence of characters enclosed in quotes.
* You can use single, double, or backtick quotes to define strings.
* Strings have properties like length and methods for manipulating text such as 
  toUpperCase(), slice(), and replace(). 
*/





