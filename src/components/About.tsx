import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const About: React.FC = () => {
  const { t, localeData } = useLocalization();

  return (
    <section id="sobre">
      <div className="container two-col">
        <div className="card">
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('aboutText') }} />
          <p style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t('aboutAvailability') }} />
        </div>
        <div className="card">
          <div className="gallery" aria-label={t('gallery')}>
            {localeData.galleryImages.map((image, index) => (
              <a key={index} href={image.src} className="glink">
                <img 
                  src={image.src} 
                  alt={t(image.alt as any)} 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
