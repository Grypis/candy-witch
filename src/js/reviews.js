import Swiper from 'swiper/bundle';
import 'swiper/scss';

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  let slidesPerView;
  if (width > 320 && width < 1440) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
  new Swiper('.swiper-reviews', {
    slidesPerView,
    spaceBetween: 0,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
