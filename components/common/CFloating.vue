<script setup>
/**
 * @see https://floating-ui.com/docs/vue
 */
import { useFloating, offset, shift, autoUpdate } from '@floating-ui/vue';

const props = defineProps({
  referenceRef: {
    type: [Object, null],
    required: true,
  },
  position: {
    type: String,
    default: 'bottom-start',
  },
  gap: {
    type: Number,
    default: 0,
  },
  padding: {
    type: Number,
    default: 0,
  },
});

const referenceElement = computed(() => props.referenceRef);
const rootRef = ref(null);

// init floating plugin
const { floatingStyles } = useFloating(referenceElement, rootRef, {
  placement: props.position,
  middleware: [offset(props.gap), shift({ padding: props.padding })],
  whileElementsMounted: autoUpdate,
});
</script>

<template>
  <div ref="rootRef" :style="floatingStyles">
    <slot />
  </div>
</template>
