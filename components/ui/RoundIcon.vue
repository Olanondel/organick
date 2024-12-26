<script setup>
defineProps({
  href: {
    type: String,
    default: undefined,
  },

  ariaLabel: {
    type: String,
    default: undefined,
  },

  iconPath: {
    type: String,
    default: '/icons/social/inst.svg',
  },
});
</script>

<template>
  <div class="round-icon" :class="{ 'round-icon--hovered': href }">
    <img :src="iconPath" alt="" class="round-icon__icon" />

    <a
      v-if="href"
      :href="href"
      target="_blank"
      :aria-label="ariaLabel"
      class="round-icon__link"
    />
  </div>
</template>

<style scoped lang="scss">
.round-icon {
  @include box(em(60));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  background-color: $color-white-3;

  &__icon {
    width: em(19);
    height: em(19);
    position: relative;
  }

  &__link {
    position: absolute;
    inset: 0;
  }

  &--hovered {
    @include hover-active-focus() {
      background-color: darken($color-white-3, 8%);
    }
  }
}
</style>
