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

  // ---- Logo chroma-key (white background → transparent) ----
  function chromaKeyImg(img) {
    if (img.dataset.processed) return;
    try {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      if (!c.width || !c.height) return;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, c.width, c.height);
      const px = data.data;
      for (let i = 0; i < px.length; i += 4) {
        const r = px[i], g = px[i+1], b = px[i+2];
        const lum = (r + g + b) / 3;
        if (lum > 235) {
          px[i+3] = 0;
        } else if (lum > 200) {
          px[i+3] = Math.round(px[i+3] * (1 - (lum - 200) / 35));
        }
      }
      ctx.putImageData(data, 0, 0);
      img.src = c.toDataURL('image/png');
      img.dataset.processed = '1';
    } catch (e) { /* CORS or other — silently keep original */ }
  }
  function bindChromaKey() {
    document.querySelectorAll('img.brand-logo, img.page-loader-logo-img').forEach(img => {
      if (img.complete && img.naturalWidth) chromaKeyImg(img);
      else img.addEventListener('load', () => chromaKeyImg(img), { once:true });
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
    bindChromaKey();
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
