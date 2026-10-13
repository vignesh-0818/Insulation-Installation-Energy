/**
 * ThermaGuard™ - Services Data Dictionary & Dynamic Page Engine
 * Comprehensive data specifications, methodologies, pricing schedules, and FAQs for all 6 services
 */

const THERMAGUARD_SERVICES = {
  'attic': {
    id: 'attic',
    name: 'Attic Insulation & Top-Off',
    title: 'Attic Insulation & Top-Off',
    subtitle: "Why The Attic Is Your Home's Largest Thermal Vulnerability",
    badgeTag: 'Highest ROI',
    rValueBadge: 'R-49 to R-60',
    coverImage: 'images/service-attic-insulation.jpg',
    coverAlt: 'Technician Installing and Measuring Blown-In Attic Fiberglass Insulation',
    savingsHighlight: 'Saves 20-30%',
    savingsIcon: 'bi-graph-down-arrow',
    overviewHtml: `
      <p class="text-muted">
        In standard residential architecture, hot air naturally rises toward the top of the house via convection, creating a pressure dynamic known as the <em>stack effect</em>. During winter months, warm conditioned air searches for every electrical penetration, duct chase, and uninsulated ceiling drywall seam, escaping directly into the cold attic.
      </p>
      <p class="text-muted">
        During summer, the dynamic reverses: an under-insulated attic space can reach temperatures exceeding 140°F (60°C), radiating intense heat down through your ceilings into bedrooms and forcing air conditioning units to run continuously. Upgrading to R-49 or R-60 Virgin Loose-Fill Fiberglass or treated cellulose creates a dense thermal blanket that stops radiant and conductive heat migration dead in its tracks.
      </p>
    `,
    specs: [
      { label: 'Target R-Value', value: 'R-49 (16.5") to R-60 (20")', icon: 'bi-check-circle-fill' },
      { label: 'Material Composition', value: 'Formaldehyde-Free Virgin Fiberglass', icon: 'bi-check-circle-fill' },
      { label: 'Flame Spread Index', value: 'Class A (ASTM E84 compliant)', icon: 'bi-check-circle-fill' },
      { label: 'Air Permeance', value: 'Zero Stack Infiltration Post-Seal', icon: 'bi-check-circle-fill' }
    ],
    methodologyTitle: 'Our 5-Stage Attic Engineering Methodology',
    methodologyIntro: 'Simply adding fresh insulation over an existing, leaky attic fails to fix air infiltration. We follow an engineered protocol:',
    steps: [
      {
        num: 1,
        title: 'Diagnostic Inspection & Attic Hatch Sealing',
        desc: 'We measure existing insulation depth, check for roof moisture leaks, and install weatherstripped, insulated attic tent covers over access staircases.'
      },
      {
        num: 2,
        title: 'High-Expansion Foam Air Sealing (Top Plates & Chases)',
        desc: 'Before blowing insulation, our technicians seal every top-plate seam, electrical box, chimney chase, and recessed can light with fire-rated expanding sealant.'
      },
      {
        num: 3,
        title: 'Ventilation Baffle & Eave Chute Installation',
        desc: 'We install heavy-duty AccuVent baffles at each rafter bay to guarantee unobstructed intake airflow from exterior soffits and prevent wind-washing.'
      },
      {
        num: 4,
        title: 'Engineered Loose-Fill Pneumatic Blowing',
        desc: 'Using calibrated computerized blower rigs, we distribute formaldehyde-free loose-fill fiberglass evenly to your target depth (R-49 to R-60).'
      },
      {
        num: 5,
        title: 'Infrared Verification & Certificate of Completion',
        desc: 'We conduct a post-installation thermal scan, verify depth with visual rulers, and supply pre-filled documentation for federal IRA 25C tax credits.'
      }
    ],
    pricingScheduleTitle: 'Attic Investment & Pricing Schedule',
    pricingScheduleRows: [
      { name: 'Attic Air Sealing Prep Package', scope: 'Chimney chase flashing, wire penetrations, top plates', unit: 'Up to 1,500 sq ft', price: '$650 - $950' },
      { name: 'Blown-In Top-Up (R-19 to R-49)', scope: 'Formaldehyde-free virgin fiberglass (approx. 10" added)', unit: 'Per Sq Ft', price: '$1.45 - $1.85' },
      { name: 'Deep Retrofit (R-0 to R-60)', scope: 'Old insulation HEPA removal, air seal, and R-60 blow', unit: 'Per Sq Ft', price: '$2.80 - $3.40' },
      { name: 'Insulated Attic Stair Cover Tent', scope: 'R-13 reflective radiant zipper enclosure with draft gasket', unit: 'Per Unit', price: '$180 - $240' }
    ],
    faqs: [
      {
        q: 'Do you need to remove my existing attic insulation first?',
        a: 'If your existing insulation is dry, mold-free, and undamaged by rodents, it does not need to be removed. We can air-seal key bypasses and blow the new high-performance insulation directly on top. If old insulation has water damage or rodent droppings, our HEPA vacuum extraction crew will safely remove and dispose of it first.'
      },
      {
        q: 'Will blown-in insulation settle over time?',
        a: 'Modern virgin loose-fill fiberglass has negligible settling (less than 1–2%). Cellulose settles slightly (approximately 10–15% over its initial months), which is why our installers calculate and blow the "initial installed thickness" to guarantee the specified permanent settled R-value.'
      },
      {
        q: 'How much can I claim in federal tax credits for attic insulation?',
        a: 'Under Section 25C of the Federal Inflation Reduction Act (IRA), homeowners can claim 30% of the material costs for qualifying attic insulation and air sealing improvements, capped at $1,200 annually. ThermaGuard provides pre-filled IRS Form 5695 documentation.'
      }
    ],
    sidebarBookingTitle: 'Book an Attic Evaluation',
    sidebarBookingDesc: 'Get an on-site depth measurement and infrared thermal camera inspection.',
    sidebarFieldLabel: 'Approx. Attic Sq Ft',
    sidebarFieldPlaceholder: 'e.g. 1800'
  },

  'spray-foam': {
    id: 'spray-foam',
    name: 'Spray Foam Insulation',
    title: 'Closed-Cell & Open-Cell Spray Foam Insulation',
    subtitle: 'The Ultimate Seamless Air Barrier, Moisture Cap, and Structural Thermal Armor',
    badgeTag: 'Superior Vapor Seal',
    rValueBadge: 'R-6.8 / Inch',
    coverImage: 'images/service-spray-foam.jpg',
    coverAlt: 'Professional Spray Polyurethane Foam Application on Rafters and Wall Cavities',
    savingsHighlight: 'Class II Vapor Barrier',
    savingsIcon: 'bi-shield-lock-fill',
    overviewHtml: `
      <p class="text-muted">
        Polyurethane spray foam expands up to 100 times its liquid volume in mere seconds, penetrating every microscopic fissure, irregular rim joist, rafter cavity, and metal seam. Unlike traditional fibrous insulations that allow convective airflow through gaps, spray foam forms a 100% monolithic, airtight envelope that adheres permanently to building framing.
      </p>
      <p class="text-muted">
        We install both <strong>2.0 lb High-Density Closed-Cell Foam</strong> (R-6.8/inch) — which provides unmatched structural shear strength, an impermeable Class II vapor barrier, and zero water permeability — and <strong>0.5 lb Open-Cell Foam</strong> (R-3.8/inch) for optimal acoustic sound attenuation and cost-effective unvented roof deck assemblies.
      </p>
    `,
    specs: [
      { label: 'Thermal Resistance', value: 'R-6.5 to R-7.0 / Inch (Closed-Cell)', icon: 'bi-check-circle-fill' },
      { label: 'Air Permeance', value: 'ASTM E2178 Impermeable Air Barrier', icon: 'bi-check-circle-fill' },
      { label: 'Vapor Retarder', value: 'Class II Vapor Barrier (<1.0 Perm)', icon: 'bi-check-circle-fill' },
      { label: 'Compressive Strength', value: '25+ PSI Structural Racking Rigidity', icon: 'bi-check-circle-fill' }
    ],
    methodologyTitle: 'Our 5-Stage Spray Foam Application Protocol',
    methodologyIntro: 'Polyurethane spray foam chemistry requires precise temperature, ratio, and safety parameters:',
    steps: [
      {
        num: 1,
        title: 'Substrate Moisture & Temperature Verification',
        desc: 'We measure framing moisture with calibrated digital pin meters (must be <18%) and check substrate temperatures to ensure permanent polymer adhesion.'
      },
      {
        num: 2,
        title: 'Containment Masking & Controlled Ventilation',
        desc: 'Windows, finished surfaces, and HVAC ducts are sealed in poly masking. Mobile high-CFM negative-air exhaust units are engaged throughout the job.'
      },
      {
        num: 3,
        title: 'Mobile Rig Pre-Heating & Dynamic Ratio Control',
        desc: 'Our computerized Graco proportioner rigs heat Part A (Iso) and Part B (Resin) to exact manufacturer temperatures (120°F–135°F) at balanced 1:1 pressures.'
      },
      {
        num: 4,
        title: 'Multi-Pass Precision Lift Application',
        desc: 'Technicians spray closed-cell foam in controlled passes (up to 2 inches per pass) to prevent exothermic heat buildup while achieving specified R-value.'
      },
      {
        num: 5,
        title: 'Thermal Imaging Inspection & 24-Hour Re-Entry Signoff',
        desc: 'We verify cured thickness with depth gauges, scan for thermal bypasses with FLIR cameras, and ensure zero odor before releasing occupancy.'
      }
    ],
    pricingScheduleTitle: 'Spray Foam Investment & Pricing Schedule',
    pricingScheduleRows: [
      { name: 'Open-Cell Spray Foam (Roofline/Walls)', scope: '0.5 lb density, ideal for acoustic dampening & unvented attics', unit: 'Per Board Foot', price: '$0.55 - $0.75' },
      { name: 'Closed-Cell Spray Foam (2-Inch Lift)', scope: '2.0 lb density, R-14 vapor-tight barrier on masonry/framing', unit: 'Per Sq Ft', price: '$2.50 - $3.25' },
      { name: 'Basement Rim Joist Perimeter Package', scope: 'Complete thermal & air seal of exterior sill plate perimeter', unit: 'Whole Home (avg)', price: '$850 - $1,400' },
      { name: 'Commercial Metal Deck / Pole Barn', scope: 'High-yield condensation control & thermal envelope cap', unit: 'Per Sq Ft', price: '$2.20 - $2.90' }
    ],
    faqs: [
      {
        q: 'What is the main difference between open-cell and closed-cell spray foam?',
        a: 'Closed-cell foam has sealed microscopic cells filled with a blowing agent gas, giving it a much higher R-value (R-6.8/in) and making it waterproof and structural. Open-cell foam has sponge-like cells, lower density (R-3.8/in), and is water permeable, but excels at soundproofing interior walls and conditioned rooflines at lower material cost.'
      },
      {
        q: 'How long do we need to stay out of the house after spraying?',
        a: 'For interior residential retrofits, EPA safety standards require a 24-hour evacuation period while the foam cures and negative-air exhaust fans scrub the indoor air. After 24 hours, the foam is completely inert, non-toxic, and odorless for the life of the building.'
      },
      {
        q: 'Can spray foam be applied to metal building ceilings?',
        a: 'Yes! Closed-cell spray foam is the premier solution for commercial pole barns, metal warehouses, and steel shops because it adheres directly to corrugated metal purlins and completely prevents winter condensation drippage ("indoor rain").'
      }
    ],
    sidebarBookingTitle: 'Book a Spray Foam Evaluation',
    sidebarBookingDesc: 'Get a professional on-site board-foot takeoff and structural envelope review.',
    sidebarFieldLabel: 'Approx. Surface Sq Ft',
    sidebarFieldPlaceholder: 'e.g. 1200'
  },

  'air-sealing': {
    id: 'air-sealing',
    name: 'Whole-Home Air Sealing',
    title: 'Whole-Home Precision Air Sealing & Blower Door Testing',
    subtitle: 'Eliminating The Hidden Thermal Bypasses That Bleed Conditioned Air 24/7',
    badgeTag: 'Draft Stopper',
    rValueBadge: 'ASTM E779 Tested',
    coverImage: 'images/service-air-sealing.jpg',
    coverAlt: 'Technician Air Sealing Attic Floor Bypasses and Can Lights with Expanding Foam',
    savingsHighlight: 'Reduces CFM Leakage',
    savingsIcon: 'bi-wind',
    overviewHtml: `
      <p class="text-muted">
        In an average American residence, the cumulative air gaps around electrical junction boxes, recessed lighting fixtures, dropped soffits, plumbing stacks, and chimney chases equal a <strong>2-foot by 2-foot open window left unlatched all winter long</strong>. Traditional insulation does not stop air; fiberglass batts act like an air filter, letting air flow right through.
      </p>
      <p class="text-muted">
        Our building science crew uses industrial-grade Minneapolis Blower Door systems to depressurize the house to -50 Pascals. With the building under negative pressure, our technicians trace invisible drafts with calibrated thermal cameras and smoke pencils, methodically sealing every leakage pathway with elastomeric mastics and expanding polyurethane foam.
      </p>
    `,
    specs: [
      { label: 'Testing Protocol', value: 'ASTM E779 & BPI-1200 Calibrated', icon: 'bi-check-circle-fill' },
      { label: 'Leakage Reduction', value: 'Average 25% to 40% CFM50 Drop', icon: 'bi-check-circle-fill' },
      { label: 'Sealant Chemistry', value: 'Class 1 Fire-Rated Polyurethane', icon: 'bi-check-circle-fill' },
      { label: 'Duct Tightness', value: '<4 CFM25 per 100 sq ft Duct Leakage', icon: 'bi-check-circle-fill' }
    ],
    methodologyTitle: 'Our 5-Stage Air Sealing & Depressurization Workflow',
    methodologyIntro: 'We combine diagnostic manometer airflow science with precision sealing execution:',
    steps: [
      {
        num: 1,
        title: 'Baseline Blower Door Depressurization',
        desc: 'We seal exterior doors and install our nylon-frame blower door system to measure starting baseline Air Changes per Hour (ACH50).'
      },
      {
        num: 2,
        title: 'Infrared & Smoke Tracer Diagnostic Run',
        desc: 'Under 50 Pascals pressure, infrared thermal cameras reveal cold air streaks entering behind trim, knee walls, floor sills, and attic top plates.'
      },
      {
        num: 3,
        title: 'Attic Top-Plate & Chase Fire-Block Sealing',
        desc: 'Technicians seal every interior wall top-plate seam, open wire penetration, and pipe stack using fire-rated expandable polyurethane foams.'
      },
      {
        num: 4,
        title: 'Recessed Lighting & Soffit Cover Isolation',
        desc: 'We fabricate airtight Tenmat thermal covers over can lights and seal dropped soffits with rigid foamboard and mastic tape.'
      },
      {
        num: 5,
        title: 'Post-Seal Verification & Combustion Safety Test',
        desc: 'We run a confirmatory post-audit blower door test to quantify CFM reduction and verify furnace and water heater draft venting safety.'
      }
    ],
    pricingScheduleTitle: 'Air Sealing Investment & Pricing Schedule',
    pricingScheduleRows: [
      { name: 'Attic Floor Air Sealing Package', scope: 'Complete top-plate, wire, pipe, and dropped soffit foaming', unit: 'Homes to 2,500 sq ft', price: '$850 - $1,350' },
      { name: 'Pre & Post Blower Door Test Audit', scope: 'Includes certified report with ACH50 and CFM leakage rates', unit: 'Per Assessment', price: '$350 - $450' },
      { name: 'HVAC Duct System Mastic Sealing', scope: 'Aerosol/mastic sealing of leaky supply and return sheet metal', unit: 'Per Duct System', price: '$600 - $950' },
      { name: 'Attic Hatch Weatherstrip & Cover Box', scope: 'R-15 rigid foam box with compression rubber bulb gasket', unit: 'Per Access Point', price: '$150 - $220' }
    ],
    faqs: [
      {
        q: 'Can a home ever be sealed "too tight"?',
        a: 'A properly sealed home must maintain good indoor air quality. During our blower door test, we calculate your home\'s Building Airflow Standard (BAS). If the air sealing brings the home below the ASHRAE 62.2 threshold, we install an Energy Recovery Ventilator (ERV) or bathroom spot ventilation to provide controlled, fresh, filtered air without draft penalties.'
      },
      {
        q: 'Why should I air seal before adding new insulation?',
        a: 'Insulation resists conductive heat transfer, but it has virtually zero resistance to air movement. If warm air rises through unsealed holes into the attic, it bypasses the insulation completely and carries moisture into the roof deck, causing mold or winter ice dams. Air sealing stops the air; insulation stops the heat.'
      },
      {
        q: 'Does air sealing qualify for the federal tax credit?',
        a: 'Yes! Air sealing materials and diagnostic blower door testing performed in conjunction with air sealing are eligible for the 30% IRA Section 25C federal tax credit.'
      }
    ],
    sidebarBookingTitle: 'Book an Air Sealing Audit',
    sidebarBookingDesc: 'Locate invisible drafts and measure your home CFM50 leakage score.',
    sidebarFieldLabel: 'Year Home Was Built',
    sidebarFieldPlaceholder: 'e.g. 1984'
  },

  'wall-injection': {
    id: 'wall-injection',
    name: 'Dense-Pack Wall Injection',
    title: 'Dense-Pack Wall Cavity Injection Insulation',
    subtitle: 'Inject High-Performance Thermal Barriers Into Finished Walls Without Drywall Tearout',
    badgeTag: 'No Drywall Tearout',
    rValueBadge: '3.5 lbs/cu ft',
    coverImage: 'images/service-wall-insulation.jpg',
    coverAlt: 'Technician Injecting Dense-Pack Cellulose into Exterior Wall Stud Cavity',
    savingsHighlight: 'High STC Soundproof',
    savingsIcon: 'bi-volume-mute-fill',
    overviewHtml: `
      <p class="text-muted">
        Millions of homes constructed prior to the 1980s were built with empty exterior 2x4 stud cavities or under-performing, slumped R-7 fiberglass batts. Removing all interior drywall to install insulation costs tens of thousands in demolition, plastering, painting, and temporary relocation.
      </p>
      <p class="text-muted">
        ThermaGuard\'s <strong>Dense-Pack Injection Technology</strong> solves this without destroying your interior walls. Our specialized high-pressure blowers inject borate-treated cellulose or non-expanding tri-polymer foam into stud cavities through small 2-inch ports drilled either beneath exterior siding or neatly along interior baseboard planes. Packed to a rigorous 3.5 to 3.8 lbs per cubic foot, the insulation will never slump or settle.
      </p>
    `,
    specs: [
      { label: 'Installed Density', value: '3.5 to 3.8 lbs / cu ft (Non-Settling)', icon: 'bi-check-circle-fill' },
      { label: 'Thermal Resistance', value: 'R-15 (2x4 walls) to R-23 (2x6 walls)', icon: 'bi-check-circle-fill' },
      { label: 'Acoustic Rating', value: 'STC 51 Sound Transmission Loss', icon: 'bi-check-circle-fill' },
      { label: 'Fire Retardancy', value: 'Class 1 Borate Mineral Treated', icon: 'bi-check-circle-fill' }
    ],
    methodologyTitle: 'Our 5-Stage Wall Injection Protocol',
    methodologyIntro: 'Clean, minimally invasive installation with factory-grade acoustic and thermal results:',
    steps: [
      {
        num: 1,
        title: 'Stud Cavity & Wiring Inspection',
        desc: 'We locate wall studs with ultrasonic scanners, inspect for hidden fire stops, and test for outdated active knob-and-tube electrical wiring.'
      },
      {
        num: 2,
        title: 'Precision Siding Lap Lift or Interior Port Drilling',
        desc: 'For wood or vinyl siding, we carefully unclip laps and drill small 2-inch ports; for brick or stucco, we access through discrete interior wall ports.'
      },
      {
        num: 3,
        title: 'Flexible Fill Tube Insertion to Cavity Base',
        desc: 'A heavy-duty flexible injection hose is pushed all the way to the bottom plate of each stud bay, filling from the bottom upward under pressure.'
      },
      {
        num: 4,
        title: 'High-Pressure 3.5 lb Dense-Packing',
        desc: 'Our computerized blower monitors backpressure. As the cavity fills, density reaches 3.5 lbs/cu ft, eliminating all air pockets and drafts.'
      },
      {
        num: 5,
        title: 'Cedar Plug Sealing & Flush Finish Patching',
        desc: 'Ports are sealed with expanding vapor gaskets and wood plugs, then exterior siding is clipped back into place with zero visible traces.'
      }
    ],
    pricingScheduleTitle: 'Wall Injection Investment & Pricing Schedule',
    pricingScheduleRows: [
      { name: 'Exterior Siding Access Injection', scope: 'Wood, vinyl, or aluminum siding removal, fill, and re-hang', unit: 'Per Sq Ft of Wall', price: '$2.25 - $2.95' },
      { name: 'Interior Drywall Port Access', scope: 'Discrete port drilling, dense fill, and 3-coat drywall spackle', unit: 'Per Sq Ft of Wall', price: '$2.50 - $3.40' },
      { name: 'Brick / Masonry Exterior Access', scope: 'Mortar joint drilling and color-matched mortar patch', unit: 'Per Sq Ft of Wall', price: '$3.10 - $3.90' },
      { name: 'Interior Acoustic Partition Walls', scope: 'Dense packing bathroom or bedroom walls for soundproofing', unit: 'Per Room', price: '$450 - $750' }
    ],
    faqs: [
      {
        q: 'Will high pressure injection damage my interior drywall or plaster?',
        a: 'No. Our blowers utilize digital backpressure regulators calibrated specifically for old plaster and modern drywall. The material fills uniformly around pipes and wires without bulging wall surfaces.'
      },
      {
        q: 'What happens to active electrical wires inside the wall?',
        a: 'Before injecting cellulose, our master electrician inspects the walls with thermal probes. If knob-and-tube wiring is present, it must be decommissioned or isolated before insulation can be added according to National Electrical Code (NEC).'
      },
      {
        q: 'Can you see the holes after the project is finished?',
        a: 'On homes with vinyl, aluminum, or wood lap siding, we lift the laps and drill underneath, then snap the siding back down so the holes are completely hidden from view.'
      }
    ],
    sidebarBookingTitle: 'Book a Wall Cavity Evaluation',
    sidebarBookingDesc: 'Determine if your exterior walls have insulation using our thermal cameras.',
    sidebarFieldLabel: 'Exterior Siding Type',
    sidebarFieldPlaceholder: 'e.g. Vinyl, Brick, Wood'
  },

  'crawl-space': {
    id: 'crawl-space',
    name: 'Crawl Space Encapsulation',
    title: 'Crawl Space Encapsulation & Foundation Sealing',
    subtitle: 'Stop Subterranean Moisture, Cold Winter Floors, and Toxic Mold Spores',
    badgeTag: 'Foundation Defense',
    rValueBadge: '20-Mil Barrier',
    coverImage: 'images/service-crawl-space.jpg',
    coverAlt: 'Crawl Space Encapsulation with Heavy-Duty 20-Mil CleanSpace Vapor Barrier and Sump Integration',
    savingsHighlight: 'Prevents Mold Growth',
    savingsIcon: 'bi-moisture',
    overviewHtml: `
      <p class="text-muted">
        Up to 50% of the air you breathe on the first floor of your home originated directly in your crawl space via the natural thermal stack effect. In unconditioned, vented crawl spaces, wet earth evaporates hundreds of gallons of water vapor directly into floor joists and subfloors, causing rotted wood, cupped hardwoods, and foul mildew odors.
      </p>
      <p class="text-muted">
        ThermaGuard eliminates this problem with <strong>True Closed Crawl Space Encapsulation</strong>. We isolate the foundation by laying puncture-proof 20-mil antimicrobial cord-reinforced vapor barriers, sealing foundation walls, air-sealing the cold rim joist perimeter with closed-cell spray foam, and conditioning the air with a commercial energy-star dehumidifier.
      </p>
    `,
    specs: [
      { label: 'Vapor Retarder', value: '20-Mil Antimicrobial Cord-Reinforced Poly', icon: 'bi-check-circle-fill' },
      { label: 'Permeance Rating', value: '<0.01 Perms Class 1 Impermeable', icon: 'bi-check-circle-fill' },
      { label: 'Wall & Rim Thermal', value: 'R-10 Continuous Closed-Cell Foam', icon: 'bi-check-circle-fill' },
      { label: 'Humidity Standard', value: 'Guaranteed Sub-55% Relative Humidity', icon: 'bi-check-circle-fill' }
    ],
    methodologyTitle: 'Our 5-Stage Crawl Space Encapsulation Workflow',
    methodologyIntro: 'Turn a dark, damp dirt pit into a clean, dry, conditioned mechanical foundation space:',
    steps: [
      {
        num: 1,
        title: 'Debris Removal & Ground Grading',
        desc: 'We clear old decaying fiberglass, rocks, and debris, raking the dirt subsoil smooth and installing perimeter French drainage channels where needed.'
      },
      {
        num: 2,
        title: 'Antimicrobial Framing & Soil Sanitization',
        desc: 'All structural floor joists and subfloor plywood receive botanical antimicrobial fogging to eliminate surface mold spores and wood rot.'
      },
      {
        num: 3,
        title: '20-Mil Rip-Stop Vapor Barrier Installation',
        desc: 'Heavy-duty poly sheeting is rolled across the floor, wrapped around support piers, and pinned 6 inches above outside grade on foundation walls.'
      },
      {
        num: 4,
        title: 'Rim Joist Closed-Cell Spray Foam Armor',
        desc: 'We spray 2 inches of closed-cell polyurethane foam along the rim joist and sill plate perimeter, sealing out outside humidity and cold winter drafts.'
      },
      {
        num: 5,
        title: 'Commercial Dehumidification & Digital Monitor',
        desc: 'An Energy Star high-efficiency low-temp dehumidifier is piped to an automatic gravity drain, paired with a wireless indoor relative humidity sensor.'
      }
    ],
    pricingScheduleTitle: 'Crawl Space Investment & Pricing Schedule',
    pricingScheduleRows: [
      { name: 'Standard 20-Mil Encapsulation Package', scope: 'Debris removal, 20-mil sealed liner, pier wrap, and vent seals', unit: 'Up to 1,200 sq ft', price: '$3,800 - $5,400' },
      { name: 'Rim Joist Closed-Cell Spray Insulation', scope: '2 inches of 2.0 lb foam along exterior rim joist band', unit: 'Linear Foot', price: '$9.50 - $13.50' },
      { name: 'Commercial Dehumidifier System', scope: 'Santa Fe / AprilAire 70-pint low-temp unit with dedicated GFCI', unit: 'Fully Installed', price: '$1,850 - $2,400' },
      { name: 'Submersible Sump Pump Basin', scope: 'Cast-iron Zoeller pump with sealed clear lid and check valve', unit: 'Per Basin', price: '$1,200 - $1,750' }
    ],
    faqs: [
      {
        q: 'Why should I close and seal my foundation vents?',
        a: 'Old building codes assumed exterior vents dried out crawl spaces. Modern building science proved the opposite: in summer, hot humid outdoor air enters the cooler crawl space, reaches its dew point, and condenses directly on wooden floorboards. Sealing vents keeps humid air out and stabilizes floor temperatures.'
      },
      {
        q: 'Will encapsulating my crawl space make my first-floor floors warmer?',
        a: 'Significantly. By air-sealing the rim joists and stopping freezing subterranean air from pooling beneath your floor joists, winter floor temperatures routinely rise by 6°F to 10°F, eliminating the sensation of walking on ice.'
      },
      {
        q: 'Does crawl space encapsulation help with indoor pests and insects?',
        a: 'Yes. Insects like camel crickets, termites, spiders, and silverfish require damp dirt environments to thrive. Creating a dry, clean 20-mil sealed envelope starves them of water and closes entry crevices.'
      }
    ],
    sidebarBookingTitle: 'Book a Crawl Space Evaluation',
    sidebarBookingDesc: 'Schedule a free subterranean moisture inspection and wood rot check.',
    sidebarFieldLabel: 'Approx. Crawl Space Sq Ft',
    sidebarFieldPlaceholder: 'e.g. 1100'
  },

  'energy-audit': {
    id: 'energy-audit',
    name: 'Comprehensive Energy Assessments',
    title: 'Comprehensive Home Energy Audit & Thermal Imaging',
    subtitle: 'Diagnostic Building Science to Pinpoint Exactly Where Your Energy Dollars Escape',
    badgeTag: 'Diagnostic Gold',
    rValueBadge: 'FLIR E8 Infrared',
    coverImage: 'images/service-energy-assessment.jpg',
    coverAlt: 'Senior Building Analyst Operating Blower Door and High-Resolution FLIR Infrared Thermal Camera',
    savingsHighlight: 'IRS 25C Documentation',
    savingsIcon: 'bi-file-earmark-check',
    overviewHtml: `
      <p class="text-muted">
        Guessing which home improvement will lower your energy bill is like a doctor prescribing medication without a diagnosis. You could replace $15,000 worth of windows only to discover that 80% of your heat was actually escaping through your attic light fixtures and uninsulated knee walls.
      </p>
      <p class="text-muted">
        A <strong>ThermaGuard Comprehensive Energy Audit</strong> takes the guesswork out of home performance. Led by BPI-certified building analysts, we combine computerized Minneapolis Blower Door depressurization, FLIR thermal imaging, duct leakage testing, and combustion safety audits to pinpoint exact thermal defects and calculate prioritized return-on-investment timelines.
      </p>
    `,
    specs: [
      { label: 'Thermal Sensor', value: 'FLIR E8 Pro (320x240 IR Sensor, 0.05°C)', icon: 'bi-check-circle-fill' },
      { label: 'Airflow Manometer', value: 'DG-1000 Digital Micro-Manometer (±1%)', icon: 'bi-check-circle-fill' },
      { label: 'Certification Standard', value: 'BPI Building Analyst & Envelope Pro', icon: 'bi-check-circle-fill' },
      { label: 'Energy Modeling', value: 'DOE Home Energy Score (HES) Compatible', icon: 'bi-check-circle-fill' }
    ],
    methodologyTitle: 'Our 5-Stage Diagnostic Audit Methodology',
    methodologyIntro: 'A 2-to-3 hour forensic examination of your entire building envelope and mechanical systems:',
    steps: [
      {
        num: 1,
        title: 'Utility Bill Historical Analytics & Occupant Interview',
        desc: 'We analyze 24 months of heating and cooling utility bills to establish baseline energy consumption and comfort problem zones.'
      },
      {
        num: 2,
        title: 'Blower Door Depressurization Measurement',
        desc: 'We mount our calibrated blower door frame and run computer-controlled airflow sweeps to measure air tightness in CFM at 50 Pascals.'
      },
      {
        num: 3,
        title: 'Room-by-Room Infrared Thermal Imaging Scan',
        desc: 'While the house is under pressure, we capture high-resolution FLIR thermal images of every wall, ceiling junction, and window frame.'
      },
      {
        num: 4,
        title: 'CAZ (Combustion Appliance Zone) Safety Inspection',
        desc: 'We test furnace, boiler, and water heater flues under worst-case depressurization to verify carbon monoxide venting safety.'
      },
      {
        num: 5,
        title: 'Custom Written ROI Roadmap & Rebate Paperwork',
        desc: 'You receive an itemized building report detailing thermal photos, recommended fixes ranked by payback, and pre-filled IRA 25C rebate claims.'
      }
    ],
    pricingScheduleTitle: 'Energy Audit Investment & Pricing Schedule',
    pricingScheduleRows: [
      { name: 'Standard Residential Energy Assessment', scope: 'Blower door test, thermal infrared scan, and written summary', unit: 'Homes to 3,000 sq ft', price: '$299 - $399' },
      { name: 'Comprehensive BPI Audit with IRA Rebate Filing', scope: 'Includes CAZ combustion safety, full report & pre-filled tax forms', unit: 'Whole Home', price: '$450 - $550' },
      { name: 'Commercial Envelope Thermography', scope: 'Large facility building envelope infrared leak audit', unit: 'Half Day / Rig', price: '$850 - $1,400' },
      { name: 'Post-Retrofit Quality Verification Audit', scope: 'Confirmatory blower door test validating contractor air sealing', unit: 'Per Verification', price: '$199 - $250' }
    ],
    faqs: [
      {
        q: 'How long does a home energy assessment take?',
        a: 'A thorough residential audit takes approximately 2 to 3 hours on site depending on house square footage and architectural complexity. You are welcome to walk alongside our technician to see live thermal scans of your home.'
      },
      {
        q: 'Do I get credit for the cost of the audit if I hire you for insulation work?',
        a: 'Yes! When you proceed with any qualifying insulation or air sealing project with ThermaGuard valued over $1,500, we credit 100% of your energy audit fee toward the final invoice.'
      },
      {
        q: 'Does an energy audit qualify for federal tax credits?',
        a: 'Yes. Under the Inflation Reduction Act Section 25C, home energy audits conducted by certified BPI auditors qualify for a 30% federal tax credit up to $150.'
      }
    ],
    sidebarBookingTitle: 'Book an Energy Diagnostic',
    sidebarBookingDesc: 'Schedule a certified BPI diagnostic audit with FLIR thermal imaging.',
    sidebarFieldLabel: 'Preferred Audit Date',
    sidebarFieldPlaceholder: 'e.g. Next available Tuesday'
  }
};

// Expose globally
if (typeof window !== 'undefined') {
  window.THERMAGUARD_SERVICES = THERMAGUARD_SERVICES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = THERMAGUARD_SERVICES;
}

