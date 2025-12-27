// Toggle dropdown menu saat hamburger diklik
document.getElementById('hamburger-toggle').addEventListener('click', function() {
  const menu = document.getElementById('dropdown-menu');
  menu.classList.toggle('show');
});

// Highlight halaman aktif berdasarkan URL
const currentPage = window.location.pathname.split('/').pop(); // Ambil nama file halaman (e.g., 'beranda.html')
const menuLinks = document.querySelectorAll('.dropdown-menu a');

menuLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Tutup menu jika klik di luar (opsional, untuk UX lebih baik)
document.addEventListener('click', function(event) {
  const menu = document.getElementById('dropdown-menu');
  const hamburger = document.getElementById('hamburger-toggle');
  if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove('show');
  }
});