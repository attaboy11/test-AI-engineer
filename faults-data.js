// faults-data.js
// BMU fault patterns dataset for BMU Fault Finder app
const FAULT_DATA = [
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "All standard BMUs (track or davit mounted)",
    "subsystem": "Power supply",
    "symptom_title": "BMU completely unresponsive (no power to any function)",
    "symptom_details": [
      "No control power, no lights or movement on BMU controls",
      "Emergency-stop or other safety indicators may be lit",
      "No noise or activity from motors or relays when attempting to operate"
    ],
    "typical_root_causes": [
      "Main power supply off or tripped (main isolator open, circuit breaker or RCD tripped):contentReference[oaicite:15]{index=15}",
      "Phase failure or incorrect phase rotation (for 3-phase systems):contentReference[oaicite:16]{index=16}",
      "Blown fuse or transformer fault in control circuit",
      "Safety circuit engaged (emergency stop activated or safety relay latched open)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Isolate and secure BMU as per manufacturer and site SSOW (Safe System of Work).",
      "2) Verify incoming power supply: check that main disconnect is closed and supply voltage is present on all phases:contentReference[oaicite:17]{index=17}.",
      "3) Check RCD/leakage breaker and main fuses: if tripped, inspect for ground faults or short circuits before resetting.",
      "4) Test phase sequence (if applicable) and phase presence; ensure any phase monitoring relay is energized.",
      "5) Inspect control circuit: ensure emergency stop buttons are reset and no safety relay fault indicators.",
      "6) Once power issues are addressed, re-energize and observe if control power and indicator lights come on normally."
    ],
    "safety_hazards_and_warnings": [
      "Electrical shock hazard: all power checks should be done by a qualified electrician with proper PPE.",
      "Crush hazard: do not restore power until no personnel are in dangerous positions and BMU is clear of obstructions, as the unit may move when power is restored.",
      "If an RCD (earth-leakage) repeatedly trips, do not bypass it – stop and have a specialist investigate for insulation faults."
    ],
    "recommended_corrective_actions": [
      "Restore main power or replace blown fuses as needed.",
      "Reset any tripped breakers or leakage (RCD) devices after verifying circuit integrity.",
      "If a phase was missing or rotated, correct the supply wiring or engage site electrical contractor.",
      "After power is restored, perform functional tests on all motions; if safety circuit remains open, see E-stop/safety circuit fault pattern."
    ],
    "parts_commonly_involved": [
      "Main power isolator switch",
      "Main fuses or circuit breakers",
      "Residual Current Device (leakage breaker)",
      "Phase monitor relay",
      "Emergency stop switches",
      "Control transformer"
    ],
    "manufacturer_references": [
      "See BMU manufacturer O&M manual - electrical system description and troubleshooting section for power supply faults",
      "EN 60204-1 (Electrical safety for machinery) guidelines for supply and protection"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "https://www.hoistsdirect.com/hoist-troubleshooting"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom could be listed as 'No power / Dead unit'.",
      "Combine cases of total power loss under this pattern (including main supply off, phase loss, e-stop active).",
      "Engineers often first suspect power issues when absolutely nothing operates."
    ]
  },
  {
    "manufacturer": "CoxGomyl",
    "model_or_range": "5000-series roof car BMUs (track-mounted)",
    "subsystem": "Traversing (roof car travel)",
    "symptom_title": "Roof car will not traverse along track",
    "symptom_details": [
      "BMU roof carriage does not move in the forward/reverse (traversing) direction",
      "Other functions (jib, hoist) may still work normally",
      "A 'Unit Fault' or 'Cradle Fault' indicator may be lit on control panel (if equipped):contentReference[oaicite:18]{index=18}"
    ],
    "typical_root_causes": [
      "Jib not fully raised to parking position, so travel interlock remains active (prevents movement):contentReference[oaicite:19]{index=19}",
      "Cradle connectivity fault: cradle not correctly attached or cradle safety circuit not made (triggering cradle fault lockout):contentReference[oaicite:20]{index=20}",
      "Cradle emergency stop or another cradle-mounted safety device is tripped, inhibiting roof car travel",
      "Cable reel limit reached: the power cable is near its end, triggering a limit that allows travel only in the reverse direction:contentReference[oaicite:21]{index=21}"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Ensure BMU is safe to troubleshoot: if on roof, chock wheels or engage parking brake, and keep personnel clear of edges.",
      "2) Check jib luffing position: confirm the jib is fully elevated to the travel/park position; if not, raise it completely so the travel enable switch engages:contentReference[oaicite:22]{index=22}.",
      "3) Verify cradle status: confirm the cradle is properly connected/locked in and its safety circuit is closed. Reset any cradle E-stop; check 'cradle connected' indicator or bypass key if provided:contentReference[oaicite:23]{index=23}.",
      "4) Inspect control panel for fault lights: if 'Cradle Fault' is lit, address any cradle issues before attempting travel.",
      "5) Check the cable reel: if the traversing stopped near end of cable, try moving in the opposite direction. Inspect if the cable reel limit switch is engaged; if so, manually reel in some cable or reset as per manual:contentReference[oaicite:24]{index=24}.",
      "6) After resolving interlocks, test traverse movement again from the control panel or pendant. Move slowly and be ready to stop if any unusual resistance or faults recur."
    ],
    "safety_hazards_and_warnings": [
      "Fall hazard: do not override safety interlocks (like jib up limit or cradle fault) except for controlled testing, and never with personnel in an unsafe position.",
      "Crush hazard: ensure nobody is near the wheels or track path when attempting to move the roof car.",
      "If a bypass of a safety (e.g., using a key switch override) is required to recover the BMU, it must be done under strict control and restored to normal operation immediately after. If unsure, stop and consult the manufacturer."
    ],
    "recommended_corrective_actions": [
      "Fully raise jib and ensure luffing limit switch is activated to allow travel.",
      "Properly seat and secure the cradle; reset any cradle emergency stops or safety devices.",
      "Use the roof car bypass key switch if needed to move the BMU to a safe area (per manufacturer procedure), then investigate and fix the underlying cradle fault.",
      "If the cable reel limit was reached, reposition the BMU by traveling opposite direction and then ensure adequate cable slack or re-spool as necessary.",
      "Once the BMU can traverse, perform a full travel test in both directions to confirm the fault is cleared."
    ],
    "parts_commonly_involved": [
      "Jib full-up position limit switch",
      "Cradle connection plug or sensor",
      "Cradle emergency stop circuit",
      "Cable reel rotary limit switch",
      "Travel drive motor contactor/drive"
    ],
    "manufacturer_references": [
      "CoxGomyl O&M Manual for roof car systems – see 'Interlocks for Traversing' section",
      "Project-specific manual (if available) covering cradle attachment and travel bypass operations"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "https://www.coxgomyl.com/news/how-coxgomyl-bmus-deliver-on-safety-and-fall-protection/"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "In app, phrase as 'BMU won't travel along track (jib not in correct position or cradle fault)'.",
      "Group any track travel issues here, including interlock or limit switch-related stoppages."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Various rope hoist models (traction or drum)",
    "subsystem": "Hoist drive / Safety device",
    "symptom_title": "Hoist will not lift (raises disabled, lowering still works)",
    "symptom_details": [
      "When attempting to raise the cradle/platform, nothing happens (or a fault light comes on), but lowering movement functions normally",
      "Often occurs when cradle is at or near upper limit, or when overloaded",
      "May hear a click or see an indicator when raise is attempted, but no hoist motion upwards"
    ],
    "typical_root_causes": [
      "Upper travel limit switch engaged – normal upper limit reached, preventing further hoisting:contentReference[oaicite:25]{index=25}",
      "Ultimate (final) upper limit activated – an extra safety cut-out if normal limit failed; this often disables upward motion entirely and may require manual reset:contentReference[oaicite:26]{index=26}",
      "Overload condition detected – load exceeds safe working load, so hoist up is blocked (some systems only allow lowering in this state):contentReference[oaicite:27]{index=27}",
      "Hoist motor fault or drive trip on raising – e.g. inverter overcurrent due to excessive load or jam (though in such case lowering might also be inhibited by fault)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Ensure BMU is isolated and no personnel are in the cradle (to remove extra weight) while diagnosing.",
      "2) Inspect the hoist upper limit switches: confirm if the normal upper limit switch is triggered. If the cradle is at top position, attempt to lower slightly to free it from the limit.",
      "3) Check for a final upper limit (ultimate limit) activation: this could require manually lowering the cradle a short distance. Follow the manual to carefully hand-wind or release the hoist brake enough to disengage the final limit:contentReference[oaicite:28]{index=28}.",
      "4) Evaluate load: ensure the cradle load is within the rated capacity. Remove any excessive weight or additional persons/equipment if the overload indicator was lit:contentReference[oaicite:29]{index=29}.",
      "5) Once limits are cleared and load is normal, reset any hoist drive faults (inverter resets, etc.) if they were triggered. Restore power and test the up function carefully.",
      "6) Observe hoist operation: if raising still fails, monitor any fault lights or drive displays for errors, and consider that a hoist motor brake or mechanical issue might be present (then escalate if needed)."
    ],
    "safety_hazards_and_warnings": [
      "Fall hazard: Do not exceed rated load; an overloaded platform can lead to rope slippage or structural failure. Always reduce load before troubleshooting further.",
      "If the ultimate upper limit is engaged, it typically cuts all power to prevent overtravel. Use extreme caution when manually overriding or mechanically lowering off a final limit – risk of uncontrolled descent if done improperly.",
      "Never tamper with or bypass limit switches; they are critical safety devices. If a limit switch is suspected faulty, secure the platform and consult a specialist instead of bypassing."
    ],
    "recommended_corrective_actions": [
      "Remove any overload and reset the overload sensor if applicable (some systems require a reset once tripped).",
      "Lower the cradle slightly (manually if necessary) to disengage any upper limit switches that were activated. Then restore normal controls.",
      "Inspect and adjust the upper limit switch if it triggered too early or got stuck. If the final limit activated, have a competent technician inspect its condition and reset mechanism.",
      "After corrections, test hoist up function without load or with minimal load to ensure normal operation. Replace or recalibrate faulty limit switches or load sensors as needed."
    ],
    "parts_commonly_involved": [
      "Upper hoist limit switch (primary)",
      "Ultimate/final upper limit switch",
      "Load cell or overload sensor",
      "Hoist drive VFD (if equipped)",
      "Hoist motor brake coil"
    ],
    "manufacturer_references": [
      "EN 1808:2015 (Sec. 5.3) - mandates upper travel limits and ultimate limit for BMUs",
      "Manufacturer O&M manual – hoist fault section (see raising movement faults)"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Hoist won't go up (can go down)'.",
      "Include any scenario where up motion is inhibited but down is allowed, usually due to a safety condition.",
      "Engineers should see this as likely limit or overload related."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Various BMUs with powered hoists",
    "subsystem": "Hoist drive / Safety device",
    "symptom_title": "Hoist will not lower (downward movement blocked)",
    "symptom_details": [
      "Hoist can lift the cradle/platform, but will not move downward when commanded",
      "The cradle may appear stuck, or only a slight movement occurs before stopping",
      "Upward motion likely still functional (unless a different fault also present)"
    ],
    "typical_root_causes": [
      "Bottom safety trip bar activated – the cradle's undercarriage bump bar is depressed (indicating an obstruction below):contentReference[oaicite:30]{index=30}",
      "Slack rope condition detected – hoist thinks ropes have gone slack (possibly the platform is resting on something or rope coiled incorrectly), triggering a slack rope safety cut-out:contentReference[oaicite:31]{index=31}",
      "Overspeed or secondary brake engaged – an overspeed safety device may have tripped during a previous descent, locking the hoist until reset:contentReference[oaicite:32]{index=32}",
      "Ultimate upper limit not disengaged – in some cases if the final upper limit was hit, it may prevent lowering until manually freed (platform effectively jammed at top):contentReference[oaicite:33]{index=33}"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Ensure BMU is secured and personnel are clear. Do NOT allow anyone on the platform if it might be stuck or sudden movement could occur.",
      "2) Inspect the cradle's bottom safety (trip) bar: if it has contacted an obstacle (ledge/roof) and is pressed, raise the cradle slightly to clear the obstruction:contentReference[oaicite:34]{index=34}. The bar should reset and then lowering should be possible.",
      "3) Check rope tension: if the ropes are slack or uneven, first raise the cradle a bit to re-tighten all suspension ropes:contentReference[oaicite:35]{index=35}. Once taut, try lowering again slowly.",
      "4) If an overspeed safety device (secondary brake) triggered (often due to a sudden descent or free-fall arrest), follow the manufacturer's procedure to reset it:contentReference[oaicite:36]{index=36}. This may involve manually raising a small amount or a physical reset lever on the brake.",
      "5) If the platform is at the top and absolutely will not lower under power, consider that the final limit might have cut power. Use a manual lowering crank or brake release carefully to move the cradle down a few centimeters off the final limit switch:contentReference[oaicite:37]{index=37}.",
      "6) Once any engaged safety devices are reset, test lowering again under power in a controlled manner. Observe the ropes and surroundings for any signs of snagging or re-triggering of safety switches."
    ],
    "safety_hazards_and_warnings": [
      "Falling object hazard: a stuck platform could release suddenly when a safety device is reset. Ensure the area below is clear of people and equipment before attempting to lower.",
      "If slack rope was detected, the platform may have been supported by something else – be mindful of sudden weight transfer when it frees (the platform could drop a short distance until ropes catch). Always use safety lines or secondary protection if available.",
      "Resetting overspeed brakes often requires technical expertise; attempting to force a reset without understanding the mechanism could be dangerous. If in doubt, stop and call a specialist."
    ],
    "recommended_corrective_actions": [
      "Clear any obstructions below and reset the bottom trip bar; verify it springs back and its switch closes.",
      "Adjust rope tension by raising slightly, then proceed to lower – ensure slack rope sensors are in their normal position once ropes are taut.",
      "Follow reset steps for overspeed safety device as per manual (this may include inserting a special key or lever to wind the brake off, or electrically resetting via control system).",
      "If the issue was a final limit at top, after manual lowering, have the limit switch inspected/realigned to prevent recurrence.",
      "After corrections, perform a controlled descent test from just above the ground or roof level to confirm smooth lowering."
    ],
    "parts_commonly_involved": [
      "Cradle bottom safety edge (trip bar)",
      "Slack rope switch/lever",
      "Overspeed governor and safety brake",
      "Upper final limit switch circuit",
      "Hoist brake release mechanism"
    ],
    "manufacturer_references": [
      "EN 1808:2015 - safety device requirements (slack rope and overspeed brakes)",
      "CoxGomyl BMU Manual – troubleshooting lowering faults (incl. slack rope resets)"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "https://www.powerclimber.com/wp-content/uploads/38825-E-manual-Scout.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom entry: 'Hoist won't go down'.",
      "Include all scenarios where down motion is locked out due to safety triggers.",
      "Combine trip bar, slack rope, overspeed under this for simplicity – in an app, an engineer selecting 'Hoist won't lower' would get steps covering all."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with motorized hoists (drum or traction)",
    "subsystem": "Hoist drive",
    "symptom_title": "Platform creeps/slides down even with hoist stopped",
    "symptom_details": [
      "Cradle or platform slowly descends when it should be stationary, or suddenly drops a short distance before stopping",
      "May be noticed when the hoist is at rest and the brake should hold, especially under load",
      "Often accompanied by an inability of the hoist to hold position, requiring constant corrections"
    ],
    "typical_root_causes": [
      "Hoist motor brake failure or misadjustment – the electromagnetic brake is not holding, possibly due to worn pads or a failed brake coil:contentReference[oaicite:38]{index=38}",
      "Brake air gap too large – brake not fully engaging (can happen if worn or incorrectly set):contentReference[oaicite:39]{index=39}",
      "Severe overload causing brake slippage – platform load exceeding what the brake can hold (could also indicate brake torque set too low)",
      "Hydraulic valve/internal leak (if hydraulic hoist): allowing drift (though most BMU hoists are electric)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Cease use immediately: secure the platform by tying off or resting it on a safe ledge if possible, to prevent further uncontrolled descent. Do not rely on the hoist brake if it's slipping.",
      "2) Verify the brake condition: Listen for the brake engaging when power is removed. If the platform drifts, assume brake is not holding. Check the brake manual release lever is fully in the engaged position (not accidentally stuck open).",
      "3) Inspect brake wear and gap (requires a qualified technician): measure the brake pad clearance if accessible. Also check for any signs of oil/grease on brake surfaces that could reduce friction.",
      "4) Test the brake coil electrically: ensure the brake coil receives the correct voltage and releases when powered, and that it engages (de-energizes) when it should hold. If coil is burned out, the brake might stay released:contentReference[oaicite:40]{index=40}.",
      "5) If an overload was present, remove extra load. However, a healthy brake should hold at rated load plus some safety margin, so any slipping under normal load indicates a brake issue.",
      "6) Do NOT continue normal operation until the brake fault is rectified. Arrange repair or replacement of the hoist brake components."
    ],
    "safety_hazards_and_warnings": [
      "Imminent fall hazard: a slipping hoist brake can lead to a runaway platform and serious injury or death. Always treat a creeping/sliding platform as a critical failure – evacuate personnel from the platform and secure it immediately.",
      "Do not attempt to ride the platform or use the BMU normally until the brake is fixed; the secondary overspeed brake (if any) might catch a full free-fall only once – it’s not a substitute for a functional motor brake.",
      "Mechanical work on the hoist brake must only be done with the platform secured (e.g., supported or tied back) and power isolated. The brake may release suddenly during adjustment."
    ],
    "recommended_corrective_actions": [
      "Replace or repair the hoist motor brake unit – worn brake pads or a burnt-out coil should be renewed by a qualified technician:contentReference[oaicite:41]{index=41}.",
      "Adjust the brake air gap to the manufacturer's specification after replacing pads/coil; ensure the brake fully seats when engaged.",
      "Test the brake under a safe load: lift a small load a short distance and stop to see if the brake holds. No perceptible slip is acceptable. If any doubt, keep BMU out of service until brake holding torque is verified.",
      "Verify the overspeed secondary brake (if present) has not engaged or been affected; reset and inspect it as well after a main brake failure incident."
    ],
    "parts_commonly_involved": [
      "Hoist motor brake assembly",
      "Brake pads/friction disks",
      "Brake coil and rectifier unit",
      "Brake manual release mechanism",
      "Overspeed safety brake (secondary catch)"
    ],
    "manufacturer_references": [
      "Manntech Technical Bulletin – Motor Brake Maintenance (if available)",
      "CoxGomyl/Manntech service manual: section on brake adjustment & testing"
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00",
      "https://www.electriciansforums.net/threads/hoist-brake-coil-problem.170838/"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom for app: 'Platform drifting down (brake not holding)'.",
      "This should trigger an immediate 'do not use' warning in the app and guidance to secure and repair.",
      "Likely categorized under critical hoist faults."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Twin-hoist cradles or multi-rope systems",
    "subsystem": "Hoist drive / Leveling",
    "symptom_title": "Suspended platform is tilted or unlevel",
    "symptom_details": [
      "Cradle is not level – one end of the platform is higher than the other",
      "Typically occurs during raising or lowering, or after stopping, one side drifts or lags",
      "May trigger a limit if angle is too severe (some systems have tilt sensors)"
    ],
    "typical_root_causes": [
      "Uneven load distribution on the platform – one hoist carrying more weight, causing imbalance:contentReference[oaicite:42]{index=42}",
      "Synchronization issue between dual hoists – slight speed difference or brake friction difference between two hoist motors:contentReference[oaicite:43]{index=43}",
      "Different brake or motor sensitivity – one hoist starts or stops slower than the other, leading to tilt:contentReference[oaicite:44]{index=44}",
      "Slack rope on one side – if one hoist momentarily stopped or slipped, its rope could slacken while the other side still raises"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Halt operations: do not continue moving the platform if it is significantly tilted. Ensure operators are secured and if possible carefully lower the platform to a safe position (keeping movement minimal).",
      "2) Visually inspect load distribution: check if any heavy equipment or personnel are concentrated at one end of the cradle. Redistribute weight evenly across the platform.",
      "3) Check for rope slack on each hoist: each suspension rope should be taut. If one rope is slack, slowly operate the hoists (or use manual leveling if available) to even out tension – many dual hoist systems allow individual hoist control for leveling:contentReference[oaicite:45]{index=45}.",
      "4) Examine the hoist mechanisms: listen for any lag when starting/stopping. A hoist brake dragging or a motor that responds slower can cause uneven motion. Note which side is lagging (lower end).",
      "5) If the platform has an automatic leveling system (e.g., electronic sync or balance sensor), check that system for fault indications. If manual leveling devices exist, use them per the manual to correct the level:contentReference[oaicite:46]{index=46}.",
      "6) Once level, perform a test: raise and lower a short distance while monitoring both hoists. If persistent tilt occurs, remove the unit from service and have both hoists inspected/calibrated (e.g., check brake torque and motor speed settings)."
    ],
    "safety_hazards_and_warnings": [
      "Fall hazard: a severely tilted platform could lead to persons or objects sliding off. All occupants must attach harnesses, and tools secured, whenever a tilt occurs.",
      "Do not allow the tilt to exceed the manufacturer's specified angle (often a few degrees) – most BMUs have a tilt safety cut-out around 8-15°. Beyond that, an overspeed or slack rope event could occur on the slack side.",
      "When manually adjusting one hoist, ensure the other hoist remains locked or braked to avoid a sudden movement. Coordinate with a second operator if possible, one for each hoist, under a clear plan."
    ],
    "recommended_corrective_actions": [
      "Use the BMU's manual leveling function: operate one hoist at a time in small increments to bring the platform back to level:contentReference[oaicite:47]{index=47}.",
      "Re-balance the load on the platform – ensure roughly equal weight distribution before resuming work.",
      "Have the hoist system serviced: possible actions include synchronizing hoist speeds (if VFD-controlled), adjusting brake torque so both sides hold equally, or installing a balance control system if not present.",
      "Train operators to always maintain even loading and to stop if any tilt is observed. If recurring, consider adding or repairing an automatic leveling device."
    ],
    "parts_commonly_involved": [
      "Dual hoist motors and brakes",
      "Platform level sensor (if equipped)",
      "Load distribution (counterweights, etc.)",
      "Slack rope safety on each hoist"
    ],
    "manufacturer_references": [
      "See manufacturer manual for dual-hoist leveling procedures (e.g., Manntech twin drum systems manual)",
      "EN 1808 – requires synchronous movement or leveling for multi-hoist platforms"
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00",
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Platform out-of-level'.",
      "This can be grouped under hoist synchronization faults.",
      "In an app, might prompt if the BMU has multiple hoists, since single-hoist systems cannot tilt by themselves."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "Large BMUs (e.g. Manntech Type 6 series) with luffing jibs",
    "subsystem": "Luffing mechanism",
    "symptom_title": "Jib arm fails to luff (no upward/downward jib movement)",
    "symptom_details": [
      "The jib arm cannot be raised or lowered (luffed) when commanded",
      "No motion from the jib cylinders or motors, jib stuck in current position",
      "Other movements (e.g., hoist or travel) might still function"
    ],
    "typical_root_causes": [
      "Interlock engaged: some BMUs require the cradle to be in a specific position (e.g., docked or empty) before luffing is enabled, or travel must be stopped (lockouts between motions)",
      "Limit switch activated: the jib may already be at an upper or lower limit; a limit switch or sensor could be falsely sensing an end-of-travel:contentReference[oaicite:48]{index=48}",
      "Hydraulic pressure issue (for hydraulic luffing systems): low oil level or pump failure leading to no hydraulic movement",
      "Mechanical bind or pin engaged: a locking pin (for parking) might still be in place, physically preventing jib movement"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Secure the BMU: ensure it is not mid-travel or in a position that could become unstable if the jib moves. If the BMU has a parking pin in the jib, confirm it is disengaged.",
      "2) Check control interlocks: verify that any required conditions are met (e.g., cradle is in the home position or no other motion active). Many Manntech BMUs won't luff unless traverse drive is stopped and cradle is unloaded – confirm these conditions or any indicator lights.",
      "3) Observe limit indicators: see if a 'jib up' or 'jib down' limit light is on. Manually inspect the jib limit switches for correct position; if the jib is not at end but limit is tripped, adjust or gently tap the limit to see if it's stuck.",
      "4) For hydraulic jibs: listen for the pump activation when luff is commanded. If the motor runs but no movement, check hydraulic oil level and look for leaks. The relief valve might be bypassing if pressure is not building – gauge if available.",
      "5) If electric screw-jack luffing: listen for motor hum. If hums but no movement, motor or gearbox may be jammed – do not continue to avoid motor burn. If nothing at all, check the luff motor contactor or drive and any fuse.",
      "6) Attempt a small movement in the opposite direction (if up doesn't work, try down or vice versa) to see if it's one direction or both. This can hint if a directional control valve or contactor has failed on one side.",
      "7) If still no result, leave the jib secured and call for technical support. Avoid manual forcing unless there's an emergency procedure (some units have manual pump for luff hydraulics to retract the jib in emergency)."
    ],
    "safety_hazards_and_warnings": [
      "Crushing hazard: the jib movement can be powerful. Ensure no one is in the path of the jib or under the cradle when troubleshooting, especially if it could suddenly drop or rise.",
      "If a hydraulic system is involved, high pressure fluid can be dangerous. Do not crack open lines to check flow except by trained personnel with pressure relieved.",
      "A stuck jib could suddenly move if a binding or locked component is freed. Treat the jib as potentially energy-stored – stay clear of its range of motion when manipulating limits or locks."
    ],
    "recommended_corrective_actions": [
      "If an interlock was the issue (e.g., traverse not in park), satisfy that condition or override if procedure allows, then restore normal control logic.",
      "Adjust or replace faulty limit switch on jib luff if it was falsely detecting end-of-travel. Calibrate the luff angle sensor if present.",
      "For hydraulic jibs: top up hydraulic oil if low and check for leaks. Replace or repair the hydraulic pump if it's not building pressure. Check any blocked valve or a tripped thermal overload on the pump motor.",
      "For mechanical issues: ensure jib parking pins are retracted. If gearbox or screw jack is jammed, a specialist may need to repair it. Do not apply excessive force – risk of structural damage.",
      "After resolving, test the full range of jib luff movement without load, then with the cradle, to ensure smooth operation and that limits function correctly."
    ],
    "parts_commonly_involved": [
      "Jib luffing motor or hydraulic pump",
      "Jib limit switches (upper/lower)",
      "Hydraulic fluid and valves (if applicable)",
      "Jib locking pin mechanism",
      "Luffing gear reducer or cylinder"
    ],
    "manufacturer_references": [
      "Manntech O&M Manual (Type 6) – Jib Luffing system operations and troubleshooting",
      "Manufacturer service bulletin on jib hydraulic system checks"
    ],
    "source_urls": [
      "https://f.hubspotusercontent30.net/hubfs/8464480/Facade%20Access%20Systems.pdf",
      "https://fba-gomyl.com/files/2017-02/fba-gomyl-building-maintenance-unit.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Jib not moving (up/down)'.",
      "Could be presented as 'Jib stuck' in the app.",
      "Likely group issues with either hydraulic or electric luff systems here."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with rotating jibs (slew ring systems)",
    "subsystem": "Slewing (jib rotation)",
    "symptom_title": "Jib will not slew (no rotation of BMU arm)",
    "symptom_details": [
      "The BMU's jib or turret does not rotate when slewing is attempted",
      "No motion or only a small jerk observed, and then it stops",
      "Slew motor can be heard trying (in some cases) but jib stays in place"
    ],
    "typical_root_causes": [
      "Slew end-of-travel limit engaged – the jib may already be at its rotation limit or a limit switch thinks it is:contentReference[oaicite:49]{index=49}",
      "Mechanical brake on slew drive not releasing – the slew motor’s brake could be stuck or not energized, preventing rotation",
      "Slew lock or pin in place – some units have a locking pin for the slew during parking or maintenance",
      "Drive fault – slew motor or gearbox jam, or if VFD-controlled, a fault (overcurrent) when trying to start slew movement"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Ensure the BMU is safe to slew: cradle clear of building facade and any tie-downs released. If a slew lock pin exists, verify it is withdrawn.",
      "2) Verify slew limits: check the position of the jib relative to its allowed range. If at an end, only opposite direction should work. Manually inspect the limit switch actuators on the slew ring – ensure they aren't already triggered or stuck.",
      "3) Listen for the slew motor and brake: when slewing is commanded, see if the motor hums or if a brake 'clunk' is heard. If not, test if the brake coil is energizing (measure voltage if possible) and that the brake is free. A seized brake will prevent movement.",
      "4) Try slight movement in both directions. If one direction works and the other doesn't, likely you've hit a limit in that direction – reset the limit if needed by moving back within range.",
      "5) Inspect electrical components: check fuses or overloads for the slew motor. If a VFD is used for slewing, look at its display for error codes. Reset any drive faults if present after verifying no mechanical jam.",
      "6) If motor runs but no rotation, the gearbox or drive coupling might be sheared. Do not continue attempting; schedule mechanical inspection."
    ],
    "safety_hazards_and_warnings": [
      "Slewing often occurs with the jib and cradle possibly over the building edge – ensure no one is below and cradle is at a safe height to avoid collision if it suddenly swings.",
      "A stuck slew brake can release suddenly if it overheats or if manually freed – be cautious and stand clear of the jib's rotation path during troubleshooting.",
      "If using manual release or override on the slew brake, do so carefully and with the jib supported if possible (to prevent uncontrolled swing especially under wind)."
    ],
    "recommended_corrective_actions": [
      "Free the slew brake: if the brake coil was not getting power, check wiring and replace coil if failed. If the brake was mechanically stuck, manually release it per the manual to test slew, then service it.",
      "Reset or adjust the slew limit switches if they were found to be misaligned or falsely triggered. Ensure proper function at true end of travel.",
      "If the slew motor or gearbox is defective (e.g., motor runs but no motion), the component likely needs repair/replacement. Lock out the BMU's slew function until this is done.",
      "Lubricate the slew ring and inspect teeth if any binding was suspected due to corrosion or debris. Remove any obstruction from the slew ring path.",
      "Test slew function through full range after fixes, and re-engage any parking lock pins once aligned in park position."
    ],
    "parts_commonly_involved": [
      "Slew drive motor and brake",
      "Slew ring limit switches",
      "Slew locking pin (parking lock)",
      "Slew gearbox and bearing"
    ],
    "manufacturer_references": [
      "Tractel BMU manual – slewing section (for slew brake checks)",
      "Manufacturer guide on slew ring maintenance (common to CoxGomyl/Manntech)"
    ],
    "source_urls": [
      "https://fba-gomyl.com/files/2017-02/fba-gomyl-building-maintenance-unit.pdf",
      "https://www.manntech.com"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Cannot rotate jib'.",
      "Covers limit hits and brake issues which are common causes.",
      "Multiple error codes for slew motor (if VFD) can be handled within this pattern as well."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "Modular BMUs with telescoping jibs (e.g. Manntech Type 6.2)",
    "subsystem": "Telescoping jib",
    "symptom_title": "Telescopic jib will not extend or retract",
    "symptom_details": [
      "Telescoping section of the jib arm does not move when commanded to extend or retract",
      "No movement or an initial jerk then stop; jib remains at current length",
      "Possibly an alarm or indicator if extension is blocked (some systems have warnings for jib extension faults)"
    ],
    "typical_root_causes": [
      "Interlock or mode setting: the telescopic function may be disabled unless certain conditions (like jib angle or slew position) are met, per design",
      "Guide rollers or wear pads jammed – mechanical binding in the telescopic sections due to debris or misalignment",
      "Hydraulic cylinder issue (if telescoping is hydraulic): lack of pressure or a valve not opening to move the section",
      "Limit switch or sensor triggered – the jib might think it's fully extended/retracted due to a faulty sensor, preventing motion"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify if the BMU control panel requires a specific mode or permission for telescoping. Some Manntech systems only allow extension in a certain slewing range or when the cradle is unloaded. Engage the correct mode or override as per the manual.",
      "2) Inspect the telescopic jib sections visually: look for obvious obstructions or damage along the sliding tracks. Also check if locking pins/clamps on the telescopic part are released (some designs have mechanical locks for transit).",
      "3) If hydraulic: check if the hydraulic pump engages when telescoping is selected. If you hear the pump but no movement, the issue could be a stuck valve or bypass (listen for fluid flow noise). Gently tapping the control valve (with a tool, not hands) can sometimes free a stuck spool – do this only if trained.",
      "4) If electric (chain or screw drive): listen for motor effort. No sound might mean no power to motor (blown fuse or limit active). A hum with no movement suggests mechanical jam – stop to avoid motor damage. If nothing at all, check the luff motor contactor or drive and any fuse.",
      "5) Try moving the jib a tiny amount in the opposite direction (retract if stuck extending or vice versa) to relieve any internal pressure or binding, then attempt the desired direction again.",
      "6) As a diagnostic, relieve any weight on the jib tip (if a load or cradle influences it). Sometimes extension binds under load – ensuring no extra load might help movement during troubleshooting.",
      "7) If none of the above yields motion, do not force the telescope. Arrange for maintenance to inspect the telescoping mechanism; forcing it could cause structural damage."
    ],
    "safety_hazards_and_warnings": [
      "Pinch/crush hazard: telescopic jibs can move suddenly when a jam clears. Keep hands and tools away from the telescoping sections and wear hard hats in case of falling debris from the jib.",
      "If the telescope is hydraulic, never put body parts near potential pinch points expecting it not to move – a pressure release or sudden valve fix could cause immediate motion.",
      "Working at the jib tip or near the extended section often involves height; ensure fall protection if accessing that area. Never climb on the jib to troubleshoot extension unless the BMU is securely out of operation and proper access equipment is used."
    ],
    "recommended_corrective_actions": [
      "Release any manual locks on the telescopic section (following manufacturer procedure) before relying on the motor/hydraulic system.",
      "Clean and lubricate the telescoping jib guides if dirty; remove any obvious physical obstructions. Minor misalignments can sometimes be corrected by slowly cycling in-out if safe to do so.",
      "Replace or repair the telescoping drive system as needed: e.g., if a chain is off track or a hydraulic cylinder bypassing, these components need service. Check telescopic limit switches and sensors and replace if faulty.",
      "After fixing, test the jib extension through full stroke without load, then with load, to ensure smooth operation and that all limit switches correctly stop at ends."
    ],
    "parts_commonly_involved": [
      "Telescopic jib drive motor or cylinder",
      "Telescopic section guide rollers",
      "Extension limit switches/sensors",
      "Telescopic section locking pins"
    ],
    "manufacturer_references": [
      "Manntech Type 6 BMU manual – telescopic jib operation (notes on interlocks and maintenance)",
      "Service report examples of telescopic jib binding issues in Manntech units"
    ],
    "source_urls": [
      "https://www.manntech.com",
      "https://standardaccess.com.au/wp-content/uploads/2020/09/SA-Tractel-BMU.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Jib extension stuck'.",
      "Applies to any BMU with extendable jib sections, prevalent in Manntech modular designs.",
      "Could be combined with luffing issues in a broad 'boom movement fault', but better separate for clarity."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "All BMUs with load limiters",
    "subsystem": "Safety device (overload)",
    "symptom_title": "Hoist overload warning and lifting cut-out",
    "symptom_details": [
      "BMU hoist stops lifting and an overload indicator/alarm is triggered",
      "Platform may still lower, but raising is inhibited until overload is cleared",
      "Sometimes occurs even when load is at or below rated value (false trip)"
    ],
    "typical_root_causes": [
      "Actual overload: the combined weight of personnel, tools, and materials on the cradle exceeds the SWL (safe working load), causing the load cell or limiter to trip",
      "Stuck or mis-calibrated load sensor: the overload device triggers at too low a load due to drift or a mechanical jam in the sensor linkage",
      "Dynamic loading: a sudden jerk or snag caused a momentary high load (peak) that tripped the overload circuit, even if static load is okay",
      "Electrical fault in overload circuit: e.g., faulty wiring causing false overload signal"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately stop adding load to the platform. If mid-lift, carefully lower the platform to a safe position if possible (overload devices usually allow lowering).",
      "2) Verify the load: calculate the total weight on the cradle (people + equipment). If it exceeds the BMU's rated capacity, remove some weight until at or below the limit.",
      "3) If load is within limit but alarm persists, inspect the overload sensor (usually a load cell or weighted linkage). Check for any mechanical obstructions or deformation in the load measurement system (e.g., a bent arm or jammed spring).",
      "4) Reset the overload device: some systems require pressing a reset button or cycling power after an overload trip. Do this only after ensuring the load is within allowable range.",
      "5) Test lift briefly with a known safe load. If the overload trips again at a low load, the sensor likely needs recalibration or replacement. Arrange for a load test with calibrated weights to adjust the sensor.",
      "6) If the overload cannot be cleared and the load is definitely under the limit, do not bypass the sensor. Use emergency procedures to retrieve the platform if needed, and call for maintenance."
    ],
    "safety_hazards_and_warnings": [
      "Overloading a BMU is dangerous: it can cause rope slippage, motor stalling, or structural failure. Always respect the SWL – if unsure, err on the side of caution and lighten the load.",
      "Never bypass or disable an overload safety device in the field; this can risk catastrophic failure without warning. The device is there to protect against collapse or rope failure.",
      "When removing weight to clear an overload, do so carefully to maintain balance on the platform. Ensure people remain tied in and move one at a time to avoid sudden shifts."
    ],
    "recommended_corrective_actions": [
      "Unload excessive weight and confirm the platform load is within the specified limit.",
      "If the sensor was faulty, have it recalibrated: use certified test weights to adjust the trip point to the rated load per the manufacturer's procedure.",
      "Replace the load cell or overload switch if it cannot hold calibration or is physically damaged.",
      "Document the incident: repeated overload trips might indicate training issues or require a higher capacity BMU if loads are regularly near the limit."
    ],
    "parts_commonly_involved": [
      "Load cell (overload sensor)",
      "Overload indicator light/alarm",
      "Load limiter spring assembly (if mechanical)",
      "Safety relay for overload circuit"
    ],
    "manufacturer_references": [
      "EN 1808:2015 – requires overload protection on BMUs (references to 1.5x load test etc.)",
      "CoxGomyl/Manntech user manual – section on 'Overload' indicator/reset"
    ],
    "source_urls": [
      "https://www.coxgomyl.com/news/how-coxgomyl-bmus-deliver-on-safety-and-fall-protection/",
      "https://www.manntech.com"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom in app: 'Overload tripped'.",
      "This covers genuine overweight and false alarms alike, guiding to check load then sensor.",
      "Could unify multiple overload code readings into this one troubleshooting path."
    ]
  },
  {
    "manufacturer": "Tractel",
    "model_or_range": "BMUs using traction hoists (Tractel Tirak-based)",
    "subsystem": "Safety device (slack rope)",
    "symptom_title": "Slack rope device activates and stops lowering",
    "symptom_details": [
      "Hoist motion is cut off due to slack rope safety engagement, often while lowering",
      "The platform may stop lowering and require raising to reset, even when ropes appear taut",
      "Happens repeatedly, sometimes with light loads or at certain points of travel"
    ],
    "typical_root_causes": [
      "Rope coiling or layering issue causing momentary slack – e.g., rope piling up irregularly on drum or traction sheave letting rope slip momentarily:contentReference[oaicite:50]{index=50}",
      "Slack rope device sensitivity too high or out of adjustment – it trips with minimal slack or rope whip",
      "Cradle landing on an obstacle (ledge/roof) before hoist stops – rope goes slack because support is taken off the rope",
      "Faulty slack rope switch – mechanical lever or sensor sticking in the tripped position"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Stop and secure the platform. If it stopped mid-air due to slack rope device, first raise the platform a bit to re-tension ropes and ensure it's safely supported:contentReference[oaicite:51]{index=51}.",
      "2) Inspect the rope alignment on the hoist: for drum hoists, ensure the rope is spooling correctly in the grooves and not bird-caged or overlapping. For traction hoists (like Tirak), check rope isn't oily or slipping on the capstan.",
      "3) Check the slack rope device itself (often a weighted lever or spring switch under the hoist): is it freely moving? Remove any debris or corrosion that might make it trigger too easily. Observe it while gently pulling slack in the rope (with platform secured) to see if it resets properly.",
      "4) If the platform had encountered something (e.g., resting on a window ledge) causing slack, adjust the work procedure to avoid that. Use guide rollers or approach limits to prevent the cradle from unloading the ropes.",
      "5) Test lowering again slowly while watching the rope tension. If it trips immediately, the sensor might need adjustment – consult the manual to set the proper spring tension or sensor gap so it triggers at true slack conditions only.",
      "6) If frequent false trips continue, consider replacing the slack rope switch or sending it for calibration. Also verify rope condition – a kinked or worn rope can sometimes cause uneven tension and should be replaced if necessary."
    ],
    "safety_hazards_and_warnings": [
      "Slack rope condition is a safety catch: it prevents a free-fall if the rope were to go completely slack and then taut suddenly. Do not defeat or tie down the slack rope lever; instead find the root cause.",
      "Working around a slack rope by constantly raising and lowering can be dangerous – repeated slack can shock-load the system. Stop using the BMU until the cause is identified and corrected.",
      "If adjusting the slack rope device, follow manufacturer instructions precisely. Too loose a setting might fail to catch an actual slack (a serious hazard), too tight causes nuisance stops."
    ],
    "recommended_corrective_actions": [
      "Adjust slack rope device setting to manufacturer spec; ensure it moves freely and only trips when slack actually occurs.",
      "Improve rope handling: realign or replace the hoist drum/capstan liners if rope tracking is off. Replace the wire rope if it’s worn or has memory causing it to not lay properly.",
      "If the cradle tends to unload ropes at certain building features, install or repair guide rollers on the building or modify the approach method. Consider adding a secondary pulley to maintain rope tension if appropriate (with engineering approval).",
      "Swap out the slack rope switch if it’s unreliable. After any change, perform a functional test: intentionally introduce a small slack (under controlled conditions) to ensure the device still catches genuine slack events."
    ],
    "parts_commonly_involved": [
      "Slack rope switch assembly",
      "Traction hoist capstan (for rope slip)",
      "Hoist drum grooves/rope feeder",
      "Wire rope condition (stiffness, kinks)"
    ],
    "manufacturer_references": [
      "Tractel Tirak hoist manual – slack rope safety adjustment procedure",
      "EN 1808 – slack rope device requirements and testing guidelines"
    ],
    "source_urls": [
      "https://source.thenbs.com/product/kliper-bmu-cradle-bmu-workcage-scout/tk7JfLzRBh7rhHkh4gLUGE/tk7JfLzRBh7rhHkh4gLUGE",
      "https://www.powerclimber.com/wp-content/uploads/38825-E-manual-Scout.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Slack rope device keeps tripping'.",
      "Good to group with other rope safety issues if needed, but slack rope is specific.",
      "The app might ask if the cradle hit something or ropes look slack to narrow cause."
    ]
  },
  {
    "manufacturer": "Tractel",
    "model_or_range": "BMUs with secondary overspeed brakes (Tirak & similar)",
    "subsystem": "Safety device (overspeed brake)",
    "symptom_title": "Overspeed safety brake triggered (hoist rope grab)",
    "symptom_details": [
      "A sudden stop of the platform with a loud mechanical click/clamp sound, usually while descending",
      "Hoist motor runs but rope does not pay out, or platform is stuck and will not move in either direction",
      "Often accompanied by an alarm or indicator for safety device engagement"
    ],
    "typical_root_causes": [
      "Overspeed condition detected: the platform exceeded the safe lowering speed (free-fall or uncontrolled descent) and the centrifugal overspeed governor activated",
      "Shock load or jump: a quick drop (e.g., due to slack then taut rope) tricked the overspeed device into thinking a free-fall was occurring",
      "Device malfunction: the overspeed brake engaged erroneously due to mechanical misalignment or a sensor fault"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately stop any further automatic movement. Do NOT try to force the hoist electrically while the overspeed brake is engaged – it will not move and could damage the rope or brake.",
      "2) Secure the platform: if it's mid-air, ensure all passengers are safe and have fall arrest harnesses on. If possible, tie off the platform to a stable structure using safety ropes to prevent any movement during the reset process.",
      "3) Locate the overspeed brake device. On Tractel/Tirak hoists, this is typically a centrifugal brake mechanism on the hoist. Identify the manual reset procedure – often a lever or crank to release tension. Prepare to support the platform weight by the main hoist brake during this.",
      "4) Follow the manufacturer's reset instructions exactly: this usually involves lifting the platform slightly (either by a manual handwheel or a partner hoist if twin) to take weight off the overspeed latch:contentReference[oaicite:52]{index=52}, and then actuating the reset lever/pin on the overspeed device.",
      "5) Once the overspeed brake is reset (you may hear it click back to ready), test movement slowly. First, try raising a bit to ensure the brake remains off, then lower at creep speed a short distance.",
      "6) Investigate why it triggered: check if the platform was over-speeding (drive malfunction or excessive load) or if there was a slack-rope event. If unclear or if it triggers again without obvious cause, remove the unit from service and have the overspeed brake and governor calibrated or replaced."
    ],
    "safety_hazards_and_warnings": [
      "An engaged overspeed brake indicates a potentially serious event (possible free-fall was halted). The situation is high risk. No one should approach the hoist or drive until the platform is secured – a sudden release could drop the platform.",
      "Never bypass an overspeed safety – doing so would remove a critical fall arrest mechanism. Only reset it per procedure; if it won't reset, the platform must be rescued by other means (e.g., secondary hoist or crane).",
      "When manually resetting, keep fingers and tools clear of the brake mechanism and rope. Wear heavy gloves and eye protection; the brake could snap back or release rope suddenly."
    ],
    "recommended_corrective_actions": [
      "Manually reset the overspeed governor per manufacturer instructions (often inserting a tool and rotating a cam to release the brake).",
      "Perform a functional test without personnel: run the hoist at low speed to ensure the overspeed device doesn't immediately trip again. If it does, or if anything is abnormal, do not use the BMU.",
      "Send the overspeed device for inspection: it may need cleaning, lubrication, or parts replacement. Ensure it is certified to trip at the correct speed.",
      "Check the main hoist system for root causes: e.g., if the motor oversped due to control failure or overspeed sensor mis-set in VFD. Fix any contributing factors before returning to service."
    ],
    "parts_commonly_involved": [
      "Overspeed governor assembly",
      "Secondary safety brake (rope grab)",
      "Manual overspeed reset mechanism",
      "Hoist speed control system"
    ],
    "manufacturer_references": [
      "Tractel BMU/Tirak manual – emergency brake reset procedure",
      "Power Climber bulletin on overspeed device updates (for similar traction hoists)"
    ],
    "source_urls": [
      "https://www.powerclimber.com/wp-content/uploads/723600-1-PCB-85.pdf",
      "https://www.coxgomyl.com/news/how-coxgomyl-bmus-deliver-on-safety-and-fall-protection/"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Overspeed brake engaged / platform suddenly stopped'.",
      "In an app workflow, after ensuring platform is secure, guidance to reset will be needed.",
      "Group any sudden stop with safety brake here, user might not know overspeed vs other safety, but context (loud click, both directions blocked) helps."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "All BMUs (CoxGomyl, Manntech, etc.)",
    "subsystem": "Safety circuit (emergency stop)",
    "symptom_title": "Emergency Stop is activated and won't reset",
    "symptom_details": [
      "The BMU is in emergency stop condition – no functions operate because an E-stop button is engaged or a safety relay is tripped",
      "Operator finds that pulling or twisting the E-stop to release it does not restore power; the system remains in stop mode",
      "There may be a safety circuit or PLC message indicating 'Emergency Stop active' or similar"
    ],
    "typical_root_causes": [
      "An E-stop button stuck or damaged – physically it might be released but the contact is still open (contacts failed or jammed)",
      "Multiple E-stops in circuit and one is still engaged (e.g., cradle E-stop, roof car E-stop, remote control E-stop – any one open keeps circuit open)",
      "Faulty safety relay or control circuit – even after all E-stops are reset, the safety relay does not reset (could be due to internal fault or another safety input preventing reset)",
      "Wiring issue – a broken wire in the E-stop circuit or a loose terminal can simulate an open E-stop"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Visually and physically check **all** emergency stop devices on the BMU: usually one on the roof machine, one on the cradle control, possibly one on a pendant or remote. Make sure every E-stop pushbutton is in the released position (twist or pull each one to reset).",
      "2) Look at the control panel indicators: many systems have an E-stop or safety circuit lamp. If it's still lit after resets, then the circuit is still open.",
      "3) Inspect each E-stop button for damage or stickiness. Push it in and out a few times. If any feels loose or doesn't 'click' properly when resetting, its contacts might be broken or it may still be engaged internally. Focus on that device – test continuity across its terminals if accessible.",
      "4) If all buttons seem fine, check the safety relay (or PLC safety input). Often, you need to turn the key or perform a deliberate reset sequence after an E-stop. Ensure you're following the proper reset procedure (some systems require holding a reset button while powering up).",
      "5) If the system uses a monitored safety relay, it might not reset if the E-stop circuit had a transient fault. Power down the control completely for a few minutes, then power up and try resetting again in case the relay latched.",
      "6) If still no luck, use a multimeter to trace the E-stop circuit loop continuity (power isolated). Find if there is an open circuit location – could be a broken cable to the cradle or a junction box issue. Once found, repair the wiring or replace the faulty E-stop unit.",
      "7) Only when the E-stop circuit is confirmed closed and functional, attempt to run the BMU again. Verify each E-stop triggers and resets properly in a final test."
    ],
    "safety_hazards_and_warnings": [
      "The E-stop circuit is a life-safety system – never bypass it for convenience. Bypassing could allow operation without the ability to quickly stop in an emergency.",
      "Take care when working on the E-stop wiring: ensure power is isolated because inadvertently closing the circuit could start the machine if someone is commanding movement. Lock out controls while troubleshooting.",
      "If an E-stop button is faulty, replace it with the exact type (normally-closed safety-rated switch). Temporary fixes like taping a contact closed are not acceptable and put everyone at risk."
    ],
    "recommended_corrective_actions": [
      "Replace any E-stop pushbutton that fails to reset or has damaged contacts.",
      "Repair wiring issues: tighten any loose connections in the safety circuit, and replace broken wires or faulty connectors (for example, pendant cable E-stop wire breaks are common and should be fixed).",
      "Reset or replace the safety relay if it has internally failed (use the same model or equivalent safety-rated relay as per manufacturer specs).",
      "After resolving, perform a full test: press each E-stop to ensure it stops motion and releases properly, and check that the indicator lights and reset sequence function normally."
    ],
    "parts_commonly_involved": [
      "Emergency stop pushbuttons (cradle, roof, remote)",
      "Safety relay module",
      "Pendant/remote cable (E-stop wiring)",
      "Control circuit terminals (E-stop loop)"
    ],
    "manufacturer_references": [
      "CoxGomyl training manual – basic electrical fault finding (E-stop circuits)",
      "Manntech BMU electrical drawings – safety circuit loop schematic"
    ],
    "source_urls": [
      "https://www.manntech.com/training",
      "https://www.coxgomyl.com/training"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'E-stop stuck on'.",
      "In app, user might just say 'Cannot reset emergency stop'.",
      "Direct them to check all stations; often overlooked that multiple E-stops exist."
    ]
  },
  {
    "manufacturer": "CoxGomyl",
    "model_or_range": "Various CoxGomyl BMUs (drum hoist models)",
    "subsystem": "Limit circuits",
    "symptom_title": "Travel limits misadjusted or final limit engaged",
    "symptom_details": [
      "BMU movement stops prematurely or will not move in a certain direction even though it is not at the actual end of travel",
      "Alternatively, BMU hit a final limit (ultimate limit) and completely lost motion until reset",
      "Operators might report the machine stops a few inches early or had to be manually reset after over-travel protection triggered"
    ],
    "typical_root_causes": [
      "Normal limit switch out of position – e.g., upper hoist limit stopping too early due to sensor drift or cam shift:contentReference[oaicite:53]{index=53}",
      "Final limit (ultimate) triggered – the backup safety limit engaged (often cutting all power) because the normal limit failed or was missed",
      "End-of-track limit mis-set – traversing or slewing limits engaging before reaching true end (due to thermal expansion or calibration error)",
      "Worn or damaged limit actuator – causing inconsistent activation points"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Identify which motion is affected (hoist, traverse, slew, luff) and which limit (upper, lower, end-stop) is suspect. For instance, if hoist stops too low above roof, focus on upper hoist limit switch calibration.",
      "2) Visually inspect the limit switch and its cam or actuator for that motion: is the cam loose or shifted? Are the bolts tight? If safe, manually operate the switch lever to see if it's clicking at the expected position.",
      "3) If a final limit was tripped (e.g., hoist ultimate limit or final end-stop), follow the procedure to safely reset it – often this involves manually moving the machine off the limit and then resetting a switch or replacing a shear pin depending on design.",
      "4) Re-adjust the normal limit: for a hoist, position the platform at the desired cutoff point (e.g., just below roof) and adjust the limit cam until the switch triggers at that point. For travel, move near track end and set limit so machine stops just short of buffer contact.",
      "5) Tighten all adjustment screws and test the movement: move the BMU towards the limit slowly to verify it stops exactly where intended. Repeat a few cycles to ensure consistency.",
      "6) If the final limit was triggered due to normal limit failure, do not simply reset and continue. Investigate why the normal limit failed – replace the faulty switch or broken cam before reuse. Also examine any damage from hitting the final stop.",
      "7) Document the changes and inform operators that the stopping positions may differ slightly now if corrected (so they aren't surprised by new stopping points)."
    ],
    "safety_hazards_and_warnings": [
      "Elevated work hazard: adjusting limits often requires being at roof level or on the machine. Use proper fall protection and tools. Keep clear of edges and moving parts while tweaking limit switches.",
      "Ensure power is off when physically adjusting limit switches to avoid sudden movements. Use manual modes or a colleague controlling if power must be on for testing, and maintain communication.",
      "Never override a final limit to continue operation without fixing it. Final limits are last-resort safeties; if one trips, it's a serious event. Evaluate the BMU for any damage or required maintenance after such an incident."
    ],
    "recommended_corrective_actions": [
      "Readjust the misaligned limit switch cam to the correct position and secure it firmly (use thread-locker if needed to prevent future slippage).",
      "Replace any defective limit switch or actuator that is not reliably functioning. If a limit switch was sticking or intermittent, a new switch ensures safety.",
      "Reset final limit devices according to manufacturer guidelines (this could involve replacing a fusible link or simply resetting a switch). Verify that normal limit now works to prevent reoccurrence.",
      "After adjustments, perform a full range test of that motion: approach all relevant limits slowly to confirm normal limits engage, and that final limits do not engage in normal operation. Adjust further if necessary."
    ],
    "parts_commonly_involved": [
      "Hoist upper/lower limit switches",
      "Traversing end-stop limit switch",
      "Slewing range limit sensors",
      "Final limit switches (ultimate cut-outs)",
      "Limit switch cams or actuating dogs"
    ],
    "manufacturer_references": [
      "CoxGomyl maintenance manual – section on setting limits (CG series BMUs)",
      "Industry standard guidance (EN1808 Annex) on final limit function"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "https://nearyou.imeche.org/docs/default-source/Hong-Kong/session-3.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Stops before end of travel' or 'final limit reached'.",
      "Engineers might select 'Limit switch issue' in an app to get this guidance.",
      "Combine similar issues (all motions limits) under one pattern, since troubleshooting approach is alike."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Traversing BMUs with busbar or trailing cable power feed",
    "subsystem": "Power supply / Traveling feed",
    "symptom_title": "BMU loses power or control at specific track locations",
    "symptom_details": [
      "BMU operates normally in some areas, but consistently stops or dies when reaching a certain point along the track",
      "Functions may cut out entirely (as if main power lost) and sometimes return if moved back or after some delay",
      "Possibly accompanied by visible wear or sparking at a particular track segment or a kink in the trailing cable"
    ],
    "typical_root_causes": [
      "Worn or dirty busbar section – a particular segment of the electrical bus rail not making contact (power pickup shoes losing contact or carbon worn out)",
      "Broken/loose busbar collector shoe – the pickup that rides on the busbar may lift off or lose spring tension at that spot, interrupting power",
      "Damaged trailing cable (for cable-fed systems) – the cable might have internal breaks that open the circuit when stretched or bent at a certain location",
      "Faulty cable reeling drum or cable chain – tension issues causing a momentary disconnection when the machine is at a certain distance"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Note the exact location where the power loss occurs. Mark that spot on the rail if possible. Verify it's repeatable by cautiously moving the BMU to and from that zone (be ready to coast or stop manually if power cuts).",
      "2) If busbar-fed: visually inspect the busbar conductor rails at the problem area. Look for burns, corrosion, or misalignment. Check the condition of the collector shoes on the BMU – are they intact, with enough spring force and carbon length?",
      "3) Clean the busbar section: with power off and lockout in place, use an appropriate cleaner to wipe the rails. Remove any dust or oxidation. Also clean the collector shoes. Then test again – a temporary improvement indicates a contact issue.",
      "4) Observe the collector shoe alignment when passing that section: if possible, watch (from a safe distance) as the BMU moves. If the shoe sparks or loses contact, the rail might be misaligned. Adjust the busbar alignment or shoe pressure if feasible.",
      "5) If trailing cable: inspect the entire cable for cuts or pinches. Run the BMU slowly and have a spotter watch the cable drum or festoon at the moment of failure. If the cable jerk or a specific length of cable is paid out, suspect an internal break at that length.",
      "6) Perform a continuity test on the suspect cable section (power off): wiggle the cable and see if any phase goes open. Alternatively, swap to a spare cable core if available in the multi-core (some systems have redundant wires).",
      "7) Ensure strain reliefs and cable guides are working – a cable yanking at ends can cause intermittent breaks. Rectify any mechanical issues with the reeling drum tension or guiding system.",
      "8) After fixes, test the full travel. Move the BMU through the previously problematic area multiple times to confirm the power remains stable."
    ],
    "safety_hazards_and_warnings": [
      "Losing power mid-travel can lead to a platform stranded in mid-air. Plan for rescue if needed and always have a means to manually recover the BMU if power cannot be quickly restored.",
      "If working near live busbars, treat them as energized – use insulated tools and keep hands clear. Ideally, power down the building feed if maintenance on busbar is needed.",
      "Trailing cables are heavy and can snap back if tension is suddenly released. Use gloves and keep clear of any recoil path when inspecting a reeling drum under tension."
    ],
    "recommended_corrective_actions": [
      "Replace or repair the faulty section of power feed: e.g., replace worn busbar segments or collectors. Ensure all phases have continuous contact by installing new collector brushes/shoes.",
      "If a trailing cable is damaged internally, replace the cable. Splicing is not generally recommended for power cables in motion; a new cable ensures reliability.",
      "Adjust the cable reeler tension and alignment so the cable pays out and recoils smoothly without snags at the critical position.",
      "Incorporate a regular cleaning regimen for busbars, and consider adding a redundant power feed (if design allows) for long tracks to avoid single-point failures.",
      "Verify all phases and control circuits function at the far ends of travel after repair."
    ],
    "parts_commonly_involved": [
      "Busbar rails and collector shoes",
      "Trailing power cable and connectors",
      "Cable reeling drum assembly",
      "Track end power junctions"
    ],
    "manufacturer_references": [
      "Tractel BMU installation guide – busbar maintenance tips",
      "CoxGomyl technical bulletin on trailing cable management"
    ],
    "source_urls": [
      "https://vertikal.net/en/news/story/29581/alimak-bmu-rescue",
      "https://www.vahle.com/en/products/conductor-bar-systems"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Power cuts out on track'.",
      "Combine busbar and cable feed issues, as symptomatically similar (loss of power at certain positions).",
      "Prompt user to specify if they have busbar or cable to tailor some steps."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs equipped with wireless radio remote controls",
    "subsystem": "Remote control system",
    "symptom_title": "Wireless remote control fails to operate BMU",
    "symptom_details": [
      "BMU does not respond to commands from the radio remote transmitter",
      "Wired controls (pendant or cabin controls) still operate the BMU normally",
      "The remote's indicator lights might be off or blinking, indicating no link"
    ],
    "typical_root_causes": [
      "Remote transmitter power issue – dead batteries in the handheld controller or the unit is not turned on",
      "Emergency stop on remote is pressed – many radio remotes have an E-stop that if engaged will disable control:contentReference[oaicite:54]{index=54}",
      "Lost pairing or frequency interference – the remote is not communicating with the receiver (out of sync, or heavy radio interference on site)",
      "Defective remote receiver unit on the BMU – no longer receiving the signals (could be due to antenna damage or internal fault)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Check the remote control's basics: ensure the remote transmitter has fresh batteries or is properly charged. Verify that any power switch is ON and an LED on the remote indicates power.",
      "2) Inspect the remote emergency stop: make sure the E-stop button on the remote handset is pulled out/reset. If it was engaged, the BMU will ignore all remote commands until released.",
      "3) Try re-pairing or linking the remote: follow the manufacturer's procedure (often pressing a combination of buttons when cycling power on the remote) to reconnect with the receiver. Do this with the BMU in a safe state and no conflicting commands.",
      "4) Observe any lights on the BMU's remote receiver module (if visible). Many have an LED that shows signal reception. If no activity when buttons are pressed, likely the issue is transmission. If there is activity but no motion, could be receiver logic fault or BMU in a state that ignores remote (e.g., key switch set to local control only).",
      "5) Ensure the BMU is in the correct mode for remote: some systems have a selector switch (Local/Remote). Set it to Remote and ensure no other control station is active (e.g., pendant not plugged in if that auto-disables radio).",
      "6) Try a range test: if possible, move closer to the receiver antenna, eliminating interference or distance issues. If it works up close but not far, antenna or interference is likely – inspect the antenna for damage and clear any obstructions.",
      "7) If still not working, revert to pendant or local controls to operate the BMU and schedule a repair for the remote system. Do not use remote until it’s resolved – inconsistent remote function can be unsafe."
    ],
    "safety_hazards_and_warnings": [
      "Radio remotes, while convenient, can be a safety issue if misused. Always keep line-of-sight with the BMU when operating remotely and have an emergency stop ready (either on the remote or nearby).",
      "Interference can cause delays or command loss – never assume a command was received until you see the motion. In high-interference environments, prefer the hard-wired controls.",
      "If the remote stops working mid-operation, the default should be that the BMU stops (fail-safe). Ensure any heavy load is secure and switch to manual control if needed rather than repeatedly pressing remote buttons in frustration."
    ],
    "recommended_corrective_actions": [
      "Replace batteries or charge the remote transmitter. Use new batteries of the correct type and ensure contacts are clean.",
      "Reset the remote E-stop and power cycle the remote control and BMU receiver. Often a simple off/on can re-establish the connection if it was a glitch.",
      "If pairing was lost, re-bind the transmitter to the receiver per the manual instructions. Confirm on a safe test (e.g., a small movement) that the remote and BMU are communicating again.",
      "Should the remote receiver be faulty, get a replacement unit or have it repaired by the manufacturer. In the meantime, use the wired controls only.",
      "Document the incident especially if interference was identified, so future operations can account for that (for instance, avoid using remote near large radio sources or at certain times)."
    ],
    "parts_commonly_involved": [
      "Handheld remote transmitter",
      "Remote receiver and antenna on BMU",
      "Remote system E-stop circuit",
      "Remote/Local control mode switch"
    ],
    "manufacturer_references": [
      "CoxGomyl user manual – radio remote control section (battery check, range)",
      "Tractel BMU remote manual – troubleshooting communication faults"
    ],
    "source_urls": [
      "https://www.coxgomyl.com",
      "https://www.tractel.com"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Radio remote not working'.",
      "The app could first ask if wired controls work to differentiate remote issues.",
      "This pattern addresses common user errors (battery, E-stop) first, which solves many cases."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with wired pendant controls",
    "subsystem": "Electrical controls (pendant)",
    "symptom_title": "Pendant control unresponsive or erratic",
    "symptom_details": [
      "Wired pendant (handheld controller with cable) fails to operate some or all functions",
      "One or more buttons on pendant do nothing, while others work (e.g., hoist down works but hoist up does not)",
      "Sometimes movement is intermittent when bending the cable, suggesting a wiring issue"
    ],
    "typical_root_causes": [
      "Damaged pendant cable – internal conductor break or short, often near the strain relief or plug, causing loss of control signal for certain functions",
      "Worn or stuck pendant switch – a specific button might have failed due to wear (contacts not closing)",
      "Connector issue – the plug/socket where the pendant connects to the BMU may be loose or corroded, leading to intermittent contact",
      "Selector switch conflict – if there's a transfer between remote/panel control and pendant, the system might not be properly switched to pendant mode"
    ],
    "diagnostic_checks_step_by_step": [
      "1) If safe to do so, test the suspect functions from an alternate control (e.g., roof panel). Confirm that the BMU itself can hoist up/down or slew from another station. If yes, the issue is isolated to the pendant.",
      "2) Do a quick function check on the pendant: see if any button works. If only certain directions or speeds fail, note the pattern (often it's one wire in common). For example, if all 'up' functions fail but 'down' work, likely the common return for 'up' is broken.",
      "3) Inspect the pendant cable externally: look for cuts, pinched sections, or a stretched coil cord. Pay attention to the ends where cable meets the pendant and the plug. Often, bending the cable at these ends while pressing a button can momentarily reconnect a broken wire – if movement flickers on, you've found the break area (do this with caution).",
      "4) Check the pendant connector: unplug it (power off ideally) and look for bent pins or corrosion. Clean the pins and ensure it seats firmly when re-plugged. If the pendant has a selector switch (e.g., Off/On), make sure it's fully engaged.",
      "5) Open the pendant control box (if competent to do so) to examine the internal wiring and switches. A wire may have come loose from a terminal or a button may be mechanically jammed. Use a multimeter to check continuity of each switch when pressed.",
      "6) As a temporary measure, you might swap to a spare pendant (if available) to continue operations. Tag out the faulty pendant for repair.",
      "7) For a long-term fix, replace the damaged cable or entire pendant unit. On repair, strain reliefs should be properly set to avoid recurrence of cable break."
    ],
    "safety_hazards_and_warnings": [
      "Losing control of some motions can be dangerous if, for instance, you cannot stop or reverse in time. If any control is unresponsive, stop using the pendant until fixed – resort to an emergency stop or alternate control method instead of risking partial control.",
      "Never yank or sharply pull the pendant cable; this can not only break wires further but could also inadvertently trigger motions if wires short. Secure the cable properly during use to avoid damage (no hanging up with tension).",
      "If opening the pendant, ensure the BMU is fully isolated – you don't want to accidentally short control wires and cause movement. The pendant typically has low voltage control, but errant commands can still move the BMU."
    ],
    "recommended_corrective_actions": [
      "Repair or replace the pendant cable: if a specific core is broken, a skilled technician can splice or rewire the pendant, but replacing with a new cable assembly is often more reliable.",
      "Replace faulty pushbutton switches in the pendant if they don't make contact (use manufacturer supplied parts to maintain IP rating and durability).",
      "Clean and lubricate (with electrical contact cleaner) the pendant connector. Replace the connector if pins are damaged.",
      "Implement better strain relief or cable support. For example, ensure the cable isn't sharply bending at the plug or pendant entrance. Adding a spring guard or clamp can extend its life.",
      "Test all functions with the repaired/new pendant thoroughly: each direction, speed (if dual speed), and emergency stop on the pendant. Confirm also that switching between pendant and other control stations works as intended."
    ],
    "parts_commonly_involved": [
      "Pendant cable and plug",
      "Pendant pushbutton switches",
      "Cable strain relief gland",
      "Control transfer circuits (if any)"
    ],
    "manufacturer_references": [
      "Manufacturer's spare parts catalog for pendants (to get correct cable/switch replacements)",
      "BMU electrical schematic – pendant wiring diagram for troubleshooting reference"
    ],
    "source_urls": [
      "https://www.hoistsdirect.com/hoist-troubleshooting",
      "https://www.tractel.com"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Pendant control issues'.",
      "In-app, might ask which functions are failing to help pinpoint likely broken wire.",
      "Key is to direct user to check cable and connectors straightforwardly first."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "Older Manntech BMUs with hydraulic drives (jib or telescoping)",
    "subsystem": "Hydraulic system",
    "symptom_title": "Hydraulic movement inoperative (cylinder not moving)",
    "symptom_details": [
      "A hydraulic function (like jib luff or telescopic mast) does not move at all when activated",
      "No sound of fluid movement; the hydraulic pump may run (motor noise) but no resulting action, or pump may not start at all",
      "Could affect all hydraulic motions if pump is not building pressure, or a single cylinder if a valve is stuck"
    ],
    "typical_root_causes": [
      "Low hydraulic fluid level or air in system – pump cavitating (spinning without fluid), thus no pressure generation",
      "Hydraulic pump motor or coupling failure – the electric motor driving the pump isn't running or the pump is not turning with the motor",
      "Solenoid valve not opening – the control valve for that cylinder might be stuck closed or its solenoid not energizing (electrical fault)",
      "Pressure relief valve stuck open – if the relief valve is jammed, any pressure immediately dumps back to tank, preventing movement"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Listen and observe: when the hydraulic function is engaged, does the pump motor start? If yes, note if it sounds like it's under load or just free running (a high-pitched whine could indicate cavitation). If no motor sound, focus on electrical control to the pump.",
      "2) Check hydraulic oil level: ensure the reservoir has the proper amount of fluid. Low fluid can cause pump suction loss. Top up with the specified hydraulic oil if below minimum, but also check for leaks that led to the low level.",
      "3) Inspect for obvious leaks or hose ruptures – a major leak might depressurize the system and also create a mess. If found, do not run the pump until repaired and refilled.",
      "4) Verify the electric circuit: is the hydraulic pump motor contactor pulling in when command is given? If not, examine electrical issues (fuse, overload relay tripped, or control signal not sent). Reset any tripped overload for the motor, but monitor in case the motor is jammed.",
      "5) If the pump runs but no motion, gently crack open (slightly loosen) a pressure test port or a fitting on the output (with extreme caution, proper PPE, and while at zero command) to see if any pressure is present. Typically use a pressure gauge if available. No pressure suggests pump or relief issue.",
      "6) If a single function fails (e.g., luff down doesn't work but luff up does), suspect a specific valve. Locate the directional control valve for that motion and listen or feel if it 'clicks' when solenoid is energized. If not, electrical issue to that solenoid; if yes but still no flow, valve could be stuck.",
      "7) For a stuck valve, sometimes tapping it lightly with a screwdriver handle can free it (ensure power off and no command active). If it frees, cycle the function to get fresh oil through. Plan to replace or clean that valve soon.",
      "8) After any intervention, test the hydraulic motions without load first. If movement returns, cycle fully to purge air (especially if fluid was added)."
    ],
    "safety_hazards_and_warnings": [
      "High pressure hazard: even small hydraulic systems operate at high pressure. Never put your hands near a leaking jet of hydraulic fluid – it can penetrate skin. Always depressurize (if possible) before loosening fittings.",
      "Ensure the BMU is secured and won't suddenly move when hydraulics engage. A stuck cylinder could suddenly jerk free. Keep clear of the jib or moving parts during troubleshooting.",
      "Using hands to feel solenoids or tapping valves must be done carefully to avoid pinch points. And always isolate the machine electrically when inspecting wiring or valves closely."
    ],
    "recommended_corrective_actions": [
      "Refill hydraulic oil to proper level and bleed air from the system (via bleed screws on cylinders or cycling motions gently) so the pump can pressurize properly.",
      "Repair any hydraulic leaks found, then test pressure. Replace faulty components: if the pump is not building pressure, it may need overhaul or replacement. If a relief valve was stuck, clean or replace it.",
      "Replace or repair solenoid coils and valves that do not actuate. A burned-out coil can be swapped, and a sticking valve can be dismantled and cleaned by a hydraulic specialist.",
      "Once fixed, do a full functional test under normal load. Verify pressure reaches required level (using test gauges) and that each hydraulic motion is smooth and responds to controls appropriately.",
      "Implement regular checks of hydraulic fluid and filter changes to prevent recurrence (contaminants cause a lot of valve sticking issues)."
    ],
    "parts_commonly_involved": [
      "Hydraulic pump and motor unit",
      "Hydraulic oil reservoir & filter",
      "Directional control valves (solenoids)",
      "Relief valves and pressure gauges",
      "Hydraulic hoses and cylinders"
    ],
    "manufacturer_references": [
      "Manntech Service Manual (older models) – Hydraulic circuit diagrams and troubleshooting",
      "Bosch-Rexroth (or relevant) hydraulic valve manual – for maintenance of directional valves"
    ],
    "source_urls": [
      "https://www.manntech.com",
      "https://www.hydraulicspneumatics.com/failure-analysis/article/21884541/10-troubleshooting-tips-for-hydraulic-systems"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Hydraulic function not moving'.",
      "Likely used in app if user indicates a hydraulic-driven motion is dead.",
      "Can refine to check if pump runs or not, possibly via a follow-up question."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "BMUs with hydraulic luffing cylinders",
    "subsystem": "Hydraulic system",
    "symptom_title": "Jib slowly drifts down (hydraulic leak-down)",
    "symptom_details": [
      "Over time, the jib arm lowers itself without command, or cannot hold a set angle (gradually creeping downward)",
      "Operators may notice they have to correct the jib position frequently, or it won't stay fully luffed up",
      "Little to no external oil leakage may be visible, making it a subtle fault until significant drift is observed"
    ],
    "typical_root_causes": [
      "Internal leakage in hydraulic cylinder – worn piston seals allowing fluid to bypass internally, so the cylinder can't hold position under load",
      "Leaky control valve – the valve spool or checks are not sealing, letting oil bleed through back to tank slowly",
      "Thermal contraction of oil – slight drift might occur if temperature changes, but typically systems have counterbalance valves to prevent motion, so a failing counterbalance or holding valve could be involved",
      "Air in the system – compressibility can cause the jib to sag under load as the air bubbles slowly get compressed out"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Confirm the drift: measure how far the jib drops over a given time (e.g., mark initial angle and then after 10 minutes). Make sure no controls are being applied and no external forces (like wind) are causing it.",
      "2) Inspect for any external leaks at the cylinder, valves, and hoses. Even if seals are internally leaking, sometimes a minor external weep at the gland or valve block might be present. Address obvious leaks first (tighten fittings carefully or plan seal replacement).",
      "3) If safe, perform a drift test: fully luff up the jib, then isolate hydraulics (shut off pump). Observe the pressure on the cylinder's holding side if a gauge is present – a dropping pressure indicates internal leakage. Alternatively, close any manual shut-off valves to the cylinder (if equipped); if drift stops, the leak is upstream (valve), if it continues, likely the cylinder.",
      "4) Check the counterbalance (holding) valve on the cylinder (often mounted directly on the cylinder port). These valves prevent uncontrolled descent. If one is stuck partially open or not set correctly, the jib can creep. You might gently tap it or see if adjusting its setting is allowed (usually requires a specialist).",
      "5) For diagnostics, you can swap the control valve section with another (if identical functions) to see if drift moves, though this is rarely easy on BMUs. More practically, relieve pressure and remove the cylinder for bench testing of seal integrity if possible.",
      "6) Verify there's no unintended load on the jib causing slow force (like a heavy hose pulling). But generally, internal leakage is the culprit, requiring component repair."
    ],
    "safety_hazards_and_warnings": [
      "As the jib drifts, it can alter the platform position unexpectedly – ensure the platform doesn't contact the building or other structure as it lowers. Park the BMU with extra clearance if leaving it unattended with a drifting jib.",
      "Never try to counteract a drift by constantly luffing up without investigating – this can overheat the hydraulic fluid and mask a serious issue. The underlying fault should be fixed to maintain safe stable positions.",
      "When working on hydraulic cylinders or valves, support the jib mechanically (e.g., with a prop or crane) or fully lower it to a safe rest. Do not rely on the hydraulics or just the counterbalance valve when breaking into the circuit."
    ],
    "recommended_corrective_actions": [
      "Plan to replace or rebuild the hydraulic cylinder seals: an internal seal kit installation can restore its ability to hold pressure. This should be done by qualified personnel, ensuring the rod and barrel are not scored.",
      "Replace or service the counterbalance valve on the cylinder if suspected faulty. These valves often come as cartridges – swapping in a new one can eliminate leak paths.",
      "If the control valve bank has a leaking spool, either replace the specific valve section or the entire valve bank if modular. A spool lapping or O-ring replacement might be possible if parts are available.",
      "Bleed the hydraulic circuit thoroughly after any work. Ensure no air remains, as air can simulate a 'soft' leak-down. Test the jib by luffing it up and observing if it now holds position over time.",
      "After repairs, perform a load-hold test: position the jib with platform and nominal load, shut off the pump, and ensure the jib does not creep beyond permissible limits (per manufacturer spec, e.g., not more than a few millimeters in 10 minutes)."
    ],
    "parts_commonly_involved": [
      "Hydraulic luff cylinder seals",
      "Counterbalance/holding valve on cylinder",
      "Directional control valve (luff section)",
      "Hydraulic oil (for contamination leading to wear)"
    ],
    "manufacturer_references": [
      "Manntech maintenance guidelines – hydraulic cylinder inspection intervals",
      "Hydraulic components OEM manual (e.g., counterbalance valve datasheet for cracking pressure info)"
    ],
    "source_urls": [
      "https://mb.cision.com/Public/16065/3172484/ac49091d8b1f659e.pdf",
      "https://nearyou.imeche.org/docs/default-source/Hong-Kong/session-3.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Hydraulic jib creeps down'.",
      "This pattern would be used if user notes gradual jib descent.",
      "It emphasizes seal issues and is specific to hydraulic systems (Manntech likely since CoxGomyl largely electric drives in newer units)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "All BMUs with safety interlocks (parking tie-downs, access gates)",
    "subsystem": "Safety interlocks",
    "symptom_title": "BMU movement inhibited by interlock (tie-down or gate)",
    "symptom_details": [
      "BMU will not move because a required safety condition is not met; often indicated by an interlock sensor or message",
      "Examples: 'Tie-Down Engaged' warning prevents driving the trolley, or 'Cradle Gate Open' alarm stops all motion",
      "The unit remains unresponsive until the condition is resolved"
    ],
    "typical_root_causes": [
      "Parking or storm tie-down pins are still inserted/locked – the machine has a sensor detecting pin engagement and will not move until they are retracted",
      "Cradle access gate/door is open – an interlock switch on the cradle door open circuit stops machine movement for operator safety",
      "Jib or mast lock not released – mechanical lock (like a swing-in arm latch or telescopic mast pin) engaged with associated sensor reading 'not safe to move'",
      "Base enclosure door or roof hatch open – if the BMU has covers or hatches with switches, the control circuit may prevent motion while open"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Identify the source of interlock: check the control panel for any indication (some have specific lights or error codes for 'tie-down', 'gate', etc.). Also, do a visual walk-around: are all mechanical locks removed? Is the cradle gate securely closed and latched?",
      "2) If tie-down pins are used (common for parked BMUs to secure in high winds), ensure they are fully retracted and any manual pin handle is in the unlocked position. You may need to insert and remove it again to clear a stuck sensor.",
      "3) For cradle gates: physically close and latch the gate properly. Many have a limit switch that only closes circuit when fully latched. Listen for a click of the switch as you do so. If latch is damaged and won't engage the switch, you'll need to fix that alignment or tape the switch as a temporary measure (only for testing).",
      "4) Check less obvious interlocks: some systems require the cradle to be docked at roof or a lanyard attached to a point. Ensure any such conditions (like an anchor swing arm in place) are satisfied or sensor bypassed as per procedure if not in use.",
      "5) Look at the wiring of the suspected interlock switch: for instance, a tie-down sensor might be a proximity switch – make sure its target is in range. Adjust or clean it if dirty (metal shavings or rust could affect a prox sensor).",
      "6) Once the suspected interlock is addressed (pin out, gate closed, etc.), try the control again. If it still shows engaged, test the sensor by manually actuating it: e.g., press gate switch with finger (with someone ready at E-stop) to see if the circuit closes and allows movement. If yes, the alignment is off – adjust mechanism.",
      "7) After resolving, resume operation carefully, verifying that indeed the interlock was the only issue."
    ],
    "safety_hazards_and_warnings": [
      "Never disable or bypass an interlock permanently. They are there to protect against scenarios like moving with a pin in place (which could cause major damage) or operating with someone unsecured (gate open). Only bypass for testing with extreme caution, and restore it immediately.",
      "If you must move the BMU with a tie-down still engaged (in case it's physically stuck), do not force it – that can tip or damage the machine or building. Solve the tie-down release manually (even if it means grinding off a bent pin) rather than dragging the BMU.",
      "Open doors or hatches can cause falls or allow debris to drop during motion. Always double-check all covers are closed before operation. Implement a checklist to catch these interlocks before powering the BMU."
    ],
    "recommended_corrective_actions": [
      "Release all parking/tie-down devices according to procedure before attempting movement. Confirm via indicators that they show 'unlocked'.",
      "Properly close and latch the cradle gate or any access door. Replace or adjust the interlock switch if it's not registering when closed – these switches can fail or go out of alignment with heavy use.",
      "If an interlock switch is faulty and motion is needed urgently (e.g., to stow in safe position), a trained technician can temporarily bridge the circuit once safety is confirmed, but schedule immediate replacement of the sensor.",
      "Regularly inspect and maintain interlock mechanisms: keep them clean (free of paint, rust) and lubricated if needed so they engage/disengage fully. This prevents nuisance stoppages."
    ],
    "parts_commonly_involved": [
      "Tie-down pin sensors",
      "Cradle gate switch",
      "Jib lock sensor",
      "Access panel interlocks"
    ],
    "manufacturer_references": [
      "EN 1808:2015 – emphasizes interlocks for safety (e.g., parking and access gates)",
      "Manufacturer documentation on tie-down use (CoxGomyl/Manntech user guides)"
    ],
    "source_urls": [
      "https://www.coxgomyl.com/news/how-coxgomyl-bmus-deliver-on-safety-and-fall-protection/",
      "https://vertikal.net/en/news/story/29581/alimak-bmu-rescue"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Interlock prevents movement'.",
      "In app, might list specific ones like 'Parking pins still in' or 'Gate open'. All funnel here with similar troubleshooting.",
      "Important to ensure user checks all possibilities."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs equipped with wind speed safety sensors",
    "subsystem": "Safety device (wind sensor)",
    "symptom_title": "BMU prevented from operating due to high wind",
    "symptom_details": [
      "BMU motion is stopped or cannot start during high wind conditions",
      "A wind speed alarm may be indicated, or an anemometer reading exceeding threshold is noted",
      "BMU resumes function after winds subside or sensor is reset, indicating it was weather-related"
    ],
    "typical_root_causes": [
      "Wind speed above safe operating limit – the anemometer on the BMU or roof detected wind beyond the preset threshold (often ~15 m/s), triggering an automatic lockout",
      "Anemometer fault or false reading – a defective wind sensor giving an erroneously high reading or stuck at high value, keeping the interlock active",
      "Control system latch – some systems require manual reset after a wind alarm even once wind is reduced"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Observe the on-site conditions: if winds are indeed strong (near or above the limit), do not attempt to override – this is a deliberate safety measure. Wait until winds decrease to safe levels.",
      "2) Check the anemometer device (usually a small spinning cup or ultrasonic sensor on or near the BMU). Is it intact and freely spinning? If it's physically damaged or jammed (e.g., by debris or ice), that could cause a reading error. Clear any obstruction carefully if accessible (with the BMU parked safely).",
      "3) Read the wind speed value if available on the control panel or building management system. If it shows a high value while winds are actually low, suspect a sensor fault. In this case, and if immediate use is necessary, switch to a reduced mode or override only if procedure allows and with management approval.",
      "4) If the wind has dropped below the threshold, some systems require acknowledging the alarm. Locate the reset or override switch for the wind interlock (it might be keyed). Follow the manual: typically, you'd press a reset once conditions are normal and perhaps power cycle the control.",
      "5) Test operation briefly once you believe the interlock is reset and wind is safe. Start with a minor motion to ensure the BMU is responding. Keep an eye on the anemometer – if wind picks up or sensor triggers again, it will cut out motion for safety.",
      "6) If the anemometer is faulty, arrange for its repair or replacement promptly. As an interim, if absolutely necessary and approved, operations can proceed under strict monitoring of weather, but this should be under an engineered risk assessment because the automated safety is compromised."
    ],
    "safety_hazards_and_warnings": [
      "Working in high winds is extremely dangerous. The BMU can swing or collide with the building, and loads can become uncontrollable. Always heed wind alarms – they are often set according to standards (e.g., EN 1808) to protect against these risks.",
      "Never permanently disable a wind sensor. If a job must be done and wind is borderline, use extreme caution and a spotter, and consider postponing. The threshold is there to give a margin of safety.",
      "Be aware that even after winds calm, there can be gusts. Conditions can change rapidly. Resume work cautiously and keep monitoring the weather if near the cut-out threshold."
    ],
    "recommended_corrective_actions": [
      "If wind truly was high, simply resume operation when conditions improve below the cut-out level (no mechanical fix needed, just patience and safety first).",
      "For a sensor issue: replace or fix the anemometer. Sometimes cleaning it or tightening its connections can solve erratic readings. Calibrate the new sensor per manufacturer specs, ensuring the cut-out triggers at the correct wind speed.",
      "Update the control system or HMI if needed – some systems allow adjusting the wind threshold. Do not increase it beyond recommended values without engineering approval.",
      "Test the interlock: artificially spin the anemometer fast (or use a calibrator) to ensure it trips and then resets properly, verifying the safety function works as intended."
    ],
    "parts_commonly_involved": [
      "Wind speed sensor (anemometer)",
      "Wind alarm indicator circuit",
      "Safety PLC/relay logic for wind cut-out"
    ],
    "manufacturer_references": [
      "EN 1808:2015 – recommends max wind speeds for safe BMU operation (~12.5 m/s for platforms)",
      "Manufacturer guidelines on wind limits (Manntech/CoxGomyl manuals often state operational wind speeds)"
    ],
    "source_urls": [
      "https://www.coxgomyl.com/news/maintaining-safety-in-extreme-weather-conditions/",
      "https://www.tractel.com"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Wind cut-out active'.",
      "The app might ask current wind conditions to confirm. Could also cover sensor faults under this category.",
      "Ensures user knows not to circumvent without proper evaluation."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with VFD-controlled motors (hoist or travel drives)",
    "subsystem": "Electrical drive (VFD/PLC)",
    "symptom_title": "Drive fault trip (inverter error code displayed)",
    "symptom_details": [
      "A variable frequency drive (inverter) controlling a BMU motor (hoist or travel) has faulted and stopped the motion",
      "The control panel might display an error code (e.g., overcurrent, overspeed, undervoltage) or a drive fault light",
      "Typically occurs under heavy load or at start/stop of motion; requires reset before continuing"
    ],
    "typical_root_causes": [
      "Overcurrent trip – the drive detected current above its limit, often due to excessive load (e.g., hoist lifting near capacity or a jammed mechanism):contentReference[oaicite:55]{index=55}",
      "Overvoltage / regenerative trip – during lowering or braking, the DC bus voltage spiked (possibly due to insufficient braking resistor or sudden stop with heavy load)",
      "Motor overtemp or drive overtemp – long operation or high ambient caused thermal limit to be reached, drive shuts down to protect",
      "Supply issue – undervoltage or phase imbalance causing the drive to fault, or interference/noise causing a control fault"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Note the error code on the drive or HMI if available. This code is the best clue – e.g., 'OC' for overcurrent, 'OV' for overvoltage, etc. Record it for reference.",
      "2) Before resetting, remove the load or stress: if the hoist was overloaded or stuck, try to relieve it (e.g., ensure nothing is jammed, check that load is within limits). For travel drives, check wheels for obstructions causing high torque.",
      "3) Reset the drive fault: usually by pressing a reset on the panel or cycling the control power. Do not repeatedly reset without addressing cause – an immediate re-trip indicates an unresolved issue.",
      "4) If it was an overcurrent on hoist up, consider testing the hoist with no load or a lighter load to see if it still trips at the same point. If not, the prior load was likely near limit. If it still trips, the motor or drive might be faulty or brake dragging causing extra load.",
      "5) For overvoltage on lowering, check the brake resistor (if external) – it may be burnt out or disconnected, meaning energy has nowhere to go. Also, try lowering at a slower speed to reduce regen. Monitor DC bus if possible.",
      "6) For thermal faults, allow the unit to cool for 10-15 minutes. Ensure cooling fans on the drive are clean and working. High ambient temperature or direct sun on control box can exacerbate this – provide shade or ventilation if possible.",
      "7) Once adjustments (load reduction, component checks) are made, reset and run the drive under close watch. If it runs normally, still plan for a thorough check later. If it faults again with the same code, escalate to a specialist with the drive manual."
    ],
    "safety_hazards_and_warnings": [
      "When a drive faults, the motion stops abruptly – be prepared for sudden stops. Ensure operators are secured to prevent falls due to sudden jerks (especially on hoist motions).",
      "Don't repeatedly override or reset a drive without understanding the fault. Some faults (like repeated overcurrents) can damage the motor or drive if ignored. Address the root cause rather than forcing operations.",
      "Working inside a VFD panel is dangerous (high voltages persist). Only qualified electricians or technicians should test or replace drive components like resistors or check internal code settings."
    ],
    "recommended_corrective_actions": [
      "Reduce load or speed to prevent reoccurrence: if possible, split the load into smaller parts or use a slower speed setting for problematic motions to ease the drive stress.",
      "Test the braking resistor circuit for proper operation – replace resistor or drive module if it's not dissipating energy.",
      "If drive settings are adjustable, confirm they match motor specs (e.g., current limit, ramp times). A too-short decel time can cause overvoltage – extend deceleration time if feasible.",
      "Replace or repair components: a failing motor (with insulation issues) can cause overcurrent, likewise a failing drive could mis-read faults. Consider having both motor and drive checked if nuisance trips persist despite correct load.",
      "After changes, perform multiple test cycles in a controlled manner to ensure the fault is resolved. Keep a log of drive faults for trend analysis (if the drive has an event log, review it)."
    ],
    "parts_commonly_involved": [
      "Hoist VFD/inverter unit",
      "Dynamic braking resistor (for VFD)",
      "Motor temperature sensor (thermistor)",
      "Drive cooling fan and filters"
    ],
    "manufacturer_references": [
      "Manntech service bulletin – VFD fault codes and fixes (e.g., addressing overvoltage in hoist drives)",
      "Manufacturer VFD manual (Siemens/ABB/etc. depending on equipment) – troubleshooting specific codes"
    ],
    "source_urls": [
      "https://www.youtube.com/watch?v=Re9x7JxZm4E",
      "https://www.hoistsdirect.com/hoist-troubleshooting"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Drive fault code [X]'.",
      "The app could list common codes and their meaning. This pattern then provides general advice applicable to many drive trips.",
      "Important to correlate code to cause (maybe provide a lookup if app capable)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Electric hoist motors (CoxGomyl, Manntech standard hoists)",
    "subsystem": "Hoist drive",
    "symptom_title": "Hoist motor overheats and trips",
    "symptom_details": [
      "After extended use, the hoist stops working and may not respond until it cools down",
      "A thermal overload relay might trip, or a motor thermistor triggers a shutdown (often indicated by a warning light or message)",
      "This tends to happen during prolonged lifting or on hot days, and the hoist resumes function after a wait"
    ],
    "typical_root_causes": [
      "Excessive duty cycle – using the hoist continuously near its capacity, causing it to heat beyond its rated duty (e.g., doing too many consecutive lifts without rest)",
      "Brake dragging – a misadjusted or faulty brake can stay slightly engaged while hoisting, adding load and heat to the motor",
      "Ventilation issue – blocked cooling fins or a failed fan on the motor, reducing heat dissipation",
      "High ambient temperature or direct sun – raising motor temperature, especially if the BMU control box is also heating up"
    ],
    "diagnostic_checks_step_by_step": [
      "1) When a hoist thermal trip occurs, cease operations and allow the motor to cool. Do not try to bypass the thermal cut-out; it's preventing damage. Typically, a 15-30 minute cool-down might be needed before it automatically resets (or manually reset an overload relay).",
      "2) Investigate the cause: feel (carefully) or measure the motor casing temperature if possible (with a non-contact IR thermometer). If it's extremely hot to touch, it indeed overheated. Identify if you were overusing it – check the manual for duty cycle (e.g., 15 min operation per hour). Plan to give it more rest cycles if so.",
      "3) Check the hoist brake for dragging: after stopping, touch (without burning yourself) near the brake or look for smoke/odour. A hot brake can heat the motor. You may need to test by lifting a small load and observing if the motor struggles or there's brake squeal. If suspected, adjust brake clearance per spec.",
      "4) Ensure the motor's cooling path is clear: clean any dust from motor cooling fins or fans. If the BMU has a fan in the electrical panel for VFD or motor cooling, make sure it's working (you should hear it and feel airflow).",
      "5) Consider the environment: if operating in very hot weather, try scheduling work in cooler times of day or provide shade for the BMU motor and controls. Some BMUs have an over-temperature indicator – check if it's functioning and what temperature it reads.",
      "6) Once cooled, reset any manual overload in the control panel (if present) and test the hoist with no load briefly to ensure it's running. Monitor it closely during the next heavy use – if it overheats again quickly, a deeper issue (like internal motor winding problem) may exist and needs professional evaluation."
    ],
    "safety_hazards_and_warnings": [
      "Overheated motors can be a fire risk if extreme. If you ever see smoke or smell burning insulation, hit the emergency stop and have an extinguisher ready. Do not open panels until power is isolated – components inside could be very hot.",
      "Avoid touching the motor or brake immediately after operation – they can cause burns. Use proper gloves if you need to feel for heat indirectly. Also, an overheated brake might suddenly lock harder (due to expansion) – be cautious with loads suspended.",
      "Frequent thermal trips can deteriorate motor insulation over time. It's a sign that usage is beyond design. Re-evaluate the operation plan or equipment capacity for safety; repeated overheating might eventually cause motor failure mid-job."
    ],
    "recommended_corrective_actions": [
      "Allow motor to fully cool, then reduce the duty cycle: operate in shorter bursts with adequate rest. Educate operators on not pushing the equipment beyond its rated duty factor.",
      "Adjust or repair the hoist brake if dragging. Ensure the brake releases fully when powered; replace brake pads/springs if needed so it doesn't bind.",
      "Improve cooling: clean vents, consider adding a fan or sunshade. In some cases, upgrading to a higher thermal class motor or adding a thermal cut-out with an earlier alarm can help prevent nuisance trips.",
      "If the environment is the cause (very hot climate), consult the manufacturer about using a different oil in gearbox or any tropicalization kits (some provide higher temp tolerances).",
      "If the motor consistently overheats under normal loads, it may be weakened (winding damage). Plan a motor insulation test and possible rewind or replacement during off-duty period."
    ],
    "parts_commonly_involved": [
      "Hoist motor and fan",
      "Motor thermal sensor (thermostat/thermistor)",
      "Motor brake assembly (for drag)",
      "Thermal overload relay in control panel"
    ],
    "manufacturer_references": [
      "OEM BMU manual – motor duty cycle and thermal overload settings (CoxGomyl technical data)",
      "Electrical maintenance guide – checking motor insulation and cooling (e.g., ABB motor thermal troubleshooting note)"
    ],
    "source_urls": [
      "https://www.allmanlift.com/news/common-faults-and-solution-for-electric-hoist.html",
      "https://www.mithoist.com/guide-why-your-chain-hoist-isnt-lifting-properly/"
    ],
    "region_or_market_if_relevant": "hot climates, high-rise with direct sun",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Hoist overheats/stops'.",
      "In-app it might ask if there's an error or just stops until cooled, to differentiate from drive fault.",
      "This pattern raises awareness of duty cycle – a common oversight by operators."
    ]
  },
  {
    "manufacturer": "Tractel",
    "model_or_range": "Traction hoist BMUs (Tirak hoist systems)",
    "subsystem": "Hoist drive",
    "symptom_title": "Hoist motor runs but cradle does not rise (rope slipping)",
    "symptom_details": [
      "When the hoist is powered, the motor and drive sheave run, but the platform doesn't elevate (or does so very slowly)",
      "There may be a screeching or rubbing noise from the hoist as the wire rope slips on the traction drum",
      "No overload or slack rope devices are triggered initially, but the platform isn't moving as expected"
    ],
    "typical_root_causes": [
      "Insufficient friction between rope and traction drum – rope could be oily, worn, or the drum lining is worn smooth, causing slip under load",
      "Overloading beyond traction capacity – the load might exceed what the friction can lift, so the drum slips instead of hoisting (even if within rope's safe load, traction has its own limit)",
      "Incorrect rope type or diameter – if a replacement rope with slightly smaller diameter was installed, it can slip more easily on the sheave",
      "Hoist tensioning springs or rollers (if any) failing – many traction hoists have a spring-loaded roller to press the rope onto the drum; if that tension is lost, rope grip reduces"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately stop the hoist to prevent excessive rope wear. Do not keep running a slipping hoist, as it polishes the rope and drum, worsening the problem.",
      "2) Inspect the rope condition along its length: if it's greasy or contaminated, that could reduce friction. Also check for glazing (shiny flattened areas) which indicate prior slipping. A clean, dry rope is needed for proper traction.",
      "3) Clean the rope and drum: use a rag with a mild solvent (that doesn't damage steel or drum lining) to wipe off oil or grime from the rope and drive sheave. Ensure no solvent remains that could act as lubricant. Roughen the drum lining slightly with fine abrasive if it's very smooth (only as a short-term measure).",
      "4) Check the load being lifted relative to the hoist's traction capacity. Even if under the rated SWL, traction hoists sometimes have a separate 'effective traction' limit. Remove some weight and test again – if it grips with less load, likely it was at friction capacity limit. Investigate if something is adding friction (like guides binding) that makes it effectively heavier.",
      "5) Look at the rope compression mechanism: for example, Tirak hoists have a spring-loaded pressure roller. Ensure that roller is contacting the rope firmly. If the spring is broken or out of adjustment, it won't press the rope sufficiently. Repair or tighten it as per the service manual.",
      "6) If rope slippage still occurs after cleaning and normal load, the rope or drum might be at end of life. Plan to replace the rope (and possibly the drum liner). Meanwhile, operate with extreme caution: avoid critical lifts and keep a secondary safety like the overspeed brake armed (which it is).",
      "7) After any action, test the hoist with a very light load first to see if rope moves consistently. Gradually increase load to verify grip. If any slippage is observed again, stop and escalate to a thorough maintenance overhaul."
    ],
    "safety_hazards_and_warnings": [
      "Slipping means the platform isn't being held securely by the hoist friction. In a severe slip, the overspeed brake should catch the load, but do not rely on that repeatedly – it’s a last resort. Stay clear of underneath the platform; ensure harnesses are on in case of jolt.",
      "Avoid shock loading a slipping hoist. If it suddenly catches, it can jerk the platform. Communicate with any personnel to brace themselves and always keep the safety brake functional in case of full loss of traction.",
      "Using any chemical on the rope/drum for cleaning must be done carefully – flammable solvents on a hot drum could ignite, and residue could either reduce friction or trap grit and wear the drum. Follow manufacturer cleaning guidelines."
    ],
    "recommended_corrective_actions": [
      "Replace the wire rope if it's worn or polished. A fresh rope with the correct diameter and construction will restore friction levels specified by Tractel (or relevant manufacturer).",
      "If available, renew the traction drum or its lining (some have replaceable liners). Over time, the groove profile can wear or become too smooth. A new one ensures proper friction coefficient.",
      "Adjust or replace the pressure roller assembly: ensure the tension on the rope as it wraps the drum meets spec. Springs can sag over time and might need adjustment or replacement.",
      "Review operation procedures: ensure operators don't exceed recommended max loads and avoid sudden stops that can cause slip. If environment causes rope to oil up (e.g., pollution), implement a routine rope cleaning schedule.",
      "Post-maintenance, conduct a load test near SWL to confirm no slippage. Also test the slack/overspeed devices again because those may have engaged during slips (reset if needed)."
    ],
    "parts_commonly_involved": [
      "Traction hoist drive sheave (capstan)",
      "Pressure roller and spring",
      "Wire rope (traction type)",
      "Traction drum lining or groove profile"
    ],
    "manufacturer_references": [
      "Tractel Tirak maintenance manual – rope and drum care instructions",
      "Case study: rope slippage incident analysis (if available from industry sources)"
    ],
    "source_urls": [
      "https://source.thenbs.com/product/kliper-bmu-cradle-bmu-workcage-scout/tk7JfLzRBh7rhHkh4gLUGE/tk7JfLzRBh7rhHkh4gLUGE",
      "https://www.nantecrane.com/a-guide-to-common-wire-rope-hoist-faults-and-their-solutions/"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Hoist runs but no lifting (rope slipping)'.",
      "Likely applies to traction hoists (Tractel), included as distinct from motor/brake issues.",
      "Warn user strongly not to push through a slip; it's a critical maintenance issue."
    ]
  }
]
