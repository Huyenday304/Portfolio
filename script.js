
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

//   const reveals = document.querySelectorAll('.reveal');

// function revealOnScroll() {
//   const windowHeight = window.innerHeight;
//   const revealPoint = 150;

//   reveals.forEach((element) => {
//     const elementTop = element.getBoundingClientRect().top;

//     if (elementTop < windowHeight - revealPoint) {
//       element.classList.add('active');
//     } else {
//       element.classList.remove('active'); // remove if you want it to disappear again when scrolling back
//     }
//   });
// }

// window.addEventListener('scroll', revealOnScroll);

// if (elementTop < windowHeight - revealPoint) {
//   element.classList.add('active');
//   // No removal of class here
// }

const scrollItems = document.querySelectorAll('.reveal');

// Check if element is already in viewport
const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Add .active to items already visible
scrollItems.forEach(item => {
  if (isInViewport(item)) {
    item.classList.add('active');
  }
});

// Intersection Observer for scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Observe only those not yet visible
scrollItems.forEach(item => {
  if (!item.classList.contains('active')) {
    observer.observe(item);
  }
});


