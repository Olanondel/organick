import { useBreakpoints } from '@vueuse/core';

/**
 * Get css bootstrap-like breakpoints in js
 * @returns {object} breakpoint object with methods: greaterOrEqual, smallerOrEqual, greater, smaller, between, isGreater, isGreaterOrEqual, isSmaller, isSmallerOrEqual, isInBetween
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
