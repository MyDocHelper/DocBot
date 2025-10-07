// Smooth scroll to 'how'
document.getElementById('scrollHow')?.addEventListener('click', () => {
  document.getElementById('how')?.scrollIntoView({behavior:'smooth'});
});
// Burger for mobile
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
  mobile.style.flexDirection = 'column';
});
// Close mobile menu on link click
mobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobile.style.display = 'none';
}));
