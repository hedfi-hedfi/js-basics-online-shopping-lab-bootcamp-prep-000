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
    items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if(items.length === 1) {
    return `In your cart, you have ${items[0]}.`;
  }
  else if(items.length === 2) {
    return `In your cart, you have ${items.join(', and ')}.`;
  }
  else {
    return `In your cart, you have ${items.slice(0, items.length - 2).join(' , ')}, ${items.slice(-2).join(', and ')}.`;
  }
}

function total() {
  var total = 0.0;
  for(let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item){
      return delete cart[i].itemName;
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
