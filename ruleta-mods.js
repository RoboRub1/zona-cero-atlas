const rutasDeMods = [
  {
    key: 'ruinas', label: 'Ruinas', title: 'Operaciones en ruinas', imagePosition: '62% 52%',
    lead: 'Sobrevuela una calle tomada por el musgo, reúne a la patrulla y decide por dónde entrar y volver.',
    mods: [['timeless-and-classics-zero-tacz', 'TaCZ'], ['fpv-drones', 'FPV Drones'], ['tacz-npcs', 'TaCZ NPCs']],
    steps: [
      ['Haz el primer vuelo', 'Practica el despegue y el regreso en el refugio. En las ruinas, vigila batería y señal mientras localizas un acceso y un punto de reunión.'],
      ['Reparte papeles', 'El piloto cubre la vista aérea. Otro jugador registra los accesos y la patrulla elige el equipo de TaCZ según el encuentro con los NPC.'],
      ['Deja una ruta que sirva', 'Guarda en Diorama la entrada, la salida y dónde se perdió conexión. Repite el recorrido como carrera FPV si el grupo se quiere quedar a pilotar.'],
    ],
    links: [['wiki-rapida.html#reconocimiento-y-regreso', 'Reconocimiento y regreso'], ['wiki-rapida.html#equipar-a-la-patrulla', 'Equipar a la patrulla']],
  },
  {
    key: 'taller', label: 'Tecnología', title: 'Enciende el taller comunitario', imagePosition: '64% 49%',
    lead: 'Convierte una sala de ladrillos en el taller donde el mineral del grupo sale listo para el siguiente proyecto.',
    mods: [['immersive-engineering', 'Immersive Engineering'], ['toms-simple-storage-mod', 'Tom’s Simple Storage']],
    steps: [
      ['Elige qué vas a procesar', 'Consulta el manual del ingeniero y JEI. Empieza con una máquina que resuelva una tarea repetida y reserva espacio para su montaje y cableado.'],
      ['Prueba un lote', 'Separa la energía, la entrada de materiales y la salida. Pasa un lote pequeño por la máquina para comprobar el recorrido antes de ampliar la línea.'],
      ['Abre el almacén al equipo', 'Conecta los inventarios del taller a una terminal de Tom’s Simple Storage. Acuerda qué contenedor recibe materia prima y cuál guarda el producto terminado.'],
    ],
    links: [['wiki-rapida.html#disena-una-cadena-de-produccion', 'Cadena de producción'], ['wiki-rapida.html#almacen-modular', 'Almacén modular']],
  },
  {
    key: 'cuevas', label: 'Expediciones', title: 'Tres expediciones, tres destinos', imagePosition: '64% 55%',
    lead: 'Escoge qué quieres traer de vuelta. Cada destino pide su propio equipo y una ruta de regreso.',
    mods: [['alexs-caves', 'Alex’s Caves'], ['aquamirae', 'Aquamirae'], ['the-undergarden', 'The Undergarden']],
    steps: [
      ['Busca neodimio', 'En Subsuelo Cero, apunta a las Magnetic Caves. Lleva iluminación y deja marcadores al entrar para reconocer la vuelta con el inventario lleno.'],
      ['Sal al Ice Maze', 'Aquamirae lleva la expedición a un barco atrapado en el hielo. Revisa la guía local antes de ir tras la capitana Cornelia.'],
      ['Cruza al Undergarden', 'Prepara el Catalyst, apunta dónde quedó el portal y haz una primera salida corta para conseguir Cloggrum y regresar por el mismo acceso.'],
    ],
    links: [['wiki-rapida.html#subsuelo-cero', 'Subsuelo Cero'], ['wiki-rapida.html#el-barco-congelado', 'El barco congelado'], ['wiki-rapida.html#the-undergarden', 'The Undergarden']],
  },
  {
    key: 'cantina', label: 'Cocina y comercio', title: 'Abre una fonda en el Canal', imagePosition: '64% 57%',
    lead: 'Que haya algo esperando en la mesa cuando vuelva el grupo, desde una ración de viaje hasta queso de la casa.',
    mods: [['farmers-delight', 'Farmer’s Delight'], ['brewin-and-chewin', 'Brewin’ and Chewin’'], ['lightmans-currency', 'Lightman’s Currency']],
    steps: [
      ['Pon un plato en el menú', 'Escoge en JEI una receta de Farmer’s Delight que puedas abastecer con tu huerto. Prepara la olla y deja espacio para guardar ingredientes y raciones.'],
      ['Prueba una tanda de fermentación', 'Usa un barril de Brewin’ and Chewin’ para incorporar un producto propio al menú. Fíjate en las condiciones de la receta antes de ampliar la producción.'],
      ['Monta un puesto', 'Fija un precio en Lightman’s Currency y pídele a alguien que pruebe la primera compra. Repón según lo que el equipo pida para sus salidas.'],
    ],
    links: [['wiki-rapida.html#prepara-un-menu-de-temporada', 'Menú de temporada'], ['wiki-rapida.html#abre-un-puesto-de-comercio', 'Puesto de comercio']],
  },
  {
    key: 'hordas', label: 'Hordas', title: 'Que el refugio aguante la noche', imagePosition: '64% 51%',
    lead: 'Los encuentros cambian cuando cae el sol. Prepara un refugio al que el grupo pueda volver en plena oleada.',
    mods: [['born-in-chaos', 'Born in Chaos'], ['the-hordes', 'The Hordes'], ['zombie-awareness', 'Zombie Awareness']],
    steps: [
      ['Reconoce a los visitantes', 'Born in Chaos añade criaturas con comportamientos propios. Aprende a reconocer el aviso y los ojos del Nightmare Stalker antes de ir a buscarlo.'],
      ['Deja el refugio listo', 'Cuando toque una horda, reúne comida y curas y acuerda dónde reagruparte entre oleadas. Deja los materiales de reparación donde cualquiera pueda tomarlos.'],
      ['Vuelve con el equipo completo', 'Los zombis pueden seguir ruido, luz y rastros con Zombie Awareness. Avisa por voz si cambias de ruta y vuelve al punto acordado cuando alguien se separe.'],
    ],
    links: [['wiki-rapida.html#primera-horda', 'Preparar la primera horda'], ['wiki-rapida.html#born-in-chaos', 'Born in Chaos']],
  },
  {
    key: 'gram', label: 'Fotografía y Gram', title: 'Abre la galería del Canal', imagePosition: '64% 54%',
    lead: 'Cubre una carrera de drones, retrata a quienes abren un puesto o documenta cómo cambian las ruinas con el tiempo.',
    mods: [['mobile-networks', 'Mobile Networks'], ['exposure', 'Exposure']],
    steps: [
      ['Prepara el carrete', 'Lleva una cámara y película de Exposure. Elige un tema y apunta fecha, lugar o nombres del grupo para identificar las copias al regresar.'],
      ['Revela y reúne las fotos', 'Revela el carrete, imprime tus favoritas y monta una galería con pies de foto. Invita a alguien más a fotografiar el mismo evento desde otro sitio.'],
      ['Comparte una toma en Gram', 'Usa la cámara del teléfono de Mobile Networks y termina el texto de la publicación con #ZonaCeroWeb para que pueda aparecer en el Atlas en la próxima exportación.'],
    ],
    links: [['wiki-rapida.html#fotografia-de-campo', 'Fotografía de campo'], ['gram.html', 'Tablón de Gram']],
  },
];

