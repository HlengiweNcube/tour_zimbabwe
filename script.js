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

// ================= CONTACT FORM VALIDATION =================
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    feedback.textContent = "⚠️ Please complete all fields.";
    feedback.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "❌ Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Thank you! Your message has been sent.";
    feedback.style.color = "green";
    form.reset();
  }
});
// ================= HERO BUTTON SCROLL =================
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

// ================= HERO BUTTON SCROLL =================
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

// ================= BACK TO TOP BUTTON =================
const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolled down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll back to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================= SINGLE CARD VIEW =================
const allCards = document.querySelectorAll(".card");
const showAllBtn = document.getElementById("showAllBtn");

allCards.forEach(card => {
  card.addEventListener("click", () => {
    // Hide all other cards
    allCards.forEach(c => {
      if (c !== card) {
        c.style.display = "none";
      }
    });
    // Show this one larger
    card.classList.add("focused");
    // Show the "Show All" button
    showAllBtn.style.display = "inline-block";
  });
});

showAllBtn.addEventListener("click", () => {
  // Show all cards again
  allCards.forEach(c => {
    c.style.display = "block";
    c.classList.remove("focused");
  });
  // Hide the "Show All" button
  showAllBtn.style.display = "none";
});



