function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

let [n, m] = minMax([12, 34, 87, 32, 11, 23]);
console.log(n, m);
