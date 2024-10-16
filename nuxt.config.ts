import i18nConfig from './i18n.config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: { ...i18nConfig },
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      API_BASE_URL: process.env.API_BASE_URL,
      BOT_URL: process.env.BOT_URL
    },
    YANDEX_API_KEY: process.env.YANDEX_API_KEY,
    YANDEX_FOLDER_ID: process.env.YANDEX_FOLDER_ID,
    YANDEX_OAUTH: process.env.YANDEX_OAUTH
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('media-')
    }
  },
  experimental: {
    renderJsonPayloads: false
  },
  vite: {
    plugins: [vidstack({ include: /player\// })]
  },
  //seo
  app: {
    head: {
      title: 'Notation Pro - AI Powered Web App for your notes',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'title',
          content: 'Notation Pro - AI Powered Web App for your notes'
        },
        {
          name: 'description',
          content:
            'Notation Pro is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant Notation ProAI'
        },
        { name: 'keywords', content: 'Notation Pro, AI, Notes, Thoughts, Future' },

        //open graph
        { property: 'og:site:name', content: 'Notation Pro' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://NotationPro.vercel.app/' },
        {
          property: 'og:title',
          content: 'Notation Pro - AI Powered Web App for your notes'
        },
        {
          property: 'og:description',
          content:
            'Notation Pro is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant Notation ProAI'
        },
        { property: 'og:image', content: 'https://NotationPro.vercel.app/img/logo.svg' }
      ]
    }
  },
});
