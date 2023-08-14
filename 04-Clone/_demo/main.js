let todo = {
  task: "Do homework",
  complete: false,
  final: "13-8-2023",
};
// first version
// const newTodo = {};
// //clone by loop reference and assign by key:value one by one.
// for (let key in todo) {
//   // assign each key:value for newTodo.
//   newTodo[key] = todo[key];
//   //newTodo['task'] == todo['task'] => 'Do homework'
//   //etc...
// }
// console.log(newTodo);
// newTodo.complete = true;
// console.log(newTodo.complete);
// console.log(todo.complete);

// second version
//const newTodo = {};
//Object.assign(newTodo, todo); //evaluate from right to left side(Merge & override key) from reference obj. in cause same key ----(Right to left)---
const newTodo = Object.assign({}, todo);
//it means also create a new object by create new object inside object.assign() method.
console.log(newTodo);
