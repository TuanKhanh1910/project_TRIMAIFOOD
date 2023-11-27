export default function relatedSwiper() {
  const related = document.querySelector(".related");

  if (related) {
    let swiper2 = new Swiper(related.querySelector(".relatedSwiper"), {
      loop: true,
      spaceBetween: 32,

      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        880: {
          slidesPerView: 3,
        },
      },
    });
  }
}
