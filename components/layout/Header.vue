<script setup></script>

<template>
  <header class="header">
    <div class="container container--xl">
      <div class="header__content">
        <div class="header__part header__part--left">
          <PartsLogo />

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
}
</style>
