import Swiper from 'swiper/bundle';
import mixitup from 'mixitup';
import ScrollReveal from 'scrollreveal';

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

//menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// change background header
function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

let swiperPopular = new Swiper('.popular__container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
});

// mixitup

let mixerFeatured = mixitup('.featured__content', {
  selectors: {
    target: '.featured__card',
  },
  animation: {
    duration: 300,
  },
});

// link active featured
const linkFeatured = document.querySelectorAll('.featured__item');

function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove('active-featured'));
  this.classList.add('active-featured');
}
linkFeatured.forEach((l) => l.addEventListener('click', activeFeatured));

// scrollup
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// scroll section active line
const section = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ' ]')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ' ]')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__title, .popular__container, .featured__filters`);
sr.reveal(`.home__subtitle`, { delay: 800 });
sr.reveal(`.home__icon`, { delay: 700 });
sr.reveal(`.home__bike`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 1000 });
sr.reveal(`.home__bike-data`, { delay: 900, interval: 100, origin: 'bottom' });
sr.reveal(`.home__button`, { delay: 1000, origin: 'bottom' });
sr.reveal(`.about__group, .offer__data`, { origin: 'left' });
sr.reveal(`.about__data, offer__img`, { origin: 'right' });
sr.reveal(`.featured__card, .logos__content, .footer__content`, {
  interval: 100,
});
