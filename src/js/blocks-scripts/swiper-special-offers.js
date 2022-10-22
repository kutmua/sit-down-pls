document.addEventListener('DOMContentLoaded', function(){
  const swiperSpecialOffers = new Swiper('.special-offers__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.special-offers__swiper-btn-next',
      prevEl: '.special-offers__swiper-btn-prev',
    },

  });
})