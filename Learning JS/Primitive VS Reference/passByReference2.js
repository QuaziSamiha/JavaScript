let a = {
  num: 1,
};

let change = (val) => {
  val = {}; // reassignment so val is a new object
};

change(a); // looks like pass by value but actually it is pass by reference

console.log(a); // { num: 1 }

/*
 * When a variable is passed by reference, a reference to the actual data is passed.
 * This means changes made to the parameter inside the function affect the original variable.
 * In JavaScript, non-primitive data types (such as objects and arrays) are passed by reference.
 */
