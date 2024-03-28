/*
Approach 3: Prefix Decrement and Increment Syntax
JavaScript also has syntax that allows you to increment a value and then return it. Because 
the increment happens before the value is returned, we must first decrement the value initially 
similar to Approach 1.
*/

function createAdder(n) {
  --n;
  return function () {
    return ++n;
  };
}

const call = createAdder(10);
console.log(call()); // 10
console.log(call()); // 11
console.log(call()); // 12
console.log(call()); // 13
