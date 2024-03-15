/**
 * Automatically Global
 * If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
 * This code example will declare a global variable carName, even if the value is assigned inside a function.
 */

myFunction();

// code here can use carName
console.log(carName); // output: Volvo

function myFunction() {
  carName = "Volvo";
}
