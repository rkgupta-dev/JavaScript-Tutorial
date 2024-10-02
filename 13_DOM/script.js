/*
# What is DOM (Document Object Model) in javascript?
-> In JavaScript, the DOM (Document Object Model) is a programming interface that represents the structure 
   of a web page (HTML or XML) as a tree of objects. The DOM allows JavaScript to access, manipulate, and 
   update the content, structure, and style of a document dynamically.

-> The DOM represents the page as a tree of nodes. Each node corresponds to a part of the document, such as 
   elements, attributes, and text. Through the DOM, JavaScript can:

* Access and change the content of HTML elements.
* Modify the structure of the document (e.g., adding or removing elements).
* Change the CSS styles of elements.
* Respond to user interactions, like clicks or keypresses.


# DOM Tree Structure
-> The DOM represents the HTML document in a tree-like structure. Each element, attribute, 
   and piece of text becomes a node in this tree.

For example, for the HTML snippet:
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>


# The DOM tree looks like:
  Document
  ├── html
      ├── head
      │     └── title
      └── body
            └── h1         
            

Accessing Elements in the DOM
To manipulate elements in the DOM, JavaScript provides various methods to access them:

  1. document.getElementById(): Selects an element by its unique ID. */

let title = document.getElementById("title");
console.log(title.innerText);                   // Output: Hello Rohit Kumar Gupta


// 2. document.getElementsByClassName(): Selects elements by their class name.

let paragraphs = document.getElementsByClassName("description");
console.log(paragraphs[0].innerText); 


// 3. document.getElementsByTagName(): Selects elements by their tag name (e.g., h1, p, etc.).

let headings = document.getElementsByTagName("h4");
console.log(headings[0].innerText);  // Output: Let's Start Document Object Model


// 4. document.querySelector(): Selects the first element that matches a CSS selector.

let heading = document.querySelector("h1");
console.log(heading.innerText);  // Output: Hello World


/*
# Manipulating DOM Elements
-> Once you select an element, you can manipulate its properties and content.

   1. Changing Text Content */

let titles = document.getElementById("title");
titles.innerText = "New Title";  // Changes the text inside the <h1>


// 2. Changing HTML Content

let paragraph = document.querySelector(".description");
paragraph.innerHTML = "<strong>New Content</strong>";  // Inserts HTML content


// 3. Changing CSS Styles

let heading1 = document.querySelector("h1");
heading1.style.color = "red";  // Changes the text color to red


// 4. Adding/Removing Classes

let paragraph1 = document.querySelector(".description");
paragraph1.classList.add("paragraph");  // Adds a class to the element paragraph
paragraph1.classList.remove("description");  // Removes a class from the element paragraph


// 5. Creating and Inserting New Elements

let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph.";
document.body.appendChild(newParagraph);  // Adds the new <p> to the <body>


// 6. Removing Elements

let heading2 = document.getElementById("title");
heading2.remove();  // Removes the <h1> element (Hello Rohit Kumar Gupta)



// # Event Listener for Click:
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
  });
  
