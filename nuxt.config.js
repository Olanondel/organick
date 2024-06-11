import { defineNuxtConfig } from 'nuxt/config';

import { sentryVitePlugin } from '@sentry/vite-plugin';
// import { getFontsPreloadList } from './utils/helpers.js';

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

// const fontsToPreload = getFontsPreloadList([
//   {
//     path: 'font-name/FontName-',
//     weights: ['Light', 'Bold'],
//   },
// ]);

const vitePlugins = [];
if (!isDev) {
  const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN;
  const sentryOrg = process.env.SENTRY_ORG;
  const sentryProject = process.env.SENTRY_PROJECT;
  const sentryUrl = process.env.SENTRY_URL;

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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { autoImport: false }, // disable auto imports
  components: { dirs: [] }, // disable auto imports
  runtimeConfig: {
    serverUrl,
    public: {
      isDev,
      clientUrl,
      gtmID: process.env.GTM_ID,
      sentry: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.SENTRY_ENVIRONMENT,
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
  routeRules: {
    // Proxy
    '/api/**': { proxy: `${clientUrl}api/**` },
    '/storage/**': { proxy: `${clientUrl}storage/**` },
    // Cache
    // '/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
    // No-ssr
    // '/profile/**': { ssr: false },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    // '@nuxtjs/i18n',
    // '@nuxtjs/device',
    '@nuxtjs/robots',
    'nuxt-svgo',
    // 'nuxt-delay-hydration',
  ],
  eslint: { lintOnStart: false },
  pinia: { storesDirs: [] }, // disable auto imports
  robots: { rules: robotsRules },
  svgo: { defaultImport: 'component', explicitImportsOnly: true },
  // delayHydration: { debug: process.env.DELAY_HYDRATION_DEBUG, mode: 'mount' },
  features: { inlineStyles: false },
});
