document.addEventListener('DOMContentLoaded', function(){
  const swiperHero = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: ".hero__swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },


  });
})
