// main.js — 主逻辑
(function () {
  'use strict';

  // ========================================
  // Theme Toggle
  // ========================================
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else if (prefersDark.matches) {
      setTheme('dark');
    }
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  initTheme();

  // ========================================
  // Language Toggle
  // ========================================
  const langToggle = document.getElementById('langToggle');

  function updateLangButton() {
    langToggle.textContent = window.i18n.currentLang === 'zh' ? 'EN' : '中';
  }

  langToggle.addEventListener('click', () => {
    window.i18n.toggle();
    updateLangButton();
  });

  updateLangButton();
  window.i18n.apply();

  // ========================================
  // Mobile Menu
  // ========================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ========================================
  // Active Nav Link on Scroll
  // ========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinksAll.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ========================================
  // Scroll Animations (Intersection Observer)
  // ========================================
  const animateElements = document.querySelectorAll('.animate-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animateElements.forEach(el => observer.observe(el));

  // ========================================
  // Skill Progress Bars
  // ========================================
  const skillBars = document.querySelectorAll('.skill-progress');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ========================================
  // Number Counter Animation
  // ========================================
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'), 10);
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    function update() {
      current += step;
      if (current >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ========================================
  // Project Filter
  // ========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.display = '';
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });

  // ========================================
  // Typewriter Effect
  // ========================================
  const typewriterEl = document.getElementById('typewriter');
  let typewriterTimer = null;

  function startTypewriter() {
    if (typewriterTimer) {
      clearTimeout(typewriterTimer);
    }

    const roles = window.i18n.getRoles();
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
          isDeleting = true;
          typewriterTimer = setTimeout(type, 2000);
          return;
        }

        typewriterTimer = setTimeout(type, 80);
      } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          typewriterTimer = setTimeout(type, 400);
          return;
        }

        typewriterTimer = setTimeout(type, 40);
      }
    }

    type();
  }

  startTypewriter();

  window.addEventListener('langChanged', () => {
    startTypewriter();
  });

  // ========================================
  // Smooth scroll for anchor links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 60;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ========================================
  // Mouse Glow Effect
  // ========================================
  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  document.body.appendChild(glow);

  let glowX = 0, glowY = 0, currentX = 0, currentY = 0;
  let rafId = null;

  document.addEventListener('mousemove', (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
    if (!rafId) {
      rafId = requestAnimationFrame(updateGlow);
    }
  }, { passive: true });

  function updateGlow() {
    currentX += (glowX - currentX) * 0.15;
    currentY += (glowY - currentY) * 0.15;
    glow.style.translate = `${currentX}px ${currentY}px`;

    if (Math.abs(glowX - currentX) > 0.5 || Math.abs(glowY - currentY) > 0.5) {
      rafId = requestAnimationFrame(updateGlow);
    } else {
      rafId = null;
    }
  }

  // Hide on mobile / touch devices
  window.addEventListener('touchstart', () => {
    glow.style.display = 'none';
  }, { once: true });

})();