import { LocalizationData } from '@/types/localization';

export const fr: LocalizationData = {
  // Meta tags
  title: 'Grain Pixel — Fun with Particles',
  description: 'Grain Pixel est un bac à sable de particules en pixel art. Créez, détruisez et expérimentez avec le feu, l\'eau, le sable et bien plus encore.',
  
  // Header
  brandTitle: 'Grain Pixel',
  brandLogoAlt: 'Logo Grain Pixel',
  appStoreAlt: 'Disponible sur l\'App Store',
  googlePlayAlt: 'Disponible sur Google Play',
  steamAlt: 'Ajouter à la liste de souhaits Steam',
  wishlist: 'Liste de souhaits',
  
  // Hero section
  heroTitle: 'Fun with Particles',
  tagline: 'Un bac à sable de particules en pixel art pour créer, détruire et expérimenter avec des mondes vivants.',
  downloadBtn: 'Télécharger',
  watchTrailerBtn: 'Regarder la bande-annonce',
  
  // About section
  aboutTitle: 'À propos du jeu',
  aboutText: 'Grain Pixel combine une physique amusante avec une esthétique rétro. Mélangez <strong>feu</strong>, <strong>eau</strong>, <strong>sable</strong>, <strong>glace</strong>, <strong>vapeur</strong> et des dizaines d\'éléments pour voir le monde réagir en temps réel. Créez des scénarios, allumez des dynamites, congelez des cascades et découvrez des interactions émergentes. Simple à jouer, profond à maîtriser.',
  aboutAvailability: 'Disponible pour <strong>iOS</strong> avec version <strong>PC</strong> en développement.',
  
  // Gallery
  screenshot1: 'Capture d\'écran 1: désert avec pyramide',
  screenshot2: 'Capture d\'écran 2: forêt en feu',
  screenshot3: 'Capture d\'écran 3: nuit avec lune',
  screenshot4: 'Capture d\'écran 4: menu des éléments',
  screenshot5: 'Capture d\'écran 5: biome de neige',
  screenshot6: 'Capture d\'écran 6: sélection de niveau',
  
  // Gallery images - localized for French
  galleryImages: [
    { src: '/src/assets/screenshots/default/IMG_0761.PNG', alt: 'screenshot1' },
    { src: '/src/assets/screenshots/default/IMG_0773.PNG', alt: 'screenshot2' },
    { src: '/src/assets/screenshots/default/IMG_0823.PNG', alt: 'screenshot3' },
    { src: '/src/assets/screenshots/fr/IMG_0794.PNG', alt: 'screenshot4' },
    { src: '/src/assets/screenshots/fr/IMG_0795.PNG', alt: 'screenshot5' },
    { src: '/src/assets/screenshots/fr/IMG_0796.PNG', alt: 'screenshot6' }
  ],
  
  // Features section
  featuresTitle: 'Fonctionnalités',
  physicsTitle: 'Physique des particules',
  physicsDesc: 'Simulations en temps réel avec feu, eau, sable, fumée, glace, vapeur et bien plus encore.',
  biomesTitle: 'Biomes et niveaux',
  biomesDesc: 'Environnements qui influencent les réactions: désert, nuit éternelle, champs fleuris, montagnes de magma.',
  explosivesTitle: 'Jouets explosifs',
  explosivesDesc: 'Dinamite, acide et plus encore. Découvrez des combinaisons chaotiques et hilarantes.',
  controlsTitle: 'Contrôles simples',
  controlsDesc: 'Touchez et glissez. Interface conçue pour les écrans tactiles — parfaite pour iPhone et iPad.',
  performanceTitle: 'Performance mobile',
  performanceDesc: 'Fonctionne en douceur avec des milliers de particules, avec retour haptique optionnel.',
  pixelArtTitle: 'Pixel Art',
  pixelArtDesc: 'Visuels rétro soignés, avec des palettes vibrantes et une UI de style arcade.',
  
  // Trailer section
  trailerTitle: 'Bande-annonce',
  downloadTitle: 'Télécharger / Liste de souhaits',
  downloadText: 'Rejoignez la liste de souhaits Steam et téléchargez depuis l\'App Store quand disponible.',
  newsletterText: 'Recevez des mises à jour par e-mail lors de mises à jour majeures.',
  emailPlaceholder: 'votrenom@email.com',
  emailLabel: 'Votre e-mail',
  subscribeBtn: 'Notifiez-moi',
  subscribeSuccess: 'Merci ! Nous vous tiendrons au courant.',
  
  // Roadmap section
  roadmapTitle: 'Feuille de route',
  now: 'Maintenant',
  future: 'Avenir',
  acidTitle: 'Nouvel élément: Acide',
  acidDesc: 'Interactions avec le sable, la pierre et l\'eau + effets visuels brillants.',
  editorTitle: 'Éditeur de scénarios',
  editorDesc: 'Construisez votre biome, sauvegardez et partagez des captures animées.',
  pcTitle: 'Version PC',
  pcDesc: 'Améliorations d\'entrée, performance et mods légers.',
  
  // Footer
  privacyPolicy: 'Politique de confidentialité',
  termsOfUse: 'Conditions d\'utilisation',
  contact: 'Contact',
  
  // Lightbox
  lightboxAlt: 'Image agrandie',
  
  // Navigation
  navigation: 'Haut',
  stores: 'Magasins',
  hero: 'Héros',
  gallery: 'Galerie d\'images',
  trailer: 'Bande-annonce du jeu',
  brand: 'Marque',
  imageViewer: 'Visionneuse d\'image'
};
