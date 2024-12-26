<script setup>
const navigation = [
  { href: '/', text: 'Home' },
  { href: '/About', text: 'About' },
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
        <NuxtLink :to="item.href" class="navigation__link">
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
  }

  &__font {
    &--item {
    }
  }
}
</style>
