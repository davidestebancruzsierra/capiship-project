// Travel Essentials Products
const products = [
  {
    id: 19,
    name: "Travel-size toiletries",
    type: "Travel Essentials",
    price: 25,
    group: "travel",
    img: "../../assets/products/Travel-sizetoiletries.jpg",
  },
  {
    id: 20,
    name: "Sunscreen",
    type: "Travel Essentials",
    price: 55,
    group: "travel",
    img: "../../assets/products/sunscreen.jpg",
  },
  {
    id: 21,
    name: "Hand sanitizer",
    type: "Travel Essentials",
    price: 16,
    group: "travel",
    img: "../../assets/products/Handsanitizer.jpg",
  },
  {
    id: 22,
    name: "Pain relievers",
    type: "Travel Essentials",
    price: 3,
    group: "travel",
    img: "../../assets/products/Painrelievers.jpg",
  },
  {
    id: 23,
    name: "Motion sickness tablets",
    type: "Travel Essentials",
    price: 3,
    group: "travel",
    img: "../../assets/products/Motionsicknesstablets.jpg",
  },
  {
    id: 24,
    name: "Face masks",
    type: "Travel Essentials",
    price: 3,
    group: "travel",
    img: "../../assets/products/Facemasks.jpg",
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
