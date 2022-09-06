const navTriggerEl = document.querySelector('.burger');
const navEl = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__items');
const navUntriggerEl = document.querySelector('.X-Icon');

function toggleNav() {
  navTriggerEl.addEventListener('click', () => {
    navTriggerEl.classList.add('close');
    navEl.classList.add('open');
    navEl.classList.add('position');
    navUntriggerEl.classList.add('open');
  });

  navUntriggerEl.addEventListener('click', () => {
    navTriggerEl.classList.remove('close');
    navEl.classList.remove('open');
    navEl.classList.remove('position');
    navUntriggerEl.classList.remove('open');
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navTriggerEl.classList.remove('close');
      navEl.classList.remove('open');
      navEl.classList.remove('position');
      navUntriggerEl.classList.remove('open');
    });
  });
}
toggleNav();