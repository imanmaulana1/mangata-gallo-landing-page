const scrollUp = document.querySelector('.top-scroll');
const navigation = document.querySelector('.navigation-wrapper');
const btnHamburger = document.querySelector('.btn-hamburger');
const btnCloseCart = document.querySelector('.btn-close-cart');
const navWrapper = document.querySelector('.nav-wrapper');
const cartWrapper = document.querySelector('.cart-wrapper');
const body = document.body;
const overlay = document.querySelector('.overlay');
let lastScrollPosition = 0;

function hideOverlay() {
  overlay.classList.remove('show');
  body.classList.remove('no-scroll');
  cartWrapper.removeEventListener('transitionend', hideOverlay);
  navWrapper.removeEventListener('transitionend', hideOverlay);
}

function showCart() {
  overlay.classList.add('show');
  cartWrapper.classList.add('show');
  body.classList.add('no-scroll');
}

function closeCart() {
  cartWrapper.classList.remove('show');
  cartWrapper.addEventListener('transitionend', hideOverlay);

  setTimeout(() => {
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
      body.classList.remove('no-scroll');
    }
  }, 350);
}

function showMenuMobile() {
  overlay.classList.add('show');
  navWrapper.classList.add('show');
  body.classList.add('no-scroll');
}

function closeMenuMobile() {
  navWrapper.classList.remove('show');
  navWrapper.addEventListener('transitionend', hideOverlay);

  setTimeout(() => {
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
      body.classList.remove('no-scroll');
    }
  }, 350);
}

btnHamburger.addEventListener('click', showMenuMobile);

document.querySelectorAll('.btn-cart').forEach((btnCart) => {
  btnCart.addEventListener('click', showCart);
});

btnCloseCart.addEventListener('click', closeCart);

overlay.addEventListener('click', () => {
  closeMenuMobile();
  closeCart();
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
