import './style.css';
import {
  createIcons, Orbit, Search, Route, BookOpen, Volume2, VolumeX, Maximize, Minimize,
  ChevronRight, ArrowUpRight, Bookmark, BookmarkCheck, Play, Pause, RotateCcw,
  X, Plus, Navigation, Mouse, Keyboard, Sparkles, Check, Menu, Telescope,
  Gauge, CircleHelp, Rocket, MapPin, CornerDownLeft
} from 'lucide';
import { UniverseScene } from './scene.js';
import { byId, grandTour, objects } from './data.js';

const icons = { Orbit, Search, Route, BookOpen, Volume2, VolumeX, Maximize, Minimize, ChevronRight, ArrowUpRight, Bookmark, BookmarkCheck, Play, Pause, RotateCcw, X, Plus, Navigation, Mouse, Keyboard, Sparkles, Check, Menu, Telescope, Gauge, CircleHelp, Rocket, MapPin, CornerDownLeft };
const refreshIcons = () => createIcons({ icons, attrs: { 'stroke-width': 1.65 } });
const readFavorites = () => {
  try { return JSON.parse(localStorage.getItem('orbita-favorites') || '[]'); }
  catch { return []; }
};
const state = {
  selectedId: 'earth', category: 'planets', query: '', speed: 1,
  favorites: readFavorites(), sound: false, cruise: false,
  touring: false, tourIndex: 0, tourTimer: null, modal: null
};

const app = document.querySelector('#app');
app.innerHTML = `
  <div id="universe" aria-label="Interactive three-dimensional universe"></div>
  <div class="vignette"></div>
  <div class="loading-screen" id="loading-screen">
    <div class="loading-orbit"><i data-lucide="orbit"></i></div>
    <div class="loading-name">ORBITA</div>
    <div class="loading-line"><span></span></div>
    <p>Loading the map of the universe</p>
  </div>

  <header class="topbar">
    <a class="brand" href="#" aria-label="Orbita — home">
      <span class="brand-mark"><i data-lucide="orbit"></i></span>
      <span>ORBITA<small>UNIVERSE EXPLORER</small></span>
    </a>
    <nav class="main-nav" aria-label="Main navigation">
      <button class="nav-link active" data-action="explore"><i data-lucide="telescope"></i>Explore</button>
      <button class="nav-link" data-action="routes"><i data-lucide="route"></i>Routes<span class="nav-count" id="route-count">0</span></button>
      <button class="nav-link" data-action="guide"><i data-lucide="book-open"></i>Guide</button>
    </nav>
    <div class="header-tools">
      <div class="session"><span class="live-dot"></span><span>SESSION</span><b id="session-time">00:00</b></div>
      <button class="icon-button" data-action="sound" aria-label="Enable space sound" title="Space sound"><i data-lucide="volume-x"></i></button>
      <button class="icon-button" data-action="fullscreen" aria-label="Fullscreen" title="Fullscreen"><i data-lucide="maximize"></i></button>
      <button class="icon-button mobile-menu" data-action="toggle-catalog" aria-label="Open catalog"><i data-lucide="menu"></i></button>
    </div>
  </header>

  <aside class="catalog panel" id="catalog">
    <div class="panel-heading">
      <div><span class="eyebrow">NAVIGATION</span><h2>Object catalog</h2></div>
      <span class="object-total">${objects.length}</span>
    </div>
    <label class="search-box">
      <i data-lucide="search"></i>
      <input id="search" type="search" placeholder="Search the universe…" autocomplete="off" aria-label="Search for a celestial body" />
      <kbd>/</kbd>
    </label>
    <div class="catalog-tabs" role="tablist" aria-label="Object type">
      <button class="active" data-category="planets" role="tab">Planets</button>
      <button data-category="stars" role="tab">Stars</button>
      <button data-category="exoplanets" role="tab">Exoplanets</button>
      <button data-category="galaxies" role="tab">Galaxies</button>
    </div>
    <div class="object-list" id="object-list"></div>
    <button class="tour-card" data-action="tour">
      <span class="tour-art"><i data-lucide="route"></i></span>
      <span><small>READY ROUTE</small><strong>Grand tour</strong><em>10 worlds · about 3 minutes</em></span>
      <i data-lucide="chevron-right"></i>
    </button>
  </aside>

  <main class="viewport-ui">
    <div class="location-line">
      <span class="location-cross"></span>
      <span id="system-name">SOLAR SYSTEM</span><b>/</b><strong id="location-name">EARTH</strong>
    </div>
    <div class="scene-badge"><span></span> FREE FLIGHT MODE</div>
    <div class="object-marker" id="object-marker"><span></span><b id="marker-name">EARTH</b><small id="marker-distance">CURRENT TARGET</small></div>
  </main>

  <aside class="details panel" id="details"></aside>

  <div class="view-tools">
    <button class="glass-button" data-action="overview"><i data-lucide="orbit"></i><span>System overview</span></button>
    <button class="glass-button icon-only" data-action="reset" aria-label="Return to object" title="Return to object"><i data-lucide="rotate-ccw"></i></button>
  </div>

  <div class="flight-notice" id="flight-notice">
    <span class="flight-pulse"><i data-lucide="navigation"></i></span>
    <div><small>COURSE SET</small><strong id="flight-destination">Earth</strong></div>
    <div class="flight-progress"><span></span></div>
  </div>

  <section class="flight-console panel" aria-label="Flight controls">
    <button class="cruise-button" data-action="cruise" aria-label="Enable autopilot"><i data-lucide="play"></i></button>
    <div class="speed-control">
      <div class="speed-heading"><span><i data-lucide="gauge"></i>FLIGHT SPEED</span><strong id="speed-value">1×</strong></div>
      <input type="range" min="0" max="100" value="40" id="speed-slider" aria-label="Flight speed" />
      <div class="speed-presets">
        <button data-speed="0.5">0.5×<small>SURVEY</small></button>
        <button class="active" data-speed="1">1×<small>CRUISE</small></button>
        <button data-speed="10">10×<small>HYPER</small></button>
      </div>
    </div>
    <div class="control-hint"><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span><small>MOVEMENT</small><b>Mouse — look</b></div>
  </section>

  <footer class="statusbar">
    <div><span class="status-dot"></span><span id="flight-status">IN ORBIT</span><b>·</b><span id="engine-status">ENGINE READY</span></div>
    <button data-action="guide"><i data-lucide="circle-help"></i>Controls</button>
  </footer>

  <div class="modal-backdrop" id="modal" hidden>
    <section class="modal panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close icon-button" data-action="close-modal" aria-label="Close"><i data-lucide="x"></i></button>
      <div id="modal-content"></div>
    </section>
  </div>
  <div class="toast" id="toast"><i data-lucide="check"></i><span></span></div>
`;

