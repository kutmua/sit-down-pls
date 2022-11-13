document.addEventListener('DOMContentLoaded', function(){
  const swiperSmallPreview = new Swiper(".swiper-small", {
    spaceBetween: 38,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiperBigPreview = new Swiper(".swiper-big", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperSmallPreview,
    },
  });
  const swiperSimilarProducts = new Swiper(".similar-products-swiper", {
    spaceBetween: 32,
    slidesPerView: 4,

    navigation: {
      nextEl: ".similar__swiper-btn-next",
      prevEl: ".similar__swiper-btn-prev"
    },
  });
})