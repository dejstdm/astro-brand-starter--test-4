/**
 * CommunityFeatures Module
 * Initializes Swiper slider for community features on mobile
 */

export function initCommunityFeatures() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const featuresSlider = document.querySelector('.community-features__slider');
  
  if (!featuresSlider) {
    return;
  }

  // Initialize Swiper for mobile only
  const swiper = new Swiper('.community-features__slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 600,
    
    // Pagination
    pagination: {
      el: '.community-features__pagination',
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
      prevSlideMessage: 'Previous feature',
      nextSlideMessage: 'Next feature',
      paginationBulletMessage: 'Go to feature {{index}}',
    },
    
    // Breakpoints - disable on desktop
    breakpoints: {
      768: {
        enabled: false,
      },
    },
  });

  return swiper;
}
