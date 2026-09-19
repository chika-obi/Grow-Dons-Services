import {
  ChemicalProductItem,
  LeadershipRole,
  ProcurementCategory,
  LogisticsCapability,
  TechnicalSolution,
  ValueItem,
  FAQItem,
  GallerySlide
} from "./types";

import heroImg from "./assets/images/hero_optimized.jpg";
import chemicalsImg from "./assets/images/chemical_operations_1781482240086.jpg";
import offshoreImg from "./assets/images/offshore_support_1781482255044.jpg";
import teamImg from "./assets/images/engineering_team_1781482271888.jpg";
import warehouseImg from "./assets/images/warehouse_chemicals_opt.jpg";
import qaLabImg from "./assets/images/qa_testing_lab_opt.jpg";

// Dedicated African Working Personnel & Operations Images
import africanLabChemistImg from "./assets/images/african_lab_chemist_1789816739805.jpg";
import africanWarehouseImg from "./assets/images/african_warehouse_crew_1789816754031.jpg";
import africanQuaysideImg from "./assets/images/african_quayside_crew_1789816766679.jpg";
import africanFieldChemistsImg from "./assets/images/african_field_chemists_1789816779782.jpg";
import africanProcureTeamImg from "./assets/images/african_procure_team_1789816791977.jpg";
import africanDrillingCrewImg from "./assets/images/african_drilling_crew_1789816803689.jpg";

import directorImg from "./assets/images/director_donatus.jpg";
import gmImg from "./assets/images/gm_ekweme.jpg";
import opsImg from "./assets/images/ops_manager_jerry.jpg";
import procImg from "./assets/images/proc_manager_martins.jpg";

export const COMPANY_NAME = "Grow Dons Services Ltd";
export const COMPANY_SHORT = "Grow Dons";
export const COMPANY_RC = "RC. 1902045";
export const COMPANY_IDENTITY = "Oilfield Chemicals & Technical Supply";
export const COMPANY_TAGLINE = "Oilfield Chemicals. Technical Supply. Reliable Delivery.";
export const COMPANY_SUPPORTING = "Specialized chemical products and technical supply solutions for drilling, completion, production and industrial operations — supported by strategic procurement and dependable logistics.";

export const CONTACT_INFO = {
  address: "Mrs Ogechi Erhiakeme Plaza, Opposite A.A Rano Filling Station, Along Obiri Ikwerre New Airport Road, Port Harcourt, Rivers State, Nigeria",
  phone: "+234 812 875 1360",
  phoneRaw: "2348128751360",
  phoneSecondary: "+234 803 463 8006",
  phoneSecondaryRaw: "2348034638006",
  whatsapp: "+234 812 875 1360",
  whatsappRaw: "2348128751360",
  email: "growdonsservicesltd@gmail.com",
  website: "www.growdonsservices.com",
  websiteUrl: "https://www.growdonsservices.com",
  operatingHubs: ["Port Harcourt", "Onne Free Zone Corridor", "Warri Shorebase", "Lagos Commercial Hub"]
};

export const IMAGES = {
  hero: heroImg,
  chemicals: africanFieldChemistsImg,
  logistics: africanQuaysideImg,
  offshore: africanQuaysideImg,
  team: africanProcureTeamImg,
  warehouse: africanWarehouseImg,
  qaLab: africanLabChemistImg,
};

// TECHNICAL SOLUTIONS: Application-oriented framework
export const TECHNICAL_SOLUTIONS: TechnicalSolution[] = [
  {
    id: "drilling-solutions",
    title: "Drilling Fluid Solutions",
    domain: "Drilling Fluids & Wellbore Integrity",
    challenges: [
      "Wellbore instability & sloughing shales",
      "Dynamic fluid-loss in porous formations",
      "Torque, drag, and differential sticking risks",
      "Rheology control under high downhole pressures"
    ],
    operationalBenefits: [
      "Wellbore stability: Polymer and amine-based encapsulation that mitigates hydration and disperses stresses.",
      "Shale inhibition: Effective cationic and potassium-based suppression of reactive clay formations.",
      "Fluid-loss control: Precise membrane plastering on borehole walls reducing formation damage.",
      "Rheology management: Controlled yield point and gel strengths for effective cuttings transport.",
      "Lubrication: Boundary-layer lubricity additives reducing downhole friction and drill-string wear."
    ],
    keyChemicals: ["Bentonite (API Grade)", "Barite Weighting Agent", "Specialty Shale Inhibitors", "Fluid Loss Additives"]
  },
  {
    id: "completion-solutions",
    title: "Completion Fluid Solutions",
    domain: "Workover, Brines & Formation Protection",
    challenges: [
      "Formation pore-throat plugging by particulate matter",
      "Downhole tubular corrosion during extended production phases",
      "Density control under unexpected reservoir pore pressures",
      "Microbial proliferation and reservoir souring risks"
    ],
    operationalBenefits: [
      "Formation protection: Solids-free, crystal-clear brines minimizing skin damage across payzones.",
      "Density control: Precision-blended single and dual-salt brines tailored to target hydrostatic gradients.",
      "Filtration standards: Verified micron-level clarity preventing reservoir pore-throat impairment.",
      "Corrosion protection: High-performance film-forming inhibitors protecting tubular metallurgical integrity."
    ],
    keyChemicals: ["Calcium Chloride (94-97%)", "Calcium Bromide", "Clear Completion Brine Blends", "Brine Corrosion Inhibitors"]
  },
  {
    id: "production-solutions",
    title: "Production Chemical Solutions",
    domain: "Flow Assurance & Production Optimization",
    challenges: [
      "Tight water-in-oil emulsions violating export B&SW specifications",
      "Inorganic mineral scale deposits choking tubing and chokes",
      "CO2 (sweet) and H2S (sour) electrochemical asset degradation",
      "Paraffin waxes and asphaltene deposition in flowlines"
    ],
    operationalBenefits: [
      "Emulsion control: Rapid demulsifiers breaking tight interfaces for clean oil and export-grade water.",
      "Corrosion control: Continuous and batch filmers shielding pipelines, separators, and wellheads.",
      "Scale control: Threshold scale inhibitors suppressing carbonate and sulfate crystal precipitation.",
      "Biological control: Broad-spectrum biocide treatments eliminating sulfate-reducing bacteria (SRB).",
      "Flow assurance: Asphaltene dispersants and thermodynamic hydrate inhibitors preserving line throughput."
    ],
    keyChemicals: ["Demulsifiers", "Corrosion Inhibitors", "Scale Inhibitors", "Biocides & Aldehydes", "Hydrate Inhibitors", "Asphaltene Dispersants"]
  }
];

