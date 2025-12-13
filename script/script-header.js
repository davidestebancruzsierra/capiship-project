document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const navCenter = document.querySelector(".nav-center");
  const dropdownLink = document.querySelector(".dropdown .dropdown-link");
  const dropdownLi = dropdownLink?.closest(".dropdown");
  const MQ_MOBILE = window.matchMedia("(max-width: 1024px)");

  function openMenu() {
    if (!navCenter || !toggle) return;
    navCenter.classList.add("open");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.styles.overflow = "hidden";
  }

  function closeMenu() {
    if (!navCenter || !toggle) return;
    navCenter.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.styles.overflow = "";
    document
      .querySelectorAll(".dropdown.open")
      .forEach((d) => d.classList.remove("open"));
  }

  if (toggle && navCenter) {
    toggle.addEventListener("click", () => {
      const isOpen = navCenter.classList.contains("open");
      isOpen ? closeMenu() : openMenu();
    });

    navCenter.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (!MQ_MOBILE.matches) return;

        if (link.classList.contains("dropdown-link")) return;

        closeMenu();
      });
    });

    navCenter.addEventListener("click", (e) => {
      if (MQ_MOBILE.matches && e.target === navCenter) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navCenter.classList.contains("open"))
        closeMenu();
    });
  }
  if (dropdownLink && dropdownLi) {
    dropdownLink.addEventListener("click", (e) => {
      if (MQ_MOBILE.matches) {
        e.preventDefault();
        dropdownLi.classList.toggle("open");
      }
    });
  }

  window.addEventListener("resize", () => {
    if (!MQ_MOBILE.matches) closeMenu();
  });
});
