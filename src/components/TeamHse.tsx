import React, { useState } from "react";
import { IMAGES } from "../data";
import { 
  ShieldAlert, 
  Users, 
  CheckSquare, 
  HeartHandshake, 
  Award, 
  FileCheck2, 
  HeartPlus, 
  Mail, 
  GraduationCap, 
  Quote, 
  Briefcase,
  ChevronDown,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

type HsePanel = "workforce" | "leadership" | "safety-policy" | "quality-objectives";

export const TeamHse: React.FC = () => {
  const { currentLang } = useTranslation();
  
  // Set the first panel as active by default to greet the user
  const [openPanel, setOpenPanel] = useState<HsePanel | null>("leadership");
  const [ceoImageError, setCeoImageError] = useState(false);
  const [memberImageErrors, setMemberImageErrors] = useState<Record<string, boolean>>({});

  const togglePanel = (panel: HsePanel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  const qualityObjectives = [
    {
      title: "Technical Excellence",
      desc: "Ensure adequate equipment and testing resources are fully provided each quarter to enhance chemical process improvement."
    },
    {
      title: "Professional Empowerment",
      desc: "Implement structured downhole mud safety and handling programs for all field specialists, growing local talent safely."
    },
    {
      title: "Strong Customer Relations",
      desc: "Serve clients responsively, maintaining absolute transparency, keeping delivery promises, and building long-term alliances."
    },
    {
      title: "Formal Quality Reporting",
      desc: "Maintain a rigorous, formal structure for batch tests and incident logs which are reviewed weekly by executive management."
    }
  ];

  const sectionLabels = {
    title: {
      en: "Executive Board & Management Team",
      pg: "Our Executive Ogas & Management Staff",
      fr: "Équipe de Direction & Conseil d'Administration",
      yo: "Awọn Alakoso ati Ẹgbẹ Alabojuto Wa",
      ha: "Shugabannin Kamfanin da Masu Gudanarwa"
    },
    subtitle: {
      en: "Highly competent indigenous leadership driving world-class downhole performance",
      pg: "Better Naija brains with heavy oilfield experience guiding mud logistics",
      fr: "Un leadership indigène de haut niveau au service de l'efficacité opérationnelle",
      yo: "Awọn olori abinibi to ni imọ-ijinlẹ to ga julọ ninu iṣẹ rẹ",
      ha: "Kwararrun shugabanni masu samar da ingantaccen sakamako a teku"
    },
    spotlightTitle: {
      en: "Managing Director / CEO Spotlight",
      pg: "Executive Spotlight: Managing Director",
      fr: "Focus: Directeur Général & PDG",
      yo: "Iyanju Alabojuto Agba (MD/CEO)",
      ha: "Tattaunawa da Daraktan Gudanarwa"
    },
    educationLabel: {
      en: "Education & Credentials",
      pg: "Qualify & Certificate",
      fr: "Diplômes & Titres",
      yo: "Ẹkọ ati Awọn Iwe Ijẹrisi",
      ha: "Ilimi da Takaddun Shaida"
    },
    contactMe: {
      en: "Direct Mail",
      pg: "Write Message",
      fr: "Courriel Direct",
      yo: "Kàn sí lori Waya",
      ha: "Hanyar Sadarwa"
    }
  };

  const mdSpotlightData = {
    name: "Dr. Chikaobi Panuku, KSC",
    initials: "CP",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    education: {
      en: "Ph.D. in Petrochemical Logistics, M.Sc. in Drilling Fluid Technology",
      pg: "Doctor of Petrochemical Mud Engineering",
      fr: "Ph.D. en Logistique Pétrochimique, M.Sc. en Fluides de Forage",
      yo: "Ph.D. ninu Eto Gbigbe Epo ati Imọ-ẹrọ Drill-Fluid",
      ha: "Ph.D. na Hada Sinadaran Mai, M.Sc. na Fasahar Lakar Rijiyoyin Mai"
    },
    role: {
      en: "Managing Director & Chief Executive Officer",
      pg: "Managing Director / CEO (Oga Kpatakpata)",
      fr: "Directeur Général & Chef de la Direction",
      yo: "Alakoso ati Alabojuto Agba",
      ha: "Daraktan Gudanarwa da Shugaba"
    },
    bio: {
      en: "An elite oilfield chemical logistics strategist and downstream engineering veteran with over 22 years of hands-on leadership directing chemical formulation, drilling solids loops, and fluid supply chain operations across Nigeria's active blocks. Under his guidance, Grow Dons Services has scaled into a reliable partner for major terminal operators.",
      pg: "Oga kpata-kpata and ogbonge leader wey get over 22 years experience for inside oil & gas chemical formulation, mud testing and fluid supply across Naija. Under im hand, Grow Dons don turn to giant partner.",
      fr: "Stratège d'élite en logistique chimique pétrolière et vétéran de l'ingénierie aval avec plus de 22 ans de leadership pratique dirigeant la formulation chimique et les opérations logistiques complexes.",
      yo: "Alakoso pataki ti o ni mọkanlelogun ọdun ni idagbasoke ati iṣakoso kemikali pataki ati gbigbe epo. Labẹ rẹ, Grow Dons ti di alafaramo pataki fun awọn epo nla.",
      ha: "Kwararren mai tsara dabarun sinadarai ne da ayyukan samar da kayan aiki dake da gogewar aiki ta shekaru 22. A karkashin jagorancinsa, kamfanin ya bunkasa sosai a fadin kasarnan."
    },
    quote: {
      en: "Our growth is built upon absolute operational safety and chemical high-performance. We do not just supply fluids—we secure reservoir yields with verified indigenous technical talents.",
      pg: "Our growth dey rest on top safety and high-performance. We no dey just sell chemicals—we dey protect reservoir production with correct local engineering power.",
      fr: "Notre croissance repose sur une sécurité opérationnelle absolue et une haute performance chimique. Nous ne livrons pas seulement des fluides—nous sécurisons le rendement.",
      yo: "Idagbasoke wa duro lori ààbò to daju ati didara ti o ga julọ. A ko kan gbe awọn kemikali wa—a n daabobo didara sisan epo rẹ pẹlu awọn oṣiṣẹ abinibi.",
      ha: "Habakar ayyukanmu ya dogara ne kan cikakken tsaro na aiki. Ba muna sayar da sinadarai kawai ba ne—muna kare samar da mai tare da kwararrun Najeriya."
    },
    email: "c.panuku@growdons.com"
  };

  const executiveMembers = [
    {
      id: "coo",
      name: "Engr. Yusuf Babatunde",
      initials: "YB",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      role: {
        en: "Director of Technical Operations & Fluids",
        pg: "Oga Operations & Mud Engineering",
        fr: "Directeur des Opérations Techniques & Fluides",
        yo: "Alakoso Awọn Iṣẹ Imọ-ẹrọ",
        ha: "Daraktan Ayyukan Injiniya da Sinadarai",
      },
      bio: {
        en: "Over 18 years formulating specialized completion fluids and drilling mud systems. Registered with COREN, leading onshore oil block stabilization and solids control logistics.",
        pg: "Oga wey don do over 18 years for inside mud formulation, solids control loops and downhole safety blocks.",
        fr: "Plus de 18 ans d'expérience dans la formulation de fluides de complétion et de boues de forage. Membre certifié du COREN.",
        yo: "Olukọọkan ti o ni ẹni ọdun mọjidinlọgún ninu eto idapọ rẹ ati abojuto drill-fluid kọja Niger Delta.",
        ha: "Yana da gogewar aiki ta shekaru 18 a bangaren hada sinadaran hako mai da lura da lakar rijiyoyin mai.",
      },
      email: "y.babatunde@growdons.com"
    },
    {
      id: "cpo",
      name: "Mrs. Amara Nwosu",
      initials: "AN",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      role: {
        en: "Head of Global Supply Chain & RFQ Procurement",
        pg: "Oga Supply Chain & Buying Section",
        fr: "Responsable de la Chaîne d'Approvisionnement",
        yo: "Alakoso rira ati Gbigbe Awọn Ohun elo",
        ha: "Mai Kula da Harkokin Siyan Kayayyaki",
      },
      bio: {
        en: "Over 15 years leading global material procurement, international shipping alliances, customs clearance, and strategic warehousing of specialty drill-site compounds.",
        pg: "Oga wey dey control all importing, customs clearance, and prompt logistics to drilling field coordinates.",
        fr: "Plus de 15 ans à la tête des achats mondiaux de matériel, de l'affrètement de navires et de l'entreposage logistique.",
        yo: "Inu nikan ni o n ṣakoso gbigbe awọn kemikali wọle ati ibasepo pẹlu awọn ile-iṣẹ okeere lati ọdun mẹdogun.",
        ha: "Sama da shekaru 15 tana jagorantar harkar siyan kayan aiki na kasa da kasa, da kuma jigilar sinadarai na musamman.",
      },
      email: "a.nwosu@growdons.com"
    },
    {
      id: "hse",
      name: "Alhaji Kabiru Garba",
      initials: "KG",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      role: {
        en: "Head of Quality Control & Rigsite HSE",
        pg: "Oga Safety & ISO Quality Checker",
        fr: "Directeur HSE & Système d'Assurance Qualité",
        yo: "Alakoso Ààbò ati Didara Standard",
        ha: "Shugaban Kula da Lafiya da Tsaro (HSE)",
      },
      bio: {
        en: "Distinguished environmental scientist ensuring 100% compliance with ISO 9001:2015, OSHA regulations, and local NCDMB content guidelines to protect field crew safety.",
        pg: "Environmental scientist wey dey check make everybody wear safety gear and protect environment make oil spill no happen.",
        fr: "Scientifique de l'environnement assurant une conformité totale aux normes ISO 9001:2015, OSHA et NCDMB de l'équipage.",
        yo: "Onimọ-jinlẹ nipa àyíká ti o n ṣakoso ibamu pẹlu ISO 9001:2015 ati awọn ilana aabo OSHA.",
        ha: "Masanin kiyaye muhalli ne dake tabbatar da dacewa da ka'idojin ISO 9001:2015 da dokokin kariya ta kasa.",
      },
      email: "k.garba@growdons.com"
    },
    {
      id: "cfo",
      name: "Mr. Stanley Chinedu",
      initials: "SC",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
      role: {
        en: "Director of Finance & Legal Strategy",
        pg: "Oga Financial Plan & Company Auditor",
        fr: "Directeur Financier & Stratégie Légale",
        yo: "Alakoso Isuna ati Eto Ofin",
        ha: "Daraktan Sashen Kudi da Tsare-Tsare",
      },
      bio: {
        en: "Manages capital structure optimization, commercial risk profiling, compliance audits, and local project execution financing to warrant smooth corporate governance.",
        pg: "Oga wey dey calculate pricing and cashflow to make sure company money clean and audit-ready always.",
        fr: "Gère l'optimisation des structures financières, les audits de conformité réglementaire et le financement des projets.",
        yo: "Alakoso pataki lori isuna, eto iye oye, ati ibamu pẹlu ofin fun idagbasoke eto-ọrọ ile-iṣẹ.",
        ha: "Shugaban kula da kudaden shiga, kasafin kudi, da kuma tace bayanan kudi domin gudanar da ayyuka ba tare da cikas ba.",
      },
      email: "s.chinedu@growdons.com"
    },
    {
      id: "alliance",
      name: "Dr. Jean-Marc Laurent",
      initials: "JL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      role: {
        en: "Director of Technical Alliances",
        pg: "Oga International Partnership & Tech",
        fr: "Directeur des Partenariats Techniques",
        yo: "Alakoso Ifowosowopo Imọ-ẹrọ Agbaye",
        ha: "Daraktan Kawancen Fasaha na Kasa da Kasa",
      },
      bio: {
        en: "Orchestrates chemical synthesis evaluations and handles technology transfer pathways from European formulation hubs to local onshore reservoir completion campaigns.",
        pg: "Oga specialist wey dey connect our indigenous labs with European chemical test hubs for better mud testing.",
        fr: "Orchestre les évaluations de synthèse chimique et gère les transferts de technologie depuis l'Europe.",
        yo: "Olori eto ifowosowopo imọ-ẹrọ agbaye lati gbe awọn ọna didara titun lati okeere wọ ayika iṣẹ wa.",
        ha: "Yana kula da musayar fasahar zamani da kawancen sinadaran hako mai tare da binciken dakin gwaje-gwaje na kasashen waje.",
      },
      email: "jm.laurent@growdons.com"
    }
  ];

  const getLabel = (obj: any) => {
    return obj[currentLang] || obj["en"] || "";
  };

  return (
    <section id="hse" className="py-14 sm:py-20 bg-slate-55 bg-slate-100/40 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-3 py-1.5 bg-emerald-110 bg-emerald-100 text-emerald-800 rounded text-xs font-mono tracking-widest uppercase mb-3 font-semibold border border-emerald-200">
            HSE &amp; QUALITY ASSURANCE POLICY
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-900 mb-2">
            Team Management &amp; Safety Excellence
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-500 font-sans mt-3 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            Our dual priorities are the safety of our technical workforce and the absolute compliance of our products on-site.
          </p>
        </div>

        {/* Custom Collapsible Accordion Panels Stack */}
        <div className="max-w-4xl mx-auto space-y-4">

          {/* ACCORDION ITEM 1: TECHNICAL WORKFORCE */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("workforce")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "workforce" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    1. High Performance Technical Workforce
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Licensed mud chemists and downstream petroleum logistics experts in Nigeria.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "workforce" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "workforce" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-2">
                      <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[#005B94]">
                          <Users className="h-5 w-5 text-brand-orange" />
                          <h4 className="text-base font-display font-bold text-slate-900">
                            Result-Oriented Downhole Specialists
                          </h4>
                        </div>
                        <p className="text-slate-600 font-sans leading-relaxed text-xs sm:text-sm">
                          Grow Dons Services is made up of a dedicated team of intelligent, registered professionals possessing deep, robust experience within downhole engineering and industrial oil &amp; gas chemistry. Our team is focused on delivering exceptional products and client services across Nigeria&rsquo;s toughest exploration blocks.
                        </p>
                        <p className="text-slate-[#005B94] font-sans leading-relaxed text-xs">
                          Every member of the team is focused on ultimate chemical performance. We make decisions using organized, logical, and evidence-backed testing methods. Each engineer demonstrates a rigorous work ethic, ensuring field tasks and chemical delivery processes are executed safely, properly, and inside your timeline.
                        </p>
                        <div className="border-l-4 border-brand-orange pl-4 py-2 bg-brand-orange/5 rounded-r-lg">
                          <p className="text-[11.5px] font-sans italic text-slate-700 leading-relaxed">
                            &ldquo;Our technical staff and chemists undergo routine licensing and mud-formulation updates. This creates a high-performing group dedicated to flawless reservoir completion.&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm border-2 border-white group">
                        <img
                          src={IMAGES.team}
                          alt="Engineering Team on site"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                        <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                          <p className="font-mono text-[9px] text-brand-orange uppercase tracking-wider font-bold">Port Harcourt Chemical Team</p>
                          <h4 className="font-display font-bold text-sm mt-0.5 select-none text-white">Indigenous Competence, Global Quality Standards</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACCORDION ITEM 2: EXECUTIVE LEADERSHIP */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("leadership")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "leadership" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    2. Executive Leadership Board
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Dr. Chikaobi Panuku (MD/CEO) and COREN-certified drilling fluids directors.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "leadership" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "leadership" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100 bg-slate-50/30">
                    <div className="mt-3">
                      
                      {/* MD Spotlight Box */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 p-5 sm:p-7 relative mb-6">
                        <div className="absolute right-0 top-0 w-16 h-16 bg-brand-orange/5 rounded-bl-full pointer-events-none" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                          <div className="lg:col-span-4 flex flex-col items-center text-center p-4 bg-slate-900 text-white rounded-xl relative shadow-xs">
                            <div className="relative w-24 h-24 rounded-full border-2 border-slate-800 bg-slate-800 overflow-hidden mb-3 shadow-sm select-none flex items-center justify-center">
                              {!ceoImageError && mdSpotlightData.image ? (
                                <img 
                                  src={mdSpotlightData.image} 
                                  alt={mdSpotlightData.name}
                                  referrerPolicy="no-referrer"
                                  onError={() => setCeoImageError(true)}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-white text-2xl font-display font-black tracking-tight">{mdSpotlightData.initials}</span>
                              )}
                              <span className="absolute bottom-1 right-1 flex h-2 w-2 z-10">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                            </div>

                            <h4 className="text-sm font-display font-bold text-white tracking-tight leading-tight">{mdSpotlightData.name}</h4>
                            <p className="text-[10px] text-brand-orange-light font-mono uppercase font-semibold mt-0.5 tracking-wider leading-relaxed">
                              {getLabel(mdSpotlightData.role)}
                            </p>

                            <div className="mt-3 w-full space-y-2 pt-3 border-t border-slate-800 text-left text-[10px] font-sans">
                              <div className="flex gap-2 items-start">
                                <GraduationCap className="h-3.5 w-3.5 text-[#005B94] flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-semibold text-slate-400 uppercase font-mono text-[8px]">{getLabel(sectionLabels.educationLabel)}</p>
                                  <p className="text-slate-300 mt-0.5 leading-tight">{getLabel(mdSpotlightData.education)}</p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center">
                                <Mail className="h-3.5 w-3.5 text-brand-orange" />
                                <div>
                                  <p className="font-semibold text-slate-400 uppercase font-mono text-[8px]">{getLabel(sectionLabels.contactMe)}</p>
                                  <p className="text-slate-300 font-mono tracking-tight">{mdSpotlightData.email}</p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-3 left-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold">
                              FOUNDING CEO
                            </div>
                          </div>

                          <div className="lg:col-span-8 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-1.5 text-[#005B94] mb-2">
                                <Briefcase className="h-4 w-4 text-brand-orange" />
                                <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#005B94]">{getLabel(sectionLabels.spotlightTitle)}</span>
                              </div>
                              <h4 className="text-base sm:text-lg font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                                {mdSpotlightData.name}
                              </h4>
                              <p className="text-[11px] text-[#005B94] font-semibold font-mono mt-0.5 mb-3 leading-none">
                                {getLabel(mdSpotlightData.role)}
                              </p>
                              <p className="text-slate-600 font-sans leading-relaxed text-xs sm:text-sm mb-4">
                                {getLabel(mdSpotlightData.bio)}
                              </p>
                            </div>

                            <div className="p-4 bg-[#005B94]/5 border-l-4 border-brand-orange rounded-r-xl relative max-w-xl">
                              <Quote className="absolute top-2 right-3 h-8 w-8 text-brand-orange/10 pointer-events-none" />
                              <p className="text-xs font-sans font-medium italic text-slate-850 leading-relaxed relative z-10">
                                {getLabel(mdSpotlightData.quote)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Other Core Executive Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {executiveMembers.map((member) => (
                          <div 
                            key={member.id} 
                            className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center gap-3.5 mb-4">
                                <div className="h-11 w-11 rounded-lg bg-slate-900 overflow-hidden shadow-xs flex items-center justify-center flex-shrink-0">
                                  {!memberImageErrors[member.id] && member.image ? (
                                    <img 
                                      src={member.image} 
                                      alt={member.name}
                                      referrerPolicy="no-referrer"
                                      onError={() => setMemberImageErrors(prev => ({ ...prev, [member.id]: true }))}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                  ) : (
                                    <span className="text-white font-display font-bold text-base">{member.initials}</span>
                                  )}
                                </div>
                                <div className="leading-tight">
                                  <h5 className="font-display font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                                    {member.name}
                                  </h5>
                                  <span className="text-[10px] font-mono uppercase font-bold text-brand-orange tracking-wide">
                                    {getLabel(member.role)}
                                  </span>
                                </div>
                              </div>

                              <p className="text-slate-500 font-sans text-[11px] leading-relaxed mb-4 border-b border-slate-100 pb-3">
                                {getLabel(member.bio)}
                              </p>
                            </div>

                            <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-slate-400">
                              <span className="flex items-center gap-1 hover:text-[#005B94] transition-colors">
                                <Mail className="h-3 w-3 text-[#005B94]" />
                                <span>{member.email}</span>
                              </span>
                              <span className="text-[8px] text-[#005B94] font-bold uppercase tracking-wider bg-[#005B94]/5 px-1.5 py-0.5 rounded">
                                ACTIVE BOARD
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACCORDION ITEM 3: HSE SAFETY POLICY */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("safety-policy")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "safety-policy" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    3. HSE &amp; Environmental Protection Policy
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Rigid preventive checks and zero-incident environmental targets.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "safety-policy" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "safety-policy" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                      <div className="bg-[#050c21] text-white p-5 sm:p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex p-2.5 rounded-lg bg-orange-500/10 text-brand-orange border border-brand-orange/20 mb-3.5">
                            <ShieldAlert className="h-4.5 w-4.5" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-white mb-2">
                            Absolute On-Rig Safety Rules
                          </h4>
                          <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-sans mb-3 text-justify">
                            The Health, Safety, and Environment (HSE) policy at Grow Dons Services is attained by ensuring a safe working place, and providing safety equipment to international standards on-rig and offshore.
                          </p>
                          <p className="text-slate-400 text-[10.5px] sm:text-xs leading-relaxed font-sans text-justify">
                            Through continuous assessment of risks associated with fluid mixing, container distribution, and chemical handling, we strictly implement preventive procedures to mitigate potential hazards.
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-3">
                          <HeartPlus className="h-6 w-6 text-rose-500 animate-pulse flex-shrink-0" />
                          <div className="text-[10px]">
                            <p className="font-mono uppercase text-slate-400 font-bold">Rigsite Target: Zero Incidents</p>
                            <p className="text-slate-300 mt-0.5">Protecting crew lives every single day.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#04091a] text-white p-5 sm:p-6 rounded-xl border border-slate-850 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex p-2.5 rounded-lg bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 mb-3.5">
                            <ShieldCheck className="h-4.5 w-4.5" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-white mb-2">
                            Eco &amp; Habitat Management
                          </h4>
                          <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-sans mb-3 text-justify">
                            We recognize our supreme responsibility as an indigenous operator to shield host water basins, marshlands, and estuaries across South-South Nigeria.
                          </p>
                          <p className="text-slate-400 text-[10.5px] sm:text-xs leading-relaxed font-sans text-justify">
                            We strive to prevent spills, preserve local biological habitats, and minimize chemical residues during bulk transportation and mixing tasks. Grow Dons remains clean for a sustainable future.
                          </p>
                        </div>
                        <div className="mt-5 pt-4 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono text-emerald-400">
                          <span>NCDMB &amp; DPR LICENSED</span>
                          <span className="bg-emerald-500/10 text-emerald-400 py-0.5 px-2 rounded-md font-bold uppercase">SECURED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACCORDION ITEM 4: QA/QC POLICY & OBJECTIVES */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("quality-objectives")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "quality-objectives" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    4. QA/QC Quality Objectives Checklist
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    ISO 9001:2015 process modeling, technical reviews, and batch reports.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "quality-objectives" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5 animate-pulse" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "quality-objectives" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="mt-2 space-y-4">
                      <p className="text-slate-600 font-sans leading-relaxed text-xs sm:text-sm">
                        Grow Dons is committed to providing quality chemical systems and engineering solutions that exceed clients&rsquo; standards and statutory expectations. Our entire quality cycle is modeled around meeting the precise requirements of <strong>ISO 9001:2015</strong>.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {qualityObjectives.map((obj, idx) => (
                          <div key={obj.title} className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex gap-3.5 hover:border-slate-300 transition-colors">
                            <div className="flex-shrink-0">
                              <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center font-mono text-[9px] font-bold text-slate-600 border border-slate-200">
                                {idx + 1}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-xs text-slate-900 mb-0.5">
                                {obj.title}
                              </h4>
                              <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                                {obj.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3.5 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-3 text-[10.5px] sm:text-xs text-emerald-900">
                        <CheckSquare className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                        <span>We hold periodic technical reviews with regulatory inspectors to verify optimal fluid parameter recordings under local content policies.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
