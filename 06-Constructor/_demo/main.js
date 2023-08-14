//Object Creators == Constructor function

const dev1 = {
  name: "Lily",
  age: 25,
  position: "dev",
  salary: 333555,
  dev: function () {
    console.log("Im developer");
  },
};

function Developer(name, age) {
  //Implicit create this
  //this = {}
  this.name = name;
  this.age = age;
  this.position = "dev";
  this.salary = 333555;
  this.dev = function () {
    console.log(` ${this.name} Im developer`);
  };
  //Implicit Return this
}
//this === Instance
const dev2 = new Developer("Rita", 25);
console.log(dev2);
