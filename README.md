# BMU Fault Finder

BMU Fault Finder is a small, self-contained web app that helps façade access / BMU engineers quickly troubleshoot common faults on CoxGomyl, Manntech and Tractel machines, plus generic BMU patterns.

It is designed as a **field aid and training tool**, not a replacement for formal procedures, O&M manuals, or standards such as EN1808.

> **Safety first:** Always follow site SSOW, risk assessments, local regulations, and manufacturer documentation. This app is guidance only.

---

## 1. Purpose and scope

Modern BMUs are complex systems combining mechanical, electrical, electronic, and safety subsystems. Faults are often repetitive across sites and manufacturers, but the knowledge to diagnose them lives mostly in engineers’ heads.

This app aims to:

- Capture **common, recurring fault patterns** in a structured way.
- Provide **step-by-step diagnostic guidance** for apprentices and engineers.
- Reduce time spent on:
  - Phone support calls.
  - Repeating the same troubleshooting explanations.
  - Re-discovering known issues on each site.
- Create a foundation that can later be extended with:
  - Internal breakdown data.
  - Job history.
  - Parts usage stats.
  - Training content and AI assistance.

Current focus:

- CoxGomyl BMUs  
- Manntech BMUs  
- Tractel BMUs  
- Generic BMU patterns (`generic-BMU`) that apply across manufacturers

---

## 2. Key features

- **Multi-criteria filtering**
  - Filter by **manufacturer**:
    - All manufacturers
    - `generic-BMU`
    - CoxGomyl
    - Manntech
    - Tractel
  - Filter by **subsystem**:
    - e.g. Power supply, hoist, traversing, luffing, mast, safety circuits, etc.
  - Filter by **symptom** (human-readable `symptom_title`).
  - Optional **free-text search** across symptom, causes, diagnostic checks, parts.

- **Structured fault view**
  - Symptom title
  - Symptom details
  - Typical root causes
  - Diagnostic checks (step-by-step)
  - Safety hazards and warnings (visually emphasised)
  - Recommended corrective actions
  - Parts commonly involved
  - Manufacturer references / source URLs
  - Optional “notes for app” field

- **Safety emphasis**
  - Prominent safety note in the header.
  - Dedicated “Safety hazards and warnings” section for each fault.
  - Visual highlighting for “critical” patterns (e.g. overspeed, brake slip) via badges.

- **Clipboard helper**
  - One-click “Copy troubleshooting steps” button.
  - Copies a plain-text summary (symptom, causes, checks, warnings, actions, parts) for:
    - Job notes
    - WhatsApp messages
    - Email reports
    - Site logs

- **Offline, zero-dependency**
  - No servers, no API calls, no external libraries.
  - Runs entirely in the browser.
  - Works with any simple static hosting (Netlify, S3, GitHub Pages) or just by opening `index.html`.

---

## 3. Safety disclaimer

This tool is intended as **supporting guidance only**.

- It **does not replace**:
  - Site-specific SSOW (Safe System of Work).
  - O&M manuals and technical documentation.
  - Risk assessments and rescue plans.
  - Competent person judgement.

- Always:
  - Isolate and secure BMU equipment before intervention.
  - Follow Work at Height regulations and local legislation.
  - Escalate critical or unclear situations to your supervisor / technical authority.

If there is any conflict between this app and an official document or instruction, the **official documentation always wins**.

---

## 4. Technical overview

### 4.1 Architecture

The app is a simple single-page application (SPA) using:

- **HTML** – `index.html` defines the UI structure.
- **CSS** – `styles.css` provides layout and styling.
- **JavaScript**:
  - `faults-data.js` – global constant `FAULT_DATA` containing all fault objects.
  - `app.js` – handles:
    - UI state
    - Filtering
    - Rendering
    - Clipboard functionality

No frameworks, no build tools, no bundlers.

### 4.2 Files

- `index.html`
  - Basic HTML shell.
  - Filter controls:
    - `#manufacturerSelect`
    - `#subsystemSelect`
    - `#symptomSelect`
    - `#searchInput`
  - Result area:
    - `#faultResults`
  - Scripts loaded in correct order:
    - `<script src="faults-data.js"></script>`
    - `<script src="app.js"></script>`

- `styles.css`
  - Core layout (header, filter panel, main content).
  - Responsive design for mobile and desktop.
  - Styling for:
    - Safety notes
    - Badges (manufacturer, subsystem, critical)
    - Sections and headings
    - Copy button and fallback textarea

