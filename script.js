
function toggleMenu() {
  const menu = document.getElementById('menu-mobile');
  // const toggle = document.getElementById('menuToggle');
  const body = document.body;
  const nav = document.querySelector('nav');

  menu.classList.toggle('show-menu');
  nav.classList.toggle('menu-open');
  // toggle.classList.toggle('active');
  if (menu.classList.contains('show-menu')) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }

}


window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = 0; 
    setTimeout(() => {
      preloader.style.display = 'none'; 
    }, 1000); 
  });