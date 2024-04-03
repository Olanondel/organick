import { getFontsPreloadList } from './utils/helpers.js';

const isDev = process.env.NODE_ENV === 'development';
const serverUrl = process.env.SERVER_URL;
const clientUrl = process.env.CLIENT_URL;
const nuxtRobots = process.env.NUXT_ROBOTS;

let robotsRules = {};
if (nuxtRobots) {
  try {
    robotsRules = JSON.parse(nuxtRobots);
  } catch (error) {
    console.error('NUXT_ROBOTS parsing error:', error);
  }
}

const fontsToPreload = getFontsPreloadList([
  // {
  //   path: 'font-name/FontName-',
  //   weights: ['Light', 'Bold'],
  // },
]);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { autoImport: false }, // disable auto imports
  components: { dirs: [] }, // disable auto imports
  runtimeConfig: {
    serverUrl,
    public: { isDev, clientUrl },
  },
  app: {
    head: {
      title: 'Nuxt 3 Boilerplate',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      htmlAttrs: { lang: 'en' },
      // meta: [{ name: 'theme-color', content: '#FFFFFF' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // preload fonts
        ...fontsToPreload,
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
        scss: { additionalData: '@import "@/assets/styles/utils";' },
      },
    },
  },
  routeRules: {
    // proxy
    '/api/**': { proxy: `${clientUrl}api/**` },
    '/storage/**': { proxy: `${clientUrl}storage/**` },
    // cache
    // '/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/robots',
    'nuxt-svgo',
    'nuxt-swiper',
    // 'nuxt-delay-hydration',
  ],
  eslint: { lintOnStart: false },
  robots: { rules: robotsRules },
  svgo: {
    // use icon: <CIcon name="icon-path/icon-name"> or <SvgoIconPathIconName /> (folder: /assets/icons)
    defaultImport: 'component',
    explicitImportsOnly: true,
  },
  swiper: { styleLang: 'scss' },
  // delayHydration: {
  //   debug: process.env.DELAY_HYDRATION_DEBUG,
  //   mode: 'mount',
  // },
  experimental: { inlineSSRStyles: false },
});
