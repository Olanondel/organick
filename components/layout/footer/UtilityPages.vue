<script setup></script>

<template>
  <div class="footer-utility">
    <h3 class="footer-utility__title">
      <span class="footer-utility__font footer-utility__font--title">
        Utility Pages
      </span>
    </h3>

    <ul class="footer-utility__list">
      <li v-for="num in 5" :key="num" class="footer-utility__item">
        <NuxtLink to="/" class="footer-utility__link">
          <span class="footer-utility__font footer-utility__font--link">
            Style Guide {{ num }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-utility {
  &__title {
    color: $color-blue-1;
    margin-bottom: em(32);
  }

  &__font {
    &--title {
      font-family: $font-family-roboto;
      font-size: em(30);
      line-height: em(35, 30);
      font-weight: $font-weight-bold;
    }

    &--link {
      font-size: em(18);
      line-height: 1.65;
    }
  }

  &__list {
  }

  &__item {
    & + & {
      margin-top: em(30);
    }
  }

  &__link {
  }
}
</style>
