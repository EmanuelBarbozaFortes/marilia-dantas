var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  mousewheel: false,
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
  loop: true,
});
