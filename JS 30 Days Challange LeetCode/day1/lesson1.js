/*
Basic Syntax
In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword.

In this example, f is the name of the function. (a, b) are the arguments. 
You can write any logic in the body and finally return a result. 
You are allowed to return nothing, and it will instead implicitly return undefined.
*/
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
