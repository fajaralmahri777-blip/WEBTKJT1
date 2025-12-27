const searchInput = document.getElementById("search");
const boxes = document.querySelectorAll(".box");

// ===== SEARCH =====
searchInput.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();
  boxes.forEach(box => {
    box.style.display = box.textContent.toLowerCase().includes(keyword)
      ? "flex"
      : "none";
  });
});

// ===== KLIK KE PROFIL (TANPA SUARA) =====
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // Delay tetap ada supaya efek klik terasa
    setTimeout(() => {
      window.location.href = `profil.html?id=${index + 1}`;
    }, 300); // bisa diperkecil/dihapus kalau mau
  });
});