// CHEMICAL PRODUCTS: Core business catalogue organized by application
export const CHEMICAL_PRODUCTS: ChemicalProductItem[] = [
  // 1. DRILLING FLUID CHEMICALS
  {
    id: "bentonite-api",
    name: "Bentonite (API Grade)",
    category: "Drilling Fluid Chemicals",
    subCategory: "Viscosifiers & Filtration Control",
    application: "Water-based drilling muds, borehole wall sealing, suspension rheology",
    description: "Premium sodium bentonite clay meeting rigorous API Specification 13A Section 9 standards. Provides viscosity, fluid loss control, and filter-cake building characteristics in freshwater and low-salinity drilling fluids.",
    technicalBenefits: [
      "High yield suspension providing superior cuttings suspension when circulation ceases",
      "Creates thin, low-permeability filter cake minimizing formation filtrate invasion",
      "Excellent rheological stability across standard borehole temperature regimes"
    ],
    availableSpecifications: "API Spec 13A Section 9 compliant; Yield Point/Plastic Viscosity ratio > 1.5; Filtrate volume < 15.0 cm³",
    packaging: "25 kg multi-wall paper bags with PE liner (40 bags per shrink-wrapped wooden pallet), or 1 MT jumbo bulk bags",
    manufacturerBrand: "Grow Dons Standard Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "API Spec 13A Compliant; Certificate of Analysis provided per batch",
    chemicalFormula: "Al2O3 · 4SiO2 · H2O (Montmorillonite)",
    isFeatured: true
  },
  {
    id: "barite-api",
    name: "Barite (API Grade Drilling Weight Agent)",
    category: "Drilling Fluid Chemicals",
    subCategory: "Weighting Agents",
    application: "Mud weighting, reservoir pressure containment, high-pressure well kill fluids",
    description: "High-purity milled barium sulfate mineral utilized to increase drilling fluid density to counteract high formation pore pressures and prevent well control kicks in water, oil, and synthetic mud systems.",
    technicalBenefits: [
      "Consistent high specific gravity for dependable density adjustment without excessive solids buildup",
      "Chemical inertness preventing adverse chemical reactions with fluid additives",
      "Controlled particle size distribution reducing abrasive wear on downhole tools and surface pumps"
    ],
    availableSpecifications: "Specific gravity: 4.20 g/cm³ minimum (or 4.10 g/cm³ alternative grade); Residue > 75 µm < 3.0%; Soluble alkaline earth metals < 250 mg/kg",
    packaging: "1.5 MT heavy-duty woven polypropylene bulk jumbo bags with lifting loops, or 50 kg valve sacks",
    manufacturerBrand: "Grow Dons Standard Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "API Spec 13A Compliant; QA/QC specific gravity batch certified",
    chemicalFormula: "BaSO4 (Barium Sulfate)",
    isFeatured: true
  },

  // 2. COMPLETION & WORKOVER CHEMICALS
  {
    id: "calcium-chloride-pellets",
    name: "Calcium Chloride (94-97% Anhydrous Pellets)",
    category: "Completion & Workover Chemicals",
    subCategory: "Completion Brines & Salinity Control",
    application: "Clear completion brines, workover fluids, internal brine phase in invert emulsion muds",
    description: "High-concentration anhydrous calcium chloride in mini-pellet form. Formulates solids-free completion and workover brines up to 11.6 lb/gal (1.39 SG) and acts as an effective shale osmotic inhibitor.",
    technicalBenefits: [
      "Rapid dissolution rate generating high-density clear brine without heavy mechanical agitation",
      "Suppresses clay hydration and shale swelling via controlled osmotic activity",
      "Low crystallization temperature suited for varied surface and downhole conditions"
    ],
    availableSpecifications: "Purity: 94.0% - 97.0% CaCl2; Total Alkali Chlorides (as NaCl) < 2.0%; Iron content < 20 ppm; White mini-pellets",
    packaging: "25 kg moisture-proof PE/PP laminated bags, or 1 MT super sacks",
    manufacturerBrand: "Grow Dons Standard Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Standard Industrial Chemical Specification; CoA issued per shipment",
    chemicalFormula: "CaCl2",
    isFeatured: true
  },
  {
    id: "calcium-bromide-brine",
    name: "Calcium Bromide (Solid & Liquid Concentrates)",
    category: "Completion & Workover Chemicals",
    subCategory: "High-Density Clear Brines",
    application: "High-pressure well completions, gravel packing, workover and packer fluid applications",
    description: "Soluble inorganic salt supplied as dry powder or concentrated 52% liquid solution. Formulates high-density, non-damaging clear brines from 11.7 lb/gal up to 14.2 lb/gal (1.70 SG) without solids.",
    technicalBenefits: [
      "Solids-free fluid system preventing pore-throat plugging in productive reservoir sands",
      "High chemical compatibility with typical formation waters when formulated with scavengers",
      "Non-corrosive when properly conditioned with film-forming inhibitors and oxygen scavengers"
    ],
    availableSpecifications: "Dry powder: 95.0% CaBr2 minimum; Liquid concentrate: 52% w/w solution (14.2 lb/gal @ 20°C); pH: 6.5 - 8.5",
    packaging: "Liquid: 200L polyethylene drums, 1,000L IBC totes, or bulk road tankers; Powder: 25 kg bags",
    manufacturerBrand: "Grow Dons Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Laboratory verified purity; Heavy metal trace limits compliant",
    chemicalFormula: "CaBr2",
    isFeatured: true
  },

  // 3. PRODUCTION CHEMICALS
  {
    id: "demulsifier-compound",
    name: "High-Efficiency Demulsifiers",
    category: "Production Chemicals",
    subCategory: "Emulsion Control",
    application: "Crude oil separation, desalting units, dehydration systems, floating production facilities",
    description: "Custom-blended polymeric surfactant compounds designed to rapidly destabilize oilfield water-in-oil emulsions, accelerating phase separation and reducing Basic Sediment & Water (BS&W) to pipeline sale standards.",
    technicalBenefits: [
      "Rapid water drop rate allowing optimized residence times in separation vessels",
      "Produces clean, sharp oil-water interface with minimal rag-layer formation",
      "Low residual oil-in-water carryover, assisting overboard water discharge compliance"
    ],
    availableSpecifications: "Active matter: 40% - 65% formulated solvent blends; Pour point < -10°C; Flash point > 61°C (Closed Cup)",
    packaging: "200L UN-certified steel drums or 1,000L composite IBC containers",
    manufacturerBrand: "Grow Dons Formulated Series",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "ISO 9001:2015 Manufacturing partner verification; Full MSDS documentation",
    chemicalFormula: "Alkoxylated Phenolic Resins & Polyether Blends",
    isFeatured: true
  },
  {
    id: "corrosion-inhibitor-production",
    name: "Film-Forming Corrosion Inhibitors",
    category: "Production Chemicals",
    subCategory: "Corrosion Control",
    application: "Production flowlines, downhole tubing, gathering systems with CO2 and H2S partial pressures",
    description: "Specialized organic nitrogenous film-forming compounds formulated for continuous injection or batch treatment to shield carbon steel assets from sweet (CO2) and sour (H2S) internal corrosion.",
    technicalBenefits: [
      "Rapidly adsorbs onto steel surfaces forming a persistent, micro-thin hydrophobic barrier",
      "Proven high corrosion rate reduction (> 92% efficiency in standard bubble & wheel testing)",
      "Thermally stable across elevated downhole and flowline operating conditions"
    ],
    availableSpecifications: "Active quaternary amine / imidazoline complexes; Density: 0.92 - 1.02 g/cm³; Water-dispersible and oil-soluble variants available",
    packaging: "200L internal coated steel drums or 1,000L heavy-duty IBC totes",
    manufacturerBrand: "Grow Dons Formulated Series",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Laboratory efficiency screened via NACE TM0169/ASTM standards",
    chemicalFormula: "Imidazoline / Amido-Amine Formulations",
    isFeatured: true
  },
  {
    id: "scale-inhibitor-polymeric",
    name: "Threshold Scale Inhibitors",
    category: "Production Chemicals",
    subCategory: "Scale Control",
    application: "Subsea manifolds, downhole completions, water disposal wells, surface heat exchangers",
    description: "Advanced phosphonate and carboxylic copolymer scale inhibitors engineered to interrupt the nucleation and crystal growth of calcium carbonate (CaCO3), barium sulfate (BaSO4), and strontium sulfate (SrSO4).",
    technicalBenefits: [
      "Threshold inhibition functioning at sub-stoichiometric concentrations (10 - 50 ppm active)",
      "High calcium tolerance preventing calcium-inhibitor precipitate formation in high-hardness waters",
      "Extends mean-time between chemical squeezes and costly mechanical scale remediation"
    ],
    availableSpecifications: "Active solids: 30% - 45%; Specific gravity: 1.15 - 1.25 g/cm³; Thermal stability up to 160°C",
    packaging: "200L HDPE drums and 1,000L intermediate bulk containers (IBC)",
    manufacturerBrand: "Grow Dons Formulated Series",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Batch verified scale loop test performance; Full CoA provided",
    chemicalFormula: "DETPMP / Modified Polycarboxylate Blends",
    isFeatured: false
  },
  {
    id: "biocide-thps-glutaraldehyde",
    name: "Broad-Spectrum Biocides (Glutaraldehyde & THPS)",
    category: "Production Chemicals",
    subCategory: "Biological Control",
    application: "Water injection systems, pipeline hydrotesting, completion brine preservation, storage tanks",
    description: "Fast-acting, non-foaming industrial biocidal formulations targeting Sulfate-Reducing Bacteria (SRB) and Acid-Producing Bacteria (APB) to eliminate microbiologically influenced corrosion (MIC) and reservoir souring.",
    technicalBenefits: [
      "High biocidal kill rates (>99.9% mortality within 2-4 hours contact time at treated dosage)",
      "Penetrates established bacterial sessile biofilms on pipe walls",
      "Readily hydrolyzes into environmentally benign degradation products upon downstream discharge"
    ],
    availableSpecifications: "Concentrations: 50% Glutaraldehyde base or 20%-75% THPS formulations; pH: 3.5 - 5.5",
    packaging: "200L UN-approved HDPE drums with tamper-evident seals, or 1,000L IBCs",
    manufacturerBrand: "Grow Dons Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Standard biocidal active assay; UN Transport Class 8 / 6.1 compliance",
    chemicalFormula: "Glutaraldehyde / THPS active matrix",
    isFeatured: false
  },
  {
    id: "hydrate-inhibitor-thermodynamic",
    name: "Hydrate Inhibitors (Thermodynamic & Kinetic)",
    category: "Production Chemicals",
    subCategory: "Flow Assurance",
    application: "Deepwater subsea tiebacks, gas condensate flowlines, choke valve freeze mitigation",
    description: "Thermodynamic and low-dosage hydrate inhibitors designed to depress gas hydrate equilibrium temperatures and prevent solid clathrate hydrate plug formation during production and shut-in cycles.",
    technicalBenefits: [
      "Substantially shifts hydrate equilibrium boundary towards lower temperatures and higher pressures",
      "Reduces production choke freezing and sudden line-pressure build-ups",
      "Available in customized formulations suited for cold subsea seabed ambient conditions"
    ],
    availableSpecifications: "Purity formulations meeting offshore low-temperature flowability requirements",
    packaging: "200L steel drums, 1,000L IBC totes, or bulk ISO container loads",
    manufacturerBrand: "Grow Dons Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Standard petrochemical specification; Batch flash & pour verified",
    chemicalFormula: "Methanol / Glycol Solvent Matrices",
    isFeatured: false
  },
  {
    id: "asphaltene-paraffin-dispersant",
    name: "Paraffin & Asphaltene Inhibitors",
    category: "Production Chemicals",
    subCategory: "Flow Assurance",
    application: "Waxy crude pipelines, wellbore tubing, subsea transfer lines, separator vessels",
    description: "Multifunctional polymeric dispersants and crystal modifiers that keep heavy organic paraffin crystals and asphaltene flocculates in stable colloidal suspension, preventing deposition on metal surfaces.",
    technicalBenefits: [
      "Lowers crude oil pour point and dynamic plastic viscosity at cooler operating temperatures",
      "Inhibits asphaltene precipitation triggered by pressure drops or solvent mixing",
      "Reduces mechanical pigging frequency and pipeline drag"
    ],
    availableSpecifications: "Active polymeric dispersant blend in high-flash aromatic solvent; Flash point > 62°C",
    packaging: "200L steel drums or 1,000L IBC totes",
    manufacturerBrand: "Grow Dons Formulated Series",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Laboratory cold-finger and dispersion verified; Detailed SDS provided",
    chemicalFormula: "Alkyl-Phenol / Polymeric Dispersant Blends",
    isFeatured: false
  },

  // 4. COMMODITY MINERALS & SOLVENTS
  {
    id: "methanol-industrial-grade",
    name: "Industrial Methanol",
    category: "Commodity Minerals & Solvents",
    subCategory: "Industrial Solvents",
    application: "Hydrate plug dissolution, pipeline drying, chemical purging, downhole solvent flushing",
    description: "High-purity industrial methyl alcohol supplied in bulk volumes for offshore line drying, hydrate dissociation treatments, and chemical solvent carrier functions.",
    technicalBenefits: [
      "Ultra-low moisture content ensuring high solvating efficiency for hydrate remediation",
      "High evaporation rate and low boiling point facilitating clean pipeline dewatering",
      "Economical high-volume solvent for rig operations and process line decontamination"
    ],
    availableSpecifications: "Purity: 99.85% min CH3OH; Water content < 0.10% w/w; Non-volatile matter < 0.003 g/100mL",
    packaging: "200L UN steel drums, 1,000L IBCs, or certified 20,000L ISO tanks",
    manufacturerBrand: "Grow Dons Commodity Supply",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "ASTM D1152 Specification; Full Flammable Liquid Handling Documentation",
    chemicalFormula: "CH3OH",
    isFeatured: false
  },
  {
    id: "glycols-meg-teg",
    name: "Glycols (TEG, MEG, DEG)",
    category: "Commodity Minerals & Solvents",
    subCategory: "Dehydration & Gas Treating",
    application: "Natural gas dehydration contactors, pipeline freeze protection, closed loop cooling",
    description: "High-grade Triethylene Glycol (TEG) and Monoethylene Glycol (MEG) supplied for gas dehydration units, removing water vapor from produced gas to meet transmission pipeline moisture specifications.",
    technicalBenefits: [
      "Strong hygroscopic affinity ensuring efficient moisture extraction from natural gas streams",
      "High thermal stability and low vapor pressure minimizing glycol loss during reboiler regeneration",
      "Low foaming and low degradation characteristics under continuous circulation"
    ],
    availableSpecifications: "Purity > 99.0% by weight; Specific gravity: 1.124 - 1.126 (TEG @ 20°C); Moisture < 0.20%",
    packaging: "200L HDPE/steel drums, 1,000L IBC totes, or bulk road tankers",
    manufacturerBrand: "Grow Dons Commodity Supply",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Standard Industrial Glycol Specification; Gas Processing Grade Certificate",
    chemicalFormula: "C6H14O4 (TEG) / C2H6O2 (MEG)",
    isFeatured: false
  },
  {
    id: "industrial-cleaning-degreasers",
    name: "Industrial Degreasing & Rig Wash Compounds",
    category: "Commodity Minerals & Solvents",
    subCategory: "Maintenance & Rig Wash",
    application: "Rig deck cleaning, mud pit washouts, storage vessel degreasing, machinery maintenance",
    description: "Biodegradable, heavy-duty surfactant formulations designed to emulsify and remove stubborn crude residues, grease, synthetic mud cakes, and heavy lubricants from metal equipment and workspace decks.",
    technicalBenefits: [
      "High detergency cutting through aged hydrocarbon films without attacking paint or seals",
      "Water-dilutable concentrate offering cost-effective coverage across heavy deck areas",
      "Formulated with biodegradable surfactants for environmentally conscious operations"
    ],
    availableSpecifications: "Aqueous concentrated surfactant/builder blend; pH: 8.5 - 10.5; Non-flammable",
    packaging: "25L jerrycans, 200L plastic drums, and 1,000L IBC totes",
    manufacturerBrand: "Grow Dons Technical Sourcing",
    tdsAvailable: true,
    sdsAvailable: true,
    certifications: "Safety Data Sheet provided; Non-hazardous transport classification",
    chemicalFormula: "Formulated Surfactant Blend",
    isFeatured: false
  }
];

