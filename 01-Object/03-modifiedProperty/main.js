let user = {
  name: "John",
  sureName: "Doe",
};
user.name = "Matt";
delete user.sureName;
console.log(user);
