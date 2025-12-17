// Food & Restaurants Products
const products = [
  {
    id: 1,
    name: "Bandeja Paisa",
    type: "Food & Restaurants",
    price: 15,
    group: "food",
    img: "../../assets/products/bandejapaisa.jpg",
  },
  {
    id: 2,
    name: "Arepas",
    type: "Food & Restaurants",
    price: 8,
    group: "food",
    img: "../../assets/products/arepa.png",
  },
  {
    id: 3,
    name: "Ajiaco",
    type: "Food & Restaurants",
    price: 30,
    group: "food",
    img: "../../assets/products/ajiaco.jpg",
  },
  {
    id: 4,
    name: "Fried Fish",
    type: "Food & Restaurants",
    price: 15,
    group: "food",
    img: "../../assets/products/friedfish.jpg",
  },
  {
    id: 5,
    name: "Shrimp Ceviche",
    type: "Food & Restaurants",
    price: 30,
    group: "food",
    img: "../../assets/products/ceviche.jpg",
  },
  {
    id: 6,
    name: "bean casserole",
    type: "Food & Restaurants",
    price: 25,
    group: "food",
    img: "../../assets/products/beancasserole.jpg",
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
