/* Northline Strength Club — main.js (no dependencies) */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    // reset when growing to desktop layout
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Hero intro (rAF, not IntersectionObserver) ---------- */
  var hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add('is-ready'); });
    });

    /* ---------- Hero scroll drift (rAF-throttled, passive) ---------- */
    if (!reduceMotion) {
      var ticking = false;
      var art = hero.querySelector('.hero__art');

      var update = function () {
        ticking = false;
        var h = hero.offsetHeight || 1;
        var p = Math.min(Math.max(window.scrollY / h, 0), 1);
        var vh = window.innerHeight;
        art.style.setProperty('--drift', (p * vh * 0.08).toFixed(1) + 'px');
        art.style.setProperty('--rise', (p * vh * 0.03).toFixed(1) + 'px');
      };

      window.addEventListener('scroll', function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      }, { passive: true });
    }
  }

  /* ---------- Generic .reveal helper for later sections ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }
})();
