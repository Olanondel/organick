import { defineNuxtPlugin } from 'nuxt/app';

import scrollLock from 'scroll-lock';
const {
  disablePageScroll,
  enablePageScroll,
  refillGaps,
  getPageScrollBarWidth,
} = scrollLock;

// TODO: composable

/**
 * Scroll lock integration
 * @description Fill gap for fixed elements: [data-scroll-lock-fill-gap]
 * @description Allow scroll for elements: [data-scroll-lock-scrollable]
 */
export default defineNuxtPlugin({
  parallel: true,
  setup() {
    const scrollLock = {
      lock: disablePageScroll,
      unlock: enablePageScroll,

      fillGaps: refillGaps,
      scrollBarWidth: getPageScrollBarWidth(),
    };

    return { provide: { scrollLock } };
  },
});
