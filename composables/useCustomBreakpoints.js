import { useBreakpoints } from '@vueuse/core';

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
