<template>
  <component :is="component" v-bind="props">
    <slot />
  </component>
</template>

<script setup>
import { NuxtLink } from '#components';

const initialProps = defineProps({
  to: {
    type: [String, Boolean],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
  isStaticByDefault: {
    type: Boolean,
    default: false,
  },
  staticTag: {
    type: String,
    default: 'div',
  },
  type: {
    type: String,
    default: undefined,
  },
  ariaLabel: {
    type: String,
    default: '',
  },
  ariaLabelledby: {
    type: String,
    default: '',
  },
});

const component = computed(() => {
  switch (true) {
    case !!initialProps.href:
      return 'a';
    case !!initialProps.to:
      return NuxtLink;
    case initialProps.isStaticByDefault:
      return initialProps.staticTag;
    default:
      return 'button';
  }
});

const props = computed(() => {
  const props = {};

  switch (component.value) {
    case 'a':
      props.href = initialProps.href;
      props.target = '_blank';
      props.rel = 'nofollow';
      props.tabindex = 0;
      props['aria-label'] = initialProps.ariaLabel;
      props.title = initialProps.ariaLabel;

      if (initialProps.target) props.target = initialProps.target;

      break;
    case NuxtLink:
      props.to = initialProps.to;
      props.tabindex = 0;
      props['aria-label'] = initialProps.ariaLabel;
      props.title = initialProps.ariaLabel;

      if (initialProps.target) props.target = initialProps.target;

      break;
    case 'button':
      props.type = initialProps.type;
      props.tabindex = 0;
      props['aria-labelledby'] = initialProps.ariaLabelledby;
      props['aria-label'] = initialProps.ariaLabel;

      break;
  }

  return props;
});
</script>
