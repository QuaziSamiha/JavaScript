let a = 1;

let change = (val) => {
  val = 2; //  assignment so val is a new variable
};

change(a); //  pass by value

console.log(a); // 1

/*
When a variable is passed by value, a copy of the actual value is passed 
to the function. Any changes made to the parameter inside the function 
do not affect the original variable.
In JavaScript, primitive data types are passed by value.
*/
