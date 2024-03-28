/*
This question is intended as an introduction to closures. In JavaScript, functions have a reference 
to all variables declared in the same scope as well as any outer scopes. These scopes are known as 
the function's lexical environment. The combination of the function and it's environment is known 
as a closure.

Closure Example:
In Javascript, you can declare functions within other functions and return them. 
The inner function has access to any variables declared above it.

The inner function add has access to a. This allows the outer function to serve as a factory of new functions, 
each with different behavior.
*/

function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  };
}

const callAdder = createAdder(5);
console.log(callAdder(7));
