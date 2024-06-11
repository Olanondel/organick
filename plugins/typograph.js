import Typograf from 'typograf';

/**
 * Typograf integration
 * @description Fix word wraps and other common typos
 */
export default defineNuxtPlugin({
  parallel: true,
  setup() {
    // nuxtApp
    const Tp = new Typograf({ locale: ['ru', 'en-US'] });

    // nuxtApp.vueApp.directive('typograph', {
    //   mounted: (el) => {
    //     el.innerHTML = Tp.execute(el.innerHTML);
    //   },
    // });

    return { provide: { tp: (text) => Tp.execute(text) } };
  },
});
