document.addEventListener('DOMContentLoaded', function(){
  const swiperCatalog = new Swiper('.catalog__cards-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,


    pagination: {
      el: ".catalog__cards-swiper-btn",
      clickable: true,
      renderBullet: function (index, className) {
        return '<button class="cards-swiper-btn secondary-btn btn ' + className +'">' + (index + 1) + '</button>';
      },
    },
  });
})