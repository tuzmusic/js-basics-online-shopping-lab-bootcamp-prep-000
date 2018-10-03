var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {
    itemName: item,
  itemPrice: Math.floor(Math.random() * 100)
  }
  cart.push(cartItem)
  return `${item} has been added to your cart.`
}

function viewCart() {

  debugger;

  if (!cart.length) { return 'Your shopping cart is empty.'}
/*
  * 1 item — `
  In your cart, you have bananas at $17.`
  * 2 items — `
  In your cart, you have bananas at $17, and pancake batter at $5.`
  * 3+ items —
  `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
*/

  var str = 'In your cart, you have '
  for (let i = 0; i < cart.length; i++) {
      let item = cart[i]

      if (cart.length > 1) {
        str+= ", "
        if (item === cart[-1]) {
            str += "and "
        }        
      }
      str += `${item.itemName} at $${itemPrice}`     
  }
  str += "."
  return str
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
