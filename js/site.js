/* Lance McHan — site interactions
   Vanilla JS. Progressive enhancement only: every form works without this file. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------
     Sticky header shadow
  --------------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) header.classList.add('is-stuck');
      else header.classList.remove('is-stuck');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------
     Mobile drawer
  --------------------------------------------------------------- */
  var menuBtn = document.querySelector('.menu-btn');
  var drawer = document.getElementById('site-drawer');
  if (menuBtn && drawer) {
    var openDrawer = function () {
      drawer.classList.add('is-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.documentElement.style.overflow = 'hidden';
      var first = drawer.querySelector('.drawer-close');
      if (first) first.focus();
    };
    var closeDrawer = function () {
      drawer.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      menuBtn.focus();
    };
    menuBtn.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) closeDrawer();
      else openDrawer();
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('.drawer-close') || e.target.classList.contains('drawer-scrim')) closeDrawer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });
    // Sub-menu toggles inside the drawer
    Array.prototype.forEach.call(drawer.querySelectorAll('.d-toggle'), function (btn) {
      btn.addEventListener('click', function () {
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (!panel) return;
        var open = panel.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        var plus = btn.querySelector('.plus');
        if (plus) plus.textContent = open ? '–' : '+';
      });
    });
  }

  /* ---------------------------------------------------------------
     Scroll reveal
  --------------------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      Array.prototype.forEach.call(revealables, function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 80 + 'ms';
        io.observe(el);
      });
    }
  }

  /* ---------------------------------------------------------------
     FAQ accordions
  --------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('.faq-q'), function (btn) {
    btn.addEventListener('click', function () {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.classList.toggle('is-open', !open);
    });
  });

  /* ---------------------------------------------------------------
     Review carousel
  --------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('.carousel'), function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var prev = carousel.querySelector('[data-car="prev"]');
    var next = carousel.querySelector('[data-car="next"]');
    if (!track) return;
    var step = function () {
      var card = track.querySelector('.review');
      return card ? card.getBoundingClientRect().width + 22 : track.clientWidth * 0.8;
    };
    if (prev) prev.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    if (next) next.addEventListener('click', function () {
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      else track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* ---------------------------------------------------------------
     Next-move chooser (keyboard friendly cards are plain links;
     this only adds the "highlight on hover/focus" sibling dimming)
  --------------------------------------------------------------- */
  var chooser = document.querySelector('.chooser');
  if (chooser && !reduceMotion) {
    var choices = chooser.querySelectorAll('.choice');
    var setDim = function (active) {
      Array.prototype.forEach.call(choices, function (c) {
        c.style.opacity = !active || c === active ? '1' : '0.62';
      });
    };
    Array.prototype.forEach.call(choices, function (c) {
      c.addEventListener('mouseenter', function () { setDim(c); });
      c.addEventListener('focus', function () { setDim(c); });
      c.addEventListener('mouseleave', function () { setDim(null); });
      c.addEventListener('blur', function () { setDim(null); });
    });
  }

  /* ---------------------------------------------------------------
     Mortgage payment calculator
  --------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-calc]'), function (calc) {
    var price = calc.querySelector('#calc-price');
    var downPct = calc.querySelector('#calc-down');
    var rate = calc.querySelector('#calc-rate');
    var term = calc.querySelector('#calc-term');
    var outDownPct = calc.querySelector('#calc-down-out');
    var outPayment = calc.querySelector('#calc-payment');
    var outDown = calc.querySelector('#calc-down-amt');
    var outLoan = calc.querySelector('#calc-loan');
    var outInterest = calc.querySelector('#calc-interest');
    var outTotal = calc.querySelector('#calc-total');
    if (!price || !downPct || !rate || !term || !outPayment) return;

    var money = function (n) {
      if (!isFinite(n)) n = 0;
      return '$' + Math.round(n).toLocaleString('en-US');
    };
    var num = function (el, fallback) {
      var v = parseFloat(String(el.value).replace(/[^0-9.]/g, ''));
      return isFinite(v) ? v : fallback;
    };

    var update = function () {
      var p = Math.max(0, num(price, 0));
      var d = Math.min(100, Math.max(0, num(downPct, 0)));
      var r = Math.max(0, num(rate, 0));
      var y = Math.max(1, num(term, 30));

      var downAmt = p * (d / 100);
      var loan = Math.max(0, p - downAmt);
      var months = y * 12;
      var i = r / 100 / 12;
      var payment;
      if (i === 0) payment = loan / months;
      else payment = loan * (i * Math.pow(1 + i, months)) / (Math.pow(1 + i, months) - 1);
      if (!isFinite(payment)) payment = 0;
      var total = payment * months;

      if (outDownPct) outDownPct.textContent = d + '%';
      outPayment.textContent = money(payment);
      if (outDown) outDown.textContent = money(downAmt);
      if (outLoan) outLoan.textContent = money(loan);
      if (outInterest) outInterest.textContent = money(total - loan);
      if (outTotal) outTotal.textContent = money(total);
    };

    [price, downPct, rate, term].forEach(function (el) {
      el.addEventListener('input', update);
      el.addEventListener('change', update);
    });
    update();
  });

  /* ---------------------------------------------------------------
     Forms: stamp _page, AJAX submit, thank-you state
  --------------------------------------------------------------- */
  var SUCCESS_SCROLL_OFFSET = 110;

  function showSuccess(form) {
    var box = form.querySelector('.form-success');
    form.classList.add('is-sent');
    if (box) {
      box.classList.add('is-visible');
      box.setAttribute('tabindex', '-1');
      var top = box.getBoundingClientRect().top + window.scrollY - SUCCESS_SCROLL_OFFSET;
      window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
      box.focus({ preventScroll: true });
    }
  }

  var forms = document.querySelectorAll('form[data-leadr]');
  Array.prototype.forEach.call(forms, function (form) {
    var pageField = form.querySelector('input[name="_page"]');
    if (pageField) pageField.value = window.location.href;

    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return; // plain POST fallback
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var errBox = form.querySelector('.form-error');
      if (errBox) errBox.classList.remove('is-visible');
      var original = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

      var data = {};
      new FormData(form).forEach(function (value, key) {
        if (data[key]) data[key] = data[key] + ', ' + value;
        else data[key] = value;
      });
      data._page = window.location.href;

      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (res) { return res.json().catch(function () { return { ok: res.ok }; }); })
        .then(function (json) {
          if (json && json.ok === false) throw new Error('rejected');
          showSuccess(form);
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.innerHTML = original; }
          if (errBox) {
            errBox.classList.add('is-visible');
          } else {
            form.submit();
          }
        });
    });
  });

  /* Show confirmation after a no-JS (plain POST) submission */
  if (/[?&]submitted=1/.test(window.location.search)) {
    var target = document.querySelector('form[data-leadr]');
    if (target) showSuccess(target);
  }
})();
