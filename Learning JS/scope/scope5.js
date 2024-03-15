
// * Local Scope : Variables declared within a JavaScript function, are LOCAL to the function
// * Example
// code here can NOT use carName
function myFunction() {
 let carName = "Volvo";
 // code here CAN use carName
}
// code here can NOT use carName
/**
 * Local variables have Function Scope: They can only be accessed from within the function.
 * Since local variables are only recognized inside their functions, variables with the same name 
can be used in different functions.
 * Local variables are created when a function starts, and deleted when the function is completed.
 */