function thumbStyle(object) {
  if (object.type === 'galaxies') return `--object-color:${object.color}`;
  if (object.procedural) return `--object-color:${object.color};background-image:radial-gradient(circle at 32% 28%, ${object.surface[0]}, ${object.surface[1]} 68%, #090c12)`;
  if (!object.texture) return `--object-color:${object.color};background-image:radial-gradient(circle at 38% 34%, #ffffff, ${object.color} 42%, #090c12 80%)`;
  return `--object-color:${object.color};background-image:url('/textures/${object.texture}.jpg')`;
}

function renderCatalog() {
  const filtered = objects.filter((object) => object.type === state.category && object.name.toLowerCase().includes(state.query.toLowerCase().trim()));
  const list = document.querySelector('#object-list');
  list.innerHTML = filtered.length ? filtered.map((object) => `
    <button class="object-card ${object.id === state.selectedId ? 'selected' : ''}" data-object="${object.id}">
      <span class="object-thumb ${object.type}" style="${thumbStyle(object)}">${object.type === 'galaxies' ? '<span></span>' : ''}</span>
      <span class="object-card-copy"><strong>${object.name}</strong><small>${object.type === 'planets' ? object.kind.toLowerCase() : object.distance}</small></span>
      ${object.id === state.selectedId ? '<span class="selected-indicator"></span>' : '<i data-lucide="chevron-right"></i>'}
    </button>
  `).join('') : `<div class="empty-search"><i data-lucide="search"></i><strong>Nothing found</strong><span>Try another name</span></div>`;
  document.querySelectorAll('[data-category]').forEach((button) => {
    button.classList.toggle('active', button.dataset.category === state.category);
    button.setAttribute('aria-selected', button.dataset.category === state.category);
  });
  refreshIcons();
}

