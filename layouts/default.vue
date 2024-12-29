<template>
  <div class="layouts-default" :class="className">
    <LayoutHeader />

    <LayoutPageHeader />

    <slot class-name="layouts-default__view" />

    <SectionNewsletter class="layouts-default__newsletter" />

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

  &__newsletter {
    margin-bottom: em(117);
  }
}
</style>
