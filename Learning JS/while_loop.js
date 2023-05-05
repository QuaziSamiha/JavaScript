/* it hann't 3 parts like for loop , 
it has only one part which is condition
*/

// this loop will execute infinity times
// var i = 0;
// while (i < 10) {
//   console.log("6 May, 2023");
// }

/*
this will execute finite time 
this loop is like for loop
we won't use while loop like this way when we know the 
starting and ending point
*/
var i = 0;
while (i < 10) {
  console.log("6 May, 2023");
  i++;
}

/* 
it can be done by for loop
but this kind of problem usually solved by while loop
*/
var isRunning = true;
while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("Winner Winner Chiken Dinner");
    isRunning = false;
  } else {
    console.log("You have got " + rand);
  }
}

/*
Both for loops and while loops are used for repetitive tasks 
in JavaScript, but they have different use cases.

A for loop is typically used when you know the number of times you 
need to execute the loop. For example, if you have an array with 10 
elements and you want to iterate over each element, you 
can use a for loop like this:

```
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

In this case, you know that you want to execute the loop 10 times 
(once for each element in the array), so a for loop is the 
appropriate choice.

A while loop, on the other hand, is typically used when you 
don't know the number of times you need to execute the loop in advance. 
For example, if you're waiting for a user to input a valid value, you 
might use a while loop like this:

```
let userInput = null;

while (userInput !== 'valid') {
  userInput = prompt('Please enter a valid value:');
}

console.log('User input was valid.');
```

In this case, you don't know in advance how many times 
the user will need to input a value before it's considered 
valid, so a while loop is the appropriate choice.

In general, if you know the number of times you need to execute 
a loop, a for loop is usually the better choice because it's more 
concise and easier to read. 
If you don't know the number of times you need to execute a loop, 
a while loop is usually the better choice because it's more flexible.
*/
