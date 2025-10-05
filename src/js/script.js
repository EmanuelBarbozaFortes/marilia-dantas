var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  mousewheel: false,
  touchStartPreventDefault: false,
  loop: true,
});


var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  breakpoints: {
    320: { // mobile
      slidesPerView: 1,
      grid: { rows: 3 },
    },
    640: { // tablets
      slidesPerView: 2,
      grid: { rows: 2 },
    },
    1024: { // desktops
      slidesPerView: 3,
      grid: { rows: 2 },
    },
  },
  autoplay: true,
});

var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  breakpoints: {
    320: { // mobile
      slidesPerView: 1,
      grid: { rows: 2 },
    },
    640: { // tablets
      slidesPerView: 2,
      grid: { rows: 3 },
    },
    960: { // desktops
      slidesPerView: 3,
      grid: { rows: 1 },
    },
  },
  autoplay: true,
});

const lenis = new Lenis({
  // Ajuste fino opcional:
  duration: 2.3,        // velocidade geral da animação
  // smoothWheel: true,
  // smoothTouch: false
});

// 2) Loop de animação do Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 3) Scroll suave em âncoras do tipo href="#..."
const header = document.querySelector('header');
const headerHeight = header ? header.offsetHeight : 0;

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return; // se não achar a seção, segue normal

    e.preventDefault();
    lenis.scrollTo(targetEl, { offset: -headerHeight });

    // Atualiza a URL sem “pular” a página
    history.pushState(null, '', targetId);
  });
});


document.querySelectorAll('.mySwiper1, .mySwiper2, .mySwiper3')
  .forEach(el => el.addEventListener('touchstart', () => {
    lenis.stop(); // pausa o Lenis durante o toque
  }));

document.querySelectorAll('.mySwiper1, .mySwiper2, .mySwiper3')
  .forEach(el => el.addEventListener('touchend', () => {
    lenis.start(); // retoma o Lenis depois
  }));