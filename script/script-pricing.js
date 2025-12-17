const products = [
  {
    id: 1,
    name: "Bandeja Paisa",
    type: "Food & Restaurants",
    price: 15,
    group: "food",
    img: "/assets/products/bandejapaisa.jpg",
  },
  {
    id: 2,
    name: "Arepas",
    type: "Food & Restaurants",
    price: 8,
    group: "food",
    img: "/assets/products/arepa.png",
  },
  {
    id: 3,
    name: "Ajiaco",
    type: "Food & Restaurants",
    price: 30,
    group: "food",
    img: "/assets/products/ajiaco.jpg",
  },
  {
    id: 4,
    name: "Fried Fish",
    type: "Food & Restaurants",
    price: 15,
    group: "food",
    img: "/assets/products/friedfish.jpg",
  },
  {
    id: 5,
    name: "Shrimp Ceviche",
    type: "Food & Restaurants",
    price: 30,
    group: "food",
    img: "/assets/products/ceviche.jpg",
  },
  {
    id: 6,
    name: "Bean Casserole",
    type: "Food & Restaurants",
    price: 25,
    group: "food",
    img: "/assets/products/beancasserole.jpg",
  },
  {
    id: 7,
    name: "Multivitamins",
    type: "Pharmacy & Wellness",
    price: 25,
    group: "pharmacy",
    img: "/assets/products/Multivitamins.jpg",
  },
  {
    id: 8,
    name: "Vitamin D",
    type: "Pharmacy & Wellness",
    price: 20,
    group: "pharmacy",
    img: "/assets/products/vitaminD.jpg",
  },
  {
    id: 9,
    name: "Magnesium",
    type: "Pharmacy & Wellness",
    price: 30,
    group: "pharmacy",
    img: "/assets/products/Magnesium.jpg",
  },
  {
    id: 10,
    name: "Collagen",
    type: "Pharmacy & Wellness",
    price: 50,
    group: "pharmacy",
    img: "/assets/products/collagen.jpg",
  },
  {
    id: 11,
    name: "Probiotics",
    type: "Pharmacy & Wellness",
    price: 25,
    group: "pharmacy",
    img: "/assets/products/probiotics.jpg",
  },
  {
    id: 12,
    name: "Melatonin",
    type: "Pharmacy & Wellness",
    price: 30,
    group: "pharmacy",
    img: "/assets/products/Melatonin.jpg",
  },
  {
    id: 13,
    name: "Rice",
    type: "Groceries & Drinks",
    price: 2,
    group: "groceries",
    img: "/assets/products/rice.jpg",
  },
  {
    id: 14,
    name: "Orange",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "/assets/products/oranges.jpg",
  },
  {
    id: 15,
    name: "Eggs",
    type: "Groceries & Drinks",
    price: 6,
    group: "groceries",
    img: "/assets/products/eggs.jpg",
  },
  {
    id: 16,
    name: "Tomatoes",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "/assets/products/tomatoes.jpg",
  },
  {
    id: 17,
    name: "Strawberries",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "/assets/products/strawberries.jpg",
  },
  {
    id: 18,
    name: "Bread",
    type: "Groceries & Drinks",
    price: 3,
    group: "groceries",
    img: "/assets/products/bread.jpg",
  },
  {
    id: 19,
    name: "Travel-size toiletries",
    type: "Travel Essentials",
    price: 25,
    group: "travel",
    img: "/assets/products/Travel-sizetoiletries.jpg",
  },
  {
    id: 20,
    name: "Sunscreen",
    type: "Travel Essentials",
    price: 55,
    group: "travel",
    img: "/assets/products/sunscreen.jpg",
  },
  {
    id: 21,
    name: "Hand sanitizer",
    type: "Travel Essentials",
    price: 16,
    group: "travel",
    img: "/assets/products/Handsanitizer.jpg",
  },
  {
    id: 22,
    name: "Pain relievers",
    type: "Travel Essentials",
    price: 3,
    group: "travel",
    img: "/assets/products/Painrelievers.jpg",
  },
  {
    id: 23,
    name: "Motion sickness tablets",
    type: "Travel Essentials",
    price: 3,
    group: "travel",
    img: "/assets/products/Motionsicknesstablets.jpg",
  },
  {
    id: 24,
    name: "Face masks",
    type: "Travel Essentials",
    price: 3,
    group: "travel",
    img: "/assets/products/Facemasks.jpg",
  },
  {
    id: 25,
    name: "Colombian coffee",
    type: "Souvenirs & Drinks",
    price: 12,
    group: "souvenirs",
    img: "/assets/products/colombiancoffee.jpg",
  },
  {
    id: 26,
    name: "Traditional candies",
    type: "Souvenirs & Drinks",
    price: 5,
    group: "souvenirs",
    img: "/assets/products/traditionalcandies.jpg",
  },
  {
    id: 27,
    name: "Keychains or magnets",
    type: "Souvenirs & Drinks",
    price: 7,
    group: "souvenirs",
    img: "/assets/products/Keychains or magnets.jpg",
  },
  {
    id: 28,
    name: "Local snacks",
    type: "Souvenirs & Drinks",
    price: 3,
    group: "souvenirs",
    img: "/assets/products/Local snacks.jpg",
  },
  {
    id: 29,
    name: "Handmade souvenirs",
    type: "Souvenirs & Drinks",
    price: 20,
    group: "souvenirs",
    img: "/assets/products/Handmade souvenirs.jpg",
  },
  {
    id: 30,
    name: "Colombian soft drinks",
    type: "Souvenirs & Drinks",
    price: 3,
    group: "souvenirs",
    img: "/assets/products/Colombian soft drinks.jpg",
  },
];
const cards = document.getElementById("tabpanel-cards");
const tabs = Array.from(document.querySelectorAll(".tab"));
let activeKey = "food";
function cardTemplate(p) {
  return `  
<article class="card">
<button class="cartBtn" data-add="${p.id}" aria-label="Add ${p.name} To Card">
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
  const list = products.filter((p) => p.group === activeKey);
  cards.innerHTML = list.map(cardTemplate).join("");
}

function setActiveTab(key) {
  activeKey = key;

  tabs.forEach((t) => {
    const selected = t.dataset.key === key;
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;

    // Agregar/remover clase activa
    if (selected) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  render();

  if (window.matchMedia("(max-width:760px)").matches) {
    cards.scrollTo({ left: 0, behavior: "smooth" });
  }
}

function initTabs() {
  // Agregar event listeners a los tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.key));

    // También permitir Enter/Space
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveTab(tab.dataset.key);
      }
    });
  });

  const tabContainer = document.querySelector(".tabs-container");
  if (tabContainer) {
    tabContainer.addEventListener("keydown", (e) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;

      e.preventDefault();
      const currentTab = document.querySelector('.tab[aria-selected="true"]');
      const currentIndex = tabs.indexOf(currentTab);

      let nextIndex;
      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % tabs.length;
      } else {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      }

      tabs[nextIndex].focus();
      setActiveTab(tabs[nextIndex].dataset.key);
    });
  }

  setActiveTab(activeKey);
}

document.addEventListener("DOMContentLoaded", initTabs);
