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
// const language = {
//   name: "JavaScript",
//   date: "11 July, 2025",
// };

// var language2 = { ...language };
// language2.name = "typeScript";
// language.founder = "Brendan Eich";
// console.log(language);
// console.log(language2);

/**
   * { name: 'JavaScript', date: '11 July, 2025', founder: 'Brendan Eich' }
  { name: 'typeScript', date: '11 July, 2025' }
  
  === Code Execution Successful ===
  */

//! =================================================
const language = {
  name: "JavaScript",
  date: "11 July, 2025",
  libraries: ["React", "Vue", "jQuery"],
};

var language2 = { ...language };
// language2.name = 'typeScript'

language.libraries.push("Angular");

console.log(language);
console.log(language2);

/**
 * {
name: 'JavaScript',
date: '11 July, 2025',
libraries: [ 'React', 'Vue', 'jQuery', 'Angular' ]
}
{
  name: 'JavaScript',
  date: '11 July, 2025',
  libraries: [ 'React', 'Vue', 'jQuery', 'Angular' ]
  }
  */

//! ==================== =============================
var a = "Samiha";
console.dir(a);
console.dir(a.charAt(2));

var b = new String("Samiha");
console.dir(b);
console.dir(b.charAt(2));

/**
 * 
'Samiha'
'm'
[String: 'Samiha']
'm'
*/

//! ==================== =============================
var a = "Samiha";

a.eyeColor = "brown"; // ignore as primitive type cannot be mutate

console.log(a);

/** * Samiha
 */

//! ==================== =============================
// let a = 1;

// let change = (val) => {
//   val = 2; //  assignment so val is a new variable
// };

// change(a); // looks like pass by value but actually it is pass by reference

// console.log(a); // 1

// primitive value always pass by reference

//! ==================== =============================
// let a = {
//   num: 1,
// };

// let change = (val) => {
//   val = {}; // assignment so val is a new object
// };

// change(a); // looks like pass by value but actually it is pass by reference

// console.log(a);

//! ==================== =============================
let a = {
  num: 1,
};

let change = (val) => {
  val.num = 2;
};

change(a);

console.log(a); // { num: 2 }

// in js everything is pass by reference
