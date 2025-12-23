document.addEventListener("DOMContentLoaded", () => {

  const totalSlides = document.querySelectorAll('.hero__slide').length;
  const currentEl = document.querySelector('.hero__current');
  const totalEl = document.querySelector('.hero__total');
  const progressFill = document.querySelector('.hero__progress-fill');

  totalEl.textContent = totalSlides;

  let autoplayDelay = 3500;

  const heroSwiper = new Swiper('.hero__slider', {
    loop: true,
    speed: 1300,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    on: {
      init(swiper) {
        updateCounter(swiper);
        startProgress();
      },
      slideChange(swiper) {
        updateCounter(swiper);
        resetProgress();
        startProgress();
      }
    }
  });

  function updateCounter(swiper) {
    currentEl.textContent = swiper.realIndex + 1;
  }

  function startProgress() {
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    requestAnimationFrame(() => {
      progressFill.style.transition = `width ${autoplayDelay}ms linear`;
      progressFill.style.width = '100%';
    });
  }

  function resetProgress() {
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
  }

});
