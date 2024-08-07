const btnCart = document.querySelector('.btn-cart');
const btnCloseCart = document.querySelector('.btn-close-cart');
const btnHamburger = document.querySelector('.btn-hamburger');
const overlay = document.querySelector('.overlay');
const cartWrapper = document.querySelector('.cart-wrapper');
const navWrapper = document.querySelector('.nav-wrapper');
const body = document.body;
const navigation = document.getElementById('navigation');
const scrollUp = document.querySelector('.top-scroll');
let lastScrollPosition = 0;

const hideOverlay = () => {
  overlay.classList.remove('show');
  body.classList.remove('no-scroll');
  cartWrapper.removeEventListener('transitionend', hideOverlay);
  navWrapper.removeEventListener('transitionend', hideOverlay);
};

btnCart.addEventListener('click', () => {
  overlay.classList.add('show');
  cartWrapper.classList.add('show');
  body.classList.add('no-scroll');
});

btnCloseCart.addEventListener('click', () => {
  cartWrapper.classList.remove('show');
  cartWrapper.addEventListener('transitionend', hideOverlay);

  setTimeout(() => {
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
      body.classList.remove('no-scroll');
    }
  }, 350);
});

btnHamburger.addEventListener('click', () => {
  overlay.classList.add('show');
  navWrapper.classList.add('show');
  body.classList.add('no-scroll');
});

overlay.addEventListener('click', () => {
  navWrapper.classList.remove('show');
  navWrapper.addEventListener('transitionend', hideOverlay);

  setTimeout(() => {
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
      body.classList.remove('no-scroll');
    }
  }, 350);
});

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition >= 100) {
    navigation.classList.add('scrolled');
    scrollUp.classList.add('show');

    if (currentScrollPosition > 200) {
      if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up
        navigation.classList.add('hide');
      } else {
        // Scrolling down
        navigation.classList.remove('hide');
      }
    }
  } else {
    navigation.classList.remove('hide');

    if (currentScrollPosition === 0) {
      navigation.classList.remove('scrolled');
      scrollUp.classList.remove('show');
    }
  }

  lastScrollPosition = currentScrollPosition;
});
