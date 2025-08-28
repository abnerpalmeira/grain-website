import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Hero: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="home" className="hero" aria-label={t('hero')}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="/src/assets/hero_banner.png" 
        aria-label="Gameplay do Grain em loop"
      >
        <source src="/src/assets/hero.mp4" type="video/mp4" />
      </video>
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
