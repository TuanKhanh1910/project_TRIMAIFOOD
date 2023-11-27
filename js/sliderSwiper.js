export default function sliderSwiper() {
  const slider = document.querySelector(".slider");

  if (slider) {
    let swiper = new Swiper(slider.querySelector(".mySwiper"), {
      //   loop: true,
      spaceBetween: 20,
      direction: "vertical",
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 3,
        },
        621: {
          slidesPerView: 3,
        },
      },
    });
    let swiper2 = new Swiper(slider.querySelector(".swiper"), {
      loop: true,
      spaceBetween: 10,
      //   autoplay: {
      //     delay: 5000,
      //   },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
      grabCursor: true,
      thumbs: {
        swiper: swiper,
      },
    });
  }
}
