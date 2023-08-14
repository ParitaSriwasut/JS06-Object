const user = {
  email: "cc@gmail.com",
  isActive: true,
};
user.isActive = false; //updated property.
console.log(user); // log the whole object including properties.
user = {}; //TypeError: Assignment to constant variable.
console.log(user); //empty value
