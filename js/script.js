const btnCart = document.querySelector('.btn-cart');
const btnCloseCart = document.querySelector('.btn-close-cart');
const btnHamburger = document.querySelector('.btn-hamburger');
const overlay = document.querySelector('.overlay');
const cartWrapper = document.querySelector('.cart-wrapper');
const navWrapper = document.querySelector('.nav-wrapper');

const hideOverlay = () => {
  overlay.classList.remove('show');
  cartWrapper.removeEventListener('transitionend', hideOverlay);
  navWrapper.removeEventListener('transitionend', hideOverlay);
};

btnCart.addEventListener('click', () => {
  overlay.classList.add('show');
  cartWrapper.classList.add('show');
});

btnCloseCart.addEventListener('click', () => {
  cartWrapper.classList.remove('show');
  cartWrapper.addEventListener('transitionend', hideOverlay);

  setTimeout(() => {
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
    }
  }, 350);
});

btnHamburger.addEventListener('click', () => {
  overlay.classList.add('show');
  navWrapper.classList.add('show');
});

overlay.addEventListener('click', () => {
  navWrapper.classList.remove('show');
  navWrapper.addEventListener('transitionend', hideOverlay);

  setTimeout(() => {
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
    }
  }, 350);
});
