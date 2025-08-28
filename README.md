# Grain Pixel Website

A modern React-based website for Grain Pixel - Fun with Particles, featuring comprehensive internationalization support.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Comprehensive Localization**: Support for 11 languages with organized locale files
- **Responsive Design**: Mobile-first approach with modern CSS
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Fast development and build times with Vite

## 🌍 Supported Languages

- 🇧🇷 Portuguese (Brazil) - `pt-BR`
- 🇺🇸 English (US) - `en-US`
- 🇩🇪 German - `de`
- 🇫🇷 French - `fr`
- 🇪🇸 Spanish - `es`
- 🇮🇹 Italian - `it`
- 🇯🇵 Japanese - `ja`
- 🇰🇷 Korean - `ko`
- 🇵🇱 Polish - `pl`
- 🇷🇺 Russian - `ru`
- 🇨🇳 Chinese (Simplified) - `zh-CN`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with language switcher
│   ├── Hero.tsx        # Hero section with video background
│   ├── About.tsx       # About section with localized gallery
│   ├── Features.tsx    # Features grid
│   ├── Trailer.tsx     # Trailer and download section
│   ├── Roadmap.tsx     # Development roadmap
│   ├── Footer.tsx      # Footer with links
│   ├── Lightbox.tsx    # Image lightbox component
│   └── LanguageSwitcher.tsx # Language selection dropdown
├── contexts/           # React contexts
│   └── LocalizationContext.tsx # Localization state management
├── locales/            # Localization files
│   ├── index.ts        # Main locale exports
│   ├── pt-BR.ts        # Portuguese (Brazil)
│   ├── en-US.ts        # English (US)
│   ├── de.ts           # German
│   ├── fr.ts           # French
│   ├── es.ts           # Spanish
│   ├── it.ts           # Italian
│   ├── ja.ts           # Japanese
│   ├── ko.ts           # Korean
│   ├── pl.ts           # Polish
│   ├── ru.ts           # Russian
│   └── zh-CN.ts        # Chinese (Simplified)
├── types/              # TypeScript type definitions
│   └── localization.ts # Localization interface types
├── styles/             # CSS files
│   └── global.css      # Global styles
├── assets/             # Static assets (images, icons)
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The development server runs on `http://localhost:3000` and includes:
- Hot Module Replacement (HMR)
- TypeScript compilation
- CSS hot reloading
- Source maps for debugging

## 🌐 Localization System

### Adding New Languages

1. Create a new locale file in `src/locales/` (e.g., `nl.ts` for Dutch)
2. Implement the `LocalizationData` interface
3. Add the locale to the `locales` and `localeInfo` objects in `src/locales/index.ts`
4. Update the `LocaleCode` type in `src/types/localization.ts`

### Localization Context

The `LocalizationContext` provides:
- Current locale state
- Language switching functionality
- Translation function (`t()`)
- Access to current locale data
- Automatic localStorage persistence

### Usage in Components

```tsx
import { useLocalization } from '@/contexts/LocalizationContext';

const MyComponent = () => {
  const { t, currentLocale, setLocale } = useLocalization();
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Current language: {currentLocale}</p>
      <button onClick={() => setLocale('en-US')}>
        Switch to English
      </button>
    </div>
  );
};
```

## 🎨 Styling

- **CSS Custom Properties**: Consistent design tokens
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern CSS**: Uses latest CSS features like `clamp()`, `aspect-ratio`, etc.
- **Pixel Art Aesthetic**: Maintains the game's retro visual style

## 📱 Responsive Features

- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for various screen sizes

## 🚀 Performance Features

- **Vite**: Fast development and build times
- **Code Splitting**: Automatic code splitting for optimal loading
- **Tree Shaking**: Unused code elimination
- **Source Maps**: Development debugging support

## 🔧 Build Configuration

### Vite Configuration
- React plugin for JSX support
- Path aliases for clean imports
- Development server configuration
- Build optimization settings

### TypeScript Configuration
- Strict type checking
- Path mapping for clean imports
- Modern ES2020 target
- React JSX support

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linting (when configured)

## 🌟 Key Benefits of the Refactor

1. **Maintainability**: Clean component separation and TypeScript types
2. **Scalability**: Easy to add new features and languages
3. **Performance**: Modern build tools and optimized React patterns
4. **Developer Experience**: Hot reloading, TypeScript, and organized code structure
5. **Accessibility**: Proper ARIA labels and semantic HTML
6. **Internationalization**: Comprehensive multi-language support

## 🔄 Migration from Original

The original HTML/CSS/JavaScript implementation has been completely refactored to:
- React components with proper state management
- TypeScript for type safety
- Organized localization system
- Modern build tooling
- Component-based architecture
- Improved maintainability and scalability

## 📄 License

ISC License - see package.json for details
