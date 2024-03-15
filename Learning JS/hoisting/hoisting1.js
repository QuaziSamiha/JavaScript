greet(); // output: Happy 15 March, 2024

function greet() {
  console.log("Happy 15 March, 2024");
}

// Hoisting is JavaScript's default behavior of moving declarations to the top.

// Hoisting is JavaScript's default behavior of moving all declarations to the top 
// of the current scope (to the top of the current script or the current function).

/**
 * Variables defined with let and const are hoisted to the top of the block, but not initialized.
 * Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
 * Using a let variable before it is declared will result in a ReferenceError.
 * The variable is in a "temporal dead zone" from the start of the block until it is declared:
 */
