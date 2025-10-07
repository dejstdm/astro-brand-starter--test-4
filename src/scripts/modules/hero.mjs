// ==========================================================================
// Hero Production Component Module
// ==========================================================================

export function initHero() {
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize hero slider
    const heroSlider = document.querySelector('.js__hero-slider');
    
    if (heroSlider) {
      // Import Swiper from global scope (loaded via CDN)
      const { Swiper } = window;
      
      if (Swiper) {
        const swiper = new Swiper(heroSlider, {
          // Basic settings
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          speed: 800,
          effect: 'slide',
          
          // Pagination
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          },
          
          // Keyboard navigation
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          
          // Touch/mouse settings
          touchRatio: 1,
          touchAngle: 45,
          grabCursor: true,
          
          // Responsive breakpoints
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40
            }
          },
          
          // Callbacks
          on: {
            init: function() {
              console.log('Hero slider initialized');
              
              // Add fade-in animation to first slide
              const firstSlide = this.slides[this.activeIndex];
              if (firstSlide) {
                animateSlideContent(firstSlide, 'in');
              }
            },
            
            slideChange: function() {
              // Animate out previous slide
              const prevSlide = this.slides[this.previousIndex];
              if (prevSlide) {
                animateSlideContent(prevSlide, 'out');
              }
              
              // Animate in current slide
              const currentSlide = this.slides[this.activeIndex];
              if (currentSlide) {
                setTimeout(() => {
                  animateSlideContent(currentSlide, 'in');
                }, 200);
              }
            },
            
            autoplayStart: function() {
              console.log('Hero slider autoplay started');
            },
            
            autoplayStop: function() {
              console.log('Hero slider autoplay stopped');
            }
          }
        });
        
        // Pause autoplay on hover
        heroSlider.addEventListener('mouseenter', () => {
          swiper.autoplay.stop();
        });
        
        // Resume autoplay on mouse leave
        heroSlider.addEventListener('mouseleave', () => {
          swiper.autoplay.start();
        });
        
        // Pause autoplay when tab is not active
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.start();
          }
        });
        
        // Handle mobile menu toggle
        initMobileMenu();
        
        // Store swiper instance globally for debugging
        window.heroSwiper = swiper;
        
      } else {
        console.error('Swiper library not found. Make sure Swiper is loaded before this script.');
      }
    }
  });
}

// ==========================================================================
// Slide Animation Helper
// ==========================================================================

function animateSlideContent(slide, direction) {
  const textSection = slide.querySelector('.hero__text-section');
  const visualSection = slide.querySelector('.hero__visual-section');
  
  if (direction === 'in') {
    // Reset any previous animations
    if (textSection) {
      textSection.style.animation = 'none';
      textSection.offsetHeight; // Force reflow
      textSection.style.animation = 'fadeInLeft 0.8s ease-out forwards';
    }
    
    if (visualSection) {
      visualSection.style.animation = 'none';
      visualSection.offsetHeight; // Force reflow
      visualSection.style.animation = 'fadeInRight 0.8s ease-out 0.2s forwards';
    }
  } else if (direction === 'out') {
    // Fade out animations
    if (textSection) {
      textSection.style.animation = 'fadeOutLeft 0.4s ease-in forwards';
    }
    
    if (visualSection) {
      visualSection.style.animation = 'fadeOutRight 0.4s ease-in forwards';
    }
  }
}

// ==========================================================================
// Mobile Menu Functionality
// ==========================================================================

function initMobileMenu() {
  const mobileToggle = document.querySelector('.hero__mobile-toggle');
  const navMenu = document.querySelector('.hero__nav-menu');
  const navActions = document.querySelector('.hero__nav-actions');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('mobile-open');
      
      if (isOpen) {
        navMenu.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      } else {
        navMenu.classList.add('mobile-open');
        navActions?.classList.add('mobile-open');
        mobileToggle.classList.add('active');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hero__nav-content')) {
        navMenu.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navMenu.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      }
    });
  }
}

// ==========================================================================
// Additional Hero Slider Utilities
// ==========================================================================

// Function to manually control slider (useful for external buttons)
export function controlHeroSlider(action, value) {
  const swiper = window.heroSwiper;
  
  if (!swiper) {
    console.warn('Hero slider not initialized');
    return;
  }
  
  switch (action) {
    case 'next':
      swiper.slideNext();
      break;
    case 'prev':
      swiper.slidePrev();
      break;
    case 'goto':
      if (typeof value === 'number') {
        swiper.slideTo(value);
      }
      break;
    case 'play':
      swiper.autoplay.start();
      break;
    case 'pause':
      swiper.autoplay.stop();
      break;
    default:
      console.warn('Unknown action:', action);
  }
}

// Function to get current slide information
export function getHeroSliderInfo() {
  const swiper = window.heroSwiper;
  
  if (!swiper) {
    console.warn('Hero slider not initialized');
    return null;
  }
  
  return {
    activeIndex: swiper.activeIndex,
    realIndex: swiper.realIndex,
    slides: swiper.slides.length,
    isAutoplay: swiper.autoplay.running
  };
}
