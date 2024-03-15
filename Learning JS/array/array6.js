These two different statements both create a new array containing 6 numbers:

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
The new keyword can produce some unexpected results:

// Create an array with three elements:
const points2 = new Array(40, 100, 1);
// Create an array with two elements:
const points2 = new Array(40, 100);
// Create an array with one element ???
const points3 = new Array(40);  
// A Common Error
const points3 = [40];
// is not the same as:
// Create an array with one element:
// const points3 = [40];
// Create an array with 40 undefined elements:
// const points3 = new Array(40); 