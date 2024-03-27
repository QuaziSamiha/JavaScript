/*
Functions Within Functions
A powerful feature of JavaScript is you can actually create functions within other 
functions and even return them!
*/

function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7

/**
 * In this example, createFunction() returns a new function. Then that function can be used as normal.
 */