// STRATEGIC PROCUREMENT CATEGORIES
export const PROCUREMENT_CATEGORIES: ProcurementCategory[] = [
  {
    id: "oilfield-chemicals",
    title: "Oilfield Chemicals & Bulk Reagents",
    description: "Direct sourcing of high-specification drilling additives, clear brine salts, production treaters, and commodity minerals directly from qualified manufacturers.",
    scopeItems: [
      "Drilling fluid additives & viscosifiers",
      "Completion salts (Calcium Chloride, Calcium Bromide)",
      "Production treaters (Inhibitors, Demulsifiers, Biocides)",
      "Bulk minerals (API Barite, Bentonite) & Industrial Solvents"
    ],
    iconName: "FlaskConical"
  },
  {
    id: "piping-valves",
    title: "Piping, Flanges & Industrial Valves",
    description: "Procurement of high-integrity carbon steel, stainless steel, and alloy valves, pipes, and fittings meeting ASME/API specifications for upstream and processing facilities.",
    scopeItems: [
      "Ball, gate, globe, and check valves (API 6D / 6A)",
      "Seamless and ERW line pipes (API 5L Grade B, X42 to X70)",
      "High-pressure flanges, forged fittings & gasket assemblies",
      "Actuated control valves and manifold accessories"
    ],
    iconName: "Layers"
  },
  {
    id: "filtration-consumables",
    title: "Filtration Media & Consumables",
    description: "Specialized filtration hardware, consumable cartridges, and filter aids ensuring high-clarity completion fluid and water-treatment operations.",
    scopeItems: [
      "High-surface pleated cartridge filter elements (2 µm to 50 µm)",
      "Heavy-duty polypropylene and polyester filter bags",
      "Diatomaceous Earth (DE) and perlite filter pre-coat aids",
      "Filter vessel spare seals, O-rings, and pressure manifolds"
    ],
    iconName: "Filter"
  },
  {
    id: "electrical-instrumentation",
    title: "Electrical & Instrumentation Materials",
    description: "Sourcing of industrial instrumentation, sensors, marine-grade cables, and electrical distribution hardware for harsh oilfield environments.",
    scopeItems: [
      "Pressure, differential, and temperature transmitters",
      "Hazardous-area junction boxes and explosion-proof lighting",
      "Armored marine power, instrumentation, and control cables",
      "Circuit breakers, switchgear components, and earthing supplies"
    ],
    iconName: "Cpu"
  },
  {
    id: "ppe-safety",
    title: "PPE & Industrial Safety Supplies",
    description: "Certified personal protective equipment and site safety consumables ensuring compliance with strict industrial safety standards.",
    scopeItems: [
      "Chemical-resistant overalls, nitrile gloves, and face shields",
      "Impact-rated safety footwear and flame-retardant coveralls (FRC)",
      "Emergency eye-wash stations, chemical spill containment kits",
      "Gas detection units, harness equipment, and breathing apparatus"
    ],
    iconName: "Shield"
  },
  {
    id: "workshop-tools",
    title: "General Operational & Workshop Supplies",
    description: "Reliable provisioning of maintenance tools, mechanical consumables, structural gratings, and field spares preventing operational downtime.",
    scopeItems: [
      "Heavy industrial hand and pneumatic tooling sets",
      "Structural steel angles, beams, plates, and galvanized gratings",
      "Industrial pumps, hoses, camlock fittings, and hose reels",
      "Lubricants, sealants, anti-seize compounds, and workshop consumables"
    ],
    iconName: "Wrench"
  }
];

