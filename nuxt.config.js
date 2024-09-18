import { sentryVitePlugin } from '@sentry/vite-plugin';
import {
  API_PREFIX,
  // STORAGE_PREFIX,
} from './constants/variables';
// import { getFontsPreloadList } from './utils/helpers.js';
// import imagesPrerender from './config/images-prerender';

const isDev = import.meta.env.NODE_ENV === 'development';
const serverUrl = import.meta.env.SERVER_URL;
const clientUrl = import.meta.env.CLIENT_URL;
const nuxtRobots = JSON.parse(
  import.meta.env.NUXT_ROBOTS?.replace(/'/g, '"') ||
  JSON.stringify({ Disallow: ' / ' }),
);


let robotsRules = {};
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
if (!isDev) {
  const sentryAuthToken = import.meta.env.SENTRY_AUTH_TOKEN;
  const sentryOrg = import.meta.env.SENTRY_ORG;
  const sentryProject = import.meta.env.SENTRY_PROJECT;
  const sentryUrl = import.meta.env.SENTRY_URL;

  if (sentryAuthToken && sentryOrg && sentryProject && sentryUrl) {
    vitePlugins.push(
      sentryVitePlugin({
        authToken: sentryAuthToken,
        org: sentryOrg,
        project: sentryProject,
        url: sentryUrl,
      }),
    );
  }
}

const routeRules = {
  // Cache
  // '/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
  // No-ssr
  // '/profile/**': { ssr: false },
};
if (isDev) {
  routeRules[`/${API_PREFIX}/**`] = {
    proxy: `${clientUrl}/${API_PREFIX}/**`,
  };
  // routeRules[`/${STORAGE_PREFIX}/**`] = {
  //   proxy: `${clientUrl}/${STORAGE_PREFIX}/**`,
  // };
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: ['@/components', { path: '@/components/common', prefix: 'C' }],
  runtimeConfig: {
    serverUrl,
    public: {
      isDev,
      clientUrl,
      gtmID: import.meta.env.GTM_ID,
      sentry: {
        dsn: import.meta.env.SENTRY_DSN,
        environment: import.meta.env.SENTRY_ENVIRONMENT,
      },
    },
  },
  app: {
    head: {
      title: 'Nuxt 3 Boilerplate',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      htmlAttrs: { lang: 'en' },
      // meta: [{ name: 'theme-color', content: '#FFFFFF' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '@pinia/nuxt',
    // '@nuxtjs/i18n',
    // '@nuxtjs/device',
    '@nuxtjs/robots',
    // '@nuxt/image',
    'nuxt-svgo',
    // 'nuxt-delay-hydration',
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
