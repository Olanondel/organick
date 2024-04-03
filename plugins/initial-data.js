import { defineNuxtPlugin } from 'nuxt/app';

// * renamed from 'initial-data.server.js' due to plugin not start in pages with routeRules: 'ssr: false'
// * check for 'isFetched' flag in stores to avoid unnecessary requests on client

export default defineNuxtPlugin({
  parallel: true,
  async setup() {
    const requests = [];

    await Promise.all(requests);
  },
});