// LOGISTICS CAPABILITIES: Supporting capability
export const LOGISTICS_CAPABILITIES: LogisticsCapability[] = [
  {
    id: "material-transportation",
    title: "Material Transportation & Haulage",
    description: "Coordinated land haulage of containerized chemicals, palletized sacks, bulk liquids, and heavy equipment across Nigerian operational hubs.",
    features: [
      "Heavy-duty flatbed and low-bed haulage fleet coordination",
      "Dedicated chemical truck transport equipped with spill preparedness kits",
      "Interstate logistics linking Port Harcourt, Warri, Lagos, and field terminals",
      "Strict route risk assessment and cargo securing standards"
    ],
    iconName: "Truck"
  },
  {
    id: "chemical-handling",
    title: "Chemical & Hazardous Material Handling",
    description: "Safe staging, transfer, and storage of chemical products adhering to strict MSDS handling protocols and environmental directives.",
    features: [
      "Secondary containment bunding and dedicated chemical warehouse staging",
      "Trained chemical handling crews equipped with appropriate PPE",
      "Comprehensive Safety Data Sheet (SDS) compliance on all dispatches",
      "Spill prevention procedures and emergency containment response"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "site-delivery",
    title: "Site & Shorebase Coordination",
    description: "Direct-to-gate delivery and dockside coordination at major shorebases and production yards across the Niger Delta region.",
    features: [
      "Dockside delivery coordination at Onne Port and Warri Shorebases",
      "Timely offloading coordination at drilling locations and client depots",
      "Gate clearance, documentation verification, and delivery waybills",
      "Staging management to meet drilling schedule call-offs"
    ],
    iconName: "MapPin"
  },
  {
    id: "inventory-staging",
    title: "Supply-Chain Coordination & Staging",
    description: "Managing buffer stock and staging inventory in Port Harcourt to ensure rapid fulfillment when client operations call for materials.",
    features: [
      "Port Harcourt warehouse staging for rapid field dispatch",
      "Real-time inventory tracking and batch traceability",
      "Consolidated packaging reducing multi-vendor transport friction",
      "Order consolidation for routine and scheduled maintenance turnarounds"
    ],
    iconName: "PackageCheck"
  }
];

// LEADERSHIP: Exactly four core leadership positions as specified
export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: "managing-director",
    name: "Donatus Eziokwu Ukachi",
    title: "Managing Director",
    executiveArea: "Executive Governance & Corporate Direction",
    imageUrl: directorImg,
    responsibilities: [
      "Strategic leadership and long-term corporate vision",
      "Corporate direction and organizational governance",
      "Business development and key market expansion",
      "Strategic partnerships and international sourcing alliances",
      "Major client relationships across oilfield and industrial sectors",
      "Corporate governance and regulatory compliance oversight"
    ],
    profileNote: "Guides corporate strategy and executive decisions to position Grow Dons as a trusted technical supply partner."
  },
  {
    id: "general-manager",
    name: "Ekweme Bestman",
    title: "General Manager",
    executiveArea: "Commercial Operations & Organizational Performance",
    imageUrl: gmImg,
    responsibilities: [
      "Overall business management and operational alignment",
      "Commercial coordination and contracting oversight",
      "Client engagement and key account service delivery",
      "Performance management across organizational departments",
      "Business development execution and commercial negotiations"
    ],
    profileNote: "Coordinates commercial execution, departmental performance, and client satisfaction across all supply contracts."
  },
  {
    id: "operations-manager",
    name: "Jerry Joseph",
    title: "Operations Manager",
    executiveArea: "Technical Operations, Field Logistics & Quality",
    imageUrl: opsImg,
    responsibilities: [
      "Operational execution of supply contracts and site dispatches",
      "Technical operations and product specifications verification",
      "Field coordination and shorebase delivery management",
      "HSE implementation and safe chemical handling oversight",
      "Quality control and Certificate of Analysis (CoA) verification",
      "Operational resources allocation and logistics execution"
    ],
    profileNote: "Ensures operational delivery, technical specification adherence, and rigorous HSE standards on every dispatch."
  },
  {
    id: "procurement-manager",
    name: "Ukachi Martins Chijindu",
    title: "Procurement Manager",
    executiveArea: "Strategic Sourcing, Vendor Relations & Supply Chain",
    imageUrl: procImg,
    responsibilities: [
      "Strategic sourcing of oilfield chemicals, equipment, and materials",
      "Supplier management and international manufacturing partner audits",
      "Vendor relationships and supply agreement negotiations",
      "RFQ and purchasing coordination for rapid quotation delivery",
      "Material availability planning and inventory lead-time management",
      "Supply-chain coordination from origin to final customer delivery"
    ],
    profileNote: "Manages qualified supplier networks, competitive pricing, and reliable material availability across all product lines."
  }
];

