// faults-data.js
// BMU fault patterns dataset for BMU Fault Finder app
const FAULT_DATA = [
  {
    "id": "coxgomyl_hoistdrive_001",
    "manufacturer": "CoxGomyl",
    "sub_system": "Hoist Drive",
    "risk_level": "critical",
    "estimated_downtime_hours": "4–10",
    "required_competence": "Competent BMU engineer (hoist specialist) – OEM escalation if brake coil or motor requires rewind",
    "quick_triage_questions": [
      "Did the platform descend unexpectedly or fail to hold when stopped?",
      "Is the motor overload tripping within seconds even on light load?",
      "Is there any sign of brake drag (burnt smell, high current at idle)?"
    ],
    "tools_required": [
      "Clamp meter for three-phase current checks",
      "Multimeter for voltage and resistance",
      "Feeler gauges for brake air-gap",
      "IR thermometer for thermal profiling"
    ],
    "test_procedures_after_fix": [
      "No-load hoist run observing current symmetry",
      "Full-load lift with mid-travel stop to confirm brake hold",
      "Thermal soak test (15–20 minutes cycling) with temperature check"
    ],
    "escalation_criteria": [
      "Any sign of uncontrolled descent or brake failing to hold the platform",
      "Persistent phase imbalance from building supply that site cannot rectify",
      "Motor insulation resistance below OEM minimum after cooldown"
    ],
    "symptom_title": "Hoist motor overheats and trips frequently",
    "symptom_details": [
      "Hoist motor or winch shuts off during lifting, often after a short run time",
      "Engineer finds the motor thermal overload relay tripped and the motor casing hot to touch",
      "No mechanical jamming evident, but motor seems to lack power before tripping"
    ],
    "technical_root_causes": [
      "Phase imbalance or loss causing excess current draw on one or two phases [oai_citation:17‡gesrepair.com](https://gesrepair.com/6-signs-of-voltage-imbalance-in-three-phase-motors#:~:text=A%20motor%20that%20shuts%20down,imbalance%20is%20a%20strong%20suspect)",
      "Worn or tight motor bearings creating abnormal friction (overloads motor)",
      "Brake not fully releasing (dragging) due to slight brake coil voltage drop or mis-set gap, leading to continuous load on motor"
    ],
    "diagnostic_steps": [
      "Step 1: **Isolate power** (Lock-Out/Tag-Out) and allow motor to cool. Inspect the motor wiring and supply – perform a three-phase voltage check to detect any phase loss or imbalance >2% between phases [oai_citation:18‡gesrepair.com](https://gesrepair.com/6-signs-of-voltage-imbalance-in-three-phase-motors#:~:text=1,hotter%20than%20usual)",
      "Step 2: Verify the motor’s current draw on each phase (use clamp meter during a test run) – uneven or high current confirms imbalance or overload. Investigate upstream for blown fuses, contactor issues, or supply voltage drop",
      "Step 3: With power still isolated, manually rotate the hoist drum or motor shaft to feel for binding. Remove the brake and check motor bearings for roughness or seizure (a seized bearing will also leave burnt grease or metal shavings)",
      "Step 4: Check the hoist brake coil and armature clearance. Measure coil resistance and compare to spec. An out-of-adjustment brake (gap too large) can slip or drag – adjust per manual if outside tolerance",
      "Step 5: Inspect the motor thermal overload relay settings and operation. Ensure it’s correctly set per motor FLA and test that it hasn’t become overly sensitive or faulty"
    ],
    "safety_hazards_and_warnings": [
      "⚠️ **Electrical Hazard:** Ensure power is isolated and discharged before opening any motor or control panels. Use PPE – insulated gloves, safety glasses – when measuring live circuits",
      "⚠️ **Burn Hazard:** Motor surfaces can be extremely hot after tripping on thermal overload. Allow sufficient cooling time to prevent burns",
      "⚠️ **Suspended Load Risk:** Frequent overload trips can indicate the motor is overstressed – do **not** bypass or repeatedly reset thermal trips [oai_citation:19‡gesrepair.com](https://gesrepair.com/6-signs-of-voltage-imbalance-in-three-phase-motors#:~:text=A%20motor%20that%20shuts%20down,imbalance%20is%20a%20strong%20suspect). Doing so risks motor failure while the platform is elevated. Under LOLER, remove the BMU from service until resolved"
    ],
    "remedial_actions": [
      "Balance the three-phase supply: repair any blown fuses, loose connections or rectify the site power quality issue causing imbalance. Install a phase monitoring relay if not already present to prevent operation under phase loss",
      "Replace or service motor bearings if inspection shows damage (excessive play, noise or rough spots). Re-lubricate or rebuild the motor as needed",
      "Adjust or repair the hoist brake: set the correct air-gap and replace a weak brake coil if voltage is correct but it still drags. After adjustment, perform a no-load test to ensure the brake fully releases",
      "Reset the motor overload to the correct setting (matching motor nameplate amps). If the overload relay itself is faulty or nuisance-tripping, replace it. Then test-run the BMU under load while monitoring current to confirm normal operation"
    ],
    "compliance_standard": "LOLER 1998 (Reg.9 – equipment not to be used in unsafe condition); EN 1808 (motor and brake must hold 1.5× load without overheating)",
    "confidence": "High"
  },
  {
    "id": "manntech_hoistdrive_002",
    "manufacturer": "Manntech",
    "sub_system": "Hoist Drive",
    "risk_level": "critical",
    "estimated_downtime_hours": "2–6",
    "required_competence": "Competent BMU engineer – rope access or OEM support if brake swap is complex",
    "quick_triage_questions": [
      "Does the brake audibly click and release when lift is commanded?",
      "Does lifting improve when using slow/maintenance speed?",
      "Is supply voltage sagging more than 10% when lifting near SWL?"
    ],
    "tools_required": [
      "Multimeter for coil voltage and rectifier checks",
      "Clamp meter for current during lift",
      "Basic hand tools for brake cover removal",
      "Dial gauge or feeler gauge for brake clearance"
    ],
    "test_procedures_after_fix": [
      "Static brake hold test at mid-height",
      "Gradual load test up to SWL monitoring current",
      "Emergency stop / overspeed brake confirmation"
    ],
    "escalation_criteria": [
      "Brake coil is open circuit or mechanically seized",
      "Secondary brake triggers repeatedly during test lifts",
      "Motor cannot reach rated torque after electrical fixes"
    ],
    "symptom_title": "Hoist cannot lift full load or slips downward slightly",
    "symptom_details": [
      "BMU hoisting is sluggish or stalls when raising a platform near its SWL (Safe Working Load)",
      "A burning smell or humming noise comes from the hoist area during the attempt, and the lift may slip or drift downward momentarily after stopping",
      "Operator notes that lowering works fine, but lifting under heavy load is problematic"
    ],
    "technical_root_causes": [
      "Hoist **electromagnetic brake not fully releasing** due to coil wear or low coil voltage, causing a constant drag (brake hysteresis) and loss of lifting torque [oai_citation:20‡scribd.com](https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00#:~:text=%E2%80%A2%20Motor%20electromagnetic%20brake%20fails)",
      "Partial phase loss or severe voltage drop under load – the motor runs but with greatly reduced power, unable to sustain full load",
      "Excessive mechanical friction in the hoist gear train (e.g. gearbox in poor condition or improperly lubricated), increasing load on the motor"
    ],
    "diagnostic_steps": [
      "Step 1: **Safety first** – secure the platform at a safe height or on supports. Simulate the fault with a controlled test lift (with a load, if safe to do so) while monitoring motor current and listening for brake release click",
      "Step 2: Measure the brake coil voltage when lifting is commanded. It should reach the specified DC voltage (e.g. 90 VDC for a 230 VAC coil via rectifier) – if it’s low or drops under load, check the brake rectifier or supply wiring",
      "Step 3: Inspect the brake mechanism. With power off and brake manually released, verify the clearance between brake disc and armature. A gap set too small can cause drag; too large can prevent full release [oai_citation:21‡scribd.com](https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00#:~:text=%E2%80%A2%20Motor%20electromagnetic%20brake%20fails). Adjust to manufacturer spec and check the condition of brake pads",
      "Step 4: Check for signs of brake coil fatigue – heat discoloration or a burnt smell from the coil. Use a multimeter to check coil resistance against specs (a high resistance or open circuit indicates a failing coil that may only partially actuate)",
      "Step 5: If electrical checks pass, examine the hoist motor and gearbox. Test the motor on no-load: does it speed up freely or still struggle? Drain a little gearbox oil (if accessible) and look for metal particles, indicating gear or bearing wear. Also ensure the gearbox isn’t overfilled (which can cause drag)"
    ],
    "safety_hazards_and_warnings": [
      "⚠️ **Platform Drop Hazard:** A slipping or partially holding brake can allow the platform to **fall or drift** if the motor cannot hold it. **Do not** work under a suspended platform and ensure secondary fall arrest devices (secondary brake or safety lines) are functional before investigating [oai_citation:22‡scribd.com](https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00#:~:text=%E2%80%A2%20Motor%20electromagnetic%20brake%20fails)",
      "⚠️ **Electrical Isolation:** Before adjusting the brake or opening the motor, isolate power. The brake may suddenly engage or disengage during work – keep hands clear of moving parts and use the manual brake release only under controlled conditions",
      "⚠️ **Overload Risk:** Repeated attempts to lift when the hoist is stalling can overstress the motor and rope. Cease operation until the issue is fixed. Under BS 6037-1, any **failure to lift rated load** is a fault requiring inspection"
    ],
    "remedial_actions": [
      "Replace the brake coil or entire brake assembly if it’s not releasing properly. A new coil will restore proper magnetic force. After replacement, perform functional tests with light then full load to ensure the platform holds and lifts with no slip",
      "Repair wiring or power supply to the brake – e.g. tighten loose connections or replace a faulty rectifier so the coil gets full voltage. Ensure the brake release circuit gets power only when intended (no residual voltage when it should be off)",
      "Service the gearbox and motor: change the gearbox oil if contaminated, and address any mechanical misalignment. If significant metal particles are present or the gearbox is excessively worn, a gearbox rebuild or replacement is required",
      "If a phase loss was detected, trace it to the source (burnt contactor pole, faulty cable or connector) and fix it. Afterwards, implement a phase monitoring unit to prevent the hoist running on reduced phases",
      "Test the hoist with a known load (e.g. calibrated weight) to verify it now lifts smoothly at rated capacity. Also test the brake by stopping mid-hoist and ensuring no measurable descent occurs"
    ],
    "compliance_standard": "EN 1808 (hoist brake must hold 125% of load; requires secondary brake for slip protection); LOLER 1998 (prevent use if braking system is defective)",
    "confidence": "High"
  },
  {
    "id": "generic_hoistdrive_003",
    "manufacturer": "Generic",
    "sub_system": "Hoist Drive",
    "risk_level": "high",
    "estimated_downtime_hours": ">8",
    "required_competence": "Senior BMU engineer with gearbox rebuild experience",
    "quick_triage_questions": [
      "Is the noise localized to gearbox or motor bearings?",
      "Is gearbox oil level low, burnt, or metallic?",
      "Did vibration or current spike right before trip-out?"
    ],
    "tools_required": [
      "Mechanic’s stethoscope",
      "Oil sampling kit or clean container",
      "Torque wrench for reassembly",
      "Dial indicator for shaft play"
    ],
    "test_procedures_after_fix": [
      "Slow-speed functional run after rebuild",
      "Load test with vibration/current trending",
      "Temperature check after 30 minutes of cycling"
    ],
    "escalation_criteria": [
      "Gear teeth found chipped or excessive end-float present",
      "Motor shaft play exceeds OEM tolerance",
      "Safety brake activates due to seizure during testing"
    ],
    "symptom_title": "Abnormal grinding noise or seizure in hoist mechanism",
    "symptom_details": [
      "Loud grinding, knocking, or whining noises emanate from the hoist/gearbox area during BMU movement",
      "In severe cases, the hoist motor suddenly stalls or the platform jerks, and the motor draws excessive current (possible blown fuse or drive trip)",
      "Inspection of the gearbox oil (if accessible) shows metallic flakes or an unusual gray slurry, indicative of wear"
    ],
    "technical_root_causes": [
      "**Gearbox wear or damage** – worn gear teeth or bearings in the hoist gearbox causing misalignment and noise. Advanced wear can lead to gear tooth breakage, locking the gearbox",
      "**Hoist motor bearing failure** – a main motor bearing seizing up or heavily spalling. This creates grinding sounds and can eventually jam the rotor (often accompanied by motor overheating)",
      "Insufficient lubrication or contaminated grease/oil in the hoist drive – leads to accelerated wear of gears and bearings (a dry gearbox can overheat and fail catastrophically)"
    ],
    "diagnostic_steps": [
      "Step 1: Run the BMU in maintenance mode at slow speed (if possible) to localize the noise. Use a mechanic’s stethoscope or listening rod on the motor vs. gearbox housing to identify the source (gear mesh noise vs. bearing noise)",
      "Step 2: Check the hoist gearbox oil level and condition. **Isolate power**, then open the fill or drain plug carefully. Look for metal shavings or a sparkly sheen in the oil – signs of internal component wear. A burned smell indicates overheating. Record if oil level was low, as that can indicate a leak or long-term neglect",
      "Step 3: Inspect the motor bearings: with power off, rotate the motor shaft slowly by hand. Rough rotation, binding at certain angles, or free play in the shaft suggests bearing issues. Also look at the motor fan and coupling – any wobble or scraping marks?",
      "Step 4: If safe, perform a hoist lift test while monitoring motor current draw and vibration. A dramatically increasing current or vibration before trip-out means a mechanical resistance is rising with speed/load. Stop immediately if values go beyond normal range",
      "Step 5: Optionally, take an oil sample for analysis (for large gearboxes): high levels of metal particles will confirm severe internal wear. Also examine maintenance records – if the gearbox has never been serviced in many years, internal parts may be at end-of-life"
    ],
    "safety_hazards_and_warnings": [
      "⚠️ **Imminent Failure Warning:** Grinding or clunking sounds often precede a hoist failure. There is a risk of **sudden seizure** which could halt the platform unexpectedly or shock-load the wire ropes. **Do not** continue normal operation if such noises are detected – schedule an immediate inspection",
      "⚠️ **Suspended Load Precaution:** If a hoist component seizes or fails while the cradle is in use, the platform could become stuck or, in worst case, free-fall if ropes go slack (though safety brakes should catch it). Ensure the emergency descent/secondary brake is functional and workers are evacuated from the platform at the first sign of severe mechanical noise",
      "⚠️ **Lockout for Inspection:** Before opening any gearbox or removing covers, lock out and tag out the BMU power. Moving parts inside can cause serious injury – the BMU must remain shut down until the issue is resolved"
    ],
    "remedial_actions": [
      "Perform a full overhaul of the hoist gearbox. This involves draining the oil, disassembling the gearbox and replacing worn gears and bearings. Any gear with chipped or spalled teeth must be replaced. Reassemble with new seals and refill with the correct gear oil. (Send to manufacturer service center if required – many BMU gearboxes are specialized)",
      "Replace the hoist motor bearings (or the entire motor if more practical). After bearing replacement, run the motor unloaded to ensure noise is gone and it spins freely without excessive current draw",
      "Improve lubrication: if analysis shows the oil was degraded or low, implement a more frequent lubrication service interval per BS 6037-1 guidelines. Ensure gearbox breathers are functioning to avoid pressure build-up and leaks",
      "After repairs, test the hoist without load, then with a test load, listening closely for any remaining abnormal sounds. Monitor temperatures with an IR thermometer to ensure the new components run cool",
      "Going forward, schedule periodic oil sampling or vibration analysis on the hoist drive as part of preventive maintenance – early detection of wear debris or rising vibration can avert future sudden failures"
    ],
    "compliance_standard": "LOLER 1998 (Reg. 10 – remedial actions after defect discovery); BS 6037-1:2017 (maintenance of drive systems, recommended inspections of gears/bearings)",
    "confidence": "Medium"
  },
  {
    "id": "tractel_hoistdrive_004",
    "manufacturer": "Tractel",
    "sub_system": "Hoist Drive",
    "risk_level": "critical",
    "estimated_downtime_hours": "1–4",
    "required_competence": "Competent BMU engineer – OEM consultation for traction liner replacement if unsure",
    "quick_triage_questions": [
      "Is the rope diameter within the hoist’s specified tolerance?",
      "Do traction sheave/rollers look glazed or contaminated?",
      "Is the tension spring/weight moving freely?"
    ],
    "tools_required": [
      "Calipers for rope diameter",
      "Cleaning kit (solvent, lint-free cloths)",
      "Spring scale or tension gauge if specified",
      "Basic hand tools for liner access"
    ],
    "test_procedures_after_fix": [
      "Light-load traction test at low height",
      "Full-load hoist run verifying no slip and correct rope tracking",
      "Blocstop / secondary brake functional check"
    ],
    "escalation_criteria": [
      "Any recurring rope slip after liner or rope replacement",
      "Visible rope damage (flattening, glazing, broken wires)",
      "No available tension adjustment range to achieve grip"
    ],
    "symptom_title": "Traction hoist motor runs but rope slips (no lift)",
    "symptom_details": [
      "Hoist motor can be heard running, but the suspended platform does not rise or only jerks slightly – the hoist drum/sheave is turning without hauling the rope",
      "Operators may notice the wire rope oscillating or feeding erratically instead of moving smoothly through the hoist",
      "In some cases, the BMU’s secondary brake (Blocstop) trips due to the rope speed discrepancy, stopping the hoist"
    ],
    "technical_root_causes": [
      "Incorrect or worn **wire rope diameter** leading to inadequate friction in a traction hoist – an undersized rope slips through the drive without enough grip [oai_citation:23‡skytracusa.com](https://skytracusa.com/wp-content/uploads/2020/07/TC_XA_Instruction_Manual.pdf#:~:text=Correct%20wire%20rope%20diameter%20within,BSO%20secondary%20brake%20to%20malfunction)",
      "Glazed or worn traction sheave and pressure roller liners – over time, the traction surfaces polish or wear down, reducing the friction coefficient",
      "Loss of tensioning force on the rope – e.g. weakened spring in the tension roller or improper counterweight tension (for drum hoists), resulting in insufficient normal force on the rope"
    ],
    "diagnostic_steps": [
      "Step 1: **Cease operation immediately** to prevent rope damage [oai_citation:24‡amscaf.com](https://amscaf.com/wp-content/uploads/2017/07/XE_Instruction_Manual.pdf#:~:text=d,CONTACT%20the%20SUPPLIER). Visually inspect the hoist rope where it contacts the traction sheave. Check if the rope diameter matches the specification for the hoist (measure it with calipers). Compare to the nominal diameter and allowable range – an undersized rope (even due to core compression or wear) can cause slippage [oai_citation:25‡skytracusa.com](https://skytracusa.com/wp-content/uploads/2020/07/TC_XA_Instruction_Manual.pdf#:~:text=Correct%20wire%20rope%20diameter%20within,BSO%20secondary%20brake%20to%20malfunction)",
      "Step 2: Examine the traction sheave (and the counter-pressure roller or shoes). Look for smooth, worn grooves or contamination (oil/grease) on the contact surface. Also check any rope pressure springs or weights for proper tension per manual",
      "Step 3: Inspect the rope for shiny burnish marks or flattening – signs that it has been slipping under load. Also verify rope type: if a wrong construction or a dry unlubricated rope is installed, friction properties can differ",
      "Step 4: Test the Blocstop or secondary brake separately (per manufacturer procedure) to ensure it’s functional. A properly working secondary brake should have arrested the platform if significant slippage occurred. Its frequent activation may indicate chronic slippage issues",
      "Step 5: If available, review the hoist’s fault log. Many modern BMUs with traction hoists have sensors for rope speed mismatch. Look for any **overspeed or slip error codes** correlating with the incident"
    ],
    "safety_hazards_and_warnings": [
      "⚠️ **Immediate Danger:** Rope slippage means the platform is not being held by the primary hoist drive. The only thing preventing a fall could be the secondary safety brake. **Do not** continue operation if the hoist is running without lifting – the rope could suddenly pay out or the safety brake could engage harshly [oai_citation:26‡amscaf.com](https://amscaf.com/wp-content/uploads/2017/07/XE_Instruction_Manual.pdf#:~:text=d,CONTACT%20the%20SUPPLIER)",
      "⚠️ **Rope Damage:** Slippage generates heat and can abrade the rope, potentially leading to rope failure. Treat any significant slip event as a rope damage incident – the rope may need replacement even if it looks intact",
      "⚠️ **Testing Caution:** When re-testing after fixes, do so at low heights with no personnel on the platform. Ensure the area below is clear. If slip persists, stop and do not allow further automatic attempts"
    ],
    "remedial_actions": [
      "Verify and replace the wire rope if it’s not within the proper diameter tolerance. For Tractel Tirak hoists, even a few millimeters off can cause slip. Install a new rope of correct spec (and never use an old, kinked rope)",
      "Refurbish or replace the traction sheave and pressure roller liners. If they are worn smooth or out-of-round, new liners (or an entire new sheave) will restore friction. Clean the rope path surfaces of any oil/grease thoroughly",
      "Adjust or repair the rope tension system. For spring-loaded systems, replace any fatigued springs; for weight systems, ensure the weight is present and moves freely. The tension should meet manufacturer’s values to maintain friction",
      "After fixes, perform a load test starting with a light load to verify no slip, then gradually increase to full load while monitoring. The rope should track without hesitation. Confirm that the Blocstop doesn’t trigger, and then reset any slip alarm sensors if applicable",
      "Implement a periodic check: include rope diameter verification and traction surface inspection in routine maintenance. Slight wear can be detected early, and rope can be retired per ISO 4309 before it becomes undersized enough to slip"
    ],
    "compliance_standard": "EN 1808 (Sections on powered hoists – requires friction hoists have secondary brake; rope integrity per ISO 4309 must be ensured); ISO 4309 for rope selection and retirement criteria",
    "confidence": "High"
  }
];

