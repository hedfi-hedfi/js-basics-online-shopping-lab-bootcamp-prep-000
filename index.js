var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const obj = {itemName: item, itemPrice: Math.floor(Math.random()*100+1)};
  cart.push(obj);
  return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
