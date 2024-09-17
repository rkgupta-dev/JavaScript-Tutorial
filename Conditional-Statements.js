/*
# What is Conditional Statements?
-> In JavaScript, conditional statements are used to perform different actions based on different conditions.
   They help control the flow of the program by making decisions.

# In JavaScript we have the following conditional statements:
1. if
2. else
3. else if
4. switch
*/

// -------------------------------------Coding Section--------------------------------------

// 1. if Statement: The if statement checks if a condition is true and executes a block of code if it is.

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// 2. if-else Statement: The if-else statement executes one block of code if the condition is true, and another block if it is false.

let age1 = 16;
if (age1 >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet."); // Output: "You are not eligible to vote yet."
}

// 3. else if Statement: This statement allows you to test multiple conditions. Once a condition is true, the corresponding code block is executed, and the rest are ignored.

let score = 73;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// 4. Switch Statement: The switch statement evaluates an expression and matches it to one of the many case values.
//    If a match is found, the corresponding code block is executed. It’s often used as a cleaner alternative to multiple if-else statements.

let day = 3;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Day enter between 1 to 7");
}


// You can use the switch statement in JavaScript to determine the exact day of the week based on a date.

function getDayOfWeek(date) {
    let dayNumber = date.getDay();  // Get the day of the week (0-6)
    
    let dayName;
    
    switch (dayNumber) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      default:
        dayName = "Invalid day";
    }
    
    return dayName;
  }
  
  // Example usage:
  let today = new Date();  // Get the current date
//   let today = new Date('2024-09-20');  // Specific date: 20th September 2024
  console.log(getDayOfWeek(today));  // Output: "Monday", "Tuesday", etc., depending on the current day
  








  

 /*-------------------------------------------------------------------------------------------
Summary:
if: Executes a block of code if the condition is true.
if-else: Executes one block of code if the condition is true and another block if it is false.
else if: Tests multiple conditions and executes the corresponding block of code.
switch: Evaluates an expression and matches it with different cases.
break: Stops the loop entirely.
continue: Skips the current iteration and moves to the next one.
*/