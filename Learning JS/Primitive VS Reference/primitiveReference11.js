// string, number & boolean have their object representations.
var a = "Samiha";
console.dir(a);
console.dir(a.charAt(2));

var b = new String("Samiha"); // wrapper type
console.dir(b);
console.dir(b.charAt(2));

/*
output:

'Samiha'
'm'
[String: 'Samiha']
'm'

*/
