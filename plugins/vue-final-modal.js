import { createVfm } from 'vue-final-modal';

/**
 * Vue Final Modal integration
 * @example
 * const modal = useModal({
 *   component: resolveComponent('LazyModalComponent')
 * });
 * onMounted(() => modal.open());
 * @see https://vue-final-modal.org/
 */
export default defineNuxtPlugin({
  parallel: true,
  setup(nuxtApp) {
    const vfm = createVfm();

    nuxtApp.vueApp.use(vfm);
  },
});
