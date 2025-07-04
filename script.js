// Typing Animation
const words = ["DevOps Engineer", "AWS Specialist", "Docker Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.querySelector(".typing");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }

    typing.innerHTML = current;

    if (j === words[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();

// Theme Toggle
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => document.body.classList.toggle("dark");

// Scroll Animations
const faders = document.querySelectorAll(".fade-in");
const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.animationDelay = "0s";
  });
});
faders.forEach(f => appear.observe(f));
