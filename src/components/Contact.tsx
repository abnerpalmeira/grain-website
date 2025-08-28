import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Contact: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="container">
      <div className="contact-page">
        <div className="back-link">
          <Link to="/" className="btn btn-secondary">
            ← {t('backToHome')}
          </Link>
        </div>
        
        <h1>{t('contactTitle')}</h1>
        
        <p className="contact-intro">{t('contactIntro')}</p>
        
        <div className="contact-section">
          <h2>{t('generalSupportTitle')}</h2>
          <p>{t('generalSupportText')}</p>
          <p><strong>{t('email')}:</strong> support@grainpixel.com</p>
        </div>
        
        <div className="contact-section">
          <h2>{t('feedbackTitle')}</h2>
          <p>{t('feedbackText')}</p>
          <p><strong>{t('email')}:</strong> support@grainpixel.com</p>
        </div>
        
        <div className="contact-section">
          <h2>{t('pressTitle')}</h2>
          <p>{t('pressText')}</p>
          <p><strong>{t('email')}:</strong> support@grainpixel.com</p>
        </div>
        
        <p className="contact-outro">{t('contactOutro')}</p>
      </div>
    </div>
  );
};
