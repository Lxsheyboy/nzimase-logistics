// ===============================
// Nzimase Logistics - Hero Slider
// ===============================

// Start with the first slide
let slideIndex = 0;

// Wait until all HTML content is loaded before selecting elements
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const navbar = document.getElementById("navbar");
  let lastScrollTop = 0;

  // ========== HERO SLIDER FUNCTION ==========
  if (slides.length === 0) {
    console.warn("No slides found in .slide class. Check your HTML structure.");
    return;
  }

  function showSlides() {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1; // Reset to first slide
    }

    // Show the current slide
    slides[slideIndex - 1].classList.add("active");

    // Repeat every 5 seconds
    setTimeout(showSlides, 5000);
  }

  // Initialize slideshow
  showSlides();

  // ========== NAVBAR SCROLL LOGIC ==========
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down → hide navbar
      navbar.classList.add("hidden");
    } else {
      // Scrolling up → show navbar
      navbar.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