function renderDetails() {
  const object = byId[state.selectedId];
  const favorite = state.favorites.includes(object.id);
  document.querySelector('#details').innerHTML = `
    <div class="details-topline"><span class="eyebrow">${object.kind}</span><button class="bookmark-button ${favorite ? 'saved' : ''}" data-action="favorite" aria-label="${favorite ? 'Remove from routes' : 'Add to routes'}"><i data-lucide="${favorite ? 'bookmark-check' : 'bookmark'}"></i></button></div>
    <h1>${object.name}</h1>
    <div class="object-subtitle"><span style="background:${object.color}"></span>${object.system}</div>
    <p class="object-description">${object.description}</p>
    <div class="object-stats">${object.stats.map(([label, value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join('')}</div>
    <button class="primary-button" data-action="travel"><i data-lucide="navigation"></i>Fly to object<i data-lucide="arrow-up-right"></i></button>
    <div class="distance-line"><i data-lucide="map-pin"></i><span>${object.distance}</span></div>
    <div class="fact-card"><span><i data-lucide="sparkles"></i>DID YOU KNOW?</span><p>${object.fact}</p></div>
  `;
  document.querySelector('#system-name').textContent = object.system;
  document.querySelector('#location-name').textContent = object.name.toUpperCase();
  document.querySelector('#marker-name').textContent = object.name.toUpperCase();
  document.querySelector('#route-count').textContent = state.favorites.length;
  refreshIcons();
}

function selectObject(id, travel = true) {
  if (!byId[id]) return;
  state.selectedId = id;
  renderCatalog();
  renderDetails();
  if (window.innerWidth < 900) document.querySelector('#catalog').classList.remove('open');
  if (travel) scene.travelTo(id);
}

function updateSpeed(value, sliderValue) {
  state.speed = value;
  scene.setSpeed(value);
  document.querySelector('#speed-value').textContent = `${value < 1 ? value.toFixed(1) : Number.isInteger(value) ? value : value.toFixed(1)}×`;
  document.querySelector('#speed-slider').value = sliderValue ?? Math.round(Math.log10(value * 10) / 3 * 100);
  document.querySelector('#speed-slider').style.setProperty('--range-progress', `${document.querySelector('#speed-slider').value}%`);
  document.querySelectorAll('[data-speed]').forEach((button) => button.classList.toggle('active', Number(button.dataset.speed) === value));
}

function toggleCruise() {
  state.cruise = !state.cruise;
  scene.setCruise(state.cruise);
  const button = document.querySelector('[data-action="cruise"]');
  button.classList.toggle('active', state.cruise);
  button.innerHTML = `<i data-lucide="${state.cruise ? 'pause' : 'play'}"></i>`;
  button.setAttribute('aria-label', state.cruise ? 'Disable autopilot' : 'Enable autopilot');
  document.querySelector('#engine-status').textContent = state.cruise ? 'AUTOPILOT ON' : 'ENGINE READY';
  refreshIcons();
}

function toggleFavorite() {
  const id = state.selectedId;
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((item) => item !== id);
    showToast(`${byId[id].name} removed from routes`);
  } else {
    state.favorites.push(id);
    showToast(`${byId[id].name} added to routes`);
  }
  localStorage.setItem('orbita-favorites', JSON.stringify(state.favorites));
  renderDetails();
}

