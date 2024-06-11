import { defineNuxtPlugin, useRuntimeConfig, useRouter } from 'nuxt/app';

import * as Sentry from '@sentry/vue';

/**
 * Sentry integration
 * @description Log browser errors to sentry server
 * @description Provide SENTRY_DSN and SENTRY_ENVIRONMENT env variables
 * @see https://docs.sentry.io/platforms/javascript/guides/vue/
 * @see https://www.lichter.io/articles/nuxt3-sentry-recipe/
 * @see https://docs.sentry.io/platforms/javascript/guides/vue/sourcemaps/
 */
export default defineNuxtPlugin({
  parallel: true,
  setup(nuxtApp) {
    const {
      public: {
        sentry: { dsn, environment },
      },
    } = useRuntimeConfig();

    if (!dsn) return;

    const router = useRouter();

    Sentry.init({
      app: nuxtApp.vueApp,
      dsn,
      environment,
      integrations: [Sentry.browserTracingIntegration({ router })],
      tracesSampleRate: 1,
    });
  },
});