// CORE VALUES
export const CORE_VALUES: ValueItem[] = [
  {
    name: "Trust",
    description: "Cultivating transparent, dependable relationships and mutual confidence with client operators and partners.",
    iconName: "Shield"
  },
  {
    name: "Excellence",
    description: "Maintaining strict standards of technical execution and product quality that meet client specifications with precision.",
    iconName: "Award"
  },
  {
    name: "Team Work",
    description: "Fostering collaboration across chemical specialists, sourcing coordinators, and logistics personnel.",
    iconName: "Users"
  },
  {
    name: "Ethics",
    description: "Conducting business with absolute integrity, transparency, contractual honor, and environmental consciousness.",
    iconName: "Scale"
  },
  {
    name: "Safety",
    description: "Prioritizing the physical safety of personnel, rigorous chemical handling protocols, and zero workplace incidents.",
    iconName: "ShieldCheck"
  },
  {
    name: "Competence",
    description: "Combining technical product knowledge with supply-chain discipline to solve operational challenges effectively.",
    iconName: "Cpu"
  }
];

// INDUSTRIES SERVED
export const INDUSTRIES_SERVED = [
  {
    name: "Upstream Exploration & Drilling",
    desc: "Supplying high-performance drilling fluid additives, mud weighting materials, shale stabilizers, and mud-loss compounds for land, swamp, and offshore drilling."
  },
  {
    name: "Well Completion & Workover",
    desc: "Delivering high-purity clear brines (calcium chloride, calcium bromide), completion filtration media, and packer fluids safeguarding reservoir formations."
  },
  {
    name: "Production & Processing Facilities",
    desc: "Formulating demulsifiers, corrosion inhibitors, biocides, scale inhibitors, and hydrate preventers preserving pipeline integrity and export standards."
  },
  {
    name: "Industrial & Manufacturing Plants",
    desc: "Providing commodity chemicals, industrial solvents (methanol, glycols), degreasing compounds, water treatment reagents, and essential MRO supplies."
  }
];

