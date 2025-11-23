// app.js
// Simple SPA logic for BMU Fault Finder

// State representation
const state = {
  manufacturer: 'all',
  subsystem: 'all',
  searchText: '',
  selectedSymptomId: null,
};

// Cache DOM elements
const els = {};

const CRITICAL_PATTERNS = [
  'slides down',
  'overspeed',
  'rope slips',
  'safety circuit fault',
];

document.addEventListener('DOMContentLoaded', () => {
  els.manufacturerSelect = document.getElementById('manufacturerSelect');
  els.subsystemSelect = document.getElementById('subsystemSelect');
  els.symptomSelect = document.getElementById('symptomSelect');
  els.searchInput = document.getElementById('searchInput');
  els.summaryLine = document.getElementById('summaryLine');
  els.faultResults = document.getElementById('faultResults');

  if (!Array.isArray(FAULT_DATA) || FAULT_DATA.length === 0) {
    els.faultResults.innerHTML = '<div class="no-data">Fault dataset is empty or unavailable.</div>';
    return;
  }

  bindEvents();
  populateManufacturers();
  updateSubsystemOptions();
  updateSymptomOptions();
  render();
});

function normalizeManufacturer(value) {
  if (!value) return 'Unknown';
  const lower = value.toLowerCase();
  if (lower.includes('generic')) return 'generic-BMU';
  return value;
}

function getSubsystemValue(fault) {
  return fault.sub_system || fault.subsystem || 'Unknown';
}

function bindEvents() {
  els.manufacturerSelect.addEventListener('change', (e) => {
    state.manufacturer = e.target.value;
    state.subsystem = 'all';
    state.selectedSymptomId = null;
    updateSubsystemOptions();
    updateSymptomOptions();
    render();
  });

  els.subsystemSelect.addEventListener('change', (e) => {
    state.subsystem = e.target.value;
    state.selectedSymptomId = null;
    updateSymptomOptions();
    render();
  });

  els.symptomSelect.addEventListener('change', (e) => {
    state.selectedSymptomId = e.target.value || null;
    render();
  });

  els.searchInput.addEventListener('input', (e) => {
    state.searchText = e.target.value.trim();
    if (!isSymptomInFiltered(state.selectedSymptomId)) {
      state.selectedSymptomId = null;
    }
    render();
  });
}

function populateManufacturers() {
  const set = new Set(['All manufacturers']);
  FAULT_DATA.forEach((f) => set.add(normalizeManufacturer(f.manufacturer)));
  const options = Array.from(set).map((m) => {
    const value = m === 'All manufacturers' ? 'all' : m;
    return `<option value="${value}">${m}</option>`;
  });
  els.manufacturerSelect.innerHTML = options.join('');
}

function updateSubsystemOptions() {
  const faults = filterByManufacturer();
  const subsystems = new Set(['All subsystems']);
  faults.forEach((f) => subsystems.add(getSubsystemValue(f)));
  const options = Array.from(subsystems).map((s) => {
    const value = s === 'All subsystems' ? 'all' : s;
    return `<option value="${value}">${s}</option>`;
  });
  els.subsystemSelect.innerHTML = options.join('');
}

function updateSymptomOptions() {
  const faults = filterByManufacturerAndSubsystem();
  const options = ['<option value="">Select a symptom</option>'];
  faults.forEach((f) => {
    options.push(`<option value="${f.id}">${f.symptom_title}</option>`);
  });
  els.symptomSelect.innerHTML = options.join('');
}

function filterByManufacturer() {
  if (state.manufacturer === 'all') return [...FAULT_DATA];
  return FAULT_DATA.filter((f) => {
    const manufacturer = normalizeManufacturer(f.manufacturer);
    return manufacturer === state.manufacturer || manufacturer === 'generic-BMU';
  });
}

function filterByManufacturerAndSubsystem() {
  const base = filterByManufacturer();
  if (state.subsystem === 'all') return base;
  return base.filter((f) => getSubsystemValue(f) === state.subsystem);
}

function filterBySearch(list) {
  const text = state.searchText.toLowerCase();
  if (!text) return list;
  return list.filter((f) => matchesSearch(f, text));
}

function matchesSearch(fault, text) {
  const haystacks = [
    fault.symptom_title,
    ...(fault.symptom_details || []),
    ...(fault.technical_root_causes || fault.typical_root_causes || []),
    ...(fault.diagnostic_steps || fault.diagnostic_checks_step_by_step || []),
    ...(fault.parts_commonly_involved || []),
  ];
  return haystacks.some((h) => typeof h === 'string' && h.toLowerCase().includes(text));
}

function isSymptomInFiltered(symptomId) {
  if (!symptomId) return true;
  const list = filterBySearch(filterByManufacturerAndSubsystem());
  return list.some((f) => f.id === symptomId);
}

