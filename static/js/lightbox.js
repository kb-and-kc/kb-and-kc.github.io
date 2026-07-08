document.addEventListener('DOMContentLoaded', () => {
  const links = [...document.querySelectorAll('a[data-lightbox]')];
  if (!links.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="lightbox-frame" role="dialog" aria-modal="true" aria-label="Photo preview">
      <button class="lightbox-close" type="button" data-lightbox-close aria-label="Close photo preview">×</button>
      <img class="lightbox-image" alt="">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector('.lightbox-image');
  const caption = overlay.querySelector('.lightbox-caption');
  const closeButton = overlay.querySelector('[data-lightbox-close]');
  let previousFocus = null;

  function openLightbox(link) {
    previousFocus = document.activeElement;
    image.src = link.href;
    image.alt = link.querySelector('img')?.alt || link.dataset.lightboxCaption || 'Photo preview';
    caption.textContent = link.dataset.lightboxCaption || image.alt;
    overlay.hidden = false;
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function closeLightbox() {
    overlay.hidden = true;
    image.removeAttribute('src');
    caption.textContent = '';
    document.body.classList.remove('lightbox-open');
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(link);
    });
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target.closest('[data-lightbox-close]')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!overlay.hidden && event.key === 'Escape') closeLightbox();
  });
});
