import scrollLock from 'scroll-lock';
const {
  disablePageScroll,
  enablePageScroll,
  refillGaps,
  getPageScrollBarWidth,
} = scrollLock;

/**
 * Scroll lock integration
 * @description Fill gap for fixed elements: [data-scroll-lock-fill-gap]
 * @description Allow scroll for elements: [data-scroll-lock-scrollable]
 * @example
 * const scrollLock = useScrollLock();
 * scrollLock.lock();
 * @returns {{lock: function, unlock: function, fillGaps: function, getScrollBarWidth: function}}
 */
export const useScrollLock = () => {
  return {
    lock: disablePageScroll,
    unlock: enablePageScroll,

    fillGaps: refillGaps,
    getScrollBarWidth: getPageScrollBarWidth,
  };
};
