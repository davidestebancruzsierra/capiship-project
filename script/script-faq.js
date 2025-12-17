document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        item
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        faqItem.classList.add("active");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });
});
