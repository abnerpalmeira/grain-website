import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';

export const Trailer: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="trailer">
      <div className="container two-col">
        <div className="card">
          <h2 className="section-title">{t('trailerTitle')}</h2>
          <div className="trailer" role="region" aria-label={t('trailer')}>
            <iframe 
              src="https://www.youtube.com/embed/m8WZBYrEbfk" 
              title="Trailer do Grain Pixel" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </div>
        <div className="card" id="download">
          <h2 className="section-title">{t('downloadTitle')}</h2>
          <p>{t('downloadText')}</p>

          <div className="store-badges" style={{ marginTop: '10px' }}>
            <a href="https://apps.apple.com/us/app/grain-pixel/id6751121773" aria-label="Baixar na App Store">
              <img 
                src={appStore} 
                alt="Baixar na App Store" 
                width="180" 
                height="54" 
                loading="lazy"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ashub.grainpixel" aria-label="Baixar no Google Play">
              <img 
                src={googlePlay} 
                alt="Baixar no Google Play" 
                width="180" 
                height="54" 
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
