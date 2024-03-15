// An array is a special variable, which can hold more than one value
/**
* Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables 
could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!
An array can hold many values under a single name, and you can access the values by referring to an index number.
*/

// It is a common practice to declare arrays with the const keyword.

/**
 * Creating an Array
1. Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
const array_name = [item1, item2, ...];      

2. You can also create an array, and then provide the elements:
Example
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

3. Using the JavaScript Keyword new
Example
const cars = new Array("Saab", "Volvo", "BMW");

There is no need to use new Array().
For simplicity, readability and execution speed, use the array literal method.
 */

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

/**
 * JavaScript variables can be objects. Arrays are special kinds of objects.
 * Because of this, you can have variables of different types in the same Array.
 * You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array.
 * Array:
const person = ["John", "Doe", 46];
 * Object:
const person = {firstName:"John", lastName:"Doe", age:46};
 */

/**
 * Array Properties and Methods
 * cars.length   // Returns the number of elements
 * cars.sort()   // Sorts the array
 */

