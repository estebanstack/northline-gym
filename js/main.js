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


  /* ---------- Weekly schedule: ARIA tabs ---------- */
  var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // One array holds the whole week: [time, class, coach, spots left]. Monday is also pre-rendered in the HTML.
  var SCHEDULE = [
    [['6:00am', 'Power Hour', 'Marcus', 6], ['12:15pm', 'Conditioning', 'Lena', 4], ['6:30pm', 'Strength Foundations', 'Diego', 2], ['7:45pm', 'Mobility & Recovery', 'Lena', 9]],
    [['5:30am', 'Conditioning', 'Lena', 5], ['12:00pm', 'Strength Foundations', 'Diego', 8], ['6:00pm', 'Power Hour', 'Marcus', 3], ['7:15pm', 'Mobility & Recovery', 'Lena', 10]],
    [['6:00am', 'Strength Foundations', 'Diego', 7], ['12:15pm', 'Power Hour', 'Marcus', 4], ['6:30pm', 'Conditioning', 'Lena', 1], ['7:45pm', 'Mobility & Recovery', 'Lena', 6]],
    [['5:30am', 'Power Hour', 'Marcus', 5], ['12:00pm', 'Conditioning', 'Lena', 9], ['6:00pm', 'Strength Foundations', 'Diego', 3], ['7:15pm', 'Mobility & Recovery', 'Lena', 8]],
    [['6:00am', 'Conditioning', 'Lena', 6], ['12:15pm', 'Power Hour', 'Marcus', 7], ['5:30pm', 'Strength Foundations', 'Diego', 2], ['6:45pm', 'Mobility & Recovery', 'Lena', 11]],
    [['8:00am', 'Power Hour', 'Marcus', 4], ['9:30am', 'Strength Foundations', 'Diego', 5], ['11:00am', 'Mobility & Recovery', 'Lena', 8]],
    [['9:00am', 'Conditioning', 'Lena', 7], ['10:30am', 'Strength Foundations', 'Diego', 3], ['4:00pm', 'Mobility & Recovery', 'Lena', 10]]
  ];

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }

  var tablist = document.querySelector('.tablist');
  var panel = document.getElementById('schedule-panel');

  if (tablist && panel) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));

    var renderDay = function (i) {
      panel.innerHTML = '<ul class="sched">' + SCHEDULE[i].map(function (r) {
        var spots = r[3] <= 3
          ? '<span class="sched__spots sched__spots--low">Only ' + r[3] + ' left</span>'
          : '<span class="sched__spots">' + r[3] + ' spots left</span>';
        return '<li class="sched__row"><span class="sched__time">' + esc(r[0]) + '</span>' +
          '<span class="sched__class"><span class="sched__name">' + esc(r[1]) + '</span>' +
          '<span class="sched__coach">with ' + esc(r[2]) + '</span></span>' + spots + '</li>';
      }).join('') + '</ul>';
    };

    var selectTab = function (i, focus) {
      tabs.forEach(function (t, n) {
        var on = n === i;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tabs[i].id);
      renderDay(i);
      if (focus) tabs[i].focus();
      // keep the active tab visible inside the scrollable tablist (no page scroll)
      var t = tabs[i];
      var left = t.offsetLeft - (tablist.clientWidth - t.offsetWidth) / 2;
      tablist.scrollTo({ left: left, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { selectTab(i, false); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = tabs.length - 1;
        if (n !== null) {
          e.preventDefault();
          selectTab(n, true); // automatic activation
        }
      });
    });

    // default to today's weekday (JS getDay: 0 = Sunday)
    var today = (new Date().getDay() + 6) % 7;
    if (today !== 0) selectTab(today, false);
  }

  /* ---------- Pricing toggle ---------- */
  var toggleBtns = document.querySelectorAll('.toggle__btn');
  if (toggleBtns.length) {
    var amounts = document.querySelectorAll('.plan__amount');
    var billing = document.querySelectorAll('.plan__billing');
    var status = document.getElementById('pricing-status');

    var setPeriod = function (period) {
      toggleBtns.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.period === period));
      });
      var parts = [];
      amounts.forEach(function (a) {
        a.textContent = '$' + a.dataset[period];
        var card = a.closest('.plan');
        parts.push(card.querySelector('.plan__name').textContent + ' $' + a.dataset[period]);
      });
      billing.forEach(function (b) { b.textContent = b.dataset[period]; });
      if (status) status.textContent = (period === 'yearly' ? 'Yearly' : 'Monthly') + ' prices per month: ' + parts.join(', ') + '.';
    };

    toggleBtns.forEach(function (b) {
      b.addEventListener('click', function () { setPeriod(b.dataset.period); });
    });
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
