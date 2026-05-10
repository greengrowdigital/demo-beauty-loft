/* ============================================================
   THE BEAUTY LOFT — App
   Animations, navbar, mobile menu, custom cursor, toasts.
============================================================ */

(function () {
  // ---- Page loader fade ----
  window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
      setTimeout(() => loader.classList.add('done'), 400);
    }
  });

  // ---- Reveal on scroll ----
  function bindReveal() {
    const items = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!('IntersectionObserver' in window) || items.length === 0) {
      items.forEach(i => i.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    items.forEach(i => io.observe(i));
  }

  // ---- Navbar shrink on scroll ----
  function bindNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const update = () => {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // ---- Scroll progress bar ----
  function bindScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const update = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = scrolled + '%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // ---- Mobile menu ----
  function bindMobileMenu() {
    const trigger = document.getElementById('mobile-menu-trigger');
    const menu = document.getElementById('mobile-menu');
    const close = document.getElementById('mobile-menu-close');
    if (!trigger || !menu) return;
    trigger.addEventListener('click', () => menu.classList.add('open'));
    close && close.addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  // ---- Card spotlight (gold mouse follow) ----
  function bindCardSpotlight() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
      });
    });
  }

  // ---- Custom cursor (desktop only) ----
  function bindCursor() {
    if (window.matchMedia('(hover:none)').matches) return;
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    let x = 0, y = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; dot.style.left = tx + 'px'; dot.style.top = ty + 'px'; });
    function frame() {
      x += (tx - x) * 0.16; y += (ty - y) * 0.16;
      cursor.style.left = x + 'px'; cursor.style.top = y + 'px';
      requestAnimationFrame(frame);
    }
    frame();

    document.addEventListener('mouseover', e => {
      const t = e.target.closest('a, button, .card, .service-orb, .slot, [data-cursor-hover]');
      if (t) cursor.classList.add('hover');
    });
    document.addEventListener('mouseout', e => {
      const t = e.target.closest('a, button, .card, .service-orb, .slot, [data-cursor-hover]');
      if (t) cursor.classList.remove('hover');
    });
  }

  // ---- Toast notifications ----
  window.toast = function(msg, ms = 3200) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), ms);
  };

  // ---- Newsletter forms ----
  function bindNewsletters() {
    document.querySelectorAll('form[data-newsletter]').forEach(f => {
      f.addEventListener('submit', e => {
        e.preventDefault();
        const lang = (window.I18nManager?.current) || 'en';
        const msg = lang === 'es' ? '✓ Te has unido al loft' : '✓ Welcome to the loft';
        window.toast(msg);
        f.reset();
      });
    });
  }

  // ---- Smooth scroll fallback for anchor links ----
  function bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---- Count-up numbers ----
  function bindCountUp() {
    const els = document.querySelectorAll('[data-count]');
    if (els.length === 0 || !('IntersectionObserver' in window)) {
      els.forEach(e => e.textContent = e.dataset.count);
      return;
    }
    const animate = el => {
      const target = parseFloat(el.dataset.count);
      const dur = 1400;
      const start = performance.now();
      function step(now) {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = target * eased;
        el.textContent = Number.isInteger(target) ? Math.round(value) : value.toFixed(1);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          animate(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    els.forEach(e => io.observe(e));
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', () => {
    if (window.I18nManager) window.I18nManager.init();
    bindReveal();
    bindNavbar();
    bindScrollProgress();
    bindMobileMenu();
    bindCardSpotlight();
    bindCursor();
    bindNewsletters();
    bindSmoothScroll();
    bindCountUp();
  });

  // Re-bind reveal & spotlight on language change (in case content changed)
  document.addEventListener('langchange', () => {
    bindReveal();
    bindCardSpotlight();
  });
})();
