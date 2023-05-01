// common practice use const keyword instead of let
const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",
  // function as a object property (also called object method)
  start: function () {
    console.log("car has started");
    // this.drive();
  },
  drive: function () {
    console.log("car is driving");
  },
};

console.log(car.color);
console.log(car["model"]);
car.start();
