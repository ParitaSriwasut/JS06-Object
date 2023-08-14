let calculator = {
  x: null,
  y: null,
  read() {
    this.x = +prompt("Enter first number:");
    this.y = +prompt("Enter second number:");
  },
  sum: function () {
    console.log(this.x + this.y);
  },
  mul: function () {
    console.log(this.x * this.y);
  },
};
// alert(calculator.sum());
// alert(calculator.mul());

calculator.read();
console.log(calculator);
console.log(calculator.sum());
console.log(calculator);
console.log(calculator.mul());
