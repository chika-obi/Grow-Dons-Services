import { ServiceItem, ProductItem, ValueItem, AttributeItem, PartnerItem, FAQItem } from "./types";

import heroImg from "./assets/images/hero_industrial_1781482222444.jpg";
import chemicalsImg from "./assets/images/chemical_operations_1781482240086.jpg";
import offshoreImg from "./assets/images/offshore_support_1781482255044.jpg";
import teamImg from "./assets/images/engineering_team_1781482271888.jpg";

export const COMPANY_NAME = "Grow Dons Services";
export const COMPANY_RC = "RC. 1902045";
export const COMPANY_TAGLINE = "Quality at its peak";

// Image constants with dynamic timestamps mapped from build phase
export const IMAGES = {
  hero: heroImg,
  chemicals: chemicalsImg,
  offshore: offshoreImg,
  team: teamImg,
};

export const CORE_VALUES: ValueItem[] = [
  {
    name: "Trust",
    description: "Cultivating transparent, lifelong corporate relationships and mutual confidence with our local and international partners.",
    iconName: "Shield"
  },
  {
    name: "Excellence",
    description: "Maintaining a standard of premium execution, ensuring client specifications are met precisely with zero deviation.",
    iconName: "Award"
  },
  {
    name: "Team Work",
    description: "Fostering collaboration among highly skilled, experienced chemical scientists and engineering professionals.",
    iconName: "Users"
  },
  {
    name: "Ethics",
    description: "Doing business with absolute integrity, transparency, moral rigor, and supreme environmental consciousness.",
    iconName: "Feather"
  },
  {
    name: "Safety",
    description: "Zero incidents mindset near-shore and offshore. Strictly enforcing safety gear and standard industrial safe-practices.",
    iconName: "Heart"
  },
  {
    name: "Training & Manpower",
    description: "Continuously training and developing local talent to empower a world-class indigenous Nigerian technical workforce.",
    iconName: "TrendingUp"
  },
  {
    name: "Competence",
    description: "Blending deep downhole engineering knowledge with cutting edge industrial chemistry to maximize asset yield.",
    iconName: "Cpu"
  },
  {
    name: "Customer Passion",
    description: "Possessing an unyielding drive to serve, support, and exceed custom requirements under any timeline constraints.",
    iconName: "Smile"
  }
];

