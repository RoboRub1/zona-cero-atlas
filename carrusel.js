const featured = document.querySelector('.featured');

if (featured) {
  const track = featured.querySelector('.featured-track');
  const slides = Array.from(track.children);
  const controls = featured.querySelector('.featured-controls');
  const pages = Array.from(featured.querySelectorAll('[data-slide]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const nearestSlide = () => Math.round(track.scrollLeft / track.clientWidth);

  const syncControls = () => {
    const current = nearestSlide();
    pages.forEach((button, index) => {
      if (index === current) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  };

  const showSlide = (index) => {
    const next = (index + slides.length) % slides.length;
    const crossesEnd = next !== index;
    track.scrollTo({
      left: next * track.clientWidth,
      behavior: reducedMotion.matches || crossesEnd ? 'instant' : 'smooth',
    });
  };

  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const index = button.dataset.slide ?? (nearestSlide() + Number(button.dataset.direction));
    showSlide(Number(index));
  });

  track.addEventListener('keydown', (event) => {
    const direction = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
    if (!direction) return;
    event.preventDefault();
    showSlide(nearestSlide() + direction);
  });

  track.addEventListener('scroll', syncControls, { passive: true });
  controls.hidden = false;
  featured.dataset.ready = '';
  syncControls();
}
