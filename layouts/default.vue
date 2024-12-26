<template>
  <div class="layouts-default" :class="className">
    <LayoutHeader />

    <slot class-name="layouts-default__view" />

    <LayoutFooter />
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: undefined,
  },
});
</script>

<style scoped lang="scss">
.layouts-default {
  $parent: &;

  display: flex;
  flex-direction: column;

  &:deep(#{$parent}__view) {
    flex-grow: 1;
  }
}
</style>
