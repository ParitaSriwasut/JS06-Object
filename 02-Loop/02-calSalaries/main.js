let isEmptyObj = (object) => {
  let isEmpty = true;
  for (let key in object) {
    isEmpty = false;
  }
  return isEmpty;
};

let calSalaries = (object) => {
  if (isEmptyObj(object)) return 0;
  let sum = 0;
  for (let key in object) {
    //console.log(Object[key]);
    sum += object[key];
  }
  return sum;
};
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let total = calSalaries(salaries);
console.log(total);
