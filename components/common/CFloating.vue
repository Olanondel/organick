<script setup>
import {
  useFloating,
  offset,
  shift,
  autoUpdate,
  // limitShift,
} from '@floating-ui/vue';

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
});

const referenceElement = computed(() => props.referenceRef);
const rootRef = ref(null);

// init floating plugin
const { floatingStyles } = useFloating(referenceElement, rootRef, {
  placement: props.position,
  middleware: [
    offset(() => props.gap),
    shift({
      // TODO: not working in @floating-ui/vue
      // limiter: limitShift({ offset: () => props.gap }),
    }),
  ],
  whileElementsMounted: autoUpdate,
});
</script>

<template>
  <div ref="rootRef" :style="floatingStyles">
    <slot />
  </div>
</template>
