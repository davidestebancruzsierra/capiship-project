// Emergency Products
const products = [
  {
    id: 1,
    name: "First Aid Kit",
    type: "Emergency",
    price: 35,
    group: "emergency",
    img: "../../assets/products/First Aid Kit.jpg",
  },
  {
    id: 2,
    name: "Painkillers",
    type: "Emergency",
    price: 50,
    group: "emergency",
    img: "../../assets/products/painkillers.jpg",
  },
  {
    id: 3,
    name: "Antacid",
    type: "Emergency",
    price: 80,
    group: "emergency",
    img: "../../assets/products/antacid.jpg",
  },
  {
    id: 4,
    name: "Cold Medicine",
    type: "Emergency",
    price: 120,
    group: "emergency",
    img: "../../assets/products/Cold Medicine.jpg",
  },
  {
    id: 5,
    name: "Thermometer",
    type: "Emergency",
    price: 100,
    group: "emergency",
    img: "../../assets/products/thermometer.jpg",
  },
  {
    id: 6,
    name: "Allergy Medicine",
    type: "Emergency",
    price: 90,
    group: "emergency",
    img: "../../assets/products/Allergy Medicine.jpg",
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
