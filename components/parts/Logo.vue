<script setup></script>

<template>
  <NuxtLink to="/" class="logo">
    <img
      src="/icons/logo.svg"
      alt="Organick logo"
      class="logo__image logo__image--logo"
    />

    <span class="logo__font logo__font--logo">Organick</span>
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  $parent: &;

  display: flex;
  align-items: center;
  gap: em(8);
  color: $color-blue-1;

  @include hover-active-focus {
    color: $color-green-1;

    #{$parent} {
      &__image {
        &--logo {
          transform: rotate(40deg);
        }
      }
    }
  }

  &__image {
    &--logo {
      width: em(36);
      height: em(54);
      transform-origin: bottom;
      transition: all $time-slow ease;
    }
  }

  &__font {
    &--logo {
      font-size: em(38);
      line-height: em(45, 38);
      font-weight: $font-weight-bold;
    }
  }
}
</style>
