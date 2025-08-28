import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import heroBanner from '@/assets/hero_banner.png';

export const Hero: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="home" className="hero" aria-label={t('hero')}>
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${heroBanner})` }}
        aria-label="Gameplay do Grain"
      />
      <div className="overlay">
        <div className="container">
          <h1>{t('heroTitle')}</h1>
          <p className="tagline">{t('tagline')}</p>
          <div className="cta-row">
            <a className="btn" href="#download">
              {t('downloadBtn')}
            </a>
            <a className="btn secondary" href="#trailer">
              {t('watchTrailerBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
