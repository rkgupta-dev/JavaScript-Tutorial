/*
# What is Date Object in Javascript?
-> In JavaScript, the Date object is used to work with dates and times.
   It provides methods for creating, manipulating, and formatting dates and times.

-> The JavaScript date object can be used to get year, month and day.
   You can display a timer on the webpage by the help of JavaScript date object.

# Creating a Date Object: You can create a Date object in several ways:
*/

// 1. Current Date and Time

const currentDate = new Date();
console.log(currentDate);

// 2. Specifying a Date and Time

const specificDate = new Date("2024-12-01T12:00:00");
console.log(specificDate);  


// 3. Using Year, Month, Day, etc.

const specificDate1 = new Date(2024, 9, 1, 12, 0, 0); 
console.log(specificDate1);  

// 4. Milliseconds Since January 1, 1970

const dateFromMilliseconds = new Date(0);
console.log(dateFromMilliseconds);  

console.log("-------------------")


// # Common Date Methods in javascript

const date = new Date();

console.log("Year:", date.getFullYear());                  // Output: current year (e.g., 2024)

console.log("Month:", date.getMonth());                    // Output: current month (0-indexed)

console.log("Date:", date.getDate());                      // Output: current day of the month

console.log("Week Day:", date.getDay());                   // Output: current day of the week (0-indexed)

console.log("Hour:", date.getHours());                     // Output: current hour

console.log("Minutes:", date.getMinutes());                // Output: current minutes

console.log("Seconds:", date.getSeconds());                // Output: current seconds

console.log("Milliseconds", date.getMilliseconds());       // Output: milliseconds since Unix Epoch



/*----------------------------------------------------------------------------------------------
Summary
* The Date object in JavaScript is used to represent dates and times.
* You can create a date object for the current date or a specific date.
* It provides methods to get and set various components like the year, month, day, hours, minutes, etc.
* Date objects also allow formatting and comparison of dates. */