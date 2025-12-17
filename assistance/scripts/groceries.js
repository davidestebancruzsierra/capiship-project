// Groceries & Drinks Products
const products = [
  {
    id: 13,
    name: "Rice",
    type: "Groceries & Drinks",
    price: 2,
    group: "groceries",
    img: "../../assets/products/rice.jpg",
  },
  {
    id: 14,
    name: "Orange",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "../../assets/products/oranges.jpg",
  },
  {
    id: 15,
    name: "Eggs",
    type: "Groceries & Drinks",
    price: 6,
    group: "groceries",
    img: "../../assets/products/eggs.jpg",
  },
  {
    id: 16,
    name: "Tomatoes",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "../../assets/products/tomatoes.jpg",
  },
  {
    id: 17,
    name: "Strawberries",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "../../assets/products/strawberries.jpg",
  },
  {
    id: 18,
    name: "Bread",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "../../assets/products/bread.jpg",
  },
];

const cards = document.getElementById("cards");

function cardTemplate(p) {
  return `
    <article class="card">
            <button class="cartBtn" aria-label="Add to cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6h15l-2 8H8L6 2H3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10 10h6" stroke-linecap="round"></path>
              <path d="M13 7v6" stroke-linecap="round"></path>
            </svg>
            </button>
            <div class="cardTop">
            <div class="titleRow">
            <div>
            <p class="productName">${p.name}</p>
            <p class="productType">${p.type}</p>
            </div>
            <div class="priceBox">
            <p class="price">$${p.price}</p>
            </div>
            </div>
            </div>
            <div class="imgBox">
            <img src="${p.img}" alt="${p.name}" loading="lazy"  onerror="this.style.display='none'; this.parentElement.textContent='Sin imagen';">
            </div>
</article>
  `;
}

function render() {
  cards.innerHTML = products.map(cardTemplate).join("");
}

document.addEventListener("DOMContentLoaded", render);
