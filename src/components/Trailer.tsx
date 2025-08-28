import React, { useState } from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Trailer: React.FC = () => {
  const { t } = useLocalization();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="trailer">
      <div className="container two-col">
        <div className="card">
          <h2 className="section-title">{t('trailerTitle')}</h2>
          <div className="trailer" role="region" aria-label={t('trailer')}>
            <iframe 
              src="https://www.youtube.com/embed/dQw4wWgXcQ" 
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
            <a href="#" aria-label="Baixar na App Store">
              <img 
                src="/src/assets/app-store.png" 
                alt="Baixar na App Store" 
                width="180" 
                height="54" 
                loading="lazy"
              />
            </a>
            <a href="#" aria-label="Baixar no Google Play">
              <img 
                src="/src/assets/google-play.png" 
                alt="Baixar no Google Play" 
                width="180" 
                height="54" 
                loading="lazy"
              />
            </a>
            <a href="#steam" className="soon" aria-label="Adicionar à wishlist no Steam">
              <img 
                src="/src/assets/steam.png" 
                alt="Wishlist no Steam" 
                width="180" 
                height="54" 
                loading="lazy"
              />
            </a>
          </div>
          
          <p style={{ marginTop: '14px', color: 'var(--muted)', fontSize: '14px' }}>
            {t('newsletterText')}
          </p>
          
          <form className="newsletter" onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">
              {t('emailLabel')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t('emailPlaceholder')}
              aria-label={t('emailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '14px 12px', borderRadius: '10px', border: '2px solid #1a2e63', background: '#0b1736', color: 'var(--text)', marginBottom: '10px' }}
            />
            <button className="btn" type="submit" style={{ width: '100%' }}>
              {submitted ? t('subscribeSuccess') : t('subscribeBtn')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
