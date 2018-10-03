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

  var str = 'In your cart, you have '
  for (let i = 0; i < cart.length; i++) {
      let item = cart[i]
      str += `${item.itemName} at $${itemPrice}`
      if (!i) {  // i = 0, first item

      }
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
