<script setup>
const items = [
  { title: 'Organic Juice', image: '/images/gallery/juice.jpg' },
  { title: 'Organic Food', image: '/images/gallery/food.jpg' },
  { title: 'Nuts Cookis', image: '/images/gallery/cookis.jpg' },
];
</script>

<template>
  <div class="section-gallery">
    <CardGallery v-for="(item, index) in items" :key="index" v-bind="item" />
  </div>
</template>

<style scoped lang="scss">
.section-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: em(42);
  background-color: #f1f8f4;
  padding: em(187) 0;
}
</style>
