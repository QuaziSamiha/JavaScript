// var name = "";
// using if-else
// var fullName = "";
// if (name.length == 0) {
//   fullName = "Quazi Samiha";
// } else {
//   fullName = name;
// }

// empty string = falsy value
// empty string = truthy value
// using shorthand
var name = "";
var fullName = name || "Quazi Samiha"; // boolean operation
console.log(fullName);

// using shorthand
// var name = "Madu";
// var fullName = name || "Quazi Samiha"; // boolean operation
// console.log(fullName);

// using if-else
// var isOk = true;
// if (isOk) {
//   console.log("Everything is Ok");
// }

// using shorthand
var isOk = true;
isOk && console.log("Everything is ok");

// using shorthand
// var isOk = false;
// isOk && console.log("Everything is ok");
