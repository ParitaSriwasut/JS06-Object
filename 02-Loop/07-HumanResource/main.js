const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

let user;
for (let key in employees) {
  user = prompt("Enter your name :");
  if (user === "josh") {
    console.log(employees.john);
  } else if (user === "peter") {
    console.log(employees.peter);
  } else if (user === "mike") {
    console.log(employees.mike);
  } else if (user === "sarah") {
    console.log(employees.sarah);
  } else {
    console.log("Not found");
  }
}
