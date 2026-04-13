/* ================================================
   TRIPLEEME — main.js
   Smooth Scroll · Cursor · Menu · Typewriter
   GSAP ScrollTrigger · Swiper · Pricing Toggle
   Portfolio Filters · Form Validation
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     PAGE LOADER
  ───────────────────────────────────────────── */
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-brand">
      <span style="color:var(--text-primary)">Triple</span><span style="color:var(--accent)">Eme</span>
    </div>
    <div class="loader-bar"><div class="loader-bar-fill"></div></div>
  `;
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.style.overflow = '';
    }, 800);
  });

  document.body.style.overflow = 'hidden';

  /* ─────────────────────────────────────────────
     ANCHOR LINKS — Scroll nativo sin lag
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  /* ─────────────────────────────────────────────
     CUSTOM CURSOR
  ───────────────────────────────────────────── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll('a, button, [role="button"], .filter-btn, .portfolio-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ─────────────────────────────────────────────
     NAVBAR — Scroll State
  ───────────────────────────────────────────── */
  const nav = document.getElementById('mainNav');

  function updateNav() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ─────────────────────────────────────────────
     FULLSCREEN MENU
  ───────────────────────────────────────────── */
  const menuToggle = document.getElementById('menuToggle');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  function openMenu() {
    fullscreenMenu.classList.add('is-open');
    fullscreenMenu.setAttribute('aria-hidden', 'false');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    fullscreenMenu.classList.remove('is-open');
    fullscreenMenu.setAttribute('aria-hidden', 'true');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  document.querySelectorAll('[data-close-menu]').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ─────────────────────────────────────────────
     GSAP + ScrollTrigger
  ───────────────────────────────────────────── */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline GSAP animations
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: item.classList.contains('timeline-item--right') ? 60 : -60,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
      });
    });

    // Hero parallax on scroll
    gsap.to('.hero-bg-grid', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 60,
      opacity: 0.3,
    });

    // Orbs parallax
    gsap.to('.hero-orb--1', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
      y: -80,
    });

    gsap.to('.hero-orb--2', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
      y: -50,
    });

    // Section titles reveal
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }

  /* ─────────────────────────────────────────────
     AOS Init
  ───────────────────────────────────────────── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }

  /* ─────────────────────────────────────────────
     TYPEWRITER EFFECT
  ───────────────────────────────────────────── */
  const typewriterEl = document.getElementById('typewriterText');
  const words = ['Empresas', 'Autónomos', 'Bodas', 'Startups', 'Creativos'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimer;

  function typeWriter() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;
    }

    clearTimeout(typeTimer);
    typeTimer = setTimeout(typeWriter, delay);
  }

  if (typewriterEl) {
    typeWriter();
  }

  /* ─────────────────────────────────────────────
     MAGNETIC BUTTONS
  ───────────────────────────────────────────── */
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s ease';
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.15s ease';
    });
  });

  /* ─────────────────────────────────────────────
     3D CARD TILT
  ───────────────────────────────────────────── */
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition = 'transform 0.4s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease';
    });
  });

  /* ─────────────────────────────────────────────
     PORTFOLIO FILTERS
  ───────────────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('#portfolioGrid .portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      portfolioCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Inject fadeIn keyframe
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(styleSheet);

  /* ─────────────────────────────────────────────
     SWIPER — Portfolio Mobile
  ───────────────────────────────────────────── */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.portfolio-swiper', {
      slidesPerView: 1.1,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.portfolio-swiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: { slidesPerView: 1.3 },
      },
    });

    /* ─────────────────────────────────────────────
       SWIPER — Testimonios
    ───────────────────────────────────────────── */
    new Swiper('.testimonios-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.testimonios-swiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.testimonios-swiper .swiper-button-prev',
        nextEl: '.testimonios-swiper .swiper-button-next',
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }




  /* ─────────────────────────────────────────────
     CONTACT FORM — Real-time validation
  ───────────────────────────────────────────── */
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmit');

  if (form) {
    const fields = {
      contactName: {
        validate: v => v.trim().length >= 2,
        errorMsg: 'Escribe al menos 2 caracteres',
        successMsg: '✓ Perfecto',
      },
      contactEmail: {
        validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
        errorMsg: 'Introduce un email válido',
        successMsg: '✓ Email correcto',
      },
      contactPhone: {
        validate: v => v === '' || /^[6-9][0-9]{8}$/.test(v.replace(/\s/g, '')),
        errorMsg: 'Formato: 6XX XXX XXX',
        successMsg: '✓ Número correcto',
      },
      contactMessage: {
        validate: v => v.trim().length >= 20,
        errorMsg: 'Escribe al menos 20 caracteres',
        successMsg: '✓ Mensaje recibido',
      },
    };

    Object.entries(fields).forEach(([id, config]) => {
      const input = document.getElementById(id);
      if (!input) return;

      const feedback = input.parentElement.querySelector('.form-feedback');

      const validate = () => {
        const isValid = config.validate(input.value);
        input.classList.toggle('is-valid', isValid);
        input.classList.toggle('is-invalid', !isValid && input.value !== '');

        if (feedback) {
          feedback.textContent = !isValid && input.value !== '' ? config.errorMsg :
                                  isValid ? config.successMsg : '';
          feedback.className = `form-feedback ${isValid ? 'valid' : (!isValid && input.value !== '' ? 'invalid' : '')}`;
        }
        return isValid;
      };

      input.addEventListener('blur', validate);
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid') || input.classList.contains('is-valid')) {
          validate();
        }
      });
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();

      // Validate all fields
      let isFormValid = true;
      Object.entries(fields).forEach(([id]) => {
        const input = document.getElementById(id);
        if (!input) return;
        const feedback = input.parentElement.querySelector('.form-feedback');
        const config = fields[id];
        const isValid = config.validate(input.value);
        if (!isValid) {
          input.classList.add('is-invalid');
          if (feedback) {
            feedback.textContent = config.errorMsg;
            feedback.className = 'form-feedback invalid';
          }
          isFormValid = false;
        }
      });

      if (!isFormValid) return;

      // Simulate sending
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      await new Promise(resolve => setTimeout(resolve, 2000));

      submitBtn.classList.remove('is-loading');
      submitBtn.classList.add('is-success');

      setTimeout(() => {
        form.reset();
        submitBtn.classList.remove('is-success');
        submitBtn.disabled = false;
        form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
          el.classList.remove('is-valid', 'is-invalid');
        });
        form.querySelectorAll('.form-feedback').forEach(fb => {
          fb.textContent = '';
          fb.className = 'form-feedback';
        });
      }, 3000);
    });
  }

  /* ─────────────────────────────────────────────
     SCROLL PROGRESS (subtle nav indicator)
  ───────────────────────────────────────────── */
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    z-index: 9999;
    width: 0%;
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });

  /* ─────────────────────────────────────────────
     ACTIVE NAV LINK (Intersection Observer)
  ───────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const menuLinks = document.querySelectorAll('.menu-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.style.color = href === `#${entry.target.id}` ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));

});
