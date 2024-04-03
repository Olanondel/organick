import { useRuntimeConfig } from 'nuxt/app';

import qs from 'qs';

let fetchInstance;

export const useRequest = (url, options = {}, apiVersion = 'v1') => {
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

  if (options.query) {
    url = `${url}?${qs.stringify(options.query)}`;

    options.query = undefined;
  }

  return fetchInstance(`${apiVersion}${url}`, options);
};
