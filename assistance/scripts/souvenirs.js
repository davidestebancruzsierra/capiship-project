// Souvenirs & Gifts Products
const products = [
  {
    id: 25,
    name: "Colombian coffee",
    type: "Souvenirs & Drinks",
    price: 12,
    group: "souvenirs",
    img: "../../assets/products/colombiancoffee.jpg",
  },
  {
    id: 26,
    name: "Traditional candies",
    type: "Souvenirs & Drinks",
    price: 5,
    group: "souvenirs",
    img: "../../assets/products/traditionalcandies.jpg",
  },
  {
    id: 27,
    name: "Keychains or magnets",
    type: "Souvenirs & Drinks",
    price: 7,
    group: "souvenirs",
    img: "../../assets/products/Keychains or magnets.jpg",
  },
  {
    id: 28,
    name: "Local snacks",
    type: "Souvenirs & Drinks",
    price: 3,
    group: "souvenirs",
    img: "../../assets/products/Local snacks.jpg",
  },
  {
    id: 29,
    name: "Handmade souvenirs",
    type: "Souvenirs & Drinks",
    price: 20,
    group: "souvenirs",
    img: "../../assets/products/Handmade souvenirs.jpg",
  },
  {
    id: 30,
    name: "Colombian soft drinks",
    type: "Souvenirs & Drinks",
    price: 3,
    group: "souvenirs",
    img: "../../assets/products/Colombian soft drinks.jpg",
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
