// ================= DESTINATION FILTER =================
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        category === "all" || card.dataset.category === category
          ? "block"
          : "none";
    });
  });
});
// ================= EXPLORE BUTTON =================
