// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
// The typeof operator returns object because a JavaScript array is an object.

// Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits);
