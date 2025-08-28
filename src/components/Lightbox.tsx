import React, { useState, useEffect } from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';

export const Lightbox: React.FC = () => {
  const { t } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const handleGalleryClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('.glink')) {
        e.preventDefault();
        const link = target.closest('.glink') as HTMLAnchorElement;
        setCurrentImage(link.href);
        setIsOpen(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleGalleryClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleGalleryClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={`lightbox ${isOpen ? 'open' : ''}`} 
      role="dialog" 
      aria-modal="true" 
      aria-label={t('imageViewer')}
      onClick={handleClose}
    >
      <img 
        src={currentImage} 
        alt={t('lightboxAlt')} 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