function openModal(type) {
  state.modal = type;
  const modal = document.querySelector('#modal');
  const content = document.querySelector('#modal-content');
  modal.hidden = false;
  if (type === 'routes') {
    content.innerHTML = `
      <span class="eyebrow">YOUR SPACE JOURNAL</span>
      <h2 id="modal-title">Routes</h2>
      <p class="modal-intro">Save interesting worlds and return to them in one click.</p>
      <div class="featured-route">
        <div class="route-visual"><i data-lucide="route"></i><span>01 — 10</span></div>
        <div><small>RECOMMENDED ROUTE</small><h3>Grand tour of the universe</h3><p>Earth → Moon → Mars → Jupiter → Saturn → Neptune → Sirius → Proxima b → Andromeda → Sun</p></div>
        <button class="primary-button" data-action="tour"><i data-lucide="play"></i>Start route</button>
      </div>
      <div class="saved-heading"><h3>Saved objects</h3><span>${state.favorites.length}</span></div>
      <div class="saved-routes">
        ${state.favorites.length ? state.favorites.map((id) => {
          const object = byId[id];
          return `<div class="saved-route"><span class="object-thumb ${object.type}" style="${thumbStyle(object)}"></span><button data-route-object="${id}"><strong>${object.name}</strong><small>${object.kind}</small></button><button class="icon-button" data-remove-route="${id}" aria-label="Remove ${object.name}"><i data-lucide="x"></i></button></div>`;
        }).join('') : '<div class="empty-routes"><i data-lucide="bookmark"></i><strong>Nothing saved yet</strong><p>Click the bookmark next to an object’s name to add it to your journal.</p></div>'}
      </div>
    `;
  } else {
    content.innerHTML = `
      <span class="eyebrow">FLIGHT HANDBOOK</span>
      <h2 id="modal-title">How to explore the universe</h2>
      <p class="modal-intro">Pick a target in the catalog or chart your own course. All of space is open for travel.</p>
      <div class="guide-grid">
        <div class="guide-card"><i data-lucide="mouse"></i><h3>Look & distance</h3><p>Hold the left mouse button and move the cursor to look around. The wheel zooms the camera in and out.</p></div>
        <div class="guide-card"><i data-lucide="keyboard"></i><h3>Free flight</h3><p><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> — movement, <kbd>Q</kbd> / <kbd>E</kbd> — down and up. <kbd>Shift</kbd> — boost.</p></div>
        <div class="guide-card"><i data-lucide="gauge"></i><h3>Speed</h3><p>Move the slider or pick a preset. Speed affects flying, travel between worlds and planet rotation.</p></div>
        <div class="guide-card"><i data-lucide="navigation"></i><h3>Autopilot</h3><p>Press <kbd>Space</kbd> or the play button to move forward hands-free. Clicking a planet sets course for it.</p></div>
      </div>
      <div class="scale-note"><i data-lucide="sparkles"></i><p><strong>Built for exploration</strong>Orbital distances and period ratios in the Solar System are true to life, but time is accelerated. Body sizes are enlarged for clarity. Stars and exoplanet surfaces are generated procedurally; their appearance is an artistic reconstruction. Planet textures: NASA / JPL, Solar System Scope.</p></div>
    `;
  }
  refreshIcons();
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  document.querySelector('#modal').hidden = true;
  state.modal = null;
}

function startTour() {
  closeModal();
  clearTimeout(state.tourTimer);
  state.touring = true;
  state.tourIndex = 0;
  showToast('Grand tour started. Next stop — Earth');
  selectObject(grandTour[0]);
}

function continueTour(completedId) {
  if (!state.touring || completedId !== grandTour[state.tourIndex]) return;
  if (state.tourIndex >= grandTour.length - 1) {
    state.touring = false;
    showToast('Grand tour complete. The universe awaits new discoveries');
    return;
  }
  state.tourTimer = setTimeout(() => {
    state.tourIndex += 1;
    if (state.tourIndex === grandTour.length - 1) {
      selectObject(grandTour[state.tourIndex], false);
      scene.travelToSolarView();
    } else {
      selectObject(grandTour[state.tourIndex]);
    }
  }, Math.max(1800, 3600 / Math.sqrt(state.speed)));
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.querySelector('span').textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 3200);
}

const SOUND_BASE_GAIN = 0.5;
let audioContext;
let audioElement;
let audioGain;
let soundFactor = 1;
let lastAppliedGain = 0;
async function toggleSound() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioElement = new Audio('/textures/noise.mp3');
    audioElement.loop = true;
    audioGain = audioContext.createGain();
    audioGain.gain.value = 0;
    audioContext.createMediaElementSource(audioElement).connect(audioGain).connect(audioContext.destination);
  }
  await audioContext.resume();
  state.sound = !state.sound;
  if (state.sound) await audioElement.play().catch(() => {});
  else audioElement.pause();
  lastAppliedGain = state.sound ? SOUND_BASE_GAIN * soundFactor : 0;
  audioGain.gain.setTargetAtTime(lastAppliedGain, audioContext.currentTime, 0.5);
  const button = document.querySelector('[data-action="sound"]');
  button.innerHTML = `<i data-lucide="${state.sound ? 'volume-2' : 'volume-x'}"></i>`;
  button.classList.toggle('active', state.sound);
  button.setAttribute('aria-label', state.sound ? 'Disable space sound' : 'Enable space sound');
  refreshIcons();
  showToast(state.sound ? 'Space sound on' : 'Space sound off');
}

