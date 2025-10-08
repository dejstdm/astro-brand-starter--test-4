/**
 * HeroSlider Module
 * Initializes Swiper slider for hero section
 */

export function initHeroSlider() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const heroSlider = document.querySelector('.hero-slider__swiper');
  
  if (!heroSlider) {
    return;
  }

  // Initialize Swiper
  const swiper = new Swiper('.hero-slider__swiper', {
    // Slider settings
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 800,
    
    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    
    // Pagination
    pagination: {
      el: '.hero-slider__pagination',
      clickable: true,
      type: 'bullets',
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    // Accessibility
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
    
    // Effects
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  return swiper;
}
