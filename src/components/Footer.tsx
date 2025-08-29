import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import logo64 from '@/assets/logo-64.png';

export const Footer: React.FC = () => {
  const { t } = useLocalization();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="brand" aria-label={t('brand')}>
          <img 
            className="brand-logo" 
            src={logo64} 
            alt={t('brandLogoAlt')} 
          />
          <span className="brand-title">{t('brandTitle')}</span>
        </div>
        <div className="links">
          <a href="/privacy-policy">{t('privacyPolicy')}</a>
          <span>•</span>
          <a href="/contact-info">{t('contact')}</a>
        </div>
      </div>
    </footer>
  );
};