// CAROUSEL GALLERY SLIDES - 100% African Working Operations Personnel
export const CAROUSEL_GALLERY_SLIDES: GallerySlide[] = [
  {
    id: "qa-testing-lab",
    title: "Drilling Fluid Analysis & CoA Quality Testing",
    category: "Technical QA / QC",
    description: "African chemical quality control chemists performing certified fluid density, marsh funnel viscosity, rheology, and purity assay prior to batch dispatch.",
    location: "Technical QA Laboratory, Port Harcourt",
    badge: "Certified CoA Protocol",
    imageUrl: africanLabChemistImg
  },
  {
    id: "chemical-warehouse",
    title: "High-Bay Chemical Storage & Palletized Staging",
    category: "Warehouse Logistics",
    description: "African warehouse logistics supervisors managing climate-monitored high-bay chemical facility housing API-grade bentonite, barite, biocides, and IBC totes on containment pallets.",
    location: "Port Harcourt Central Warehouse",
    badge: "API & ISO Compliant",
    imageUrl: africanWarehouseImg
  },
  {
    id: "offshore-quayside",
    title: "Quayside Transfer & Offshore Supply Vessel Support",
    category: "Marine Logistics",
    description: "African quayside dockworkers and marine logistics crew supervising certified chemical loading, offshore slings, and vessel crane transfers.",
    location: "Onne Free Zone & Warri Shorebases",
    badge: "Shorebase Logistics",
    imageUrl: africanQuaysideImg
  },
  {
    id: "chemical-staging",
    title: "Chemical Batch Formulation & Rig Site Dispatch",
    category: "Field Operations",
    description: "African petroleum chemical engineers conducting precision drum staging, secondary containment checks, and rapid hazardous material rig dispatch.",
    location: "Rivers & Delta Operating Corridors",
    badge: "HSE Level-1 Safety",
    imageUrl: africanFieldChemistsImg
  },
  {
    id: "technical-team",
    title: "Technical Engineering & Procurement Specialists",
    category: "Corporate Excellence",
    description: "African petroleum engineers and technical procurement specialists coordinating compliant field supply delivery and upstream chemical schedules.",
    location: "Commercial Operations Desk, Port Harcourt",
    badge: "100% Indigenous Content",
    imageUrl: africanProcureTeamImg
  },
  {
    id: "rig-fluid-operations",
    title: "Drilling Fluid Engineering & Active Mud Mixing",
    category: "Drilling Operations",
    description: "African drilling fluid specialists monitoring chemical mixing hoppers, circulation tanks, and real-time rheology on active drilling rig sites.",
    location: "Niger Delta Drilling Locations",
    badge: "Wellsite Engineering",
    imageUrl: africanDrillingCrewImg
  }
];

