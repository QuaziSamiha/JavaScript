// following two lines run successfully due to js hoisting
console.log(a); // output: undefined

var a = 9; // declaration hoisted to the top but initialization not

console.log(a) // output: 9

