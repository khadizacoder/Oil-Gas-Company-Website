const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navbar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-10', 'scrolled-navbar');
     myElement.classList.add('active');
  } else {
    navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'z-10', 'scrolled-navbar');
     myElement.classList.remove('active');
  }
})
