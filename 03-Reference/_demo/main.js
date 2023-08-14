let message = "Hello";
let word = message; // copied by value
console.log(message); //Hello
console.log(word); //Hello

message = "Hi";
console.log(message); //Hi
console.log(word); //Hello

let user = {
  name: "Lily",
};

let employee = user;

user.name = "Jane";
console.log(user.name);
employee.name = "Joe";
console.log(user.name);

//when copied the reference obj the variable and value will also changed. it called copy by Reference.
