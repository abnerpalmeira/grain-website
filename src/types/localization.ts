

export interface LocalizedImage {
  src: string;
  alt: string;
}

export interface LocalizationData {
  // Meta tags
  title: string;
  description: string;
  
  // Header
  brandTitle: string;
  brandLogoAlt: string;
  appStoreAlt: string;
  googlePlayAlt: string;
  steamAlt: string;
  wishlist: string;
  
  // Hero section
  heroTitle: string;
  tagline: string;
  downloadBtn: string;
  watchTrailerBtn: string;
  
  // About section
  aboutTitle: string;
  aboutText: string;
  aboutAvailability: string;
  
  // Gallery
  screenshot1: string;
  screenshot2: string;
  screenshot3: string;
  screenshot4: string;
  screenshot5: string;
  screenshot6: string;
  
  // Gallery images - localized
  galleryImages: LocalizedImage[];
  
  // Features section
  featuresTitle: string;
  physicsTitle: string;
  physicsDesc: string;
  biomesTitle: string;
  biomesDesc: string;
  explosivesTitle: string;
  explosivesDesc: string;
  controlsTitle: string;
  controlsDesc: string;
  performanceTitle: string;
  performanceDesc: string;
  pixelArtTitle: string;
  pixelArtDesc: string;
  
  // Trailer section
  trailerTitle: string;
  downloadTitle: string;
  downloadText: string;
  newsletterText: string;
  emailPlaceholder: string;
  emailLabel: string;
  subscribeBtn: string;
  subscribeSuccess: string;
  
  // Roadmap section
  roadmapTitle: string;
  now: string;
  future: string;
  acidTitle: string;
  acidDesc: string;
  editorTitle: string;
  editorDesc: string;
  pcTitle: string;
  pcDesc: string;
  
  // Footer
  privacyPolicy: string;
  termsOfUse: string;
  contact: string;
  
  // Lightbox
  lightboxAlt: string;
  
  // Navigation
  navigation: string;
  stores: string;
  hero: string;
  gallery: string;
  trailer: string;
  brand: string;
  imageViewer: string;
}

export type LocaleCode = 'pt-BR' | 'en-US' | 'de' | 'fr' | 'es' | 'it' | 'ja' | 'ko' | 'pl' | 'ru' | 'zh-CN';

export interface LocaleInfo {
  code: LocaleCode;
  name: string;
  flag: string;
  nativeName: string;
}
