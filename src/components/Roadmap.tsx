import React from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Roadmap: React.FC = () => {
  const { t } = useLocalization();

  const roadmapItems = [
    {
      badge: 'now',
      title: 'acidTitle',
      description: 'acidDesc'
    },
    {
      badge: 'wishlist',
      title: 'editorTitle',
      description: 'editorDesc'
    },
    {
      badge: 'future',
      title: 'pcTitle',
      description: 'pcDesc'
    }
  ];

  return (
    <section id="roadmap">
      <div className="container">
        <h2 className="section-title">{t('roadmapTitle')}</h2>
        <div className="roadmap">
          {roadmapItems.map((item, index) => (
            <div key={index} className="road-item">
              <span 
                className="badge" 
                style={item.badge === 'wishlist' 
                  ? { background: 'var(--accent)', color: '#3a2402', borderColor: '#7a540d' }
                  : item.badge === 'future'
                  ? { background: '#9fb2d7', color: '#0b1736', borderColor: '#5b6e95' }
                  : {}
                }
              >
                {t(item.badge as any)}
              </span>
              <h3 style={{ margin: '10px 0 6px' }}>
                {t(item.title as any)}
              </h3>
              <p style={{ color: 'var(--muted)' }}>
                {t(item.description as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
