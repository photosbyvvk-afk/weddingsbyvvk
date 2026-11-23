/* PERSONALISE THESE DETAILS BEFORE PUBLISHING */
const SITE_CONFIG = {
  instagram: "https://www.instagram.com/weddingsbyvvk/",
  email: "photosbyvvk@gmail.com",       // Replace with your business email
  whatsapp: "919340391284",              // Country code + number, digits only. Example: 919876543210
  featuredVideo: "https://www.youtube.com/watch?v=uL-7vLkJnQY&list=PLEMjsayVsdaM" // Replace VIDEO_ID with your YouTube video ID
};

document.getElementById("year").textContent = new Date().getFullYear();
const emailLink = document.getElementById("emailLink");
if (SITE_CONFIG.email && !SITE_CONFIG.email.includes("YOUR_EMAIL")) {
  emailLink.href = `mailto:${SITE_CONFIG.email}`;
} else {
  emailLink.href = "mailto:photosbyvvk@gmail.com";
}
const whatsappLink = document.getElementById("whatsappLink");
if (SITE_CONFIG.whatsapp && !SITE_CONFIG.whatsapp.includes("X")) {
  whatsappLink.href = `https://wa.me/${SITE_CONFIG.whatsapp}`;
} else {
  whatsappLink.href = "https://wa.me/919340391284";
}

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Portfolio filters
const filters = document.querySelectorAll(".filter");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  galleryItems.forEach(item => {
    item.hidden = filter !== "all" && item.dataset.category !== filter;
  });
}));

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxTitle = lightbox.querySelector(".lightbox-title");
let currentImage = 0;
function showImage(index) {
  currentImage = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentImage];
  lightboxImage.src = item.dataset.image;
  lightboxImage.alt = item.dataset.title;
  lightboxTitle.textContent = item.dataset.title;
}
galleryItems.forEach((item, index) => item.addEventListener("click", () => {
  showImage(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}));
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showImage(currentImage - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => showImage(currentImage + 1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });

// Featured video modal — update SITE_CONFIG above with your YouTube embed URL.
const videoModal = document.getElementById("videoModal");
const videoFrame = videoModal.querySelector(".video-frame");
document.getElementById("filmPlay").addEventListener("click", () => {
  if (SITE_CONFIG.featuredVideo.includes("VIDEO_ID")) {
    alert("Add your YouTube video ID in script.js first. See the README for instructions.");
    return;
  }
  videoFrame.innerHTML = `<iframe src="${SITE_CONFIG.featuredVideo}?autoplay=1&rel=0" title="Featured wedding film" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
});
function closeVideo() {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  videoFrame.innerHTML = "";
}
videoModal.querySelector(".video-close").addEventListener("click", closeVideo);
videoModal.addEventListener("click", event => { if (event.target === videoModal) closeVideo(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeLightbox(); closeVideo(); }
  if (lightbox.classList.contains("open") && event.key === "ArrowRight") showImage(currentImage + 1);
  if (lightbox.classList.contains("open") && event.key === "ArrowLeft") showImage(currentImage - 1);
});

// Subtle scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
