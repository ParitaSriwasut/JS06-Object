function Calculator() {
  this.read = function () {
    this.num1 = +prompt("Enter first number :");
    this.num2 = +prompt("Enter second number :");
  };
  this.sum = function () {
    return `sum value is ${this.num1 + this.num2}`;
  };
  this.mul = function () {
    return `multiple value is ${this.num1 * this.num2}`;
  };
}

const result = new Calculator();
result.read();
console.log(result.sum());
console.log(result.mul());
