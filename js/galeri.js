// Scroll Function
function scrollRow(btn, direction){
  const row = btn.parentElement.querySelector('.gallery-row');
  const scrollAmount = row.offsetWidth * 0.8;
  row.scrollBy({left: direction * scrollAmount, behavior:'smooth'});
}

// Zoom Function
const galleryItems = document.querySelectorAll('.gallery-item');
const overlay = document.getElementById('zoomOverlay');
const overlayImg = overlay.querySelector('img');

galleryItems.forEach(item=>{
  item.addEventListener('click',()=>{
    overlayImg.src = item.querySelector('img').src;
    overlay.style.display='flex';
  });
});

overlay.addEventListener('click',()=>{
  overlay.style.display='none';
});