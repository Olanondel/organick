<script setup></script>

<template>
  <div class="footer-organic">
    <PartsLogo class="footer-organic__logo" />

    <p class="footer-organic__text">
      <span class="footer-organic__font footer-organic__font--text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing
      </span>
    </p>

    <ul class="footer-organic__social">
      <li class="footer-organic__item footer-organic__item--social">
        <UiRoundIcon href="google.com" />
      </li>

      <li class="footer-organic__item footer-organic__item--social">
        <UiRoundIcon href="google.com" icon-path="/icons/social/fb.svg" />
      </li>

      <li class="footer-organic__item footer-organic__item--social">
        <UiRoundIcon href="google.com" icon-path="/icons/social/twitter.svg" />
      </li>

      <li class="footer-organic__item footer-organic__item--social">
        <UiRoundIcon href="google.com" icon-path="/icons/social/pintrest.svg" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-organic {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: em(543);
  text-align: center;

  &__logo {
    margin-bottom: em(23);
  }

  &__text {
    margin-bottom: em(49);
    color: $color-grey-1;
  }

  &__font {
    &--text {
      font-size: em(18);
      line-height: 1.65;
    }
  }

  &__social {
    display: flex;
    gap: em(15);
    justify-content: center;
  }

  &__item {
    &--social {
    }
  }
}
</style>
