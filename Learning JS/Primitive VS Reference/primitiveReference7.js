var a = ["akku", "pakku"];
// copying like primitive data type
var b = a; // assignment (pointer of b is assigned by pointer of a. both pointer are pointig to same memory place.)
a = []; // new assignment -- not changing, assigning
// a.push([])

console.log(a); // []
console.log(b); // [ 'akku', 'pakku' ]
