<script setup>
const navigation = [
  { href: '/', text: 'Home' },
  { href: '/experts', text: 'Experts' },
  { href: '/Pages', text: 'Pages' },
  { href: '/Shop', text: 'Shop' },
  { href: '/Projects', text: 'Projects' },
  { href: '/News', text: 'News' },
];
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="(item, index) in navigation"
        :key="index"
        class="navigation__item"
      >
        <NuxtLink
          :to="item.href"
          class="navigation__link"
          exact-active-class="navigation__link--active"
        >
          <span class="navigation__font navigation__font--item">
            {{ item.text }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  &__list {
    display: flex;
    gap: em(50);
  }

  &__item {
  }

  &__link {
    color: $color-blue-1;

    @include hover() {
      text-decoration: underline;
    }

    &--active {
      text-decoration: underline;
      color: $color-green-1;
    }
  }

  &__font {
    &--item {
      font-size: em(20);
      line-height: em(23, 20);
      font-weight: $font-weight-bold;
    }
  }
}
</style>
