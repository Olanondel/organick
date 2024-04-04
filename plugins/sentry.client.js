import { defineNuxtPlugin, useRuntimeConfig, useRouter } from 'nuxt/app';

import * as Sentry from '@sentry/vue';

/**
 * Sentry integration
 * @description Log browser errors to sentry server
 * @description Provide SENTRY_DNS and SENTRY_ENVIRONMENT env variables
 */
export default defineNuxtPlugin({
  parallel: true,
  setup() {
    const {
      public: { sentryDns, sentryEnvironment },
    } = useRuntimeConfig();

    if (!sentryDns) return;

    const router = useRouter();

    Sentry.init({
      dsn: sentryDns,
      environment: sentryEnvironment,
      integrations: [Sentry.browserTracingIntegration({ router })],
      tracesSampleRate: 1,
    });
  },
});
