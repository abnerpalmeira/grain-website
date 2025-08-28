import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import logo128 from '@/assets/logo-128.png';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';
import steam from '@/assets/steam.png';

export const Header: React.FC = () => {
  const { t } = useLocalization();

  return (
    <header>
      <div className="container nav" role="navigation" aria-label={t('navigation')}>
        <a className="brand" href="#home">
          <img 
            className="brand-logo" 
            src={logo128} 
            alt={t('brandLogoAlt')} 
          />
          <span className="brand-title">{t('brandTitle')}</span>
        </a>
        
        <div className="store-badges" aria-label={t('stores')}>
          <a href="https://apps.apple.com/us/app/grain-pixel/id6751121773" aria-label={t('appStoreAlt')}>
            <img 
              src={appStore} 
              alt={t('appStoreAlt')} 
              width="180" 
              height="54" 
              loading="eager"
            />
          </a>
          <a href="#download" className="coming-soon" aria-label={t('googlePlayAlt')}>
            <img 
              src={googlePlay} 
              alt={t('googlePlayAlt')} 
              width="180" 
              height="54" 
              loading="eager"
            />
          </a>
          <a href="#steam" className="soon" aria-label={t('steamAlt')}>
            <img 
              src={steam} 
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