const modBoard = document.getElementById('ruleta-de-mods');

if (modBoard) {
  modBoard.insertAdjacentHTML('beforeend', `
    <div class="ruta-board">
      <div class="ruta-selector">
        <button class="ruta-arrow" type="button" data-step="-1" aria-label="Conjunto anterior">←</button>
        <div class="ruta-tabs" role="tablist" aria-label="Conjuntos de mods">
          ${rutasDeMods.map((route, i) => `<button type="button" role="tab" id="ruta-${route.key}" aria-controls="ruta-activa" data-index="${i}">${route.label}</button>`).join('')}
        </div>
        <button class="ruta-arrow" type="button" data-step="1" aria-label="Conjunto siguiente">→</button>
      </div>
      <p class="ruta-status" role="status"></p>
      <div class="ruta-panel" id="ruta-activa" role="tabpanel" tabindex="0"></div>
    </div>`);

  const board = modBoard.querySelector('.ruta-board');
  const tabs = Array.from(board.querySelectorAll('[role="tab"]'));
  const panel = board.querySelector('.ruta-panel');
  const status = board.querySelector('.ruta-status');
  let active = -1;

  function indexFromHash() {
    return tabs.findIndex(tab => `#${tab.id}` === location.hash);
  }

  function showRoute(index, { share = false, focus = false, announce = false } = {}) {
    const current = (index + rutasDeMods.length) % rutasDeMods.length;
    const route = rutasDeMods[current];
    const tab = tabs[current];

    if (current !== active) {
      active = current;
      board.dataset.theme = route.key;
      tabs.forEach((button, i) => {
        button.setAttribute('aria-selected', String(i === current));
        button.tabIndex = i === current ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tab.id);
      panel.innerHTML = `
        <div class="ruta-banner">
          <img src="ruta-${route.key}.webp" alt="" loading="lazy" decoding="async" width="1024" height="520" style="object-position: ${route.imagePosition}">
          <div class="ruta-banner-copy">
            <h3>${route.title}</h3>
            <p>${route.lead}</p>
          </div>
        </div>
        <ul class="ruta-mods" aria-label="Mods de esta ruta">
          ${route.mods.map(([id, name]) => `<li><a href="mods.html#${id}">${name}</a></li>`).join('')}
        </ul>
        <ol class="ruta-steps">
          ${route.steps.map(([heading, detail]) => `<li><h4>${heading}</h4><p>${detail}</p></li>`).join('')}
        </ol>
        <div class="ruta-links">
          ${route.links.map(([href, label]) => `<a href="${href}">${label} →</a>`).join('')}
        </div>`;
    }

    if (share && location.hash !== `#${tab.id}`) history.pushState(null, '', `#${tab.id}`);
    if (focus) tab.focus();
    if (announce) status.textContent = route.title;
  }

  board.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.step) {
      showRoute(active + Number(button.dataset.step), { share: true, announce: true });
    } else {
      showRoute(Number(button.dataset.index), { share: true });
    }
  });

  board.querySelector('.ruta-tabs').addEventListener('keydown', event => {
    const indices = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: rutasDeMods.length - 1 };
    if (!Object.hasOwn(indices, event.key)) return;
    event.preventDefault();
    showRoute(indices[event.key], { share: true, focus: true });
  });

  const restoreRoute = () => showRoute(Math.max(0, indexFromHash()));
  window.addEventListener('popstate', restoreRoute);
  window.addEventListener('hashchange', restoreRoute);
  restoreRoute();
  if (indexFromHash() !== -1) modBoard.scrollIntoView();
}
