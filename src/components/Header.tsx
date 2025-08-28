import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const { t } = useLocalization();

  return (
    <header>
      <div className="container nav" role="navigation" aria-label={t('navigation')}>
        <a className="brand" href="#home">
          <img 
            className="brand-logo" 
            src="/src/assets/logo-128.png" 
            alt={t('brandLogoAlt')} 
          />
          <span className="brand-title">{t('brandTitle')}</span>
        </a>
        
        <div className="store-badges" aria-label={t('stores')}>
          <a href="https://apps.apple.com/us/app/grain-pixel/id6751121773" aria-label={t('appStoreAlt')}>
            <img 
              src="/src/assets/app-store.png" 
              alt={t('appStoreAlt')} 
              width="180" 
              height="54" 
              loading="eager"
            />
          </a>
          <a href="#download" className="coming-soon" aria-label={t('googlePlayAlt')}>
            <img 
              src="/src/assets/google-play.png" 
              alt={t('googlePlayAlt')} 
              width="180" 
              height="54" 
              loading="eager"
            />
          </a>
          <a href="#steam" className="soon" aria-label={t('steamAlt')}>
            <img 
              src="/src/assets/steam.png" 
              alt={t('steamAlt')} 
              width="180" 
              height="54" 
              loading="eager"
            />
          </a>
        </div>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
};
