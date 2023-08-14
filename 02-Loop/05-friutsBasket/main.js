//Update fruits
//fruits['orange'] = value;

//fruits[key] = value; // best way

//const fruits = {};

//Accept input

const TERMINATE = "stop";
const fruits = {};
let key;
let value;

do {
  key = prompt("Enter kind of fruits!");
  value = prompt("How many?");
  if (value == 1) {
    fruits[key] = value;
  } else if (value > 1) {
    fruits[`${key}s`] = value;
  }
} while (key != TERMINATE && value != TERMINATE);

console.log(fruits);
