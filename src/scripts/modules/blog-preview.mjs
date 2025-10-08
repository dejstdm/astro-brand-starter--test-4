/**
 * BlogPreview Module
 * Initializes Swiper slider for blog preview cards on mobile
 */

export function initBlogPreview() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const blogSlider = document.querySelector('.blog-preview__list');

  if (!blogSlider) {
    return;
  }

  // Initialize Swiper for both mobile and desktop
  const swiper = new Swiper('.blog-preview__list', {
    // Slider settings
    slidesPerView: 'auto',
    spaceBetween: 17,
    centeredSlides: false,
    loop: false,
    speed: 600,

    // Responsive breakpoints
    breakpoints: {
      // Mobile: 1 slide visible, centered
      0: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 17,
      },
      // Desktop: auto slides (show all available), not centered
      768: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 24,
      },
    },

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Accessibility
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous blog post',
      nextSlideMessage: 'Next blog post',
    },
  });

  return swiper;
}
