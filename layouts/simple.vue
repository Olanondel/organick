<template>
  <div class="layouts-simple" :class="className">
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
.layouts-simple {
  $parent: &;

  display: flex;
  flex-direction: column;

  &:deep(#{$parent}__view) {
    flex-grow: 1;
  }

  &__newsletter {
    margin-bottom: em(117);
  }
}
</style>
