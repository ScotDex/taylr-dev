// ── Loader ──
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('loaded');
    }, 800);
});

// ── Sticky Nav ──
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

// ── Hero Image Swiper ──
const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.hero-swiper .swiper-pagination',
        clickable: true
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// ── Text Swiper ──
const textSwiper = new Swiper('.text-swiper', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false
});