var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // mobile + tablet - 320-990
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      // desktop >= 991
      992: {
        slidesPerView: 3.2,
        spaceBetween: 30,
      },
      1010: {
        slidesPerView: 3.2,
        spaceBetween: 30,
      }
    }
});