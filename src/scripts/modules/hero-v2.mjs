// ==========================================================================
// HeroV2 Production Component Module
// ==========================================================================

export function initHeroV2() {
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu functionality
    initMobileMenu();
    
    // Initialize pagination dots interaction (if needed)
    initPaginationDots();
  });
}

// ==========================================================================
// Mobile Menu Functionality
// ==========================================================================

function initMobileMenu() {
  const mobileToggle = document.querySelector('.hero-v2__mobile-toggle');
  const navMenu = document.querySelector('.hero-v2__nav-menu');
  const navActions = document.querySelector('.hero-v2__nav-actions');
  
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
      if (!e.target.closest('.hero-v2__nav-content')) {
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

    // Close menu when clicking on nav links (mobile)
    const navLinks = navMenu.querySelectorAll('.hero-v2__nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

// ==========================================================================
// Pagination Dots Interaction
// ==========================================================================

function initPaginationDots() {
  const paginationDots = document.querySelectorAll('.hero-v2__pagination circle');
  
  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Reset all dots to inactive state
      paginationDots.forEach(d => {
        d.setAttribute('opacity', '0.3');
      });
      
      // Set clicked dot to active state
      dot.setAttribute('opacity', '1');
      
      console.log(`Pagination dot ${index + 1} clicked`);
      
      // Here you could add functionality to change content
      // For example, if this was connected to a slider or content sections
    });

    // Add hover effects
    dot.addEventListener('mouseenter', () => {
      if (dot.getAttribute('opacity') === '0.3') {
        dot.setAttribute('opacity', '0.6');
      }
    });

    dot.addEventListener('mouseleave', () => {
      if (dot.getAttribute('opacity') === '0.6') {
        dot.setAttribute('opacity', '0.3');
      }
    });
  });
}

// ==========================================================================
// Utility Functions
// ==========================================================================

// Function to programmatically control mobile menu
export function toggleMobileMenu(action = 'toggle') {
  const mobileToggle = document.querySelector('.hero-v2__mobile-toggle');
  const navMenu = document.querySelector('.hero-v2__nav-menu');
  const navActions = document.querySelector('.hero-v2__nav-actions');
  
  if (!mobileToggle || !navMenu) return;
  
  const isOpen = navMenu.classList.contains('mobile-open');
  
  switch (action) {
    case 'open':
      if (!isOpen) {
        navMenu.classList.add('mobile-open');
        navActions?.classList.add('mobile-open');
        mobileToggle.classList.add('active');
      }
      break;
    case 'close':
      if (isOpen) {
        navMenu.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      }
      break;
    case 'toggle':
    default:
      if (isOpen) {
        navMenu.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      } else {
        navMenu.classList.add('mobile-open');
        navActions?.classList.add('mobile-open');
        mobileToggle.classList.add('active');
      }
      break;
  }
}

// Function to get mobile menu state
export function getMobileMenuState() {
  const navMenu = document.querySelector('.hero-v2__nav-menu');
  return navMenu ? navMenu.classList.contains('mobile-open') : false;
}
