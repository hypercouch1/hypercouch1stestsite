// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart count in the navigation bar
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.innerText = cart.length;
}

// Function to add an item to the cart
function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Function to render cart items on the cart page
function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalElement = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';

    const img = document.createElement('img');
    img.src = `images/${item.name.toLowerCase().replace(/ /g, '-')}.jpeg`;
    img.alt = item.name;

    const h3 = document.createElement('h3');
    h3.innerText = item.name;

    const p = document.createElement('p');
    p.innerHTML = `$${item.price.toFixed(2)}`;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    cartItemsContainer.appendChild(div);

    total += item.price;
  });

  cartTotalElement.innerText = `Total: $${total.toFixed(2)}`;
}

// Initialize the cart count on page load
updateCartCount();

// If the current page is the cart page, render cart items
if (window.location.pathname.endsWith('cart.html')) {
  renderCartItems();
}

