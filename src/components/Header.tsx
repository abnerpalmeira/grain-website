import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import logo128 from '@/assets/logo-128.png';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';

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
          <div className="app-store-lite-container" style={{ position: 'relative', display: 'inline-block' }}>
            <a href="https://apps.apple.com/us/app/grain-pixel-lite/id6751788656" aria-label={t('appStoreLiteAlt')}>
              <img 
                src={appStore} 
                alt={t('appStoreLiteAlt')} 
                width="180" 
                height="54" 
                loading="eager"
              />
            </a>
            <div className="free-tooltip" style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#ff4444',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold',
              zIndex: 10,
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              FREE
            </div>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.ashub.grainpixel" aria-label={t('googlePlayAlt')}>
            <img 
              src={googlePlay} 
              alt={t('googlePlayAlt')} 
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
