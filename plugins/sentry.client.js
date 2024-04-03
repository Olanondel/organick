import { defineNuxtPlugin, useRuntimeConfig, useRouter } from 'nuxt/app';

import * as Sentry from '@sentry/vue';

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
