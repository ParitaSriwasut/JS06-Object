let name = prompt("Enter your product:");
let quantity = +prompt("Quantity :");
let price = Number(prompt("Price :"));
let discount = prompt("Discount :") * 1;

// const product = {
//   name: name,
//   quantity: quantity,
//   price: price,
//   discount: discount,
// };

//when key name is the same as variable that keeping value is called property shot hand.
const product = {
  name,
  quantity,
  price,
  discount,
};
// console.log(product);
// let calPrice = (quantity, price, discount = 0) => {
//   let totalPrice = price * quantity * (1 - discount);
//   return totalPrice;
// };

// let result = calPrice(product.price, product.quantity, product.discount);
// console.log(result);
if (discount != 0) {
  product["discount"] = discount;
}
console.log(product);
let calPrice = (productObj) => {
  let price = productObj.price;
  let quantity = productObj.quantity;
  let discount = productObj.discount ? productObj.discount : 0;
  return price * quantity * (1 - discount);
};

let result = calPrice(product);
console.log(result);
