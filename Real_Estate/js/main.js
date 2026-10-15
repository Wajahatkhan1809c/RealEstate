/**
 * HASAAN REAL ESTATE - MAIN JAVASCRIPT & ANIMATION ENGINE
 * Robust, cinematic, performant animations.
 *
 * IMPORTANT: Scroll reveals are driven by IntersectionObserver adding a
 * `.revealed` class (CSS handles the transition). This guarantees content is
 * NEVER left permanently hidden if GSAP / ScrollTrigger fails or mis-refreshes.
 * GSAP + ScrollTrigger are used for the hero sequence, parallax and counters.
 */

function bootApp() {
  // Core UI
  initNavbarScroll();
  initMobileNavbar();
  highlightActiveNavLink();
  initHeroSearchBox();
  initTestimonialsCarousel();
  initBackToTop();
  initContactForm();

  // GSAP powered (progressive enhancement)
  initGSAPSystems();

  // Robust scroll reveals (always runs, independent of GSAP)
  initRevealSystem();
  initRevealFailsafe();
  initRevealFallback();
}

function initGSAPSystems() {
  if (!window.gsap || !window.ScrollTrigger) return false;
  gsap.registerPlugin(ScrollTrigger);
  initHeroAnimations();
  initHeroParallax();
  initStatCounters();
  initParallaxAccents();
  return true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}

// CDN scripts load asynchronously (defer). If GSAP/ScrollTrigger arrive after
// boot (slow network), wire the GSAP-powered systems as soon as they appear.
if (!window.gsap || !window.ScrollTrigger) {
  let gsapTries = 0;
  const gsapTimer = setInterval(() => {
    if (window.gsap && window.ScrollTrigger) {
      clearInterval(gsapTimer);
      initGSAPSystems();
    } else if (++gsapTries > 30) {
      clearInterval(gsapTimer);
    }
  }, 150);
}

/* ==========================================================================
   ROBUST SCROLL REVEAL SYSTEM
   ========================================================================== */
const REVEAL_SELECTORS = [
  '.section-title-wrap',
  '.service-card-item',
  '.why-us-card-item',
  '.testimonial-col',
  '.approach-step-card',
  '.home-service-card',
  '.property-grid-item',
  '.service-visual-col',
  '.service-content-col',
  '.about-preview-img-wrap',
  '.cta-banner-content',
  '.google-strip-flex',
  '.premium-form-card',
  '.feature-box',
  '.stat-item-box',
  '.contact-info-card',
  '.consult-preview-media',
  '.consult-preview-body',
  '.service-stat-item',
  '.service-intro-band',
  '.category-grid-item',
  '.guidance-item',
  '.location-item',
  '.locations-visual-item',
  '[data-reveal]'
];

let revealObserver = null;

function initRevealSystem() {
  const els = document.querySelectorAll(REVEAL_SELECTORS.join(','));
  if (!els.length) return;

  // Graceful degradation for very old browsers
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 90px 0px' });
  }

  els.forEach((el) => {
    if (el.classList.contains('revealed')) return;
    // Respect per-element stagger delays declared in markup
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) el.style.transitionDelay = delay + 'ms';
    revealObserver.observe(el);
  });
}

// Reveals any element that has reached the viewport. Used as a scroll-based
// failsafe so content is shown regardless of IO timing (fast scrolls, layout
// shifts, programmatic jumps).
function patrolReveals() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll(REVEAL_SELECTORS.join(',')).forEach((el) => {
    if (el.classList.contains('revealed')) return;
    if (el.getBoundingClientRect().top <= vh - 30) el.classList.add('revealed');
  });
}

let failsafeBound = false;
function initRevealFailsafe() {
  if (failsafeBound) return;
  failsafeBound = true;
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { patrolReveals(); ticking = false; });
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', patrolReveals, { passive: true });
  window.addEventListener('load', () => setTimeout(patrolReveals, 150));
}

// Exposed so dynamically rendered content (e.g. filtered property cards)
// can be re-scanned for reveals.
window.revealScan = () => {
  initRevealSystem();
  patrolReveals();
};

function initRevealFallback() {
  const revealAll = () => {
    document.querySelectorAll(REVEAL_SELECTORS.join(',')).forEach(el => {
      el.classList.add('revealed');
    });
  };
  // Absolute safety net: if a fatal script error occurs, content must never
  // remain invisible.
  window.addEventListener('error', revealAll);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') patrolReveals();
  });
}

/* ==========================================================================
   HERO ENTRANCE SEQUENCE (GSAP TIMELINE)
   ========================================================================== */
function initHeroAnimations() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  const heroBgImg = document.querySelector('.hero-bg-img');

  // Content entrance is handled by pure CSS animations (see style.css §7),
  // so hero text/buttons/stats are ALWAYS visible regardless of CDN timing.
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (heroBgImg) {
    tl.fromTo(heroBgImg, { scale: 1.12 }, { scale: 1, duration: 1.8, ease: 'power2.out' });
  }
}

