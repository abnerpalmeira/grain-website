import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '@/contexts/LocalizationContext';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="container">
      <div className="privacy-policy">
        <div className="back-link">
          <Link to="/" className="btn btn-secondary">
            ← {t('backToHome')}
          </Link>
        </div>
        
        <h1>{t('privacyPolicyTitle')}</h1>
        
        <p className="last-updated">{t('lastUpdated')}: August 26, 2025</p>
        
        <p>{t('privacyPolicyIntro')}</p>
        
        <h2>{t('collectionUseTitle')}</h2>
        <p>{t('collectionUseText1')}</p>
        <p>{t('collectionUseText2')}</p>
        
        <h2>{t('usageDataTitle')}</h2>
        <p>{t('usageDataText')}</p>
        
        <h2>{t('linksTitle')}</h2>
        <p>{t('linksText1')}</p>
        <p>{t('linksText2')}</p>
        
        <h2>{t('changesTitle')}</h2>
        <p>{t('changesText1')}</p>
        <p>{t('changesText2')}</p>
        
        <h2>{t('contactTitle')}</h2>
        <p>{t('contactText')}</p>
        <p><strong>{t('email')}:</strong> support@grainpixel.com</p>
      </div>
    </div>
  );
};
