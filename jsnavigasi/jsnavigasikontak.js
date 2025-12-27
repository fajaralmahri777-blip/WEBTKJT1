const hamburger = document.getElementById("hamburger-toggle");
const dropdown = document.getElementById("dropdown-menu");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

// Tutup menu saat klik di luar
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
