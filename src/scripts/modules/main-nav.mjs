/**
 * MainNav Module
 * Handles mobile menu toggle and animations
 */

export function initMainNav() {
  const toggle = document.querySelector('.main-nav__toggle');
  const mobileMenu = document.querySelector('.main-nav__mobile-menu');
  const mobileLinks = document.querySelectorAll('.main-nav__mobile-link');

  if (!toggle || !mobileMenu) {
    return;
  }

  // Toggle menu
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    
    toggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('nav-open');
  });

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideNav = e.target.closest('.main-nav');
    const isMenuOpen = mobileMenu.classList.contains('is-open');

    if (!isClickInsideNav && isMenuOpen) {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    }
  });
}
