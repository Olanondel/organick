function handle(to, from, savedPosition) {
  if (savedPosition) return savedPosition;

  if (to.hash) {
    return { el: to.hash };
  }

  return { top: 0 };
}

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default {
  scrollBehavior(to, from, savedPosition) {
    if (to.path === from?.path) {
      return handle(to, from, savedPosition);
    } else {
      return new Promise((resolve) => {
        const nuxtApp = useNuxtApp();

        nuxtApp.hooks.hookOnce('page:finish', () => {
          resolve(handle(to, from, savedPosition));
        });
      });
    }
  },
};
