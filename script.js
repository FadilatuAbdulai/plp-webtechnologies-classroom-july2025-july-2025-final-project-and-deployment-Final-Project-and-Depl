// Toggle Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu").querySelector("ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Scroll Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// Form Validation (for contact page)
function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  let message = document.forms["contactForm"]["message"].value;

  if (name == "" || email == "" || message == "") {
    alert("All fields must be filled out");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return false;
  }
  return true;
}