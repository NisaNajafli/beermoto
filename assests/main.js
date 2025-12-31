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
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".advantages__card");

  cards.forEach((card, index) => {
    const num = document.createElement("span");
    num.className = "advantages__num";
    num.textContent = index + 1;
    card.prepend(num);
  });
});
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", () => {
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const header = item.querySelector(".faq-header");

  header.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      faqItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    }
  });
});
});
 document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.reviews-swiper', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
     0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
  }
});
});
const openBtns = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('[data-modal-overlay]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal(e) {
  e.preventDefault();
  modal.classList.add('is-active');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});