- `faults-data.js`
  - Defines:
    ```js
    // BMU fault patterns dataset for BMU Fault Finder app
    const FAULT_DATA = [
      // ... fault objects ...
    ];
    ```
  - No other code.
  - Dataset is treated as read-only by `app.js`.

- `app.js`
  - Maintains app state:
    - Selected manufacturer
    - Selected subsystem
    - Search text
    - Selected symptom / fault
  - Derives filtered fault lists from `FAULT_DATA`.
  - Updates dropdowns when filters change.
  - Renders fault details into `#faultResults`.
  - Implements:
    - Critical fault badge logic.
    - Clipboard helper with graceful fallback.

- `README.md` (this file)
  - Documentation for developers, maintainers, and internal stakeholders.

---

## 5. Getting started

### 5.1 Requirements

- Any modern web browser (Chrome, Edge, Firefox, Safari, etc.).
- No backend, no Node.js, no package managers needed.

### 5.2 Running locally

1. Download or clone the project folder containing:
   - `index.html`
   - `styles.css`
   - `faults-data.js`
   - `app.js`
   - `README.md`
2. Open `index.html` in your browser (double-click or drag into browser window).
3. You should see:
   - “BMU Fault Finder” title.
   - Safety note.
   - Filter controls.
   - Fault summary/result area.

### 5.3 Deploying to Netlify (or similar static host)

1. Zip the project folder containing the five files.
2. Go to Netlify (or your static hosting provider).
3. Choose “Deploy site” (drag-and-drop).
4. Drop the zip / folder.
5. Wait for deployment to finish.
6. Open the generated URL – your app should work immediately.

No additional configuration is required.

---

## 6. Using the app

1. **Select manufacturer**
   - Use the “Manufacturer” dropdown.
   - “All manufacturers” shows everything.
   - Selecting “CoxGomyl”, “Manntech”, or “Tractel” shows:
     - Faults for that manufacturer.
     - Plus any `generic-BMU` faults that apply to all BMUs.

2. **Select subsystem**
   - After manufacturer selection, the “Subsystem” dropdown lists only subsystems found in the filtered faults.
   - Choose “All subsystems” to keep everything visible for that manufacturer.

3. **Select symptom**
   - The “Symptom” dropdown lists `symptom_title` values for the current manufacturer + subsystem.
   - Selecting a symptom displays that fault’s full details in the card below.

4. **Use search**
   - The free-text search box filters within the current manufacturer + subsystem set.
   - Matches are found in:
     - Symptom title
     - Symptom details
     - Root causes
     - Diagnostic checks
     - Parts commonly involved

5. **Read the fault card**
   - Review:
     - Symptom details
     - Typical root causes
     - Diagnostic checks (step-by-step)
     - Safety hazards and warnings (highlighted)
     - Recommended corrective actions
     - Parts commonly involved
     - Any manufacturer references / sources
   - Pay particular attention to **safety** and **escalation** notes.

6. **Critical badge**
   - Some faults are flagged as critical (e.g. brake slip, overspeed).
   - These show a red “CRITICAL – STOP AND ESCALATE” badge near the title or safety area.
   - Treat these as high-risk conditions and follow escalation paths.

7. **Copy troubleshooting steps**
   - Click “Copy troubleshooting steps”.
   - If supported:
     - The browser copies a plain-text summary to your clipboard.
   - If not supported:
     - A textarea will appear with the text pre-selected so you can copy manually.
   - Paste into:
     - Job notes
     - Email
     - WhatsApp / Teams message
     - Internal reporting tools

---

## 7. Data model

Each entry in `FAULT_DATA` is a fault pattern object. A typical example:

