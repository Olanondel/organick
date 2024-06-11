<script setup>
/**
 * Icons folder: '/assets/icons'
 * @example
 * <CIcon name="icon-path/icon-name">
 * @see https://github.com/cpsoinos/nuxt-svgo
 */

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = computed(() => {
  return `svgo-${props.name.split('/').join('-')}`;
});
</script>

<template>
  <component :is="icon" />
</template>
