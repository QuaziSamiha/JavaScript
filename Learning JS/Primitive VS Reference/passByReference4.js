let obj = { name: "Ravi" };

function reassignReference(o) {
  // Reassigning the reference
  o = { name: "Arun" };
  console.log("Inside function: ", o.name);
}

reassignReference(obj);
console.log("Outside function: ", obj.name);

/**
Output
Inside function:  Arun
Outside function:  Ravi

In this example, the function receives a reference to the original object.
However, reassigning o creates a new object, leaving the original object untouched.
Thus, JavaScript passes reference values for objects but not "by reference" as in languages like C++
 */
