import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { locales, localeInfo, defaultLocale, supportedLocales, LocaleCode } from '@/locales';
import { LocalizationData } from '@/types/localization';

interface LocalizationContextType {
  currentLocale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  t: (key: keyof LocalizationData) => string;
  localeData: LocalizationData;
  supportedLocales: LocaleCode[];
  localeInfo: typeof localeInfo;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

interface LocalizationProviderProps {
  children: ReactNode;
}

// Function to detect user's preferred locale
const detectUserLocale = (): LocaleCode => {
  // Check if user has a saved preference
  const savedLocale = localStorage.getItem('grain-locale') as LocaleCode;
  if (savedLocale && supportedLocales.includes(savedLocale)) {
    return savedLocale;
  }

  // Try to detect from browser language
  if (typeof navigator !== 'undefined' && navigator.language) {
    const browserLang = navigator.language;
    
    // Direct match
    if (supportedLocales.includes(browserLang as LocaleCode)) {
      return browserLang as LocaleCode;
    }
    
    // Try to find a close match (e.g., 'ja' for 'ja-JP')
    const langCode = browserLang.split('-')[0];
    
    const closeMatch = supportedLocales.find(locale => 
      locale.startsWith(langCode) || locale === langCode
    );
    
    if (closeMatch) {
      return closeMatch;
    }
    
    // Try to find by region (e.g., 'pt-BR' for 'pt')
    const regionCode = browserLang.split('-')[1]?.toUpperCase();
    
    if (regionCode) {
      const regionMatch = supportedLocales.find(locale => 
        locale.includes(regionCode)
      );
      
      if (regionMatch) {
        return regionMatch;
      }
    }
  }

  return defaultLocale;
};

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>(() => detectUserLocale());

  useEffect(() => {
    // Load saved locale from localStorage or detect from browser
    const detectedLocale = detectUserLocale();
    setCurrentLocale(detectedLocale);
  }, []);

  useEffect(() => {
    // Save locale to localStorage
    localStorage.setItem('grain-locale', currentLocale);
    
    // Update document language and title
    document.documentElement.lang = currentLocale;
    document.title = locales[currentLocale].title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', locales[currentLocale].description);
    }
  }, [currentLocale]);

  const setLocale = (locale: LocaleCode) => {
    if (supportedLocales.includes(locale)) {
      setCurrentLocale(locale);
    }
  };



  const t = (key: keyof LocalizationData): string => {
    const value = locales[currentLocale][key];
    // Handle different types - return string for text, empty string for arrays/objects
    if (typeof value === 'string') {
      return value;
    }
    return '';
  };

  const value: LocalizationContextType = {
    currentLocale,
    setLocale,
    t,
    localeData: locales[currentLocale],
    supportedLocales,
    localeInfo,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
