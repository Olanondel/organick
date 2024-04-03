import { defineNuxtPlugin } from 'nuxt/app';

import { createVfm } from 'vue-final-modal';

export default defineNuxtPlugin({
  parallel: true,
  setup(nuxtApp) {
    const vfm = createVfm();

    nuxtApp.vueApp.use(vfm);
  },
});
