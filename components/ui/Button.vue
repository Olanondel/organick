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
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },

  theme: {
    type: String,
    default: 'default',
  },
});

const emit = defineEmits(['click']);

const emitClick = (event) => {
  emit('click', event);
};
</script>

<template>
  <CLinkTag
    class="ui-button"
    :class="{
      [`ui-button--theme--${theme}`]: theme,
      'ui-button--disabled': isDisabled,
    }"
    :type="type"
    :to="to"
    :href="href"
    :target="target"
    :aria-label="text"
    :tabindex="isDisabled ? -1 : 0"
    @click="emitClick"
  >
    <span class="ui-button__font">
      <slot />
    </span>

    <span v-if="hasIcon" class="ui-button__wrapper ui-button__wrapper--icon">
      <img src="/icons/arrow-right.svg" alt="" class="ui-button__icon" />
    </span>
  </CLinkTag>
</template>

<style scoped lang="scss">
.ui-button {
  $parent: &;

  border-radius: em(16);
  padding: em(28) em(39) em(29);
  display: inline-flex;
  align-items: center;
  gap: em(10);
  flex-shrink: 0;

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
