// Pharmacy & Wellness Products
const products = [
  {
    id: 7,
    name: "Multivitamins",
    type: "Pharmacy & Wellness",
    price: 25,
    group: "pharmacy",
    img: "../../assets/products/Multivitamins.jpg",
  },
  {
    id: 8,
    name: "Vitamin D",
    type: "Pharmacy & Wellness",
    price: 20,
    group: "pharmacy",
    img: "../../assets/products/vitaminD.jpg",
  },
  {
    id: 9,
    name: "Magnesium",
    type: "Pharmacy & Wellness",
    price: 30,
    group: "pharmacy",
    img: "../../assets/products/Magnesium.jpg",
  },
  {
    id: 10,
    name: "Collagen",
    type: "Pharmacy & Wellness",
    price: 50,
    group: "pharmacy",
    img: "../../assets/products/collagen.jpg",
  },
  {
    id: 11,
    name: "Probiotics",
    type: "Pharmacy & Wellness",
    price: 25,
    group: "pharmacy",
    img: "../../assets/products/probiotics.jpg",
  },
  {
    id: 12,
    name: "Melatonin",
    type: "Pharmacy & Wellness",
    price: 30,
    group: "pharmacy",
    img: "../../assets/products/Melatonin.jpg",
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
