/*
## What is prototype?
-> JavaScript is a prototype-based language that facilitates the objects to acquire properties 
   and features from one another. Here, each object contains a prototype object.

-> In JavaScript, whenever a function is created the prototype property is added to that function 
   automatically. This property is a prototype object that holds a constructor property.

## 1. Understanding Prototypes
-> In JavaScript, when you create an object or a function, a prototype is automatically assigned to it. 
   This prototype object can be used to attach methods and properties that all instances of that object 
   or function can share.

#  Syntax
-> ClassName.prototype.methodName  
*/

function Addition(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
}

Addition.prototype.add = function(){
    const sum = this.num1 + this.num2;
    return `The sum of ${this.num1} and ${this.num2} = ${sum} `
}


const first = new Addition(24, 6);  // Output: The sum of 24 and 6 = 30 

console.log(first.add());

