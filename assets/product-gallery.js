const galleryThumbs = new Swiper('.thumb-swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 10,
  watchSlidesProgress: true,
});

const galleryMain = new Swiper('.main-swiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
