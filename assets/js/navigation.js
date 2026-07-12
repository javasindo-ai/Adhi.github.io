// Navigation Handler
class Navigation {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.navMenu = document.querySelector('.nav-menu');
    this.header = document.querySelector('header');
    this.navLinks = document.querySelectorAll('.nav-menu a');
    this.init();
  }

  init() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }
    
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    this.hamburger.classList.toggle('active');
    this.navMenu.classList.toggle('active');
  }

  closeMenu() {
    this.hamburger.classList.remove('active');
    this.navMenu.classList.remove('active');
  }

  handleScroll() {
    if (window.scrollY > 10) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  handleResize() {
    if (window.innerWidth > 768) {
      this.hamburger.classList.remove('active');
      this.navMenu.classList.remove('active');
    }
  }
}

// Initialize Navigation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
  });
} else {
  new Navigation();
}
