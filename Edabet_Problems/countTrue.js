function countTrue(arr) {
  let count = 0;
  if (arr.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == true) {
        count++;
      }
    }
    return count;
  }
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