const PRE_USE_CHECKLISTS = [
  {
    id: "generic_preuse",
    title: "Generic BMU pre-use checklist",
    variant: "Generic",
    mapped_subsystems: ["ropes", "brakes", "travel"],
    steps: [
      "Confirm permit-to-work / SSOW in place and weather within limits",
      "Visual check of ropes (kinks, birdcaging, crushed strands)",
      "Test emergency stop, limit switches, and safety circuit reset",
      "Verify brakes release/engage audibly in slow speed before lift",
      "Confirm rescue plan on-site and radio check completed"
    ]
  },
  {
    id: "cox_preuse",
    title: "CoxGomyl pre-use essentials",
    variant: "CoxGomyl",
    mapped_subsystems: ["hoist", "controls", "emergency lowering"],
    steps: [
      "Check trolleys/rails for clear travel path and end-stop condition",
      "Inspect Blocstop / secondary brake indicator for readiness",
      "Run cradle at low speed full travel, verifying encoder/limit response",
      "Test emergency lowering or manual descent per O&M (no load)"
    ]
  },
  {
    id: "tractel_preuse",
    title: "Tractel traction hoist pre-use",
    variant: "Tractel",
    mapped_subsystems: ["ropes", "traction", "safety brakes"],
    steps: [
      "Check rope diameter stamp matches hoist spec and inspect for polishing",
      "Verify pressure rollers/liners are free from oil and properly seated",
      "Confirm Blocstop test completed and reset procedure understood",
      "Function-test upper/lower limits with no personnel in cradle"
    ]
  }
];