// FAQS
export const FAQS: FAQItem[] = [
  {
    question: "What is Grow Dons Services Ltd's primary business specialization?",
    answer: "Grow Dons Services Ltd specializes primarily in oilfield chemicals and specialized technical chemical supply for drilling, completion, production, and industrial operations. Our chemical offerings are supported by strategic procurement and reliable logistics capabilities.",
    category: "General"
  },
  {
    question: "Is Grow Dons Services Ltd an indigenous Nigerian registered company?",
    answer: "Yes. Grow Dons Services Ltd is a fully registered indigenous Nigerian company (RC. 1902045) headquartered in Port Harcourt, Rivers State. We operate in full compliance with Nigerian corporate laws and Nigerian Content Development and Monitoring Board (NCDMB) local content directives.",
    category: "General"
  },
  {
    question: "What chemical categories do you supply for drilling and completion?",
    answer: "Our core chemical portfolio includes Drilling Fluid Chemicals (API Grade Bentonite, API Grade Barite, fluid-loss additives, shale inhibitors, lubricants), Completion & Workover Chemicals (Calcium Chloride, Calcium Bromide, clear brines, corrosion inhibitors, biocides), and Production Chemicals (Demulsifiers, scale inhibitors, film-forming corrosion inhibitors, hydrate inhibitors, and asphaltene dispersants).",
    category: "Chemicals"
  },
  {
    question: "Do you supply technical data sheets (TDS) and safety data sheets (SDS)?",
    answer: "Yes. Technical Data Sheets (TDS) and Safety Data Sheets (SDS) are provided for all chemical products upon request and are systematically included with material dispatch documentation. Every delivery is accompanied by Certificates of Analysis (CoA) confirming compliance with agreed specifications.",
    category: "Chemicals"
  },
  {
    question: "What items fall under your technical procurement services?",
    answer: "Our strategic procurement division handles oilfield chemicals, mechanical piping materials (valves, pipes, flanges, fittings), filtration media and cartridges, electrical and instrumentation supplies, certified PPE and safety gear, and general operational consumables.",
    category: "Procurement"
  },
  {
    question: "How do you handle chemical safety, storage, and transport?",
    answer: "Safety is integral to our operations. Chemical products are staged in verified warehouse facilities equipped with secondary containment and safety apparatus. All transportation adheres to MSDS guidelines, with trained personnel, verified cargo securing, and emergency spill response preparedness.",
    category: "Logistics & HSE"
  },
  {
    question: "What are your standard delivery lead times and locations?",
    answer: "We routinely coordinate deliveries to major operational bases including Port Harcourt, Onne Free Zone corridor, Warri shorebases, and Lagos industrial hubs. Delivery timelines depend on product availability and order scale, with standard stocked materials dispatched within 2 to 5 business days of order confirmation.",
    category: "Logistics & HSE"
  },
  {
    question: "How can clients request a formal quotation or submit an RFQ?",
    answer: "Clients can submit specifications directly through our online Request for Quote (RFQ) portal on this website (www.growdonsservices.com), email requirements to growdonsservicesltd@gmail.com, or contact our commercial desk via WhatsApp or phone at +234 812 875 1360 (or +234 803 463 8006).",
    category: "Commercial & RFQ"
  }
];

