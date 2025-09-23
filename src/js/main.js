// sort products
document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort-select');
  const productList = document.querySelector('.product-list');

  if (!sortSelect || !productList) return;

  const originalProducts = Array.from(productList.children).map(li => {
    return {
      element: li,
      name: li.querySelector('.card__name').innerText,
      price: parseFloat(li.querySelector('.product-card__price').innerText.replace('$', ''))
    };
  });

  sortSelect.addEventListener('change', () => {
    const sortOption = sortSelect.value;
    let sortedProducts = [...originalProducts];

    switch (sortOption) {
      case 'priceLowHigh':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'nameAZ':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameZA':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    productList.innerHTML = '';
    sortedProducts.forEach(p => productList.appendChild(p.element));
  });
});

//Form
document.addEventListener("DOMContentLoaded", () => {
  const ctaBtn = document.getElementById("cta-register-btn");
  const formSection = document.getElementById("register-form");

  ctaBtn.addEventListener("click", () => {
    formSection.classList.toggle("hidden");
    formSection.scrollIntoView({ behavior: "smooth" });
  });

  const registerForm = document.getElementById("registerUser");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for registering! (Form not connected to backend yet.)");
    registerForm.reset();
    formSection.classList.add("hidden");
  });
});
