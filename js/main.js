/* ======================================
   World Report - JavaScript
   ====================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header scroll effect ---------- */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 12px rgba(0,0,0,0.08)'
        : 'none';
    });
  }

  /* ---------- Tag filter ---------- */
  const filterBtns = document.querySelectorAll('.articles__filter-btn');
  const articleCards = document.querySelectorAll('.article-card');

  if (filterBtns.length && articleCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.dataset.filter;

        articleCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
            return;
          }
          const tags = card.dataset.tags || '';
          card.style.display = tags.includes(filter) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Scroll fade-in ---------- */
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.features__card, .article-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});
