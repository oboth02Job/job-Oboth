import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

//Search bar

// cart.js
const cartList = document.querySelector('.product-list');
const searchInput = document.getElementById('cartSearch');

// Load cart from localStorage
let cartItems = JSON.parse(localStorage.getItem('so-cart')) || [];

// Render cart items
function renderCart(items) {
  cartList.innerHTML = '';

  if (items.length === 0) {
    cartList.innerHTML = '<li>No items found in your cart.</li>';
    return;
  }

  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('cart-card', 'divider');
    li.innerHTML = `
      <a href="../product_pages/${item.Id}.html" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="../product_pages/${item.Id}.html">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors?.[0]?.ColorName || ''}</p>
      <p class="cart-card__quantity">qty: ${item.Quantity || 1}</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    `;
    cartList.appendChild(li);
  });
}

// Filter items by search term
function filterCartItems(term) {
  const filteredItems = cartItems.filter(item =>
    item.Name.toLowerCase().includes(term.toLowerCase())
  );
  renderCart(filteredItems);
}

// Listen for input in the search box
searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.trim();
  filterCartItems(searchTerm);
});

// Initial load
renderCart(cartItems);
