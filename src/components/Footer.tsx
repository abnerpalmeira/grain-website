import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Footer: React.FC = () => {
  const { t } = useLocalization();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="brand" aria-label={t('brand')}>
          <img 
            className="brand-logo" 
            src="/src/assets/logo-64.png" 
            alt={t('brandLogoAlt')} 
          />
          <span className="brand-title">{t('brandTitle')}</span>
        </div>
        <div className="links">
          <a href="/privacy.html">{t('privacyPolicy')}</a>
          <span>•</span>
          <a href="/terms.html">{t('termsOfUse')}</a>
          <span>•</span>
          <a href="mailto:contato@grainpixel.com">{t('contact')}</a>
        </div>
      </div>
    </footer>
  );
};
