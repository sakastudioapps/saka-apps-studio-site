document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  header.style.transform = currentY > lastY && currentY > 160 ? 'translateY(-100%)' : 'translateY(0)';
  header.style.position = currentY > 160 ? 'sticky' : 'relative';
  header.style.top = '0';
  header.style.background = 'rgba(247,244,237,.94)';
  header.style.backdropFilter = 'blur(14px)';
  header.style.transition = 'transform .25s ease';
  lastY = currentY;
}, { passive: true });

