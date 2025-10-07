// мобильное меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu){
  burger.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  });
}

// автопрокрутка к "Как это работает"
const scrollHow = document.getElementById('scrollHow');
if (scrollHow){
  scrollHow.addEventListener('click', () => {
    document.getElementById('how')?.scrollIntoView({behavior:'smooth', block:'start'});
  });
}

// текущий год в футере
const y = document.getElementById('year');
if (y){ y.textContent = new Date().getFullYear(); }
