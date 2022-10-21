const burgerMenu = document.getElementById('burger-menu');
const menu = document.querySelector('.nav-menu');
const menuItems = document.querySelectorAll('.nav-item');

window.addEventListener(
  'resize',
  () => {
    const query = window.matchMedia('(min-width: 430px)');
    if (query.matches) {
      burgerMenu.classList.remove('open');
      burgerMenu.setAttribute('data-toggled', 'false');
      menu.classList.remove('toggled-menu');
      burgerMenu.classList.remove('burger-menu-toggled');
    }
  },
  true,
);

burgerMenu.addEventListener('click', () => {
  if (burgerMenu.getAttribute('data-toggled') === 'false') {
    burgerMenu.classList.add('open');
    burgerMenu.setAttribute('data-toggled', 'true');
  } else {
    burgerMenu.classList.remove('open');
    burgerMenu.setAttribute('data-toggled', 'false');
  }
  burgerMenu.classList.toggle('burger-menu-toggled');
  menu.classList.toggle('toggled-menu');
});

menuItems.forEach((n) => n.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu-toggled');
  burgerMenu.setAttribute('data-toggled', 'false');
  burgerMenu.classList.remove('open');
  menu.classList.remove('toggled-menu');
}));
