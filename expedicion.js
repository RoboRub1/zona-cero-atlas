const input = document.querySelector('#query');

if (input) {
  const entries = Array.from(document.querySelector('#entries').children);
  const category = document.querySelector('#category');
  const result = document.querySelector('#result');
  const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  const searchable = entries.map((entry) => normalize(entry.textContent));

  const filter = () => {
    const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;

    entries.forEach((entry, index) => {
      const matchesCategory = !category?.value || entry.dataset.category === category.value;
      const matchesQuery = terms.every((term) => searchable[index].includes(term));
      entry.hidden = !matchesCategory || !matchesQuery;
      if (!entry.hidden) count += 1;
    });

    result.textContent = count
      ? `${count} de ${entries.length} ${category ? 'fichas' : 'guías'}`
      : 'Sin resultados. Prueba con otra búsqueda.';
  };

  const showLinkedMod = () => {
    if (!category || !location.hash) return;
    const entry = document.getElementById(location.hash.slice(1));
    if (!entry || !entries.includes(entry)) return;
    if (entry.hidden) {
      input.value = '';
      category.value = '';
      filter();
    }
    entry.scrollIntoView({ block: 'start' });
  };

  input.addEventListener('input', filter);
  category?.addEventListener('change', filter);
  window.addEventListener('hashchange', showLinkedMod);
  filter();
  showLinkedMod();
}
