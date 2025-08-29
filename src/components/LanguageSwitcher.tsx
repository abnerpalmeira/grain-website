import React, { useState, useRef, useEffect } from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const LanguageSwitcher: React.FC = () => {
  const { currentLocale, setLocale, localeInfo } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (locale: string) => {
    setLocale(locale as any);
    setIsOpen(false);
  };

  const currentLocaleInfo = localeInfo[currentLocale];

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <div className="lang-dropdown">
        <button
          className="lang-dropdown-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="lang-flag">{currentLocaleInfo.flag}</span>
          <span className="lang-text">{currentLocaleInfo.code.split('-')[0].toUpperCase()}</span>
          <span className={`lang-arrow ${isOpen ? 'active' : ''}`}>▼</span>
        </button>
        
        {isOpen && (
          <ul className="lang-dropdown-menu" role="menu">
            {Object.entries(localeInfo).map(([code, info]) => (
              <li key={code} role="none">
                <button
                  className={`lang-option ${code === currentLocale ? 'active' : ''}`}
                  onClick={() => handleLocaleChange(code)}
                  role="menuitem"
                >
                  <span className="lang-flag">{info.flag}</span>
                  <span className="lang-name">{info.nativeName}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      

    </div>
  );
};
