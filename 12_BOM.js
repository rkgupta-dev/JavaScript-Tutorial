/*-----NOTE -> BOM(Browser Object Model) run only in browser environments.(chrome, firefox, microsoft edge, etc.)

# What is BOM(Browser Object Model) in javascript?
-> In JavaScript, BOM stands for Browser Object Model. It represents the hierarchy of objects provided
   by the web browser to interact with the browser window. Unlike the DOM (Document Object Model), 
   which deals with the structure of the webpage, the BOM deals with the browser environment itself,
   allowing developers to control things like the browser window, the location of the page, and other 
   aspects related to the browser.

# Key Components of the BOM
1. window Object
-> The global object representing the browser window. It serves as the top-level object 
   for BOM and gives access to methods and properties for controlling the browser environment.              */

console.log(window.innerWidth); // Width of the browser window
console.log(window.innerHeight); // Height of the browser window

// NOTE : Browser Object Model (BOM) and is only available in browser environments.(not in node js)


/*
2. navigator Object
-> Provides information about the web browser itself, such as the user agent, platform, and 
   whether cookies are enabled.                                                                   */

   console.log(navigator.userAgent);  // Information about the browser and operating system
   console.log(navigator.platform);   // Operating system platform (e.g., "Win32", "MacIntel")


/*
3. location Object
-> Represents the URL of the current webpage and allows you to manipulate or retrieve information about it.
   You can change the URL or reload the page using location methods.                                           */

console.log(location.href);  // Get the full URL of the current page
// location.reload();           // Reload the current page
// location.assign("https://www.google.com");  // Redirect to a new URL
   

/*
4. history Object
-> Provides methods to navigate through the browser's history (back, forward, or go to a specific page).        */

history.back();   // Go to the previous page
history.forward();  // Go to the next page in history
history.go(-2);   // Go two steps back in history


/*
5. screen Object
-> Contains information about the user's screen, such as its width, height, and color depth. */

console.log(screen.width);   // Width of the user's screen
console.log(screen.height);  // Height of the user's screen


/*
6. alert(), confirm(), prompt() Methods
-> These methods are part of the BOM and allow interaction with the user via pop-ups.       
i. alert(): Displays a message box with an OK button. */

alert("Hello, welcome to our site!");


/*
ii. confirm():
->  Displays a message box with OK and Cancel buttons, and returns true or false based on the user's choice. */

let isConfirmed = confirm("Do you agree? (This is Comfirm)");
console.log(isConfirmed);  // true if OK, false if Cancel


// iii. prompt(): Displays a dialog box that prompts the user for input.

let name = prompt("What is your name?");
console.log(name);  // User's input


/*
Summary of BOM
* The BOM (Browser Object Model) allows interaction with the browser itself.
* It provides objects like window, navigator, location, history, and screen.
* The BOM is essential for tasks such as managing the browser window, handling URL navigation, 
  working with browser history, and interacting with the user through alerts, prompts, or confirms.
* The BOM enhances user interaction with the browser and is often used alongside the DOM when building 
  web applications.    */