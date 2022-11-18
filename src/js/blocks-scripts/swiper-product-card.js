document.addEventListener('DOMContentLoaded', function(){
  const swiperSmallPreview = new Swiper(".swiper-small", {
    spaceBetween: 38,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    initialSlide: 5,
  });
  const swiperBigPreview = new Swiper(".swiper-big", {
    spaceBetween: 10,
    initialSlide: 4,
    loop: true,
    mousewheel: true,
    thumbs: {
      swiper: swiperSmallPreview,
    },
  });

  /* ---------------------------------------- */
  const swiperSimilarProducts = new Swiper(".similar-products-swiper", {
    spaceBetween: 32,
    slidesPerView: 4,

    navigation: {
      nextEl: ".similar__swiper-btn-next",
      prevEl: ".similar__swiper-btn-prev"
    },
  });

  /* ---------------------------------------- */
  const swiperModalSmall = new Swiper(".modal-swiper-small", {
    spaceBetween: 78,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiperModalBig = new Swiper(".modal-swiper-big", {
    spaceBetween: 10,
    initialSlide: 4,
    loop: true,
    mousewheel: true,
    thumbs: {
      swiper: swiperModalSmall,
    },
  });
})