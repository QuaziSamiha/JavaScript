/**
* Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
 */

var expect = function(val) {
    func1 = (expected) => expected === val ? true : (() => {throw new Error('Not Equal')})()
    func2 = (expected) => expected !== val ? true : (() => {throw new Error('Equal')})()
    return {
        toBe: func1,
        notToBe: func2
    }
};
expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
expect(5).toBe(null)

// var expect = function(val) {
//     func1 = (expected) => {
//         if (expected === val) {
//             return true;
//         } else {
//             throw new Error('Not Equal');
//         }
//     };

//     func2 = (expected) => {
//         if (expected !== val) {
//             return true;
//         } else {
//             throw new Error('Equal');
//         }
//     };

//     return {
//         toBe: func1,
//         notToBe: func2
//     };
// };

// // Example usage:
// try {
//     console.log(expect(5).toBe(5)); // Output: true
//     console.log(expect(5).notToBe(5)); // Throws "Equal" error
// } catch (error) {
//     console.error(error.message);
// }