export const ATTRIBUTES: AttributeItem[] = [
  {
    name: "Competitive Pricing",
    subtitle: "Premium execution optimized to maximize ROI for local independent operators.",
    iconName: "Percent"
  },
  {
    name: "Timely Delivery",
    subtitle: "On-time chemical deliveries and equipment dispatch to prevent downhole shut-ins.",
    iconName: "Clock"
  },
  {
    name: "Customer Satisfaction",
    subtitle: "Highly trusted feedback loop and prompt technical consultation on-site.",
    iconName: "ThumbsUp"
  },
  {
    name: "Cost Effectiveness",
    subtitle: "Intelligent mud formulations and fluid recycling strategies to save operational expense.",
    iconName: "Coins"
  },
  {
    name: "Safety at Workplace",
    subtitle: "Full compliance with OSHA and local DPR environmental and safety regulations.",
    iconName: "Heal" // will map to fine icon
  },
  {
    name: "Timely Response to Enquiries",
    subtitle: "Technical support representatives ready to respond to RFQs within the business day.",
    iconName: "MessageSquare"
  },
  {
    name: "Excellent Product Quality",
    subtitle: "Strict batch-testing in high-end laboratories before offshore distribution.",
    iconName: "Sparkles"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "chemicals",
    title: "Chemicals Supply & Engineering",
    shortDescription: "End-to-end drilling, completion, production, stimulation and commodity chemicals supply.",
    fullDescription: "We specialize in the procurement, blending, formulation, and application of high-performance oilfield chemicals. Our drilling and completion chemicals team is dedicated to providing premium engineering services focused on downhole applications to enhance efficiency, extend asset life, and improve product quality and yields.",
    iconName: "FlaskConical",
    points: [
      "Drilling & Completion Chemicals formulation and supply",
      "Production and Stimulation Chemicals specialized application",
      "Commodity chemicals warehousing and logistics across Nigeria",
      "On-site mud and fluid engineering support and evaluation",
      "Downhole application analysis to maximize product yield"
    ]
  },
  {
    id: "solids-control",
    title: "Solids Control Equipment & Services",
    shortDescription: "Advanced mechanical separation and fluid recovery systems.",
    fullDescription: "We provide high-capacity mechanical equipment to separate unwanted solids from drilling fluids. Our solutions minimize waste volumes, reduce overall chemical consumption, and ensure compliance with stringent environmental directives.",
    iconName: "Layers",
    points: [
      "Decanting Centrifuges and Shale Shakers supply and configuration",
      "Mud cleaners, desanders, and desilters maintenance",
      "Cuttings dryers and zero-discharge solids control loops",
      "On-site technical operation by certified drill-fluid engineers",
      "Equipment replacement parts and rapid-response field servicing"
    ]
  },
  {
    id: "equipment-rental",
    title: "Oilfield Equipment & Tank Rentals",
    shortDescription: "Certified fluid storage tanks and heavy offshore machinery.",
    fullDescription: "We lease custom-engineered heavy-duty storage tanks, mud mixing plants, and support accessories. All rental units are regularly pressure tested, certified for offshore handling, and structured for rough multi-terrain logistics.",
    iconName: "Warehouse",
    points: [
      "High capacity customized chemical and mud storage tanks",
      "Acid transport tanks and offshore-certified skip rentals",
      "Chemical mixing pumps and high-pressure manifold lines",
      "Dual-compartment filtration units and transfer pumps",
      "Flexible leasing terms suited to both short and long exploration campaigns"
    ]
  },
  {
    id: "offshore-support",
    title: "Offshore Support & Engineering",
    shortDescription: "Marine vessel operations, platform maintenance, and logistics.",
    fullDescription: "Supporting Nigeria's active maritime assets by delivering engineering services, technical staff, marine supply vessels coordination, and specialized logistics management directly to operational coordinates.",
    iconName: "Ship",
    points: [
      "Industrial vessel and chemical tank cleaning services",
      "Waste water treatment and marine-safe remediation services",
      "Offshore supply logistics and critical machinery handling",
      "Qualified engineering personnel deployment for offshore maintenance",
      "Asset integrity testing and offshore structure inspections"
    ]
  },
  {
    id: "brine-filtration",
    title: "Brine Filtration Equipment & Services",
    shortDescription: "High-spec filtration systems for completion fluids.",
    fullDescription: "We offer dedicated filtration hardware and brine recovery solutions, ensuring that completion fluids remain completely clean, particulate-free, and perfectly formulated for downhole operations.",
    iconName: "Filter",
    points: [
      "Dual pod cartridges and high-surface DE press filtration",
      "Brine reclamation, particle-count testing, and turbidity control",
      "Pre-filtration evaluation of completion muds",
      "Consumable filtration supplies (pleated cartridges, bags, and diatomaceous earth)",
      "24/7 technical oversight during critical reservoir completion steps"
    ]
  },
  {
    id: "logistics-other",
    title: "Secondary Procurement, Logistics & Materials",
    shortDescription: "Valves, piping, workshop consumables, and structural steel supply.",
    fullDescription: "Leveraging our powerful international trade networks to supply key structural and mechanical components needed for daily operations.",
    iconName: "Luggage",
    points: [
      "Supply of high-spec industrial valves, pipes, and connection fittings",
      "High grade structural steel items and standard gratings",
      "General workshop consumables and wear-parts distribution",
      "Comprehensive end-to-end logistics routing from foreign source to local site",
      "Emergency parts provisioning for downhole/drilling systems"
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  // Major Products (Specialty chemical lines)
  {
    id: "corr-inh",
    name: "Corrosion Inhibitors",
    category: "Major Specialty Chemicals",
    description: "Highly effective chemical compounds that coat metal parts to protect tubing, pumps, and pipelines from sweet (CO2) and sour (H2S) corrosion.",
    isMajor: true,
    chemicalFormula: "Formulated Amino-Complexes",
    applications: ["Production pipelines", "Continuous injection downhole", "Batch treatments in gas wells"]
  },
  {
    id: "biocide",
    name: "Biocides & Aldehydes",
    category: "Major Specialty Chemicals",
    description: "Sulfate-reducing bacteria (SRB) control formulations that prevent microbial corrosion, hydrogen sulfide generation, and souring of the reservoir.",
    isMajor: true,
    chemicalFormula: "Glutaraldehyde / THPS base",
    applications: ["Water flooding systems", "Hydrotesting operations", "Fracturing fluids biological control"]
  },
  {
    id: "hyd-inh",
    name: "Hydrate Inhibitors",
    category: "Major Specialty Chemicals",
    description: "Kinetic and thermodynamic hydrate inhibition chemicals formulated for cold deepwater flowlines.",
    isMajor: true,
    chemicalFormula: "Methanol / Glycol / Polymer-based",
    applications: ["Deepwater flowlines", "Choke valves treatment", "Gas transmission pipelines"]
  },
  {
    id: "asphalt-inh",
    name: "Asphaltene & Paraffin Inhibitors",
    category: "Major Specialty Chemicals",
    description: "Preventative polymer chemistry designed to keep heavy organic chains in suspension, maintaining maximum line throughput.",
    isMajor: true,
    chemicalFormula: "Alkyl-phenol formaldehyde adducts",
    applications: ["High-paraffin wells", "Flowline remediation", "Wellbore stimulation flush"]
  },
  {
    id: "demulsifier",
    name: "Demulsifiers",
    category: "Major Specialty Chemicals",
    description: "Emulsion breakers designed to rapidly separate water from oil streams, meeting strict pipeline sale quality standards.",
    isMajor: true,
    chemicalFormula: "Alkoxylated phenolic resins",
    applications: ["Separation plants", "Dehydrators", "FPSO treaters"]
  },
  {
    id: "wat-clar",
    name: "Water Clarifiers",
    category: "Major Specialty Chemicals",
    description: "Coagulant polymer formulations that remove trace oil droplets and suspended solids from produced water before overboard discharge.",
    isMajor: true,
    chemicalFormula: "Cationic polyacrylamides",
    applications: ["Produced water discharge systems", "Flotation units", "Environmental compliance processing"]
  },
  {
    id: "scale-inh",
    name: "Scale Inhibitors",
    category: "Major Specialty Chemicals",
    description: "Phosphate esters and phosphonate polymers that successfully prevent carbonate and sulfate scale precipitate in the tubing.",
    isMajor: true,
    chemicalFormula: "DETPMP / Polyacrylates",
    applications: ["High-temperature tubing", "Water-alternating-gas injectors", "Heat exchangers"]
  },
  {
    id: "degreaser",
    name: "Cleaning & Degreasing Compounds",
    category: "Major Specialty Chemicals",
    description: "Ecological water-based solvent cleaners for removing heavy crude oil and grease from platform surfaces, tanks, and ship decks.",
    isMajor: true,
    chemicalFormula: "Biodegradable Surfactant Blend",
    applications: ["Tank cleaning operations", "Marine rig wash", "Workshop cleaning"]
  },

  // Commodity / Commodity categories
  {
    id: "bentonite",
    name: "Bentonite (API Grade)",
    category: "Commodity Minerals",
    description: "High-grade sodium bentonite clay used to provide filtration control and rheology in water-based muds.",
    isMajor: false,
    chemicalFormula: "Al2O3·4SiO2·H2O",
    applications: ["Viscosifying agent", "Filtration control", "Borehole plastering"]
  },
  {
    id: "barite",
    name: "Barite (API Grade)",
    category: "Commodity Minerals",
    description: "Barium sulfate mineral used exclusively to increase the density of drilling muds to control downhole reservoir pressures.",
    isMajor: false,
    chemicalFormula: "BaSO4 (>4.20 S.G.)",
    applications: ["Mud weighting material", "Kick prevention", "Well kill fluids"]
  },
  {
    id: "calc-chlor",
    name: "Calcium Chloride (94-97% Pellets)",
    category: "Commodity Minerals",
    description: "High-purity soluble salt used to formulate high strength completion brines and adjust density in oil-based mud internal phase.",
    isMajor: false,
    chemicalFormula: "CaCl2",
    applications: ["Brine formulation", "Shale inhibition in OBM", "Concrete acceleration"]
  },
  {
    id: "methanol",
    name: "Methanol",
    category: "Commodity Solvents",
    description: "API grade methane solvent used in high-volume injection to dissolve hydrate blockages and as an industrial cleaning fluid.",
    isMajor: false,
    chemicalFormula: "CH3OH",
    applications: ["Hydrate dissolution", "Process line cleaning", "Solvent catalyst"]
  },
  {
    id: "glycols",
    name: "Glycols (TEG, MEG, DEG)",
    category: "Commodity Solvents",
    description: "Dehydration glycols utilized to strips water molecules from produced natural gas before transmission.",
    isMajor: false,
    chemicalFormula: "Triethylene Glycol / Monoethylene Glycol",
    applications: ["Gas dehydration units", "Anti-freeze systems", "Hydrate depression"]
  },
  {
    id: "calc-brom",
    name: "Calcium Bromide",
    category: "Commodity Minerals",
    description: "Concentrated liquid/powder salt used for formulating clear completion and workover brines of up to 14.2 lb/gal.",
    isMajor: false,
    chemicalFormula: "CaBr2",
    applications: ["Clear-brine completion", "High pressure wellbore fluids", "Reservoir packers fluid"]
  }
];

export const FLUID_SYSTEMS = [
  {
    name: "Commercial Chemical",
    desc: "Targeted chemicals used across platform operations, refinery loops, and utilities."
  },
  {
    name: "Workover & Completion Fluids",
    desc: "Clear high-density brines and packer fluids engineered to protect sensitive reservoirs."
  },
  {
    name: "Cementing Additives",
    desc: "Accelerators, retarders, fluid loss agents and gas blockers ensuring proper casing bonds."
  },
  {
    name: "Water Based Mud (WBM)",
    desc: "Environmentally friendly clay-and-polymer slurries for top-hole and stable shale intervals."
  },
  {
    name: "Oil Based Mud Additives (OBM)",
    desc: "High-performance emulsifiers, wetting agents and organophilic clays for hot, complex wells."
  },
  {
    name: "Foaming Based Mud (FBM)",
    desc: "Surfactants and dynamic foaming agents designed for low-pressure depleted formations."
  }
];

export const PARTNERS: PartnerItem[] = [
  { name: "Forte Oil", logoText: "FORTE OIL", vibe: "Downstream Energy Partner" },
  { name: "Trexm Energy", logoText: "TREXM", vibe: "Engineering & Technical Alliance" },
  { name: "Eunisell", logoText: "EUNISELL", vibe: "Fluids & Specialty Logistics Support" },
  { name: "Secject Chem Ltd", logoText: "SECJECT", vibe: "Chemical Synthesis Ally" },
  { name: "Goodie Chemicals", logoText: "GOODIE", vibe: "Specialty Sourcing Partner" },
  { name: "LB Group", logoText: "LB", vibe: "International Commodity Supplier" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is Grow Dons Services a 100% indigenous Nigerian company?",
    answer: "Yes. Grow Dons Services (RC: 1902045) is a fully owned indigenous Nigerian company incorporated in compliance with the local content directives of the NCDMB, proudly supporting Nigeria's oil, gas, and mining sectors."
  },
  {
    question: "Do you supply customized chemical mud formulations?",
    answer: "Absolutely. Our expert drilling and completion fluids engineers formulate customized Water Based Muds (WBM), Oil Based Muds (OBM), and Specialty Foam Mud configurations in our Port Harcourt laboratories to fit your specific reservoir lithology."
  },
  {
    question: "Are your storage tanks and skip rentals certified for offshore use?",
    answer: "Yes, all our oilfield equipment, brine transport skips, and chemical tanks carry current safety and structural test certifications matching international marine handling requirements and local DPR guidelines."
  },
  {
    question: "How do you align with Health and Safety (HSE) rules?",
    answer: "We carry a strict 'Quality at its Peak' commitment which translates directly to ISO 9001:2015 quality standards and rigid corporate HSE rules. We have certified safety supervisors, regular containment checks, and specialized training programs to guarantee zero spills or workplace accidents."
  },
  {
    question: "What specific technical and engineering services do you offer beyond basic supply?",
    answer: "Beyond raw chemical sourcing, we provide comprehensive premium technical services. These include on-site mud engineering, fluid chemistry compatibility testing, solids control centrifuge configurations, live mud logging diagnostics, and dual-pod completion brine filtration. Our field experts remain on-site throughout vital phases to maximize downhole yield and safety."
  },
  {
    question: "How do you guarantee chemical safety, hazard containment, and environmental standard compliance?",
    answer: "We ensure rigorous adherence to safety standards. Every chemical dispatch includes detailed Safety Data Sheets (SDS/MSDS) and standardized labeling. Our Port Harcourt warehouse complexes apply secondary containment bunds, gas safety traps, and heat-monitored zones. For transport, we employ certified offshore containers, secure skip configurations, and quick-response spill kits under ISO-trained HSE safety inspectors."
  },
  {
    question: "What are your standard project timelines, and can you handle emergency orders?",
    answer: "For commodity industrial supply (e.g., barite weight agents, glycols, methanol solvents), standard lead times across major hubs is 3 to 5 business days. Advanced engineered mud formulations or customized solids equipment installations span 5 to 10 business days. For urgent crises, our 24/7 Emergency Dispatch Unit in Port Harcourt can package and mobilize critical materials to nearby rigs, docks, or storage points within 12 to 24 hours of approval."
  },
  {
    question: "Do you issue custom laboratory reviews and post-project technical reports?",
    answer: "Yes. We back our fluid formulations and filtration processes with detailed QA/QC documentation. Every finished completion filtration batch comes with absolute particle count summaries, NTU turbidity curves, and API RP 13B mud rheological reports. This ensures complete transparency and simplifies verification with regulatory bodies."
  }
];
