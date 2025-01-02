import {
  API_PREFIX,
  // STORAGE_PREFIX,
} from './constants/variables';
// import { getFontsPreloadList } from './utils/helpers.js';
// import imagesPrerender from './config/images-prerender';

const isDev = process.env.NODE_ENV === 'development';

const serverUrl = import.meta.env.SERVER_URL;
const clientUrl = import.meta.env.CLIENT_URL;

let robotsRules = {};
const nuxtRobots =
  import.meta.env.NUXT_ROBOTS?.replace(/'/g, '"') ||
  JSON.stringify({ Disallow: ' / ' });
if (nuxtRobots) {
  try {
    robotsRules = JSON.parse(nuxtRobots);
  } catch (error) {
    console.error('NUXT_ROBOTS parsing error:', error);
  }
}

// const fontsToPreload = getFontsPreloadList([
//   {
//     path: 'font-name/FontName-',
//     weights: ['Light', 'Bold'],
//   },
// ]);

const vitePlugins = [];

const routeRules = {
  // Cache
  // '/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
  // No-ssr
  // '/profile/**': { ssr: false },
};
if (isDev) {
  Object.assign(routeRules, {
    [`/${API_PREFIX}/**`]: { proxy: `${clientUrl}/${API_PREFIX}/**` },
    // [`/${STORAGE_PREFIX}/**`]: { proxy: `${clientUrl}/${STORAGE_PREFIX}/**` },
  });
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: ['@/components', { path: '@/components/common', prefix: 'C' }],
  runtimeConfig: {
    serverUrl,
    public: {
      clientUrl,
    },
  },
  app: {
    head: {
      title: 'Organick | 100% Natural Food!',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      htmlAttrs: { lang: 'en' },
      // meta: [{ name: 'theme-color', content: '#FFFFFF' }],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-96x96.png',
          sizes: '96x96',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
        // ...fontsToPreload,
      ],
    },
  },
  css: [
    'reset-css',
    'vue-final-modal/style.css',
    '@/assets/styles/base/index.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/styles/utils" as *;' },
      },
    },
    plugins: vitePlugins,
  },
  sourcemap: true,
  routeRules,
  modules: [
    '@pinia/nuxt', // '@nuxtjs/i18n',
    // '@nuxtjs/device',
    '@nuxtjs/robots', // '@nuxt/image',
    'nuxt-svgo', // 'nuxt-delay-hydration',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
  ],
  // i18n: {
  //   locales: [{ code: 'en', file: 'en.json' }],
  //   defaultLocale: 'en',
  //   detectBrowserLanguage: false,
  //   langDir: 'lang',
  //   lazy: true,
  //   parallelPlugin: true,
  // },
  robots: { rules: robotsRules },
  svgo: { defaultImport: 'component', explicitImportsOnly: true },
  // delayHydration: { debug: import.meta.env.DELAY_HYDRATION_DEBUG, mode: 'mount' },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  features: { inlineStyles: false },
  // nitro: { prerender: { routes: imagesPrerender } },
  compatibilityDate: '2024-07-14',
});
