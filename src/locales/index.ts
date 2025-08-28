import { LocalizationData, LocaleCode, LocaleInfo } from '@/types/localization';
import { ptBR } from './pt-BR';
import { enUS } from './en-US';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { pl } from './pl';
import { ru } from './ru';
import { zhCN } from './zh-CN';

export const locales: Record<LocaleCode, LocalizationData> = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'de': de,
  'fr': fr,
  'es': es,
  'it': it,
  'ja': ja,
  'ko': ko,
  'pl': pl,
  'ru': ru,
  'zh-CN': zhCN,
};

export const localeInfo: Record<LocaleCode, LocaleInfo> = {
  'pt-BR': { code: 'pt-BR', name: 'Portuguese', flag: '🇧🇷', nativeName: 'Português' },
  'en-US': { code: 'en-US', name: 'English', flag: '🇺🇸', nativeName: 'English' },
  'de': { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  'fr': { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  'es': { code: 'es', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  'it': { code: 'it', name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
  'ja': { code: 'ja', name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  'ko': { code: 'ko', name: 'Korean', flag: '🇰🇷', nativeName: '한국어' },
  'pl': { code: 'pl', name: 'Polish', flag: '🇵🇱', nativeName: 'Polski' },
  'ru': { code: 'ru', name: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  'zh-CN': { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
};

export const defaultLocale: LocaleCode = 'pt-BR';
export const supportedLocales: LocaleCode[] = Object.keys(locales) as LocaleCode[];

// Re-export types for convenience
export type { LocaleCode, LocaleInfo, LocalizationData } from '@/types/localization';
