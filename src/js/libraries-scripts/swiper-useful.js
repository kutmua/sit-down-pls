document.addEventListener('DOMContentLoaded', function(){
  const swiperUseful = new Swiper('.articles-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 32,

    navigation: {
      nextEl: '.articles-swiper-btn-next',
      prevEl: '.articles-swiper-btn-prev',
    },

  });
})