const RESCUE_PROMPTS = [
  {
    id: "rescue_secondary_escape",
    title: "Rescue / emergency prompts",
    prompts: [
      "Does the RRE plan provide a secondary escape route if power fails?",
      "Who holds the site key/permission for roof access during rescue?",
      "Is there a certified anchor for hauling/rescue lines near the BMU?",
      "Is a manual lowering device or handwheel available and tested this week?"
    ],
    escalation: "If any answer is unknown or negative, stop and escalate to the site manager and OEM before use."
  }
];

const SITE_NOTE_PATTERNS = [
  {
    id: "site_shard",
    site: "Shard-inspired high-rise",
    hazards: [
      "Severe wind tunnelling at corner drops causing sway",
      "Limited tie-back points at intermediate levels",
      "Night working restrictions for facade lighting"
    ],
    mitigations: [
      "Use wind anemometer and stop work above agreed threshold (e.g. 12 m/s)",
      "Plan mid-landing rests; use temporary guy lines where permitted",
      "Coordinate timings with building management to avoid lighting schedules"
    ]
  },
  {
    id: "site_nova",
    site: "Nova-style mixed use",
    hazards: [
      "Public thoroughfares directly under BMU path",
      "Multiple BMUs sharing power/controls",
      "Glazed facades sensitive to chemical cleaners"
    ],
    mitigations: [
      "Set up exclusion zones and banksman before deployment",
      "Lock-out unused BMUs during work to avoid cross-activation",
      "Use approved neutral pH cleaners and rinse controls"
    ]
  }
];

const TRAINING_CARDS = [
  {
    id: "training_brakes",
    title: "BMU brakes 101",
    summary: "Difference between service brake (motor-mounted) and safety/Blocstop; how air-gap and coil voltage affect slip.",
    links: [
      "See fault patterns: traction slip, brake drag",
      "Practice: measure brake gap with feeler gauge and compare to spec"
    ]
  },
  {
    id: "training_governors",
    title: "Overspeed governors",
    summary: "Mechanical vs electronic overspeed detection, trip speeds, and reset protocols.",
    links: [
      "Checklist: confirm governor reset tool on site",
      "Drill: simulate overspeed trip in maintenance mode"
    ]
  },
  {
    id: "training_plc_relay",
    title: "PLC vs relay logic",
    summary: "How PLC-controlled BMUs interlock safety chain versus classic relay ladders; where to probe safely.",
    links: [
      "Identify: locate safety relays vs PLC safety modules in panel",
      "Exercise: trace safety circuit on latest BMU drawing"
    ]
  }
];