// Compatibility exports for legacy or standalone components
export const PRODUCTS = CHEMICAL_PRODUCTS;

export const FLUID_SYSTEMS = [
  { name: "Water-Based Muds (WBM)", desc: "High-inhibition potassium chloride and polymer drilling systems for onshore and swamp environments." },
  { name: "Non-Aqueous / OBM Systems", desc: "Stable synthetic and low-toxicity mineral oil-based invert emulsion systems." },
  { name: "Completion Brines", desc: "Clear solids-free monovalent and divalent salt solutions customized to target density." },
  { name: "Production Chemicals", desc: "Corrosion inhibitors, demulsifiers, biocides, and scale prevention formulations." },
  { name: "Workover & Stimulation", desc: "Wellbore clean-up surfectants, mutual solvents, mutual acids, and mutual spacer formulations." },
  { name: "Environmental Formulations", desc: "Readily biodegradable, low-toxicity eco-friendly offshore discharge chemistries." }
];

export const SERVICES = [
  {
    id: "chemicals",
    title: "Specialty Oilfield Chemistry",
    iconName: "FlaskConical",
    shortDescription: "Formulated drilling, production, and completion chemistries.",
    fullDescription: "Grow Dons delivers premium technical chemicals tailored to oil and gas exploration, drilling operations, production facilities, and offshore rigs across Nigeria.",
    points: [
      "Rig-ready formulation and batch certification",
      "Full CoA and SDS documentation provided",
      "Corrosion, scale, and emulsion treatment programs",
      "Buffer stocks maintained in Port Harcourt"
    ]
  },
  {
    id: "offshore-support",
    title: "Offshore Logistics & Technical Staging",
    iconName: "Ship",
    shortDescription: "Vessel-ready cargo consolidation and shorebase expediting.",
    fullDescription: "Direct supply-chain linkage between chemical supply hubs and offshore drilling units, ensuring timely vessel loading and certified cargo handling.",
    points: [
      "Certified marine container packaging",
      "Onne port and Port Harcourt shorebase dispatch",
      "Rapid turnaround for hot-shot critical requirements",
      "Secondary containment and environmental safety"
    ]
  },
  {
    id: "equipment-rental",
    title: "Technical Supply & Equipment Coordination",
    iconName: "Layers",
    shortDescription: "High-grade valves, flanges, filtration and containment hardware.",
    fullDescription: "Comprehensive industrial hardware procurement supporting chemical circulation, high-pressure manifold connections, and filtration units.",
    points: [
      "API 6A / 6D compliant valves and fittings",
      "Heavy-duty chemical dosing skid packages",
      "Filtration bags, cartridges, and testing supplies",
      "Strategic original manufacturer sourcing"
    ]
  },
  {
    id: "brine-filtration",
    title: "Brine Preparation & QA/QC Analysis",
    iconName: "Filter",
    shortDescription: "Certified density verification, titration and laboratory validation.",
    fullDescription: "In-house quality assurance laboratory testing for clear brine density, viscosity, chemical purity, and corrosion resistance.",
    points: [
      "Certified hydrometer and pycnometer density checks",
      "Fann 35 rheological testing compatibility",
      "Third-party accredited verification support",
      "Pre-dispatch sampling and retained reference samples"
    ]
  }
];

export const ATTRIBUTES = [
  { name: "Technical Rigor", subtitle: "Formulations verified through stringent laboratory analysis and standard specs.", iconName: "Shield" },
  { name: "Local Content Champion", subtitle: "100% Nigerian entity certified under NUPRC guidelines (RC 1902045).", iconName: "Award" },
  { name: "Supply Chain Reliability", subtitle: "Strategic local buffer inventories reducing downtime for active rigs.", iconName: "Clock" },
  { name: "HSE Commitment", subtitle: "Zero-harm culture with verified hazardous materials packaging and handling.", iconName: "HeartPlus" },
  { name: "Rapid Response Desk", subtitle: "Direct technical consultation and emergency dispatch coordination.", iconName: "Zap" },
  { name: "Cost Efficiency", subtitle: "Optimized direct-manufacturer sourcing lowering total operational costs.", iconName: "Tag" }
];

export const PARTNERS = [
  { name: "Chevron", logoText: "CHEVRON", vibe: "Offshore Production" },
  { name: "Shell", logoText: "SHELL / SPDC", vibe: "Swamp & Land Wells" },
  { name: "TotalEnergies", logoText: "TOTAL", vibe: "Deepwater Ops" },
  { name: "ExxonMobil", logoText: "EXXON", vibe: "Offshore Facilities" },
  { name: "NLNG", logoText: "NLNG", vibe: "Gas & Condensate" },
  { name: "Seplat Energy", logoText: "SEPLAT", vibe: "Onshore Production" }
];

