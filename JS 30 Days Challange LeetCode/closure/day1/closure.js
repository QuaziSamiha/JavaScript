/**
 * Closures
This question is intended as an introduction to closures. In JavaScript, functions have a reference 
to all variables declared in the same scope as well as any outer scopes. These scopes are known as 
the function's lexical environment. The combination of the function and it's environment is known 
as a closure.
This is a powerful and often used feature of the language.

In this example, createAdder passes the first parameter a and the inner function has access to it. 
This way, createAdder serves as a factory of new functions, with each returned function having 
different behavior.

*/

function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
