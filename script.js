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
// ================= GALLERY SLIDER =================
const galleryImages = [
  "images/victoriafalls.jpg",
  "images/greatzimbabwe.jpg",
  "images/hwange.jpg",
  "images/bulawayo.jpg"
];

let currentImage = 0;
const galleryImg = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateGallery() {
  galleryImg.src = galleryImages[currentImage];
}

nextBtn.addEventListener("click", () => {
  currentImage = (currentImage + 1) % galleryImages.length;
  updateGallery();
});

prevBtn.addEventListener("click", () => {
  currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
  updateGallery();
});
