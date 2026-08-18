const DATA = {
  meireles: {
    nome: 'Meireles',
    sub: 'bairro de referência',
    pos: { x: 58.1, y: 17.9 },
    renda: { value: 12148.10, display: 'R$ 12.148,10', status: 'confirmado', fonte: 'IPECE Informe nº 272 / Censo 2022' },
    arv: { value: 68, display: '68%', status: 'estimado', fonte: 'Estimativa visual para protótipo; dado por bairro não localizado nas pesquisas feitas' },
    lixo: { value: 3, display: '3 pontos', status: 'estimado', fonte: 'Estimativa para protótipo; dado por bairro não localizado nas pesquisas feitas' },
    coleta: { value: 92, display: '92%', status: 'estimado', fonte: 'Estimativa para protótipo; dado por bairro não localizado nas pesquisas feitas' },
    temp: { value: 27, display: '27°C', status: 'estimado', fonte: 'Estimativa para protótipo; dado por bairro não localizado nas pesquisas feitas' }
  },

  pirambu: {
    nome: 'Pirambu',
    sub: 'litoral oeste, ocupação histórica',
    pos: { x: 35.0, y: 9.1 },
    renda: { value: 1405.69, display: 'R$ 1.405,69', status: 'confirmado', fonte: 'IPECE Informe nº 272 / Censo 2022' },
    arv: { value: 19, display: '19%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    lixo: { value: 34, display: '34 pontos', status: 'estimado', fonte: 'Estimativa para protótipo; consultar Prefeitura/SEUMA' },
    coleta: { value: 21, display: '21%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    temp: { value: 30, display: '30°C', status: 'estimado', fonte: 'Estimativa para protótipo; consultar estudos UFC/UECE/INMET' }
  },

  jangurussu: {
    nome: 'Jangurussu',
    sub: 'zona sul, próximo ao antigo aterro sanitário',
    pos: { x: 52.5, y: 74.9 },
    renda: { value: 1280, display: 'R$ 1.280,00', status: 'estimado', fonte: 'Valor provisório; dado ainda não localizado nas pesquisas feitas' },
    arv: { value: 14, display: '14%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    lixo: { value: 41, display: '41 pontos', status: 'estimado', fonte: 'Estimativa para protótipo; consultar Prefeitura/SEUMA' },
    coleta: { value: 17, display: '17%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    temp: { value: 31, display: '31°C', status: 'estimado', fonte: 'Estimativa para protótipo; consultar estudos UFC/UECE/INMET' }
  },

  barradoceara: {
    nome: 'Barra do Ceará',
    sub: 'bairro na foz do rio Ceará',
    pos: { x: 24.4, y: 8.3 },
    renda: { value: 1510, display: 'R$ 1.510,00', status: 'estimado', fonte: 'Valor provisório; dado ainda não localizado nas pesquisas feitas' },
    arv: { value: 21, display: '21%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    lixo: { value: 29, display: '29 pontos', status: 'estimado', fonte: 'Estimativa para protótipo; consultar Prefeitura/SEUMA' },
    coleta: { value: 24, display: '24%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    temp: { value: 30, display: '30°C', status: 'estimado', fonte: 'Estimativa para protótipo; consultar estudos UFC/UECE/INMET' }
  },

  bomjardim: {
    nome: 'Bom Jardim',
    sub: 'zona oeste, alta densidade',
    pos: { x: 14.4, y: 48.4 },
    renda: { value: 1342.03, display: 'R$ 1.342,03', status: 'confirmado', fonte: 'IPECE Informe nº 272 / Censo 2022' },
    arv: { value: 11, display: '11%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    lixo: { value: 47, display: '47 pontos', status: 'estimado', fonte: 'Estimativa para protótipo; consultar Prefeitura/SEUMA' },
    coleta: { value: 15, display: '15%', status: 'estimado', fonte: 'Estimativa para protótipo; consultar IBGE/SEUMA' },
    temp: { value: 31.5, display: '31,5°C', status: 'estimado', fonte: 'Estimativa para protótipo; consultar estudos UFC/UECE/INMET' }
  }
};

const CITY_CONTEXT = {
  narrative:
    'As pesquisas feitas confirmam dados de renda para Meireles, Pirambu e Bom Jardim. Arborização, coleta, descarte e temperatura ainda dependem de consulta direta ao IBGE, IPECE, SEUMA, UFC/UECE ou INMET, por isso aparecem como estimativas no protótipo.',
  metrics: {
    geral: { label: 'Índice geral', unit: '%', largerIsBetter: true },
    renda: { label: 'Renda média mensal', unit: 'R$', largerIsBetter: true },
    arv: { label: 'Arborização', unit: '%', largerIsBetter: true },
    lixo: { label: 'Descarte irregular', unit: 'pontos', largerIsBetter: false },
    coleta: { label: 'Coleta seletiva', unit: '%', largerIsBetter: true },
    temp: { label: 'Temperatura média', unit: '°C', largerIsBetter: false }
  }
};

let selected = null;
let activeMetric = 'geral';

const chips = document.querySelectorAll('.chip');
const badges = document.querySelectorAll('.badge.selectable');
const compareBtn = document.getElementById('compareBtn');
const vsRightName = document.getElementById('vsRightName');
const mapStatus = document.getElementById('mapStatus');
const mapDim = document.getElementById('mapDim');
const spotA = document.getElementById('spotA');
const spotB = document.getElementById('spotB');
const conduitPath = document.getElementById('conduitPath');
const mapFrame = document.getElementById('mapFrame');
const tutorialOverlay = document.getElementById('tutorialOverlay');
const startTutorialBtn = document.getElementById('startTutorialBtn');
const helpBtn = document.getElementById('helpBtn');
const compareOverlay = document.getElementById('compareOverlay');
const compareCloseBtn = document.getElementById('compareCloseBtn');
const diffList = document.getElementById('diffList');
const stateNarrative = document.getElementById('stateNarrative');
const simpleNarrative = document.getElementById('simpleNarrative');
const stateChart = document.getElementById('stateChart');
const metricSwitch = document.getElementById('metricSwitch');
const metricButtons = document.querySelectorAll('.metric-btn');
const compareBtnLabel = document.getElementById('compareBtnLabel');
const metricHelp = document.getElementById('metricHelp');
const kpiIncome = document.getElementById('kpiIncome');
const kpiGreen = document.getElementById('kpiGreen');
const kpiHeat = document.getElementById('kpiHeat');
const kpiClean = document.getElementById('kpiClean');

function getMetric(bairro, metric) {
  return bairro[metric];
}

function metricDisplay(bairro, metric) {
  return getMetric(bairro, metric).display;
}

function metricValue(bairro, metric) {
  return getMetric(bairro, metric).value;
}

function normalizeMetricValue(key, metric) {
  const meta = CITY_CONTEXT.metrics[metric];
  const value = metricValue(DATA[key], metric);

  if (meta.unit === '%') {
    return Math.max(0, Math.min(100, value));
  }

  const values = Object.keys(DATA).map((bairroKey) => metricValue(DATA[bairroKey], metric));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const denominator = max - min || 1;

  const score = meta.largerIsBetter
    ? ((value - min) / denominator) * 100
    : ((max - value) / denominator) * 100;

  return Math.max(0, Math.min(100, score));
}

function getGeneralScore(key) {
  const metrics = ['renda', 'arv', 'coleta', 'lixo', 'temp'];
  const total = metrics.reduce((sum, metric) => sum + normalizeMetricValue(key, metric), 0);
  return total / metrics.length;
}

function sourceBadge(metric) {
  return metric.status === 'confirmado' ? 'confirmado' : 'estimado';
}

function showTutorial() {
  tutorialOverlay.classList.remove('hidden');
  tutorialOverlay.setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideTutorial() {
  tutorialOverlay.classList.add('hidden');
  tutorialOverlay.setAttribute('aria-hidden', 'true');
  localStorage.setItem('tutorialSeen', 'true');
}

function initTutorial() {
  if (localStorage.getItem('tutorialSeen') !== 'true') {
    showTutorial();
  }
}

startTutorialBtn?.addEventListener('click', hideTutorial);
helpBtn?.addEventListener('click', showTutorial);

tutorialOverlay?.addEventListener('click', (event) => {
  if (event.target === tutorialOverlay) hideTutorial();
});

function select(id) {
  if (!DATA[id]) {
    console.error('Bairro não encontrado:', id);
    return;
  }

  selected = id;

  chips.forEach((chip) => {
    chip.classList.toggle('is-selected', chip.dataset.id === id);
  });

  badges.forEach((badge) => {
    badge.classList.toggle('is-active', badge.dataset.id === id);
  });

  vsRightName.textContent = DATA[id].nome;
  mapStatus.textContent = 'Pronto: clique em "Comparar bairros" para ver os dados.';
  compareBtnLabel.textContent = 'Comparar com ' + DATA[id].nome;
  compareBtn.disabled = false;

  compareBtn.classList.remove('is-reselect');
  void compareBtn.offsetWidth;
  compareBtn.classList.add('is-reselect');
  setTimeout(() => compareBtn.classList.remove('is-reselect'), 700);

  closeCompareModal();
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => select(chip.dataset.id));
});

badges.forEach((badge) => {
  badge.addEventListener('click', () => select(badge.dataset.id));
});

function closeCompareModal() {
  compareOverlay.classList.remove('is-open');
  compareOverlay.setAttribute('aria-hidden', 'true');
  mapFrame.classList.remove('is-comparing');
  mapDim.style.opacity = 0;

  spotA.style.opacity = 0;
  spotA.style.clipPath = 'circle(0px at 50% 50%)';
  spotB.style.opacity = 0;
  spotB.style.clipPath = 'circle(0px at 50% 50%)';
}

function openCompareModal() {
  compareOverlay.classList.add('is-open');
  compareOverlay.setAttribute('aria-hidden', 'false');
  compareCloseBtn.focus();
}

compareCloseBtn.addEventListener('click', closeCompareModal);

compareOverlay.addEventListener('click', (event) => {
  if (event.target === compareOverlay) closeCompareModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (compareOverlay.classList.contains('is-open')) closeCompareModal();
    if (!tutorialOverlay.classList.contains('hidden')) hideTutorial();
  }
});

metricSwitch?.addEventListener('click', (event) => {
  const target = event.target.closest('.metric-btn');
  if (!target) return;

  activeMetric = target.dataset.metric;
  metricButtons.forEach((button) => {
    button.classList.toggle('is-active', button === target);
  });

  renderCityChart(activeMetric);
});

function setCountUp(element, metric) {
  const targetText = metric.display;
  const number = metric.value;

  if (!Number.isFinite(number)) {
    element.textContent = targetText;
    return;
  }

  const duration = 700;
  const start = performance.now();

  function renderNumber(value) {
    if (targetText.includes('R$')) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    if (targetText.includes('°C')) {
      return `${value.toFixed(number % 1 === 0 ? 0 : 1).replace('.', ',')}°C`;
    }
    if (targetText.includes('%')) {
      return `${Math.round(value).toLocaleString('pt-BR')}%`;
    }
    return `${Math.round(value).toLocaleString('pt-BR')} pontos`;
  }

  function frame(time) {
    const progress = Math.min(1, (time - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = renderNumber(number * eased);

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      element.textContent = targetText;
    }
  }

  requestAnimationFrame(frame);
}

function fillStats(id) {
  const bairro = DATA[id];
  const meireles = DATA.meireles;

  document.getElementById('r-nome').textContent = bairro.nome;
  document.getElementById('r-sub').textContent = bairro.sub;
  document.getElementById('compareTitle').textContent = 'Meireles × ' + bairro.nome;

  const rows = [
    ['m-renda', meireles.renda],
    ['m-arv', meireles.arv],
    ['m-lixo', meireles.lixo],
    ['m-coleta', meireles.coleta],
    ['m-temp', meireles.temp],
    ['r-renda', bairro.renda],
    ['r-arv', bairro.arv],
    ['r-lixo', bairro.lixo],
    ['r-coleta', bairro.coleta],
    ['r-temp', bairro.temp]
  ];

  rows.forEach(([elementId, value], index) => {
    const element = document.getElementById(elementId);
    element.textContent = '—';
    element.dataset.status = value.status;
    element.title = `${sourceBadge(value)}: ${value.fonte}`;

    setTimeout(() => setCountUp(element, value), 300 + index * 80);
  });

  renderDifferences(id);
  renderStateContext(id);
}

function renderDifferences(id) {
  const bairro = DATA[id];
  const meireles = DATA.meireles;

  const rendaGap = metricValue(meireles, 'renda') / metricValue(bairro, 'renda');
  const arvGap = metricValue(meireles, 'arv') - metricValue(bairro, 'arv');
  const lixoGap = metricValue(bairro, 'lixo') - metricValue(meireles, 'lixo');
  const coletaGap = metricValue(meireles, 'coleta') - metricValue(bairro, 'coleta');
  const tempGap = metricValue(bairro, 'temp') - metricValue(meireles, 'temp');
  const rendaStatus = bairro.renda.status === 'confirmado' ? 'confirmado' : 'estimado';

  diffList.innerHTML = `
    <div class="diff-item">
      <strong><span class="diff-chip good">${rendaStatus}</span>Renda média</strong>
      <b>Meireles tem ${rendaGap.toFixed(1).replace('.', ',')}x mais renda.</b>
    </div>
    <div class="diff-item">
      <strong><span class="diff-chip alert">estimado</span>Arborização</strong>
      <b>Diferença de ${arvGap.toFixed(1).replace('.', ',')} p.p. de cobertura verde.</b>
    </div>
    <div class="diff-item">
      <strong><span class="diff-chip alert">estimado</span>Descarte irregular</strong>
      <b>${bairro.nome} aparece com ${lixoGap.toFixed(1).replace('.', ',')} pontos a mais.</b>
    </div>
    <div class="diff-item">
      <strong><span class="diff-chip alert">estimado</span>Coleta seletiva</strong>
      <b>Diferença de ${coletaGap.toFixed(1).replace('.', ',')} p.p. de cobertura.</b>
    </div>
    <div class="diff-item">
      <strong><span class="diff-chip alert">estimado</span>Temperatura média</strong>
      <b>${bairro.nome} aparece ${tempGap.toFixed(1).replace('.', ',')}°C acima de Meireles.</b>
    </div>
  `;

  kpiIncome.textContent = `${rendaGap.toFixed(1).replace('.', ',')}x`;
  kpiGreen.textContent = `${arvGap.toFixed(1).replace('.', ',')} p.p.`;
  kpiHeat.textContent = `+${tempGap.toFixed(1).replace('.', ',')}°C`;
  kpiClean.textContent = `${coletaGap.toFixed(1).replace('.', ',')} p.p.`;

  simpleNarrative.textContent =
    `Comparando Meireles com ${bairro.nome}, a maior diferença aparece na renda: Meireles tem ${rendaGap.toFixed(1).replace('.', ',')}x mais renda média. ` +
    `Na leitura ambiental do protótipo, ${bairro.nome} aparece com menos arborização, menor coleta seletiva e temperatura mais alta.`;
}

function formatStateValue(value, unit) {
  if (unit === '%') return `${value.toFixed(value % 1 === 0 ? 0 : 1).replace('.', ',')}%`;
  if (unit === '°C') return `${value.toFixed(value % 1 === 0 ? 0 : 1).replace('.', ',')}${unit}`;
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderStateContext(id) {
  const bairro = DATA[id];
  const bairroTemp = metricValue(bairro, 'temp');
  const meirelesTemp = metricValue(DATA.meireles, 'temp');

  const localHeatMessage =
    bairroTemp > meirelesTemp
      ? `${bairro.nome} aparece com temperatura média mais alta que Meireles, reforçando a hipótese de ilhas de calor urbanas.`
      : `${bairro.nome} aparece com temperatura próxima de Meireles, mas ainda com diferenças relevantes nos demais indicadores.`;

  stateNarrative.textContent = `${CITY_CONTEXT.narrative} ${localHeatMessage}`;
  metricHelp.textContent = 'Escolha uma métrica para ver o ranking dos bairros.';

  renderCityChart(activeMetric);
}

function renderCityChart(metric) {
  const metricMeta = CITY_CONTEXT.metrics[metric];
  if (!metricMeta) return;

  stateChart.innerHTML = '';

  const directionText = metricMeta.largerIsBetter ? 'maior valor' : 'menor valor';
  const usesTotalShare = metric === 'geral' || metricMeta.unit === '%';

  metricHelp.textContent = metric === 'geral'
    ? 'Índice geral: todos os bairros somam 100%. Cada barra mostra a fatia de participação do bairro no resultado combinado.'
    : usesTotalShare
    ? `Métrica ativa: ${metricMeta.label}. Todos os bairros somam 100%; cada barra mostra a fatia do bairro nesse total.`
    : `Métrica ativa: ${metricMeta.label}. Melhor desempenho = ${directionText}.`;

  const rawEntries = Object.keys(DATA).map((key) => ({
    key,
    nome: DATA[key].nome,
    rawValue: metric === 'geral' ? getGeneralScore(key) : metricValue(DATA[key], metric),
    status: metric === 'geral' ? 'calculado' : getMetric(DATA[key], metric).status
  }));

  const totalScore = rawEntries.reduce((sum, entry) => sum + entry.rawValue, 0) || 1;
  const entries = rawEntries.map((entry) => ({
    ...entry,
    value: usesTotalShare ? (entry.rawValue / totalScore) * 100 : entry.rawValue
  }));

  const sorted = [...entries].sort((a, b) => (
    metricMeta.largerIsBetter ? b.value - a.value : a.value - b.value
  ));

  const values = sorted.map((entry) => entry.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const denominator = max - min || 1;

  if (usesTotalShare) {
    const stack = document.createElement('div');
    stack.className = 'share-stack';
    stack.setAttribute('aria-label', `Distribuição percentual de ${metricMeta.label} entre os bairros`);

    sorted.forEach((entry) => {
      const segment = document.createElement('div');
      segment.className = 'share-segment';
      if (selected && entry.key === selected) segment.classList.add('is-selected');
      segment.style.width = `${entry.value}%`;
      segment.title = `${entry.nome}: ${entry.value.toFixed(1).replace('.', ',')}% do total`;
      segment.textContent = entry.value >= 11 ? `${entry.value.toFixed(0)}%` : '';
      stack.appendChild(segment);
    });

    stateChart.appendChild(stack);
  }

  sorted.forEach((entry, index) => {
    const row = document.createElement('div');
    row.className = 'city-row';
    if (selected && entry.key === selected) row.classList.add('is-selected');

    const normalized = usesTotalShare
      ? entry.value
      : metricMeta.largerIsBetter
        ? ((entry.value - min) / denominator) * 100
        : ((max - entry.value) / denominator) * 100;
    const barWidth = Math.max(12, normalized);
    const rankClass = index === 0 ? 'top' : index === sorted.length - 1 ? 'last' : '';

    row.innerHTML = `
      <div class="city-name"><span class="rank-badge ${rankClass}">${index + 1}</span>${entry.nome.toUpperCase()}</div>
      <div class="city-bar-track">
        <div class="city-bar-fill" style="width:0; transition-delay:${index * 90}ms"></div>
      </div>
      <div class="city-value" title="${usesTotalShare
        ? `${entry.status}; valor base: ${formatStateValue(entry.rawValue, metricMeta.unit)}`
        : entry.status}">${usesTotalShare
        ? `${entry.value.toFixed(1).replace('.', ',')}%`
        : formatStateValue(entry.value, metricMeta.unit)}</div>
    `;

    stateChart.appendChild(row);
    setTimeout(() => row.classList.add('is-visible'), 30 + index * 55);
    requestAnimationFrame(() => {
      row.querySelector('.city-bar-fill').style.width = `${barWidth}%`;
    });
  });

  stateChart.setAttribute('aria-label', `Gráfico por bairros: ${metricMeta.label}`);
}

function drawConduit(idA, idB) {
  const a = DATA[idA].pos;
  const b = DATA[idB].pos;

  const x1 = (a.x / 100) * 800;
  const y1 = (a.y / 100) * 661;
  const x2 = (b.x / 100) * 800;
  const y2 = (b.y / 100) * 661;
  const middleX = (x1 + x2) / 2;
  const middleY = (y1 + y2) / 2 - 60;

  conduitPath.setAttribute('d', `M ${x1} ${y1} Q ${middleX} ${middleY} ${x2} ${y2}`);
  spotA.style.clipPath = `circle(0px at ${a.x}% ${a.y}%)`;
  spotB.style.clipPath = `circle(0px at ${b.x}% ${b.y}%)`;
  spotA.style.opacity = 1;
  spotB.style.opacity = 1;

  requestAnimationFrame(() => {
    spotA.style.clipPath = `circle(55px at ${a.x}% ${a.y}%)`;
    spotB.style.clipPath = `circle(55px at ${b.x}% ${b.y}%)`;
  });
}

compareBtn.addEventListener('click', () => {
  if (!selected) return;

  mapStatus.textContent = 'Focando nos bairros: Meireles × ' + DATA[selected].nome + '...';
  mapFrame.classList.add('is-comparing');
  mapDim.style.opacity = 1;
  drawConduit('meireles', selected);
  fillStats(selected);

  const isMobile = window.matchMedia('(max-width: 880px)').matches;

  if (isMobile) {
    mapFrame.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Dá tempo do efeito de zoom (2s via CSS) ser visto antes de abrir o modal.
  // No mobile soma um tempo extra para a rolagem até o mapa também acontecer.
  const delay = isMobile ? 2300 : 1900;
  setTimeout(openCompareModal, delay);
});

document.addEventListener('DOMContentLoaded', initTutorial);