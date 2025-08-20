// Typing Animation
const words = ["Cloud Engineer", "Devops engineer", "Docker Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.querySelector(".typing");

function type() {
  if (!typing) return;
  if (i >= words.length) i = 0;

  if (!isDeleting && j <= words[i].length) {
    current = words[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = words[i].substring(0, j--);
  }

  typing.innerHTML = current;

  if (!isDeleting && j === words[i].length) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
  }

  setTimeout(type, isDeleting ? 50 : 150);
}
type();

// Theme Toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = localStorage.getItem("theme") === "dark";
if (prefersDark) document.body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Scroll Fade-In Animations
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0s";
      entry.target.classList.add("appear");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
