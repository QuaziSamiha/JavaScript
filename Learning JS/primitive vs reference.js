//! =================================================
// var a = 5;
// var b = a;

// console.log(a);
// console.log(b);

/*
output:
 5
 5
 */
//! =================================================

//! =================================================
// var a = 5;
// var b = a;

// a = 6;

// console.log(a);
// console.log(b);

/*
output:
5
6
*/
//! =================================================

//! =================================================
var a = {
  name: "Samiha",
};

var b = a;

a.name = "Tasnim";

console.log(a);
console.log(b);

/*
output:
{ name: 'Tasnim' }
{ name: 'Tasnim' }
*/
//! =================================================

//! =================================================
var a = ["akku", "pakku"];

var b = a;

a.push = "makku";

console.log(a);
console.log(b);

/*
output: 
[ 'akku', 'pakku', push: 'makku' ]
[ 'akku', 'pakku', push: 'makku' ]
*/
//! =================================================

//! =================================================
// const language = {
//   name: "JavaScript",
//   date: "11 July, 2025",
// };

// var language2 = { ...language };
// language2.name = "typeScript";

// console.log(language);
// console.log(language2);

/*
output:
{ name: 'JavaScript', date: '11 July, 2025' }
{ name: 'typeScript', date: '11 July, 2025' }
*/

//! =================================================

//! =================================================
const language = {
  name: "JavaScript",
  date: "11 July, 2025",
};

var language2 = { ...language };
language2.name = "typeScript";
language.founder = "Brendan Eich";
console.log(language);
console.log(language2);

/**
 * { name: 'JavaScript', date: '11 July, 2025', founder: 'Brendan Eich' }
{ name: 'typeScript', date: '11 July, 2025' }

=== Code Execution Successful ===
 */
