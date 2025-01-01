<script setup>
const offers = [
  { title: 'Spicy', image: '/images/sections/about-us/offer/spicy@2x.webp' },
  {
    title: 'Nuts & Feesd',
    image: '/images/sections/about-us/offer/nuts@2x.webp',
  },
  { title: 'Fruits', image: '/images/sections/about-us/offer/fruits@2x.webp' },
  {
    title: 'Vegetable',
    image: '/images/sections/about-us/offer/vegetable@2x.webp',
  },
];
</script>

<template>
  <div class="section-offer">
    <div class="container container--md">
      <div class="section-offer__content">
        <PartsHead
          subtitle="About Us"
          title="What We Offer for You"
          class="section-offer__head"
          theme="white"
        />

        <div class="section-offer__cards">
          <CardOfferSimple
            v-for="(item, index) in offers"
            :key="index"
            class="section-offer__card"
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-offer {
  background-color: $color-blue-1;
  padding: em(188) 0;

  &__head {
    text-align: center;
    margin-bottom: em(33);
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: em(21);
  }
}
</style>
