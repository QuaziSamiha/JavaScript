/*
Approach 1: Increment Then Return
We declare a variable currentCount and set it equal to n - 1. Then inside the counter 
function, increment currentCount and return the value. Note that since currentCount is modified, 
it should be declared with let rather than const.
*/

function createAdder(n) {
  let currentCount = n - 1;
  return function () {
    return ++currentCount;
  };
}

const call = createAdder(10);
console.log(call()); // 10
console.log(call()); // 11
console.log(call()); // 12
console.log(call()); // 13
