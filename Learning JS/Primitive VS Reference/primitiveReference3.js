// REFERENCE TYPE
// MUTABLE OR CHANGEABLE
// REFERENCE TYPES: object, array, function, date, regex, etc.
// two different pointers are pointing same memory place
//? 11 July, 2025

var a = {
  name: "Samiha",
};

var b = a;

a.name = "Tasnim";

console.log(a);
console.log(b);

/*
output:
{ name: 'Tasnim' }
{ name: 'Tasnim' }
*/
