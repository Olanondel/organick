<script setup>
import { products } from '@/configs/products';
</script>

<template>
  <section class="section-products">
    <div class="container container--md">
      <div class="section-products__content">
        <PartsHead
          subtitle="Categories"
          title="Our Products"
          class="section-products__head"
        />

        <div class="section-products__cards">
          <CardProduct
            v-for="(product, index) in products"
            :key="index"
            class="section-products__card"
            v-bind="product"
          />
        </div>

        <UiButton has-icon class="section-products__button">Load More</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-products {
  padding: em(176) 0 em(200);

  &__head {
    text-align: center;
    margin-bottom: em(40);
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: em(20);
    margin-bottom: em(122);
  }

  &__button {
    margin: 0 auto;
  }
}
</style>