/* ==========================================================================
   HERO BACKGROUND PARALLAX SCROLL
   ========================================================================== */
function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg-img');
  const heroSection = document.querySelector('.hero-section');
  if (!heroBg || !heroSection) return;

  gsap.to(heroBg, {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/* ==========================================================================
   SUBTLE PARALLAX ACCENTS (SERVICES / ABOUT IMAGES)
   ========================================================================== */
function initParallaxAccents() {
  const targets = document.querySelectorAll('.about-preview-img-wrap img, .consult-preview-media img');
  if (!targets.length) return;

  targets.forEach((img) => {
    gsap.fromTo(img,
      { yPercent: -4 },
      {
        yPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.about-preview-img-wrap, .consult-preview-media') || img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
}

/* ==========================================================================
   STATISTICS COUNTER ANIMATION
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  ScrollTrigger.create({
    trigger: counters[0],
    start: 'top 88%',
    once: true,
    onEnter: () => {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power1.out',
          onUpdate: () => { counter.textContent = Math.floor(obj.val) + suffix; }
        });
      });
    }
  });
}

/* ==========================================================================
   NAVBAR SCROLL SHRINK & SHADOW
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.site-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   MOBILE NAVBAR TOGGLE
   ========================================================================== */
function initMobileNavbar() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-nav-backdrop';
  document.body.appendChild(backdrop);

  let isOpen = false;

  const open = () => {
    isOpen = true;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('nav-open');
    toggleBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (window.gsap) {
      gsap.fromTo(drawer, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(drawer.querySelectorAll('.nav-link-item, .btn-primary-custom'),
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.28, stagger: 0.045, ease: 'power2.out', delay: 0.05 });
    }
  };

  const close = () => {
    isOpen = false;
    toggleBtn.innerHTML = '<i class="bi bi-list"></i>';
    toggleBtn.setAttribute('aria-expanded', 'false');
    backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (window.gsap) {
      gsap.to(drawer, {
        opacity: 0, y: -12, duration: 0.2, ease: 'power2.in',
        onComplete: () => drawer.classList.remove('open')
      });
    } else {
      drawer.classList.remove('open');
    }
  };

  toggleBtn.addEventListener('click', () => { isOpen ? close() : open(); });
  backdrop.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(l => l.addEventListener('click', close));
  window.addEventListener('resize', () => { if (window.innerWidth > 991 && isOpen) close(); });
}

/* ==========================================================================
   HIGHLIGHT ACTIVE NAV LINK
   ========================================================================== */
function highlightActiveNavLink() {
  const navLinks = document.querySelectorAll('.site-navbar .nav-link-item, .mobile-nav-drawer .nav-link-item');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().split('?')[0];
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================================================
   HERO SEARCH BOX TABS & REDIRECT
   ========================================================================== */
function initHeroSearchBox() {
  const searchBox = document.getElementById('hero-search-box');
  if (!searchBox) return;

  const tabButtons = searchBox.querySelectorAll('.search-tab-btn');
  let currentPurpose = 'Buy';

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPurpose = btn.getAttribute('data-purpose');
    });
  });

  const searchForm = document.getElementById('hero-search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('search-type')?.value || '';
      const location = document.getElementById('search-location')?.value || '';
      const minPrice = document.getElementById('search-min-price')?.value || '';
      const maxPrice = document.getElementById('search-max-price')?.value || '';

      const queryParams = new URLSearchParams();
      if (currentPurpose) queryParams.set('purpose', currentPurpose);
      if (type && type !== 'All Types') queryParams.set('type', type);
      if (location.trim()) queryParams.set('location', location.trim());
      if (minPrice.trim()) queryParams.set('minPrice', minPrice.trim());
      if (maxPrice.trim()) queryParams.set('maxPrice', maxPrice.trim());

      window.location.href = `properties.html?${queryParams.toString()}`;
    });
  }
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  let backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top-btn';
    backToTopBtn.className = 'scroll-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Scroll to top');
    backToTopBtn.innerHTML = '<i class="bi bi-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) backToTopBtn.classList.add('visible');
    else backToTopBtn.classList.remove('visible');
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ==========================================================================
   CONTACT FORM VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success-banner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const messageInput = form.querySelector('[name="message"]');

    if (!nameInput.value.trim()) { showInputError(nameInput, 'Please provide your full name'); isValid = false; }
    else clearInputError(nameInput);

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) { showInputError(emailInput, 'Please enter a valid email address'); isValid = false; }
    else clearInputError(emailInput);

    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) { showInputError(phoneInput, 'Please enter a valid phone number'); isValid = false; }
    else clearInputError(phoneInput);

    if (!messageInput.value.trim()) { showInputError(messageInput, 'Please write your message or requirement'); isValid = false; }
    else clearInputError(messageInput);

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending Message...';
      }
      setTimeout(() => {
        form.reset();
        form.style.display = 'none';
        if (successBox) successBox.style.display = 'block';
      }, 700);
    }
  });

  function showInputError(input, message) {
    input.classList.add('is-invalid');
    let feedback = input.parentNode.querySelector('.invalid-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback text-danger small mt-1';
      input.parentNode.appendChild(feedback);
    }
    feedback.textContent = message;
  }

  function clearInputError(input) {
    input.classList.remove('is-invalid');
    const feedback = input.parentNode.querySelector('.invalid-feedback');
    if (feedback) feedback.remove();
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/* ==========================================================================
   TESTIMONIALS CAROUSEL (infinite auto-looping)
   ========================================================================== */
function initTestimonialsCarousel() {
  const root = document.getElementById('testimonials-carousel');
  if (!root) return;

  const track = root.querySelector('.tc-track');
  const viewport = root.querySelector('.tc-viewport');
  const dotsWrap = root.querySelector('.tc-dots');
  const prevBtn = root.querySelector('.tc-prev');
  const nextBtn = root.querySelector('.tc-next');
  if (!track || !viewport) return;

  const originals = Array.from(track.children).filter(el => !el.classList.contains('clone'));
  if (originals.length < 2) return;

  const AUTOPLAY_MS = 4000;
  const WRAP_MS = 700;

  let slidesPerView = responsiveSlidesPerView();
  let clonesBefore = slidesPerView;
  let pos = clonesBefore;
  let logical = 0;
  let isAnimating = false;
  let autoTimer = null;
  let dots = [];

  function responsiveSlidesPerView() {
    const w = window.innerWidth;
    const raw = w >= 992 ? 3 : (w >= 640 ? 2 : 1);
    return Math.max(1, Math.min(raw, originals.length));
  }

  function itemWidthPx() {
    return viewport.clientWidth / slidesPerView;
  }

  function applyTransform(animate) {
    track.style.transition = animate ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
    track.style.transform = 'translateX(' + (-pos * itemWidthPx()) + 'px)';
  }

  function updateDots() {
    const total = originals.length;
    logical = ((pos - clonesBefore) % total + total) % total;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === logical));
  }

  function renderDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    dots = originals.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'tc-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', () => {
        if (isAnimating) return;
        pos = clonesBefore + i;
        applyTransform(true);
        updateDots();
        restartAuto();
      });
      dotsWrap.appendChild(dot);
      return dot;
    });
  }

  function buildClones() {
    track.querySelectorAll('.tc-slide.clone').forEach(n => n.remove());

    slidesPerView = responsiveSlidesPerView();
    clonesBefore = slidesPerView;

    const before = document.createDocumentFragment();
    for (let i = originals.length - clonesBefore; i < originals.length; i++) {
      if (i < 0) continue;
      const c = originals[i].cloneNode(true);
      c.classList.add('clone');
      c.setAttribute('aria-hidden', 'true');
      before.appendChild(c);
    }
    track.insertBefore(before, track.firstChild);

    const after = document.createDocumentFragment();
    for (let i = 0; i < clonesBefore; i++) {
      const c = originals[i].cloneNode(true);
      c.classList.add('clone');
      c.setAttribute('aria-hidden', 'true');
      after.appendChild(c);
    }
    track.appendChild(after);

    track.style.setProperty('--tc-spv', slidesPerView);
    pos = clonesBefore;
    applyTransform(false);
  }

  let wrapTimer = null;

  function scheduleWrap() {
    clearTimeout(wrapTimer);
    wrapTimer = setTimeout(() => {
      const total = originals.length;
      const maxPos = clonesBefore + total;
      if (pos >= maxPos) {
        pos -= total;
        applyTransform(false);
      } else if (pos < clonesBefore) {
        pos += total;
        applyTransform(false);
      }
      updateDots();
      isAnimating = false;
    }, WRAP_MS);
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;
    pos += 1;
    applyTransform(true);
    updateDots();
    scheduleWrap();
  }

  function goPrev() {
    if (isAnimating) return;
    isAnimating = true;
    pos -= 1;
    applyTransform(true);
    updateDots();
    scheduleWrap();
  }

  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  function restartAuto() {
    stopAuto();
    autoTimer = setInterval(goNext, AUTOPLAY_MS);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { goNext(); restartAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { goPrev(); restartAuto(); });

  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', restartAuto);
  root.addEventListener('focusin', stopAuto);
  root.addEventListener('focusout', restartAuto);

  let touchStartX = 0;
  let touchDeltaX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
    stopAuto();
  }, { passive: true });
  track.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });
  track.addEventListener('touchend', () => {
    if (touchDeltaX < -40) goNext();
    else if (touchDeltaX > 40) goPrev();
    restartAuto();
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (responsiveSlidesPerView() !== slidesPerView) {
        buildClones();
        updateDots();
      } else {
        applyTransform(false);
      }
    }, 180);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto(); else restartAuto();
  });

  buildClones();
  renderDots();
  updateDots();
  restartAuto();
}

/* ==========================================================================
   PUBLIC ANIMATION API (optional external use)
   ========================================================================== */
window.RealEstateAnimations = {
  reveal: (selector) => document.querySelectorAll(selector).forEach(el => el.classList.add('revealed'))
};
