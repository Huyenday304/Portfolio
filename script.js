function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('show-menu');
    
}

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = 0; 
    setTimeout(() => {
      preloader.style.display = 'none'; 
    }, 1000); 
  });