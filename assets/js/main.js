// Main JavaScript

// Utility Functions
function loadJSON(url) {
  return fetch(url).then(response => response.json());
}

function createElement(tag, className = '', innerHTML = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

// Accordion functionality
class Accordion {
  constructor() {
    this.items = document.querySelectorAll('.accordion-item');
    this.init();
  }

  init() {
    this.items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      if (header) {
        header.addEventListener('click', () => this.toggle(item));
      }
    });
  }

  toggle(item) {
    const isActive = item.classList.contains('active');
    
    // Close all items
    this.items.forEach(i => {
      i.classList.remove('active');
      const content = i.querySelector('.accordion-content');
      if (content) {
        content.style.maxHeight = null;
      }
    });

    // Open selected item
    if (!isActive) {
      item.classList.add('active');
      const content = item.querySelector('.accordion-content');
      if (content) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  }
}

// Tab functionality
class Tabs {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.tabs = this.container.querySelectorAll('.tab-btn');
    this.panels = this.container.querySelectorAll('.tab-panel');
    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.selectTab(tab));
    });
  }

  selectTab(tab) {
    const tabId = tab.getAttribute('data-tab');
    
    // Deactivate all tabs
    this.tabs.forEach(t => t.classList.remove('active'));
    this.panels.forEach(p => p.classList.remove('active'));

    // Activate selected tab
    tab.classList.add('active');
    const panel = this.container.querySelector(`.tab-panel[data-tab="${tabId}"]`);
    if (panel) {
      panel.classList.add('active');
    }
  }
}

// Modal functionality
class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButtons = this.modal?.querySelectorAll('.modal-close');
    this.init();
  }

  init() {
    if (!this.modal) return;

    this.closeButtons?.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });
  }

  open() {
    this.modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize components
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Accordion();
    new Tabs('.tabs-container');
    initSmoothScroll();
  });
} else {
  new Accordion();
  new Tabs('.tabs-container');
  initSmoothScroll();
}

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
