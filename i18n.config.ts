import type { NuxtI18nOptions } from '@nuxtjs/i18n';

export default {
  locales: [
    { code: 'en-US', iso: 'en-US', file: 'en-US.json', name: 'English' },
    { code: 'hi-IN', iso: 'hi-IN', file: 'hi-IN.json', name: 'Hindi' },
    { code: 'od-IN', iso: 'od-IN', file: 'od-IN.json', name: 'Odia' }
  ],
  langDir: 'locales',
  lazy: true,
  detectBrowserLanguage: false,
  defaultLocale: 'en-US',
  localeDetection: false,
  strategy: 'prefix_except_default'
} as NuxtI18nOptions;
