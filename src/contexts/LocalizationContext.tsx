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

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>(defaultLocale);

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('grain-locale') as LocaleCode;
    if (savedLocale && supportedLocales.includes(savedLocale)) {
      setCurrentLocale(savedLocale);
    }
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
