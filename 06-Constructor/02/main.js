function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = function () {
    return (this.currentValue += parseInt(prompt("Please enter the value :")));
  };
  this.show = function () {
    alert(accumulator.currentValue);
  };
}

let accumulator = new Accumulator(1); //input 1 for initial value

accumulator.read(); //user add a value + 1 from initial value
accumulator.show();