const scene = new UniverseScene(document.querySelector('#universe'), {
  onReady: () => {
    document.querySelector('#loading-screen').classList.add('loaded');
    setTimeout(() => document.querySelector('#loading-screen')?.remove(), 800);
  },
  onObjectClick: (id) => selectObject(id),
  onFocusChange: (id) => { state.category = byId[id].type; selectObject(id, false); },
  onProximity: (factor) => {
    soundFactor = factor;
    if (!audioContext || !state.sound) return;
    const target = SOUND_BASE_GAIN * factor;
    if (Math.abs(target - lastAppliedGain) < 0.0005) return;
    lastAppliedGain = target;
    audioGain.gain.setTargetAtTime(target, audioContext.currentTime, 0.3);
  },
  onLevelChange: (level) => showToast(level === 'stellar' ? 'Scale: stars. You are inside the Milky Way' : 'Scale: galaxies'),
  onTravelStart: (id, duration) => {
    document.querySelector('#flight-status').textContent = 'EN ROUTE';
    const notice = document.querySelector('#flight-notice');
    notice.classList.add('visible');
    document.querySelector('#flight-destination').textContent = id === 'overview' ? 'Solar System overview' : byId[id].name;
    notice.querySelector('.flight-progress span').style.animationDuration = `${duration}s`;
    document.querySelector('#object-marker').classList.add('hidden');
  },
  onTravelEnd: (id) => {
    document.querySelector('#flight-status').textContent = id === 'overview' ? 'SYSTEM OVERVIEW' : 'IN ORBIT';
    document.querySelector('#flight-notice').classList.remove('visible');
    document.querySelector('#object-marker').classList.remove('hidden');
    if (id !== 'overview') continueTour(id);
  }
});

renderCatalog();
renderDetails();
updateSpeed(1, 40);
refreshIcons();

app.addEventListener('click', (event) => {
  const objectButton = event.target.closest('[data-object]');
  const categoryButton = event.target.closest('[data-category]');
  const speedButton = event.target.closest('[data-speed]');
  const actionButton = event.target.closest('[data-action]');
  const routeObject = event.target.closest('[data-route-object]');
  const removeRoute = event.target.closest('[data-remove-route]');
  if (objectButton) selectObject(objectButton.dataset.object);
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    state.query = '';
    document.querySelector('#search').value = '';
    renderCatalog();
  }
  if (speedButton) { updateSpeed(Number(speedButton.dataset.speed)); speedButton.blur(); }
  if (routeObject) { closeModal(); selectObject(routeObject.dataset.routeObject); }
  if (removeRoute) {
    state.favorites = state.favorites.filter((id) => id !== removeRoute.dataset.removeRoute);
    localStorage.setItem('orbita-favorites', JSON.stringify(state.favorites));
    document.querySelector('#route-count').textContent = state.favorites.length;
    renderDetails();
    openModal('routes');
  }
  if (!actionButton) return;
  const actions = {
    explore: () => { closeModal(); document.querySelector('#catalog').classList.remove('open'); },
    routes: () => openModal('routes'), guide: () => openModal('guide'),
    'close-modal': closeModal, travel: () => scene.travelTo(state.selectedId),
    favorite: toggleFavorite, cruise: toggleCruise, tour: startTour,
    overview: () => scene.showOverview(), reset: () => scene.travelTo(state.selectedId),
    sound: toggleSound,
    fullscreen: async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.documentElement.requestFullscreen();
      } catch { showToast('Fullscreen is not available in this window'); }
    },
    'toggle-catalog': () => document.querySelector('#catalog').classList.toggle('open')
  };
  actions[actionButton.dataset.action]?.();
});

document.querySelector('#search').addEventListener('input', (event) => {
  state.query = event.target.value;
  renderCatalog();
});

document.querySelector('#speed-slider').addEventListener('input', (event) => {
  const sliderValue = Number(event.target.value);
  updateSpeed(Number((0.1 * Math.pow(1000, sliderValue / 100)).toFixed(1)), sliderValue);
});

document.querySelector('#speed-slider').addEventListener('change', (event) => event.target.blur());

document.querySelector('#modal').addEventListener('click', (event) => {
  if (event.target.id === 'modal') closeModal();
});

document.querySelector('.brand').addEventListener('click', (event) => {
  event.preventDefault();
  closeModal();
  selectObject('earth');
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') { closeModal(); document.querySelector('#catalog').classList.remove('open'); }
  if (event.code === 'Slash' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector('#search').focus();
  }
  if (event.code === 'Space' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName) && !state.modal) toggleCruise();
});

document.addEventListener('fullscreenchange', () => {
  const button = document.querySelector('[data-action="fullscreen"]');
  button.innerHTML = `<i data-lucide="${document.fullscreenElement ? 'minimize' : 'maximize'}"></i>`;
  refreshIcons();
});

const sessionStarted = Date.now();
setInterval(() => {
  const seconds = Math.floor((Date.now() - sessionStarted) / 1000);
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  document.querySelector('#session-time').textContent = `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
}, 1000);
