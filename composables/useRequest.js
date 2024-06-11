import qs from 'qs';

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
export const useRequest = (url, options = {}, apiVersion = 'v1') => {
  // creating instance only if it doesn't exist
  if (!fetchInstance) {
    const {
      app: { baseURL },
      serverUrl,
      public: { isDev, clientUrl },
    } = useRuntimeConfig();

    // configuring url
    const apiPrefix = 'api';

    let baseUrl = baseURL;

    switch (true) {
      case process.server:
        // server url
        baseUrl = serverUrl;
        break;
      case !isDev:
        // client url only on prod (proxy for dev)
        baseUrl = clientUrl;
        break;
    }

    fetchInstance = $fetch.create({
      baseURL: `${baseUrl}${apiPrefix}`,
    });
  }

  // stringify query
  if (options.query) {
    url = `${url}?${qs.stringify(options.query)}`;

    options.query = undefined;
  }

  return fetchInstance(`${apiVersion}${url}`, options);
};
