import qs from 'qs';
import { API_PREFIX, API_VERSIONS } from '@/constants/variables';

let fetchInstance;

/**
 * Fetch data from backend api
 * @description Use it in store actions
 * @description Use store actions in useAsyncData
 * @description Provide SERVER_URL and CLIENT_URL env variables
 * @param {string} url request url after api prefix
 * @param {object} [options] request options (query, body, headers etc.)
 * @param {string} [apiVersion] api url version prefix e.g. 'v1'
 * @returns {Promise<any>} request promise
 * @example
 * useRequest('/route').then((data) => console.log(data));
 * @see https://nuxt.com/docs/api/utils/dollarfetch
 * @see https://nuxt.com/docs/api/composables/use-async-data
 * @see https://pinia.vuejs.org/ssr/nuxt.html
 */
export const useRequest = (url, options = {}, apiVersion = API_VERSIONS.v1) => {
  // creating instance only if it doesn't exist
  if (!fetchInstance) {
    const {
      app: { baseURL },
      public: { isDev, clientUrl },
    } = useRuntimeConfig();

    // configuring url
    let baseUrl = baseURL === '/' ? '' : baseURL;

    if (import.meta.server) {
      // server url
      const { serverUrl } = useRuntimeConfig();
      baseUrl = serverUrl;
    } else if (!isDev) {
      // client url only on prod (proxy for dev)
      baseUrl = clientUrl;
    }

    fetchInstance = $fetch.create({
      baseURL: `${baseUrl}/${API_PREFIX}`,
    });
  }

  // stringify query
  if (options.query) {
    url = `${url}?${qs.stringify(options.query)}`;

    options.query = undefined;
  }

  return fetchInstance(`/${apiVersion}${url}`, options);
};
