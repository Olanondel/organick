<script setup>
import { products } from '@/configs/products';
</script>

<template>
  <div class="section-offer-organic">
    <div class="container container--md">
      <div class="section-offer-organic__head">
        <PartsHead
          subtitle="Offer"
          title="We Offer Organic For You"
          theme="white"
        />

        <UiButton to="/shop" theme="yellow" has-icon>View All Product</UiButton>
      </div>

      <div class="section-offer-organic__cards">
        <CardProduct
          v-for="(product, index) in products.slice(0, 4)"
          :key="index"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-offer-organic {
  background-color: $color-blue-1;
  padding: em(200) 0;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: em(50);
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: em(20);
  }
}
</style>
