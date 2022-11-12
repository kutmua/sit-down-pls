document.addEventListener('DOMContentLoaded', function(){
  const swiperSmall = new Swiper(".swiper-small", {
    spaceBetween: 38,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiperBig = new Swiper(".swiper-big", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperSmall,
    },
  });
})