// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
testStrictNotEqual(17);
testStrictNotEqual('17');

// The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
// It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
// The strict inequality operator will not convert data types.

