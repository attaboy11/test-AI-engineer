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
  els.checklistCards = document.getElementById('checklistCards');
  els.rescuePrompts = document.getElementById('rescuePrompts');
  els.siteNotes = document.getElementById('siteNotes');
  els.trainingCards = document.getElementById('trainingCards');

  if (!Array.isArray(FAULT_DATA) || FAULT_DATA.length === 0) {
    els.faultResults.innerHTML = '<div class="no-data">Fault dataset is empty or unavailable.</div>';
    return;
  }

  bindEvents();
  populateManufacturers();
  updateSubsystemOptions();
  updateSymptomOptions();
  renderKnowledgeCards();
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
    ...(fault.quick_triage_questions || []),
    ...(fault.tools_required || []),
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
  const riskBadge = fault.risk_level
    ? `<span class="badge risk ${fault.risk_level}">Risk: ${fault.risk_level}</span>`
    : '';

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
  sections.push(renderListSection('Quick triage questions', fault.quick_triage_questions));
  sections.push(renderListSection('Tools required', fault.tools_required));
  sections.push(renderListSection('Test procedures after fix', fault.test_procedures_after_fix));

  if (Array.isArray(fault.escalation_criteria) && fault.escalation_criteria.length) {
    sections.push(`
      <section class="section">
        <h3>Escalation criteria</h3>
        <div class="escalation-block">
          <ul>${fault.escalation_criteria.map((i) => `<li>${i}</li>`).join('')}</ul>
        </div>
      </section>
    `);
  }

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
          ${riskBadge}
        </div>
      </div>
      ${renderMetaGrid(fault)}
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
    renderMetaPlain(fault),
    renderPlain('Symptom details', fault.symptom_details),
    renderPlain('Typical root causes', fault.technical_root_causes || fault.typical_root_causes),
    renderPlain('Diagnostic checks', fault.diagnostic_steps || fault.diagnostic_checks_step_by_step),
    renderPlain('Safety hazards and warnings', fault.safety_hazards_and_warnings),
    renderPlain('Recommended corrective actions', fault.remedial_actions || fault.recommended_corrective_actions),
    renderPlain('Parts commonly involved', fault.parts_commonly_involved),
    renderPlain('Quick triage questions', fault.quick_triage_questions),
    renderPlain('Tools required', fault.tools_required),
    renderPlain('Test procedures after fix', fault.test_procedures_after_fix),
    renderPlain('Escalation criteria', fault.escalation_criteria),
  ];
  return blocks.filter(Boolean).join('\n\n');
}

function renderPlain(title, items) {
  if (!Array.isArray(items) || !items.length) return '';
  return `${title}:\n- ${items.join('\n- ')}`;
}

function renderMetaPlain(fault) {
  const meta = [];
  if (fault.risk_level) meta.push(`Risk level: ${fault.risk_level}`);
  if (fault.estimated_downtime_hours) meta.push(`Estimated downtime: ${fault.estimated_downtime_hours} hrs`);
  if (fault.required_competence) meta.push(`Required competence: ${fault.required_competence}`);
  return meta.length ? meta.join(' | ') : '';
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

function renderMetaGrid(fault) {
  const rows = [];
  if (fault.risk_level) {
    rows.push(`<div><div class="meta-label">Risk level</div><div class="meta-value">${fault.risk_level}</div></div>`);
  }
  if (fault.estimated_downtime_hours) {
    rows.push(`<div><div class="meta-label">Estimated downtime</div><div class="meta-value">${fault.estimated_downtime_hours} hrs</div></div>`);
  }
  if (fault.required_competence) {
    rows.push(`<div><div class="meta-label">Required competence</div><div class="meta-value">${fault.required_competence}</div></div>`);
  }
  if (!rows.length) return '';
  return `
    <section class="section meta-grid">
      ${rows.join('')}
    </section>
  `;
}

function renderKnowledgeCards() {
  renderChecklists();
  renderRescuePrompts();
  renderSiteNotes();
  renderTrainingCards();
}

function renderChecklists() {
  if (!els.checklistCards || !Array.isArray(PRE_USE_CHECKLISTS)) return;
  const cards = PRE_USE_CHECKLISTS.map((check) => `
    <article class="card sub-card">
      <div class="sub-card-header">
        <div>
          <div class="pill">${check.variant}</div>
          <h3>${check.title}</h3>
        </div>
        <div class="tag-row">${(check.mapped_subsystems || []).map((t) => `<span class="chip">${t}</span>`).join('')}</div>
      </div>
      ${renderListSection('Checklist', check.steps, true)}
    </article>
  `);
  els.checklistCards.innerHTML = cards.join('');
}

function renderRescuePrompts() {
  if (!els.rescuePrompts || !Array.isArray(RESCUE_PROMPTS)) return;
  const cards = RESCUE_PROMPTS.map((item) => `
    <article class="card sub-card">
      <h3>${item.title}</h3>
      ${renderListSection('Ask before starting', item.prompts)}
      <div class="escalation-block">
        <strong>Escalate when:</strong>
        <p>${item.escalation}</p>
      </div>
    </article>
  `);
  els.rescuePrompts.innerHTML = cards.join('');
}

function renderSiteNotes() {
  if (!els.siteNotes || !Array.isArray(SITE_NOTE_PATTERNS)) return;
  const cards = SITE_NOTE_PATTERNS.map((item) => `
    <article class="card sub-card">
      <h3>${item.site}</h3>
      ${renderListSection('Common hazards', item.hazards)}
      ${renderListSection('Mitigations', item.mitigations)}
    </article>
  `);
  els.siteNotes.innerHTML = cards.join('');
}

function renderTrainingCards() {
  if (!els.trainingCards || !Array.isArray(TRAINING_CARDS)) return;
  const cards = TRAINING_CARDS.map((card) => `
    <article class="card sub-card">
      <h3>${card.title}</h3>
      <p class="muted">${card.summary}</p>
      ${renderListSection('Practice / links', card.links)}
    </article>
  `);
  els.trainingCards.innerHTML = cards.join('');
}
