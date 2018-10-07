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
  if(!cart.length) { return 'Your shopping cart is empty.'; }
  var items = [];
  for(let i = 0; i < cart.length; i++) {
    items.push(`${cart[0].itemName} at $${cart[0].itemPrice}`);
  }
  if(items.length === 1) {
    return `In your cart, you have ${item[0]}.`;
  }
  else if(items.length === 2) {
    return `In your cart, you have ${items.join(', and ')}.`;
  }
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
