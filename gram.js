const status = document.querySelector('#gram-status');
const feed = document.querySelector('#gram-posts');
const period = 30 * 60 * 1000;
const demo = new URLSearchParams(window.location.search).get('demo') === '1';
const formatDate = new Intl.DateTimeFormat('es-MX', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'America/Mexico_City',
});

async function getJson(url) {
  const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function element(tag, value) {
  const node = document.createElement(tag);
  node.textContent = value;
  return node;
}

function postCard(post, feedUrl) {
  const card = document.createElement('article');
  card.className = 'card gram-post';
  const title = element('h2', String(post.author ?? '').trim().slice(0, 80) || 'Jugador de Zona Cero');
  card.append(title);
  if (typeof post.publishedAt === 'string' && Number.isFinite(Date.parse(post.publishedAt))) {
    const date = element('time', formatDate.format(new Date(post.publishedAt)));
    date.dateTime = post.publishedAt;
    card.append(date);
  }
  if (typeof post.caption === 'string' && post.caption) {
    card.append(element('p', post.caption.slice(0, 1000)));
  }
  const gallery = document.createElement('div');
  gallery.className = 'gram-photos';
  if (Array.isArray(post.photos)) {
    for (const path of post.photos.slice(0, 4)) {
      if (typeof path !== 'string') continue;
      const exportedImage = /^gram-media\/[0-9a-f]{32}\.jpg$/.test(path);
      if (!exportedImage && !(demo && path === 'carrusel-huerto.webp')) continue;
      const url = new URL(path, feedUrl);
      const link = document.createElement('a');
      link.href = url.href;
      link.setAttribute('aria-label', `Ver foto de ${title.textContent}`);
      const image = document.createElement('img');
      image.src = url.href;
      image.alt = '';
      image.loading = 'lazy';
      image.decoding = 'async';
      link.append(image);
      gallery.append(link);
    }
  }
  if (gallery.childElementCount) card.append(gallery);
  return card;
}

async function refresh() {
  try {
    const source = demo ? 'gram-demo.json' : (await getJson('gram-config.json')).feed;
    if (!source) {
      feed.replaceChildren();
      status.textContent = 'El tablón está listo. La conexión al servidor de Minecraft sigue pendiente.';
      return;
    }
    const url = new URL(source, document.baseURI);
    if (url.protocol !== 'https:') throw new Error('El feed requiere HTTPS.');
    const data = await getJson(url);
    if (!Array.isArray(data.posts) || !Number.isFinite(Date.parse(data.updatedAt))) {
      throw new Error('Formato de publicaciones inválido.');
    }
    const cards = data.posts.slice(0, 24).filter(post => post && typeof post === 'object');
    feed.replaceChildren(...cards.map(post => postCard(post, url)));
    const timestamp = formatDate.format(new Date(data.updatedAt));
    status.textContent = demo
      ? 'Demostración con contenido de ejemplo.'
      : cards.length
      ? `Última sincronización: ${timestamp} (hora de Puebla).`
      : `Todavía no hay publicaciones compartidas. Última sincronización: ${timestamp} (hora de Puebla).`;
  } catch {
    status.textContent = feed.childElementCount
      ? 'La sincronización falló. Sigues viendo la última lectura de esta sesión.'
      : 'El feed de Gram no está disponible por ahora.';
  } finally {
    if (!demo) window.setTimeout(refresh, period);
  }
}

refresh();
