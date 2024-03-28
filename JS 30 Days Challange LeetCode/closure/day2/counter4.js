/*Approach 4: Postfix Increment Syntax With Arrow Function
We can reduce the amount of code in Approach 2 by using an arrow function with an implicit return.
*/

function createAdder(n){
    return () => n++;
}

const call = createAdder(10);
console.log(call()); // 10
console.log(call()); // 11
console.log(call()); // 12
console.log(call()); // 13