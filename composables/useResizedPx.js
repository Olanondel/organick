import { ref, onMounted, watch, isRef } from 'vue';
import { useEventListener } from '@vueuse/core';

import { toResizedPx } from '@/utils/helpers';

export const useResizedPx = (pxValue = 0, contextElement = '#app') => {
  const resizedPxValue = ref(pxValue);

  const isElementRef = isRef(contextElement);

  function setResizedPxValue() {
    const element = isElementRef ? contextElement.value : contextElement;

    resizedPxValue.value = toResizedPx(pxValue, element || undefined);
  }

  onMounted(() => {
    setResizedPxValue();
    useEventListener(window, 'resize', setResizedPxValue);
  });

  if (isElementRef) {
    watch(contextElement, setResizedPxValue);
  }

  return resizedPxValue;
};
