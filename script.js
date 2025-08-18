document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul');

  mobileMenu.addEventListener('click', function() {
    navUl.classList.toggle('active');
  });
});
