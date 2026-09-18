export interface ChemicalProductItem {
  id: string;
  name: string;
  category: "Drilling Fluid Chemicals" | "Completion & Workover Chemicals" | "Production Chemicals" | "Commodity Minerals & Solvents";
  subCategory: string;
  application: string;
  description: string;
  technicalBenefits: string[];
  availableSpecifications: string;
  packaging: string;
  manufacturerBrand: string;
  tdsAvailable: boolean;
  sdsAvailable: boolean;
  certifications: string;
  chemicalFormula?: string;
  isFeatured?: boolean;
}

export interface LeadershipRole {
  id: string;
  name: string;
  title: "Managing Director" | "General Manager" | "Operations Manager" | "Procurement Manager";
  executiveArea: string;
  responsibilities: string[];
  profileNote?: string;
  imageUrl?: string;
}

export interface ProcurementCategory {
  id: string;
  title: string;
  description: string;
  scopeItems: string[];
  iconName: string;
}

export interface LogisticsCapability {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface TechnicalSolution {
  id: string;
  title: string;
  domain: string;
  challenges: string[];
  operationalBenefits: string[];
  keyChemicals: string[];
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

export interface FAQItem {
  question: string;
  answer: string;
  category?: "General" | "Chemicals" | "Procurement" | "Logistics & HSE" | "Commercial & RFQ";
}

export interface GallerySlide {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  badge: string;
  imageUrl: string;
}

export interface RfqFormData {
  productOrMaterial: string;
  specification: string;
  quantity: string;
  deliveryLocation: string;
  requiredDeliveryDate: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  additionalRequirements: string;
}

export type ViewMode = "home" | "chemicals" | "procurement" | "logistics" | "about" | "leadership" | "quote";

// Backward-compatibility alias
export type ProductItem = ChemicalProductItem;
