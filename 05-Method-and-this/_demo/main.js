//some record => key/function
//called method == Object ability

// let devWebsite = () => {
//   console.log("Im Working");
// };
// let meeting = () => {
//   console.log("Im Meeting");
// };
// let skill = () => {
//   console.log("HTML,CSS,JS,REACT");
// };

// const programmer = {
//   name: "Rita",
//   age: 25,
//   dev: devWebsite,
//   meet: meeting,
//   skill: skill,
// };
// //property => obj.key
// console.log(programmer.name);
// console.log(programmer.age);
// //method => obj.method
// programmer.dev();
// programmer.meet();
// programmer.skill();
/*
const programmer = {
  name: "Rita",
  age: 25,
  dev: function () {
    console.log("Im Working");
  },
  meet: () => console.log("Im Meeting"),
  sleep() {
    console.log("Im Sleepy");
  },
};
programmer.dev();
programmer.sleep();

function playSport(type) {
  console.log("Im playing ${type}.");
}
const rita = {
  fullName: "Parita Sriwasut",
  birthDay: "27 March",
  address: "Thailand",
  skill: ["Japanese,Javascript,Eating,Sleeping "],
  sport: playSport,
  sleep: function () {
    console.log("Im Sleepy.");
  },
  focus(task) {
    console.log("Im focusing on ${task}");
  },
};
rita.focus("JS");
rita.sport("Snowborad");


//OOP

car.drive();
car["auto pilot"]();

const car = {
  brand: "Tesla",
  model: "X",
  speed: "100",
};
console.log(car.brand, car.model);
car["auto pilot"]();

const calculator = {
  sum: (x, y) => x + y,
  minus: (x, y) => x - y,
};

let r1 = calculator.sum(5, 2);
let r2 = calculator.minus(3, 1);

console.log(car.speed);
car.speed = calculator.sum(car.speed, 80);
console.log(r1, r2);



*/

const user = {
  name: "Rita",
  age: 15,
  sayHi: function () {
    console.log(`Hello ${this.name}`);
  },
  growOld: function () {
    //this == user,this.age == user.age
    this.age++;
  },
};

//user.sayHi();
//user.name = "Sriwasut";
//user.sayHi();

//This method : can be go through property itself just call it by using (this).

// console.log(user.age); //15
// user.growOld();
// console.log(user.age); //16

function dev() {
  console.log(`This feature developed by ${this.name}`);
}
//This method : this => caller == Object before the dot.
//This method is current context.
const programmer1 = {
  name: "john",
  develop: dev,
};
const programmer2 = {
  name: "Lily",
  develop: dev,
};

programmer1.develop();
programmer2.develop();

//Arrow function cannot assign inside object (cannot call this).
