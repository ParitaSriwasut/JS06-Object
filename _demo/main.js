console.log("Object");
//Data type
//Primitive : Boolean,Number,String etc.
//Non-Primitive : Object

//Object declaration
//{} stand for object / scope
//{record_1,record_2,record_3}

//PROPERTY SHORTHAND : key and value is the same so we can only call key =>

// let userName = prompt("...");
// let age = prompt("you age..")
// let abc = {
//   userName,
//   age,
// }
// console.log(abc);

//each record => <key_name>:<value>
//<value> any datatype
//key name => Datatype : string
//record === property(คุณสมบัติ) key-value pair

let user = {
  firstName: "Parita",
  lastName: "Sriwasut",
  age: 20,
  isStudent: true,
};
//GET,POLL,READ
console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.isStudent);
//ACCESS,MODIFY,DELETE : every action NEED <key_name>!
//Dot Notation=> <Obj>.<key_name>
//Restriction : cannot go through key with space!

//MODIFY,UPDATE
//syntax : <Obj>.<key_name> =new value
user.firstName = "Rita";
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

//ADD
user.address = "THailand";

//DELETE
//syntax : delete <obj>.<key_name>
delete user.age;

//NESTED OBJECT

const employee = {
  fullName: "Lily Dep",
  salary: 600000,
  address: {
    area: "Phaya Thai",
    town: "BAngkok",
    country: "Thailand",
  },
};
console.log(employee.address.area);
console.log(employee.addr?.town); //run : ? is checking the first value that can we use or not.

//Dot can be used only with Object !!

//CHECK KEY
let product = {
  id: 225,
  name: "iPhone",
  price: 20000,
};
//"" in obj(name)
console.log("name" in product); //check key
//syntax: obj.hasOwnProperty(key.name)
console.log(product.hasOwnProperty("name"));

//BRACKET NOTATION
//can go through obj key that has a space' '.
//key name should be string. if not should be variable that keeping a string.
console.log(product["id"]);

//property shorthand

//example
//let key = name;
//console.log(user[key]);//27
//console.log(user['age']);//27

//user[key] = user[key] + 5;
//user[key] += 5;

//Bracket notation : use for string's key or variable that keeping string.
//0bj[key] = 0bj[key]+ new => container = value + new.
//for(key / in /object)  will auto reassign key over and over again.
