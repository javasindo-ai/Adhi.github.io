// Form Handler
class FormHandler {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    const inputs = this.form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
      this.showError(field, 'Kolom ini wajib diisi');
      return false;
    }

    if (field.type === 'email' && !this.isValidEmail(value)) {
      this.showError(field, 'Email tidak valid');
      return false;
    }

    this.clearError(field);
    return true;
  }

  isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  showError(field, message) {
    this.clearError(field);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
    field.classList.add('error');
  }

  clearError(field) {
    const errorDiv = field.parentElement.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
    field.classList.remove('error');
  }

  async handleSubmit(e) {
    e.preventDefault();

    const inputs = this.form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) return;

    // Collect form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    try {
      // Show loading state
      const submitBtn = this.form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Mengirim...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      this.showSuccess();
      this.form.reset();

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    } catch (error) {
      console.error('Error submitting form:', error);
      const submitBtn = this.form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Gagal. Coba lagi';
      submitBtn.disabled = false;
    }
  }

  showSuccess() {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = '✓ Pesan Anda telah terkirim. Kami akan menghubungi Anda segera!';
    this.form.parentElement.insertBefore(successMsg, this.form);
    
    setTimeout(() => {
      successMsg.remove();
    }, 5000);
  }
}

// Counter Animation
class Counter {
  constructor(element) {
    this.element = element;
    this.target = parseInt(element.getAttribute('data-target'));
    this.count = 0;
    this.speed = 30;
  }

  animate() {
    const increment = this.target / this.speed;
    const interval = setInterval(() => {
      this.count += increment;
      if (this.count >= this.target) {
        this.count = this.target;
        clearInterval(interval);
      }
      this.element.textContent = Math.floor(this.count).toLocaleString('id-ID');
    }, 30);
  }
}

// Initialize counters when they come into view
const observerOptions = {
  threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      const counter = new Counter(entry.target);
      counter.animate();
      entry.target.classList.add('counted');
      counterObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// Form initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ['contactForm', 'subscribeForm'].forEach(formId => {
      const form = document.getElementById(formId);
      if (form) {
        new FormHandler(formId);
      }
    });
  });
} else {
  ['contactForm', 'subscribeForm'].forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      new FormHandler(formId);
    }
  });
}
