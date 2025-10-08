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

  const blogSlider = document.querySelector('.blog-preview__slider');
  
  if (!blogSlider) {
    return;
  }

  // Initialize Swiper for mobile only
  const swiper = new Swiper('.blog-preview__slider', {
    // Slider settings
    slidesPerView: 1,
    spaceBetween: 17,
    centeredSlides: true,
    loop: false,
    speed: 600,
    
    // Responsive breakpoints
    breakpoints: {
      // When window width is >= 768px, destroy the swiper
      768: {
        enabled: false,
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
