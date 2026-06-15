export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  points: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string; // e.g. "Workover & Completion Fluids", "Cementing Additives"
  description: string;
  isMajor: boolean;
  chemicalFormula?: string;
  applications?: string[];
}

export interface ValueItem {
  name: string;
  description: string;
  iconName: string;
}

export interface AttributeItem {
  name: string;
  subtitle: string;
  iconName: string;
}

export interface PartnerItem {
  name: string;
  logoText: string;
  vibe: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}
