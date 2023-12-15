import { getFontsPreloadList } from './utils/helpers.js';

const isDev = process.env.NODE_ENV === 'development';
const serverUrl = process.env.SERVER_URL;
const clientUrl = process.env.CLIENT_URL;

let nuxtRobots = process.env.NUXT_ROBOTS;
if (nuxtRobots) {
  try {
    nuxtRobots = JSON.parse(nuxtRobots);
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
  runtimeConfig: {
    serverUrl,
    public: { isDev, clientUrl },
  },
  app: {
    head: {
      title: 'Nuxt 3 App',
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
  css: ['reset-css', '@/assets/styles/base/index.scss'],
  components: ['@/components', { path: '@/components/common', prefix: 'C' }],
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
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/robots',
    '@nuxt/image',
    'nuxt-svgo',
    '@vue-final-modal/nuxt',
    '@vee-validate/nuxt',
    'nuxt-swiper',
    // 'nuxt-delay-hydration',
  ],
  robots: {
    rules: nuxtRobots,
  },
  svgo: {
    // use icon: <SvgoIconPathIconName /> (folder: /assets/icons)
    defaultImport: 'component',
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  swiper: {
    styleLang: 'scss',
  },
  // delayHydration: {
  //   debug: process.env.DELAY_HYDRATION_DEBUG,
  //   mode: 'mount',
  // },
  experimental: {
    inlineSSRStyles: false,
  },
});
