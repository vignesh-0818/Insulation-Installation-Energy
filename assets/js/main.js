/**
 * ThermaGuard™ - Main JavaScript Controller
 * Handles Theme (Dark/Light), Direction (RTL/LTR), Header behavior, and UI interactions
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 1. Theme Toggle (Dark / Light Mode)
  // -------------------------------------------------------------
  const THEME_STORAGE_KEY = 'thermaguard_theme';
  const htmlEl = document.documentElement;

  function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function updateThemeToggleIcons(theme) {
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    themeToggles.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun-fill text-warning';
          btn.setAttribute('aria-label', 'Switch to light mode');
          btn.setAttribute('title', 'Switch to light mode');
        } else {
          icon.className = 'bi bi-moon-stars-fill';
          btn.setAttribute('aria-label', 'Switch to dark mode');
          btn.setAttribute('title', 'Switch to dark mode');
        }
      }
    });
  }

  // Initialize theme immediately
  const initialTheme = getStoredTheme();
  setTheme(initialTheme);

  // -------------------------------------------------------------
  // 2. RTL / LTR Toggle
  // -------------------------------------------------------------
  const RTL_STORAGE_KEY = 'thermaguard_dir';

  function getStoredDir() {
    return localStorage.getItem(RTL_STORAGE_KEY) || 'ltr';
  }

  function setDirection(dir) {
    htmlEl.setAttribute('dir', dir);
    localStorage.setItem(RTL_STORAGE_KEY, dir);
    updateRtlToggleButtons(dir);
  }

  function updateRtlToggleButtons(dir) {
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      const textSpan = btn.querySelector('.dir-label');
      if (dir === 'rtl') {
        if (textSpan) textSpan.textContent = 'LTR';
        btn.setAttribute('aria-label', 'Switch to Left to Right layout');
        btn.setAttribute('title', 'Switch to Left to Right layout');
      } else {
        if (textSpan) textSpan.textContent = 'RTL';
        btn.setAttribute('aria-label', 'Switch to Right to Left layout');
        btn.setAttribute('title', 'Switch to Right to Left layout');
      }
    });
  }

  // Initialize RTL immediately
  const initialDir = getStoredDir();
  setDirection(initialDir);

  // -------------------------------------------------------------
  // 3. DOM Ready Handlers
  // -------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle listeners
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    themeToggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentTheme = htmlEl.getAttribute('data-bs-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      });
    });

    // RTL toggle listeners
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentDir = htmlEl.getAttribute('dir') || 'ltr';
        const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        setDirection(nextDir);
      });
    });

    // Sticky Header Scroll effect
    const navbar = document.querySelector('.tg-navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('is-scrolled');
        } else {
          navbar.classList.remove('is-scrolled');
        }
      });
    }

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Active Navigation Highlighting
    highlightActiveNavLink();

    // Universal Form Validation & Clear Feedback Simulation
    setupFormValidationHandlers();

    // Numeric-only restriction for mobile number and PIN/ZIP code
    setupNumericOnlyInputs();
  });

  // -------------------------------------------------------------
  // 4. Highlight Active Navigation Link
  // -------------------------------------------------------------
  function highlightActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.tg-navbar .nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href === currentPath) {
        link.classList.add('active');
        // If it's inside a dropdown, highlight parent dropdown toggle
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });
  }

  // -------------------------------------------------------------
  // 5. Universal Form Submission Simulation & Validation
  // -------------------------------------------------------------
  function setupFormValidationHandlers() {
    const forms = document.querySelectorAll('.needs-validation, .tg-assessment-form, .tg-contact-form');

    forms.forEach(form => {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }

        form.classList.add('was-validated');

        // Show feedback message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Processing...';
        }

        setTimeout(() => {
          // Display alert inside form or alert container
          let alertBox = form.querySelector('.form-response-alert');
          if (!alertBox) {
            alertBox = document.createElement('div');
            alertBox.className = 'alert alert-success alert-dismissible fade show form-response-alert mt-3';
            alertBox.setAttribute('role', 'alert');
            form.appendChild(alertBox);
          }

          alertBox.innerHTML = `
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill fs-5 text-success"></i>
              <div>
                <strong>Assessment Request Received!</strong><br>
                Thank you! Our energy assessment coordinator will contact you within 24 business hours to schedule your on-site thermal evaluation. 
                <small class="d-block text-muted mt-1">(Static demo mode: Connect with Formspree, EmailJS, or your backend API for production email delivery.)</small>
              </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          `;

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }

          form.reset();
          form.classList.remove('was-validated');

          // Clear any existing refresh timer to avoid duplicate timers
          if (form._refreshTimeout) {
            clearTimeout(form._refreshTimeout);
          }

          // Page refreshes after exactly 5 seconds without countdown text or message-removal timer
          form._refreshTimeout = setTimeout(() => {
            window.location.reload();
          }, 5000);
        }, 800);
      }, false);
    });
  }

  // -------------------------------------------------------------
  // 6. Restrict Numeric-Only Inputs (Phone & ZIP/PIN Code)
  // -------------------------------------------------------------
  function setupNumericOnlyInputs() {
    const numericSelectors = '#contactPhone, #contactZip, #sidePhone, input[inputmode="numeric"]';
    const inputs = document.querySelectorAll(numericSelectors);

    inputs.forEach(input => {
      // Prevent non-digit keystrokes
      input.addEventListener('keydown', (e) => {
        const allowedControlKeys = [
          'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'
        ];
        if (allowedControlKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
          return;
        }
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      // Sanitize value on input (catches any missed keystrokes or IME)
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
      });

      // Filter pasted text so only digits are inserted
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData('text') || '';
        const digits = pasted.replace(/[^0-9]/g, '');
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const val = input.value;
        input.value = val.substring(0, start) + digits + val.substring(end);
        input.selectionStart = input.selectionEnd = start + digits.length;
        input.dispatchEvent(new Event('input'));
      });
    });
  }

})();
