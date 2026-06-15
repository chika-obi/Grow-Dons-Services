import React, { createContext, useContext, useState, ReactNode } from "react";

export type LanguageType = "en" | "pg" | "fr" | "yo" | "ha";

interface LanguageContextProps {
  currentLang: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const languagesInfo: Record<LanguageType, { name: string; flag: string; label: string }> = {
  en: { name: "English", flag: "🇬🇧", label: "EN" },
  pg: { name: "Pidgin (Naija)", flag: "🇳🇬", label: "Naija" },
  fr: { name: "Français (French)", flag: "🇫🇷", label: "FR" },
  yo: { name: "Yoruba", flag: "🇳🇬", label: "YO" },
  ha: { name: "Hausa", flag: "🇳🇬", label: "HA" },
};

export const LANGUAGES = Object.entries(languagesInfo).map(([code, info]) => ({
  code: code as LanguageType,
  ...info
}));

// Core dictionary containing robust industrial oil & gas translations across 5 languages
const DICTIONARY: Record<string, Record<LanguageType, string>> = {
  // Navigation Links
  nav_home: {
    en: "Home",
    pg: "Home",
    fr: "Accueil",
    yo: "Ibẹrẹ",
    ha: "Gida"
  },
  nav_services: {
    en: "Services",
    pg: "Beta Services",
    fr: "Services",
    yo: "Awọn Iṣẹ Wa",
    ha: "Ayyukanmu"
  },
  nav_products: {
    en: "Products",
    pg: "Oil Field Goods",
    fr: "Produits",
    yo: "Awọn Ọja Wa",
    ha: "Kayayyakinmu"
  },
  nav_testimonials: {
    en: "Testimonials",
    pg: "Correct People Talk",
    fr: "Témoignages",
    yo: "Eri Onibara",
    ha: "Shaidun Abokan Hulda"
  },
  nav_about: {
    en: "Credentials",
    pg: "See Company Paper",
    fr: "Qualifications",
    yo: "Ijẹrisi wa",
    ha: "Takaddun Shaida"
  },
  nav_contact: {
    en: "Contact",
    pg: "Chop Knuckle",
    fr: "Contact",
    yo: "Kàn sí Wa",
    ha: "Tuntube mu"
  },
  nav_news: {
    en: "Live News",
    pg: "Oil News",
    fr: "Actualités",
    yo: "Irohin Epo",
    ha: "Labaran Mai"
  },

  // Hero Section
  hero_tag: {
    en: "NIGERIAN OILFIELD OPERATIONS SPECIALISTS",
    pg: "CORRECT NAIJA OILFIELD PEOPLE WE DEY HELP YOU DRILL",
    fr: "SPÉCIALISTES DES OPÉRATIONS PÉTROLIÈRES AU NIGERIA",
    yo: "AWỌN AMỌJA INU EPO NIGERIA TO DAJU",
    ha: "KWARARRUN AYYUKAN MAN FETUR NA NAJERIYA"
  },
  hero_title_gold: {
    en: "SERVICES",
    pg: "SERVICES",
    fr: "SERVICES",
    yo: "IṢẸ WA",
    ha: "AYYUKAN"
  },
  hero_subtitle: {
    en: "Quality at its peak",
    pg: "Quality at im correct level",
    fr: "La qualité à son apogée",
    yo: "Didara to ga julọ",
    ha: "Inganci a kololuwarsa"
  },
  hero_desc: {
    en: "A premier fully-owned Nigerian indigenous oil & gas chemical and engineering service company. Delivering certified downhole mud fluids, solids control loops, brine filtration, and certified offshore equipment leasing.",
    pg: "Naija fully-owned indigenous company for better oil & gas chemicals and engineering. We dey supply certified downhole mud fluids, solids control machine loops, clean brine filtration, and offshore transport gear rentals.",
    fr: "Une entreprise nigériane de premier plan spécialisée dans les produits chimiques et l'ingénierie pétrolière. Fourniture de fluides de forage certifiés, de systèmes de contrôle des solides, de filtration des saumures et de location d'équipements certifiés offshore.",
    yo: "Ile-iṣẹ abinibi Naijiria ti o ni agbara ati igbẹkẹle lati pese awọn kemikali ati iṣẹ-ṣiṣe fun lilu epo ati gaasi. Pẹlu awọn ohun elo afọmọ epo daju.",
    ha: "Babban kamfanin Najeriya na kashin kansa wanda ke samar da sinadarai da injiniyan mai da iskar gas. Muna samar da ingantattun sinadaran tace laka, lura da datti, da hayar kayan aiki a teku."
  },

  // General CTAs
  cta_services: {
    en: "Explore Our Services",
    pg: "Check Our Better Sufferings",
    fr: "Découvrir nos services",
    yo: "Wo Awọn Iṣẹ Wa",
    ha: "Bincika Ayyukanmu"
  },
  cta_credentials: {
    en: "Company Credentials",
    pg: "Check Our Registration Paper",
    fr: "Documents officiels",
    yo: "Ijẹrisi wa daju",
    ha: "Takaddun Shaida"
  },
  cta_download: {
    en: "Download Profile",
    pg: "Get Company Paper",
    fr: "S'inscrire / Profil",
    yo: "Gba Alaye Ile-iṣẹ",
    ha: "Sauke Bayanin Kamfani"
  },
  cta_download_full: {
    en: "Download Company Profile",
    pg: "Download All Company Papers",
    fr: "Télécharger le profil de l'entreprise",
    yo: "Gba Alaye Nibẹrẹ Ile-iṣẹ",
    ha: "Sauke Bayanan Kamfaninmu"
  },
  cta_rfq: {
    en: "Instant RFQ",
    pg: "Get Quote Sharp-Sharp",
    fr: "Devis Instantané",
    yo: "Gba Iye-owo Bayi",
    ha: "Nemi Farashi Nan Take"
  },
  cta_quote: {
    en: "Request Quote",
    pg: "Ask For Price",
    fr: "Demander un devis",
    yo: "Beere Fun Iye-owo",
    ha: "Nemi Farashi"
  },

  // Operational Section labels
  op_trust: {
    en: "Operational Trust & Authority",
    pg: "Better Level of Trust and Work",
    fr: "Confiance Opérationnelle & Autorité",
    yo: "Igbẹkẹle ati Aṣẹ Action",
    ha: "Ingancin Aiki da Amincewa"
  },
  op_feedback: {
    en: "Partner Feedback & Credentials",
    pg: "Wetin Major Partners Dey Talk",
    fr: "Témoignages & Qualifications des Partenaires",
    yo: "Eri Ati Idahun Lati Ọdọ Awọn Alabaṣepọ Ara",
    ha: "Shaidun Abokan Hulda da Kayan Aiki"
  },
  op_desc: {
    en: "Hear from major drilling superintendents, fluid engineers, and procurement experts utilizing Grow Dons chemicals and leased offshore systems across active Nigerian blocks.",
    pg: "Listen to wetin major drilling bosses, mud engineers, and buying exhaust people dey talk about our chemicals and offshore rental systems for active blocks.",
    fr: "Découvrez les avis des directeurs de forage, des ingénieurs fluides et des experts en approvisionnement qui utilisent nos produits chimiques et nos équipements loués offshore.",
    yo: "Gbọ lati ọdọ awọn oludari lilu epo pataki kọja awọn aaye epo wa lori lilo awọn kemikali Grow Dons ati awọn ohun elo nla.",
    ha: "Amsoshin kwararrun injiniyoyin laka da man fetur dake amfani da sinadaran Grow Dons da hayar kayan aiki a fadin Najeriya."
  },
  status_label: {
    en: "Global Support",
    pg: "Better Support Desk",
    fr: "Support Global",
    yo: "Atilẹyin Gbogbo Gbogbo",
    ha: "Taimakon Gaba Daya"
  },
  status_online: {
    en: "ONLINE",
    pg: "DEY ACTIVE",
    fr: "EN LIGNE",
    yo: "AṢEDADA",
    ha: "A SHIRYE"
  },
  status_response: {
    en: "Response time: < 15 mins",
    pg: "We go reply under 15 mins",
    fr: "Temps de réponse: < 15 min",
    yo: "Àkókò ìdáhùn: < iṣẹ́jú 15",
    ha: "Lokacin amsawa: < minti 15"
  },
  tooltip_channel_title: {
    en: "Dispatch Operations Status",
    pg: "How Quick We Dey Reply",
    fr: "Statut des Opérations",
    yo: "Ipò Atilẹyin Ẹrọ Epo",
    ha: "Matsayin Ayyukanmu"
  },
  tooltip_channel_desc: {
    en: "Live response times across our Nigerian logistics and global communication channels.",
    pg: "Correct time wey we dey take reply messages for inside Naija blocks.",
    fr: "Temps de réponse en direct sur l'ensemble de nos canaux logistiques nigérians.",
    yo: "Atilẹyin lori akoko kọja awọn ọna gbigbe ati gbigba epo wa.",
    ha: "Lokutan amsawa na raye-raye a fadin Najeriya."
  },
  tooltip_dispatch: {
    en: "Rigsite Support Hotlines",
    pg: "Rigsite Emergency Call",
    fr: "Ligne Urgence de Chantier",
    yo: "Waya Atilẹyin Lori Kọja",
    ha: "Layin Gaggawa na Wajen Aiki"
  },
  tooltip_dispatch_time: {
    en: "IMMEDIATE (24/7)",
    pg: "KRAKRA NOW-NOW",
    fr: "IMMÉDIAT (24/7)",
    yo: "LẸKANSÌ (24/7)",
    ha: "HARKAN TAKE (24/7)"
  },
  tooltip_email: {
    en: "Technical Engineering Support",
    pg: "Mud & Fluids Engineering Chat",
    fr: "Support Technique Ingénierie",
    yo: "Atilẹyin Onimọ-ẹrọ Kemikali",
    ha: "Goyan Injiniya na Sinadarai"
  },
  tooltip_email_time: {
    en: "< 15 Mins",
    pg: "Under 15 Mins",
    fr: "< 15 Min",
    yo: "< Iṣẹ́jú 15",
    ha: "< Minti 15"
  },
  tooltip_rfq: {
    en: "Chemical procurement & RFQ",
    pg: "Buying & Pricing Section",
    fr: "Demandes d'achats & Devis",
    yo: "Kemikali rira & Iye-owo",
    ha: "Siyan Sinadarai da Neman Farashi"
  },
  tooltip_rfq_time: {
    en: "< 2 Hours",
    pg: "Under 2 Hours",
    fr: "< 2 Heures",
    yo: "< Wákàtí 2",
    ha: "< Sa'o'i 2"
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<LanguageType>("en");

  const setLanguage = (lang: LanguageType) => {
    setCurrentLang(lang);
  };

  const t = (key: string): string => {
    const translationSet = DICTIONARY[key];
    if (!translationSet) {
      return key; // Fallback to raw key if not found
    }
    return translationSet[currentLang] || translationSet["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
