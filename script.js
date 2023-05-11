/* typing test animation */
var typed = new Typed(".typing", {
  strings: ["Freelancer", "Designer", "Developer", "Blogger", "Youtuber",],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true

});
var typed = new Typed(".typing-2", {
  strings: ["Freelancer", "Designer", "Developer", "Blogger", "Youtuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true

});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}



/* scroll up button */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const nav = document.querySelector('.nav');
const navTop = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= navTop + 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', fixNav);




/* toggle menu */

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav .menu');

function toggleMenu() {
  navMenu.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);

function resizeHandler() {
  if (window.innerWidth < 800) {
    menuBtn.addEventListener('click', toggleMenu);
  } else {
    menuBtn.removeEventListener('click', toggleMenu);
    navMenu.classList.remove('active');
  }
}

window.addEventListener('resize', resizeHandler);


/* light-mode section css start*/
function toggleDarkMode() {
  const body = document.querySelector('body');
  const toggleButton = document.querySelector('#dark-mode-toggle');

  body.classList.toggle('light-mode');
  body.classList.toggle('Dark-mode');

  if (body.classList.contains('light-mode')) {
    toggleButton.innerHTML = '<i class="fas fa-moon"></i> ';
  } else {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i> ';
  }
}
/* light-mode section css  end*/


/* team slider */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* team slider end */










