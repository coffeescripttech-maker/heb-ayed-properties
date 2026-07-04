export type Locale = 'ar' | 'en';

export interface TextPair {
  ar: string;
  en: string;
}

export interface VideoEntry {
  id: string;
  title: TextPair;
  loc?: TextPair;
}

export interface Videos {
  [key: string]: VideoEntry;
}

export interface DealImage {
  purchase: string;
  sale: string;
}

export interface Images {
  heroPhone: string;
  story: string;
  office: string;
  inquiryBg: string;
  team: string;
  news: string[];
  awards: string[];
  deeds: string[];
  deals: DealImage[];
}

export interface DownloadSources {
  [key: string]: string;
}

export interface AppConfig {
  crmBase: string;
  apiUrl: string;
  qualifyApiUrl: string;
  apiKey: string;
  source: TextPair;
  thankYou: TextPair;
  cloudflare: {
    customerCode: string;
    subdomain: string;
  };
  mapsUrl: string;
  assetBase: string;
  downloadSources: DownloadSources;
  videos: Videos;
  images: Images;
  promiseQuotes: TextPair[];
}

export interface LeadPayload {
  key?: string;
  source?: string;
  name?: string;
  phone?: string;
  budget?: string;
  ready_to_invest?: string;
  country?: string;
  need?: string;
  [key: string]: unknown;
}

export interface LeadResponse {
  data?: {
    id?: number;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface NavLink {
  label: TextPair;
  href: string;
}

export interface NewsItem {
  image: string;
  tag: TextPair;
  date: TextPair;
  headline: TextPair;
  featured?: boolean;
}

export interface StepItem {
  num: string;
  label: TextPair;
  detail: TextPair;
}

export interface Phase {
  title: TextPair;
  steps: StepItem[];
}

export interface ChooseCard {
  title: TextPair;
  body: TextPair;
}

export interface DubaiReason {
  title: TextPair;
  body: TextPair;
  source?: TextPair;
}

export interface AwardCard {
  image: string;
  title: TextPair;
}

export interface DeedItem {
  image: string;
  alt: string;
}

export interface StatItem {
  value: string;
  label: TextPair;
}
