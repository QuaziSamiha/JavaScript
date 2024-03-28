/*
Approach 2: Postfix Increment Syntax
JavaScript provides convenient syntax that returns a value and then increments it. 
This allows us to avoid having to initially set a variable to n - 1.
*/

function createAdder(n) {
  return function () {
    return n++;
  };
}

const call = createAdder(10);
console.log(call()); // 10
console.log(call()); // 11
console.log(call()); // 12
console.log(call()); // 13
