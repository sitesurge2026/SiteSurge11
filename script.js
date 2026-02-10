// SiteSurge – mobile menu, portfolio modal, scroll animations
(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
  }

  // Scroll-triggered animations for sections
  const animatedSections = document.querySelectorAll('.scroll-animate');
  if (animatedSections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );
    animatedSections.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Portfolio popup: open with website in iframe
  const modal = document.getElementById('portfolio-modal');
  const backdrop = modal && modal.querySelector('.portfolio-modal-backdrop');
  const closeBtn = modal && modal.querySelector('.portfolio-modal-close');
  const iframe = modal && modal.querySelector('.portfolio-modal-iframe');
  const cards = document.querySelectorAll('.case-card-link');

  function openPortfolio(url) {
    if (!modal || !iframe || !url || url === '#' || url.startsWith('https://mechanics.example.com')) return;
    iframe.src = url;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  }

  function closePortfolio() {
    if (!modal || !iframe) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    iframe.src = 'about:blank';
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var url = card.getAttribute('data-url');
      var popout = card.getAttribute('data-popout') === 'true';
      if (popout && url && url !== '#' && !url.startsWith('https://mechanics.example.com')) {
        window.open(url, 'jupiterlaw', 'width=1100,height=700,scrollbars=yes,resizable=yes');
        return;
      }
      openPortfolio(url);
    });
  });

  if (backdrop) backdrop.addEventListener('click', closePortfolio);
  if (closeBtn) closeBtn.addEventListener('click', closePortfolio);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closePortfolio();
  });
})();
