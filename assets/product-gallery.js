const galleryThumbs = new Swiper('.thumb-swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 10,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      allowTouchMove: false,
      slidesPerView: 0,
    },
    768: {
      slidesPerView: 4,
    }
  }
});

const galleryMain = new Swiper('.main-swiper', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
