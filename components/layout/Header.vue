<script setup></script>

<template>
  <header class="header">
    <div class="container container--xl">
      <div class="header__content">
        <div class="header__part header__part--left">
          <NuxtLink to="/" class="header__logo">
            <img
              src="/icons/logo.svg"
              alt="Organick logo"
              class="header__image header__image--logo"
            />

            <span class="header__font header__font--logo">Organick</span>
          </NuxtLink>

          <LayoutNavigation />
        </div>

        <div class="header__part header__part--right">
          <input type="text" />

          <UiButtonCart class="header__button header__button--cart" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  $parent: &;

  padding: em(69) 0;
  background-color: $color-white-2;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__part {
    &--left {
      display: flex;
      align-items: center;
      gap: em(150);
    }

    &--right {
      display: flex;
      align-items: center;
    }
  }

  &__logo {
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

  &__button {
    &--cart {
    }
  }
}
</style>
