// let isEmpty = (obj) => {
//   isNumber = true;
//   for (let key in obj) {
//     isNumber = false;
//   }
//   return isNumber;
// };

// let multiplyNumeric = (obj, num) => {
//   if (isEmpty(Number)) return 0;
//   num = 0;
//   for (let key in obj) {
//     num += obj[key];
//   }
//   return num;
// };
// console.log(multiplyNumeric(menu, 3));

// let multiplyNumeric = (obj, num) => {
//   for (let key in obj) {
//     let value = obj[key];
//     if (typeof value === "number") {
//       obj[key] = value * num;
//       //is menu['width'] = 200 * 3
//       //is menu['height'] = 300 * 3
//     }
//   }
// };
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// multiplyNumeric(menu, 3);
// console.log(menu);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
let menuObj = {
  width: 200,
  height: 300,
  title: "My menu",
};
menuObj.width = menuObj.width * 2;
//keeping string that has value.
let key = width;
menuObj[key] = menuObj[key] * 2;
