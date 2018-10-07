var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = {};
  object.itemName = item;
  object.itemPrice = Math.floor(Math.random()*100 + 1);
  cart.push(object);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(!cart.length) return 'Your shopping cart is empty.'
  var list = []
  for(let i = 0; i < cart.length; i++) {
    list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`) 
  }
  if(cart.lenght > 2){
    var x = list.pop();
    return `In your cart, you have ${list.join(", ")} and.`;
    
  }
  else return `In your cart, you have ${list.join(', ')}.`;
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
