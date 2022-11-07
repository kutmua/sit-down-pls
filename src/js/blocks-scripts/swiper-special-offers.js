document.addEventListener('DOMContentLoaded', function(){
  const swiperSpecialOffers = new Swiper('.special-offers__swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 32,
    // loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.special-offers__swiper-btn-next',
      prevEl: '.special-offers__swiper-btn-prev',
    },

  });
})