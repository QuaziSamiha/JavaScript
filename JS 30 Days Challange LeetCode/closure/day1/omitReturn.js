/**
 * If you can write the code in a single line, you can omit the return keyword. 
This can result in very short code.
 *Differences
There are 3 major differences between arrow syntax and function syntax.
1. More minimalistic syntax. This is especially true for anonymous functions and single-line functions. 
For this reason, this way is generally preferred when passing short anonymous functions to other functions.
2. No automatic hoisting. You are only allowed to use the function after it was declared. This is generally 
considered a good thing for readability.
3. Can't be bound to this, super, and arguments or be used as a constructor. These are all complex topics in 
themselves but the basic takeaway should be that arrow functions are simpler in their feature set. 
You can read more about these differences here.
The choice of arrow syntax versus function syntax is primarily down to preference and your project's 
stylistic standards.
 */
const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
