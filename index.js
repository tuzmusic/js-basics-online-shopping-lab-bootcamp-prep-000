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

      if (i > 0) {
        str+= ", "
        if (item === cart[cart.length-1]) {
            str += "and "
        }
      }
      str += `${item.itemName} at $${item.itemPrice}`
  }
  str += "."
  return str
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  if (cart.indexOf(item)) { return 'That item is not in your cart.'}
}

function placeOrder(cardNumber) {
  // write your code here
}
