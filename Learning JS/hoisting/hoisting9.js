greet(); // output : ReferenceError: Cannot access 'greet' before initialization

var greet = function () { // function expression
  console.log("Happy 15 March, 2024");
};

// function expression and class expression are not hoisted
