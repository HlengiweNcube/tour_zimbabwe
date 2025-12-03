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
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  feedback.textContent = "❌ Please enter a valid email address (e.g., name@example.com).";
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

// ================= GREETING BASED ON TIME =================
const greetingText = document.getElementById("greeting");
const hours = new Date().getHours();
let greeting;

if (hours < 12) greeting = "Good morning!";
else if (hours < 18) greeting = "Good afternoon!";
else greeting = "Good evening!";

greetingText.textContent = `${greeting} Welcome to Tour Zimbabwe!`;

// ================= SIMPLE GRAPHICS: DRAW BAR =================
const canvas = document.getElementById("ratingChart");
const ctx = canvas.getContext("2d");

// Draw colored bars to represent satisfaction
ctx.fillStyle = "#006400";
ctx.fillRect(0, 20, 300, 40); // main bar
ctx.fillStyle = "#ffcc00";
ctx.fillRect(0, 20, 240, 40); // partial fill (e.g. 80%)
ctx.fillStyle = "#333";
ctx.font = "16px Arial";
ctx.fillText("Visitor Satisfaction: 80%", 10, 50);


// ================= OBJECTS EXAMPLE =================
const destination = {
  name: "Victoria Falls",
  location: "Zambezi River",
  type: "Nature",
  rating: 5,
  description: "One of the Seven Natural Wonders of the World."
};

console.log(`${destination.name} is a ${destination.type} attraction in Zimbabwe.`);

// ================= OOP EXAMPLE =================
class Destination {
  constructor(name, category, location) {
    this.name = name;
    this.category = category;
    this.location = location;
  }
  describe() {
    return `${this.name} is a ${this.category} site located in ${this.location}.`;
  }
}

const vicFalls = new Destination("Victoria Falls", "Nature", "Zambezi River");
console.log(vicFalls.describe());

// ================= DESTINATION POPUP GALLERY =================
const destinationGalleries = {
  victoriafalls: [
    { src: "images/victoriafallsmoke.jpg", caption: "Victoria Falls – The Smoke that Thunders" },
    { src: "images/sunsetoverzambezi.jpg", caption: "Sunset over the Zambezi River" },
    { src: "images/rainbowabovefalls.jpg", caption: "Rainbows above Victoria Falls" }
  ],
  greatzimbabwe: [
    { src: "images/greatzimruins.jpg", caption: "Great Zimbabwe Ruins" },
    { src: "images/greatwalls.jpg", caption: "The Great Enclosure wall" },
    { src: "images/complexruins.jpg", caption: "Hill Complex ancient ruins" }
  ],
  bulawayo: [
    { src: "images/bulawayocityhall.jpg", caption: "City of Bulawayo" },
    { src: "images/matopohills.jpg", caption: "Matobo Hills near Bulawayo" },
    { src: "images/bulawayorailwaymuseum.jpg", caption: "Bulawayo Railway Museum" }
  ]
  };

const destinationCards = document.querySelectorAll(".card");
const popup = document.getElementById("destinationPopup");
const popupImg = document.getElementById("popupImage");
const popupCaption = document.getElementById("popupCaption");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const closePopup = document.getElementById("closePopup");

let currentDestination = [];
let currentIndex = 0;

// Show popup with slideshow for selected destination
destinationCards.forEach(card => {
  card.addEventListener("click", () => {
    const location = card.dataset.location;
    if (destinationGalleries[location]) {
      currentDestination = destinationGalleries[location];
      currentIndex = 0;
      showPopupImage();
      popup.style.display = "flex";
    }
  });
});

function showPopupImage() {
  const { src, caption } = currentDestination[currentIndex];
  popupImg.src = src;
  popupCaption.textContent = caption;
}

// Navigation
nextPhoto.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentDestination.length;
  showPopupImage();
});

prevPhoto.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentDestination.length) % currentDestination.length;
  showPopupImage();
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