function render() {
  const filtered = filterBySearch(filterByManufacturerAndSubsystem());
  els.summaryLine.textContent = filtered.length
    ? `Showing ${filtered.length} fault pattern${filtered.length > 1 ? 's' : ''}`
    : 'No faults match your filters.';

  if (!filtered.length) {
    els.faultResults.innerHTML = '<div class="no-data">No matching faults. Adjust filters or search terms.</div>';
    return;
  }

  let faultToShow = null;
  if (state.selectedSymptomId) {
    faultToShow = filtered.find((f) => f.id === state.selectedSymptomId);
  }
  if (!faultToShow) {
    faultToShow = filtered[0];
  }

  els.symptomSelect.value = faultToShow ? faultToShow.id : '';
  els.faultResults.innerHTML = faultToShow
    ? renderFaultCard(faultToShow)
    : '<div class="placeholder">Select a symptom to view full details.</div>';

  attachCopyHandler(faultToShow);
}

function renderFaultCard(fault) {
  const manufacturer = normalizeManufacturer(fault.manufacturer);
  const subsystem = getSubsystemValue(fault);
  const isCritical = CRITICAL_PATTERNS.some((p) =>
    fault.symptom_title.toLowerCase().includes(p)
  );

  const sections = [];
  sections.push(renderListSection('Symptom details', fault.symptom_details));
  sections.push(renderListSection('Typical root causes', fault.technical_root_causes || fault.typical_root_causes));
  sections.push(renderListSection('Diagnostic checks (step-by-step)', fault.diagnostic_steps || fault.diagnostic_checks_step_by_step, true));

  if (Array.isArray(fault.safety_hazards_and_warnings) && fault.safety_hazards_and_warnings.length) {
    sections.push(`
      <section class="section">
        <h3>Safety hazards and warnings</h3>
        <div class="safety-block">
          <ul>${fault.safety_hazards_and_warnings.map((i) => `<li>${i}</li>`).join('')}</ul>
        </div>
      </section>
    `);
  }

  sections.push(renderListSection('Recommended corrective actions', fault.remedial_actions || fault.recommended_corrective_actions));
  sections.push(renderListSection('Parts commonly involved', fault.parts_commonly_involved));
  sections.push(renderListSection('Manufacturer references / Sources', fault.manufacturer_references_or_sources));

  if (fault.notes_for_app) {
    sections.push(`
      <section class="section">
        <h3>Notes for app</h3>
        <p>${fault.notes_for_app}</p>
      </section>
    `);
  }

  return `
    <article class="card">
      <div class="card-header">
        <h2>${fault.symptom_title}</h2>
        <div class="badges">
          <span class="badge">${manufacturer}</span>
          <span class="badge subsystem">${subsystem}</span>
          ${isCritical ? '<span class="badge critical">CRITICAL – STOP AND ESCALATE</span>' : ''}
        </div>
      </div>
      ${sections.filter(Boolean).join('')}
      <div class="copy-area">
        <button class="copy-button" id="copyButton">Copy troubleshooting steps</button>
        <div id="copyFeedback" class="copy-feedback" aria-live="polite"></div>
        <div id="copyFallback"></div>
      </div>
    </article>
  `;
}

function renderListSection(title, items, ordered = false) {
  if (!Array.isArray(items) || !items.length) return '';
  const list = ordered
    ? `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`
    : `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
  return `
    <section class="section">
      <h3>${title}</h3>
      ${list}
    </section>
  `;
}

function buildCopyText(fault) {
  const blocks = [
    `Symptom: ${fault.symptom_title}`,
    renderPlain('Symptom details', fault.symptom_details),
    renderPlain('Typical root causes', fault.technical_root_causes || fault.typical_root_causes),
    renderPlain('Diagnostic checks', fault.diagnostic_steps || fault.diagnostic_checks_step_by_step),
    renderPlain('Safety hazards and warnings', fault.safety_hazards_and_warnings),
    renderPlain('Recommended corrective actions', fault.remedial_actions || fault.recommended_corrective_actions),
    renderPlain('Parts commonly involved', fault.parts_commonly_involved),
  ];
  return blocks.filter(Boolean).join('\n\n');
}

function renderPlain(title, items) {
  if (!Array.isArray(items) || !items.length) return '';
  return `${title}:\n- ${items.join('\n- ')}`;
}

function attachCopyHandler(fault) {
  const btn = document.getElementById('copyButton');
  const feedback = document.getElementById('copyFeedback');
  const fallback = document.getElementById('copyFallback');
  if (!btn || !fault) return;
  btn.onclick = async () => {
    const text = buildCopyText(fault);
    feedback.textContent = '';
    fallback.innerHTML = '';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        feedback.textContent = 'Copied to clipboard.';
      } catch (err) {
        showCopyFallback(text, fallback, feedback);
      }
    } else {
      showCopyFallback(text, fallback, feedback);
    }
  };
}

function showCopyFallback(text, fallbackContainer, feedbackEl) {
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea-fallback';
  textarea.value = text;
  fallbackContainer.innerHTML = '';
  fallbackContainer.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);
  feedbackEl.textContent = 'Clipboard unavailable. Text selected – press Ctrl+C / Cmd+C to copy.';
}