```js
{
  "manufacturer": "generic-BMU",
  "model_or_range": "Various roof-mounted BMUs",
  "subsystem": "Power supply",
  "symptom_title": "BMU completely unresponsive (no power)",
  "symptom_details": [
    "All functions and indicator lights are off, even when the main switch is on.",
    "No movement or sound from motors when attempting any operation."
  ],
  "typical_root_causes": [
    "Main power supply is off or not reaching the BMU (e.g. building isolator off, blown fuse, or tripped circuit breaker).",
    "Emergency stop circuit engaged (any E-stop pressed will cut power to controls).",
    "Phase failure or off-sequence supply triggering phase protection relay."
  ],
  "diagnostic_checks_step_by_step": [
    "1) Isolate and secure the BMU as per site SSOW before opening electrical panels.",
    "2) Verify the building supply at the main isolator: all phases present and correct voltage.",
    "3) Check all emergency stop devices are reset and E-stop circuit is healthy.",
    "4) Inspect incoming fuses, breakers, and internal control transformer protection."
  ],
  "safety_hazards_and_warnings": [
    "Risk of electric shock when working inside panels – follow lock-off and test-before-touch procedures.",
    "Do not bypass safety circuits or protection relays to 'get it working'."
  ],
  "recommended_corrective_actions": [
    "Restore correct supply and reset any tripped protection once the root cause is identified.",
    "Log the incident and cause in the maintenance system.",
    "If protection devices trip repeatedly, investigate upstream causes rather than simply resetting."
  ],
  "parts_commonly_involved": [
    "Main isolator",
    "Supply fuses / MCBs",
    "Control transformer",
    "Phase protection relay"
  ],
  "manufacturer_references_or_sources": [
    "Manufacturer electrical diagrams and O&M manual for specific BMU.",
    "Site SSOW and building LV distribution drawings."
  ],
  "notes_for_app": "Generic pattern applicable to most electric BMUs."
}

_____

7.1 Field meanings
	•	manufacturer
Manufacturer name or "generic-BMU".
	•	model_or_range
Model family, range, or scope of applicability.
	•	subsystem
Logical subsystem (power supply, hoist, luffing, etc.).
	•	symptom_title
Short, human-friendly description of the fault as an engineer would see it.
	•	symptom_details
Expanded description and context (array of strings).
	•	typical_root_causes
Likely underlying causes (array of strings).
	•	diagnostic_checks_step_by_step
Ordered list of checks in the recommended sequence (array of strings).
	•	safety_hazards_and_warnings
Specific hazards to consider for this fault (array of strings).
	•	recommended_corrective_actions
Actions to resolve or mitigate the fault safely (array of strings).
	•	parts_commonly_involved
Typical components that might be faulty or adjusted (array of strings).
	•	manufacturer_references_or_sources
Pointers to documents, sections, or external sources.
	•	notes_for_app (optional)
Implementation notes, edge cases, or UI hints for this entry.

⸻

8. Extending the app

8.1 Adding new faults
	1.	Open faults-data.js.
	2.	Add a new object to the FAULT_DATA array.
	3.	Follow the same structure as existing entries.
	4.	Ensure all strings and arrays are valid JavaScript.
	5.	Save and refresh the browser.

8.2 Adding new manufacturers or subsystems
	•	Manufacturers
	•	Add new faults with "manufacturer": "NewManufacturerName".
	•	The UI derives manufacturer options from the dataset, so the new manufacturer will appear automatically.
	•	generic-BMU will always be included whenever a specific manufacturer is selected.
	•	Subsystems
	•	Add new faults with "subsystem": "New subsystem name".
	•	The subsystem dropdown is built dynamically from the filtered dataset:
	•	No additional code changes required.

8.3 Critical fault patterns

In app.js, there is a small list or rule that flags certain symptom_title patterns as critical.

To adjust:
	1.	Open app.js.
	2.	Locate the critical fault detection section.
	3.	Add or modify the keywords/conditions (e.g. “slides down”, “overspeed”, “brake slipping”).
	4.	Save and refresh.

⸻

9. Roadmap / future directions

This prototype is intentionally simple and offline. Future enhancements could include:
	•	Integration with internal maintenance data
	•	Import breakdown histories.
	•	Track which faults and checks are used most often.
	•	Suggest likely causes based on historical stats.
	•	Job pack and reporting integration
	•	Generate job notes or PDFs directly from copied steps.
	•	Link to internal service reporting systems.
	•	User accounts and telemetry
	•	Track usage per region / engineer.
	•	Identify training gaps.
	•	Deeper safety integration
	•	Automatic links to relevant sections of:
	•	Site SSOW.
	•	Rescue plans.
	•	Company safety rules.
	•	AI-assisted guidance
	•	Use internal, approved AI models (on internal data) to:
	•	Suggest next checks.
	•	Generate draft reports from fault selections and notes.
	•	Provide training explanations.

⸻

10. License / internal use

This prototype is intended primarily for internal demonstration and engineering use.
	•	If used within a company:
	•	Ensure it is reviewed and approved by the relevant technical authority.
	•	Ensure any internal data added respects confidentiality and data protection rules.
	•	The exact licence can be defined by the owning organisation (company open-source, internal-only, etc.).

⸻

If you are extending or reviewing this app, treat it as a starting point: the goal is to evolve it into a robust, officially endorsed diagnostic and training platform for BMU engineers.

