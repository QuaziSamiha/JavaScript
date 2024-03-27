// Immediately Invoked Function Expression (IIFE)

const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7

// Why would you write code like this? It gives you the opportunity to encapsulate a
//  variable within a new scope. For example, another developer can immediately see that 
// sum can't be used anywhere outside the function body.


// Anonymous Function
// You can optionally exclude the name of the function after the function keyword.
// In JavaScript, an anonymous function is a function that does not have a name. 

