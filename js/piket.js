document.addEventListener('DOMContentLoaded', function() {
  // Ambil semua elemen kartu
  const cards = document.querySelectorAll('.piket-card');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      // Toggle class 'flipped' untuk flip kartu
      this.classList.toggle('flipped');
    });
  });
});