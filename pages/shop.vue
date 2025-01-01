<script setup>
definePageMeta({
  pageHeader: {
    title: 'Shop',
    image: '/images/page-header/shop/image.jpg',
  },
});

import { products } from '@/configs/products';
</script>

<template>
  <div class="pages-shop">
    <div class="container container--md">
      <ul class="pages-shop__cards">
        <li v-for="(product, index) in products" :key="index">
          <CardProduct class="pages-shop__card" v-bind="product" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pages-shop {
  padding: em(91) 0 em(140);

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: em(40) em(20);
  }

  &__card {
  }
}
</style>
