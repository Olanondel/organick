<script setup>
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
