// Write a function redundant that takes in a string str and returns a function that returns str.

// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

//  closure in JS 
function redundant(str) {
    return function (){
       return str
   }
}


const f1 = redundant("Apple")
console.log(f1())
