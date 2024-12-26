<script setup>
defineProps({
  hasIcon: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: 'button',
  },

  theme: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <button :type="type" :class="`button button--theme--${theme}`">
    <span class="button__font">
      <slot />
    </span>

    <span v-if="hasIcon" class="button__wrapper button__wrapper--icon">
      <img src="/icons/arrow-right.svg" alt="" class="button__icon" />
    </span>
  </button>
</template>

<style scoped lang="scss">
.button {
  $parent: &;

  border-radius: em(16);
  padding: em(28) em(39) em(29);
  display: flex;
  align-items: center;
  gap: em(10);

  &__font {
    font-family: $font-family-roboto;
    font-weight: $font-weight-bold;
    font-size: em(20);
    line-height: em(23, 20);
  }

  &__wrapper {
    &--icon {
      @include box(em(19));
      background-color: #335b6b;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all $time-slow ease;
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
  }

  @include hover-active-focus {
    #{$parent} {
      &__wrapper {
        &--icon {
          transform: translateX(em(16));
        }
      }
    }
  }

  &--theme {
    &--default {
      background-color: $color-blue-1;
      color: $color-white;

      @include hover {
        background-color: lighten($color-blue-1, 5%);
      }
    }

    &--yellow {
      background-color: $color-yellow-1;
      color: $color-blue-1;

      @include hover {
        background-color: lighten($color-yellow-1, 5%);
      }
    }

    &--transparent {
      background-color: transparent;
      color: $color-blue-1;
      border: 1px solid $color-blue-1;
    }
  }
}
</style>
