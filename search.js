const input = document.querySelector('#query');
if (input) {
  const entries = Array.from(document.querySelector('#entries').children);
  const result = document.querySelector('#result');
  const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  const searchable = entries.map((entry) => normalize(entry.textContent));
  const filter = () => {
    const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    entries.forEach((entry, index) => {
      const matches = terms.every((term) => searchable[index].includes(term));
      entry.hidden = !matches;
      if (matches) count += 1;
    });
    result.textContent = count ? `${count} resultados` : 'Sin resultados. Prueba otro nombre.';
  };
  input.addEventListener('input', filter);
  filter();
}
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((items) => {
    items.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.add('revealed');
      target.classList.remove('reveal-pending');
      observer.unobserve(target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.tile, .card').forEach((item) => {
    if (item.getBoundingClientRect().top < innerHeight) return;
    item.classList.add('reveal-pending');
    observer.observe(item);
  });
}
