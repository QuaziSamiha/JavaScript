// This will result in a ReferenceError:
carName = "Volvo";
let carName;

// Using a const variable before it is declared, is a syntax error, so the code will simply not run.
// This code will not run.
carName2 = "Volvo";
const carName2;

// JavaScript only hoists declarations, not initializations.


var x = 5; // Initialize x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
var y = 7; // Initialize y
// Does it make sense that y is undefined in the last example?
// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

