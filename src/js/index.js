const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const iconBurger = document.getElementById('icon-burger');
const iconClose = document.getElementById('icon-close');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  iconBurger.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});
