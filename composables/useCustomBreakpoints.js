import { useBreakpoints } from '@vueuse/core';

/**
 * Get css bootstrap-like breakpoints in js
 * @returns {{greaterOrEqual: function, smallerOrEqual: function, greater: function, smaller: function, between: function, isGreater: function, isGreaterOrEqual: function, isSmaller: function, isSmallerOrEqual: function, isInBetween: function}} breakpoint methods object
 * @example
 * const breakpoint = useCustomBreakpoints();
 * const isSmBreakpoint = breakpoint.smaller('sm');
 * @see https://vueuse.org/useBreakpoints
 */
export const useCustomBreakpoints = () => {
  return useBreakpoints({
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1600,
    xxl: 1920,
  });
};
