import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Features: React.FC = () => {
  const { t } = useLocalization();

  const features = [
    {
      icon: '🔥',
      title: 'physicsTitle',
      description: 'physicsDesc'
    },
    {
      icon: '🗺️',
      title: 'biomesTitle',
      description: 'biomesDesc'
    },
    {
      icon: '🧨',
      title: 'explosivesTitle',
      description: 'explosivesDesc'
    },
    {
      icon: '🎮',
      title: 'controlsTitle',
      description: 'controlsDesc'
    },
    {
      icon: '📱',
      title: 'performanceTitle',
      description: 'performanceDesc'
    },
    {
      icon: '✨',
      title: 'pixelArtTitle',
      description: 'pixelArtDesc'
    }
  ];

  return (
    <section id="features">
      <div className="container">
        <h2 className="section-title">{t('featuresTitle')}</h2>
        <div className="features" role="list">
          {features.map((feature, index) => (
            <div key={index} className="feature" role="listitem">
              <div className="icon" aria-hidden="true">{feature.icon}</div>
              <div>
                <h3>{t(feature.title as any)}</h3>
                <p>{t(feature.description as any)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
