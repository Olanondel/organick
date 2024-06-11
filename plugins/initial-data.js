import { defineNuxtPlugin } from 'nuxt/app';

/**
 * Make initial requests for common data
 * @description Renamed from 'initial-data.server.js' due to plugin not start in pages with routeRules: 'ssr: false'
 * @description Check for flag in stores to avoid unnecessary requests on client e.g. 'isFetched'
 * @example
 * if (!store.data.isFetched) {
 *   requests.push(store.fetchData());
 * }
 */
export default defineNuxtPlugin({
  parallel: true,
  async setup() {
    const requests = [];

    await Promise.all(requests);
  },
});
