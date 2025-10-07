/**
 * Clients Module
 * Initializes Swiper slider for client logos on mobile
 */

export function initClients() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const clientsSlider = document.querySelector('.clients__logo-slider');
  
  if (!clientsSlider) {
    return;
  }

  // Initialize Swiper for mobile only
  const swiper = new Swiper('.clients__logo-slider', {
    slidesPerView: 'auto',
    spaceBetween: 55,
    loop: true,
    speed: 600,
    
    // Autoplay
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    
    // Free mode for continuous scrolling
    freeMode: true,
    freeModeMomentum: true,
    
    // Centered slides
    centeredSlides: false,
    
    // Breakpoints
    breakpoints: {
      // Hide on desktop
      768: {
        enabled: false,
      },
    },
  });

  return swiper;
}
